"""C03 Equidistant points: answer models (the key, and one per misconception).

Every item names its kind in params["kind"]:
  xaxis   the point on the X-axis equidistant from A(a1, a2) and B(b1, b2)       (inputs a1, a2, b1, b2)
  yaxis   the point on the Y-axis equidistant from A(a1, a2) and B(b1, b2)       (inputs a1, a2, b1, b2)
  dist    L has one unknown co-ordinate and its other co-ordinate k; M(m1, m2);
          LM = d. params["unk"] is "x" (L(x, k)) or "y" (L(k, y))             (inputs k, m1, m2, d)
  circum  the circumcentre of the triangle A(a1, a2), B(b1, b2), C(c1, c2)    (inputs a1..c2)

Points are Tuples (x, y); the values of an unknown co-ordinate are a FiniteSet.
The key works from sympy's geometry (a perpendicular bisector meeting an axis, a circle meeting a
line, a triangle's circumcentre), never from the PA^2 = PB^2 working being taught.
"""
from sympy import Abs, Circle, FiniteSet, Line, Point, Segment, Symbol, Triangle, Tuple, solve, sqrt

X, Y = Symbol("X"), Symbol("Y")


def _kind(p, *allowed):
    if p["kind"] not in allowed:
        raise ValueError(f"not modelled for {p['kind']}")
    return p["kind"]


def _pts(v, *names):
    return [Point(v[n + "1"], v[n + "2"]) for n in names]


def _axis_point(v, axis):
    """Where the perpendicular bisector of AB meets the axis (a point on it if axis is 'x', etc.)."""
    a, b = _pts(v, "a", "b")
    bis = Segment(a, b).perpendicular_bisector()
    ax = Line(Point(0, 0), Point(1, 0)) if axis == "x" else Line(Point(0, 0), Point(0, 1))
    hit = bis.intersection(ax)
    if len(hit) != 1 or not isinstance(hit[0], Point):
        raise ValueError("no single point")
    return Tuple(hit[0].x, hit[0].y)


def _dist_line(v, p):
    """The line L moves on (x unknown: y = k; y unknown: x = k), and the gap fixed between L and M."""
    if p["unk"] == "x":
        return Line(Point(0, v["k"]), Point(1, v["k"])), v["m1"], v["m2"] - v["k"]
    return Line(Point(v["k"], 0), Point(v["k"], 1)), v["m2"], v["m1"] - v["k"]


def key(v, p):
    k = _kind(p, "xaxis", "yaxis", "dist", "circum")
    if k == "xaxis":
        return _axis_point(v, "x")
    if k == "yaxis":
        return _axis_point(v, "y")
    if k == "circum":
        c = Triangle(*_pts(v, "a", "b", "c")).circumcenter
        return Tuple(c.x, c.y)
    line, _, _ = _dist_line(v, p)
    hits = Circle(Point(v["m1"], v["m2"]), v["d"]).intersection(line)
    return FiniteSet(*[(h.x if p["unk"] == "x" else h.y) for h in hits])


def m1(v, p):
    """Axes swapped: a point on the X-axis taken as (0, y), on the Y-axis as (x, 0)."""
    k = _kind(p, "xaxis", "yaxis")
    return _axis_point(v, "y" if k == "xaxis" else "x")


def m2(v, p):
    """Equidistant = average: the midpoint's co-ordinate on the axis, or the centroid."""
    k = _kind(p, "xaxis", "yaxis", "circum")
    if k == "xaxis":
        return Tuple((v["a1"] + v["b1"]) / 2, 0)
    if k == "yaxis":
        return Tuple(0, (v["a2"] + v["b2"]) / 2)
    return Tuple((v["a1"] + v["b1"] + v["c1"]) / 3, (v["a2"] + v["b2"] + v["c2"]) / 3)


def _slip(u, c):
    """The gap between an unknown u and a given co-ordinate c, written as a sum."""
    return (u + c) ** 2


def m3(v, p):
    """Every gap between an unknown and a given co-ordinate written (u + c) for (u - c)."""
    k = _kind(p, "xaxis", "yaxis", "dist", "circum")
    if k == "xaxis":
        s = solve(_slip(X, v["a1"]) + v["a2"] ** 2 - _slip(X, v["b1"]) - v["b2"] ** 2, X)
        return Tuple(s[0], 0)
    if k == "yaxis":
        s = solve(v["a1"] ** 2 + _slip(Y, v["a2"]) - v["b1"] ** 2 - _slip(Y, v["b2"]), Y)
        return Tuple(0, s[0])
    if k == "circum":
        sq = lambda n: _slip(X, v[n + "1"]) + _slip(Y, v[n + "2"])
        s = solve([sq("a") - sq("b"), sq("b") - sq("c")], [X, Y], dict=True)
        return Tuple(s[0][X], s[0][Y])
    _, c, gap = _dist_line(v, p)
    return FiniteSet(*solve(_slip(X, c) + gap ** 2 - v["d"] ** 2, X))


def m4(v, p):
    """Only the positive square root: one value, the given co-ordinate plus the root."""
    _kind(p, "dist")
    _, c, gap = _dist_line(v, p)
    return FiniteSet(c + sqrt(v["d"] ** 2 - gap ** 2))


def m5(v, p):
    """Distance taken as the sum of the horizontal and vertical gaps: |u - c| = d - |gap|."""
    _kind(p, "dist")
    _, c, gap = _dist_line(v, p)
    r = v["d"] - Abs(gap)
    if r <= 0:
        raise ValueError("no such point")
    return FiniteSet(c - r, c + r)


def m6(v, p):
    """The circumcentre taken as the midpoint of the longest side."""
    _kind(p, "circum")
    a, b, c = _pts(v, "a", "b", "c")
    side = max([(a, b), (b, c), (c, a)], key=lambda s: s[0].distance(s[1]))
    mid = side[0].midpoint(side[1])
    return Tuple(mid.x, mid.y)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
