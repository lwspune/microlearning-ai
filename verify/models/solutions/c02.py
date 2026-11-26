"""C02 Henry's law: answer models (the key, and one per misconception).

S = K_H P, with P the gas's partial pressure in the unit of K_H.
params["ask"]:
  "S":       solubility. inputs KH, and either P (partial pressure, in K_H's unit), or P_mmHg (converted:
             760 mm Hg = 1 atm = 1.013 bar when params unit = "bar"), or x and Ptot (a mixture: P = x Ptot).
  "P":       the partial pressure needed for a solubility given in mg per litre. inputs KH, mg_per_L, M (g/mol).
  "statement": the statement of Henry's law (named).
params["sf"]: significant figures (default 3).
"""
from sympy import Integer, Symbol

from chemistry import sig

NAMED = {"statement": {"key": "proportional_partial", "C02-M1": "inverse_pressure", "C02-M2": "proportional_total",
                       "C02-M5": "fixed_solubility"}}


def _pressure(v, p, *, raw=False, total=False):
    if "P" in v:
        return v["P"]
    if "P_mmHg" in v:
        if raw:
            return v["P_mmHg"]
        atm = v["P_mmHg"] / 760
        return atm * v.get("atm_bar", Integer(1)) if p.get("unit") == "bar" else atm
    return v["Ptot"] if total else v["x"] * v["Ptot"]


def _solve(v, p, mode):
    n = int(p.get("sf", 3))
    KH = v["KH"]
    if p["ask"] == "S":
        P = _pressure(v, p, raw=mode == "M3", total=mode == "M2")
        if mode in ("key", "M2", "M3"):
            return sig(KH * P, n)
        if mode == "M1":  # inverse proportion: S = K_H / P
            return sig(KH / P, n)
        if mode == "M5":  # K_H itself as the solubility
            return sig(KH, n)
        if mode == "M6":  # the other form, S = P / K_H
            return sig(P / KH, n)
    if p["ask"] == "P":
        S = v["mg_per_L"] / 1000 / v["M"]
        if mode == "key":
            return sig(S / KH, n)
        if mode == "M4":  # grams per litre taken as mol per litre
            return sig(v["mg_per_L"] / 1000 / KH, n)
        if mode == "M1":  # S = K_H / P, so P = K_H / S
            return sig(KH / S, n)
        if mode == "M6":  # S = P / K_H, so P = K_H S
            return sig(KH * S, n)
    raise ValueError("does not apply to this item")


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
    "C02-M1": _m("C02-M1"),  # solubility inversely proportional to pressure
    "C02-M2": _m("C02-M2"),  # total pressure in place of the partial pressure
    "C02-M3": _m("C02-M3"),  # pressure left in mm Hg
    "C02-M4": _m("C02-M4"),  # mass per litre taken as moles per litre
    "C02-M5": _m("C02-M5"),  # K_H taken as the solubility at any pressure
    "C02-M6": _m("C02-M6"),  # uses S = P / K_H
}
