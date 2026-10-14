"""C11 Distance between parallel lines: answer models (the key, and one per misconception).

Inputs: the two lines a1 x + b1 y + c1 = 0 and a2 x + b2 y + c2 = 0 (v["a1"], ..., v["c2"]),
written the way the question gives them (y = 2x + 7 becomes 2x - y + 7 = 0, with a = 2, b = -1).
"""
from sympy import Abs, simplify, solve, sqrt, symbols

def _lines(v):
    return (v["a1"], v["b1"], v["c1"]), (v["a2"], v["b2"], v["c2"])


def _matched(v):
    """Both lines rewritten with the same a and b, scaling the one with the smaller coefficients up.

    Returns (a, b, c1, c2). Raises if the lines are not parallel.
    """
    (a1, b1, c1), (a2, b2, c2) = _lines(v)
    if simplify(a1 * b2 - a2 * b1) != 0:
        raise ValueError("the lines are not parallel")
    s = a1 / a2 if a2 != 0 else b1 / b2  # line 1 = s * line 2 in its x and y coefficients
    if Abs(s) >= 1:
        return a1, b1, c1, s * c2
    return a2, b2, c1 / s, c2


def key(v, p):
    """From the definition: drop a perpendicular from a point of line 1 to line 2 and measure it."""
    (a1, b1, c1), (a2, b2, c2) = _lines(v)
    px, py = (0, -c1 / b1) if b1 != 0 else (-c1 / a1, 0)
    # The perpendicular through (px, py) runs along the normal (a2, b2): (px + a2 t, py + b2 t).
    t = symbols("t", real=True)
    (tf,) = solve(a2 * (px + a2 * t) + b2 * (py + b2 * t) + c2, t)
    fx, fy = px + a2 * tf, py + b2 * tf
    return simplify(sqrt((fx - px) ** 2 + (fy - py) ** 2))


def m1(v, p):
    """Doesn't make the coefficients equal: |c1 - c2| as written, over line 1's sqrt(a1^2 + b1^2)."""
    (a1, b1, c1), (a2, b2, c2) = _lines(v)
    if a1 == a2 and b1 == b2:
        raise ValueError("the coefficients already match, so this gives the key")
    return simplify(Abs(c1 - c2) / sqrt(a1**2 + b1**2))


def m2(v, p):
    """Takes the vertical gap: the difference of the y-intercepts, -c/b."""
    (a1, b1, c1), (a2, b2, c2) = _lines(v)
    if b1 == 0 or b2 == 0:
        raise ValueError("vertical lines have no y-intercept")
    return simplify(Abs(c1 / b1 - c2 / b2))


def m3(v, p):
    """Forgets the square root: |c1 - c2| / (a^2 + b^2) after matching."""
    a, b, c1, c2 = _matched(v)
    if a**2 + b**2 == 1:
        raise ValueError("a^2 + b^2 = 1 gives the key")
    return simplify(Abs(c1 - c2) / (a**2 + b**2))


def m4(v, p):
    """Adds the lines' distances from the origin: (|c1| + |c2|) / sqrt(a^2 + b^2) after matching."""
    a, b, c1, c2 = _matched(v)
    if c1 * c2 <= 0:
        raise ValueError("the origin lies between the lines (or on one), so this gives the key")
    return simplify((Abs(c1) + Abs(c2)) / sqrt(a**2 + b**2))


def m5(v, p):
    """Stops at the numerator: |c1 - c2| after matching, with no division."""
    a, b, c1, c2 = _matched(v)
    if a**2 + b**2 == 1:
        raise ValueError("a^2 + b^2 = 1 gives the key")
    return simplify(Abs(c1 - c2))


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5}
