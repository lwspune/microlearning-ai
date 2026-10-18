"""C01 Derivative from first principles: answer models (the key, and one per misconception).

Inputs: f, an expression in x; a, the point (absent when the item asks for f'(x));
k, the coefficient of x in an inner kx + c (for C01-M5); b, the base of an a^x (for C01-M6).
The key is the limit of the difference quotient, straight from the definition.
"""
from sympy import Add, Dummy, Symbol, cos, exp, expand_power_exp, factor_terms, limit, log, nan, oo, simplify, sin, tan, zoo

_h = Symbol("h")


def _x(f):
    """The symbol called x in f (the verifier parses x as real, draft_items as plain)."""
    for s in f.free_symbols:
        if s.name == "x":
            return s
    raise ValueError(f"no x in {f}")


def _finite(r):
    if r.has(oo, -oo, zoo, nan):
        raise ValueError(f"no finite limit ({r})")
    return simplify(r)


def _limit(top, x, v):
    """lim_{h -> 0} top / h, at x = a when the item gives a point (a^(x + h) written a^x a^h first)."""
    top = factor_terms(expand_power_exp(top))
    if "a" in v:
        top = top.subs(x, v["a"])
    return _finite(limit(top / _h, _h, 0))


def _quotient_limit(f, step, v):
    """lim_{h -> 0} [f(x + step) - f(x)] / h, at x = a, or as a function of x."""
    x = _x(f)
    return _limit(f.subs(x, x + step) - f, x, v)


def key(v, p):
    return _quotient_limit(v["f"], _h, v)


def m1(v, p):
    """Takes f(a), the height of the graph, as f'(a)."""
    if "a" not in v:
        raise ValueError("needs a point")
    return simplify(v["f"].subs(_x(v["f"]), v["a"]))


def m2(v, p):
    """Takes a secant's slope (h = 1) for the derivative: never lets h tend to 0."""
    f = v["f"]
    x = _x(f)
    at = v["a"] if "a" in v else x
    return simplify(f.subs(x, at + 1) - f.subs(x, at))


def _split(e, X):
    """Splits a power or a function over a sum: (A + B)^n -> A^n + B^n, sin(A + B) -> sin A + sin B."""
    if e.is_Atom:
        return e
    args = [_split(a, X) for a in e.args]
    e = e.func(*args)
    if e.is_Pow and e.exp.is_Integer and e.exp >= 2 and e.base.has(_h):
        base = e.base.expand()
        if base.is_Add:
            hs = Add(*[t for t in base.args if t.has(_h)])
            return (base - hs) ** e.exp + hs ** e.exp
    if e.func in (sin, cos, tan, exp, log) and e.args[0].has(_h):
        arg = e.args[0].expand()
        if arg.is_Add:
            hs = Add(*[t for t in arg.args if t.has(_h)])
            return e.func(arg - hs) + e.func(hs)
    return e


def m3(v, p):
    """Splits f over the sum: (x + h)^2 = x^2 + h^2, sin(A + B) = sin A + sin B."""
    f = v["f"]
    x = _x(f)
    X = Dummy("X")  # keeps x + h unexpanded until it is split
    fXh = f.subs(x, X + _h)
    split = _split(fXh, X).subs(X, x)
    if simplify(split - fXh.subs(X, x)) == 0:
        raise ValueError("nothing to split")
    return _limit(split - f, x, v)


def m4(v, p):
    """Subtracts the wrong way round: [f(x) - f(x + h)] / h."""
    return -key(v, p)


def m5(v, p):
    """Lets the inner kx + c move by h instead of kh (takes lim sin(kh)/h as 1): loses the factor k."""
    if "k" not in v or v["k"] == 1:
        raise ValueError("no inner kx + c with k != 1")
    return _quotient_limit(v["f"], _h / v["k"], v)


def m6(v, p):
    """Takes lim (a^h - 1)/h as 1 for every base a, as if a were e."""
    if "b" not in v or v["b"] == exp(1):
        raise ValueError("no base other than e")
    return simplify(key(v, p) / log(v["b"]))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
