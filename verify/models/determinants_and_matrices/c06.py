"""C06 Area of a triangle and collinearity: answer models (the key, and one per misconception).

Inputs: the vertices x1, y1, x2, y2, x3, y3 (in the order the question lists them; a coordinate
may be the unknown k) and, for a given area, A. params["ask"]:
- "area": the area of the triangle (a number).
- "collinear": the value of k that makes the points collinear (a number).
- "k_area": every value of k that gives the triangle area A (a FiniteSet).

The key works from the cross product of the edge vectors AB and AC, never from the determinant
the concept teaches. The misconception models expand the determinant the way a student would.
"""
from sympy import Abs, FiniteSet, Symbol, solve

k = Symbol("k")


def _pts(v):
    return v["x1"], v["y1"], v["x2"], v["y2"], v["x3"], v["y3"]


def _cross(v):
    """Twice the signed area, from the edge vectors AB and AC."""
    x1, y1, x2, y2, x3, y3 = _pts(v)
    return (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)


def _det(v, middle=-1, last=1):
    """The determinant |x y 1| expanded along the first row: x1 M11 - y1 M12 + 1 M13.
    middle=+1 drops the minus on the middle term (M3); last=-1 takes the last minor backwards (M6)."""
    x1, y1, x2, y2, x3, y3 = _pts(v)
    return x1 * (y2 - y3) + middle * y1 * (x2 - x3) + last * (x2 * y3 - x3 * y2)


def _one_root(expr):
    roots = solve(expr, k)
    if len(roots) != 1:
        raise ValueError(f"expected one value of k, got {roots}")
    return roots[0]


def _roots(eqs):
    out = set()
    for e in eqs:
        out |= set(solve(e, k))
    return FiniteSet(*out)


def _answer(d, v, p):
    """The answer a student gets from 'twice the signed area' d, used correctly."""
    ask = p["ask"]
    if ask == "area":
        return Abs(d) / 2
    if ask == "collinear":
        return _one_root(d)
    if ask == "k_area":
        return _roots([d - 2 * v["A"], d + 2 * v["A"]])
    raise ValueError(ask)


def key(v, p):
    return _answer(_cross(v), v, p)


def m1(v, p):
    """Takes the determinant itself as the area: no 1/2."""
    d = _det(v)
    if p["ask"] == "area":
        return Abs(d)
    if p["ask"] == "k_area":
        return _roots([d - v["A"], d + v["A"]])
    raise ValueError("collinearity is the same with or without the 1/2")


def m2(v, p):
    """Takes (1/2) det as the area, sign and all: no absolute value, so no +/-."""
    d = _det(v)
    if p["ask"] == "area":
        if d >= 0:
            raise ValueError("a positive determinant gives the key")
        return d / 2
    if p["ask"] == "k_area":
        return FiniteSet(*solve(d - 2 * v["A"], k))
    raise ValueError("collinearity has no sign to lose")


def m3(v, p):
    """Expands with signs + + + (the middle term not negated)."""
    return _answer(_det(v, middle=1), v, p)


def m4(v, p):
    """From (1/2)|det| = A writes |det| = A/2: halves the area instead of doubling it."""
    if p["ask"] != "k_area":
        raise ValueError("only for a given area")
    d = _det(v)
    return _roots([d - v["A"] / 2, d + v["A"] / 2])


def m5(v, p):
    """Solves a*k + b = 0 as k = b/a: the sign lost moving b across."""
    if p["ask"] != "collinear":
        raise ValueError("only for collinearity")
    d = _det(v).expand()
    a, b = d.coeff(k, 1), d.coeff(k, 0)
    if a == 0 or d.coeff(k, 2) != 0:
        raise ValueError("not linear in k")
    return b / a


def m6(v, p):
    """Takes the last minor backwards: x3*y2 - x2*y3 in place of x2*y3 - x3*y2."""
    return _answer(_det(v, last=-1), v, p)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
