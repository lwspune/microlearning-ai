"""C08 Hess's law: answer models (the key, and one per misconception).

The target equation is sum c_i * (equation i), so Delta H = sum c_i * Delta H_i (a negative c_i reverses equation i).
inputs: h1, h2, h3 (the given Delta H values, kJ).
params: "c": "-1,2,1" (the multiple of each given equation the target needs); "sf": significant figures.
"""
from sympy import Integer, Rational, sign

from chemistry import sig


def _parts(v, p):
    cs = [Rational(c) for c in p["c"].split(",")]
    hs = [v[f"h{i + 1}"] for i in range(len(cs))]
    return cs, hs


def _solve(v, p, rule=None):
    cs, hs = _parts(v, p)
    n = int(p.get("sf", 3))
    if rule == "no_flip":
        cs = [abs(c) for c in cs]
    elif rule == "no_scale":
        cs = [sign(c) for c in cs]
    elif rule == "as_printed":
        cs = [Integer(1)] * len(cs)
    total = sum(c * h for c, h in zip(cs, hs))
    if rule == "reverse_target":
        total = -total
    return sig(total, n)


def key(v, p):
    return _solve(v, p)


def _m(rule):
    def model(v, p):
        out = _solve(v, p, rule)
        if out == _solve(v, p):
            raise ValueError("gives the key on this item")
        return out
    return model


MODELS = {
    "key": key,
    "C08-M1": _m("no_flip"),  # reverses an equation but keeps the sign of its Delta H
    "C08-M2": _m("no_scale"),  # multiplies an equation but not its Delta H
    "C08-M3": _m("as_printed"),  # adds the given Delta H values as printed
    "C08-M4": _m("reverse_target"),  # builds the reverse of the target reaction
}
