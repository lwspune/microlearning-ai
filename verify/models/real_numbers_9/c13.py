"""C13 Equations with absolute value: answer models (the key, and one per misconception).

Inputs (sympy): the equation |a*x + b| = c with c > 0, so a and b may be fractions
(|(8 - x)/2| = 5 is a = -1/2, b = 4, c = 5).
Params: none. Every answer is a FiniteSet of the values of x.
"""
from sympy import FiniteSet, Symbol, solve

X = Symbol("x", real=True)


def _abc(v):
    return v["a"], v["b"], v["c"]


def key(v, p):
    # Straight from the definition: every real x whose inside has absolute value c.
    a, b, c = _abc(v)
    sols = solve((a * X + b) ** 2 - c ** 2, X)
    return FiniteSet(*[s for s in sols if abs(a * s + b) == c])


def m1(v, p):
    """Solves only ax + b = c and forgets the case ax + b = -c."""
    a, b, c = _abc(v)
    return FiniteSet((c - b) / a)


def m2(v, p):
    """Takes the two answers as a number and its negative: x = ±k, where k solves ax + b = c."""
    a, b, c = _abc(v)
    k = (c - b) / a
    if k == 0:
        raise ValueError("k = 0 has no opposite")
    return FiniteSet(k, -k)


def m3(v, p):
    """Thinks the bars make every term inside positive: |x - 5| = x + 5, then solves that once."""
    a, b, c = _abc(v)
    if a > 0 and b >= 0:
        raise ValueError("nothing inside is negative")
    return FiniteSet((c - abs(b)) / abs(a))


def m4(v, p):
    """Moves the number b across without changing its sign: ax = c + b and ax = -c + b."""
    a, b, c = _abc(v)
    if b == 0:
        raise ValueError("no number to move")
    return FiniteSet((c + b) / a, (-c + b) / a)


def m5(v, p):
    """Rejects a negative answer, thinking an absolute value equation can't have one."""
    k = key(v, p)
    kept = FiniteSet(*[s for s in k if s >= 0])
    if kept == k or kept == FiniteSet():
        raise ValueError("no negative answer to reject, or nothing left")
    return kept


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3,
          "C13-M4": m4, "C13-M5": m5}
