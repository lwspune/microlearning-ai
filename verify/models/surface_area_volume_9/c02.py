"""C02 Cylinder: answer models (the key, and one per misconception).

Inputs (sympy numbers):
  r or d  base radius, or base diameter
  h       height (a roller's length); absent when params["find"] is "h"
  pi      the value of pi the question gives (22/7 or 157/50)
  given   a known measure (params["of"]) when the height is asked
  n       optional: number of turns of a roller (its area is pressed n times)
  rate    optional: cost per unit of area (the answer is then a cost)

params["find"]: "csa" | "tsa" | "vol" | "h"; params["of"] (with "h"): which measure `given` is.

The key builds each measure from its definition: the curved side unrolls to a rectangle
(circumference 2*pi*r by h), the total adds two circles of area pi*r^2, and the volume is
base area times height.
"""
from sympy import Symbol, solve

_H = Symbol("H", positive=True)


def _radius(v):
    return v["r"] if "r" in v else v["d"] / 2


def _true(kind, r, h, pi):
    circumference = 2 * pi * r
    circle = pi * r**2
    if kind == "csa":
        return circumference * h
    if kind == "tsa":
        return circumference * h + 2 * circle
    if kind == "vol":
        return circle * h
    raise ValueError(kind)


def _answer(v, p, F, r):
    pi, find = v["pi"], p["find"]
    if find == "h":
        sols = [s for s in solve(F(p["of"], r, _H, pi) - v["given"], _H) if s.is_positive]
        if len(sols) != 1:
            raise ValueError("no single positive height")
        return sols[0]
    val = F(find, r, v["h"], pi)
    if "n" in v:
        val = val * v["n"]
    if "rate" in v:
        val = val * v["rate"]
    return val


def key(v, p):
    return _answer(v, p, _true, _radius(v))


def m1(v, p):
    """Uses the diameter as the radius."""
    if "d" not in v:
        raise ValueError("no diameter given")
    return _answer(v, p, _true, v["d"])


def m2(v, p):
    """Mixes up curved and total surface: counts the two circles when only the side is covered, drops them when the total is asked."""
    def F(kind, r, h, pi):
        if kind == "csa":
            return _true("tsa", r, h, pi)
        if kind == "tsa":
            return _true("csa", r, h, pi)
        raise ValueError("not a surface")
    return _answer(v, p, F, _radius(v))


def m3(v, p):
    """Mixes up area and volume: uses pi*r^2*h for a surface, and the curved surface 2*pi*r*h for the volume."""
    def F(kind, r, h, pi):
        if kind in ("csa", "tsa"):
            return _true("vol", r, h, pi)
        return _true("csa", r, h, pi)
    return _answer(v, p, F, _radius(v))


def m4(v, p):
    """Takes the circumference as pi*r, so the curved surface is pi*r*h."""
    def F(kind, r, h, pi):
        if kind == "csa":
            return pi * r * h
        raise ValueError("curved surface only")
    return _answer(v, p, F, _radius(v))


def m5(v, p):
    """Counts one flat circle only in the total surface: 2*pi*r*h + pi*r^2."""
    def F(kind, r, h, pi):
        if kind == "tsa":
            return 2 * pi * r * h + pi * r**2
        raise ValueError("total surface only")
    return _answer(v, p, F, _radius(v))


def m6(v, p):
    """Squares the diameter and then halves it, taking r^2 as d^2/2."""
    if "d" not in v:
        raise ValueError("no diameter given")

    def F(kind, r, h, pi):
        if kind == "vol":
            return pi * (v["d"] ** 2 / 2) * h
        raise ValueError("volume only")
    return _answer(v, p, F, _radius(v))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
