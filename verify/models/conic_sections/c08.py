"""C08 Focal distances of an ellipse: answer models (the key, and one per misconception).

Inputs: the ellipse x^2/a2 + y^2/b2 = 1 as a2, b2 (the denominators under x^2 and y^2; the major
axis is along x when a2 > b2, along y when b2 > a2). The foci are S (on the positive side of the
major axis) and S'. The point P is given as x1, y1, or as the parameter theta, the point
(sqrt(a2) cos theta, sqrt(b2) sin theta), or (for "x1" and "other") by its distance sp from S.
p["ask"] picks the question:
  sp    -> SP            s1p   -> S'P            sum -> SP + S'P
  prod  -> SP * S'P      x1    -> the abscissa of P, from SP = sp (major axis along x)
  other -> S'P, from SP = sp
"""
from sympy import Abs, cos, expand, simplify, sin, solve, sqrt, symbols

x, y = symbols("x y", real=True)


def _shape(v):
    """(horizontal?, A = semi-major axis, c = centre-to-focus distance, e)."""
    a2, b2 = v["a2"], v["b2"]
    if a2 == b2:
        raise ValueError("a circle, not an ellipse")
    hor = bool(a2 > b2)
    A = sqrt(a2 if hor else b2)
    c = sqrt(Abs(a2 - b2))
    return hor, A, c, simplify(c / A)


def _foci(v):
    hor, _, c, _ = _shape(v)
    return ((c, 0), (-c, 0)) if hor else ((0, c), (0, -c))


def _point(v):
    if "theta" in v:
        P = (simplify(sqrt(v["a2"]) * cos(v["theta"])), simplify(sqrt(v["b2"]) * sin(v["theta"])))
    else:
        P = (v["x1"], v["y1"])
    if simplify(P[0] ** 2 / v["a2"] + P[1] ** 2 / v["b2"] - 1) != 0:
        raise ValueError("P is not on the ellipse")
    return P


def _d2(P, Q):
    return expand((P[0] - Q[0]) ** 2 + (P[1] - Q[1]) ** 2)


def _from_sp(v):
    """The points P on the ellipse with SP = sp (from the definition: two equations, solved)."""
    S, _ = _foci(v)
    sols = solve([x**2 / v["a2"] + y**2 / v["b2"] - 1, _d2((x, y), S) - v["sp"] ** 2], [x, y], dict=True)
    pts = {(simplify(s[x]), simplify(s[y])) for s in sols}
    if not pts:
        raise ValueError("no point of the ellipse is that far from S")
    return pts


def _u(v):
    """P's coordinate along the major axis (x1 or y1)."""
    hor, *_ = _shape(v)
    P = _point(v)
    return P[0] if hor else P[1]


def _ask(p):
    return p["ask"]


def key(v, p):
    a = _ask(p)
    S, S1 = _foci(v)
    if a in ("sp", "s1p", "prod"):
        P = _point(v)
        if a == "sp":
            return sqrt(_d2(P, S))
        if a == "s1p":
            return sqrt(_d2(P, S1))
        return sqrt(expand(_d2(P, S) * _d2(P, S1)))
    if a == "sum":
        # Measured at an end of the minor axis; the theorem says every point gives the same sum.
        hor, *_ = _shape(v)
        P = (0, sqrt(v["b2"])) if hor else (sqrt(v["a2"]), 0)
        return simplify(sqrt(_d2(P, S)) + sqrt(_d2(P, S1)))
    if a == "x1":
        hor, *_ = _shape(v)
        if not hor:
            raise ValueError("abscissa questions use a horizontal major axis")
        xs = {P[0] for P in _from_sp(v)}
        if len(xs) != 1:
            raise ValueError(f"ambiguous abscissa {xs}")
        return xs.pop()
    if a == "other":
        ds = {simplify(sqrt(_d2(P, S1))) for P in _from_sp(v)}
        if len(ds) != 1:
            raise ValueError(f"ambiguous S'P {ds}")
        return ds.pop()
    raise ValueError(a)


def m1(v, p):
    """Swaps the foci's formulas: SP = a + ex1 and S'P = a - ex1 (the nearer focus gets the plus)."""
    a = _ask(p)
    _, A, _, e = _shape(v)
    if a == "sp":
        return A + e * _u(v)
    if a == "s1p":
        return A - e * _u(v)
    if a == "x1":
        return simplify((v["sp"] - A) / e)
    raise ValueError("swapping the two formulas leaves the sum and the product unchanged")


def m2(v, p):
    """Takes SP as PM, the distance to the directrix x = a/e, forgetting SP = e * PM."""
    a = _ask(p)
    _, A, _, e = _shape(v)
    d = A / e  # the directrix's distance from the centre
    if a == "sp":
        return simplify(d - _u(v))
    if a == "s1p":
        return simplify(d + _u(v))
    if a == "sum":
        return simplify(2 * d)
    if a == "prod":
        return simplify(d**2 - _u(v) ** 2)
    if a == "x1":
        return simplify(d - v["sp"])
    if a == "other":
        return simplify(2 * d - v["sp"])
    raise ValueError(a)


def m3(v, p):
    """Takes a as the square root of the x^2 denominator even when the major axis is along y."""
    a = _ask(p)
    hor, *_ = _shape(v)
    if hor:
        raise ValueError("the major axis is along x: the same as the key")
    if a == "sum":
        return 2 * sqrt(v["a2"])
    if a == "other":
        return simplify(2 * sqrt(v["a2"]) - v["sp"])
    raise ValueError(a)


def m4(v, p):
    """Takes SP + S'P as the distance between the foci, 2ae."""
    a = _ask(p)
    _, _, c, _ = _shape(v)
    if a == "sum":
        return 2 * c
    if a == "other":
        return simplify(2 * c - v["sp"])
    raise ValueError(a)


def m5(v, p):
    """Drops the e, as for a parabola (e = 1): SP = a - x1, S'P = a + x1."""
    a = _ask(p)
    _, A, _, _ = _shape(v)
    if a == "sp":
        return simplify(A - _u(v))
    if a == "s1p":
        return simplify(A + _u(v))
    if a == "prod":
        return simplify(A**2 - _u(v) ** 2)
    if a == "x1":
        return simplify(A - v["sp"])
    raise ValueError("dropping e leaves the sum 2a unchanged")


def m6(v, p):
    """Multiplies (a - ex1)(a + ex1) out as a^2 - e x1^2, squaring x1 but not e."""
    if _ask(p) != "prod":
        raise ValueError("only for the product")
    _, A, _, e = _shape(v)
    return simplify(A**2 - e * _u(v) ** 2)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
