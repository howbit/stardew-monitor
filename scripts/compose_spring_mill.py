"""Build an original spring farm banner at the game's native pixel scale."""

import json
from functools import lru_cache
from random import Random
from xml.etree import ElementTree

from PIL import Image

from compose_native_farm import (
    ROOT, SIZE, SOURCE, asset, cut, grade, paint_crops, paint_rail,
    plant_tree, rooted, stamp,
)

OUTPUT = ROOT / "assets/landscape/native-spring-mill/spring-day.png"
OUTDOORS = "Maps/spring_outdoorsTileSheet.png"
EXTRA = "Maps/spring_outdoorsTileSheet2.png"

# NW, NE, SE and SW corners of each 16-pixel tile select a native grass/dirt transition.
EDGES = {
    0: (0, 7), 1: (3, 8), 2: (0, 8), 3: (1, 8), 4: (0, 10),
    6: (0, 9), 7: (2, 8), 8: (3, 10), 9: (3, 9), 11: (2, 7),
    12: (1, 10), 13: (3, 7), 14: (2, 10), 15: (1, 9),
}

@lru_cache(maxsize=None)
def tile(sheet, col, row):
    return cut(sheet, col * 16, row * 16, 16, 16)


@lru_cache(maxsize=None)
def pond_tiles(season="spring"):
    """Read the native meadowlands pond's bed and bank layers as one scenery element."""
    farm_map = ElementTree.parse(SOURCE / "Maps/Farm_Ranching.tmx")
    sets, water = [], set()
    for ts in farm_map.findall("tileset"):
        first = int(ts.get("firstgid"))
        sets.append((first, int(ts.get("columns")), "Maps/" + ts.find("image").get("source") + ".png"))
        water.update(first + int(t.get("id")) for t in ts.findall("tile")
                     if t.find("./properties/property[@name='Water']") is not None)
    layers = {}
    for name in ("Back", "Buildings"):
        layer = farm_map.find(f"./layer[@name='{name}']")
        width = int(layer.get("width"))
        layers[name] = [int(i) for i in layer.findtext("data").strip().split(",")]

    def texture(gid):
        first, cols, sheet = max(item for item in sets if item[0] <= gid)
        return tile(sheet.replace("Maps/spring_", f"Maps/{season}_"), (gid - first) % cols, (gid - first) // cols)

    pond = {}
    for y in range(41, 52):
        for x in range(30, 46):
            pos = y * width + x
            bed, rim = layers["Back"][pos], layers["Buildings"][pos]
            if bed in water or rim:
                pond[x + 5, y - 35] = (texture(bed), texture(rim) if rim else None)
    return pond


def on_lane(x, y, a, b, radius):
    dx, dy = b[0] - a[0], b[1] - a[1]
    t = max(0, min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / (dx * dx + dy * dy)))
    return (x - a[0] - t * dx) ** 2 + (y - a[1] - t * dy) ** 2 <= radius ** 2


