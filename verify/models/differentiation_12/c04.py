"""C04 Derivatives of inverse trigonometric functions: answer models (the key, and one per misconception).

Inputs: f, an expression in x holding inverse trigonometric functions of some u(x)
(asin, acos, atan, acot, asec, acsc); a, the point, when the item asks for dy/dx at x = a.
The key is sympy's own derivative of f, never the table of standard results being taught.
Each misconception differentiates f with the chain rule but a wrong rule for d/dx F^-1(u)
(or, for M2, reads F^-1(u) as 1/F(u)).
"""
from sympy import Abs, Symbol, acos, acot, acsc, asec, asin, atan, cos, cot, csc, diff, nan, oo, sec, simplify, sin, sqrt, tan, zoo

_X = Symbol("x", real=True)
_INV = (asin, acos, atan, acot, asec, acsc)
_CO = (acos, acot, acsc)
_RECIP = {asin: sin, acos: cos, atan: tan, acot: cot, asec: sec, acsc: csc}


def _real(f):
    """f with its x made real (draft_items parses inputs with a plain x)."""
    return f.subs({s: _X for s in f.free_symbols if s.name == "x"})


def _at(d, v):
    """dy/dx as an expression, or its value at x = a when the item gives a point."""
    if "a" in v:
        d = d.subs(_X, v["a"])
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['a']}")
        return simplify(d)
    return d  # simplify() writes 4^x log 4 as log(4^(4^x)): compare, don't rewrite


def _atoms(f):
    atoms = [a for a in f.atoms(*_INV)]
    if not atoms:
        raise ValueError("no inverse trigonometric function in f")
    return atoms


def _chain(f, rule):
    """d/dx f, using rule(F, u, du) for each inverse trigonometric atom F(u)."""
    atoms = _atoms(f)
    dummies = [Symbol(f"s{i}") for i in range(len(atoms))]
    g = f.subs(dict(zip(atoms, dummies)))
    d = diff(g, _X)
    for a, s in zip(atoms, dummies):
        u = a.args[0]
        d += diff(g, s) * rule(a.func, u, diff(u, _X))
    return d.subs(dict(zip(dummies, atoms)))


def _right(F, u, du):
    """The standard results, with the chain factor du."""
    if F in (asin, acos):
        r = 1 / sqrt(1 - u**2)
    elif F in (atan, acot):
        r = 1 / (1 + u**2)
    else:
        r = 1 / (Abs(u) * sqrt(u**2 - 1))
    return (-r if F in _CO else r) * du


def key(v, p):
    f = _real(v["f"])
    return _at(diff(f, _X), v)


def m1(v, p):
    """Stops at the standard result: d/dx sin^-1(u) = 1/sqrt(1 - u^2), dropping du/dx."""
    f = _real(v["f"])
    d = _chain(f, lambda F, u, du: _right(F, u, 1))
    if simplify(d - diff(f, _X)) == 0:
        raise ValueError("u' = 1: dropping it changes nothing")
    return _at(d, v)


def m2(v, p):
    """Reads the -1 as a power: sin^-1(u) = 1/sin(u), and differentiates that."""
    f = _real(v["f"])
    return _at(diff(f.subs({a: 1 / _RECIP[a.func](a.args[0]) for a in _atoms(f)}), _X), v)


def m3(v, p):
    """Gets the sign of the result wrong: the minus of cos^-1, cot^-1, cosec^-1 left off, or put on the others."""
    f = _real(v["f"])
    return _at(_chain(f, lambda F, u, du: -_right(F, u, du)), v)


def m4(v, p):
    """Puts u where x stood but forgets to square it: 1 - u instead of 1 - u^2 (1 + u, u - 1 likewise)."""
    f = _real(v["f"])

    def rule(F, u, du):
        if F in (asin, acos):
            r = 1 / sqrt(1 - u)
        elif F in (atan, acot):
            r = 1 / (1 + u)
        else:
            r = 1 / (Abs(u) * sqrt(u - 1))
        return (-r if F in _CO else r) * du

    return _at(_chain(f, rule), v)


def m5(v, p):
    """Drops the |u| in front of sec^-1 and cosec^-1: d/dx sec^-1(u) = u'/sqrt(u^2 - 1)."""
    f = _real(v["f"])
    if not f.atoms(asec, acsc):
        raise ValueError("needs sec^-1 or cosec^-1")

    def rule(F, u, du):
        if F in (asec, acsc):
            r = 1 / sqrt(u**2 - 1)
            return (-r if F in _CO else r) * du
        return _right(F, u, du)

    return _at(_chain(f, rule), v)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
