"""C03 Distance of a point from a line: answer models (the key, and one per misconception).

Inputs: the point P and the line, either as a point a on it and a direction b (tuples "(2, -3, 1)"),
or as two points B and C on it (then a = B and b = C - B).
params["ask"]: "foot" (the foot M, a Tuple (x, y, z)) or "dist" (the length PM).
params["form"]: "cart" when the line was given in Cartesian form (x - x1)/l = ..., else "vec".

The key comes from the definition: the foot is the point of the line nearest P, found by minimising
|P - (a + t b)|^2 over t (its derivative set to 0); the distance is |PM| at that point.
"""
from sympy import Abs, Matrix, Tuple, diff, solve, sqrt, symbols


def _v(t):
    return Matrix(list(t))


def _line(v):
    if "B" in v:
        a = _v(v["B"])
        return a, _v(v["C"]) - a
    return _v(v["a"]), _v(v["b"])


def _len(u):
    return sqrt(u.dot(u))


def _answer(p, P, M):
    if p["ask"] == "foot":
        return Tuple(*M)
    return _len(P - M)


def _foot(P, a, b):
    """The correct foot, by the perpendicular condition (used by models that slip elsewhere)."""
    lam = (P - a).dot(b) / b.dot(b)
    return a + lam * b


def key(v, p):
    P = _v(v["P"])
    a, b = _line(v)
    t = symbols("t", real=True)
    d2 = (P - (a + t * b)).dot(P - (a + t * b))
    (t0,) = solve(diff(d2, t), t)
    return _answer(p, P, a + t0 * b)


def m1(v, p):  # takes the point a named in the line's equation as the foot: distance |AP|
    P = _v(v["P"])
    a, b = _line(v)
    return _answer(p, P, a)


def m2(v, p):  # takes the projection of AP on the line, |AP . b| / |b|, as the distance
    if p["ask"] != "dist":
        raise ValueError("a projection is a length, not a foot")
    P = _v(v["P"])
    a, b = _line(v)
    return Abs((P - a).dot(b)) / _len(b)


def m3(v, p):  # reads the point from (x + 1)/2 as x = +1: every coordinate of a with the wrong sign
    if p.get("form") != "cart":
        raise ValueError("the line is not in Cartesian form")
    P = _v(v["P"])
    a, b = _line(v)
    a = -a
    return _answer(p, P, _foot(P, a, b))


def m4(v, p):  # sign slip solving for lambda: gets -lambda, so lands on a - lambda b
    P = _v(v["P"])
    a, b = _line(v)
    lam = (P - a).dot(b) / b.dot(b)
    if lam == 0:
        raise ValueError("lambda = 0: the slip gives the key")
    return _answer(p, P, a - lam * b)


def m5(v, p):  # reports the vector PM = M - P as the foot's coordinates
    if p["ask"] != "foot":
        raise ValueError("only a foot question")
    P = _v(v["P"])
    a, b = _line(v)
    return Tuple(*(_foot(P, a, b) - P))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
