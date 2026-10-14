"""C01 Trigonometric functions from a point: answer models (the key, and one per misconception).

Inputs x, y: the point P(x, y) on the terminal arm of an angle in standard position.
params["f"]: the function asked for, one of sin, cos, tan, cosec, sec, cot.
"""
from sympy import Abs, sqrt

FUNCS = ("sin", "cos", "tan", "cosec", "sec", "cot")


def _value(f, x, y, r):
    """The six ratios as the definitions give them, for a point (x, y) at distance r."""
    num, den = {
        "sin": (y, r), "cos": (x, r), "tan": (y, x),
        "cosec": (r, y), "sec": (r, x), "cot": (x, y),
    }[f]
    if den == 0:
        raise ValueError(f"{f} is not defined here")
    return num / den


def _args(v, p):
    f = p["f"]
    if f not in FUNCS:
        raise ValueError(f"unknown function {f}")
    x, y = v["x"], v["y"]
    if x == 0 and y == 0:
        raise ValueError("P must not be the origin")
    return f, x, y


def key(v, p):
    """From the definition: r = OP = sqrt(x^2 + y^2), then the ratio with the signed coordinates."""
    f, x, y = _args(v, p)
    return _value(f, x, y, sqrt(x**2 + y**2))


def m1(v, p):
    """Forgets the square root: takes r = x^2 + y^2."""
    f, x, y = _args(v, p)
    if f in ("tan", "cot"):
        raise ValueError("tan and cot don't use r")
    return _value(f, x, y, x**2 + y**2)


def m2(v, p):
    """Mixes up the coordinates: sin = x/r, cos = y/r (so tan = x/y, and the reciprocals follow)."""
    f, x, y = _args(v, p)
    return _value(f, y, x, sqrt(x**2 + y**2))


def m3(v, p):
    """Treats x and y as side lengths of a triangle: drops their signs, so every ratio comes out positive."""
    f, x, y = _args(v, p)
    return _value(f, Abs(x), Abs(y), sqrt(x**2 + y**2))


def m4(v, p):
    """Turns the ratio upside down: gives the reciprocal function's value (sin = r/y, sec = x/r)."""
    f, x, y = _args(v, p)
    return 1 / _value(f, x, y, sqrt(x**2 + y**2))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
