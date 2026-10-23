"""C05 Isobaric and isochoric processes: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "W_double":  work, in J, done by n moles of ideal gas at pressure p and T_C °C expanding isobarically to `ratio` times
               its volume (inputs n, T_C, p, ratio);
  "Q_p":       heat, in J, to warm n moles from T1 to T2 K at constant pressure (inputs n, T1, T2; params["atoms"]);
  "dU_v":      change in internal energy, in J, of n moles warmed from T1 to T2 K at constant volume (inputs n, T1, T2; params["atoms"]);
  "isochoric": what the first law gives at constant volume (a named answer);
  "name":      the name of a process at constant pressure (a named answer).

The key uses W = p ΔV with pV = nRT for the volumes, and the first law with C_V = (f/2) R and C_P = C_V + R
(f = 3 monatomic, 5 diatomic): Q = n C_P ΔT at constant pressure, ΔU = n C_V ΔT, and W = 0 at constant volume.
"""
from sympy import Rational, Symbol, log

from physics import BOOK, sig

R = BOOK["R"]
DOF = {"mono": 3, "di": 5}

NAMED = {
    "isochoric": {"key": "W0_dUQ", "C05-M5": "dU0_WQ", "C05-M6": "Q0_dUminusW", "C05-M7": "W_Vdp"},
    "name": {"key": "isobaric", "C05-M5": "isothermal", "C05-M6": "adiabatic", "C05-M10": "isochoric"},
}


def _CV(p, f=None):
    return Rational(f or DOF[p["atoms"]], 2) * R


def _solve(v, p, *, celsius=False, final_V=False, isothermal=False, swap=False, only_W=False, diatomic=False, no_dU=False):
    ask, n = p["ask"], p.get("sf", 4)
    if ask == "W_double":
        T = v["T_C"] + (0 if celsius else 273)
        V1 = v["n"] * R * T / v["p"]  # pV = nRT
        V2 = v["ratio"] * V1
        if isothermal:
            return sig(v["n"] * R * T * log(v["ratio"]), n)
        return sig(v["p"] * (V2 if final_V else V2 - V1), n)
    dT = v["T2"] - v["T1"]
    if only_W:
        return sig(v["n"] * R * dT, n)
    CV = _CV(p, 5 if diatomic else None)
    CP = CV + R
    if ask == "Q_p":
        return sig(v["n"] * (CV if swap else CP) * dT, n)
    if ask == "dU_v":
        if no_dU:
            return 0
        return sig(v["n"] * (CP if swap else CV) * dT, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(p, mid):
    if mid not in NAMED.get(p["ask"], {}):
        raise ValueError("does not apply to this item")
    return Symbol(NAMED[p["ask"]][mid])


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses the Celsius temperature."""
    _only(p, "W_double")
    return _solve(v, p, celsius=True)


def m2(v, p):
    """Uses the final volume instead of the change: W = p V_f."""
    _only(p, "W_double")
    return _solve(v, p, final_V=True)


def m3(v, p):
    """Uses the isothermal formula, W = nRT ln(V2/V1)."""
    _only(p, "W_double")
    return _solve(v, p, isothermal=True)


def m4(v, p):
    """Mixes up C_P and C_V."""
    _only(p, "Q_p", "dU_v")
    return _solve(v, p, swap=True)


def m5(v, p):
    """Mixes the process up with an isothermal one, taking ΔU = 0."""
    if p["ask"] in NAMED:
        return _named(p, "C05-M5")
    _only(p, "dU_v")
    return _solve(v, p, no_dU=True)


def m6(v, p):
    """Mixes the process up with an adiabatic one, taking Q = 0."""
    return _named(p, "C05-M6")


def m7(v, p):
    """Thinks a pressure change at constant volume does work."""
    return _named(p, "C05-M7")


def m8(v, p):
    """Counts only the work, nRΔT."""
    _only(p, "Q_p", "dU_v")
    return _solve(v, p, only_W=True)


def m9(v, p):
    """Uses a diatomic gas's C_P for a monatomic gas."""
    _only(p, "Q_p")
    if p["atoms"] != "mono":
        raise ValueError("the gas is already diatomic")
    return _solve(v, p, diatomic=True)


def m10(v, p):
    """Mixes up isobaric and isochoric."""
    return _named(p, "C05-M10")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6,
          "C05-M7": m7, "C05-M8": m8, "C05-M9": m9, "C05-M10": m10}
