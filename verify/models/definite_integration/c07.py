"""C07 Odd and even functions, and the 2a property: answer models (the key, and one per misconception).

Inputs: f, the integrand (an expression in x), and a.
Params: mode = "sym" (the item asks for the integral of f from -a to a) or "2a" (from 0 to 2a).
The key is sympy's own definite integral of f over the item's interval, never via the property.
Each wrong answer replays one wrong use of the property:
  M1 takes the zero case for a function that is not odd (or not f(2a - x) = -f(x)): 0.
  M2 drops the factor 2: the even part over [0, a] once (mode "sym"), or f over [0, a] (mode "2a").
  M3 doubles the first half without checking the symmetry: 2 * integral of f over [0, a].
  M4 doubles but keeps the old limits: 2 * the whole integral.
"""
from sympy import Integer, Symbol, integrate, log, simplify

X = Symbol("x", real=True)


def _fa(v):
    """f with x real (as the verifier parses it) and a."""
    f = v["f"]
    f = f.subs({s: X for s in getattr(f, "free_symbols", set()) if s.name == "x"}) if hasattr(f, "subs") else Integer(f)
    return f, v["a"]


def _limits(v, p):
    f, a = _fa(v)
    return (f, -a, a) if p.get("mode", "sym") == "sym" else (f, 0, 2 * a)


def _int(f, lo, hi):
    """A definite integral, its inverse hyperbolics written as logs (the book's form)."""
    return simplify(integrate(f, (X, lo, hi)).rewrite(log))


def key(v, p):
    f, lo, hi = _limits(v, p)
    return _int(f, lo, hi)


def m1(v, p):
    if key(v, p) == 0:
        raise ValueError("the integral really is 0")
    return Integer(0)


def m2(v, p):
    f, a = _fa(v)
    if p.get("mode", "sym") == "sym":
        f = (f + f.subs(X, -X)) / 2  # the student drops the odd part, rightly, then forgets the 2
    return _int(f, 0, a)


def m3(v, p):
    f, a = _fa(v)
    out = 2 * _int(f, 0, a)
    if simplify(out - key(v, p)) == 0:
        raise ValueError("f has the symmetry: doubling is right here")
    return simplify(out)


def m4(v, p):
    k = key(v, p)
    if k == 0:
        raise ValueError("twice 0 is 0")
    return simplify(2 * k)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4}
