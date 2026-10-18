"""C05 Dot product and the angle between vectors: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  angle   inputs a, b (vectors) and optional params p, q ("(2, 1)"): the angle between
          u = p0 a + p1 b and w = q0 a + q1 b (u = a, w = b when p, q are absent);
  vertex  inputs P, Q, R (points): the angle QPR of the triangle;
  perp    inputs A, B, C (points), C holding one unknown symbol: its value that makes the
          triangle right-angled at A;
  sum3    inputs ma, mb, mc (magnitudes of a, b, c with a + b + c = 0); params what:
          "angle" (the angle between a and b) or "dots" (a.b + b.c + c.a).
Points and vectors come in as tuples "(1, -3, 4)". Angles are in radians.

The key never uses the dot product: angles come from the cosine rule on the triangle the
vectors make (cos theta = (|u|^2 + |w|^2 - |u - w|^2) / (2|u||w|)), a right angle from
Pythagoras, and a.b from |a||b| cos theta with theta read off that triangle.
"""
from sympy import Matrix, acos, asin, cos, pi, simplify, sin, solve, sqrt


def _v(t):
    return Matrix(list(t))


def _len2(u):
    return sum(c**2 for c in u)


def _len(u):
    return sqrt(_len2(u))


def _dot(u, w):
    return sum(x * y for x, y in zip(u, w))


def _nine(u, w):  # i.j = 1 like i.i: every product kept
    return sum(u) * sum(w)


def _pair(v, p):
    """The two vectors whose angle is asked."""
    if p["ask"] == "angle":
        a, b = _v(v["a"]), _v(v["b"])
        if "p" in p:
            (p0, p1), (q0, q1) = [tuple(int(s) for s in p[k].strip("()").split(",")) for k in ("p", "q")]
            return p0 * a + p1 * b, q0 * a + q1 * b
        return a, b
    if p["ask"] == "vertex":
        P, Q, R = _v(v["P"]), _v(v["Q"]), _v(v["R"])
        return Q - P, R - P
    raise ValueError("no pair of vectors")


def _acos(c):
    c = simplify(c)
    if abs(c) > 1:
        raise ValueError(f"cos theta = {c} is impossible")
    return acos(c)


def _cos_rule(x, y, opp):
    """cos of the angle between sides x and y of a triangle whose third side is opp."""
    return (x**2 + y**2 - opp**2) / (2 * x * y)


def _sum3_angles(v):
    """The angles between a and b, b and c, c and a when a + b + c = 0: head to tail they make a
    triangle, and the angle between two of them is 180 degrees minus the triangle's angle."""
    a, b, c = v["ma"], v["mb"], v["mc"]
    return {("a", "b"): pi - acos(_cos_rule(a, b, c)), ("b", "c"): pi - acos(_cos_rule(b, c, a)),
            ("c", "a"): pi - acos(_cos_rule(c, a, b))}


def _mags(v):
    return {"a": v["ma"], "b": v["mb"], "c": v["mc"]}


def _unknown(v):
    (s,) = _v(v["C"]).free_symbols
    return s


def _solve1(eq, s):
    sol = solve(eq, s)
    if len(sol) != 1:
        raise ValueError(f"{len(sol)} solutions")
    return sol[0]


def key(v, p):
    if p["ask"] in ("angle", "vertex"):
        u, w = _pair(v, p)
        return _acos(_cos_rule(_len(u), _len(w), _len(u - w)))
    if p["ask"] == "perp":  # Pythagoras: AB^2 + AC^2 = BC^2
        A, B, C = _v(v["A"]), _v(v["B"]), _v(v["C"])
        return _solve1(_len2(B - A) + _len2(C - A) - _len2(C - B), _unknown(v))
    if p["ask"] == "sum3":
        th, m = _sum3_angles(v), _mags(v)
        if p["what"] == "angle":
            return th[("a", "b")]
        return simplify(sum(m[x] * m[y] * cos(t) for (x, y), t in th.items()))
    raise ValueError(p["ask"])


def m1(v, p):  # takes i.j = 1 like i.i, so keeps all nine products: (a1 + a2 + a3)(b1 + b2 + b3)
    if p["ask"] in ("angle", "vertex"):
        u, w = _pair(v, p)
        return _acos(_nine(u, w) / (_len(u) * _len(w)))
    if p["ask"] == "perp":
        A, B, C = _v(v["A"]), _v(v["B"]), _v(v["C"])
        return _solve1(_nine(B - A, C - A), _unknown(v))
    raise ValueError("no components")


def m2(v, p):  # uses sin theta in place of cos theta: a.b = |a||b| sin theta
    if p["ask"] in ("angle", "vertex"):
        u, w = _pair(v, p)
        s = simplify(_dot(u, w) / (_len(u) * _len(w)))
        if s < 0:
            raise ValueError("negative sine")
        return asin(s)
    if p["ask"] == "sum3":
        th, m = _sum3_angles(v), _mags(v)
        if p["what"] == "angle":  # a.b found correctly, then sin theta = a.b / (|a||b|)
            return asin(simplify(cos(th[("a", "b")])))
        return simplify(sum(m[x] * m[y] * sin(t) for (x, y), t in th.items()))
    raise ValueError("no angle")


def m3(v, p):  # places the vectors head to tail, so works with the supplement: cos theta changes sign
    if p["ask"] in ("angle", "vertex"):
        return pi - key(v, p)
    if p["ask"] == "sum3":
        return pi - key(v, p) if p["what"] == "angle" else -key(v, p)
    raise ValueError("no angle")


def m4(v, p):  # mixes up |a| and |a|^2: divides by |u|^2|w|^2, or writes a.a = |a|
    if p["ask"] in ("angle", "vertex"):
        u, w = _pair(v, p)
        return _acos(_dot(u, w) / (_len2(u) * _len2(w)))
    if p["ask"] == "sum3":
        a, b, c = v["ma"], v["mb"], v["mc"]
        if p["what"] == "angle":  # c.c = (a + b).(a + b) read as |c| = |a| + |b| + 2 a.b
            return _acos((c - a - b) / 2 / (a * b))
        return -(a + b + c) / 2  # 0 = |a| + |b| + |c| + 2(a.b + b.c + c.a)
    raise ValueError("no magnitudes")


def m5(v, p):  # uses the parallel test (proportional components) for perpendicular
    if p["ask"] != "perp":
        raise ValueError("no perpendicular test")
    A, B, C = _v(v["A"]), _v(v["B"]), _v(v["C"])
    u, w, s = B - A, C - A, _unknown(v)
    ks = {simplify(wi / ui) for ui, wi in zip(u, w) if s not in wi.free_symbols and ui != 0}
    if len(ks) != 1:
        raise ValueError("the known components are not in one ratio")
    (k,) = ks
    (j,) = [i for i in range(3) if s in w[i].free_symbols]
    return _solve1(w[j] - k * u[j], s)


def m6(v, p):  # uses the position vectors of the points instead of the sides from the vertex
    if p["ask"] == "vertex":
        Q, R = _v(v["Q"]), _v(v["R"])
        return _acos(_dot(Q, R) / (_len(Q) * _len(R)))
    if p["ask"] == "perp":
        B, C = _v(v["B"]), _v(v["C"])
        return _solve1(_dot(B, C), _unknown(v))
    raise ValueError("no points")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
