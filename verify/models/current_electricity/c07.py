"""C07 Comparing emfs with a potentiometer: answer models (the key, and one per misconception).

With the same potential gradient K for every reading, each balanced emf is K times its balancing length.
Individual method: eps1/eps2 = l1/l2. Combination (sum and difference) method: eps1 + eps2 = K ls and
eps1 - eps2 = K ld, so eps1/eps2 = (ls + ld)/(ls - ld). params["ask"]:
  "ind":  eps1/eps2 from l1 (in m, input l1_m) and l2 (in cm, input l2_cm);
  "comb": eps1/eps2 from ls and ld (same unit);
  "e2":   eps2, in V, from eps1 (the larger) and ls, ld (same unit);
  "rheo", "diff": named answers.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "rheo": {"key": "untouched", "C07-M6": "reset_middle", "C07-M9": "reset_current", "C07-M8": "below_emf"},
    "diff": {"key": "series_opposing", "C07-M7": "parallel", "C07-M4": "weaker_alone", "C07-M10": "series_adding"},
}


def _comb_ratio(ls, ld, how):
    return {"key": (ls + ld) / (ls - ld), "inv": (ls - ld) / (ls + ld), "direct": ls / ld, "alone": (ls - ld) / ld}[how]


def _solve(v, p, how="key"):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "ind":
        l1 = v["l1_m"] if how == "units" else v["l1_m"] * 100  # cm
        l2 = v["l2_cm"]
        if how == "inv":
            return sig(l2 / l1, n)
        if how == "comb":
            return sig((l1 + l2) / (l1 - l2), n)
        return sig(l1 / l2, n)
    if ask == "comb":
        return sig(_comb_ratio(v["ls"], v["ld"], how), n)
    if ask == "e2":
        return sig(v["e1"] / _comb_ratio(v["ls"], v["ld"], how), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), how=None):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, how)
    return model


MODELS = {
    "key": key,
    "C07-M1": _m("C07-M1", ("ind", "comb", "e2"), "inv"),  # inverts the ratio
    "C07-M2": _m("C07-M2", ("comb", "e2"), "direct"),  # takes ls/ld as eps1/eps2
    "C07-M3": _m("C07-M3", ("ind",), "comb"),  # puts individual lengths into the sum-difference formula
    "C07-M4": _m("C07-M4", ("comb", "e2"), "alone"),  # takes the difference length as the weaker cell alone
    "C07-M5": _m("C07-M5", ("ind",), "units"),  # divides a length in m by one in cm
    "C07-M6": _m("C07-M6"),  # resets the rheostat between readings
    "C07-M7": _m("C07-M7"),  # takes the difference mode for a parallel connection
    "C07-M8": _m("C07-M8"),  # thinks the wire's p.d. should be below the emf balanced
    "C07-M9": _m("C07-M9"),  # thinks each cell draws a small current at balance
    "C07-M10": _m("C07-M10"),  # mixes up which joining adds and which opposes
}
