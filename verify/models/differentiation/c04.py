"""C04 Sums and constant multiples: answer models (the key, and one per misconception).

Inputs: f, an expression in x; a, the point (absent when the item asks for dy/dx);
u and w, the two factors of a product inside f (for C04-M1); n and d, f's numerator
and denominator (for C04-M2).
The key is sympy's derivative of f as given, never the term-by-term method being taught.
"""
from sympy import Add, Symbol, diff, expand, nan, oo, sign, simplify, zoo

_t = Symbol("t", positive=True)


def _x(f):
    """The symbol called x in f (the verifier parses x as real, draft_items as plain)."""
    for s in f.free_symbols:
        if s.name == "x":
            return s
    raise ValueError(f"no x in {f}")


def _at(d, x, v):
    """dy/dx as an expression, or its value at x = a when the item gives a point."""
    if "a" in v:
        d = d.subs(x, v["a"])
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['a']}")
    return simplify(d)


def _terms(f, x):
    """f written as a sum of terms: brackets expanded, a fraction divided term by term."""
    return Add.make_args(expand(f))


def _constant(f, x):
    """The constant term of f once it is expanded (x = t^2 first, so x - 4 = (t - 2)(t + 2) cancels)."""
    g = expand(simplify(f.subs(x, _t**2)))
    return Add(*[term for term in Add.make_args(g) if not term.has(_t)])


def key(v, p):
    f = v["f"]
    x = _x(f)
    return _at(diff(f, x), x, v)


def m1(v, p):
    """Differentiates a product factor by factor and multiplies: (uw)' = u'w'."""
    if "u" not in v:
        raise ValueError("needs a product u*w")
    f, u, w = v["f"], v["u"], v["w"]
    x = _x(f)
    return _at(diff(f, x) - diff(u * w, x) + diff(u, x) * diff(w, x), x, v)


def m2(v, p):
    """Differentiates the top and the bottom separately: (n/d)' = n'/d'."""
    if "n" not in v:
        raise ValueError("needs a fraction n/d")
    x = _x(v["f"])
    return _at(diff(v["n"], x) / diff(v["d"], x), x, v)


def m3(v, p):
    """Keeps the constant term: (u + c)' = u' + c."""
    f = v["f"]
    x = _x(f)
    c = _constant(f, x)
    if c == 0:
        raise ValueError("no constant term")
    return _at(diff(f, x) + c, x, v)


def m4(v, p):
    """Drops each term's number in front: (ku)' = u' (the term keeps its sign)."""
    f = v["f"]
    x = _x(f)
    out = 0
    for term in _terms(f, x):
        k, rest = term.as_coeff_Mul()
        out += sign(k) * diff(rest, x)
    if simplify(out - diff(f, x)) == 0:
        raise ValueError("no constant multiple to drop")
    return _at(out, x, v)


def m5(v, p):
    """Gives f(a), the function's value, for f'(a)."""
    if "a" not in v:
        raise ValueError("needs a point")
    f = v["f"]
    return simplify(f.subs(_x(f), v["a"]))


def m6(v, p):
    """A subtracted term whose derivative is negative stays negative: (-cos x)' = -sin x."""
    f = v["f"]
    x = _x(f)
    out = 0
    flipped = False
    for term in _terms(f, x):
        k, rest = term.as_coeff_Mul()
        d = diff(rest, x)
        if k < 0 and d.could_extract_minus_sign():
            out += -k * d
            flipped = True
        else:
            out += k * d
    if not flipped:
        raise ValueError("no subtracted term with a negative derivative")
    return _at(out, x, v)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
