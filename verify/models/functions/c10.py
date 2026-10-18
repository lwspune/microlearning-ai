"""C10 Composition of functions: answer models (the key, and one per misconception).

Inputs: a = the number to evaluate the composite at (optional; without it the answer is the rule in x).
params:
  f, g, h  the rules, as sympy strings in x (h optional)
  ask      the composite, outer function first: "fg" is f o g, so (f o g)(x) = f(g(x)); "gfh" is g o f o h
"""
import re

from sympy import Add, Mul, Poly, Symbol, sympify

X = Symbol("x", real=True)  # the verifier parses x and y as real symbols


def _parse(s):
    return sympify(s, locals={"x": X})


def _chain(p):
    """The rules in the composite, outer first."""
    return [_parse(p[c]) for c in p["ask"]]


def _right(f, u):
    """f with the whole of u put in for x."""
    return f.subs(X, u)


def _sum_of_powers(f, u):
    """u put in for x, but a power of a sum taken as the sum of the powers: (p + q)^2 = p^2 + q^2."""
    if not isinstance(u, Add):
        raise ValueError("the inner rule is not a sum")
    out = 0
    for (n,), c in Poly(f, X).terms():
        out += c * (sum(t**n for t in u.args) if n >= 2 else u**n)
    return out


def _no_brackets(f, u):
    """u written in for x without brackets: x^2 with x = 3x - 2 becomes 3x - 2^2."""
    return _parse(re.sub(r"\bx\b", str(u.expand()), str(f)))


def _compose(put, chain):
    """Innermost rule first, each result put into the next rule out."""
    u = X
    for f in reversed(chain):
        u = put(f, u)
    return u


def _at(e, v):
    return e.subs(X, v["a"]) if "a" in v else e


def key(v, p):
    return _at(_compose(_right, _chain(p)), v)


def m1(v, p):
    """The order read the wrong way: the left function acts first, so f o g is taken as g(f(x))."""
    chain = _chain(p)
    if len(set(p["ask"])) == 1:
        raise ValueError("f o f reads the same both ways")
    return _at(_compose(_right, chain[::-1]), v)


def m2(v, p):
    """The ring read as a product: (f o g)(x) taken as f(x) g(x)."""
    out = 1
    for f in _chain(p):
        out = Mul(out, f)
    return _at(out.expand(), v)


def m3(v, p):
    """Puts the inner rule in, then expands a power of a sum as the sum of the powers."""
    chain = _chain(p)
    u = X
    used = False
    for f in reversed(chain):
        if isinstance(u, Add) and Poly(f, X).degree() >= 2:
            u, used = _sum_of_powers(f, u), True
        else:
            u = _right(f, u).expand()
    if not used:
        raise ValueError("no square of a sum to expand")
    return _at(u.expand(), v)


def m4(v, p):
    """Writes the inner rule in without brackets."""
    return _at(_compose(_no_brackets, _chain(p)), v)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4}
