"""C01 Combined equation of two lines: answer models (the key, and one per misconception).

Every answer is a locus, returned as a polynomial in x, y (the locus is poly = 0), as a student
would write it: expanded, with a positive leading coefficient (x before y).
params["form"] says what the item gives:
  lines   inputs a1, b1, c1, a2, b2, c2: the lines a1 x + b1 y + c1 = 0 and a2 x + b2 y + c2 = 0;
  slopes  inputs m1, m2: the lines through the origin with slopes m1 and m2;
  axes    inputs h, k: the lines through (h, k) parallel to the co-ordinate axes;
  dist_y  inputs d: the lines at a distance d from the Y-axis.

The key is the definition: a point is on the pair when it is on one line or the other, and a
product is 0 exactly when a factor is 0, so the pair is u * v = 0.
"""
from sympy import Poly, expand, symbols

x, y = symbols("x y", real=True)


def _tidy(e):
    p = Poly(expand(e), x, y)
    if p.is_zero:
        raise ValueError("no equation left")
    if p.LC() < 0:
        p = -p
    return p.as_expr()


def _lines(v, p):
    """The two lines as coefficient triples (a, b, c) of a x + b y + c = 0, straight from the item."""
    form = p["form"]
    if form == "lines":
        return (v["a1"], v["b1"], v["c1"]), (v["a2"], v["b2"], v["c2"])
    if form == "slopes":  # y = m x, written y - m x = 0
        return (-v["m1"], 1, 0), (-v["m2"], 1, 0)
    if form == "axes":  # x = h (parallel to the Y-axis) and y = k (parallel to the X-axis)
        return (1, 0, -v["h"]), (0, 1, -v["k"])
    if form == "dist_y":  # x = d and x = -d
        return (1, 0, -v["d"]), (1, 0, v["d"])
    raise ValueError(f"no form {form!r}")


def _poly(line):
    a, b, c = line
    return a * x + b * y + c


def key(v, p):
    u, w = _lines(v, p)
    return _tidy(_poly(u) * _poly(w))


def m1(v, p):
    """Adds the two equations, u + v = 0, instead of multiplying them: one line through their meeting point."""
    u, w = _lines(v, p)
    return _tidy(_poly(u) + _poly(w))


def m2(v, p):
    """Multiplies like terms only, dropping the cross terms: a1 a2 x^2 + b1 b2 y^2 + c1 c2 = 0."""
    (a1, b1, c1), (a2, b2, c2) = _lines(v, p)
    if p["form"] not in ("lines", "slopes"):
        raise ValueError("each line has one variable: no like terms to pair")
    return _tidy(a1 * a2 * x**2 + b1 * b2 * y**2 + c1 * c2)


def m3(v, p):
    """Believes every pair has a homogeneous equation: keeps only the degree-two terms of the product."""
    u, w = _lines(v, p)
    full = Poly(expand(_poly(u) * _poly(w)), x, y)
    top = sum(c * x**i * y**j for (i, j), c in full.terms() if i + j == 2)
    if expand(top - full.as_expr()) == 0:
        raise ValueError("both lines pass through the origin: nothing to drop")
    return _tidy(top)


def m4(v, p):
    """Writes the line through the origin with slope m as y + m x = 0 (slope -m)."""
    if p["form"] != "slopes":
        raise ValueError("only items that give slopes")
    return _tidy((y + v["m1"] * x) * (y + v["m2"] * x))


def m5(v, p):
    """Swaps the axes for a line parallel to one: writes the line parallel to the X-axis as x = const."""
    if p["form"] == "axes":
        return _tidy((x - v["k"]) * (y - v["h"]))
    if p["form"] == "dist_y":
        return _tidy((y - v["d"]) * (y + v["d"]))
    raise ValueError("only lines parallel to an axis")


def m6(v, p):
    """Keeps only one of the two xy products (first x second, the outer pair): a1 b2 xy, missing a2 b1 xy."""
    (a1, b1, c1), (a2, b2, c2) = _lines(v, p)
    if p["form"] != "lines" or c1 != 0 or c2 != 0:
        raise ValueError("only two given lines through the origin")
    return _tidy(a1 * a2 * x**2 + a1 * b2 * x * y + b1 * b2 * y**2)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
