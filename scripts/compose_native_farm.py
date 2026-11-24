"""Assemble the dashboard's original farm layout from local unpacked sprites."""

from functools import lru_cache
import json
from pathlib import Path
from random import Random

from PIL import Image, ImageChops


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "游戏源文件" / "Content (unpacked)"
OUTPUT = ROOT / "assets" / "landscape" / "native-farm-v2"
SIZE = (960, 288)
SEASONS = ("spring", "summer", "fall", "winter")
NEAREST = Image.Resampling.NEAREST

# Seed IDs and counts, grouped rather than alternating tile by tile.
PLANTING = {
    "spring": (("745", "745", "745", "474", "474", "472", "472", "475"),
               ("745", "745", "745", "474", "474", "472", "475", "475")),
    "summer": (("481", "481", "481", "480", "480", "480", "487", "487"),
               ("479", "479", "479", "479", "481", "481", "480", "480")),
    "fall": (("493", "493", "493", "488", "488", "488", "487", "487"),
             ("490", "490", "490", "490", "490", "492", "492", "492")),
}

YARDS = {
    5: ((35, 40),),
    6: ((34, 43),),
    7: ((14, 19), (34, 44)),
    8: ((13, 20), (33, 45)),
    9: ((13, 22), (32, 45)),
    10: ((13, 24), (32, 45)),
    11: ((13, 45),),
    12: ((13, 44),),
    13: ((14, 23), (36, 43)),
    14: ((16, 22), (37, 42)),
    15: ((16, 20), (37, 41)),
    16: ((15, 20), (36, 41)),
    17: ((14, 19), (36, 40)),
}


@lru_cache(maxsize=None)
def asset(name):
    with Image.open(SOURCE / name) as original:
        return original.convert("RGBA")


def cut(name, x, y, width, height):
    return asset(name).crop((x, y, x + width, y + height))


def grade(sprite, gains, offsets=(0, 0, 0)):
    """Ambient light on source pixels, keeping the original alpha and silhouettes."""
    channels = [
        band.point([max(0, min(255, round(value * gain + offset))) for value in range(256)])
        for band, gain, offset in zip(sprite.split()[:3], gains, offsets)
    ]
    return Image.merge("RGBA", (*channels, sprite.getchannel("A")))


def stamp(scene, sprite, x, y):
    scene.alpha_composite(sprite, (x, y))


@lru_cache(maxsize=None)
def plant_tree(season, kind):
    if kind == "cherry":
        return cut("TileSheets/fruitTrees.png", 192 + SEASONS.index(season) * 48, 0, 48, 80)
    if kind == "pine" and season == "summer":
        season = "spring"
    number = {"oak": 1, "maple": 2, "pine": 3}[kind]
    tree = cut(f"TerrainFeatures/tree{number}_{season}.png", 0, 0, 48, 96)
    ground_contact = tree.getchannel("A").getbbox()[3]
    return tree.crop((0, 0, tree.width, ground_contact))


