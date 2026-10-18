"""C09 Differentiating one function with respect to another: answer models (the key, and one per misconception).

Inputs:
  u    the function being differentiated (an expression in x);
  v    the function it is differentiated with respect to (an expression in x);
  s    a sample point inside the range of x the stem states (square roots of squares and |.| are
       opened with the sign they have there, so the key holds on that range).
Params:
  neg  "u" or "v": the function whose derivative carries a minus sign (cos, cos^-1, a reciprocal),
       for C09-M4; leave it out where neither does.
The key is the limit of the difference quotient Δu/Δv, taken by sympy as the ratio of the two
derivatives sympy finds for u and v; the item checks also confirm it by finite differences at two
points of the stated range.
"""
from sympy import Abs, Pow, Symbol, cancel, count_ops, diff, expand, factor, factor_terms, fraction, simplify, sqrt, together

_XR = Symbol("x", real=True)


def _x(*exprs):
    """The symbol called x (the verifier parses x as real, draft_items as plain)."""
    for e in exprs:
        for sym in e.free_symbols:
            if sym.name == "x":
                return sym
    raise ValueError("no x in the inputs")


def _open(e, at):
    """Opens |g| and sqrt(g^2) with the sign g has at x = at."""
    def sign_at(g):
        val = g.subs(_XR, at).evalf()
        if val == 0 or not val.is_real:
            raise ValueError(f"sign of {g} undefined at {at}")
        return 1 if val > 0 else -1

    def walk(node):
        if not node.args:
            return node
        node = node.func(*[walk(a) for a in node.args])
        if isinstance(node, Abs):
            return sign_at(node.args[0]) * node.args[0]
        if isinstance(node, Pow) and node.exp.is_Rational and node.exp.q == 2:
            r = sqrt(factor(together(node.base)))
            if r.has(Abs):
                return walk(r) ** node.exp.p
        return node

    return walk(e)


def _tidy(d, at):
    """A surd answer as ±sqrt(num)/sqrt(den) when that is shorter, its sign taken at x = at."""
    d = simplify(_open(simplify(d), at))
    if not d.has(Pow) or not d.free_symbols:
        return d
    r = cancel(simplify(d**2))
    if r.has(Abs) or any(isinstance(a, Pow) and not a.exp.is_Integer for a in r.atoms(Pow)):
        return d
    num, den = fraction(r)
    if num.subs(_XR, at) < 0:
        num, den = -num, -den
    sgn = 1 if d.subs(_XR, at).evalf() > 0 else -1
    c = sgn * sqrt(factor_terms(expand(num))) / sqrt(factor_terms(expand(den)))
    return c if count_ops(c) < count_ops(d) else d


def _parts(v):
    """du/dx and dv/dx in the real x, each opened on the stated range."""
    x = _x(v["u"], v["v"])
    s = v["s"]
    du = _tidy(diff(v["u"].subs(x, _XR), _XR), s)
    dv = _tidy(diff(v["v"].subs(x, _XR), _XR), s)
    if simplify(dv) == 0:
        raise ValueError("dv/dx is 0")
    return x, du, dv


def _out(e, x, v):
    return simplify(_tidy(e, v["s"]).subs(_XR, x))


def key(v, p):
    x, du, dv = _parts(v)
    return _out(du / dv, x, v)


def m1(v, p):
    """Turns the ratio upside down: du/dv = (dv/dx)/(du/dx)."""
    x, du, dv = _parts(v)
    return _out(dv / du, x, v)


def m2(v, p):
    """Multiplies the derivatives, as if it were the chain rule: du/dv = (du/dx)(dv/dx)."""
    x, du, dv = _parts(v)
    return _out(du * dv, x, v)


def m3(v, p):
    """Differentiates u with respect to x and stops: du/dv = du/dx."""
    x, du, dv = _parts(v)
    if simplify(dv - 1) == 0:
        raise ValueError("v is x itself")
    return _out(du, x, v)


def m4(v, p):
    """Drops the minus sign in the derivative of the function params['neg'] names."""
    if p.get("neg") not in ("u", "v"):
        raise ValueError("neither derivative carries a minus sign")
    x, du, dv = _parts(v)
    return _out(-du / dv, x, v)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4}
