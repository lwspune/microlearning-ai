"""C05 The limit of (x^n - a^n)/(x - a): answer models (the key, and one per misconception).

Inputs (sympy expressions):
  F      the whole function, in the limit variable (param `var`, default "x");
  at     the point the variable tends to;
  n, m   the item read as k * (u^n - b^n) / (u^m - b^m), where the base u tends to b
         (m = 1: the bottom is u - b itself);
  b      the value b the base tends to;
  k      a constant factor in front (default 1).
A plain letter `a` in the inputs is a positive constant; answers keep it as the plain symbol a.

The key is sympy's limit of F itself, never the formula. Each misconception applies its own
reading of the formula n b^(n-1) to the structure (n, m, b, k).
"""
from sympy import Integer, Symbol, limit, simplify

A_PLAIN = Symbol("a")
A_POS = Symbol("a", positive=True)
T = Symbol("t", real=True)


def _pos(e):
    return e.subs({s: A_POS for s in e.free_symbols if s.name == "a"})


def _back(e):
    return simplify(simplify(e).subs(A_POS, A_PLAIN))


def _parts(v):
    k = v.get("k", Integer(1))
    return _pos(v["n"]), _pos(v.get("m", Integer(1))), _pos(v["b"]), _pos(k)


def _formula(n, b):
    return n * b ** (n - 1)


def key(v, p):
    name = p.get("var", "x")
    f = _pos(v["F"])
    f = f.subs({s: T for s in f.free_symbols if s.name == name})
    return _back(limit(f, T, _pos(v["at"]), dir="+-"))


def m1(v, p):
    """Doesn't lower the power: n a^n instead of n a^(n-1) (on a ratio this gives the key)."""
    n, m, b, k = _parts(v)
    if m != 1:
        raise ValueError("on a ratio n a^n / (m a^m) equals the key")
    return _back(k * n * b**n)


def m2(v, p):
    """Cancels like ordinary powers: (u^n - b^n)/(u^m - b^m) -> u^(n-m) -> b^(n-m), dropping n and m."""
    n, m, b, k = _parts(v)
    return _back(k * b ** (n - m))


def m3(v, p):
    """Takes a from how the bracket looks, not from the value the base tends to: a negative b read
    as its size (y^5 + 243 as y^5 - 3^5), or the point itself for a shifted base (a for z + 2)."""
    n, m, b, k = _parts(v)
    at = _pos(v["at"])
    if b.is_number and b.is_negative:
        w = -b
    elif simplify(at - b) != 0:
        w = at
    else:
        raise ValueError("b is positive and equals the point")
    return _back(k * _formula(n, w) / _formula(m, w))


def m4(v, p):
    """Uses the a = 1 form of the result, lim (x^n - 1)/(x - 1) = n, for every a: k n / m."""
    n, m, b, k = _parts(v)
    return _back(k * n / m)


def m5(v, p):
    """Applies the formula to the top only, as if the bottom were (u - b): k n b^(n-1)."""
    n, m, b, k = _parts(v)
    if m == 1:
        raise ValueError("the bottom is u - b: gives the key")
    return _back(k * _formula(n, b))


def m6(v, p):
    """Puts the bottom's formula on top: k m b^(m-1) / (n b^(n-1))."""
    n, m, b, k = _parts(v)
    if m == 1:
        raise ValueError("only for a power difference in the bottom")
    return _back(k * _formula(m, b) / _formula(n, b))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
