"""C01 Centre-radius form: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  eq_r   centre (h, k) and radius r -> the circle (a polynomial in x, y; the circle is it = 0)
  eq_pt  centre (h, k), through the point (px, py) -> the circle
  read   the circle (x - h)^2 + (y - k)^2 = s -> Tuple(centre, radius)
  touch  centre (h, k), touching the axis p["axis"] ("x" or "y") -> the circle
  both   radius r, touching both axes, centre in quadrant q (1-4) -> the circle
  area   centre (h, k), through the point (px, py) -> the area
"""
from sympy import Abs, Poly, Tuple, expand, pi, sqrt, symbols

x, y = symbols("x y", real=True)

QUADRANT_SIGNS = {1: (1, 1), 2: (-1, 1), 3: (-1, -1), 4: (1, -1)}


def circle(a, b, rhs):
    """(x - a)^2 + (y - b)^2 = rhs, as a polynomial that is 0 on the circle."""
    return expand((x - a) ** 2 + (y - b) ** 2 - rhs)


def _ask(p):
    return p.get("ask", "eq_r")


def _dist2(v):
    return (v["px"] - v["h"]) ** 2 + (v["py"] - v["k"]) ** 2


def _touch_r(v, p, wrong=False):
    """Distance from the centre to the axis it touches: |k| for the X-axis, |h| for the Y-axis."""
    on_x = p["axis"] == "x"
    if wrong:
        on_x = not on_x
    return Abs(v["k"]) if on_x else Abs(v["h"])


def _both_centre(v):
    sx, sy = QUADRANT_SIGNS[int(v["q"])]
    return sx * v["r"], sy * v["r"]


def key(v, p):
    a = _ask(p)
    if a == "eq_r":
        # Every point (x, y) at distance r from (h, k): the distance formula, squared.
        return circle(v["h"], v["k"], v["r"] ** 2)
    if a == "eq_pt":
        return circle(v["h"], v["k"], _dist2(v))
    if a == "read":
        # Expand, then read the centre and radius off x^2 + y^2 + 2gx + 2fy + c = 0.
        P = Poly(expand((x - v["h"]) ** 2 + (y - v["k"]) ** 2 - v["s"]), x, y)
        g, f, c = P.coeff_monomial(x) / 2, P.coeff_monomial(y) / 2, P.coeff_monomial(1)
        return Tuple(Tuple(-g, -f), sqrt(g**2 + f**2 - c))
    if a == "touch":
        return circle(v["h"], v["k"], _touch_r(v, p) ** 2)
    if a == "both":
        cx, cy = _both_centre(v)
        return circle(cx, cy, v["r"] ** 2)
    if a == "area":
        return pi * _dist2(v)
    raise ValueError(a)


def m1(v, p):
    """Signs copied from the centre: (x + h)^2 + (y + k)^2 for the centre (h, k)."""
    a = _ask(p)
    if a == "eq_r":
        return circle(-v["h"], -v["k"], v["r"] ** 2)
    if a in ("eq_pt", "area"):
        # Writes (x + h)^2 + (y + k)^2 = r^2 and substitutes the point to find r^2.
        r2 = (v["px"] + v["h"]) ** 2 + (v["py"] + v["k"]) ** 2
        return circle(-v["h"], -v["k"], r2) if a == "eq_pt" else pi * r2
    if a == "read":
        return Tuple(Tuple(-v["h"], -v["k"]), sqrt(v["s"]))
    if a == "touch":
        return circle(-v["h"], -v["k"], _touch_r(v, p) ** 2)
    if a == "both":
        cx, cy = _both_centre(v)
        return circle(-cx, -cy, v["r"] ** 2)
    raise ValueError(a)


def m2(v, p):
    """The right-hand side is r, not r^2."""
    a = _ask(p)
    if a == "eq_r":
        return circle(v["h"], v["k"], v["r"])
    if a == "eq_pt":
        return circle(v["h"], v["k"], sqrt(_dist2(v)))
    if a == "read":
        return Tuple(Tuple(v["h"], v["k"]), v["s"])
    if a == "touch":
        return circle(v["h"], v["k"], _touch_r(v, p))
    if a == "both":
        cx, cy = _both_centre(v)
        return circle(cx, cy, v["r"])
    if a == "area":
        # Writes (x - h)^2 + (y - k)^2 = d^2 through the point and reads r as d^2.
        return pi * _dist2(v) ** 2
    raise ValueError(a)


def m3(v, p):
    """Touching an axis: takes the wrong coordinate as the radius (|h| for the X-axis)."""
    if _ask(p) != "touch":
        raise ValueError("only for a circle touching an axis")
    return circle(v["h"], v["k"], _touch_r(v, p, wrong=True) ** 2)


def m4(v, p):
    """Touching both axes: puts the centre at (r, r) whatever the quadrant."""
    if _ask(p) != "both":
        raise ValueError("only for a circle touching both axes")
    return circle(v["r"], v["r"], v["r"] ** 2)


def m5(v, p):
    """Treats r^2 as 2r: doubles where it should square."""
    a = _ask(p)
    if a == "eq_r":
        return circle(v["h"], v["k"], 2 * v["r"])
    if a == "eq_pt":
        return circle(v["h"], v["k"], 2 * sqrt(_dist2(v)))
    if a == "read":
        return Tuple(Tuple(v["h"], v["k"]), v["s"] / 2)
    if a == "touch":
        return circle(v["h"], v["k"], 2 * _touch_r(v, p))
    if a == "both":
        cx, cy = _both_centre(v)
        return circle(cx, cy, 2 * v["r"])
    if a == "area":
        return 2 * pi * sqrt(_dist2(v))
    raise ValueError(a)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
