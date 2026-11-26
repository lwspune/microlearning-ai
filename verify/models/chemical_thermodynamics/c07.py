"""C07 Standard enthalpies of reaction: answer models (the key, and one per misconception).

Delta_r H0 = sum nu * Delta_f H0(products) - sum nu * Delta_f H0(reactants); an element in its standard state has 0.
inputs: Delta_f H0 in kJ/mol, one per compound, keyed by formula (an element left out counts as 0).
params:
  "ask":  "dHr"  the enthalpy of the reaction as written, in kJ;
          "dHc"  per mole of the substance params["per"] (an enthalpy of combustion), in kJ/mol;
          "formation"  which equation's Delta_r H0 is a Delta_f H0 (named);
  "prod", "reac": "CO2:4,H2O:6" (formula:coefficient; elements included so the coefficients are complete);
  "sf":   significant figures (default 3).
"""
from sympy import Integer, Rational, Symbol

from chemistry import sig

NAMED = {"formation": {"key": "graphite_eq", "C07-M3": "two_mol_eq", "C07-M5": "diamond_eq", "C07-M6": "from_CO_eq"}}


def _side(v, spec, ones=False):
    total = Integer(0)
    for part in spec.split(","):
        name, nu = part.split(":")
        total += (Integer(1) if ones else Rational(nu)) * v.get(name, Integer(0))
    return total


def _coef(spec, name):
    for part in spec.split(","):
        n, nu = part.split(":")
        if n == name:
            return Rational(nu)
    raise ValueError(f"{name} not in {spec}")


def _solve(v, p, rule=None):
    ask, n = p["ask"], int(p.get("sf", 3))
    ones = rule == "no_coef"
    P, R = _side(v, p["prod"], ones), _side(v, p["reac"], ones)
    if rule == "reversed":
        dH = R - P
    elif rule == "added":
        dH = P + R
    else:
        dH = P - R
    if ask == "dHr":
        return sig(dH, n)
    if ask == "dHc":
        if rule in ("per_equation", "no_coef"):  # the equation's value taken as per mole of the substance
            return sig(dH, n)
        return sig(dH / _coef(p["reac"], p["per"]), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), rule=None):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        if rule == "per_equation" and _coef(p["reac"], p["per"]) == 1:
            raise ValueError("coefficient 1: same as the key")
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C07-M1": _m("C07-M1", ("dHr", "dHc"), "reversed"),  # reactants minus products
    "C07-M2": _m("C07-M2", ("dHr", "dHc"), "no_coef"),  # each species counted once, coefficients ignored
    "C07-M3": _m("C07-M3", ("dHc",), "per_equation"),  # the equation's value taken as per mole of the substance
    "C07-M4": _m("C07-M4", ("dHr", "dHc"), "added"),  # adds the two sums
    "C07-M5": _m("C07-M5"),  # any form of an element will do (diamond, ozone)
    "C07-M6": _m("C07-M6"),  # formation from any substances, not from the elements
}
