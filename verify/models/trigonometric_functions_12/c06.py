"""C06 Polar coordinates: answer models (the key, and one per misconception).

Two kinds of item, chosen by the inputs:
  r, theta -> the Cartesian point (x, y), as Tuple(x, y);
  x, y     -> the polar co-ordinates (r, theta) with r > 0 and 0 <= theta < 2 pi, as Tuple(r, theta).
Angles in radians.
"""
from sympy import Abs, I, Tuple, arg, atan, atan2, cos, pi, simplify, sin, sqrt


def _mod(t):
    """The angle brought into [0, 2 pi)."""
    t = simplify(t)
    while t < 0:
        t += 2 * pi
    while t >= 2 * pi:
        t -= 2 * pi
    return simplify(t)


def _to_cart(v):
    return "r" in v and "theta" in v


def _xy(v):
    if "x" not in v or "y" not in v:
        raise ValueError("needs x and y")
    return v["x"], v["y"]


def _angle(x, y):
    """From the definition: the angle in [0, 2 pi) of the ray from O through (x, y)."""
    r = sqrt(x**2 + y**2)
    t = _mod(arg(x + y * I))
    assert simplify(r * cos(t) - x) == 0 and simplify(r * sin(t) - y) == 0
    return t


def key(v, p):
    if _to_cart(v):
        r, t = v["r"], v["theta"]
        return Tuple(simplify(r * cos(t)), simplify(r * sin(t)))
    x, y = _xy(v)
    return Tuple(sqrt(x**2 + y**2), _angle(x, y))


def m1(v, p):
    """Swaps cos and sin: x = r sin theta, y = r cos theta, so theta is measured from the y-axis."""
    if _to_cart(v):
        r, t = v["r"], v["theta"]
        return Tuple(simplify(r * sin(t)), simplify(r * cos(t)))
    x, y = _xy(v)
    return Tuple(sqrt(x**2 + y**2), _mod(atan2(x, y)))


def m2(v, p):
    """Ignores the quadrant: uses the acute (reference) angle, so every value comes out positive."""
    if _to_cart(v):
        r, t = v["r"], v["theta"]
        return Tuple(simplify(r * Abs(cos(t))), simplify(r * Abs(sin(t))))
    x, y = _xy(v)
    t = pi / 2 if x == 0 else atan(Abs(y) / Abs(x))
    return Tuple(sqrt(x**2 + y**2), simplify(t))


def m3(v, p):
    """Takes theta = tan^-1(y/x) as it stands (between -pi/2 and pi/2), adding 2 pi if negative:
    for x < 0 this lands in the opposite quadrant."""
    if _to_cart(v):
        raise ValueError("Cartesian to polar only")
    x, y = _xy(v)
    if x == 0:
        raise ValueError("y/x undefined")
    return Tuple(sqrt(x**2 + y**2), _mod(atan(y / x)))


def m4(v, p):
    """Measures theta clockwise from OX: the point (r cos theta, -r sin theta)."""
    if _to_cart(v):
        r, t = v["r"], v["theta"]
        return Tuple(simplify(r * cos(t)), simplify(-r * sin(t)))
    x, y = _xy(v)
    return Tuple(sqrt(x**2 + y**2), _mod(2 * pi - _angle(x, y)))


def m5(v, p):
    """Forgets the square root: r = x^2 + y^2."""
    if _to_cart(v):
        raise ValueError("Cartesian to polar only")
    x, y = _xy(v)
    return Tuple(simplify(x**2 + y**2), _angle(x, y))


def m6(v, p):
    """Forgets to scale by r: gives the unit-circle point (cos theta, sin theta)."""
    if not _to_cart(v):
        raise ValueError("polar to Cartesian only")
    t = v["theta"]
    return Tuple(simplify(cos(t)), simplify(sin(t)))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
