"""C01 Continuity at a point: answer models (the key, and one per misconception).

f is given by a formula g for x != a (param g, a sympy expression in x) and, when the item
says so, a value f(a) = c (input c; no c means f(a) is not defined).
Inputs: a, the point; c, the value f(a) (optional).
Params:
  g    the formula for x != a;
  ask  "verdict"  which of the three conditions fails first: Symbol("not_defined") (f(a) is not
                  defined), Symbol("no_limit") (the limit does not exist), Symbol("limit_not_value")
                  (the limit is not f(a)), or Symbol("continuous");
       "value"    f is continuous at a: the value f(a) must have.
The key works from the definition: f(a) defined, the two one-sided limits of g at a equal,
and that limit equal to f(a). A limit is never found by substituting x = a.
"""
from sympy import Symbol, fraction, limit, simplify, sympify, together

x = Symbol("x", real=True)
CONTINUOUS = Symbol("continuous")
NOT_DEFINED = Symbol("not_defined")
NO_LIMIT = Symbol("no_limit")
LIMIT_NOT_VALUE = Symbol("limit_not_value")


def _g(p):
    return sympify(p["g"], locals={"x": x})


def _limit(v, p):
    """lim_{x -> a} g(x), or None when the one-sided limits differ."""
    g, a = _g(p), v["a"]
    left, right = limit(g, x, a, "-"), limit(g, x, a, "+")
    return simplify(left) if simplify(left - right) == 0 else None


def _verdict(fa, lim):
    """The definition's three checks, in order, on a value f(a) and a limit (None: missing)."""
    if fa is None:
        return NOT_DEFINED
    if lim is None:
        return NO_LIMIT
    return CONTINUOUS if simplify(lim - fa) == 0 else LIMIT_NOT_VALUE


def _zero_over_zero(v, p):
    """True when putting x = a in g gives 0/0."""
    n, d = fraction(together(_g(p)))
    a = v["a"]
    return simplify(n.subs(x, a)) == 0 and simplify(d.subs(x, a)) == 0


def key(v, p):
    lim = _limit(v, p)
    if p["ask"] == "value":
        if lim is None:
            raise ValueError("no limit: no value of f(a) makes f continuous")
        return lim
    return _verdict(v.get("c"), lim)


def m1(v, p):
    """Checks only that f(a) is defined: a value at a makes f continuous."""
    if p["ask"] != "verdict" or v.get("c") is None:
        raise ValueError("needs a verdict item with f(a) given")
    if key(v, p) == CONTINUOUS:
        raise ValueError("gives the key")
    return CONTINUOUS


def m2(v, p):
    """Checks only that the limit exists: a limit makes f continuous, even with no f(a)."""
    if p["ask"] != "verdict" or _limit(v, p) is None:
        raise ValueError("needs a verdict item where the limit exists")
    if key(v, p) == CONTINUOUS:
        raise ValueError("gives the key")
    return CONTINUOUS


def m3(v, p):
    """0/0 on putting x = a means the limit does not exist."""
    if not _zero_over_zero(v, p):
        raise ValueError("g is not 0/0 at a")
    return NO_LIMIT


def m4(v, p):
    """Reads f(a) from the formula for x != a: its 0/0 at a makes f(a) undefined."""
    if not _zero_over_zero(v, p):
        raise ValueError("g is not 0/0 at a")
    if p["ask"] == "verdict" and v.get("c") is None:
        raise ValueError("f(a) really is not defined: gives the key")
    return NOT_DEFINED


def m5(v, p):
    """Takes 0/0 as 0: putting x = a in the formula gives f(a) = 0 (the limit found correctly)."""
    if not _zero_over_zero(v, p):
        raise ValueError("g is not 0/0 at a")
    if p["ask"] == "value":
        return sympify(0)
    if v.get("c") is not None:
        raise ValueError("f(a) is given, so it is not read off the formula")
    return _verdict(sympify(0), _limit(v, p))


def m6(v, p):
    """Inverts the limit: with the top close to p*h and the bottom to q*h, takes q/p."""
    lim = _limit(v, p)
    if lim is None or lim == 0 or simplify(lim**2 - 1) == 0:
        raise ValueError("needs a limit other than 0 and 1 and -1")
    wrong = simplify(1 / lim)
    if p["ask"] == "value":
        return wrong
    return _verdict(v.get("c"), wrong)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
