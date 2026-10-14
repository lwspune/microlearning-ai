"""C10 Polar co-ordinates: answer models (the key, and one per misconception).

params["dir"]: "to_polar"  inputs x, y (Cartesian)  -> Tuple(r, theta), 0 <= theta < 2*pi
               "to_cart"   inputs r, t (polar, t in radians) -> Tuple(x, y)
"""
from sympy import Abs, Tuple, atan, atan2, cos, pi, sin, sqrt


def _quadrant(x, y):
    if x > 0 and y > 0:
        return 1
    if x < 0 and y > 0:
        return 2
    if x < 0 and y < 0:
        return 3
    if x > 0 and y < 0:
        return 4
    raise ValueError("point on an axis")


def _place(alpha, q):
    """The reference angle alpha placed in quadrant q, the right way."""
    return {1: alpha, 2: pi - alpha, 3: pi + alpha, 4: 2 * pi - alpha}[q]


def _theta(x, y):
    """Straight from the definition: the direction of (x, y), brought into [0, 2*pi)."""
    th = atan2(y, x)
    return th + 2 * pi if th < 0 else th


def _angle_quadrant(t):
    """Quadrant of the terminal arm of t (strictly inside one), else raise."""
    return _quadrant(cos(t), sin(t))


def key(v, p):
    if p["dir"] == "to_polar":
        x, y = v["x"], v["y"]
        return Tuple(sqrt(x**2 + y**2), _theta(x, y))
    r, t = v["r"], v["t"]
    return Tuple(r * cos(t), r * sin(t))


def m1(v, p):
    """Ignores the quadrant: the acute angle from |y/x| as theta; cos and sin taken without their signs."""
    if p["dir"] == "to_polar":
        x, y = v["x"], v["y"]
        if x == 0:
            raise ValueError("no ratio y/x")
        return Tuple(sqrt(x**2 + y**2), atan(Abs(y / x)))
    r, t = v["r"], v["t"]
    return Tuple(r * Abs(cos(t)), r * Abs(sin(t)))


def m2(v, p):
    """Swaps the roles of x and y: x = r sin(theta), y = r cos(theta), so tan(theta) = x/y."""
    if p["dir"] == "to_polar":
        x, y = v["x"], v["y"]
        if y == 0:
            raise ValueError("no ratio x/y")
        return Tuple(sqrt(x**2 + y**2), _place(atan(Abs(x / y)), _quadrant(x, y)))
    r, t = v["r"], v["t"]
    return Tuple(r * sin(t), r * cos(t))


def m3(v, p):
    """Forgets the square root: r = x^2 + y^2."""
    if p["dir"] != "to_polar":
        raise ValueError("r is given")
    x, y = v["x"], v["y"]
    return Tuple(x**2 + y**2, _theta(x, y))


def m4(v, p):
    """Measures the reference angle the wrong way from the negative x-axis: pi + alpha in II, pi - alpha in III."""
    if p["dir"] == "to_polar":
        x, y = v["x"], v["y"]
        q = _quadrant(x, y)
        if q not in (2, 3):
            raise ValueError("only quadrants II and III")
        alpha = atan(Abs(y / x))
        return Tuple(sqrt(x**2 + y**2), pi + alpha if q == 2 else pi - alpha)
    r, t = v["r"], v["t"]
    if _angle_quadrant(t) not in (2, 3):
        raise ValueError("only quadrants II and III")
    # Reading the angle on the wrong side of the negative x-axis reflects the point in the x-axis.
    return Tuple(r * cos(t), -r * sin(t))


def m5(v, p):
    """Adds the legs for the distance: r = |x| + |y|."""
    if p["dir"] != "to_polar":
        raise ValueError("r is given")
    x, y = v["x"], v["y"]
    return Tuple(Abs(x) + Abs(y), _theta(x, y))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5}
