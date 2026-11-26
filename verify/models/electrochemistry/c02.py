"""C02 Molar conductivity and dilution: answer models (the key, and one per misconception).

Lambda = 1000 kappa / c (Lambda in ohm^-1 cm^2 mol^-1, kappa in ohm^-1 cm^-1, c in mol/L).
params["ask"]:
  "kappa":     kappa from Lambda and c (inputs L, c);
  "Lambda":    Lambda from kappa and c (inputs k, c), or from R, the cell constant b and c (inputs R, b, c);
  "dilution":  how Lambda and kappa of an electrolyte change on dilution (named);
  "weak":      how kappa and Lambda of a weak electrolyte change on dilution (named).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {
    "dilution": {"key": "L_up_k_down", "C02-M3": "L_down_k_up", "C02-M4": "both_up", "C02-M5": "both_down"},
    "weak": {"key": "k_down_L_up_steeply", "C02-M4": "k_up_L_up", "C02-M5": "k_down_L_down",
             "C02-M6": "k_down_L_up_slightly"},
}


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 3)
    c = v["c"]
    if ask == "kappa":
        L = v["L"]
        out = {"key": L * c / 1000, "M1": L * c, "M2": 1000 * L * c, "M3": 1000 * L / c}
    elif ask == "Lambda":
        k = v["k"] if "k" in v else v["b"] / v["R"]
        out = {"key": 1000 * k / c, "M1": k / c, "M2": k / (1000 * c), "M3": k * c / 1000}
    else:
        out = {}
    if how not in out:
        raise ValueError("does not apply to this item")
    return sig(out[how], n)


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
    "C02-M1": _m("C02-M1"),  # drops the 1000 (cm^3 per litre): Lambda = kappa / c
    "C02-M2": _m("C02-M2"),  # puts the 1000 on the wrong side: Lambda = kappa / (1000 c)
    "C02-M3": _m("C02-M3"),  # puts c on top: Lambda = kappa c / 1000, so Lambda falls and kappa rises on dilution
    "C02-M4": _m("C02-M4"),  # counts all the ions, not ions per cm^3: kappa rises on dilution
    "C02-M5": _m("C02-M5"),  # thinks Lambda falls on dilution, like kappa
    "C02-M6": _m("C02-M6"),  # gives a weak electrolyte the strong one's slow, straight-line rise
}
