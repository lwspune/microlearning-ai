"""C07 Area of a segment: answer models (the key, and one per misconception).

Inputs: the radius r; the angle at the centre t (degrees), or the chord's distance d from the
centre, or the minor sector's area S; pi, the value of pi the stem gives (157/50 for 3.14, or
22/7); s2 and s3, the values of sqrt(2) and sqrt(3) the stem gives, if any.
Params: find = "minor" | "major" (which segment is asked); wrong = an angle in the figure that is
not the angle at the centre (C07-M5).

The key works from the definition: the minor segment is the part of the disc beyond the chord, at
distance d from the centre, so its area is the integral of the disc's width 2 sqrt(r^2 - x^2) from
x = d to x = r. The major segment is the rest of the disc. Exact pi and surds are used throughout
and the stem's values substituted at the end. Each misconception applies its own wrong rule to the
sector and triangle formulas.
"""
from sympy import Rational, Symbol, acos, cos, integrate, pi, simplify, sin, sqrt

_x = Symbol("x", real=True)


def _finish(val, v):
    """Substitute the stem's values of sqrt(2), sqrt(3) and pi."""
    val = simplify(val)
    for k, s in (("s2", sqrt(2)), ("s3", sqrt(3))):
        if k in v:
            val = simplify(val.subs(s, v[k]))
    return simplify(val.subs(pi, v["pi"]))


def _theta(v):
    """The angle at the centre, in degrees."""
    if "t" in v:
        return v["t"]
    if "d" in v:
        return simplify(2 * acos(v["d"] / v["r"]) * 180 / pi)
    return simplify(360 * v["S"] / (v["pi"] * v["r"] ** 2))


def _rad(deg):
    return deg * pi / 180


def _sector(r, t):
    return t / 360 * pi * r**2


def _tri(r, t):
    return Rational(1, 2) * r**2 * sin(_rad(t))


def _answer(minor, v, p):
    """The asked segment, given the minor segment's area."""
    if p["find"] == "minor":
        return _finish(minor, v)
    assert p["find"] == "major"
    return _finish(pi * v["r"] ** 2 - minor, v)


def key(v, p):
    r = v["r"]
    d = v["d"] if "d" in v else r * cos(_rad(_theta(v)) / 2)
    minor = 2 * integrate(sqrt(r**2 - _x**2), (_x, d, r))
    return _answer(minor, v, p)


def m1(v, p):
    """Gives the sector (minor or major) as the segment: forgets the triangle."""
    r, t = v["r"], _theta(v)
    return _answer(_sector(r, t), v, p)


def m2(v, p):
    """Takes the triangle as 1/2 x chord x radius: the radius as its height on the chord."""
    r, t = v["r"], _theta(v)
    chord = simplify(2 * r * sin(_rad(t) / 2))
    return _answer(_sector(r, t) - Rational(1, 2) * chord * r, v, p)


def m3(v, p):
    """Uses cos(theta) in place of sin(theta) in 1/2 r^2 sin(theta)."""
    r, t = v["r"], _theta(v)
    if t not in (30, 60):
        raise ValueError("cos of this angle is not one the student swaps for sin")
    return _answer(_sector(r, t) - Rational(1, 2) * r**2 * cos(_rad(t)), v, p)


def m4(v, p):
    """Takes the major segment as the major sector minus the triangle."""
    if p["find"] != "major":
        raise ValueError("only for a major segment")
    r, t = v["r"], _theta(v)
    return _finish(pi * r**2 - _sector(r, t) - _tri(r, t), v)


def m5(v, p):
    """Uses another angle in the figure as the angle at the centre."""
    if "wrong" not in p:
        raise ValueError("no other angle in the figure")
    r, t = v["r"], Rational(p["wrong"])
    return _answer(_sector(r, t) - _tri(r, t), v, p)


def m6(v, p):
    """Gives the minor segment when the major segment is asked."""
    if p["find"] != "major":
        raise ValueError("only for a major segment")
    return key(v, dict(p, find="minor"))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
