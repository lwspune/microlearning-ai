"""C06 Projection of a vector: answer models (the key, and one per misconception).

params["ask"] says what the item asks, always about projecting a vector a on a vector b:
  scalar  the scalar projection of a on b (a number);
  vector  the vector projection of a on b (a Matrix column);
  perp    the part of a perpendicular to b, a minus its vector projection (a Matrix column).
Inputs are vectors as tuples "(3, 4, -5)": a and b, or points P, Q, A, B, with a = PQ and b = AB.

The key comes from the picture, not the formula: the foot of the perpendicular from the tip of a
to the line of b is t b with (a - t b) . b = 0, solved for t. The vector projection is t b; the
scalar projection is its length, signed + when t b points along b and - when it points against b.
"""
from sympy import Abs, Matrix, linsolve, sign, sqrt, symbols


def _v(t):
    return Matrix(list(t))


def _ab(v):
    if "P" in v:
        return _v(v["Q"]) - _v(v["P"]), _v(v["B"]) - _v(v["A"])
    return _v(v["a"]), _v(v["b"])


def _len(u):
    return sqrt(u.dot(u))


def _ask(p, a, along, coef):
    """The answer when the student's vector projection is coef * along."""
    if p["ask"] == "vector":
        return coef * along
    if p["ask"] == "perp":
        return a - coef * along
    raise ValueError("not a vector question")


def key(v, p):
    a, b = _ab(v)
    t = symbols("t")
    ((tt,),) = list(linsolve([(a - t * b).dot(b)], [t]))
    foot = tt * b
    if p["ask"] == "scalar":
        return sign(tt) * _len(foot)
    return _ask(p, a, b, tt)


def m1(v, p):  # swaps the roles: projects b on a (divides by |a|, points along a)
    a, b = _ab(v)
    d = a.dot(b)
    if p["ask"] == "scalar":
        return d / _len(a)
    return _ask(p, a, a, d / a.dot(a))


def m2(v, p):  # takes a . b itself as the projection: never divides by |b|
    a, b = _ab(v)
    d = a.dot(b)
    if p["ask"] == "scalar":
        return d
    return _ask(p, a, b, d)


def m3(v, p):  # wrong power of |b|: |b|^2 under the scalar projection, |b| under the vector one
    a, b = _ab(v)
    d = a.dot(b)
    if p["ask"] == "scalar":
        return d / b.dot(b)
    return _ask(p, a, b, d / _len(b))


def m4(v, p):  # a projection is a length, so it is never negative: drops the sign of a . b
    a, b = _ab(v)
    d = a.dot(b)
    if d >= 0:
        raise ValueError("a . b is not negative: the model gives the key")
    if p["ask"] == "scalar":
        return Abs(d) / _len(b)
    return _ask(p, a, b, Abs(d) / b.dot(b))


def m5(v, p):  # right number, wrong direction: multiplies (a . b)/|b|^2 by a instead of b
    a, b = _ab(v)
    if p["ask"] == "scalar":
        raise ValueError("no direction in a scalar answer")
    return _ask(p, a, a, a.dot(b) / b.dot(b))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
