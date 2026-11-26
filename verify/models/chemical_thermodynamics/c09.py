"""C09 Reaction enthalpy from bond enthalpies: answer models (the key, and one per misconception).

Delta_r H0 = sum (bond enthalpies of bonds broken) - sum (bond enthalpies of bonds formed), in kJ.
inputs: one bond enthalpy per bond type, keyed by a short name (HH, ClCl, HCl, NH, NN, CH, CCl, ...); and, for
        ask "bond", dH (the given Delta_r H0, kJ).
params:
  "ask":    "dH"   Delta_r H0 of the equation as written, kJ;
            "dHf"  per mole of product: the equation is written for one mole (fractions allowed);
            "bond" the bond enthalpy of params["x"] (missing from inputs), kJ/mol;
  "broken", "formed": the bonds that change, "HH:1/2,ClCl:1/2" (bond:count);
  "kept":   bonds present on both sides, unchanged ("CH:2"), used only by C09-M5;
  "scale":  for "dHf", the multiple that clears the fractions (the whole-number equation), used by C09-M3;
  "sf":     significant figures (default 3).
"""
from sympy import Integer, Rational, Symbol, solve

from chemistry import sig

X = Symbol("X")


def _sum(v, spec, x_name, ones=False):
    total = Integer(0)
    if not spec:
        return total
    for part in spec.split(","):
        name, k = part.split(":")
        e = X if name == x_name else v[name]
        total += (Integer(1) if ones else Rational(k)) * e
    return total


def _solve(v, p, rule=None):
    ask, n = p["ask"], int(p.get("sf", 3))
    xn = p.get("x")
    ones = rule == "no_count"
    b = _sum(v, p["broken"], xn, ones)
    f = _sum(v, p["formed"], xn, ones)
    if rule == "kept_broken":
        b += _sum(v, p.get("kept", ""), xn)
    if rule == "reversed":
        expr = f - b
    elif rule == "added":
        expr = b + f
    else:
        expr = b - f
    if ask == "bond":
        (x,) = solve(expr - v["dH"], X)
        return sig(x, n)
    if rule == "per_equation":
        expr *= Rational(p["scale"])
    return sig(expr, n)


def key(v, p):
    return _solve(v, p)


def _m(rule, asks=("dH", "dHf", "bond")):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        out = _solve(v, p, rule)
        if out == _solve(v, p):
            raise ValueError("gives the key on this item")
        return out
    return model


MODELS = {
    "key": key,
    "C09-M1": _m("reversed"),  # bonds formed minus bonds broken
    "C09-M2": _m("no_count"),  # each bond type counted once
    "C09-M3": _m("per_equation", ("dHf",)),  # the whole-number equation's value, not per mole of product
    "C09-M4": _m("added"),  # adds broken and formed
    "C09-M5": _m("kept_broken"),  # breaks every reactant bond but forms only the new bonds
}
