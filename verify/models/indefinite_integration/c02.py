"""C02 Rewriting before integrating: answer models (the key, and one per misconception).

Every item asks for an antiderivative of the integrand f (an expression in x); option values are
antiderivatives written without the + c. Inputs, by the misconceptions an item lists:
- f: the integrand (always).
- u, v and params op = "prod" | "quot": f = u*v or f = u/v, the two parts a student might treat apart;
  optional iu, iv: the student's own antiderivative of u, v (iw: of 1/v, for a quotient), e.g.
  (x - 2)^3/3 for (x - 2)^2, where sympy's x^3/3 - 2x^2 + 4x differs by a constant (checked by
  differentiating).
- g, n: f = g**n, a power of a function.
- a, b, w: f = w*(a + b)**2, a bracket squared (w defaults to 1).
- r: f rewritten as a sum of standard forms (the rewrite the lesson teaches; the key ignores it and
  the model checks r == f).
The key is sympy's own antiderivative of f, checked by differentiating it back: never the rewrite.
"""
from sympy import (Add, Pow, Symbol, cos, cot, diff, exp, integrate, log, sec, simplify, sin, tan,
                   csc, preorder_traversal)


def _x(v):
    """The symbol x in the inputs (the verifier parses x as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _anti(e, x):
    """An antiderivative of e, checked by differentiation."""
    F = integrate(e, x)
    if F.has(integrate) or simplify(diff(F, x) - e) != 0:
        raise ValueError(f"no antiderivative found for {e}")
    return simplify(F)


def _part(v, name, e, x):
    """The antiderivative of a part: the item's own form when given (checked), else sympy's."""
    if name in v:
        if simplify(diff(v[name], x) - e) != 0:
            raise ValueError(f"{name} is not an antiderivative of {e}")
        return v[name]
    return _anti(e, x)


def key(v, p):
    x = _x(v)
    return _anti(v["f"], x)


def m1(v, p):
    """Power rule on a function: the integral of g(x)^n taken as g(x)^(n+1)/(n+1)."""
    if "g" not in v:
        raise ValueError("not a power of a function")
    n = v["n"]
    return v["g"] ** (n + 1) / (n + 1)


def m2(v, p):
    """Integrates the two parts apart: the product (or quotient) of their integrals."""
    if "u" not in v:
        raise ValueError("not a product or quotient")
    x = _x(v)
    U, V = _part(v, "iu", v["u"], x), _part(v, "iv", v["v"], x)
    return U * V if p["op"] == "prod" else U / V


def m3(v, p):
    """Squares a bracket term by term, (a + b)^2 = a^2 + b^2, then integrates."""
    if "a" not in v:
        raise ValueError("no bracket to square")
    x = _x(v)
    w = v.get("w", 1)
    return _anti((w * (v["a"] ** 2 + v["b"] ** 2)).expand(), x)


def _wrong_identity(e):
    """The identities with the wrong sign: sin^2 = (1 + cos 2x)/2 (so sin^2 and cos^2 swap),
    tan^2 = sec^2 + 1 and cot^2 = cosec^2 + 1 (each 2 more than it should be)."""
    def swap(t):
        if isinstance(t, Pow) and t.exp == 2:
            f, arg = t.base.func, t.base.args[0] if t.base.args else None
            if f == sin:
                return cos(arg) ** 2
            if f == cos:
                return sin(arg) ** 2
            if f in (tan, cot):
                return t + 2
        return t
    return e.replace(lambda t: isinstance(t, Pow) and t.exp == 2 and t.base.func in (sin, cos, tan, cot), swap)


def m4(v, p):
    """Uses an identity with the wrong sign before integrating."""
    x = _x(v)
    e = v["f"].expand()
    w = _wrong_identity(e)
    if simplify(w - e) == 0:
        raise ValueError("no squared trigonometric function to rewrite")
    return _anti(w, x)


def m5(v, p):
    """Pulls the part u out of the integral as if it were a constant: u times the integral of the rest."""
    if "u" not in v:
        raise ValueError("not a product or quotient")
    x = _x(v)
    rest = v["v"] if p["op"] == "prod" else 1 / v["v"]
    return v["u"] * _part(v, "iv" if p["op"] == "prod" else "iw", rest, x)


def _slope(t, x):
    """k when the term t is a standard form in kx + b (sin, cos, exp, sec^2, a power of kx + b), else 1."""
    for s in preorder_traversal(t):
        if isinstance(s, (sin, cos, tan, sec, csc, cot, exp, log)) or isinstance(s, Pow):
            inner = s.args[0]
            k = diff(inner, x)
            if inner.has(x) and k.is_number and k != 1 and diff(k, x) == 0:
                return k
    return 1


def m6(v, p):
    """Rewrites correctly but drops the 1/k when integrating f(kx + b): the integral of cos 2x taken as sin 2x."""
    if "r" not in v:
        raise ValueError("no rewritten form")
    x = _x(v)
    r = v["r"]
    if simplify(r - v["f"]) != 0:
        raise ValueError("r is not f")
    out = 0
    for t in Add.make_args(r.expand()):
        k = _slope(t, x)
        out += k * _anti(t, x)
    if simplify(out - key(v, p)) == 0:
        raise ValueError("no kx + b term: the model gives the key")
    return simplify(out)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
