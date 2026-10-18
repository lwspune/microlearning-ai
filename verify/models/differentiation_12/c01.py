"""C01 The chain rule: answer models (the key, and one per misconception).

Inputs, two styles:
- Layers: outer (in u), optional mid (in u), inner (in x): y = outer(mid(inner(x))).
  Optional a, the point (absent when the item asks for dy/dx).
- Table: a, the point, and g, gp, fp, each a tuple of (x, value) pairs giving g(x),
  g'(x) and f'(x); the item asks for the derivative of f[g(x)] at x = a.
The key is sympy's derivative of the composed function (or, for a table, f'(g(a))g'(a),
the definition of the derivative of a composite read off the table); every wrong
answer replaces the chain-rule product by its wrong version.
"""
from sympy import Integer, Pow, Symbol, diff, nan, oo, simplify, zoo


def _sym(e, name):
    for s in e.free_symbols:
        if s.name == name:
            return s
    return Symbol(name)


def _layers(v):
    """The layers outermost first, each with the symbol it is a function of."""
    if "inner" not in v:
        raise ValueError("needs layers")
    out = [v["outer"]] + ([v["mid"]] if "mid" in v else [])
    return out, v["inner"]


def _compose(outs, inner):
    """outs[0](outs[1](...(inner))) and the symbols used."""
    g = inner
    for L in reversed(outs):
        g = L.subs(_sym(L, "u"), g)
    return g


def _at(d, x, v):
    if "a" in v:
        d = d.subs(x, v["a"])
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['a']}")
    return simplify(d)


def _look(t, k):
    for pair in t:
        if simplify(pair[0] - k) == 0:
            return pair[1]
    raise ValueError(f"no table value at {k}")


def _links(v):
    """The chain's factors: each layer's derivative evaluated at what sits inside it."""
    outs, inner = _layers(v)
    x = _sym(inner, "x")
    factors = []
    for i, L in enumerate(outs):
        u = _sym(L, "u")
        factors.append(diff(L, u).subs(u, _compose(outs[i + 1:], inner)))
    factors.append(diff(inner, x))
    return factors, x


def key(v, p):
    if "fp" in v:
        a = v["a"]
        return _look(v["fp"], _look(v["g"], a)) * _look(v["gp"], a)
    outs, inner = _layers(v)
    x = _sym(inner, "x")
    return _at(diff(_compose(outs, inner), x), x, v)


def m1(v, p):
    """Stops the chain early: leaves off the derivative of the innermost function."""
    if "fp" in v:
        return _look(v["fp"], _look(v["g"], v["a"]))
    factors, x = _links(v)
    d = Integer(1)
    for f in factors[:-1]:
        d *= f
    return _at(d, x, v)


def m2(v, p):
    """Evaluates the outside's derivative at x, not at the inside: f'(x)g'(x)."""
    if "fp" in v:
        a = v["a"]
        return _look(v["fp"], a) * _look(v["gp"], a)
    outs, inner = _layers(v)
    x = _sym(inner, "x")
    L = outs[0]
    u = _sym(L, "u")
    g = _compose(outs[1:], inner)
    return _at(diff(L, u).subs(u, x) * diff(g, x), x, v)


def m3(v, p):
    """Puts the inside's derivative inside the outside's derivative: f'(g'(x))."""
    if "fp" in v:
        a = v["a"]
        return _look(v["fp"], _look(v["gp"], a))
    outs, inner = _layers(v)
    x = _sym(inner, "x")
    L = outs[0]
    u = _sym(L, "u")
    g = _compose(outs[1:], inner)
    return _at(diff(L, u).subs(u, diff(g, x)), x, v)


def m4(v, p):
    """With a negative index, moves the index towards zero: (g^n)' = n g^(n+1) g' for n < 0."""
    if "fp" in v:
        raise ValueError("needs layers")
    outs, inner = _layers(v)
    x = _sym(inner, "x")
    L = outs[0]
    u = _sym(L, "u")
    k, rest = L.as_coeff_Mul()
    if not (isinstance(rest, Pow) and rest.base == u and rest.exp.is_number and rest.exp < 0):
        raise ValueError("outer must be k*u**n with n < 0")
    n = rest.exp
    g = _compose(outs[1:], inner)
    return _at(k * n * g ** (n + 1) * diff(g, x), x, v)


def m5(v, p):
    """With three layers, skips the middle link: multiplies only the outer and inner derivatives."""
    if "fp" in v or "mid" not in v:
        raise ValueError("needs three layers")
    factors, x = _links(v)
    return _at(factors[0] * factors[2], x, v)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