def paint_terrain(farm, pond):
    rng = Random(17)
    earth = {(x + dx, y + dy) for x, y in pond for dx, dy in ((0, 0), (1, 0), (1, 1), (0, 1))}
    lane = [(268, 305), (278, 239), (286, 192), (362, 180), (420, 147),
            (509, 130), (580, 91), (647, 78), (713, 96), (785, 143)]
    for row in range(SIZE[1] // 16 + 1):
        for col in range(SIZE[0] // 16 + 1):
            x, y = col * 16, row * 16
            yard = ((x - 254) / 105) ** 2 + ((y - 191) / 67) ** 2 <= 1
            mill_yard = ((x - 790) / 48) ** 2 + ((y - 139) / 29) ** 2 <= 1
            if yard or mill_yard or any(on_lane(x, y, a, b, 13) for a, b in zip(lane, lane[1:])):
                earth.add((col, row))
    for row in range(SIZE[1] // 16):
        for col in range(SIZE[0] // 16):
            corners = [(col, row), (col + 1, row), (col + 1, row + 1), (col, row + 1)]
            index = sum(weight for weight, pt in zip((8, 4, 2, 1), corners) if pt in earth)
            if index in (5, 10):
                left, right = (1, 4) if index == 5 else (8, 2)
                ground = tile(OUTDOORS, *EDGES[left]).copy()
                stamp(ground, tile(OUTDOORS, *EDGES[right]).crop((8, 0, 16, 16)), 8, 0)
                stamp(farm, ground, col * 16, row * 16)
                continue
            if index == 15:
                variant = rng.choice(((1, 9), (2, 9), (1, 7), (3, 6), (1, 9), (1, 9), (1, 9)))
            elif index == 0:
                variant = rng.choice(((0, 7), (0, 7), (0, 7), (0, 6)))
            else:
                variant = EDGES[index]
            ground = tile(OUTDOORS, *variant)
            stamp(farm, ground, col * 16, row * 16)


def paint_water(farm, pond, *, ducks=True, wave_frame=0, outdoors=OUTDOORS):
    # The game draws a separate water surface between the bed and the bank.
    wave = cut("LooseSprites/Cursors.png", wave_frame * 64, 2064, 64, 64)
    wave.putalpha(wave.getchannel("A").point(lambda value: round(value * .36)))
    for (col, row), (bed, bank) in pond.items():
        x, y = col * 16, row * 16
        stamp(farm, bed, x, y)
        ix, iy = x % 64, y % 64
        wet = wave.crop((ix, iy, ix + 16, iy + 16))
        # The shallow-water tiles also contain dry sand on some corners.
        wet.putalpha(Image.frombytes("L", (16, 16), bytes(
            a if b > r and alpha else 0 for (r, _, b, alpha), a in
            zip(bed.getdata(), wet.getchannel("A").getdata())
        )))
        stamp(farm, wet, x, y)
        if bank:
            stamp(farm, bank, x, y)
    for col, row, x, y in [(18, 51, 616, 163), (19, 52, 629, 157),
                           (20, 51, 629, 170), (18, 52, 747, 226), (19, 51, 762, 222)]:
        stamp(farm, tile(outdoors, col, row), x, y)
    if ducks:
        for x, y, pose in [(687, 180, 2), (711, 189, 1)]:
            stamp(farm, cut("Animals/Duck.png", pose * 16, 128, 16, 16), x, y)


def tree_from_atlas(sheet, origin, bands):
    # Trunks share a packed atlas rectangle with doors and cave tiles.
    tree = Image.new("RGBA", (104, 112))
    for x1, y1, x2, y2 in bands:
        stamp(tree, cut(sheet, origin[0]+x1, origin[1]+y1, x2-x1, y2-y1), x1, y1)
    return tree.crop(tree.getbbox())


def mill():
    spec = json.loads((SOURCE / "Data/Buildings.json").read_text(encoding="utf-8-sig"))["Mill"]
    body = cut("Buildings/Mill.png", 0, 0, spec["SourceRect"]["Width"], spec["SourceRect"]["Height"])
    sails = next(layer for layer in spec["DrawLayers"] if layer["Id"] == "Default_WindSails")
    rect = sails["SourceRect"]
    frame = cut("Buildings/Mill.png", rect["X"], rect["Y"], rect["Width"], rect["Height"])
    stamp(body, frame, *map(int, sails["DrawPosition"].split(",")))
    return body


def compose():
    farm = Image.new("RGBA", SIZE)
    pond = pond_tiles()
    paint_terrain(farm, pond)
    # Keep the native grass detail, with gentler contrast on the large open lawn.
    grass_mask = Image.frombytes("L", SIZE, bytes(255 if g > r else 0
        for r, g, _, _ in farm.getdata()))
    farm = Image.composite(grade(farm, (.67, .72, .76), (42, 37, 22)), farm, grass_mask)
    paint_water(farm, pond)
    crops = json.loads((SOURCE / "Data/Crops.json").read_text(encoding="utf-8-sig"))
    paint_crops(farm, "spring", crops, origin=(208, 215))
    paint_rail(farm, OUTDOORS, 53, 101, 152)
    paint_rail(farm, OUTDOORS, 354, 402, 204)

    bloom = tree_from_atlas(OUTDOORS, (264, 0), [(0, 0, 80, 64), (22, 64, 56, 72),
        (24, 72, 54, 87), (23, 87, 56, 112)])
    oak = tree_from_atlas(EXTRA, (0, 112), [(0, 0, 104, 72), (14, 72, 79, 86),
        (31, 86, 79, 110)])
    large_bush = cut("TileSheets/bushes.png", 0, 3, 32, 44)
    props = []
    for kind, positions in (
        ("pine", [(-2, 57), (93, 39), (181, 32), (571, 20), (792, 37), (941, 70)]),
        ("oak", [(56, 61), (136, 42), (331, 30), (585, 45), (824, 31), (969, 111)]),
        ("maple", [(17, 74), (298, 36), (613, 29), (759, 31), (888, 60), (960, 66)]),
        ("cherry", [(133, 127), (408, 107), (886, 128)]),
    ):
        props.extend((y, x, plant_tree("spring", kind)) for x, y in positions)
    props.extend([
        (165, 45, oak), (147, 74, bloom), (122, 374, bloom), (92, 568, bloom),
        (175, 917, oak), (236, 17, plant_tree("spring", "maple")), (274, 935, bloom),
        (182, 226, cut("Buildings/houses.png", 0, 0, 160, 144)),
        (190, 297, asset("Buildings/Mailbox.png")), (178, 154, asset("Buildings/Shipping Bin.png")),
        (151, 792, mill()), (238, 185, cut("TileSheets/Craftables.png", 0, 32, 16, 32)),
        (168, 439, cut("TileSheets/Craftables.png", 32, 32, 16, 32)),
        (178, 458, cut("TileSheets/Craftables.png", 32, 32, 16, 32)),
        (205, 318, cut("Animals/cat.png", 0, 32, 32, 32)),
        (155, 481, tile("TileSheets/critters.png", 3, 9)),
        (174, 501, tile("TileSheets/critters.png", 8, 6)),
    ])

    # Patches of grass follow the orchard, field margins and pond shore in clumps.
    # Sprites share one depth order with the scenery, including the front edge.
    rng = Random(51)
    for cx, cy, rx, ry, count in [
        (63, 209, 44, 27, 31), (114, 250, 38, 22, 21), (361, 233, 16, 13, 10),
        (442, 194, 29, 15, 21), (479, 197, 22, 19, 15), (524, 166, 19, 13, 13),
        (560, 144, 15, 11, 10), (654, 278, 36, 11, 14), (858, 160, 24, 19, 16),
        (889, 210, 16, 16, 15), (889, 265, 26, 18, 18), (271, 73, 16, 9, 7),
    ]:
        for i in range(count):
            x = cx + round((rng.random() + rng.random() - 1) * rx)
            y = cy + round((rng.random() + rng.random() - 1) * ry)
            variant = rng.randrange(3)
            plant = cut("TerrainFeatures/grass.png", 15 * variant, 0, 15, 20)
            if i % 6 == 0:
                plant = tile(OUTDOORS, 7, rng.choice((10, 12)))
            props.append((y, x, plant))
    props.extend((y, x, large_bush) for x, y in [
        (14, 155), (102, 159), (138, 257), (389, 132), (535, 145),
        (578, 69), (859, 130), (915, 193), (958, 216), (877, 272),
    ])
    for x, y in [(87, 203), (122, 236), (395, 243), (848, 201)]:
        props.append((y, x, cut("TileSheets/bushes.png", 32, 0, 32, 48)))
    for y, x, sprite in sorted(props, key=lambda item: item[0]):
        rooted(farm, sprite, x, y)

    assert farm.getchannel("A").getextrema() == (255, 255)
    return grade(farm, (.91, .90, .90), (9, 12, 12)).convert("RGB")


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    compose().save(OUTPUT, optimize=True)
