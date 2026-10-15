"""C02 Diameter form: answer models (the key, and one per misconception).

Every model returns a polynomial in x, y; the circle (or curve) is that polynomial = 0.
params["form"] says how the item gives the diameter's ends A, B:
  ends        inputs x1, y1, x2, y2: A(x1, y1), B(x2, y2).
  intercepts  inputs a, b: a circle through the origin cutting off a on the X-axis and b on
              the Y-axis, so A(a, 0) and B(0, b) (the angle AOB is a right angle).
  chord       inputs l1, l2, l3 and g, f, c: the line l1 x + l2 y + l3 = 0 meets the circle
              x^2 + y^2 + 2gx + 2fy + c = 0 at A and B (A has the smaller x).

The key never uses the diameter form: it takes the centre as the midpoint of AB and the
radius as half of AB, and writes the centre-radius form.
"""
from sympy import Rational, solve, symbols

x, y = symbols("x y", real=True)


def _ends(v, p):
    form = p["form"]
    if form == "ends":
        return (v["x1"], v["y1"]), (v["x2"], v["y2"])
    if form == "intercepts":
        return (v["a"], 0), (0, v["b"])
    if form == "chord":
        sols = solve(
            [v["l1"] * x + v["l2"] * y + v["l3"], x**2 + y**2 + 2 * v["g"] * x + 2 * v["f"] * y + v["c"]],
            [x, y],
            dict=True,
        )
        pts = sorted({(s[x], s[y]) for s in sols}, key=lambda q: (q[0], q[1]))
        if len(pts) != 2 or not all(c.is_real for q in pts for c in q):
            raise ValueError("the line does not cut the circle at two real points")
        return pts[0], pts[1]
    raise ValueError(f"unknown form {form}")


def _circle(h, k, r2):
    return (x - h) ** 2 + (y - k) ** 2 - r2


def _mid_and_d2(v, p):
    (x1, y1), (x2, y2) = _ends(v, p)
    return (x1 + x2) / Rational(2), (y1 + y2) / Rational(2), (x2 - x1) ** 2 + (y2 - y1) ** 2


def key(v, p):
    h, k, d2 = _mid_and_d2(v, p)
    return _circle(h, k, d2 / 4)


def m1(v, p):
    """Copies the ends' signs inside the brackets: (x + x1)(x + x2) + (y + y1)(y + y2) = 0."""
    (x1, y1), (x2, y2) = _ends(v, p)
    return (x + x1) * (x + x2) + (y + y1) * (y + y2)


def m2(v, p):
    """Takes the diameter AB as the radius: centre the midpoint, r = AB."""
    h, k, d2 = _mid_and_d2(v, p)
    return _circle(h, k, d2)


def m3(v, p):
    """Halves AB^2 for r^2 (r = AB/2, so r^2 = AB^2/2): centre the midpoint."""
    h, k, d2 = _mid_and_d2(v, p)
    return _circle(h, k, d2 / 2)


def m4(v, p):
    """Takes the end A as the centre and B as a point on the circle: r = AB."""
    (x1, y1), (x2, y2) = _ends(v, p)
    return _circle(x1, y1, (x2 - x1) ** 2 + (y2 - y1) ** 2)


def m5(v, p):
    """Subtracts the two products: (x - x1)(x - x2) - (y - y1)(y - y2) = 0."""
    (x1, y1), (x2, y2) = _ends(v, p)
    return (x - x1) * (x - x2) - (y - y1) * (y - y2)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
