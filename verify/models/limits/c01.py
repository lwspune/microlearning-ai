"""C01 Limits and one-sided limits: answer models (the key, and one per misconception).

Inputs: a, the point x tends to.
Params:
  f    the function, a sympy expression in x (Piecewise for a function given in pieces,
       floor(u) for the greatest integer [u]);
  ask  "lim"  the two-sided limit lim_{x -> a} f(x);
       "lhl"  the left-hand limit lim_{x -> a-} f(x);
       "rhl"  the right-hand limit lim_{x -> a+} f(x);
       "pair" (left-hand limit, right-hand limit) as a Tuple.
An answer that doesn't exist is Symbol("does_not_exist").
The key works from the definition: each one-sided limit is taken on the piece of f that holds
just to that side of a (never by substituting x = a), and the two-sided limit exists only when
the two one-sided limits are equal.
"""
from sympy import Piecewise, Rational, Symbol, Tuple, floor, limit, nan, piecewise_fold, sympify, zoo

x = Symbol("x", real=True)
DNE = Symbol("does_not_exist")
_EPS = Rational(1, 10**6)


def _f(p):
    return piecewise_fold(sympify(p["f"], locals={"x": x}))


def _side(f, a, d):
    """The one-sided limit of f at a from the side d ("-" left, "+" right)."""
    if isinstance(f, Piecewise):
        probe = a - _EPS if d == "-" else a + _EPS
        f = next(e for e, c in f.args if c.subs(x, probe) == True)  # noqa: E712 (sympy truth)
    return limit(f, x, a, d)


def _sides(v, p):
    f = _f(p)
    return _side(f, v["a"], "-"), _side(f, v["a"], "+")


def _value(v, p):
    """f(a), or None where f is not defined at a."""
    val = _f(p).subs(x, v["a"])
    return None if val.has(nan, zoo) or val is nan else val


def _ask(p, lhl, rhl, both=None):
    """The answer to p["ask"] from a left and a right value (both: the two-sided answer)."""
    if p["ask"] == "lhl":
        return lhl
    if p["ask"] == "rhl":
        return rhl
    if p["ask"] == "pair":
        return Tuple(lhl, rhl)
    if both is not None:
        return both
    return lhl if lhl == rhl else DNE


def key(v, p):
    lhl, rhl = _sides(v, p)
    return _ask(p, lhl, rhl)


def m1(v, p):
    """The limit is f(a): substitutes x = a into the rule that holds at a (for each side too)."""
    fa = _value(v, p)
    if fa is None:
        raise ValueError("f(a) is not defined")
    return _ask(p, fa, fa, both=fa)


def m2(v, p):
    """No limit, not even a one-sided one, where the graph breaks (a jump, or f(a) missing or apart)."""
    lhl, rhl = _sides(v, p)
    fa = _value(v, p)
    if lhl == rhl == fa:
        raise ValueError("no break at a")
    if p["ask"] == "lim" and lhl != rhl:
        raise ValueError("the key is 'does not exist' here")
    return DNE


def m3(v, p):
    """A limit is never reached: at a jump, the limit is the side value f(a) doesn't take."""
    if p["ask"] != "lim":
        raise ValueError("M3 is about the two-sided limit")
    lhl, rhl = _sides(v, p)
    fa = _value(v, p)
    if lhl == rhl or fa not in (lhl, rhl):
        raise ValueError("needs a jump with f(a) on one side")
    return rhl if fa == lhl else lhl


def m4(v, p):
    """Swaps the sides: reads x -> a- as x coming from values greater than a."""
    if p["ask"] == "lim":
        raise ValueError("M4 is about one-sided limits")
    lhl, rhl = _sides(v, p)
    return _ask(p, rhl, lhl)


def m5(v, p):
    """At a jump, takes the limit halfway between the two one-sided limits."""
    if p["ask"] != "lim":
        raise ValueError("M5 is about the two-sided limit")
    lhl, rhl = _sides(v, p)
    if lhl == rhl:
        raise ValueError("no jump")
    return (lhl + rhl) / 2


def m6(v, p):
    """Moves the limit inside the bracket: lim [u] = [lim u], on each side."""
    f = _f(p)
    if not f.has(floor):
        raise ValueError("no greatest integer function")
    a = v["a"]
    inside = lambda d: f.replace(floor, lambda u: floor(_side(piecewise_fold(u), a, d)))  # noqa: E731
    lhl, rhl = limit(inside("-"), x, a, "-"), limit(inside("+"), x, a, "+")
    return _ask(p, lhl, rhl)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
