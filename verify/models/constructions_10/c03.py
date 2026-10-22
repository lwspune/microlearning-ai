"""C03 Tangents from an outside point: answer models (the key, and one per misconception).

A circle has centre O and radius v["r"]; P is a point outside it. The construction bisects seg OP
at M and draws the circle with centre M and radius MO; it cuts the given circle at the points of
contact A and B, and PA, PB are the tangents. Lengths are plain numbers of cm. params["find"]:
  t    v["d"] = OP; find the tangent length PA.
  OP   v["t"] = PA; find the distance OP.
  MO   v["d"] = OP; find the radius of the circle drawn with centre M.
"""
from sympy import Rational, sqrt


def _contact(r, d):
    """The point of contact A, with O at the origin and P at (d, 0): A lies on both circles,
    x^2 + y^2 = r^2 and (x - d/2)^2 + y^2 = (d/2)^2, so d x = r^2."""
    x = r**2 / d
    return x, sqrt(r**2 - x**2)


def key(v, p):
    find = p["find"]
    if find == "t":
        r, d = v["r"], v["d"]
        x, y = _contact(r, d)
        return sqrt((d - x) ** 2 + y**2)      # distance from P(d, 0) to A
    if find == "OP":
        return sqrt(v["t"] ** 2 + v["r"] ** 2)  # the right angle is at A, OP is the hypotenuse
    if find == "MO":
        return v["d"] * Rational(1, 2)         # M is the midpoint of OP
    raise ValueError(find)


def m1(v, p):
    """No right angle: treats the tangent as if it ran along OP, so PA = OP - r (and OP = PA + r)."""
    find = p["find"]
    if find == "t":
        return v["d"] - v["r"]
    if find == "OP":
        return v["t"] + v["r"]
    raise ValueError("lengths of the right triangle only")


def m2(v, p):
    """Puts the right angle at O, making OP a leg: PA^2 = OP^2 + r^2 (and OP^2 = PA^2 - r^2)."""
    find = p["find"]
    if find == "t":
        return sqrt(v["d"] ** 2 + v["r"] ** 2)
    if find == "OP":
        if v["t"] <= v["r"]:
            raise ValueError("needs PA > r")
        return sqrt(v["t"] ** 2 - v["r"] ** 2)
    raise ValueError("lengths of the right triangle only")


def m3(v, p):
    """Slip: stops at the square, forgetting the square root."""
    find = p["find"]
    if find == "t":
        return v["d"] ** 2 - v["r"] ** 2
    if find == "OP":
        return v["t"] ** 2 + v["r"] ** 2
    raise ValueError("lengths of the right triangle only")


def m4(v, p):
    """Skips bisecting OP and sets the whole of OP on the compass for the second circle."""
    if p["find"] != "MO":
        raise ValueError("the second circle only")
    return v["d"]


def m5(v, p):
    """Bisects only the part of OP outside the circle, so the radius is (OP - r) / 2."""
    if p["find"] != "MO":
        raise ValueError("the second circle only")
    return (v["d"] - v["r"]) * Rational(1, 2)


def m6(v, p):
    """Draws the second circle with the given circle's radius r."""
    if p["find"] != "MO":
        raise ValueError("the second circle only")
    return v["r"]


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
