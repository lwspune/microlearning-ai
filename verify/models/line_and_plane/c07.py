"""C07 Plane through three points or containing lines: answer models (the key, and one per misconception).

params["kind"] says what fixes the plane (points are tuples, "(1, -2, 1)"):
  points     inputs A, B, C: the plane through three points;
  dirs       inputs A, b, c: the plane through A parallel to b and c (also r = a + lambda b + mu c);
  lines      inputs a1, b1, a2, b2: the plane containing the coplanar lines r = a1 + lambda b1, r = a2 + mu b2;
  pointline  inputs P, a, b: the plane through P containing the line r = a + lambda b;
  axis       inputs A, B, u: the plane through A and B parallel to the direction u (an axis).

A plane answer is compared as a plane, whatever normal and scale its equation was written with: its value is
the Tuple (p, q, r, s) of px + qy + rz = s scaled to coprime integers with the first nonzero of p, q, r positive.
RAW gives the (normal, point) each model writes, for the option text.

The key comes from the definition: a plane px + qy + rz = s is fixed by the points on it, so the key solves
for (p, q, r, s) from three (or four) of its points (a null space), never through a cross product.
"""
from functools import reduce
from math import gcd

from sympy import Matrix, Rational, Tuple, nsimplify


def _v(t):
    return Matrix(list(t))


def _ints(n):
    """A list of rationals as coprime integers, keeping the sign."""
    n = [Rational(nsimplify(c)) for c in n]
    den = reduce(lambda a, b: a * b // gcd(a, b), [c.q for c in n], 1)
    m = [int(c * den) for c in n]
    g = reduce(gcd, [abs(c) for c in m if c] or [1])
    return [c // g for c in m]


def canon(n, point):
    """The plane through point with normal n, as the Tuple (p, q, r, s)."""
    if all(c == 0 for c in n):
        raise ValueError("zero normal: no plane")
    s = n.dot(point)
    c = _ints([*n, s])
    if next(x for x in c[:3] if x != 0) < 0:
        c = [-x for x in c]
    return Tuple(*c)


# ---------- the key: from points on the plane ----------

def _points(v, p):
    k = p["kind"]
    if k == "points":
        return [_v(v["A"]), _v(v["B"]), _v(v["C"])]
    if k == "dirs":
        A = _v(v["A"])
        return [A, A + _v(v["b"]), A + _v(v["c"])]
    if k == "lines":
        a1, a2 = _v(v["a1"]), _v(v["a2"])
        return [a1, a1 + _v(v["b1"]), a2, a2 + _v(v["b2"])]
    if k == "pointline":
        a = _v(v["a"])
        return [_v(v["P"]), a, a + _v(v["b"])]
    if k == "axis":
        A = _v(v["A"])
        return [A, _v(v["B"]), A + _v(v["u"])]
    raise ValueError(k)


def key(v, p):
    rows = Matrix([[*q, -1] for q in _points(v, p)])
    ns = rows.nullspace()
    if len(ns) != 1:
        raise ValueError("the data do not fix one plane")
    c = _ints(list(ns[0]))
    if next(x for x in c[:3] if x != 0) < 0:
        c = [-x for x in c]
    return Tuple(*c)


# ---------- the (normal, point) each model writes ----------

def _fixed(v, p):
    k = p["kind"]
    return _v(v["a1"] if k == "lines" else v["P"] if k == "pointline" else v["A"])


def _right_dirs(v, p):
    """The two directions in the plane the method crosses."""
    k = p["kind"]
    if k == "points":
        A = _v(v["A"])
        return _v(v["B"]) - A, _v(v["C"]) - A
    if k == "dirs":
        return _v(v["b"]), _v(v["c"])
    if k == "lines":
        return _v(v["b1"]), _v(v["b2"])
    if k == "pointline":
        return _v(v["P"]) - _v(v["a"]), _v(v["b"])
    if k == "axis":
        return _v(v["B"]) - _v(v["A"]), _v(v["u"])
    raise ValueError(k)


def key_raw(v, p):
    d1, d2 = _right_dirs(v, p)
    return d1.cross(d2), _fixed(v, p)


def m1_raw(v, p):  # a point's position vector used as a direction in the plane, in place of AB (AC, AP)
    k = p["kind"]
    if k == "points":
        return _v(v["B"]).cross(_v(v["C"])), _v(v["A"])
    if k == "pointline":
        return _v(v["P"]).cross(_v(v["b"])), _v(v["P"])
    if k == "axis":
        return _v(v["B"]).cross(_v(v["u"])), _v(v["A"])
    raise ValueError("no vector joining two points to replace")


def m2_raw(v, p):  # a direction lying in the plane taken as its normal (the axis itself for kind axis)
    d1, d2 = _right_dirs(v, p)
    n = d2 if p["kind"] in ("axis", "pointline") else d1
    return n, _fixed(v, p)


def m3_raw(v, p):  # the cross product expanded with a plus sign on the j term
    n, pt = key_raw(v, p)
    if n[1] == 0:
        raise ValueError("the j component is 0: the slip gives the key")
    return Matrix([n[0], -n[1], n[2]]), pt


def m4_raw(v, p):  # r . n = 0: the point the plane passes through is dropped (the plane through O)
    n, _ = key_raw(v, p)
    return n, Matrix([0, 0, 0])


def m5_raw(v, p):  # the given directions b, c treated as points B, C: crosses b - a and c - a
    if p["kind"] != "dirs":
        raise ValueError("needs a point and two directions")
    A = _v(v["A"])
    return (_v(v["b"]) - A).cross(_v(v["c"]) - A), A


RAW = {"key": key_raw, "C07-M1": m1_raw, "C07-M2": m2_raw, "C07-M3": m3_raw, "C07-M4": m4_raw, "C07-M5": m5_raw}


def _plane(raw):
    return lambda v, p: canon(*raw(v, p))


MODELS = {"key": key, **{m: _plane(f) for m, f in RAW.items() if m != "key"}}
