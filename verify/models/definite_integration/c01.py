"""C01 Definite integral as the limit of a sum: answer models (the key, and one per misconception).

Inputs: f, the integrand (an expression in x); a, b, the limits.
Param ask: "value" (the integral), "term" (the area h f(a + rh) of the r-th right-end rectangle, in r
and n) or "sum" (S_n, the total of the n rectangles before the limit, in n).
The key's value is sympy's integrate (cross-checked numerically); its term and sum come straight
from the definition, h f(a + rh) with h = (b - a)/n and r = 1..n. Each model applies one wrong rule.
"""
from sympy import Abs, E, Pow, Symbol, exp, integrate, real_roots, simplify, summation

N = Symbol("n")
R = Symbol("r")


def _x(e):
    for s in e.free_symbols:
        if s.name == "x":
            return s
    return Symbol("x", real=True)


def _ask(p):
    ask = p.get("ask", "value")
    assert ask in ("value", "term", "sum"), ask
    return ask


def _strips(v, p, h, start, width=True):
    """The term or the sum for rectangles of width h whose r-th right end is start + r h."""
    f = v["f"]
    x = _x(f)
    term = f.subs(x, start + R * h)
    if width:
        term = h * term
    if _ask(p) == "term":
        return simplify(term)
    return simplify(summation(term.expand(), (R, 1, N)))


def _value(v, lo, hi):
    f = v["f"]
    x = _x(f)
    return simplify(integrate(f, (x, lo, hi)))


def key(v, p):
    a, b = v["a"], v["b"]
    if _ask(p) == "value":
        return _value(v, a, b)
    return _strips(v, p, (b - a) / N, a)


def m1(v, p):
    """Width b/n, as if the strips started at 0: the rectangles run from a to a + b."""
    a, b = v["a"], v["b"]
    if a == 0:
        raise ValueError("b/n is the right width when a = 0")
    if _ask(p) == "value":
        return _value(v, a, a + b)
    return _strips(v, p, b / N, a)


def m2(v, p):
    """Heights f(rh), counted from 0 instead of from a: the integral over [0, b - a]."""
    a, b = v["a"], v["b"]
    if a == 0:
        raise ValueError("f(rh) is right when a = 0")
    if _ask(p) == "value":
        return _value(v, 0, b - a)
    return _strips(v, p, (b - a) / N, 0)


def m3(v, p):
    """Drops the width: the r-th rectangle's area taken as its height f(a + rh)."""
    if _ask(p) == "value":
        raise ValueError("the sum without h has no finite limit")
    a, b = v["a"], v["b"]
    return _strips(v, p, (b - a) / N, a, width=False)


def m4(v, p):
    """Counts area below the x-axis as positive: the integral of |f|."""
    if _ask(p) != "value":
        raise ValueError("value items only")
    f, a, b = v["f"], v["a"], v["b"]
    x = _x(f)
    if not f.is_polynomial(x):
        raise ValueError("polynomial integrands only")
    cuts = sorted({c for c in real_roots(f.as_poly(x)) if a < c < b})
    if not cuts:
        raise ValueError("f keeps one sign on (a, b): |f| gives the key or its negative")
    pts = [a, *cuts, b]
    return simplify(sum(Abs(integrate(f, (x, lo, hi))) for lo, hi in zip(pts, pts[1:])))


def m5(v, p):
    """Takes lim (c^h - 1)/h as 1 for every base c, so the log c in the denominator is lost."""
    if _ask(p) != "value":
        raise ValueError("value items only")
    f, a, b = v["f"], v["a"], v["b"]
    x = _x(f)
    k, rest = f.as_independent(x, as_Add=False)
    if isinstance(rest, exp) or not (isinstance(rest, Pow) and rest.exp == x and not rest.base.has(x)):
        raise ValueError("integrand must be k c^x")
    c = rest.base
    if c == E:
        raise ValueError("base e: the limit really is 1")
    return simplify(k * (c**b - c**a))


def m6(v, p):
    """Takes the sum of 1 from r = 1 to n as 1: the constant part of h f(a + rh) is added once."""
    ask = _ask(p)
    if ask == "term":
        raise ValueError("no sum in a term item")
    f, a, b = v["f"], v["a"], v["b"]
    x = _x(f)
    if not f.is_polynomial(x):
        raise ValueError("polynomial integrands only")
    fa = f.subs(x, a)
    if fa == 0:
        raise ValueError("no constant part when f(a) = 0")
    if ask == "value":  # the n copies of h f(a), worth (b - a) f(a) in the limit, become one copy, worth 0
        return simplify(_value(v, a, b) - (b - a) * fa)
    h = (b - a) / N
    return simplify(key(v, p) - (N - 1) * h * fa)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
