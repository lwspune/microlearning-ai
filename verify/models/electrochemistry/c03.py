"""C03 Kohlrausch's law: answer models (the key, and one per misconception).

Lambda0 = n+ lambda0+ + n- lambda0-. For a weak electrolyte AB, from strong electrolytes AY, XB and XY:
Lambda0(AB) = Lambda0(AY) + Lambda0(XB) - Lambda0(XY); then alpha = Lambda / Lambda0.
params["ask"]:
  "expr":   which expression is Lambda0 of a salt (named);
  "salt":   Lambda0 of a salt from its ions (inputs lp, lm: ionic conductivities; np, nm: ions per formula;
            zp, zm: their charges);
  "weak":   Lambda0 of a weak electrolyte (inputs A: the strong electrolyte with its cation, B: with its anion,
            X: the one with the two spectator ions);
  "combo":  which combination gives Lambda0 of acetic acid (named);
  "alpha":  the degree of dissociation (inputs L, A, B, X).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {
    "expr": {"key": "two_Al_three_SO4", "C03-M1": "one_Al_one_SO4", "C03-M2": "three_Al_two_SO4",
             "C03-M3": "third_Al_half_SO4"},
    "combo": {"key": "HCl_plus_NaAc_minus_NaCl", "C03-M4": "HCl_plus_NaAc_plus_NaCl",
              "C03-M5": "HCl_plus_NaAc", "C03-M6": "HCl_plus_NaCl_minus_NaAc"},
}


def _weak(v, how):
    A, B, X = v["A"], v["B"], v["X"]
    return {"key": A + B - X, "M4": A + B + X, "M5": A + B, "M6": A + X - B}.get(how)


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 4)
    if ask == "salt":
        lp, lm, np_, nm, zp, zm = v["lp"], v["lm"], v["np"], v["nm"], v["zp"], v["zm"]
        val = {"key": np_ * lp + nm * lm, "M1": lp + lm, "M2": nm * lp + np_ * lm, "M3": lp / zp + lm / zm}.get(how)
    elif ask == "weak":
        val = _weak(v, how)
    elif ask == "alpha":
        L0 = _weak(v, how)
        val = None if L0 is None else v["L"] / L0
    else:
        val = None
    if val is None:
        raise ValueError("does not apply to this item")
    return sig(val, n)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1"),  # ignores the ion counts in the formula: lambda+ + lambda-
    "C03-M2": _m("C03-M2"),  # swaps the counts (uses the other ion's subscript)
    "C03-M3": _m("C03-M3"),  # divides each ion's conductivity by its charge, once each
    "C03-M4": _m("C03-M4"),  # adds all three strong electrolytes
    "C03-M5": _m("C03-M5"),  # adds the two that hold the wanted ions, forgetting to remove the spectator ions
    "C03-M6": _m("C03-M6"),  # subtracts a salt that holds a wanted ion (the anion's) instead of the spectator salt
}
