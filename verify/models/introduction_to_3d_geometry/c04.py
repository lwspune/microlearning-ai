"""C04 Mid-point and centroid: answer models (the key, and one per misconception).

params["ask"] picks the question type (points are 3-tuples):
  other_end  P, M (inputs): M is the mid-point of PQ -> Q
  vertex     A, B, G (inputs): G is the centroid of triangle ABC -> C
  fourth     A, B, C (inputs): three vertices of the parallelogram ABCD -> D
  meet       A, B, C (inputs): the same parallelogram -> the point where its diagonals meet
  median     A, B, C (inputs): triangle ABC -> the length of the median through A

The key works from the definitions: the mid-point is the point halfway along PQ, P + (Q - P)/2;
the centroid is the average of the vertices, solved for the unknown vertex with sympy; in a
parallelogram ABCD the side DC is AB moved across (D = C - (B - A)), and its diagonals AC, BD meet
halfway along AC; a median joins a vertex to the mid-point of the opposite side.
"""
from sympy import Rational, Symbol, Tuple, solve, sqrt

_HALF = Rational(1, 2)


def _pt(*cs):
    return Tuple(*cs)


def _add(*ps):
    return _pt(*[sum(c) for c in zip(*ps)])


def _sub(p, q):
    return _pt(*[a - b for a, b in zip(p, q)])


def _mul(k, p):
    return _pt(*[k * a for a in p])


def _dist(p, q):
    return sqrt(sum((a - b) ** 2 for a, b in zip(p, q)))


def _ask(p):
    return p["ask"]


def key(v, p):
    a = _ask(p)
    if a == "other_end":
        P, M = v["P"], v["M"]
        q = [Symbol(f"q{i}") for i in range(3)]
        sol = solve([P[i] + (q[i] - P[i]) / 2 - M[i] for i in range(3)], q, dict=True)[0]
        return _pt(*[sol[s] for s in q])
    if a == "vertex":
        A, B, G = v["A"], v["B"], v["G"]
        c = [Symbol(f"c{i}") for i in range(3)]
        sol = solve([(A[i] + B[i] + c[i]) / 3 - G[i] for i in range(3)], c, dict=True)[0]
        return _pt(*[sol[s] for s in c])
    A, B, C = v["A"], v["B"], v["C"]
    if a == "fourth":
        return _sub(C, _sub(B, A))
    if a == "meet":
        return _add(A, _mul(_HALF, _sub(C, A)))
    if a == "median":
        D = _add(B, _mul(_HALF, _sub(C, B)))
        return _dist(A, D)
    raise ValueError(a)


def m1(v, p):
    """Halves the difference: the mid-point of PQ taken as (Q - P)/2."""
    a = _ask(p)
    if a == "other_end":  # (Q - P)/2 = M
        return _add(_mul(2, v["M"]), v["P"])
    if a == "fourth":  # (C - A)/2 = (D - B)/2
        return _sub(_add(v["B"], v["C"]), v["A"])
    if a == "meet":
        return _mul(_HALF, _sub(v["C"], v["A"]))
    if a == "median":
        return _dist(v["A"], _mul(_HALF, _sub(v["C"], v["B"])))
    raise ValueError("no mid-point here")


def m2(v, p):
    """Divides the centroid's sum by 2: G = (A + B + C)/2."""
    if _ask(p) == "vertex":
        return _sub(_mul(2, v["G"]), _add(v["A"], v["B"]))
    raise ValueError("no centroid to solve for")


def m3(v, p):
    """Pairs A with B as a diagonal (diagonals AB and CD), so A + B = C + D."""
    a = _ask(p)
    if a == "fourth":
        return _sub(_add(v["A"], v["B"]), v["C"])
    if a == "meet":
        return _mul(_HALF, _add(v["A"], v["B"]))
    raise ValueError("no parallelogram")


def m4(v, p):
    """Takes the median's length as the distance from the vertex to the centroid."""
    if _ask(p) == "median":
        G = _mul(Rational(1, 3), _add(v["A"], v["B"], v["C"]))
        return _dist(v["A"], G)
    raise ValueError("no median")


def m5(v, p):
    """Leaves out the 1/2 (or 1/3): a mid-point or centroid written as the plain sum."""
    a = _ask(p)
    if a == "other_end":  # P + Q = M
        return _sub(v["M"], v["P"])
    if a == "vertex":  # A + B + C = G
        return _sub(v["G"], _add(v["A"], v["B"]))
    if a == "fourth":  # mid-point of AC found, then B + D = that mid-point
        return _sub(_mul(_HALF, _add(v["A"], v["C"])), v["B"])
    if a == "meet":
        return _add(v["A"], v["C"])
    if a == "median":
        return _dist(v["A"], _add(v["B"], v["C"]))
    raise ValueError(a)


def m6(v, p):
    """Averages the points it is given instead of solving for the unknown one."""
    a = _ask(p)
    if a == "other_end":
        return _mul(_HALF, _add(v["P"], v["M"]))
    if a == "vertex":
        return _mul(Rational(1, 3), _add(v["A"], v["B"], v["G"]))
    raise ValueError("nothing to solve for")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
