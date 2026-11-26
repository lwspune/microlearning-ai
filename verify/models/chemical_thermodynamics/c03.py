"""C03 Reversible maximum work: answer models (the key, and one per misconception).

W_max = -nRT ln(V2/V1) = -2.303 nRT log10(V2/V1) = -2.303 nRT log10(P1/P2), in J (R = 8.314).
inputs: n (mol) or mass and M (g, g/mol); T (K) or Tc (deg C); V1, V2 or P1, P2.
params["ask"]:
  "W":  the maximum work;
  "P2": the final pressure from the work (inputs W in J, P1), in P1's unit.
"""
from sympy import E, Integer, log

from chemistry import BOOK, sig

R = BOOK["R"]


def _n(v, how):
    if "n" in v:
        return v["n"]
    return v["mass"] if how == "M4" else v["mass"] / v["M"]


def _T(v, how):
    if "T" in v:
        if how == "M5":
            raise ValueError("temperature is given in K")
        return v["T"]
    return v["Tc"] if how == "M5" else v["Tc"] + 273


def _solve(v, p, how):
    sf = p.get("sf", 3)
    if how == "M4" and "n" in v:
        raise ValueError("amount is given in mol")
    nRT = _n(v, how) * R * _T(v, how)
    if p["ask"] == "W":
        r = v["V2"] / v["V1"] if "V2" in v else v["P1"] / v["P2"]
        if how == "M1":
            r = 1 / r
        if how == "M2":
            return sig(-Integer(2303) / 1000 * nRT * log(r), sf)  # 2.303 with ln
        if how == "M3":
            return sig(-nRT * log(r, 10), sf)  # log10 without 2.303
        return sig(-nRT * log(r), sf)
    if p["ask"] == "P2":
        W, P1 = v["W"], v["P1"]
        x = W / nRT  # ln(P1/P2) = -x for the key
        if how == "M1":
            return sig(P1 * E ** (-x), sf)  # ln(P2/P1) = -x
        if how == "M2":
            return sig(P1 * E ** (x * 1000 / Integer(2303)), sf)
        if how == "M3":
            return sig(P1 * Integer(10) ** x, sf)
        return sig(P1 * E ** x, sf)
    raise ValueError(f"unknown ask {p['ask']}")


def key(v, p):
    return _solve(v, p, "key")


def _m(how):
    def model(v, p):
        return _solve(v, p, how)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("M1"),  # turns the ratio upside down: log(V1/V2) or log(P2/P1)
    "C03-M2": _m("M2"),  # keeps 2.303 but uses ln
    "C03-M3": _m("M3"),  # uses log10 but drops the 2.303
    "C03-M4": _m("M4"),  # uses the mass in grams as the number of moles
    "C03-M5": _m("M5"),  # uses the temperature in deg C
}
