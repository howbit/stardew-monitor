"""Assemble the spring farm plan on a 16-pixel grid from the unpacked game art."""

import json
from functools import lru_cache
from random import Random

from PIL import Image, ImageChops, ImageColor

from compose_native_farm import ROOT, SOURCE, SEASONS, asset, cut, plant_tree, rooted, stamp
from compose_spring_mill import EDGES, paint_water, pond_tiles, tile
from estate_wildlife import export_scene, still_scene
from estate_seasons import ambient_night, estate_night, footer_corner, season_bush, outdoors


COLS, ROWS = 108, 29
OUTPUT = ROOT / "assets/landscape/native-spring-estate/spring-day.png"
FLOOR = "TerrainFeatures/Flooring.png"
VEGETABLES = json.loads((SOURCE / "Data/Crops.json").read_text(encoding="utf-8-sig"))
BUILDINGS = json.loads((SOURCE / "Data/Buildings.json").read_text(encoding="utf-8-sig"))


# Berry plots, large crop, small crop, narrow strips, upper beds and apiary flowers.
PLANTINGS = {
    "spring": ("745", "474", "472", "473", "475", "427", ("#FF9EC1", "#FFF600")),
    "summer": ("481", "479", "480", "487", "482", "431", (None, None)),
    "fall": ("493", "490", "488", "301", "489", "425", ("#A87BCB", "#DC93AE")),
    "winter": ("PowdermelonSeeds", "498", "498", "885", None, None, (None, None)),
}


def rect(left, top, right, bottom):
    return {(x, y) for x in range(left, right) for y in range(top, bottom)}


def floor_tiles(scene, cells, atlas_origin, season):
    """Join native corner, border and middle tiles, including single-tile paths."""
    for x, y in cells:
        north, east, south, west = ((x + dx, y + dy) in cells for dx, dy in
                                    ((0, -1), (1, 0), (0, 1), (-1, 0)))
        col = 2 if west and east else 3 if west else 1 if east else 0
        if east or west:
            row = 1 if north and south else 2 if north else 0 if south else 3
        else:
            row = 2 if north and south else 3 if north else 1 if south else 0
        stamp(scene, tile("TerrainFeatures/Flooring_winter.png" if season == "winter" else FLOOR, atlas_origin[0] + col, atlas_origin[1] + row), x * 16, y * 16)


def pond_surface(frame, season):
    pond = Image.new("RGBA", (816, 272))
    paint_water(pond, pond_tiles(season), ducks=False, wave_frame=frame, outdoors=outdoors(season))
    return pond.crop((560, 96, 816, 272))


def ground(scene, season):
    rng = Random(31)
    shore = pond_tiles(season)
    dx, dy = 48, 8
    earth = {(x + dx + vx, y + dy + vy) for x, y in shore
             for vx, vy in ((0, 0), (1, 0), (0, 1), (1, 1))}
    earth |= rect(3, 12, 26, 27) | rect(28, 12, 69, 28)
    earth |= rect(4, 5, 20, 11) | rect(31, 5, 42, 11) | rect(74, 6, 99, 11)
    for y in range(ROWS):
        for x in range(COLS):
            corners = ((x, y), (x + 1, y), (x + 1, y + 1), (x, y + 1))
            mask = sum(bit for bit, point in zip((8, 4, 2, 1), corners) if point in earth)
            if mask == 0:
                source = rng.choice(((0, 7), (0, 7), (0, 6)))
            elif mask == 15:
                source = rng.choice(((1, 9), (2, 9), (1, 7), (3, 6)))
            else:
                source = EDGES[mask]
            stamp(scene, tile(outdoors(season), *source), x * 16, y * 16)

    stamp(scene, pond_surface(0, season), (35 + dx) * 16, (6 + dy) * 16)

    main = rect(2, 10, 71, 12) | rect(70, 11, 75, 12) | rect(2, 27, 105, 28)
    main |= rect(26, 0, 28, 28) | rect(69, 0, 71, 28)
    main |= rect(2, 6, 3, 28) | rect(104, 5, 105, 28) | rect(48, 7, 49, 28)
    floor_tiles(scene, main, (0, 12), season)
    floor_tiles(scene, rect(4, 13, 14, 26) | rect(15, 13, 25, 26), (8, 0), season)
    floor_tiles(scene, rect(30, 6, 41, 10) | rect(46, 7, 51, 10), (4, 0), season)
    floor_tiles(scene, rect(3, 5, 14, 10) | rect(15, 7, 21, 10), (8, 0), season)
    floor_tiles(scene, rect(59, 5, 67, 10), (4, 0), season)