def rooted(scene, sprite, x, foot):
    stamp(scene, sprite, x - sprite.width // 2, foot - sprite.height)


def paint_ground(scene, season, sheet, yards=YARDS):
    rng = Random(784)
    ground = [(0, 7)] * 8 + [(0, 6), (1, 6) if season == "winter" else (0, 6)]
    # The bright summer grass stays distinct from spring while remaining readable at 2x.
    summer_ground = {
        pos: grade(cut(sheet, pos[0] * 16, pos[1] * 16, 16, 16), (.79, .88, .94), (3, 3, 0))
        for pos in set(ground)
    } if season == "summer" else None
    path = {(col, row) for row, spans in yards.items() for start, end in spans for col in range(start, end)}
    rows, cols = SIZE[1] // 16, SIZE[0] // 16
    for row in range(rows):
        for col in range(cols):
            if (col, row) in path:
                top = (col, row - 1) not in path
                bottom = row < rows - 1 and (col, row + 1) not in path
                left = (col - 1, row) not in path
                right = (col + 1, row) not in path
                tile = (0 if left else 3 if right else 1, 8 if top else 10 if bottom else 9)
            else:
                tile = rng.choice(ground)
            texture = summer_ground.get(tile) if summer_ground else None
            if texture is None:
                texture = cut(sheet, tile[0] * 16, tile[1] * 16, 16, 16)
            stamp(scene, texture, col * 16, row * 16)


def paint_woodland(scene, season):
    """Layer full-size trees rooted behind the yards, including off-frame trunks."""
    trees = (
        (-8,49,"oak"), (31,53,"pine"), (66,52,"maple"), (101,61,"pine"),
        (139,50,"oak"), (175,58,"pine"), (214,46,"maple"), (247,52,"pine"),
        (280,46,"oak"), (316,52,"pine"), (349,47,"maple"), (378,42,"oak"),
        (596,42,"oak"), (634,44,"pine"), (666,61,"maple"), (700,46,"pine"),
        (735,55,"oak"), (770,53,"pine"), (803,58,"maple"), (840,48,"pine"),
        (873,52,"oak"), (910,59,"pine"), (941,53,"maple"), (977,54,"oak"),
        (-2,104,"pine"), (51,91,"maple"), (93,97,"pine"), (135,115,"oak"),
        (179,85,"pine"), (218,94,"oak"), (322,105,"pine"), (359,87,"oak"),
        (714,98,"pine"), (757,90,"maple"), (804,106,"oak"), (846,87,"pine"),
        (889,100,"oak"), (928,103,"pine"), (960,129,"oak"),
    )
    for x, foot, kind in sorted(trees, key=lambda tree: tree[1]):
        sprite = plant_tree(season, kind)
        if foot <= 61:
            sprite = grade(sprite, (.83, .88, .87))
        rooted(scene, sprite, x, foot)


def paint_rail(scene, sheet, left, right, y, gate=None):
    rail = cut(sheet, 128, 224, 48, 31)
    first = rail.crop((0, 0, 16, 31))
    middle = rail.crop((16, 0, 32, 31))
    end = first.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    stamp(scene, first, left, y)
    for x in range(left + 16, right, 16):
        if x != gate:
            stamp(scene, middle, x, y)
    stamp(scene, end, right, y)


def paint_crops(scene, season, crops, origin=(400, 224)):
    soil = "TerrainFeatures/hoeDirtSnow.png" if season == "winter" else "TerrainFeatures/hoeDirt.png"
    for row in range(2):
        for col in range(8):
            x, y = origin[0] + col * 16, origin[1] + row * 16
            soil_col = 1 if col == 0 else 3 if col == 7 else 2
            stamp(scene, cut(soil, soil_col * 16, 32 * row, 16, 16), x, y)
            if season == "winter":
                continue
            data = crops[PLANTING[season][row][col]]
            assert season.title() in data["Seasons"]
            index = data["SpriteIndex"]
            # Column zero is the seed sprite. The last growth phase follows the planted seed.
            phase = len(data["DaysInPhase"]) + 1
            stamp(scene, cut("TileSheets/crops.png", index % 2 * 128 + phase * 16,
                             index // 2 * 32, 16, 32), x, y - 16)


def paint_farm(season, night, crops):
    sheet = f"Maps/{season}_outdoorsTileSheet.png"
    farm = Image.new("RGBA", SIZE)
    paint_ground(farm, season, sheet)
    paint_woodland(farm, season)

    plants = [(35,152,"pine"),(88,166,"cherry"),(151,170,"maple"),(42,227,"oak"),
              (118,231,"cherry"),(163,255,"oak"),(346,139,"cherry"),(451,130,"oak"),
              (790,136,"maple"),(834,180,"cherry"),(895,159,"maple"),(913,222,"oak"),
              (832,250,"pine"),(951,271,"pine")]
    house = cut("Buildings/houses.png", 0, 0, 160, 144)
    # Below the hay is a white draw marker outside the visible coop in the sheet.
    coop = Image.new("RGBA", (96, 128))
    stamp(coop, cut("Buildings/Coop.png", 0, 0, 64, 128), 0, 0)
    stamp(coop, cut("Buildings/Coop.png", 64, 0, 32, 112), 64, 0)
    placements = [(foot, plant_tree(season, kind), x, 32) for x, foot, kind in plants]
    placements.extend([(179, coop, 270, 76),
                       (207, house, 613, 140),
                       (177, asset("Buildings/Silo.png"), 747, 44),
                       (177, asset("Buildings/Well.png"), 370, 42),
                       (216, asset("Buildings/Mailbox.png"), 669, 9),
                       (198, asset("Buildings/Shipping Bin.png"), 705, 30)])
    shadow = asset("LooseSprites/shadow.png")
    for foot, sprite, x, shadow_width in sorted(placements, key=lambda item: item[0]):
        base_shadow = shadow.resize((shadow_width, 10 if shadow_width > 50 else 7), NEAREST)
        stamp(farm, base_shadow, x - shadow_width // 2, foot - 5)
        rooted(farm, sprite, x, foot)

    grass_row = {"spring":0, "summer":1, "fall":2, "winter":4}[season]
    flora = [(16,185),(22,197),(68,217),(80,213),(74,229),(31,261),(47,259),(80,271),
             (123,252),(144,273),(166,199),(184,248),(195,258),(347,251),(351,263),(366,252),
             (383,265),(521,265),(542,255),(549,264),(558,255),(557,272),(726,212),(757,236),
             (770,242),(772,253),(803,262),(866,215),(878,210),(902,272),(927,261),(943,226)]
    for i, (x,y) in enumerate(flora):
        if season == "winter":
            sprite = cut(sheet, 112, (9 + i % 4) * 16, 16, 16)
        elif i % 5 == 0:
            sprite = cut(sheet, 112, (9 + i % 4) * 16, 16, 16)
        else:
            sprite = cut("TerrainFeatures/grass.png", (i % 3) * 15, grass_row * 20, 15, 20)
        rooted(farm, sprite, x, y)
    bush = cut("TileSheets/bushes.png", 0, 55, 32, 41) if season == "fall" else cut("TileSheets/bushes.png", 0, 3, 32, 44)
    if season == "winter":
        bush = cut(sheet, 112, 160, 16, 16)
    for x,y in [(22,128),(63,152),(158,124),(176,151),(94,242),(25,268),(146,237),(346,241),
                (758,203),(789,230),(867,198),(943,194),(918,244)]:
        rooted(farm, bush, x, y)
    if not night and season != "winter":
        for name,x,y,pose in [("White Chicken",219,181,0),("Brown Chicken",257,199,1),("White Chicken",301,187,2)]:
            stamp(farm, cut(f"Animals/{name}.png", pose * 16, 0, 16, 16), x, y)
    paint_rail(farm, sheet, 196, 340, 196, gate=292)
    paint_crops(farm, season, crops)

    if night:
        daytime = farm
        farm = grade(daytime, (.34, .44, .62), (5, 9, 19))
        lamp = asset("LooseSprites/Lighting/lantern.png").getchannel("A")
        lamp = lamp.resize((158,104), Image.Resampling.BILINEAR).point(lambda value: value * .65)
        warm = grade(daytime, (.88, .68, .47), (14, 10, 4))
        light = Image.new("L", SIZE)
        light.paste(lamp, (543, 125))
        film = Image.composite(warm, farm, light)
        # Only the blue glass of the three original windows receives a warm highlight.
        for x,y,w,h in [(597,138,31,22), (629,138,17,20), (630,101,18,21)]:
            pane = daytime.crop((x,y,x+w,y+h))
            red, _, blue, _ = pane.split()
            lit = grade(pane, (1,.77,.29), (91,49,7))
            lit.putalpha(ImageChops.subtract(blue, red).point(lambda value: min(255, value * 4)))
            stamp(film, lit, x, y)
        farm = film
    assert farm.getchannel("A").getextrema() == (255, 255)
    return farm.convert("RGB")


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    crops = json.loads((SOURCE / "Data" / "Crops.json").read_text(encoding="utf-8-sig"))
    for season in SEASONS:
        for phase in ("day", "night"):
            paint_farm(season, phase == "night", crops).save(OUTPUT / f"{season}-{phase}.png", optimize=True)


if __name__ == "__main__":
    main()
