"""C06 Perpendicular bisector and angle bisector theorems: answer models (the key, and one per misconception).

Lengths are in cm, angles in degrees, areas in sq cm (plain numbers).

Two lengths (or angles) that a theorem makes equal are given as a1*x + b1 and a2*x + b2
(inputs a1, b1, a2, b2). params["ask"]:
  "slant"      Point A on the bisector of angle XYZ, AX and AZ the perpendiculars to the arms,
               AX = a1 x + b1, AZ = a2 x + b2, and a slanting segment AB to arm YZ,
               AB = a3 x + b3. Find the distance of A from ray YZ (that is, AZ).
  "conv_angle" P inside angle ABC with equal perpendiculars to the arms; angle ABP = a1 x + b1,
               angle PBC = a2 x + b2. Find angle ABC.
  "tri_perp"   In triangle ABC the perpendicular bisector of BC meets side AC at P;
               PB = a1 x + b1, PC = a2 x + b2, AC = s. Find PA.
  "conv_seg"   PA = PB and QA = QB; line PQ meets seg AB at M; AM = a1 x + b1, MB = a2 x + b2.
               Find AB.
  "area"       In triangle ABC the bisector of angle B meets side AC at D; the distance of D from
               side AB is h; AB = ab, BC = bc, DC = dc. Find the area of triangle DBC.

The key solves the equation the theorem gives (equal distances, equal halves) with sympy.
"""
from sympy import Rational, Symbol, solve

X = Symbol("x")


def _expr(v, n):
    return v["a" + n] * X + v["b" + n]


def _x(v, first="1", second="2"):
    """x from first = second, solved properly."""
    return solve(_expr(v, first) - _expr(v, second), X)[0]


def _x_slip(v):
    """x when the constant on the side with more x's crosses '=' without changing its sign."""
    big, small = ("1", "2") if v["a1"] > v["a2"] else ("2", "1")
    return (v["b" + small] + v["b" + big]) / (v["a" + big] - v["a" + small])


def _at(v, n, x):
    return _expr(v, n).subs(X, x)


def key(v, p):
    ask = p["ask"]
    if ask == "slant":
        return _at(v, "2", _x(v))                       # AZ, the perpendicular to ray YZ
    if ask == "conv_angle":
        return 2 * _at(v, "1", _x(v))                   # P is on the bisector: the whole is twice a half
    if ask == "tri_perp":
        return v["s"] - _at(v, "2", _x(v))              # PA = AC - PC
    if ask == "conv_seg":
        return 2 * _at(v, "1", _x(v))                   # M is the midpoint of AB
    if ask == "area":
        return Rational(1, 2) * v["bc"] * v["h"]        # distance of D from BC = distance from AB
    raise ValueError(ask)


def m1(v, p):
    """Mixes up the half and the whole: gives the bisected half where the whole is asked."""
    ask = p["ask"]
    if ask in ("conv_angle", "conv_seg"):
        return _at(v, "1", _x(v))
    raise ValueError("M1 needs a bisected angle or segment")


def m2(v, p):
    """Takes a slanting segment from the point to a line as its distance from the line."""
    ask = p["ask"]
    if ask == "slant":
        return _at(v, "3", _x(v, "1", "3"))             # sets AX = AB and reports AB
    if ask == "area":
        return Rational(1, 2) * v["bc"] * v["dc"]       # DC as the height to BC
    raise ValueError("M2 needs a slanting segment")


def m3(v, p):
    """Takes a point on the perpendicular bisector of BC as equidistant from A and B."""
    if p["ask"] == "tri_perp":
        return _at(v, "1", _x(v))                       # PA = PB
    raise ValueError("M3 needs a triangle with a perpendicular bisector")


def m4(v, p):
    """Thinks a bisector that meets side AC cuts AC in half."""
    ask = p["ask"]
    if ask == "tri_perp":
        return v["s"] / 2
    if ask == "area":
        return Rational(1, 2) * v["ab"] * v["h"]        # D the midpoint: DBC as big as ABD
    raise ValueError("M4 needs a bisector meeting side AC")


def m5(v, p):
    """Stops one step short: gives x, or the distance found on the way."""
    ask = p["ask"]
    if ask in ("slant", "conv_angle", "tri_perp", "conv_seg"):
        return _x(v)
    if ask == "area":
        return v["h"]
    raise ValueError(ask)


def m6(v, p):
    """Moves a constant across '=' without changing its sign."""
    ask = p["ask"]
    x = _x_slip(v)
    if ask == "slant":
        return _at(v, "2", x)
    if ask in ("conv_angle", "conv_seg"):
        return 2 * _at(v, "1", x)
    if ask == "tri_perp":
        return v["s"] - _at(v, "2", x)
    raise ValueError("M6 needs an equation in x")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
