"""C04 Related rates: answer models (the key, and one per misconception).

Inputs (sympy, x is the base variable, e.g. a radius, an edge or a distance):
- Q: the quantity asked about, in x (and optionally w).
- G: the quantity whose rate is given, in x (and optionally w); absent means G = x.
- w: optional, a second changing quantity tied to x (a cone's radius, w = x/2).
- x0: the value of x at the instant (absent when the answer does not depend on it).
- rate: dG/dt at that instant.
- alt: optional, the quantity a student confuses with Q (a shadow's length for its tip).
The key moves G along time, G(t) = G(x0) + rate*t, solves for x(t) and differentiates
Q(x(t)) with respect to t at t = 0: the rate straight from its definition, with no
chain-rule bookkeeping by hand.
"""
from sympy import Integer, Symbol, diff, simplify, solve

_t = Symbol("t")


def _sym(e, name):
    for s in e.free_symbols:
        if s.name == name:
            return s
    return Symbol(name)


def _x(v):
    for k in ("Q", "G", "w"):
        if k in v:
            for s in v[k].free_symbols:
                if s.name == "x":
                    return s
    return Symbol("x", real=True)


def _tie(e, v):
    """e with the linked quantity w written in x."""
    if "w" in v:
        e = e.subs(_sym(e, "w"), v["w"])
    return e


def _x0(v):
    return v["x0"] if "x0" in v else Symbol("x0", positive=True)


def _G(v):
    return _tie(v["G"], v) if "G" in v else _x(v)


def _rate_of(Q, v):
    """dQ/dt from the definition: G moves at the given rate, x follows it."""
    x, x0 = _x(v), _x0(v)
    G = _G(v)
    path = G.subs(x, x0) + v["rate"] * _t
    roots = [r for r in solve(G - path, x) if simplify(r.subs(_t, 0) - x0) == 0]
    if len(roots) != 1:
        raise ValueError(f"no single path for x through {x0}")
    d = diff(_tie(Q, v).subs(x, roots[0]), _t).subs(_t, 0)
    return simplify(d)


def _d(e, v):
    """d e/dx at the instant."""
    x = _x(v)
    return diff(e, x).subs(x, _x0(v))


def key(v, p):
    return simplify(_rate_of(v["Q"], v))


def m1(v, p):
    """Differentiates with respect to the variable, not t: dQ/dx (or dQ/dG), no rate factor."""
    return simplify(_d(_tie(v["Q"], v), v) / _d(_G(v), v))


def m2(v, p):
    """Puts the instant's values in before differentiating, freezing a changing quantity."""
    x, x0 = _x(v), _x0(v)
    if "w" not in v:
        return Integer(0)  # Q(x0) is a constant, so its derivative is 0
    frozen = v["w"].subs(x, x0)
    Q = v["Q"].subs(_sym(v["Q"], "w"), frozen)
    G = v["G"].subs(_sym(v["G"], "w"), frozen) if "G" in v else x
    return simplify(_d(Q, v) / _d(G, v) * v["rate"])


def m3(v, p):
    """Uses the given rate (of G) as if it were dx/dt."""
    if "G" not in v:
        raise ValueError("the given rate is already dx/dt")
    return simplify(_d(_tie(v["Q"], v), v) * v["rate"])


def m4(v, p):
    """Takes every rate as positive, so a decreasing quantity gets a positive rate."""
    k = key(v, p)
    if not (k.is_number and k < 0):
        raise ValueError("the key is not negative")
    return -k


def m5(v, p):
    """Confuses the shadow's length with the tip's distance from the post (or the reverse)."""
    if "alt" not in v:
        raise ValueError("needs the confused quantity alt")
    return simplify(_rate_of(v["alt"], v))


def m6(v, p):
    """Puts the given rate into the formula in place of the quantity: dQ/dt = Q(dx/dt)."""
    x = _x(v)
    Q = _tie(v["Q"], v)
    if "G" in v or diff(Q, x, 2) == 0:
        raise ValueError("needs Q nonlinear in x with the rate of x given")
    return simplify(Q.subs(x, v["rate"]))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
