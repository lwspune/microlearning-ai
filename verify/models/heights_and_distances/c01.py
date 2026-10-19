"""C01 Angles of elevation and depression: answer models (the key, and one per misconception).

One right triangle: the observer O on the horizontal, the foot F of the vertical, its top T.
v["t"] is the angle of elevation (or depression) in radians, measured from the horizontal.
p["ask"] picks the question type, named "<wanted>_from_<given>":
  h_from_d   the horizontal distance v["d"] -> the height
  d_from_h   the height v["h"] -> the horizontal distance
  h_from_l   the slant length v["l"] (line of sight, string, ladder) -> the height
  l_from_h   the height v["h"] -> the slant length
  d_from_l   the slant length v["l"] -> the horizontal distance
"""
from sympy import cos, pi, simplify, sin, tan


def _ask(p):
    return p["ask"]


def _dir(t):
    """The unit vector along the line of sight, from the horizontal: (across, up)."""
    return cos(t), sin(t)


def _solve(v, p, t):
    """The asked side from the given one, by walking along the line of sight at angle t."""
    c, s = _dir(t)
    a = _ask(p)
    if a == "h_from_d":   # walk until you are d across: you are then d * s / c up
        return simplify(v["d"] * s / c)
    if a == "d_from_h":
        return simplify(v["h"] * c / s)
    if a == "h_from_l":   # walk l along the sight line
        return simplify(v["l"] * s)
    if a == "l_from_h":
        return simplify(v["h"] / s)
    if a == "d_from_l":
        return simplify(v["l"] * c)
    raise ValueError(a)


def key(v, p):
    return _solve(v, p, v["t"])


def m1(v, p):
    """Measures the angle from the vertical (the tower), not the horizontal: uses 90 degrees - t."""
    if simplify(v["t"] - pi / 4) == 0:
        raise ValueError("at 45 degrees the complement is the same angle")
    return _solve(v, p, pi / 2 - v["t"])


def m2(v, p):
    """Takes the horizontal distance as the hypotenuse: uses sin t = h / d."""
    a = _ask(p)
    if a == "h_from_d":
        return simplify(v["d"] * sin(v["t"]))
    if a == "d_from_h":
        return simplify(v["h"] / sin(v["t"]))
    raise ValueError("only when the height and the ground distance are the two sides")


def m3(v, p):
    """Takes the slant (line of sight, string, ladder) as a leg: uses tan with it and the other side."""
    a, t = _ask(p), v["t"]
    if a == "h_from_l":   # slant read as the ground distance
        return simplify(v["l"] * tan(t))
    if a == "l_from_h":   # finds the ground distance and calls it the slant
        return simplify(v["h"] / tan(t))
    if a == "d_from_l":   # slant read as the height
        return simplify(v["l"] / tan(t))
    raise ValueError("only when a slant length is given or asked")


def m4(v, p):
    """Turns the slant ratio upside down: sin t = l / h, cos t = l / d."""
    a, t = _ask(p), v["t"]
    if a == "h_from_l":
        return simplify(v["l"] / sin(t))
    if a == "l_from_h":
        return simplify(v["h"] * sin(t))
    if a == "d_from_l":
        return simplify(v["l"] / cos(t))
    raise ValueError("only with a slant length (inverting tan is C01-M1)")


def m5(v, p):
    """Finds the line of sight (the hypotenuse) when the height is asked."""
    if _ask(p) != "h_from_d":
        raise ValueError("only for the height from the ground distance")
    return simplify(v["d"] / cos(v["t"]))


def m6(v, p):
    """Rationalising h / (a + b*sqrt(c)) with (a + b sqrt c)(a - b sqrt c) = a^2 + b^2 c."""
    if _ask(p) != "d_from_h":
        raise ValueError("only for the distance from the height")
    tv = simplify(tan(v["t"]))
    a, s = tv.as_coeff_Add()
    if a == 0 or s == 0 or not a.is_Rational:
        raise ValueError("needs tan t of the form a + b sqrt(c)")
    return simplify(v["h"] * (a - s) / (a**2 + s**2))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
