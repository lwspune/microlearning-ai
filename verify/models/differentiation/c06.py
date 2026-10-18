"""C06 The quotient rule: answer models (the key, and one per misconception).

Inputs: u and v, the top and the bottom of y = u/v (expressions in x); at, the point
(absent when the item asks for dy/dx).
The key is sympy's derivative of u/v as one expression, never the quotient rule being taught.
"""
from sympy import Symbol, diff, nan, oo, simplify, zoo


def _x(*exprs):
    """The symbol called x (the verifier parses x as real, draft_items as plain)."""
    for e in exprs:
        for s in e.free_symbols:
            if s.name == "x":
                return s
    raise ValueError("no x in the inputs")


def _at(d, x, v):
    """dy/dx as an expression, or its value at x = at when the item gives a point."""
    if "at" in v:
        d = d.subs(x, v["at"])
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['at']}")
    return simplify(d)


def _parts(v):
    u, w = v["u"], v["v"]
    x = _x(u, w)
    return u, w, diff(u, x), diff(w, x), x


def key(v, p):
    u, w, _, _, x = _parts(v)
    return _at(diff(u / w, x), x, v)


def m1(v, p):
    """Numerator in the wrong order: (uv' - vu')/v^2."""
    u, w, du, dw, x = _parts(v)
    return _at((u * dw - w * du) / w**2, x, v)


def m2(v, p):
    """Differentiates the top and the bottom separately: u'/v'."""
    u, w, du, dw, x = _parts(v)
    if dw == 0:
        raise ValueError("bottom has zero derivative")
    return _at(du / dw, x, v)


def m3(v, p):
    """Forgets to square the denominator: (vu' - uv')/v."""
    u, w, du, dw, x = _parts(v)
    return _at((w * du - u * dw) / w, x, v)


def m4(v, p):
    """Adds instead of subtracting, as in the product rule: (vu' + uv')/v^2."""
    u, w, du, dw, x = _parts(v)
    return _at((w * du + u * dw) / w**2, x, v)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4}
