"""C01 Cuboid and cube: answer models (the key, and one per misconception).

Every item says what it asks in params["find"]:
  tsa        total surface area            (inputs l, b, h; or a for a cube)
  walls      area of the four vertical faces (same inputs)
  vol        volume                          (same inputs)
  l_from_tsa the length, given the total surface T and b, h
  tank       water an open tank holds: outer L, B, H and glass thickness t
  boxes      how many boxes l x b x h fit in a carton L x B x H, all standing the same way

The key works from the definitions: the surface is the sum of the six face rectangles listed one
by one, the walls are the four faces that meet the base, the volume is the space inside (a triple
integral of 1), and the box count stacks whole boxes along each edge. The book's formulas are
never used.
"""
from sympy import Rational, Symbol, floor, integrate, solve

_x, _y, _z = Symbol("x"), Symbol("y"), Symbol("z")
_L = Symbol("L", positive=True)


def _dims(v):
    """(l, b, h): a cube's side a gives l = b = h = a."""
    if "a" in v:
        return v["a"], v["a"], v["a"]
    return v["l"], v["b"], v["h"]


def _faces(l, b, h):
    """The six faces: base and top, front and back, left and right."""
    return [l * b, l * b, l * h, l * h, b * h, b * h]


def _walls(l, b, h):
    """The four vertical faces: front, back, left, right (the base and top lie flat)."""
    return [l * h, l * h, b * h, b * h]


def _space(l, b, h):
    return integrate(1, (_x, 0, l), (_y, 0, b), (_z, 0, h))


def _inner(v):
    """Inside measures of an open tank: glass at both ends of the length and breadth, under the base only."""
    t = v["t"]
    return v["L"] - 2 * t, v["B"] - 2 * t, v["H"] - t


def _solve_l(eq):
    sols = [s for s in solve(eq, _L) if s.is_positive]
    if len(sols) != 1:
        raise ValueError("no single positive length")
    return sols[0]


def key(v, p):
    f = p["find"]
    if f == "tsa":
        return sum(_faces(*_dims(v)))
    if f == "walls":
        return sum(_walls(*_dims(v)))
    if f == "vol":
        return _space(*_dims(v))
    if f == "l_from_tsa":
        return _solve_l(sum(_faces(_L, v["b"], v["h"])) - v["T"])
    if f == "tank":
        return _space(*_inner(v))
    if f == "boxes":
        return floor(v["L"] / v["l"]) * floor(v["B"] / v["b"]) * floor(v["H"] / v["h"])
    raise ValueError(f)


def m1(v, p):
    """Counts each face once: misses that every face has an equal opposite face."""
    f = p["find"]
    half = lambda l, b, h: l * b + l * h + b * h
    if f == "tsa":
        return half(*_dims(v))
    if f == "walls":
        l, b, h = _dims(v)
        return l * h + b * h
    if f == "l_from_tsa":
        return _solve_l(half(_L, v["b"], v["h"]) - v["T"])
    raise ValueError("needs a surface")


def m2(v, p):
    """Swaps the four walls and all six faces: 2(l + b)h for the total surface, 2(lb + bh + lh) for the walls."""
    f = p["find"]
    if f == "tsa":
        return sum(_walls(*_dims(v)))
    if f == "walls":
        return sum(_faces(*_dims(v)))
    if f == "l_from_tsa":
        return _solve_l(sum(_walls(_L, v["b"], v["h"])) - v["T"])
    raise ValueError("needs a surface")


def m3(v, p):
    """Adds where it should multiply: l^2 as 2l, l^3 as 3l; boxes as the sum of the counts along the edges."""
    f = p["find"]
    if f == "boxes":
        return v["L"] / v["l"] + v["B"] / v["b"] + v["H"] / v["h"]
    if "a" not in v:
        raise ValueError("cube powers only")
    a = v["a"]
    if f == "tsa":
        return 6 * (2 * a)
    if f == "walls":
        return 4 * (2 * a)
    if f == "vol":
        return 3 * a
    raise ValueError(f)


def m4(v, p):
    """Mixes up surface (the cover) and volume (the space inside)."""
    f = p["find"]
    if f in ("tsa", "walls"):
        return _space(*_dims(v))
    if f == "vol":
        return sum(_faces(*_dims(v)))
    if f == "l_from_tsa":
        return _solve_l(_space(_L, v["b"], v["h"]) - v["T"])
    if f == "tank":
        return sum(_faces(*_inner(v)))
    if f == "boxes":
        return sum(_faces(v["L"], v["B"], v["H"])) / sum(_faces(v["l"], v["b"], v["h"]))
    raise ValueError(f)


def m5(v, p):
    """Takes the glass thickness off only once from each outer measure."""
    if p["find"] != "tank":
        raise ValueError("tank only")
    t = v["t"]
    return _space(v["L"] - t, v["B"] - t, v["H"] - t)


def m6(v, p):
    """Stops at the base area: volume as l x b, leaving out the height (one layer of boxes)."""
    f = p["find"]
    if f == "vol":
        l, b, _ = _dims(v)
        return l * b
    if f == "tank":
        l, b, _ = _inner(v)
        return l * b
    if f == "boxes":
        return (v["L"] * v["B"]) / (v["l"] * v["b"])
    raise ValueError(f)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
