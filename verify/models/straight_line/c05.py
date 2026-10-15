"""C05 Point-slope and two-point forms: answer models (the key, and one per misconception).

Every answer is a line, returned as a polynomial in x, y (the line is poly = 0).
params["form"] says what the item gives:
  slope  inputs x1, y1, m: the point (x1, y1) and the slope m;
  incl   inputs x1, y1, th: the point and the inclination th (radians; pi/2 for a vertical line);
  two    inputs x1, y1, x2, y2: two points (the first is the one substituted).

The key is built from the definition: the points (x, y) for which (x - x1, y - y1) is parallel to
the line's direction (dx, dy), i.e. dy*(x - x1) - dx*(y - y1) = 0. That works for vertical lines
too, so it never divides by a run of zero.
"""
from sympy import cos, sin, symbols

x, y = symbols("x y", real=True)


def _direction(v, p):
    """A direction vector (dx, dy) of the line, straight from what the item gives."""
    form = p["form"]
    if form == "slope":
        return 1, v["m"]
    if form == "incl":
        return cos(v["th"]), sin(v["th"])
    if form == "two":
        return v["x2"] - v["x1"], v["y2"] - v["y1"]
    raise ValueError(f"no form {form!r}")


def _through(px, py, d):
    dx, dy = d
    return (dy * (x - px) - dx * (y - py)).expand()


def _slope(v, p):
    dx, dy = _direction(v, p)
    if dx == 0:
        raise ValueError("vertical line: no slope")
    return dy / dx


def key(v, p):
    return _through(v["x1"], v["y1"], _direction(v, p))


def m1(v, p):
    """Keeps the point's signs: y + y1 = m(x + x1) (or x + x1 = 0), the line through (-x1, -y1)."""
    return _through(-v["x1"], -v["y1"], _direction(v, p))


def m2(v, p):
    """Slope as run over rise: x - x1 = m(y - y1) for a given slope, (x2 - x1)/(y2 - y1) from two points."""
    if p["form"] == "incl":
        raise ValueError("inclination items: the tan/cot slip is M4")
    dx, dy = _direction(v, p)
    return _through(v["x1"], v["y1"], (dy, dx))


def m3(v, p):
    """Takes the point's y-coordinate as the y-intercept: y = mx + y1."""
    return (_slope(v, p) * x + v["y1"] - y).expand()


def m4(v, p):
    """Uses cot(theta) for the slope instead of tan(theta) (tan 30 deg taken as sqrt(3))."""
    if p["form"] != "incl":
        raise ValueError("only items that give the inclination")
    th = v["th"]
    return _through(v["x1"], v["y1"], (sin(th), cos(th)))


def m5(v, p):
    """Puts the fixed coordinate against the wrong variable: the vertical line x = h written as y = h,
    the horizontal line y = k as x = k."""
    dx, dy = _direction(v, p)
    if dx == 0:
        return y - v["x1"]
    if dy == 0:
        return x - v["y1"]
    raise ValueError("the line is not parallel to an axis")


def m6(v, p):
    """Two points with the same x: reads the slope (y2 - y1)/0 as 0 and writes the horizontal y = y1."""
    if p["form"] != "two" or v["x2"] != v["x1"]:
        raise ValueError("only two points with the same x-coordinate")
    return y - v["y1"]


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
