"""C03 Radian measure: answer models (the key, and one per misconception).

Inputs: d2r items give `d` (degrees) and optionally `m` (minutes); r2d items give `t` (radians).
Params: `dir` is "d2r" (answer in radians) or "r2d" (answer in degrees); `pi` (e.g. "22/7")
replaces pi in a degree answer, as the book does for radians written without pi.
"""
from sympy import Rational, pi, sympify


def _deg(v):
    """The angle in degrees, minutes folded in."""
    return v["d"] + v.get("m", 0) / Rational(60)


def _approx(x, p):
    """Apply the stem's value of pi (if any) to a degree answer."""
    return x.subs(pi, sympify(p["pi"])) if "pi" in p else x


def key(v, p):
    # From the definition: a full turn is an arc of 2*pi*r, i.e. 2*pi radians, and 360 degrees.
    if p["dir"] == "d2r":
        return _deg(v) / 360 * 2 * pi
    return _approx(v["t"] / (2 * pi) * 360, p)


def m1(v, p):
    """Flips the factor: multiplies by 180/pi to get radians, by pi/180 to get degrees."""
    if p["dir"] == "d2r":
        return _deg(v) * 180 / pi
    return _approx(v["t"] * pi / 180, p)


def m2(v, p):
    """Takes pi radians as a full turn (pi^c = 360 degrees)."""
    if p["dir"] == "d2r":
        return _deg(v) * pi / 360
    return _approx(v["t"] * 360 / pi, p)


def m3(v, p):
    """Reads D degrees M minutes as the decimal D.M (65 deg 30' as 65.30 deg)."""
    if p["dir"] != "d2r" or "m" not in v:
        raise ValueError("needs an angle given in degrees and minutes")
    return (v["d"] + v["m"] / Rational(100)) * pi / 180


def m4(v, p):
    """Drops the pi from the factor, as if 1^c = 180 degrees: divides by 180, or multiplies by 180."""
    if p["dir"] == "d2r":
        return _deg(v) / 180
    return v["t"] * 180


def m5(v, p):
    """Drops the minus sign of a negative (clockwise) angle."""
    k = key(v, p)
    if not k.is_negative:
        raise ValueError("only a negative angle has a sign to drop")
    return -k


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
