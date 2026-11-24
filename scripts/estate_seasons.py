"""Shared seasonal vegetation and lighting for the estate and its two lower corners."""

from functools import lru_cache
from random import Random

from PIL import Image, ImageChops, ImageDraw, ImageOps

from compose_native_farm import cut, grade, plant_tree, rooted, stamp
from compose_spring_mill import tile


def outdoors(season):
    return f"Maps/{season}_outdoorsTileSheet.png"


@lru_cache(maxsize=None)
def season_bush(season):
    x, y = {"spring": (32, 0), "summer": (32, 96), "fall": (32, 48), "winter": (64, 48)}[season]
    return cut("TileSheets/bushes.png", x, y, 32, 32 if season == "summer" else 48)


def ambient_night(image, season):
    gains = {"spring": (.43, .51, .67), "summer": (.39, .49, .64),
             "fall": (.46, .46, .65), "winter": (.48, .58, .75)}[season]
    return grade(image.convert("RGBA"), gains, (5, 8, 17))


def estate_night(day, origin, season):
    ox, oy = origin
    src = day.convert("RGBA")
    result = ambient_night(src, season)
    glow = ImageOps.invert(Image.radial_gradient("L")).point(lambda p: round(185 * (p / 255)**1.8))
    warm = grade(src, (.89, .70, .43), (23, 13, 4))
    for x, y, w, h in [(559, 130, 150, 78), (141, 294, 76, 46), (319, 294, 76, 46)] + [
            (x, y - 12, 78, 58) for x in (404, 455, 1094, 1148) for y in (153, 418)]:
        left, top = ox + x - w//2, oy + y - h//2
        result.paste(warm.crop((left, top, left+w, top+h)), (left, top), glow.resize((w, h)))
    # Use the original glass pixels, keeping muntins, walls and frames dark.
    glass = (ox+510, oy+49, ox+615, oy+127)
    pane = src.crop(glass)
    r, _, b, _ = pane.split()
    mask = ImageChops.subtract(b, r).point(lambda p: min(255, p*7))
    lit = ImageOps.colorize(ImageOps.grayscale(pane), "#cf7932", "#fff3ad").convert("RGBA")
    result.paste(lit, glass[:2], mask)
    # Relight the native lamp bulbs left dimmed by the ambient pass.
    for x in (404, 455, 1094, 1148):
        for foot in (153, 418):
            box = (ox+x-4, oy+foot-31, ox+x+4, oy+foot-22)
            lamp = src.crop(box)
            r, g, _, _ = lamp.split()
            result.paste(lamp, box[:2], ImageChops.darker(r, g).point(lambda p: max(0, (p-128)*2)))
    return result.convert("RGB")


def footer_corner(season, side):
    width, height = 320, 104
    rng = Random(84 if side == "left" else 261)
    result = Image.new("RGBA", (width, height))
    surface = Image.new("RGBA", result.size)
    sheet = outdoors(season)
    for x in range(0, width, 16):
        for y in range(64, height, 16):
            stamp(surface, tile(sheet, 0, rng.choice((6, 7, 7))), x, y)
    def screen_x(inward):
        return inward if side == "left" else width - 1 - inward
    def baseline(inward):
        return 86 + round(18 * inward / width)
    # A stepped edge lets the two meadows taper into the paper on narrower screens.
    mask = Image.new("L", result.size)
    edge = ImageDraw.Draw(mask)
    for x in range(0, width-4, 4):
        y = baseline(x) - rng.randrange(0, 4)
        a, b = sorted((screen_x(x), screen_x(x+3)))
        edge.rectangle((a, y, b, height), fill=255)
    surface.putalpha(mask)
    stamp(result, surface, 0, 0)
    trees = [(12, "oak"), (64, "cherry")] if side == "left" else [(10, "pine"), (60, "maple")]
    props = [(92, screen_x(x), plant_tree(season, kind)) for x, kind in trees]
    for x in ((90, 135, 188) if side == "left" else (85, 151, 174)):
        props.append((baseline(x)+3, screen_x(x), season_bush(season)))
    for x in ((111, 124, 218, 230) if side == "left" else (99, 134, 208, 238)):
        stone = tile("Maps/springobjects.png", 343 % 24, 343 // 24)
        if season == "winter":
            stone = tile(sheet, 7, 9)
        props.append((baseline(x)+4, screen_x(x), stone))
    grass_row = {"spring":0, "summer":1, "fall":2, "winter":4}[season]
    for x in range(2, width-19, 6):
        plant = (tile(sheet, 7, rng.choice((10, 12))) if rng.random() < .38 else
                 cut("TerrainFeatures/grass.png", rng.randrange(3)*15, grass_row*20, 15, 20))
        foot = baseline(x) + rng.randrange(2, 10)
        props.append((foot, screen_x(x + rng.randrange(-2, 3)), plant))
    for foot, x, sprite in sorted(props, key=lambda p: p[0]):
        rooted(result, sprite, x, foot)
    return result
