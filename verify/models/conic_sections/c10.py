"""C10 Auxiliary and director circles: answer models (the key, and one per misconception).

The ellipse is x^2/a2 + y^2/b2 = 1 (inputs a2, b2). p["ask"] picks the question type:
  aux   the auxiliary circle (a polynomial in x, y; the circle is it = 0)
  dir   the locus of points from which the two tangents are perpendicular (the director circle);
        also used by "point" items, whose options are points on each model's locus
  pt    the point of the ellipse with eccentric angle t (input t, in radians) -> Tuple(x, y)
"""
from sympy import Abs, Poly, Tuple, cos, expand, sign, simplify, sin, solve, sqrt, symbols

x, y = symbols("x y", real=True)
_m, _c, _X = symbols("m c X", real=True)


def _ask(p):
    return p.get("ask", "dir")


def _circle(r2):
    return expand(x**2 + y**2 - r2)


def _slope_quadratic(v):
    """The quadratic in m whose roots are the slopes of the tangents from (x, y).

    A line Y = mX + c touches the ellipse when substituting it gives a double root in X
    (discriminant 0). Put c = y - m x (the line passes through (x, y)).
    """
    a2, b2 = v["a2"], v["b2"]
    q = Poly(expand(b2 * _X**2 + a2 * (_m * _X + _c) ** 2 - a2 * b2), _X)
    A, B, C = q.all_coeffs()
    disc = expand((B**2 - 4 * A * C).subs(_c, y - _m * x))
    return Poly(disc, _m)


def _slope_product_locus(v, product):
    """Points (x, y) whose two tangent slopes multiply to `product`."""
    P = _slope_quadratic(v)
    A, B, C = P.all_coeffs()
    locus = expand(C - product * A)
    return expand(locus / Poly(locus, x, y).coeff_monomial(x**2))


def _semi_axes(v):
    return sqrt(v["a2"]), sqrt(v["b2"])


def key(v, p):
    a = _ask(p)
    if a == "aux":
        # The circle on the major axis as diameter: centre O, radius half the longer axis.
        ax, by = _semi_axes(v)
        half = ax if ax >= by else by
        return _circle(half**2)
    if a == "dir":
        # Perpendicular tangents: the two slopes multiply to -1.
        return _slope_product_locus(v, -1)
    if a == "pt":
        # Q(a cos t, a sin t) on the auxiliary circle; drop a perpendicular to the x-axis;
        # P is where it meets the ellipse, on Q's side of the axis.
        ax, by = _semi_axes(v)
        t = v["t"]
        px = ax * cos(t)
        py = sign(sin(t)) * by * sqrt(1 - px**2 / v["a2"])
        return Tuple(simplify(px), simplify(py))
    raise ValueError(a)


def m1(v, p):
    """Takes the eccentric angle as the angle OP makes with the x-axis."""
    if _ask(p) != "pt":
        raise ValueError("only for the point with a given eccentric angle")
    t = v["t"]
    r = 1 / sqrt(cos(t) ** 2 / v["a2"] + sin(t) ** 2 / v["b2"])
    return Tuple(simplify(r * cos(t)), simplify(r * sin(t)))


def m2(v, p):
    """Gives Q(a cos t, a sin t) on the auxiliary circle instead of P on the ellipse."""
    if _ask(p) != "pt":
        raise ValueError("only for the point with a given eccentric angle")
    ax, _ = _semi_axes(v)
    return Tuple(simplify(ax * cos(v["t"])), simplify(ax * sin(v["t"])))


def m3(v, p):
    """Swaps the semi-axes: the auxiliary circle on the minor axis; the point (b cos t, a sin t)."""
    a = _ask(p)
    ax, by = _semi_axes(v)
    if a == "aux":
        half = by if ax >= by else ax
        return _circle(half**2)
    if a == "pt":
        return Tuple(simplify(by * cos(v["t"])), simplify(ax * sin(v["t"])))
    raise ValueError("a and b enter the director circle symmetrically")


def m4(v, p):
    """Mixes up the two circles: x^2 + y^2 = a^2 + b^2 for the auxiliary circle, x^2 + y^2 = a^2 for the director."""
    a = _ask(p)
    if a == "aux":
        return _circle(v["a2"] + v["b2"])
    if a == "dir":
        return _circle(v["a2"] if v["a2"] >= v["b2"] else v["b2"])
    raise ValueError("only for the circles")


def m5(v, p):
    """Uses a^2 - b^2 (the square of the focal distance ae) as the circle's r^2."""
    if _ask(p) not in ("aux", "dir"):
        raise ValueError("only for the circles")
    return _circle(Abs(v["a2"] - v["b2"]))


def m6(v, p):
    """Takes perpendicular slopes to multiply to 1, not -1."""
    if _ask(p) != "dir":
        raise ValueError("only for perpendicular tangents")
    return _slope_product_locus(v, 1)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
