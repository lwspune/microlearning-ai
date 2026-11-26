"""C02 Absolute temperature and the ideal gas equation: answer models (the key, and one per misconception).

params["ask"]:
  "both":   final temperature, in deg C, of a gas at Tc deg C whose pressure and volume are multiplied by fP and fV
            (inputs Tc, fP, fV);
  "charles": new volume at constant pressure, V1 at T1 deg C heated to T2 deg C (inputs V1, T1, T2);
  "lussac": new pressure at constant volume, P1 at T1 deg C heated to T2 deg C (inputs P1, T1, T2);
  "moles":  moles of gas at P pascal in VL litres at Tc deg C (inputs P, VL, Tc);
  "zero":   where the extended V-T line of a gas meets V = 0 (named).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

K0 = Rational(27315, 100)

NAMED = {
    "zero": {"key": "minus_273_celsius", "C02-M4": "zero_celsius", "C02-M5": "depends_on_gas", "C02-M6": "minus_273_kelvin"},
}


def _solve(v, p, *, celsius=False, one=False, unchanged=False, inverse=False, change=False, litres=False, flip=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 0 if celsius else K0
    if ask == "both":
        if unchanged:
            return sig(v["Tc"], n)
        if celsius:
            return sig(v["Tc"] * v["fP"] * v["fV"], n)
        f = v["fP"] if one else v["fP"] * v["fV"]
        return sig((v["Tc"] + K0) * f - K0, n)
    if ask in ("charles", "lussac"):
        x1 = v["V1"] if ask == "charles" else v["P1"]
        T1, T2 = v["T1"] + k, v["T2"] + k
        x2 = x1 * T1 / T2 if inverse else x1 * T2 / T1
        return sig(x2 - x1 if change else x2, n)
    if ask == "moles":
        P, V, T = v["P"], v["VL"] if litres else v["VL"] / 1000, v["Tc"] + k
        if flip:
            return sig(BOOK["R"] * T / (P * V), n)
        return sig(P * V / (BOOK["R"] * T), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


def _n(mid):
    def model(v, p):
        if mid not in NAMED.get(p["ask"], {}):
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C02-M1": _m(("both", "charles", "lussac", "moles"), celsius=True),  # uses deg C in the gas laws
    "C02-M2": _m(("both",), one=True),  # applies only one of the two changes
    "C02-M3": _m(("both",), unchanged=True),  # thinks halving P and V cancel out
    "C02-M4": _n("C02-M4"),  # zero volume at 0 deg C
    "C02-M5": _n("C02-M5"),  # each gas has its own zero
    "C02-M6": _n("C02-M6"),  # -273.15 K
    "C02-M7": _m(("charles", "lussac"), inverse=True),  # takes V (or P) inversely proportional to T
    "C02-M8": _m(("charles", "lussac"), change=True),  # gives the change instead of the new value
    "C02-M9": _m(("moles",), litres=True),  # leaves the volume in litres
    "C02-M10": _m(("moles",), flip=True),  # inverts PV = nRT
}
