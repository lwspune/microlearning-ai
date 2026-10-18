"""C04 Types of discontinuity: answer models (the key, and one per misconception).

Inputs: a, the point being tested.
Params:
  f  the function, a sympy expression in x (Piecewise for a function given in pieces; a point
     left out of every piece is a point where f is not defined).
The answer is a named Symbol: removable, jump, infinite, or continuous (no discontinuity).
The key works from the definitions: each one-sided limit is taken on the piece of f that holds
just to that side of a (sympy's limit() of a whole Piecewise can pick the wrong piece); a side
that runs off to plus or minus infinity makes it infinite, two different finite sides a jump,
and equal sides that f(a) misses (or f(a) undefined) removable.
"""
from sympy import Piecewise, Rational, Symbol, denom, limit, nan, oo, piecewise_fold, sympify, together, zoo

x = Symbol("x", real=True)
REMOVABLE, JUMP, INFINITE, CONTINUOUS = (Symbol(s) for s in ("removable", "jump", "infinite", "continuous"))
_EPS = Rational(1, 10**6)


def _f(p):
    return piecewise_fold(sympify(p["f"], locals={"x": x}))


def _piece(f, a, d):
    """The rule that holds just to the side d ("-" left, "+" right) of a."""
    if isinstance(f, Piecewise):
        probe = a - _EPS if d == "-" else a + _EPS
        return next(e for e, c in f.args if c.subs(x, probe) == True)  # noqa: E712 (sympy truth)
    return f


def _sides(v, p):
    f, a = _f(p), v["a"]
    return limit(_piece(f, a, "-"), x, a, "-"), limit(_piece(f, a, "+"), x, a, "+")


def _value(v, p):
    """f(a), or None where f is not defined at a."""
    f, a = _f(p), v["a"]
    if isinstance(f, Piecewise) and not any(c.subs(x, a) == True for _, c in f.args):  # noqa: E712
        return None
    try:
        val = f.subs(x, a)
    except (ZeroDivisionError, TypeError):
        return None
    return None if val.has(nan, zoo, oo, -oo) else val


def _infinite(s):
    return s in (oo, -oo, zoo) or s.has(oo, -oo, zoo)


def _classify(lhl, rhl, fa):
    if _infinite(lhl) or _infinite(rhl):
        return INFINITE
    if lhl != rhl:
        return JUMP
    return CONTINUOUS if fa is not None and fa == lhl else REMOVABLE


def key(v, p):
    lhl, rhl = _sides(v, p)
    return _classify(lhl, rhl, _value(v, p))


def m1(v, p):
    """'Undefined' read as 'infinite': f(a) missing, a 0 in a denominator at a, or no limit."""
    f, a = _f(p), v["a"]
    lhl, rhl = _sides(v, p)
    zero_den = any(denom(together(_piece(f, a, d))).subs(x, a) == 0 for d in "-+")
    if _value(v, p) is None or zero_den or lhl != rhl:
        return INFINITE
    raise ValueError("nothing at a looks undefined")


def m2(v, p):
    """The limit exists, so f is continuous: never compares it with f(a)."""
    lhl, rhl = _sides(v, p)
    if _infinite(lhl) or lhl != rhl:
        raise ValueError("no finite limit at a")
    return CONTINUOUS


def m3(v, p):
    """f(a) equals one side's limit, so f is continuous: checks one side only."""
    lhl, rhl = _sides(v, p)
    fa = _value(v, p)
    if fa is None or not (fa == lhl or fa == rhl):
        raise ValueError("f(a) matches neither side")
    return CONTINUOUS


def m4(v, p):
    """Any discontinuity is removable: redefining f(a) is thought to mend every break."""
    if key(v, p) == CONTINUOUS:
        raise ValueError("no break at a")
    return REMOVABLE


def m5(v, p):
    """Any break in the graph is a jump, even a single missing or misplaced point."""
    if key(v, p) == CONTINUOUS:
        raise ValueError("no break at a")
    return JUMP


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