def woodland_margin(terrain, season):
    """Continue the farm's tiles past the camera edge, retaining its world origin."""
    pad_x, pad_y = 256, 96
    w, h = terrain.size
    backing = Image.new("RGBA", (w + 2 * pad_x, h + 2 * pad_y))
    rng = Random(817)
    for y in range(-pad_y, h + pad_y, 16):
        for x in range(-pad_x, w + pad_x, 16):
            if 0 <= x < w and 0 <= y < h:
                continue
            stamp(backing, tile(outdoors(season), 0, rng.choice((6, 7, 7))), x + pad_x, y + pad_y)
    stamp(backing, terrain, pad_x, pad_y)
    # Only place new vegetation outside the existing artwork. Existing trees
    # at the map edge will get their full canopies when props are rendered.
    border_props = []
    for x0 in (-110, -62, w + 57, w + 109):
        for y0 in range(-4, h + 54, 70):
            x, y = x0 + rng.randint(-4, 4), y0 + rng.randint(-10, 10)
            kind = rng.choice(("oak", "maple", "pine", "cherry"))
            if x0 > w:
                border_props.append((y, x, plant_tree(season, kind)))
    for i in range(210):
        x, y = rng.randrange(-pad_x, w + pad_x), rng.randrange(-pad_y, h + pad_y)
        if -8 < x < w + 8 and 0 < y < h + 16:
            continue
        border_props.append((y, x, tile(outdoors(season), 7, rng.choice((10, 12)))))
    # Grow the terrain northwards without changing a tile or a prop inside the farm.
    north = 272
    expanded = Image.new("RGBA", (backing.width, backing.height + north - pad_y))
    forest = Random(642)
    for y in range(0, north - pad_y, 16):
        for x in range(0, backing.width, 16):
            stamp(expanded, tile(outdoors(season), 0, forest.choice((6, 7, 7))), x, y)
    stamp(expanded, backing, 0, north - pad_y)
    for row, foot in enumerate(range(-250, -22, 43)):
        for start in range(-pad_x, w + pad_x + 32, 39):
            x = start + (row % 2) * 19 + forest.randint(-9, 9)
            y = foot + forest.randint(-10, 10)
            # A tapering glade behind the song title, flanked by the two wooded shoulders.
            if abs(x - 776) < max(22, 125 + y * .42) or forest.random() < .13:
                continue
            kind = forest.choice(("oak", "oak", "maple", "pine"))
            border_props.append((y, x, plant_tree(season, kind)))
    return expanded, (pad_x, north), border_props + left_woodland(season)


