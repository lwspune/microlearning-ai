"""C01 Tangent and normal at a point: answer models (the key, and one per misconception).

Every answer is a line, returned as a polynomial in x, y (the line is where it is 0), compared
up to a constant factor.

Inputs, by curve type:
  a curve F(x, y) = 0:  F, x1, y1       (y = f(x) is given as F = y - f(x)); the point (x1, y1) is on it
  a parametric curve:   X, Y, at        (X and Y in t or theta, a plain symbol; at, the parameter value)
Params: line = "tangent" or "normal", the line the item asks for.

The key is built from the curve's direction at the point, never from a slope: for F = 0 the
tangent is F_x (x - x1) + F_y (y - y1) = 0 (the linear part of F at the point), for a parametric
curve the tangent runs along (dx/dt, dy/dt). So it also covers vertical tangents and normals.
Each wrong answer takes the slope m = dy/dx and applies its wrong rule.
"""
from sympy import Poly, Symbol, diff, expand, gcd_list, ilcm, pi, simplify

X, Y = Symbol("x", real=True), Symbol("y", real=True)


def _real(e):
    """The expression with any plain x, y (as draft_items parses them) made the real x, y."""
    return e.subs({s: X if s.name == "x" else Y for s in e.free_symbols if s.name in ("x", "y")})


def _par(v):
    names = {s.name: s for s in (v["X"].free_symbols | v["Y"].free_symbols)}
    for n in ("t", "theta"):
        if n in names:
            return names[n]
    raise ValueError("no parameter t or theta")


def _setup(v):
    """The point (x1, y1) and the tangent's direction (dx, dy) there."""
    if "F" in v:
        F, x1, y1 = _real(v["F"]), v["x1"], v["y1"]
        at = {X: x1, Y: y1}
        if simplify(F.subs(at)) != 0:
            raise ValueError("the point is not on the curve")
        fx, fy = simplify(diff(F, X).subs(at)), simplify(diff(F, Y).subs(at))
        if fx == 0 and fy == 0:
            raise ValueError("singular point")
        return (x1, y1), (fy, -fx)
    t = _par(v)
    a = v["at"]
    x1, y1 = simplify(v["X"].subs(t, a)), simplify(v["Y"].subs(t, a))
    dx, dy = simplify(diff(v["X"], t).subs(t, a)), simplify(diff(v["Y"], t).subs(t, a))
    if dx == 0 and dy == 0:
        raise ValueError("no direction at this parameter")
    return (x1, y1), (dx, dy)


def tidy(e):
    """Book form: integer coefficients (pi allowed) with no common factor, the first of x, y positive."""
    q = Poly(expand(e), X, Y)
    lead = q.coeff_monomial(X) or q.coeff_monomial(Y)
    e = expand(simplify(e / lead))  # x (or y) coefficient 1, so surds and pi common to all terms cancel
    p = Poly(e, X, Y, pi)
    cs = p.coeffs()
    if not all(c.is_Rational for c in cs):
        return e
    den = ilcm(*[c.q for c in cs])
    g = gcd_list([c * den for c in cs])
    return expand(e * den / g)


def _slope(v):
    (x1, y1), (dx, dy) = _setup(v)
    if dx == 0:
        raise ValueError("vertical tangent: no slope")
    return (x1, y1), simplify(dy / dx)


def _through(pt, m):
    """The line through pt with slope m: y - y1 = m(x - x1)."""
    x1, y1 = pt
    return tidy((Y - y1) - m * (X - x1))


def _line(p):
    if p.get("line") not in ("tangent", "normal"):
        raise ValueError('params.line must be "tangent" or "normal"')
    return p["line"]


def _tangent(v):
    (x1, y1), (dx, dy) = _setup(v)
    return tidy(dy * (X - x1) - dx * (Y - y1))


def _normal(v):
    (x1, y1), (dx, dy) = _setup(v)
    return tidy(dx * (X - x1) + dy * (Y - y1))


def key(v, p):
    return _tangent(v) if _line(p) == "tangent" else _normal(v)


def _nonzero(m):
    if m == 0:
        raise ValueError("slope 0: the rule gives no slope")
    return m


def m1(v, p):
    """Normal: takes its slope as -m, the negative of the tangent's slope, not -1/m."""
    if _line(p) != "normal":
        raise ValueError("normal items only")
    pt, m = _slope(v)
    return _through(pt, -_nonzero(m))


def m2(v, p):
    """Normal: takes its slope as 1/m, the reciprocal without the minus sign."""
    if _line(p) != "normal":
        raise ValueError("normal items only")
    pt, m = _slope(v)
    return _through(pt, 1 / _nonzero(m))


def m3(v, p):
    """Mixes up the two lines: gives the normal when asked for the tangent, and the tangent when asked for the normal."""
    return _normal(v) if _line(p) == "tangent" else _tangent(v)


def m4(v, p):
    """Tangent: turns the derivative upside down, taking dx/dy (or (dx/dt)/(dy/dt)) as the slope: 1/m."""
    if _line(p) != "tangent":
        raise ValueError("tangent items only")
    pt, m = _slope(v)
    return _through(pt, 1 / _nonzero(m))


def m5(v, p):
    """Tangent: loses a minus sign while differentiating, so the slope comes out as -m."""
    if _line(p) != "tangent":
        raise ValueError("tangent items only")
    pt, m = _slope(v)
    return _through(pt, -_nonzero(m))


def m6(v, p):
    """Uses the point's y as the y-intercept: y = (slope)x + y1, a line that misses the point unless x1 = 0."""
    pt, m = _slope(v)
    x1, y1 = pt
    if x1 == 0:
        raise ValueError("x1 = 0: this line is the right one")
    s = m if _line(p) == "tangent" else -1 / _nonzero(m)
    return tidy(Y - y1 - s * X)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
