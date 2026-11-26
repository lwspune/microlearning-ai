"""C04 Area and volume expansion: answer models (the key, and one per misconception).

params["ask"]:
  "area":     area, cm^2, of a plate A1 at T1 heated to T2 (inputs A1, b, T1, T2);
  "overflow": liquid, m^3, that overflows from a full flask of volume V heated T1 -> T2 (inputs V, gl, gg, T1, T2);
  "brass":    coefficient of linear expansion from a sheet of area A1 at T1 and A2 at T2 (inputs A1, A2, T1, T2);
  "ratio":    alpha : beta : gamma (named);
  "water":    how water's volume changes as it cools from 10 to 0 deg C (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "ratio": {"key": "ratio_123", "C04-M10": "ratio_149", "C04-M11": "ratio_111", "C04-M12": "ratio_132"},
    "water": {"key": "down_then_up", "C04-M13": "down_all_way", "C04-M14": "up_all_way", "C04-M15": "up_then_down"},
}


def _solve(v, p, *, double=False, at_T2=False, increase=False, liquid=False, glass=False, triple=False,
           no_half=False, third=False, plus273=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "area":
        dT = v["T2"] if at_T2 else v["T2"] - v["T1"]
        dA = v["A1"] * v["b"] * dT * (2 if double else 1)
        return sig(dA if increase else v["A1"] + dA, n)
    if ask == "overflow":
        dT = v["T2"] - v["T1"]
        g = v["gl"] if liquid else (v["gg"] if glass else v["gl"] - v["gg"])
        return sig(v["V"] * g * dT * (3 if triple else 1), n)
    if ask == "brass":
        dT = v["T2"] - v["T1"] + (273 if plus273 else 0)
        beta = (v["A2"] - v["A1"]) / (v["A1"] * dT)
        return sig(beta if no_half else beta / (3 if third else 2), n)
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
    "C04-M1": _m(("area",), double=True),  # doubles a beta that is already the area coefficient
    "C04-M2": _m(("area",), at_T2=True),  # uses the final temperature for the rise
    "C04-M3": _m(("area",), increase=True),  # gives the increase, not the new area
    "C04-M4": _m(("overflow",), liquid=True),  # ignores the flask's expansion
    "C04-M5": _m(("overflow",), glass=True),  # gives the flask's expansion
    "C04-M6": _m(("overflow",), triple=True),  # triples a gamma that is already the volume coefficient
    "C04-M7": _m(("brass",), no_half=True),  # gives beta as alpha
    "C04-M8": _m(("brass",), third=True),  # divides beta by 3
    "C04-M9": _m(("brass",), plus273=True),  # adds 273 to a temperature difference
    "C04-M10": _n("C04-M10"),
    "C04-M11": _n("C04-M11"),
    "C04-M12": _n("C04-M12"),
    "C04-M13": _n("C04-M13"),
    "C04-M14": _n("C04-M14"),
    "C04-M15": _n("C04-M15"),
}
