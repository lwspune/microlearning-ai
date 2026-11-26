"""C08 Internal resistance of a cell: answer models (the key, and one per misconception).

On open circuit the cell balances at l1 (its emf E = K l1). Shunted by R it sends I = E/(R + r), and its terminal
p.d. V = IR balances at l2 = K V/K. So E/V = l1/l2 = (R + r)/R and r = R (l1 - l2)/l2. params["ask"]:
  "r":  r, in ohm, from R, l1 and either l2 or dl (the reduction in length, l2 = l1 - dl);
  "l2": the shunted balancing length, in cm, from l1, R and r;
  "f16", "f25", "factor": named answers.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "f16": {"key": "l1_l2_RplusR", "C08-M4": "l1_l2_R_over_Rplus", "C08-M1": "l1_l2_R_over_Rminus", "C08-M5": "l1_l2_Rminus"},
    "f25": {"key": "E_over_V_minus1", "C08-M4": "V_over_E_minus1", "C08-M5": "one_minus_E_over_V", "C08-M1": "one_minus_V_over_E"},
    "factor": {"key": "larger_area", "C08-M7": "smaller_R", "C08-M8": "cooler", "C08-M9": "farther_apart"},
}


def _solve(v, p, how="key"):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "r":
        R, l1 = v["R"], v["l1"]
        l2 = v["l2"] if "l2" in v else l1 - v["dl"]
        if how == "reduction":
            if "dl" not in v:
                raise ValueError("no reduction given")
            l2 = v["dl"]
        f = {"key": (l1 - l2) / l2, "reduction": (l1 - l2) / l2, "by_l1": (l1 - l2) / l1,
             "no_minus": l1 / l2, "flip": l2 / (l1 - l2)}[how]
        return sig(R * f, n)
    if ask == "l2":
        l1, R, r = v["l1"], v["R"], v["r"]
        f = {"key": R / (R + r), "same": 1, "swap": (R + r) / R, "by_l1": (R - r) / R}[how]
        return sig(l1 * f, n)
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
    "C08-M1": _m("C08-M1", ("r", "l2"), "by_l1"),  # divides by l1 instead of l2
    "C08-M2": _m("C08-M2", ("r",), "no_minus"),  # drops the "- 1": r = R l1/l2
    "C08-M3": _m("C08-M3", ("r",), "flip"),  # inverts the fraction: r = R l2/(l1 - l2)
    "C08-M4": _m("C08-M4", ("l2",), "swap"),  # takes the shunted length as the emf's
    "C08-M5": _m("C08-M5"),  # writes E = I(R - r)
    "C08-M6": _m("C08-M6", ("r",), "reduction"),  # takes the reduction in length as l2
    "C08-M7": _m("C08-M7"),  # thinks r changes with the resistance joined across the cell
    "C08-M8": _m("C08-M8"),  # thinks r rises with temperature, like a metal wire
    "C08-M9": _m("C08-M9"),  # thinks electrodes farther apart lower r
    "C08-M10": _m("C08-M10", ("l2",), "same"),  # thinks shunting does not move the balance point
}
