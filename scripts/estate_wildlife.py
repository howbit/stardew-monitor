"""Export the walkable spring estate and its original game animation sheets."""

import json
from PIL import Image

from compose_native_farm import asset, cut, rooted, stamp


# Coordinates are feet on the game's pixel grid. Each closed trail stays on a
# clear aisle, pasture, or open water (including room for the duck and its wake).
HERD = [
    ("cat", "橘猫", 17, [(665, 173), (636, 178), (597, 181), (569, 169), (547, 167),
                         (534, 180), (585, 184), (628, 184), (661, 180)]),
    ("White Cow", "白牛", 11, [(1347, 158), (1347, 182), (1321, 208), (1290, 234),
                              (1260, 251), (1296, 237), (1322, 212), (1347, 180)]),
    ("Brown Cow", "棕牛", 10, [(1291, 313), (1309, 302), (1322, 278), (1304, 258),
                              (1282, 269), (1265, 296)]),
    ("Sheep", "绵羊", 11, [(1193, 338), (1202, 315), (1224, 302), (1235, 319), (1218, 339)]),
    ("Sheep", "绵羊", 9, [(1227, 382), (1211, 365), (1227, 351), (1249, 356), (1256, 377)]),
    ("BabyBrown Cow", "小牛", 13, [(1284, 366), (1306, 354), (1321, 345), (1328, 366),
                                 (1311, 382), (1290, 384)]),
    ("White Cow", "白牛", 10, [(1598, 275), (1584, 256), (1593, 238), (1614, 243),
                              (1630, 267), (1624, 296), (1607, 294)]),
    ("White Chicken", "白鸡", 14, [(1466, 159), (1466, 183), (1483, 199), (1491, 215),
                                 (1472, 220), (1459, 193)]),
    ("Brown Chicken", "褐鸡", 13, [(1558, 221), (1564, 207), (1553, 190), (1536, 198), (1539, 214)]),
    ("White Chicken", "白鸡", 12, [(1584, 203), (1596, 188), (1613, 192), (1612, 211), (1599, 218)]),
    ("Duck", "绿头鸭", 16, [(1420, 342), (1402, 328), (1409, 308), (1433, 304),
                           (1450, 318), (1455, 340), (1438, 350)]),
    ("Duck", "绿头鸭", 15, [(1463, 310), (1485, 326), (1513, 331), (1526, 325),
                           (1500, 315), (1480, 303), (1468, 292), (1457, 285), (1448, 296)]),
    ("dog", "农场犬", 20, [(706, 179), (738, 178), (767, 172), (790, 172),
                          (767, 182), (738, 185), (706, 183), (686, 176)]),
    ("horse", "栗色马", 13, [(979, 178), (1005, 178), (1044, 174), (1075, 177),
                            (1042, 183), (1005, 184), (969, 180), (945, 177)]),
]


class Atlas:
    def __init__(self):
        self.images = []
        self.indices = {}

    def add(self, image):
        key = (image.size, image.tobytes())
        if key not in self.indices:
            self.indices[key] = len(self.images)
            self.images.append(image)
        return self.indices[key]

    def save(self, path):
        boxes = []
        x = y = line_height = 0
        for image in self.images:
            w, h = image.size
            if x + w > 1024:
                x = 0
                y += line_height
                line_height = 0
            boxes.append([x, y, w, h])
            x += w
            line_height = max(line_height, h)
        output = Image.new("RGBA", (1024, y + line_height))
        for image, (x, y, _, _) in zip(self.images, boxes):
            output.paste(image, (x, y))
        output.save(path, optimize=True)
        return boxes


def water_rows(surface):
    # One contiguous span per scanline. Rocks, lilies and reflection pixels
    # inside a span are still water; the earthen bank is always outside.
    spans = []
    for y in range(surface.height):
        water = [x for x in range(surface.width) if
                 (lambda c: c[3] and c[2] > c[0] + 15)(surface.getpixel((x, y)))]
        spans.append([min(water), max(water)] if water else [])
    return spans


def still_scene(terrain, origin, props):
    ox, oy = origin
    for foot, x, sprite in sorted(props, key=lambda item: item[0]):
        rooted(terrain, sprite, ox + x, oy + foot)
    return terrain.convert("RGB")


def export_scene(directory, terrain, origin, props, pond_surface=None):
    atlas = Atlas()
    animals = HERD if pond_surface else [a for a in HERD if a[0] in ("cat", "dog", "horse")]
    sprites = {kind: atlas.add(asset(f"Animals/{kind}.png")) for kind, *_ in animals}
    effects = {}
    pond = None
    if pond_surface:
        water = [pond_surface(i) for i in range(4)]
        pond = {"x": 1328, "y": 224, "frames": [atlas.add(frame) for frame in water], "rows": water_rows(water[0])}
        for name, row, count in [("wake", 0, 8), ("bubble", 128, 4), ("splash", 832, 8)]:
            effects[name] = [atlas.add(cut("TileSheets/animations.png", i*64, row, 64, 64))
                             for i in range(count)]
        effects["swim"] = atlas.add(asset("LooseSprites/swimShadow.png"))
    base = terrain.copy()
    ox, oy = origin
    depth_props = []
    for foot, x, sprite in sorted(props, key=lambda item: item[0]):
        if 1168 <= x <= 1648 and foot > 200:
            depth_props.append([x, foot, atlas.add(sprite)])
        else:
            rooted(base, sprite, ox + x, oy + foot)
    base.convert("RGB").save(directory / "ground.png", optimize=True)
    manifest = {
        "origin": origin, "animals": animals, "sheets": sprites, "effects": effects, "plants": depth_props,
        "pond": pond,
    }
    manifest["boxes"] = atlas.save(directory / "sprites.png")
    (directory / "scene.json").write_text(json.dumps(manifest, ensure_ascii=False, separators=(",", ":")),
                                          encoding="utf-8")
    # First paint and the script-free fallback share the live scene's positions.
    posed = list(props)
    for kind, _, _, route in animals:
        x, y = route[0]
        size = 32 if kind == "horse" else asset(f"Animals/{kind}.png").width // 4
        row = 8 if kind == "Duck" else 1 if kind in ("cat", "dog", "horse") else 0
        posed.append((y, x, cut(f"Animals/{kind}.png", 0, row * size, size, size)))
    return still_scene(terrain, origin, posed)
