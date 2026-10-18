"""C06 The intermediate value theorem: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["ask"]:

"count"  At least how many roots of f(x) = 0 does the IVT find between a and b, from the signs of f
         at the checkpoints params["pts"] (a list, from a to b, a and b included)?
         The key counts the real roots of f strictly between a and b straight from f (the real roots of
         its numerator that are not zeros of its denominator). The items are chosen so that this equals
         the count the sign checks prove; the misconception models apply their rule to the checkpoints.
"k"      For which k does f(x) = 0 have a root strictly between a and b? f is h(x) + k.
         The key is the set of values -h takes on the open interval (a, b), found from h directly.

Inputs: a, b (the ends). Params: f (a sympy expression in x, and k for "k"), pts, ask.
"""
from sympy import (
    Integer, Interval, Poly, Symbol, fraction,
    solve, solve_univariate_inequality, sympify, together,
)
from sympy.calculus.util import continuous_domain, function_range

x = Symbol("x", real=True)
k = Symbol("k", real=True)


def _f(p):
    return sympify(p["f"], locals={"x": x, "k": k})


def _pts(p):
    return [sympify(s) for s in p["pts"]]


def _continuous(f, lo, hi):
    """Is f continuous on the closed interval [lo, hi]?"""
    return continuous_domain(f, x, Interval(lo, hi)) == Interval(lo, hi)


def _table(v, p):
    """(f, the checkpoint values, the consecutive pairs (fa, fb, continuous on [pa, pb]?))."""
    f, pts = _f(p), _pts(p)
    assert pts[0] == v["a"] and pts[-1] == v["b"], "pts runs from a to b"
    vals = [f.subs(x, t) for t in pts]
    pairs = [(vals[i], vals[i + 1], _continuous(f, pts[i], pts[i + 1])) for i in range(len(pts) - 1)]
    return f, vals, pairs


def _count(v, p, holds):
    """Interior checkpoints where f = 0, plus the pairs where holds(fa, fb, continuous)."""
    _, vals, pairs = _table(v, p)
    zeros = sum(1 for val in vals[1:-1] if val == 0)
    return Integer(zeros + sum(1 for fa, fb, c in pairs if holds(fa, fb, c)))


def _k_set(cond):
    return solve_univariate_inequality(cond, k, relational=False)


def _ends(v, p):
    f = _f(p)
    return f.subs(x, v["a"]), f.subs(x, v["b"])


def _need(p, ask):
    if p["ask"] != ask:
        raise ValueError(f"only for ask={ask!r} items")


def key(v, p):
    a, b, f = v["a"], v["b"], _f(p)
    if p["ask"] == "count":
        num, den = fraction(together(f))
        poles = set(solve(den, x)) if den.has(x) else set()
        roots = {r for r in Poly(num, x).real_roots() if a < r < b and r not in poles}
        return Integer(len(roots))
    h = f.subs(k, 0)
    assert (f - h - k).expand() == 0, "f must be h(x) + k"
    return function_range(-h, x, Interval.open(a, b))


def m1(v, p):
    """Ignores continuity: a sign change counts even where f breaks between the checkpoints."""
    _need(p, "count")
    return _count(v, p, lambda fa, fb, c: fa * fb < 0)


def m2(v, p):
    """The converse: f(a) and f(b) of the same sign means no root between a and b."""
    _need(p, "count")
    fa, fb = _ends(v, p)
    if not fa * fb > 0:
        raise ValueError("the ends differ in sign")
    return Integer(0)


def m3(v, p):
    """Exactly one: a sign change from f(a) to f(b) means exactly one root, so the ends settle it."""
    _need(p, "count")
    fa, fb = _ends(v, p)
    if not (fa * fb < 0 and _continuous(_f(p), v["a"], v["b"])):
        raise ValueError("needs f continuous on [a, b] and a sign change at the ends")
    return Integer(1)


def m4(v, p):
    """An end where f = 0 counts: f(a) f(b) <= 0 is taken to give a root strictly between a and b."""
    if p["ask"] == "k":
        fa, fb = _ends(v, p)
        return _k_set(fa * fb <= 0)
    _, _, pairs = _table(v, p)
    return Integer(sum(1 for fa, fb, c in pairs if c and fa * fb <= 0))


def m5(v, p):
    """Rising only: needs f(a) < 0 < f(b), so a sign change from + to - is missed."""
    if p["ask"] == "k":
        fa, fb = _ends(v, p)
        return _k_set(fa < 0).intersect(_k_set(fb > 0))
    return _count(v, p, lambda fa, fb, c: c and fa < 0 < fb)


def m6(v, p):
    """Sign slip: reads 'opposite signs' as f(a) f(b) > 0, so looks for a root where the signs match."""
    if p["ask"] == "k":
        fa, fb = _ends(v, p)
        return _k_set(fa * fb > 0)
    return _count(v, p, lambda fa, fb, c: c and fa * fb > 0)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