def left_woodland(season):
    """Scatter grounded growth stages and debris along the unpaved western edge."""
    rng = Random(351)
    groves = [(-103, 104), (-50, 117), (2, 132), (-84, 168), (-37, 195), (10, 214),
              (-107, 251), (-51, 276), (-13, 298), (-82, 337), (10, 365),
              (-119, 395), (-56, 415), (-19, 448), (15, 479)]
    species = ["oak", "pine", "maple", "oak", "maple", "pine", "cherry"] * 2 + ["oak"]
    rng.shuffle(species)
    props = []
    for i, ((x, foot), kind) in enumerate(zip(groves, species)):
        if i in (1, 5, 9, 13):
            sprite = woodland_detail(season, rng.choice((1, 2, 3)), 0)
        else:
            sprite = plant_tree(season, kind)
        props.append((foot + rng.randint(-12, 12), x + rng.randint(-10, 10), sprite))

    for x, foot, species_id in [(-23, 162, 2), (-73, 229, 1), (7, 321, 3), (-91, 458, 2)]:
        props.append((foot, x, woodland_detail(season, species_id, 32)))
    for x, foot in [(-108, 136), (-37, 240), (-68, 306), (16, 261), (-107, 349),
                    (-38, 374), (9, 419), (-62, 467)]:
        stone = tile(outdoors(season), 7, 9) if season == "winter" else tile("Maps/springobjects.png", 343 % 24, 343 // 24)
        props.append((foot + rng.randint(-4, 4), x + rng.randint(-6, 6), stone))
    return props


def woodland_detail(season, species, x):
    if species == 3 and season == "summer":
        season = "spring"
    sprite = cut(f"TerrainFeatures/tree{species}_{season}.png", x, 96, 16, 32)
    bounds = sprite.getbbox()
    return sprite.crop(bounds) if bounds else sprite


@lru_cache(maxsize=None)
def crop_sprite(seed, tint=None, winter_fiber=False):
    info = VEGETABLES[seed]
    idx = info["SpriteIndex"]
    phase = len(info["DaysInPhase"]) + 1
    x, y = idx % 2 * 128 + phase * 16, idx // 2 * 32
    if winter_fiber:
        y += 32  # The next row of the crop sheet contains the icy winter fiber frames.
    body = cut("TileSheets/crops.png", x, y, 16, 32)
    if tint:
        petals = cut("TileSheets/crops.png", x + 16, y, 16, 32)
        colored = ImageChops.multiply(petals, Image.new("RGBA", petals.size, ImageColor.getrgb(tint) + (255,)))
        stamp(body, colored, 0, 0)
    return body


@lru_cache(maxsize=1)
def pressure_sprinkler():
    sheet = "Maps/springobjects.png"
    # The sprite after the nozzle's inventory icon (915) is its installed overlay.
    sprinkler = tile(sheet, 645 % 24, 645 // 24).copy()
    stamp(sprinkler, tile(sheet, 916 % 24, 916 // 24), 0, 0)
    return sprinkler


def garden_bed(scene, props, season, col, row, seed, width=5, height=5, sprinkler=True, tint=None):
    if seed is not None:
        assert season.title() in VEGETABLES[seed]["Seasons"]
    soil = "TerrainFeatures/hoeDirtSnow.png" if season == "winter" else "TerrainFeatures/hoeDirt.png"
    for j in range(height):
        for i in range(width):
            px, py = (col + i) * 16, (row + j) * 16
            edge_x = 1 if i == 0 else 3 if i == width - 1 else 2
            edge_y = 0 if j == 0 else 2 if j == height - 1 else 1
            stamp(scene, tile(soil, edge_x, edge_y), px, py)
            if sprinkler and (i, j) == (width // 2, height // 2):
                sprite = pressure_sprinkler()
            elif seed == "498":
                # Ripe wild seeds become forage objects on the ground, one of four per tile.
                forage = Random((row+j)*COLS + col+i).choice((412, 414, 416, 418))
                sprite = tile("Maps/springobjects.png", forage % 24, forage // 24)
            elif seed is not None:
                sprite = crop_sprite(seed, tint, winter_fiber=(seed == "885" and season == "winter"))
            else:
                continue
            props.append((py + 16, px + 8, sprite))


@lru_cache(maxsize=None)
def craft(index):
    return cut("TileSheets/Craftables.png", index % 8 * 16, index // 8 * 32, 16, 32)


def fish_pond(species, pond_data):
    color = next(item for item in pond_data if item["Id"] == species)["WaterColor"][0]["Color"]
    tint = tuple(map(int, color.split())) + (255,)
    bed = cut("Buildings/Fish Pond.png", 0, 80, 80, 80)
    pond = ImageChops.multiply(bed, Image.new("RGBA", bed.size, tint))
    stamp(pond, cut("Buildings/Fish Pond.png", 0, 0, 80, 80), 0, 0)
    return pond


def animal_house(name, opened):
    sheet = f"Buildings/{name}.png"
    spec = BUILDINGS[name]
    def source(rect):
        return cut(sheet, rect["X"], rect["Y"], rect["Width"], rect["Height"])
    body = source(spec["SourceRect"])
    for layer in spec["DrawLayers"]:
        if ("_Open" in layer["Id"]) == opened:
            stamp(body, source(layer["SourceRect"]), *map(int, layer["DrawPosition"].split(",")))
    return body


@lru_cache(maxsize=None)
def hardwood_fence(index):
    return cut("LooseSprites/Fence5.png", index % 3 * 16, index // 3 * 32, 16, 32)


def rails(props, left, right, foot, gates=()):
    for x in range(left, right):
        if x in gates:
            continue
        variant = 10 if x == left or x - 1 in gates else 9 if x == right - 1 or x + 1 in gates else 7
        props.append((foot, x * 16 + 8, hardwood_fence(variant)))


def compose(season, night):
    scene = Image.new("RGBA", (COLS * 16, ROWS * 16))
    ground(scene, season)
    props = []
    flower_tub = craft(108 if season in ("spring", "summer") else 109)
    # Two mirror-image allotments flank the north/south stone lane.
    berry, large, small, vine, short, flower, colors = PLANTINGS[season]
    for col, seed1, seed2 in [(29, berry, large), (41, large, berry),
                              (50, berry, small), (62, large, berry)]:
        if season == "winter":
            seed1 = seed2 = berry if col < 48 else small
        garden_bed(scene, props, season, col, 13, seed1)
        garden_bed(scene, props, season, col, 21, seed2)
    for col in (35, 56):
        for strip in (col, col + 3):
            garden_bed(scene, props, season, strip, 21, vine, width=2, sprinkler=False)
        # One pressure nozzle on the center tile waters both strips and mirrors the hut above.
        props.append((24 * 16, (col + 2) * 16 + 8, pressure_sprinkler()))
        garden_bed(scene, props, season, col, 13, short, height=2)
        floor_tiles(scene, rect(col, 16, col + 5, 19), (4, 0), season)
        props.append((300, col * 16 + 40, cut("Buildings/Junimo Hut.png", SEASONS.index(season)*48, 0, 48, 64)))
    for col in (33, 62):
        props.append((318, col * 16 + 8, craft(167)))  # Deluxe Scarecrow
    for col in (43, 51):
        props.append((318, col * 16 + 8, flower_tub))
    for col, tint in zip((22, 24), colors):
        garden_bed(scene, props, season, col, 8, flower, width=2, height=2, sprinkler=(col == 22), tint=tint)

    pasturing = season != "winter" and not night
    pond_data = json.loads((SOURCE / "Data/FishPondData.json").read_text(encoding="utf-8-sig"))
    props += [
        (157, 93, fish_pond("SuperCucumber", pond_data)), (157, 182, fish_pond("SlimeJack", pond_data)),
        (170, 281, cut("Buildings/Greenhouse.png", 0, 160, 112, 160)),
        (155, 559, cut("Buildings/houses.png", 0, 288, 160, 144)),  # Final exterior, shared with cellar upgrade.
        (159, 640, asset("Buildings/Mailbox.png")), (151, 468, asset("Buildings/Shipping Bin.png")),
        (146, 776, asset("Buildings/Well.png")),
        (321, 141, asset("Buildings/Big Shed.png")), (321, 319, asset("Buildings/Big Shed.png")),
        (149, 1215, asset("Buildings/Silo.png")),
        (157, 1323, animal_house("Deluxe Barn", pasturing)),
        (155, 1474, animal_house("Deluxe Coop", pasturing)),
        (143, 985, asset("Buildings/Earth Obelisk.png")), (143, 1046, asset("Buildings/Water Obelisk.png")),
    ]
    for x in (82, 103, 124, 147, 168, 191):
        props.append((363, x, craft(12)))
        props.append((393, x, craft(15 if x < 135 else 12)))
    for x in (265, 291, 318, 345, 372):
        props.append((360, x, craft(16)))
        props.append((391, x, craft(24)))
    for x in (350, 370, 390, 409):
        props.append((98, x, craft(10)))
    for x in (500, 615, 716, 837, 1172, 1533):
        props.append((155, x, flower_tub))
    for x in (404, 455, 1094, 1148):
        for y in (153, 418):
            props.append((y, x, craft(152)))

    rails(props, 72, 104, 424)
    rails(props, 72, 104, 88)
    rails(props, 4, 25, 416, gates=(8, 9, 19, 20))
    for x in (72, 103):
        for row in range(6, 26):
            index = 15 if (x, row) == (72, 11) else 3
            props.append((row * 16 + 8, x * 16 + 8, hardwood_fence(index)))

    rng = Random(235)
    for x in range(-8, COLS * 16 + 24, 38):
        if 746 < x < 960:
            continue  # Quiet lawn for the existing music title at desktop widths.
        props.append((rng.randint(15, 47), x, plant_tree(season, rng.choice(("oak", "maple", "pine")))))
    for x, y in [(63, 77), (378, 81), (687, 123), (731, 105),
                 (1079, 73), (1571, 140), (1627, 122),
                 (1696, 209), (1702, 346), (1718, 446)]:
        props.append((y, x, plant_tree(season, "cherry")))
    for x, y in [(1699, 135), (1718, 286), (1696, 401)]:
        props.append((y, x, plant_tree(season, "oak")))
    berry = season_bush(season)
    for x, y in [(86, 74), (707, 135), (856, 148), (944, 154), (1080, 151),
                 (1554, 144), (1621, 161), (22, 403), (399, 403), (1179, 387), (1620, 396)]:
        props.append((y, x, berry))
    # Irregular wildflower margins keep the fenced meadow distinct from the tiled yards.
    for cx, cy, spread, count in [(150, 71, 53, 15), (908, 148, 37, 30), (1608, 150, 22, 14),
            (1186, 243, 19, 14), (1224, 329, 35, 24), (1303, 389, 23, 16),
            (1350, 402, 45, 15), (1607, 356, 28, 26), (1250, 231, 54, 30),
            (1251, 402, 47, 28), (1595, 316, 23, 19)]:
        for i in range(count):
            x = cx + rng.randint(-spread, spread)
            y = cy + rng.randint(-13, 15)
            sprite = (tile(outdoors(season), 7, rng.choice((10, 12))) if i % 4 == 0 else
                      cut("TerrainFeatures/grass.png", rng.randrange(3) * 15, {"spring":0, "summer":1, "fall":2, "winter":4}[season]*20, 15, 20))
            props.append((y, x, sprite))
    for cx in (31, 202, 386, 615, 918, 1137, 1510, 1680):
        for i in range(9):
            props.append((rng.randrange(460, 477), cx + rng.randrange(-29, 30),
                          tile(outdoors(season), 7, rng.choice((10, 12)))))
    backing, origin, border = woodland_margin(scene, season)
    if not night:
        folder = OUTPUT.parent if season == "spring" else OUTPUT.parent / season
        folder.mkdir(parents=True, exist_ok=True)
        water = (lambda frame: pond_surface(frame, season)) if pasturing else None
        return export_scene(folder, backing, origin, props + border, water)
    image = still_scene(backing, origin, props + border)
    return estate_night(image, origin, season) if night else image


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    corners = OUTPUT.parent / "footer"
    corners.mkdir(exist_ok=True)
    for season in SEASONS:
        for night, phase in ((False, "day"), (True, "night")):
            compose(season, night).save(OUTPUT.parent / f"{season}-{phase}.png", optimize=True)
            for side in ("left", "right"):
                image = footer_corner(season, side)
                if night:
                    image = ambient_night(image, season)
                image.save(corners / f"{season}-{phase}-{side}.png", optimize=True)
