"""C07 Implicit differentiation: answer models (the key, and one per misconception).

Inputs: F, the curve written as F(x, y) = 0 (lhs - rhs, one term per summand),
and the point (a, b), which must lie on the curve.
Differentiating F = 0 term by term gives sum(A_t + B_t * y') = 0, so
y' = -sum(A_t) / sum(B_t). The key takes A_t = dt/dx and B_t = dt/dy (the
partial derivatives, a different route from the term-by-term chain rule taught);
each wrong answer changes how some terms are differentiated or how y' is solved for.
Terms are classed as pure x, pure y, or mixed (both letters).
"""
from sympy import Integer, Symbol, diff, nan, oo, simplify, zoo


def _sym(e, name):
    for s in e.free_symbols:
        if s.name == name:
            return s
    return Symbol(name)


def _setup(v):
    F = v["F"]
    x, y = _sym(F, "x"), _sym(F, "y")
    pt = {x: v["a"], y: v["b"]}
    if simplify(F.subs(pt)) != 0:
        raise ValueError("the point is not on the curve")
    return F, x, y, pt


def _val(e, pt):
    r = simplify(e.subs(pt))
    if r.has(oo, -oo, zoo, nan):
        raise ValueError("undefined at the point")
    return r


def _solve(A, B, pt, sign=-1, invert=False):
    A, B = _val(A, pt), _val(B, pt)
    if invert:
        A, B = B, A
    if B == 0:
        raise ValueError("no dy/dx to solve for")
    return simplify(sign * A / B)


def _terms(F, x, y):
    for t in F.as_ordered_terms():
        hx, hy = t.has(x), t.has(y)
        kind = "mixed" if hx and hy else ("y" if hy else "x")
        yield t, kind


def _sums(v, rule):
    """sum(A_t), sum(B_t) with rule(t, kind, x, y) -> (A_t, B_t) or None for the correct pair."""
    F, x, y, pt = _setup(v)
    A, B, used = Integer(0), Integer(0), False
    for t, kind in _terms(F, x, y):
        r = rule(t, kind, x, y)
        if r is None:
            r = (diff(t, x), diff(t, y))
        else:
            used = True
        A += r[0]
        B += r[1]
    if not used:
        raise ValueError("the rule changes no term")
    return A, B, pt


def key(v, p):
    F, x, y, pt = _setup(v)
    return _solve(diff(F, x), diff(F, y), pt)


def m1(v, p):
    """Forgets dy/dx on a non-linear term in y alone: d/dx(y^2) = 2y."""
    def rule(t, kind, x, y):
        if kind == "y" and diff(t, y, 2) != 0:
            return (diff(t, y), Integer(0))
        return None
    A, B, pt = _sums(v, rule)
    return _solve(A, B, pt)


def m2(v, p):
    """Treats y as a constant in a term that also has x: d/dx(x^2 y) = 2xy."""
    def rule(t, kind, x, y):
        if kind == "mixed":
            return (diff(t, x), Integer(0))
        return None
    A, B, pt = _sums(v, rule)
    return _solve(A, B, pt)


def m3(v, p):
    """Drops the minus sign when moving the other terms across: y' = +sum(A)/sum(B)."""
    F, x, y, pt = _setup(v)
    return _solve(diff(F, x), diff(F, y), pt, sign=1)


def m4(v, p):
    """Differentiates a product u(x)v(y) as the product of the derivatives: u'(x) v'(y) dy/dx."""
    def rule(t, kind, x, y):
        if kind != "mixed":
            return None
        u, w = t.as_independent(y, as_Add=False)
        if u.has(y) or w.has(x) or not u.has(x):
            return None
        return (Integer(0), diff(u, x) * diff(w, y))
    A, B, pt = _sums(v, rule)
    return _solve(A, B, pt)


def m5(v, p):
    """Solves for dy/dx upside down: y' = -sum(B)/sum(A)."""
    F, x, y, pt = _setup(v)
    return _solve(diff(F, x), diff(F, y), pt, invert=True)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
