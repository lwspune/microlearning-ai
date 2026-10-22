"""C04 Naming shapes from distances: answer models (the key, and one per misconception).

inputs: x1, y1, x2, y2, x3, y3 (and x4, y4 for a quadrilateral): the vertices in the stem's order
(A, B, C or A, B, C, D, joined in that order). params["shape"]: "tri" or "quad".

The answer is a named Symbol: parallelogram, rhombus, rectangle, square, not_parallelogram for a
quadrilateral; equilateral, isosceles, scalene, right, right_isosceles for a triangle.

The key never runs the distance procedure being taught. A quadrilateral is a parallelogram when its
diagonals share a midpoint (A + C = B + D); it is a rectangle when, besides, the angle at B is right
(a zero dot product), and a rhombus when its diagonals are perpendicular. A triangle is right-angled
when two side vectors at a vertex have a zero dot product; equal sides are compared as v . v.
Each misconception runs the book's procedure (compare sides, then diagonals or a^2 + b^2 = c^2)
with its own wrong step.
"""
from sympy import Abs, Symbol, simplify, sqrt, sympify

N = {n: Symbol(n) for n in ("parallelogram", "rhombus", "rectangle", "square", "not_parallelogram",
                            "equilateral", "isosceles", "scalene", "right", "right_isosceles")}


def _pts(v, p):
    n = 4 if p["shape"] == "quad" else 3
    return [(sympify(v[f"x{i}"]), sympify(v[f"y{i}"])) for i in range(1, n + 1)]


def _eq(a, b):
    return simplify(a - b) == 0


def _sub(P, Q):
    return (Q[0] - P[0], Q[1] - P[1])


def _dot(u, w):
    return u[0] * w[0] + u[1] * w[1]


def euclid(P, Q):
    dx, dy = _sub(P, Q)
    return sqrt(dx**2 + dy**2)


def taxicab(P, Q):
    dx, dy = _sub(P, Q)
    return Abs(dx) + Abs(dy)


# ---------- the key: midpoints and dot products ----------

def _key_quad(A, B, C, D):
    if not (_eq(A[0] + C[0], B[0] + D[0]) and _eq(A[1] + C[1], B[1] + D[1])):
        return N["not_parallelogram"]
    rect = _eq(_dot(_sub(B, A), _sub(B, C)), 0)
    rhom = _eq(_dot(_sub(A, C), _sub(B, D)), 0)
    if rect and rhom:
        return N["square"]
    return N["rectangle"] if rect else N["rhombus"] if rhom else N["parallelogram"]


def _key_tri(A, B, C):
    right = any(_eq(_dot(_sub(P, Q), _sub(P, R)), 0) for P, Q, R in ((A, B, C), (B, C, A), (C, A, B)))
    sq = [_dot(_sub(P, Q), _sub(P, Q)) for P, Q in ((A, B), (B, C), (C, A))]
    equal = sum(_eq(sq[i], sq[j]) for i, j in ((0, 1), (1, 2), (0, 2)))
    if equal == 3:
        return N["equilateral"]
    if right:
        return N["right_isosceles"] if equal else N["right"]
    return N["isosceles"] if equal else N["scalene"]


def key(v, p):
    P = _pts(v, p)
    return _key_quad(*P) if p["shape"] == "quad" else _key_tri(*P)


# ---------- the book's procedure, with switches for each wrong step ----------

def _quad(v, p, length=euclid, pairs=((0, 2), (1, 3)), diagonals="check", swap=False):
    """sides AB, BC, CD, DA; `pairs` are the sides compared as opposite.
    diagonals: "check" (the book), "skip" (never looked at), "assume_equal" (sides alone name it)."""
    if p["shape"] != "quad":
        raise ValueError("a quadrilateral rule")
    A, B, C, D = _pts(v, p)
    s = [length(A, B), length(B, C), length(C, D), length(D, A)]
    if all(_eq(s[0], x) for x in s[1:]):
        name = "rhombus"
    elif all(_eq(s[i], s[j]) for i, j in pairs):
        name = "parallelogram"
    else:
        return N["not_parallelogram"]
    if diagonals == "assume_equal" or (diagonals == "check" and _eq(length(A, C), length(B, D))):
        name = {"rhombus": "square", "parallelogram": "rectangle"}[name]
    if swap:
        name = {"rhombus": "rectangle", "rectangle": "rhombus"}.get(name, name)
    return N[name]


def _tri(v, p, length=euclid, test_right=True, test_sides=True):
    if p["shape"] != "tri":
        raise ValueError("a triangle rule")
    A, B, C = _pts(v, p)
    s = [length(A, B), length(B, C), length(C, A)]
    equal = sum(_eq(s[i], s[j]) for i, j in ((0, 1), (1, 2), (0, 2)))
    right = test_right and any(_eq(s[i] ** 2 + s[j] ** 2, s[k] ** 2) for i, j, k in ((0, 1, 2), (1, 2, 0), (0, 2, 1)))
    if equal == 3:
        return N["equilateral"]
    if right:
        return N["right_isosceles"] if (equal and test_sides) else N["right"]
    return N["isosceles"] if equal else N["scalene"]


def m1(v, p):
    """Names a quadrilateral from its sides alone: all four equal is a square, two equal pairs a rectangle."""
    return _quad(v, p, diagonals="assume_equal")


def m2(v, p):
    """Stops at the sides: never checks the diagonals (quadrilateral) or a^2 + b^2 = c^2 (triangle)."""
    return _quad(v, p, diagonals="skip") if p["shape"] == "quad" else _tri(v, p, test_right=False)


def m3(v, p):
    """Compares neighbouring sides (AB with BC, CD with DA) as if they were the opposite pairs."""
    return _quad(v, p, pairs=((0, 1), (2, 3)))


def m4(v, p):
    """Takes a length as |x2 - x1| + |y2 - y1| (no squares, no square root), then names correctly."""
    return _quad(v, p, length=taxicab) if p["shape"] == "quad" else _tri(v, p, length=taxicab)


def m5(v, p):
    """Swaps rhombus and rectangle: believes a rectangle has all sides equal, a rhombus equal diagonals."""
    return _quad(v, p, swap=True)


def m6(v, p):
    """Stops once a^2 + b^2 = c^2 holds: names a right-angled isosceles triangle just 'right-angled'."""
    return _tri(v, p, test_sides=False)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
