"""C09 Forming an equation from its roots: answer models (the key, and one per misconception).

Inputs (sympy): either the two roots r1, r2, or the sum S and product P of the roots.
Every answer is the left side E of "E = 0" in x, written with integer coefficients that have
no common factor and a positive coefficient of x^2 (so equal equations give equal values).
"""
from functools import reduce

from sympy import Poly, Rational, Symbol, expand, gcd, ilcm, nsimplify, solve, symbols

X = Symbol("x", real=True)


def _eq(a, b, c):
    """a x^2 + b x + c, scaled to coprime integers with a > 0."""
    a, b, c = (nsimplify(t) for t in (a, b, c))
    if not all(t.is_rational for t in (a, b, c)):
        raise ValueError("coefficients are not rational")
    L = reduce(ilcm, [Rational(t).q for t in (a, b, c)], 1)
    a, b, c = (int(t * L) for t in (a, b, c))
    g = reduce(gcd, [a, b, c])
    if a < 0:
        g = -g
    return expand((a * X**2 + b * X + c) / g)


def _sp(v):
    """The sum and product of the roots."""
    if "S" in v:
        return v["S"], v["P"]
    return expand(v["r1"] + v["r2"]), expand(v["r1"] * v["r2"])


def key(v, p):
    """From the definition: (x - r1)(x - r2) = 0 is true exactly at the two roots."""
    if "S" in v:
        a, b = symbols("a b")
        r1, r2 = solve([a + b - v["S"], a * b - v["P"]], [a, b], dict=True)[0].values()
    else:
        r1, r2 = v["r1"], v["r2"]
    P = Poly(expand((X - r1) * (X - r2)), X)
    return _eq(*(P.coeff_monomial(X**n) for n in (2, 1, 0)))


def m1(v, p):
    """Adds the sum instead of subtracting it: x^2 + (sum)x + product = 0."""
    S, P = _sp(v)
    return _eq(1, S, P)


def m2(v, p):
    """Swaps the two: x^2 - (product)x + sum = 0."""
    S, P = _sp(v)
    return _eq(1, -P, S)


def m3(v, p):
    """Puts a minus before the product too: x^2 - (sum)x - product = 0."""
    S, P = _sp(v)
    return _eq(1, -S, -P)


def m4(v, p):
    """Multiplies conjugate surds as (a - b)(a + b) = a^2 + b^2."""
    if "r1" not in v:
        raise ValueError("needs the two roots")
    a = expand((v["r1"] + v["r2"]) / 2)
    b = expand((v["r2"] - v["r1"]) / 2)
    if not a.is_rational or b.is_rational or not expand(b**2).is_rational:
        raise ValueError("roots are not conjugate surds a ± b")
    return _eq(1, -2 * a, a**2 + expand(b**2))


def m5(v, p):
    """Clears fractions by multiplying the fraction terms only, leaving x^2 as it is."""
    S, P = _sp(v)
    S, P = nsimplify(S), nsimplify(P)
    if not (S.is_rational and P.is_rational):
        raise ValueError("needs rational sum and product")
    L = ilcm(Rational(S).q, Rational(P).q)
    if L == 1:
        raise ValueError("no fractions to clear")
    return _eq(1, -L * S, L * P)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
