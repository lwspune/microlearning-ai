"""C05 Arc length: answer models (the key, and one per misconception).

Inputs (sympy): angles in radians (th, or a and b for two circles), lengths in one unit.
params["ask"] picks the question:
  "s"      the arc, from the radius r (or the diameter d) and the angle th
  "r"      the radius, from the arc s and the angle th
  "angle"  the angle in degrees, from the arc s and the radius r
  "ratio"  r1 / r2 for equal arcs subtending a and b; params["deg"] names the angles the
           stem gives in degrees ("a", "b" or "a,b"), the others are given in radians
  "chord"  the minor arc cut off by a chord of length c in a circle of radius r
The key works from the definition: an arc subtending th is the fraction th / (2 pi) of the
circumference 2 pi r. It never uses s = r th directly.
"""
from sympy import Rational, asin, pi, simplify, sqrt


def _deg(th):
    """The degree number of an angle given in radians (what the stem shows)."""
    return simplify(th * 180 / pi)


def _r(v):
    return v["r"] if "r" in v else v["d"] / 2


def _fraction_of_circle(v, p):
    """The arc as a fraction of the circumference, solved for whatever is asked."""
    ask = p["ask"]
    if ask == "s":
        return simplify(2 * pi * _r(v) * v["th"] / (2 * pi))
    if ask == "r":
        return simplify(v["s"] * 2 * pi / (2 * pi * v["th"]))
    if ask == "angle":  # in degrees
        return simplify(v["s"] / (2 * pi * v["r"]) * 360)
    raise ValueError(f"ask {ask!r} not handled here")


def key(v, p):
    ask = p["ask"]
    if ask == "ratio":
        # Equal arcs: (a / 2pi) * 2pi r1 = (b / 2pi) * 2pi r2.
        return simplify(v["b"] / v["a"])
    if ask == "chord":
        # The chord's half-angle at the centre: sin(th / 2) = (c / 2) / r.
        th = 2 * asin(v["c"] / (2 * v["r"]))
        return simplify(2 * pi * v["r"] * th / (2 * pi))
    return _fraction_of_circle(v, p)


def _with_angle_rule(v, p, as_number):
    """s = r * theta where theta is the number as_number(th) instead of the radian measure."""
    ask = p["ask"]
    if ask == "s":
        return simplify(_r(v) * as_number(v["th"]))
    if ask == "r":
        return simplify(v["s"] / as_number(v["th"]))
    if ask == "ratio":
        given = p["deg"].split(",")
        a = as_number(v["a"]) if "a" in given else v["a"]
        b = as_number(v["b"]) if "b" in given else v["b"]
        return simplify(b / a)
    if ask == "chord":
        th = 2 * asin(v["c"] / (2 * v["r"]))
        return simplify(v["r"] * as_number(th))
    raise ValueError(ask)


def m1(v, p):
    """Puts the degree number straight into s = r theta (no conversion to radians).
    Asked for an angle, reports s / r (radians) as if it were degrees."""
    if p["ask"] == "angle":
        return simplify(v["s"] / v["r"])
    return _with_angle_rule(v, p, _deg)


def m2(v, p):
    """Converts degrees to radians the wrong way, multiplying by 180 / pi.
    Asked for an angle, converts s / r to degrees by multiplying by pi / 180."""
    if p["ask"] == "angle":
        return simplify(v["s"] / v["r"] * pi / 180)
    if p["ask"] == "ratio":
        raise ValueError("the factor cancels unless the units are mixed")
    return _with_angle_rule(v, p, lambda th: _deg(th) * 180 / pi)


def m3(v, p):
    """Uses the sector-area formula as the arc: s = 1/2 r^2 theta."""
    ask = p["ask"]
    if ask == "s":
        return simplify(Rational(1, 2) * _r(v) ** 2 * v["th"])
    if ask == "r":
        return simplify(sqrt(2 * v["s"] / v["th"]))
    if ask == "angle":
        return _deg(2 * v["s"] / v["r"] ** 2)
    if ask == "ratio":  # 1/2 r1^2 a = 1/2 r2^2 b
        return simplify(sqrt(v["b"] / v["a"]))
    if ask == "chord":
        th = 2 * asin(v["c"] / (2 * v["r"]))
        return simplify(Rational(1, 2) * v["r"] ** 2 * th)
    raise ValueError(ask)


def m4(v, p):
    """For equal arcs, takes the radii in the same ratio as the angles (direct, not inverse)."""
    if p["ask"] != "ratio":
        raise ValueError("only for equal arcs in two circles")
    return simplify(v["a"] / v["b"])


def m5(v, p):
    """Takes a chord equal to the radius to cut off one radian, so the arc equals the chord."""
    if p["ask"] != "chord":
        raise ValueError("only for an arc cut off by a chord")
    return simplify(v["c"])


def m6(v, p):
    """Uses the diameter as the radius."""
    if "d" not in v or p["ask"] != "s":
        raise ValueError("only when the diameter is given")
    return simplify(v["d"] * v["th"])


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
