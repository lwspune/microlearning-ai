"""C05 The product rule: answer models (the key, and one per misconception).

Inputs: f, an expression in x; a, the point (absent when the item asks for dy/dx).
The products inside f: u, w and k (f holds k*u*w; k defaults to 1), and a second one
u2, w2, k2. A three-factor item gives u, v, w (f holds k*u*v*w).
The key is sympy's derivative of f as given, never the product rule being taught.
Each model replaces the derivative of each product in f by its wrong version.
"""
from sympy import Integer, Mul, diff, nan, oo, simplify, zoo


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


def _products(v):
    """The products in f, as (k, [factors])."""
    out = []
    if "u" in v:
        factors = [v["u"], v["v"], v["w"]] if "v" in v else [v["u"], v["w"]]
        out.append((v.get("k", Integer(1)), factors))
    if "u2" in v:
        out.append((v.get("k2", Integer(1)), [v["u2"], v["w2"]]))
    if not out:
        raise ValueError("needs a product u*w")
    return out


def _swap(v, rule):
    """f' with each product's derivative replaced by rule(k, factors, x)."""
    f = v["f"]
    x = _x(f)
    d = diff(f, x)
    for k, fs in _products(v):
        d += rule(k, fs, x) - diff(k * Mul(*fs), x)
    return _at(d, x, v)


def key(v, p):
    f = v["f"]
    x = _x(f)
    return _at(diff(f, x), x, v)


def m1(v, p):
    """Differentiates each factor and multiplies: (uv)' = u'v'."""
    return _swap(v, lambda k, fs, x: k * Mul(*[diff(g, x) for g in fs]))


def m2(v, p):
    """Keeps the first factor as if it were a constant: (uv)' = uv'."""
    return _swap(v, lambda k, fs, x: k * Mul(*fs[:-1]) * diff(fs[-1], x))


def _minus(k, fs, x):
    if len(fs) != 2:
        raise ValueError("two factors only")
    u, w = fs
    return k * (diff(u, x) * w - u * diff(w, x))


def m3(v, p):
    """Puts a minus in the rule, as in the quotient rule: (uv)' = u'v - uv'."""
    return _swap(v, _minus)


def m4(v, p):
    """Negates only the first term of a subtracted product: -(uv)' = -u'v + uv'."""
    if all(k > 0 for k, _ in _products(v)):
        raise ValueError("no subtracted product")
    return _swap(v, lambda k, fs, x: _minus(k, fs, x) if k < 0 else diff(k * Mul(*fs), x))


def m5(v, p):
    """With three factors, writes only two terms: (uvw)' = u'vw + uv'w."""
    def rule(k, fs, x):
        if len(fs) != 3:
            raise ValueError("three factors only")
        u, w, z = fs
        return k * (diff(u, x) * w * z + u * diff(w, x) * z)
    return _swap(v, rule)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
