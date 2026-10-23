"""C01 Distance on a number line: answer models (the key, and one per misconception).

Two kinds of item, chosen by p["ask"]:
- "dist": inputs a, b are the co-ordinates of A and B, in the order the stem names them; the
  answer is d(A, B), a number.
- "points": inputs a, d are the co-ordinate of A and a distance; the answer is the FiniteSet of
  co-ordinates of the points at distance d from A.
The key works from the definition (the distance is the size of the gap a - b; the points are the
real solutions of |x - a| = d); each misconception applies its wrong rule to the same numbers.
"""
from sympy import Abs, Eq, FiniteSet, S, Symbol, solveset, sympify

_x = Symbol("x", real=True)


def _ab(v):
    return sympify(v["a"]), sympify(v["b"])


def _ad(v):
    return sympify(v["a"]), sympify(v["d"])


def key(v, p):
    if p["ask"] == "dist":
        a, b = _ab(v)
        return Abs(a - b)
    a, d = _ad(v)
    return solveset(Eq(Abs(_x - a), d), _x, S.Reals)


def m1(v, p):
    """Ignores the signs: treats each co-ordinate as its size (-7 as 7)."""
    if p["ask"] == "dist":
        a, b = _ab(v)
        return Abs(Abs(a) - Abs(b))
    a, d = _ad(v)
    return FiniteSet(Abs(a) - d, Abs(a) + d)


def m2(v, p):
    """Always adds the sizes of the two co-ordinates, as if O always lay between the points."""
    if p["ask"] != "dist":
        raise ValueError("a distance item only")
    a, b = _ab(v)
    return Abs(a) + Abs(b)


def m3(v, p):
    """Subtracts in the order given, a - b, and keeps a negative result as the distance."""
    if p["ask"] != "dist":
        raise ValueError("a distance item only")
    a, b = _ab(v)
    if a - b >= 0:
        raise ValueError("the first co-ordinate is the larger: this gives the key")
    return a - b


def m4(v, p):
    """Counts the marks from A to B, both ends included, instead of the gaps between them."""
    if p["ask"] == "dist":
        a, b = _ab(v)
        return Abs(a - b) + 1
    a, d = _ad(v)
    return FiniteSet(a - (d - 1), a + (d - 1))


def m5(v, p):
    """Finds only the point to the right of A, forgetting the one on the left."""
    if p["ask"] != "points":
        raise ValueError("a points item only")
    a, d = _ad(v)
    return FiniteSet(a + d)


def m6(v, p):
    """Measures the distance from the origin O, not from A: gives -d and d."""
    if p["ask"] != "points":
        raise ValueError("a points item only")
    _, d = _ad(v)
    return FiniteSet(-d, d)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
