"""C04 Large and negative angles: answer models (the key, and one per misconception).

Inputs: a, the angle in radians (a degree stem is given as its radian value, e.g. -7*pi/6 for -210 degrees).
params["f"]: the function, one of sin, cos, tan, cot, sec, cosec.
"""
from sympy import Mod, cos, cot, csc, pi, sec, sign, sin, tan

_F = {"sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "cosec": csc}
_RECIPROCAL_OF = {"sec": "cos", "cosec": "sin", "cot": "tan"}


def _f(p):
    return _F[p["f"]]


def _ref(a):
    """The acute angle the terminal arm makes with the x-axis."""
    r = Mod(a, 2 * pi)
    if r in (0, pi / 2, pi, 3 * pi / 2):
        raise ValueError("the arm lies on an axis")
    if r < pi / 2:
        return r
    if r < pi:
        return pi - r
    if r < 3 * pi / 2:
        return r - pi
    return 2 * pi - r


def key(v, p):
    """Straight from the unit circle: the function of the angle itself."""
    return _f(p)(v["a"])


def m1(v, p):
    """Drops whole turns, finds the reference angle, but forgets the quadrant's sign."""
    return _f(p)(_ref(v["a"]))


def m2(v, p):
    """Ignores the minus sign of a negative angle: f(-t) = f(t) for every function."""
    if not v["a"] < 0:
        raise ValueError("not a negative angle")
    return _f(p)(-v["a"])


def m3(v, p):
    """Takes the minus out of every function, cos and sec too: f(-t) = -f(t)."""
    if not v["a"] < 0:
        raise ValueError("not a negative angle")
    return -_f(p)(-v["a"])


def m4(v, p):
    """Measures the reference angle to the y-axis (150 = 90 + 60, so sin 150 = sin 60), keeping the quadrant's sign."""
    a = v["a"]
    return sign(_f(p)(a)) * _f(p)(pi / 2 - _ref(a))


def m5(v, p):
    """Drops quarter turns as if they were whole turns: f(90 + t) = f(t), so f(a) = f(a mod 90)."""
    r = Mod(v["a"], pi / 2)
    if r == 0:
        raise ValueError("the arm lies on an axis")
    return _f(p)(r)


def m6(v, p):
    """Forgets to take the reciprocal: works out cos for sec, sin for cosec, tan for cot."""
    if p["f"] not in _RECIPROCAL_OF:
        raise ValueError("not a reciprocal function")
    return _F[_RECIPROCAL_OF[p["f"]]](v["a"])


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
