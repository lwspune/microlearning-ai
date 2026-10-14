"""C06 Tangent at a point: answer models (the key, and one per misconception).

Inputs: the circle x^2 + y^2 + 2gx + 2fy + c = 0 as g, f, c, and the point of contact as
x1, y1, or (on a circle centred at the origin) as the parameter theta, the point
(r cos theta, r sin theta). Each model returns a polynomial in x, y: the line is that
polynomial = 0.
"""
from sympy import cos, expand, simplify, sin, sqrt, symbols

x, y = symbols("x y", real=True)


def _circle(v):
    g, f, c = v["g"], v["f"], v["c"]
    r2 = simplify(g**2 + f**2 - c)
    if not r2.is_positive:
        raise ValueError("not a real circle")
    return g, f, c, r2


def _point(v):
    g, f, c, r2 = _circle(v)
    if "theta" in v:
        if g != 0 or f != 0:
            raise ValueError("a parameter is used here only for circles centred at the origin")
        r = sqrt(r2)
        p = (simplify(r * cos(v["theta"])), simplify(r * sin(v["theta"])))
    else:
        p = (v["x1"], v["y1"])
    if simplify(p[0] ** 2 + p[1] ** 2 + 2 * g * p[0] + 2 * f * p[1] + c) != 0:
        raise ValueError("the point is not on the circle")
    return p


def _perp_at(p, d):
    """The line through p perpendicular to the direction d."""
    return expand(d[0] * (x - p[0]) + d[1] * (y - p[1]))


def key(v, p):
    # From the definition: the tangent is perpendicular to the radius CP, C = (-g, -f).
    g, f, _, _ = _circle(v)
    x1, y1 = _point(v)
    return _perp_at((x1, y1), (x1 + g, y1 + f))


def m1(v, p):
    """Replaces only x^2 and y^2: xx1 + yy1 + 2gx + 2fy + c = 0."""
    g, f, c, _ = _circle(v)
    x1, y1 = _point(v)
    return expand(x * x1 + y * y1 + 2 * g * x + 2 * f * y + c)


def m2(v, p):
    """Replaces 2gx by 2g(x + x1), not g(x + x1): takes g as the whole coefficient of x."""
    g, f, c, _ = _circle(v)
    x1, y1 = _point(v)
    return expand(x * x1 + y * y1 + 2 * g * (x + x1) + 2 * f * (y + y1) + c)


def m3(v, p):
    """Gives the radius line through the centre and P (the normal), not the tangent."""
    g, f, _, _ = _circle(v)
    x1, y1 = _point(v)
    dx, dy = x1 + g, y1 + f
    return expand(dy * (x - x1) - dx * (y - y1))


def m4(v, p):
    """Takes the centre as (g, f), then the line through P perpendicular to that 'radius'."""
    g, f, _, _ = _circle(v)
    x1, y1 = _point(v)
    d = (x1 - g, y1 - f)
    if d == (0, 0):
        raise ValueError("P is the point (g, f)")
    return _perp_at((x1, y1), d)


def m5(v, p):
    """Tangent slope = minus the radius slope (not minus its reciprocal)."""
    g, f, _, _ = _circle(v)
    x1, y1 = _point(v)
    dx, dy = x1 + g, y1 + f
    if dx == 0 or dy == 0:
        raise ValueError("the radius is horizontal or vertical: -m equals m or is undefined")
    m = -dy / dx
    return expand(y - y1 - m * (x - x1))


def m6(v, p):
    """For x^2 + y^2 = r^2 writes xx1 + yy1 = r, not r^2."""
    g, f, _, r2 = _circle(v)
    if g != 0 or f != 0:
        raise ValueError("only for circles centred at the origin")
    x1, y1 = _point(v)
    return expand(x * x1 + y * y1 - sqrt(r2))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
