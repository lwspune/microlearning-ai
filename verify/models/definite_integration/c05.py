"""C05 Basic properties and splitting the interval: answer models (the key, and one per misconception).

Every item asks for a number, the definite integral of f from a to b. Inputs:
- f: the integrand, an expression in x; it may hold Abs(g) (g linear), floor(x) (the book's [x])
  or a two-piece Piecewise((e1, cond), (e2, True)).
- a, b: the lower and upper limits (a > b for a reversed integral).
The key is sympy's integrate of f over (a, b), with [x] written out as its definition (a Piecewise
of constants), cross-checked numerically with mpmath.quad. The models apply each wrong rule to f.
"""
import math

import mpmath
from sympy import Abs, Piecewise, Rational, Symbol, floor, integrate, nsimplify, simplify, solve


def _x(v):
    """The symbol x in the inputs (the verifier parses x as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _floor_as_pieces(f, x, a, b):
    """f with floor(x) replaced by its definition on [min, max]: the constant n on n <= x < n + 1."""
    if not f.has(floor):
        return f
    lo, hi = min(a, b), max(a, b)
    n0, n1 = int(math.floor(lo)), int(math.floor(hi))
    pieces = [(n, x < n + 1) for n in range(n0, n1)] + [(n1, True)]
    return f.replace(floor, lambda u: Piecewise(*pieces) if u == x else floor(u))


def _integral(f, x, a, b):
    """The exact integral of f over (a, b), checked against a numerical quadrature."""
    exact = simplify(integrate(_floor_as_pieces(f, x, a, b), (x, a, b)))
    if exact.has(integrate) or not exact.is_number:
        raise ValueError(f"sympy could not integrate {f}")
    lo, hi = sorted([float(a), float(b)])
    nodes = [lo + (hi - lo) * i / 240 for i in range(241)]
    num = mpmath.quad(lambda t: float(f.subs(x, mpmath.mpf(t))), nodes)
    if float(b) < float(a):
        num = -num
    if abs(float(exact) - float(num)) > 1e-6:
        raise ValueError(f"exact {exact} and numeric {num} disagree for {f}")
    return exact


def _one_formula(f):
    """Ignores where f changes form: |g| read as g, [x] as x, a Piecewise as its first formula."""
    f = f.replace(Abs, lambda u: u).replace(floor, lambda u: u)
    return f.replace(Piecewise, lambda *args: args[0][0])


def key(v, p):
    x = _x(v)
    return _integral(v["f"], x, v["a"], v["b"])


def m1(v, p):
    """Integrates the whole interval with one formula: |g| as g, [x] as x, a Piecewise as its first piece."""
    x, f = _x(v), v["f"]
    if not (f.has(Abs) or f.has(floor) or f.has(Piecewise)):
        raise ValueError("f has one formula throughout")
    return _integral(_one_formula(f), x, v["a"], v["b"])


def m2(v, p):
    """Integrates g in place of |g|, then makes the answer positive: |integral of g|."""
    x, f = _x(v), v["f"]
    if not f.has(Abs):
        raise ValueError("no modulus in f")
    return abs(_integral(f.replace(Abs, lambda u: u), x, v["a"], v["b"]))


def m3(v, p):
    """Uses the other side's formula on each piece: |g| = g where g < 0 (and -g where g > 0),
    [x] = n + 1 on n <= x < n + 1, a two-piece function's formulas swapped."""
    x, f = _x(v), v["f"]
    if f.has(Abs):
        g = f.replace(Abs, lambda u: -Abs(u))
    elif f.has(floor):
        g = f.replace(floor, lambda u: floor(u) + 1)
    elif f.has(Piecewise):
        def swap(*args):
            if len(args) != 2:
                raise ValueError("not a two-piece function")
            (e1, c1), (e2, c2) = args
            return Piecewise((e2, c1), (e1, c2))
        g = f.replace(Piecewise, swap)
    else:
        raise ValueError("f has one formula throughout")
    return _integral(g, x, v["a"], v["b"])


def m4(v, p):
    """Reversing the limits leaves the value unchanged: integral from b to a taken as from a to b."""
    a, b = v["a"], v["b"]
    if not a > b:
        raise ValueError("the limits are not reversed")
    return _integral(v["f"], _x(v), b, a)


def m5(v, p):
    """Splits |g| at x = 0, where |x| changes form, instead of where g = 0:
    -g on the left of 0 and g on the right."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    gs = [u.args[0] for u in f.atoms(Abs)]
    if len(gs) != 1 or not a < 0 < b:
        raise ValueError("needs one modulus and 0 strictly inside (a, b)")
    g = gs[0]
    if 0 in solve(g, x):
        raise ValueError("g = 0 at x = 0 already: the split is right")
    left = f.replace(Abs, lambda u: -u)
    right = f.replace(Abs, lambda u: u)
    return _integral(left, x, a, 0) + _integral(right, x, 0, b)


def m6(v, p):
    """Takes [x] out as a constant: f = [x] h(x) integrated as [x] H(x), with H' = h, then
    evaluated at the limits, [b] H(b) - [a] H(a)."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    if not f.has(floor):
        raise ValueError("no [x] in f")
    h = simplify(f / floor(x))
    if h.has(floor):
        raise ValueError("f is not [x] times a function free of [x]")
    H = integrate(h, x)
    return simplify(math.floor(b) * H.subs(x, b) - math.floor(a) * H.subs(x, a))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
