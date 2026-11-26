"""C07 Osmosis and osmotic pressure: answer models (the key, and one per misconception).

pi = M R T = n2 R T / V, with R = 0.0821 L atm / (K mol) (or the question's R), T in K, V in L.
params["ask"]:
  "M2_mmHg": molar mass from pi in mm Hg (inputs W2, V_mL, P_mmHg, T);
  "M2_SI":   molar mass with R = 8.314 J/(K mol) given (inputs W2, V_dm3, P_atm, T);
  "pct_isotonic": mass per cent (w/v) of glucose isotonic with a given pi (inputs P_atm, T, M2);
  "pi_atm":  pi in atm of a solution of given molarity (inputs C, M2, T);
  "pi_mmHg": pi in mm Hg from a mass of solute in a volume (inputs W2, M2, V_mL, T);
  "conc_unit": the concentration used for pi (named).
T is in kelvin; t = T - 273 is the Celsius figure the question shows (25, 27, 37, 13 °C).
"""
from sympy import Integer, Symbol

from chemistry import BOOK, sig

R = BOOK["R_atm"]
R_SI = BOOK["R"]
ATM_PA = Integer(101325)
NAMED = {"conc_unit": {"key": "molarity", "C07-M1": "mass_percent", "C07-M2": "molality", "C07-M3": "mole_fraction"}}


def _T(v, rule):
    return v["T"] - 273 if rule == "celsius" else v["T"]


def _solve(v, p, rule=None):
    ask = p["ask"]
    T = _T(v, rule)
    r = R_SI if rule == "R_SI" else R
    if ask == "M2_mmHg":
        P = v["P_mmHg"] if rule == "no_convert" else v["P_mmHg"] / 760
        V = v["V_mL"] if rule == "volume" else v["V_mL"] / 1000
        return sig(v["W2"] * r * T / (P * V))
    if ask == "M2_SI":
        W2, V, P = v["W2"], v["V_dm3"], v["P_atm"]
        if rule == "R_SI":  # 8.314 with atm and litres
            return sig(W2 * R_SI * T / (P * V))
        Vm3 = V if rule == "volume" else V / 1000  # dm3 taken as m3
        M_kg = (W2 / 1000) * R_SI * T / (P * ATM_PA * Vm3)
        return sig(M_kg * 1000)
    if ask == "pct_isotonic":
        C = v["P_atm"] / (r * T)
        g_per_L = C * v["M2"]
        return sig(g_per_L if rule == "g_per_L" else g_per_L / 10)
    if ask == "pi_atm":
        C = v["C"] * v["M2"] if rule == "mass_conc" else v["C"]
        return sig(C * r * T)
    if ask == "pi_mmHg":
        V = v["V_mL"] if rule == "volume" else v["V_mL"] / 1000
        pi = v["W2"] / v["M2"] / V * r * T
        return sig(pi if rule == "no_convert" else pi * 760)
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
    "C07-M1": _m("C07-M1", ("pi_atm",), "mass_conc"),  # mass of solute per litre where moles belong
    "C07-M2": _m("C07-M2"),  # concentration as molality
    "C07-M3": _m("C07-M3"),  # concentration as mole fraction
    "C07-M4": _m("C07-M4", ("M2_mmHg", "M2_SI", "pct_isotonic", "pi_atm", "pi_mmHg"), "celsius"),  # T in °C
    "C07-M5": _m("C07-M5", ("M2_mmHg", "M2_SI", "pi_mmHg"), "volume"),  # mL (or dm3) where L (or m3) belong
    "C07-M6": _m("C07-M6", ("M2_mmHg", "pi_mmHg"), "no_convert"),  # mm Hg and atm not converted
    "C07-M7": _m("C07-M7", ("M2_SI", "pct_isotonic", "pi_atm"), "R_SI"),  # R = 8.314 with atm and litres
    "C07-M8": _m("C07-M8", ("pct_isotonic",), "g_per_L"),  # grams per litre given as the per cent
}
