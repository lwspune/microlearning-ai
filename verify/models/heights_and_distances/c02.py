"""C02 Shadows: answer models (the key, and one per misconception).

A vertical object of height h on level ground, the sun at elevation th (radians): its shadow is
the side next to th in the right triangle (height, shadow, sun's ray), so tan th = h / s.

p["ask"] picks the question type:
  shadow  height v["h"] with a flagstaff v["f"] on top (0 for none), sun at v["th"]
          -> the length of the whole shadow
  tower   whole shadow v["S"] of a tower with a flagstaff v["f"] on top, sun at v["th"]
          -> the tower's height (without the flagstaff)
  longer  height v["h"], sun drops from v["a"] to v["b"] -> how much longer the shadow gets
  height  the shadow gets v["x"] longer as the sun drops from v["a"] to v["b"] -> the height
  band    height v["h"]; the shadow gets v["x"] longer as the sun drops from v["a"] to an
          unknown angle -> the open band of degrees, between standard angles, holding that angle
"""
from sympy import Interval, atan, asin, cot, pi, sin, tan, S as Sym

BANDS = [0, 30, 45, 60, 90]


def _ask(p):
    return p["ask"]


def _f(v):
    return v.get("f", Sym.Zero)


def _band(theta):
    """The open band (in degrees) holding the angle theta (radians); a boundary has no band."""
    d = theta * 180 / pi
    for lo, hi in zip(BANDS, BANDS[1:]):
        if (d - lo).evalf() > 1e-9 and (hi - d).evalf() > 1e-9:
            return Interval.open(lo, hi)
    raise ValueError(f"angle {d.evalf()} lies on a band boundary")


def key(v, p):
    a = _ask(p)
    if a == "shadow":
        return (v["h"] + _f(v)) / tan(v["th"])
    if a == "tower":
        return v["S"] * tan(v["th"]) - _f(v)
    if a == "longer":
        return v["h"] / tan(v["b"]) - v["h"] / tan(v["a"])
    if a == "height":
        return v["x"] / (1 / tan(v["b"]) - 1 / tan(v["a"]))
    if a == "band":
        s2 = v["h"] / tan(v["a"]) + v["x"]
        return _band(atan(v["h"] / s2))
    raise ValueError(a)


def m1(v, p):
    """Turns the triangle round: takes the shadow as the side opposite the angle, s = h tan th."""
    a = _ask(p)
    if a == "shadow":
        return (v["h"] + _f(v)) * tan(v["th"])
    if a == "tower":
        return v["S"] / tan(v["th"]) - _f(v)
    if a == "longer":
        return abs(v["h"] * tan(v["a"]) - v["h"] * tan(v["b"]))
    if a == "height":
        return v["x"] / abs(tan(v["a"]) - tan(v["b"]))
    if a == "band":
        s2 = v["h"] * tan(v["a"]) + v["x"]
        return _band(atan(s2 / v["h"]))
    raise ValueError(a)


def m2(v, p):
    """Takes the sun's ray (the hypotenuse) as the shadow: s = h / sin th."""
    a = _ask(p)
    if a == "shadow":
        return (v["h"] + _f(v)) / sin(v["th"])
    if a == "tower":
        return v["S"] * sin(v["th"]) - _f(v)
    if a == "longer":
        return v["h"] / sin(v["b"]) - v["h"] / sin(v["a"])
    if a == "height":
        return v["x"] / (1 / sin(v["b"]) - 1 / sin(v["a"]))
    if a == "band":
        s2 = v["h"] / sin(v["a"]) + v["x"]
        r = v["h"] / s2
        if r >= 1:
            raise ValueError("no angle")
        return _band(asin(r))
    raise ValueError(a)


def m3(v, p):
    """Takes the lengthening as the shadow at the change of angle, a - b: x = h cot(a - b)."""
    a = _ask(p)
    if a == "longer":
        return v["h"] / tan(v["a"] - v["b"])
    if a == "height":
        return v["x"] * tan(v["a"] - v["b"])
    raise ValueError("only for a change of elevation")


def m4(v, p):
    """Answers the new, longer shadow h cot b instead of how much longer it got."""
    if _ask(p) != "longer":
        raise ValueError("only for how much longer")
    return v["h"] / tan(v["b"])


def m5(v, p):
    """Takes the lengthening x as the whole new shadow, forgetting the first shadow under it."""
    a = _ask(p)
    if a == "height":
        return v["x"] * tan(v["b"])
    if a == "band":
        return _band(atan(v["h"] / v["x"]))
    raise ValueError("only when the lengthening is given")


def m6(v, p):
    """Treats the whole shadow as cast by the tower alone, leaving out the flagstaff on top."""
    a = _ask(p)
    if _f(v) == 0:
        raise ValueError("no flagstaff")
    if a == "shadow":
        return v["h"] / tan(v["th"])
    if a == "tower":
        return v["S"] * tan(v["th"])
    raise ValueError(a)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
