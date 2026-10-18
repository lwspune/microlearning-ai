"""C06 Logarithmic differentiation: answer models (the key, and one per misconception).

Inputs, three styles (a, the point, is optional: absent when the item asks for dy/dx):
- Power: base f and index g, both in x: y = f^g.
- Factors: factors, a tuple of (b, e) pairs, and k: y = (b1^e1 * b2^e2 * ...)^k.
- Sum: terms, a tuple of expressions: y = t1 + t2 + ... The terms whose base and
  index both contain x are the ones logarithms are needed for.
The key is sympy's derivative of y, straight from the function; every wrong answer
replays one wrong step of taking logs, differentiating and multiplying back by y.
"""
from sympy import Abs, Integer, Mul, Pow, Symbol, diff, expand, log, nan, oo, simplify, sympify, zoo


def _x(v):
    for e in v.values():
        for s in sympify(e).free_symbols:
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _y(v):
    if "base" in v:
        return Pow(v["base"], v["index"])
    if "factors" in v:
        return Pow(Mul(*[Pow(b, e) for b, e in v["factors"]]), v["k"])
    if "terms" in v:
        return sum(v["terms"], Integer(0))
    raise ValueError("no function")


def _at(d, x, v):
    if "a" in v:
        d = d.subs(x, v["a"])
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['a']}")
        return expand(d)
    return simplify(d)


def _both(t, x):
    """True when t = f^g with x in both the base and the index."""
    return isinstance(t, Pow) and t.base.has(x) and t.exp.has(x)


def _sum(v, x, wrong):
    """A sum's derivative with `wrong` applied to its f^g terms, the rest done right."""
    hit = [t for t in v["terms"] if _both(t, x)]
    if not hit:
        raise ValueError("no f^g term")
    return sum((wrong(t.base, t.exp, x) if _both(t, x) else diff(t, x) for t in v["terms"]), Integer(0))


def key(v, p):
    x = _x(v)
    return _at(diff(_y(v), x), x, v)


def _bracket(f, g, x):
    """d/dx log(f^g) = g' log f + g f'/f, the right side after taking logs."""
    return diff(g, x) * log(f) + g * diff(f, x) / f


def m1(v, p):
    """Stops at (1/y) dy/dx: never multiplies back by y."""
    x = _x(v)
    if "base" in v:
        return _at(_bracket(v["base"], v["index"], x), x, v)
    if "factors" in v:
        y = _y(v)
        return _at(diff(y, x) / y, x, v)
    return _at(_sum(v, x, _bracket), x, v)


def _power(f, g, x):
    """The power rule with the index held constant: g f^(g-1) f'."""
    return g * f ** (g - 1) * diff(f, x)


def _expo(f, g, x):
    """The exponential rule with the base held constant: f^g log f . g'."""
    return f ** g * log(f) * diff(g, x)


def m2(v, p):
    """Treats f^g like x^n: the power rule, as if the index were constant."""
    x = _x(v)
    if "base" in v:
        return _at(_power(v["base"], v["index"], x), x, v)
    if "terms" in v:
        return _at(_sum(v, x, _power), x, v)
    raise ValueError("needs an f^g")


def m3(v, p):
    """Treats f^g like a^x: the exponential rule, as if the base were constant."""
    x = _x(v)
    if "base" in v:
        return _at(_expo(v["base"], v["index"], x), x, v)
    if "terms" in v:
        return _at(_sum(v, x, _expo), x, v)
    raise ValueError("needs an f^g")


def m4(v, p):
    """Takes log(u/v) = log u + log v: every factor's term added, the denominator's too."""
    if "factors" not in v:
        raise ValueError("needs factors")
    if all(e > 0 for _, e in v["factors"]):
        raise ValueError("no denominator")
    x = _x(v)
    s = sum((Abs(e) * diff(b, x) / b for b, e in v["factors"]), Integer(0))
    return _at(_y(v) * v["k"] * s, x, v)


def m5(v, p):
    """Takes d/dx log u = 1/u, leaving off the derivative of u."""
    x = _x(v)
    if "base" in v:
        f, g = v["base"], v["index"]
        if simplify(diff(f, x) - 1) == 0:
            raise ValueError("base is x: same as the key")
        return _at(_y(v) * (diff(g, x) * log(f) + g / f), x, v)
    if "factors" in v:
        s = sum((e / b for b, e in v["factors"]), Integer(0))
        return _at(_y(v) * v["k"] * s, x, v)
    raise ValueError("needs a power or factors")


def m6(v, p):
    """Takes log(u + v) = log u + log v, then multiplies back by y."""
    if "terms" not in v:
        raise ValueError("needs a sum")
    x = _x(v)
    s = sum((diff(t, x) / t for t in v["terms"]), Integer(0))
    return _at(_y(v) * s, x, v)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
