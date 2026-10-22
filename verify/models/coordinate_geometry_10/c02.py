"""C02 Collinear points by distances: answer models (the key, and one per misconception).

Inputs are the three points, keyed by their letters ({"P": (-2, -6), "Q": ..., "R": ...}),
in the order the stem names them. params["ask"] picks the question type:
  type   "Do the points form a triangle? If so, what type?" -> a named answer:
         collinear, scalene, isosceles, right_angled (no equal sides) or right_isosceles
         ("scalene" and "isosceles" here mean: with no right angle)
  part   the points are collinear with params["mid"] between the other two; the stem gives
         the whole length (end to end) and one part, and asks for the other part,
         params["find"] (e.g. "AC") -> that length

The key never uses the sum-of-distances test: collinearity is a zero cross product, a right
angle a zero dot product, and lengths come straight from the co-ordinates.
"""
from sympy import Symbol, sqrt, simplify, sqrtdenest

COLLINEAR, SCALENE, ISO = Symbol("collinear"), Symbol("scalene"), Symbol("isosceles")
RIGHT, RIGHT_ISO = Symbol("right_angled"), Symbol("right_isosceles")


def _pts(v):
    """[(letter, (x, y)), ...] in the stem's order."""
    return [(k, tuple(v[k])) for k in v]


def _d2(P, Q):
    return simplify((Q[0] - P[0]) ** 2 + (Q[1] - P[1]) ** 2)


def _d2_added(P, Q):
    """The slip: adds the co-ordinates instead of subtracting them."""
    return simplify((Q[0] + P[0]) ** 2 + (Q[1] + P[1]) ** 2)


def _len(v, name):
    P = dict(_pts(v))
    return sqrtdenest(sqrt(_d2(P[name[0]], P[name[1]])))


def _three(v, d2=_d2):
    """The three squared distances, in the order AB, BC, CA of the stem's letters."""
    (_, A), (_, B), (_, C) = _pts(v)
    s = [d2(A, B), d2(B, C), d2(C, A)]
    if any(x == 0 for x in s):
        raise ValueError("two points coincide")
    return s


def _iso(s):
    return len(set(s)) < 3


def _sum_of_two(lengths):
    """Do the two shorter lengths add up to the longest?"""
    a, b, c = sorted(lengths, key=lambda e: float(e))
    return simplify(a + b - c) == 0


def _named(right, iso):
    if right:
        return RIGHT_ISO if iso else RIGHT
    return ISO if iso else SCALENE


def _classify_by_squares(s):
    """A true triangle, named from its squared sides (right by the converse of Pythagoras)."""
    a, b, c = sorted(s, key=lambda e: float(e))
    return _named(simplify(a + b - c) == 0, _iso(s))


def key(v, p):
    if p["ask"] == "part":
        return _len(v, p["find"])
    (_, A), (_, B), (_, C) = _pts(v)
    u = (B[0] - A[0], B[1] - A[1])
    w = (C[0] - A[0], C[1] - A[1])
    if simplify(u[0] * w[1] - u[1] * w[0]) == 0:
        return COLLINEAR
    pts = [A, B, C]
    right = False
    for i in range(3):
        P, Q, R = pts[i], pts[(i + 1) % 3], pts[(i + 2) % 3]
        if simplify((Q[0] - P[0]) * (R[0] - P[0]) + (Q[1] - P[1]) * (R[1] - P[1])) == 0:
            right = True
    return _named(right, _iso(_three(v)))


def _parts(v, p):
    """(whole, given part) for a 'part' item: the whole joins the two ends."""
    letters = [k for k in v]
    ends = [k for k in letters if k != p["mid"]]
    whole = _len(v, "".join(ends))
    other = [k for k in ends if k not in p["find"]][0]
    given = _len(v, p["mid"] + other)
    return whole, given


def m1(v, p):
    """sqrt(a) + sqrt(b) = sqrt(a + b): the student adds (or subtracts) under the root signs,
    so the collinear test becomes a test on squared distances."""
    if p["ask"] == "part":
        whole, given = _parts(v, p)
        return sqrtdenest(sqrt(simplify(whole ** 2 - given ** 2)))
    s = _three(v)
    a, b, c = sorted(s, key=lambda e: float(e))
    if simplify(a + b - c) == 0:
        return COLLINEAR
    return _named(False, _iso(s))


def m2(v, p):
    """Mixes up the two tests: two lengths adding up to the third means a right angle,
    never collinear points (and true right angles go unseen)."""
    if p["ask"] != "type":
        raise ValueError("only for naming the figure")
    s = _three(v)
    return _named(_sum_of_two([sqrt(x) for x in s]), _iso(s))


def m3(v, p):
    """Takes 'lies between' to mean 'is the mid-point': a point between two others is
    equally far from both, and two equal distances make the points collinear."""
    if p["ask"] == "part":
        return _parts(v, p)[1]
    s = _three(v)
    if _iso(s):
        return COLLINEAR
    return key(v, p)


def m4(v, p):
    """Distance-formula slip: adds the co-ordinates instead of subtracting, then tests rightly."""
    if p["ask"] != "type":
        raise ValueError("only for naming the figure")
    s = _three(v, _d2_added)
    if _sum_of_two([sqrt(x) for x in s]):
        return COLLINEAR
    return _classify_by_squares(s)


def m5(v, p):
    """Adds the two given lengths to get the third, whichever point lies between."""
    if p["ask"] != "part":
        raise ValueError("only for a missing length")
    whole, given = _parts(v, p)
    return simplify(whole + given)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
