"""C12 Gibbs energy and equilibrium constant: answer models (the key, and one per misconception).

Delta G = Delta G0 + 2.303 RT log10 Q; at equilibrium Delta G = 0 and Q = K, so Delta G0 = -2.303 RT log10 K.
R = 8.314 J/(K mol) (BOOK["R"]); T in K (the Celsius figure the stem also shows is T - 273).
params["ask"]:
  "dG0":  Delta G0 in kJ/mol from K (inputs K, T);
  "K":    K from Delta G0 in kJ/mol (inputs dG0, T);
  "dG_Q": Delta G in kJ/mol for CO + 2H2 -> CH3OH from partial pressures (inputs dG0, T, P_CO, P_H2, P_M);
  "relation": what Delta G0 equals (named).
params["sf"]: significant figures (default 3).
"""
from sympy import Float, Integer, Symbol, log

from chemistry import BOOK, sig

R = BOOK["R"]
NAMED = {"relation": {"key": "minus_2303RTlogK", "C12-M1": "minus_RTlogK", "C12-M2": "plus_2303RTlogK",
                      "C12-M6": "zero_at_eq"}}


def _solve(v, p, rule=None):
    ask, n = p["ask"], int(p.get("sf", 3))
    T = v["T"] - 273 if rule == "celsius" else v["T"]
    f = Integer(1) if rule == "no_2303" else Float("2.303")
    s = 1 if rule == "plus" else -1
    if ask == "dG0":
        return sig(s * f * R * T * log(v["K"], 10) / 1000, n)
    if ask == "K":
        G = v["dG0"] if rule == "no_kJ" else v["dG0"] * 1000
        return sig(10 ** (G / (s * f * R * T)), n)
    if ask == "dG_Q":
        Q = v["P_M"] / (v["P_CO"] * v["P_H2"] ** 2)
        if rule == "Q_inverted":
            Q = 1 / Q
        return sig(v["dG0"] + f * R * T * log(Q, 10) / 1000, n)
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
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C12-M1": _m("C12-M1", ("dG0", "K", "dG_Q"), "no_2303"),  # log10 used without the 2.303
    "C12-M2": _m("C12-M2", ("dG0", "K"), "plus"),  # minus sign dropped
    "C12-M3": _m("C12-M3", ("dG0", "K", "dG_Q"), "celsius"),  # Celsius temperature
    "C12-M4": _m("C12-M4", ("K",), "no_kJ"),  # Delta G0 in kJ with R in J
    "C12-M5": _m("C12-M5", ("dG_Q",), "Q_inverted"),  # Q written reactants over products
    "C12-M6": _m("C12-M6"),  # Delta G0 = 0 at equilibrium (confused with Delta G)
}
