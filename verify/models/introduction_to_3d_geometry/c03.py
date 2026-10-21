"""C03 Collinear points and shapes: answer models (the key, and one per misconception).

Points are Tuples (x, y, z). p["ask"] picks the question type:
  tri     three points A, B, C -> a named answer: collinear, equilateral, right_isosceles,
          right_angled, isosceles or scalene (a scalene triangle with no right angle)
  para_k  A, B, C and D = (.., .., k) with one unknown k; ABCD is a parallelogram -> k
  axis    A, B and p["axis"] in {"x", "y", "z"}: the point on that axis equidistant from A
          and B -> the point, as a Tuple
"""
from sympy import Abs, FiniteSet, Matrix, Rational, Symbol, Tuple, solve, sqrt, simplify

COLLINEAR, EQUILATERAL = Symbol("collinear"), Symbol("equilateral")
RIGHT_ISO, RIGHT, ISO, SCALENE = Symbol("right_isosceles"), Symbol("right_angled"), Symbol("isosceles"), Symbol("scalene")
K = Symbol("k")
AXES = {"x": 0, "y": 1, "z": 2}


def _m(P):
    return Matrix(list(P))


def _d2(P, Q):
    """Squared distance, straight from the definition."""
    d = _m(Q) - _m(P)
    return simplify(d.dot(d))


def _named(right, iso, equi):
    if equi:
        return EQUILATERAL
    if right:
        return RIGHT_ISO if iso else RIGHT
    return ISO if iso else SCALENE


def _sides(A, B, C):
    return [_d2(A, B), _d2(B, C), _d2(C, A)]


def _iso(s):
    return s[0] == s[1] or s[1] == s[2] or s[0] == s[2]


def _right_by_angles(A, B, C):
    """A right angle at some vertex: the two edges from it are perpendicular (dot product 0)."""
    P = [_m(A), _m(B), _m(C)]
    return any((P[(i + 1) % 3] - P[i]).dot(P[(i + 2) % 3] - P[i]) == 0 for i in range(3))


def _classify(A, B, C):
    """The key, from the definitions: collinear when AB and AC point the same way (cross product 0)."""
    if (_m(B) - _m(A)).cross(_m(C) - _m(A)) == Matrix([0, 0, 0]):
        return COLLINEAR
    s = _sides(A, B, C)
    return _named(_right_by_angles(A, B, C), _iso(s), s[0] == s[1] == s[2])


def _unsigned(P):
    """M5's point: every minus sign on a coordinate dropped (the unknown k is left alone)."""
    return Tuple(*[Abs(c) if c.is_number else c for c in P])


def _ask(p):
    return p["ask"]


# ---- the key ----
def key(v, p):
    if _ask(p) == "tri":
        return _classify(v["A"], v["B"], v["C"])
    if _ask(p) == "para_k":
        # Definition: ABCD is a parallelogram when the step from A to B equals the step from D to C.
        D = _m(v["D"])
        sol = solve(list(_m(v["B"]) - _m(v["A"]) - (_m(v["C"]) - D)), K, dict=True)
        if len(sol) != 1:
            raise ValueError("no single k makes ABCD a parallelogram")
        return sol[0][K]
    if _ask(p) == "axis":
        return _axis_point(v["A"], v["B"], p["axis"])
    raise ValueError(_ask(p))


def _axis_point(A, B, axis):
    t = Symbol("t")
    P = [0, 0, 0]
    P[AXES[axis]] = t
    sol = solve(_d2(Tuple(*P), A) - _d2(Tuple(*P), B), t)
    if len(sol) != 1:
        raise ValueError("no single point on the axis")
    P[AXES[axis]] = sol[0]
    return Tuple(*P)


# ---- M1: two equal distances mean the points are collinear (the equidistant point is the mid-point) ----
def m1(v, p):
    if _ask(p) == "tri":
        s = _sides(v["A"], v["B"], v["C"])
        if _iso(s):
            return COLLINEAR
        return _named(_right_by_angles(v["A"], v["B"], v["C"]), False, False)
    if _ask(p) == "axis":
        i = AXES[p["axis"]]
        P = [0, 0, 0]
        P[i] = (v["A"][i] + v["B"][i]) / 2
        return Tuple(*P)
    raise ValueError("M1 is about triangles and equidistant points")


# ---- M2: right-angled when two sides add up to the third (no squares); collinearity never checked ----
def m2(v, p):
    if _ask(p) != "tri":
        raise ValueError("M2 is about triangles")
    s = _sides(v["A"], v["B"], v["C"])
    r = sorted([sqrt(x) for x in s], key=lambda e: float(e))
    right = simplify(r[0] + r[1] - r[2]) == 0
    return _named(right, _iso(s), s[0] == s[1] == s[2])


# ---- M3: a parallelogram has its adjacent sides equal (sets CD = DA, the two sides at D) ----
def m3(v, p):
    if _ask(p) != "para_k":
        raise ValueError("M3 is about parallelograms")
    sol = solve(_d2(v["C"], v["D"]) - _d2(v["D"], v["A"]), K)
    return sol[0] if len(sol) == 1 else FiniteSet(*sol)


# ---- M4: one pair of opposite sides equal is enough (uses AB = CD only) ----
def m4(v, p):
    if _ask(p) != "para_k":
        raise ValueError("M4 is about parallelograms")
    sol = solve(_d2(v["A"], v["B"]) - _d2(v["C"], v["D"]), K)
    return sol[0] if len(sol) == 1 else FiniteSet(*sol)


# ---- M5: drops the minus signs of negative coordinates in the distance formula ----
def m5(v, p):
    u = {n: _unsigned(P) for n, P in v.items()}
    if _ask(p) == "tri":
        return _classify(u["A"], u["B"], u["C"])
    if _ask(p) == "para_k":
        eqs = [_d2(u["A"], u["B"]) - _d2(u["C"], u["D"]), _d2(u["B"], u["C"]) - _d2(u["D"], u["A"])]
        sol = solve(eqs, K, dict=True)
        if len(sol) != 1:
            raise ValueError("M5 finds no single k")
        return sol[0][K]
    if _ask(p) == "axis":
        return _axis_point(u["A"], u["B"], p["axis"])
    raise ValueError(_ask(p))


# ---- M6: a sign slip moving terms across the equals sign (the axis point comes out reflected) ----
def m6(v, p):
    if _ask(p) != "axis":
        raise ValueError("M6 is about the equidistant point on an axis")
    return Tuple(*[-c for c in _axis_point(v["A"], v["B"], p["axis"])])


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
