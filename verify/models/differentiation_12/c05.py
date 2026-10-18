"""C05 Simplifying by substitution first: answer models (the key, and one per misconception).

Inputs:
  f    the function y of x (an inverse trigonometric function of an algebraic argument);
  t    the quantity the substitution names (t = tan θ, sin θ or cos θ, as params["sub"] says),
       e.g. 3*x, sqrt(x), x/3;
  m    the multiple of θ in the angle the identity produces inside the outer inverse function
       (2 for cos 2θ, 3 for sin 3θ, 1/2 for tan(θ/2), -1 for tan(π/4 - θ));
  s    a sample point inside the range of x the stem states;
  std  a sample point in the textbook's usual range (x a little above 0);
  at   optional: the item asks for dy/dx at this x.
The key is sympy's derivative of f itself; each square root of a perfect square is opened with
the sign it has at s (the stem's range). It never uses the substitution being taught.
"""
from sympy import (Abs, Pow, Symbol, acos, asin, atan, cancel, count_ops, diff, expand, factor,
                   factor_terms, fraction, nan, oo, simplify, sqrt, together, zoo)

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
                r = walk(r)
                return r ** node.exp.p
        return node

    return walk(e)


def _deriv(f, at):
    """dy/dx of f on the range around x = at, as one expression in the real x."""
    d = simplify(diff(f, _XR))
    d = simplify(_open(d, at))
    return _tidy(simplify(factor(_open(d, at))), at)


def _tidy(d, at):
    """A surd answer as ±sqrt(num)/sqrt(den) when that is shorter (sympy leaves sqrt((3-x)/(3+x))/(x-3))."""
    if not d.has(Pow) or not d.free_symbols:
        return d
    r = cancel(simplify(d**2))
    if any(isinstance(a, Pow) and not a.exp.is_Integer for a in r.atoms(Pow)):
        return d
    num, den = fraction(r)
    if num.subs(_XR, at) < 0:
        num, den = -num, -den
    sgn = 1 if d.subs(_XR, at).evalf() > 0 else -1
    c = sgn * sqrt(factor_terms(expand(num))) / sqrt(factor_terms(expand(den)))
    return c if count_ops(c) < count_ops(d) else d


def _out(d, x, v):
    """Back to the caller's x; the value at x = at when the item gives a point."""
    d = _tidy(simplify(d), v["s"])
    if "at" in v:
        d = simplify(d.subs(_XR, v["at"]))
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['at']}")
        return d
    return simplify(d.subs(_XR, x))


def _setup(v):
    x = _x(v["f"])
    f = v["f"].subs(x, _XR)
    t = v["t"].subs(x, _XR) if v["t"].free_symbols else v["t"]
    return x, f, t


def _theta(t, p):
    """θ as a function of x, from t = tan θ, sin θ or cos θ."""
    return {"tan": atan, "sin": asin, "cos": acos}[p["sub"]](t)


def key(v, p):
    x, f, _ = _setup(v)
    return _out(_deriv(f, v["s"]), x, v)


def m1(v, p):
    """Uses the simplified form of the usual range (x just above 0) for every x: the branch is ignored."""
    x, f, _ = _setup(v)
    d, d0 = _deriv(f, v["s"]), _deriv(f, v["std"])
    if simplify(d - d0) == 0:
        raise ValueError("the stated range is the usual one")
    return _out(d0, x, v)


def m2(v, p):
    """Reads y straight off the inner angle (sin^-1(cos 2θ) = 2θ), skipping the co-function step."""
    x, _, t = _setup(v)
    return _out(v["m"] * diff(_theta(t, p), _XR), x, v)


def m3(v, p):
    """Stops at dy/dθ: differentiates the simplified form with respect to θ, not x."""
    x, f, t = _setup(v)
    return _out(simplify(_deriv(f, v["s"]) / diff(_theta(t, p), _XR)), x, v)


def m4(v, p):
    """Forgets the derivative of the substituted quantity t (5x, sqrt(x), x/3)."""
    x, f, t = _setup(v)
    dt = diff(t, _XR)
    if simplify(dt - 1) == 0:
        raise ValueError("t is x itself")
    return _out(simplify(_deriv(f, v["s"]) / dt), x, v)


def m5(v, p):
    """Drops the multiple: takes the angle mθ as just θ."""
    x, f, _ = _setup(v)
    if abs(v["m"]) == 1:
        raise ValueError("the multiple is 1")
    return _out(simplify(_deriv(f, v["s"]) / v["m"]), x, v)


def m6(v, p):
    """Gives cos^-1 a plus-sign derivative: d/dx cos^-1 u = 1/sqrt(1 - u^2) times u'."""
    if p["sub"] != "cos":
        raise ValueError("no cos^-1 in the simplified form")
    x, f, _ = _setup(v)
    return _out(-_deriv(f, v["s"]), x, v)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
