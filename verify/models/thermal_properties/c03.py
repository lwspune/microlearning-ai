"""C03 Linear expansion: answer models (the key, and one per misconception).

params["ask"]:
  "alpha": coefficient of linear expansion, per deg C, of a rod l1 -> l2 (cm) when heated T1 -> T2 (inputs l1, l2, T1, T2);
  "heat":  temperature, deg C, to which a ring of diameter l1 (at T1) must be heated to reach l2 (inputs l1, l2, a, T1);
  "gap":   the expansion, in mm, of a rail l metres long heated T1 -> T2 (inputs l, a, T1, T2);
  "final": the length, in m, of a tape l metres long at T1 when at T2 (inputs l, a, T1, T2);
  "hole":  what happens to a hole in a heated plate (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "hole": {"key": "hole_grows", "C03-M9": "hole_shrinks", "C03-M10": "hole_same", "C03-M11": "hole_grows_less"},
}


def _solve(v, p, *, at_T2=False, no_l=False, cm_m=False, rise=False, use_l2=False, plus273=False, half=False,
           increase=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "alpha":
        dl, l1 = v["l2"] - v["l1"], v["l1"] / 100 if cm_m else v["l1"]
        dT = v["T2"] if at_T2 else v["T2"] - v["T1"]
        return sig(dl / dT if no_l else dl / (l1 * dT), n)
    if ask == "heat":
        dl = v["l2"] - v["l1"]
        base = 1 if no_l else (v["l2"] if use_l2 else v["l1"])
        dT = dl / (v["a"] * base)
        return sig(dT if rise else v["T1"] + dT, n)
    if ask in ("gap", "final"):
        dT = v["T2"] if at_T2 else v["T2"] - v["T1"]
        if plus273:
            dT += 273
        dl = v["l"] * v["a"] * dT
        if ask == "gap":
            return sig(dl * 1000 / (2 if half else 1), n)
        return sig(dl if increase else v["l"] + dl, n)
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
    "C03-M1": _m(("alpha", "gap", "final"), at_T2=True),  # uses the final temperature for the rise
    "C03-M2": _m(("alpha", "heat"), no_l=True),  # forgets to divide by the length
    "C03-M3": _m(("alpha",), cm_m=True),  # mixes cm and m
    "C03-M4": _m(("heat",), rise=True),  # gives the rise, not the final temperature
    "C03-M5": _m(("heat",), use_l2=True),  # uses the final length as l
    "C03-M6": _m(("gap", "final"), plus273=True),  # adds 273 to a temperature difference
    "C03-M7": _m(("gap",), half=True),  # halves the expansion
    "C03-M8": _m(("final",), increase=True),  # gives the increase, not the new length
    "C03-M9": _n("C03-M9"),
    "C03-M10": _n("C03-M10"),
    "C03-M11": _n("C03-M11"),
}
