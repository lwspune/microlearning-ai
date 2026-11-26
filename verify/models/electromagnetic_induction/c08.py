"""C08 Self-inductance: answer models (the key, and one per misconception).

N Phi = L I; e = -L dI/dt; long solenoid L = mu0 N^2 A / l = mu0 n^2 l A. params["ask"]:
  "emf":   the size of the emf, in V, when the current goes from I1 to I2 in t s (inputs L_mH, I1, I2, t);
  "L_sol": L of a solenoid, in H (inputs N, l_cm, A_cm2);
  "flux":  the flux through one turn, in Wb (inputs L_mH, I_mA, N);
  "L_rod": L of a winding of n_cm turns per cm over l m on a rod of diameter d_cm (inputs n_cm, l, d_cm);
  "def":   the definition of self-inductance (named).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

mu0 = BOOK["mu0"]
NAMED = {"def": {"key": "NPhi_over_I", "C08-M14": "e_over_I", "C08-M15": "I_over_NPhi", "C08-M16": "NPhi_times_I"}}
milli = Rational(1, 1000)


def _solve(v, p, *, mH_as_H=False, no_t=False, times_t=False, one_I=False, add_I=False, no_sq=False, l_cm=False,
           A_cm2=False, total=False, times_N=False, mA_as_A=False, diam=False, no_pi=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "emf":
        L = v["L_mH"] * (1 if mH_as_H else milli)
        dI = v["I2"] if one_I else (v["I1"] + v["I2"] if add_I else abs(v["I2"] - v["I1"]))
        if no_t:
            return sig(L * dI, n)
        return sig(L * dI * v["t"] if times_t else L * dI / v["t"], n)
    if ask == "L_sol":
        N, l, A = v["N"], v["l_cm"] * (1 if l_cm else Rational(1, 100)), v["A_cm2"] * (1 if A_cm2 else Rational(1, 10**4))
        return sig(mu0 * (N if no_sq else N**2) * A / l, n)
    if ask == "flux":
        LI = v["L_mH"] * milli * v["I_mA"] * (1 if mA_as_A else milli)
        if total:
            return sig(LI, n)
        return sig(LI * v["N"] if times_N else LI / v["N"], n)
    if ask == "L_rod":
        nn = v["n_cm"] * 100
        r = v["d_cm"] / 100 * (1 if diam else Rational(1, 2))
        A = r**2 * (1 if no_pi else pi)
        return sig(mu0 * (nn if no_sq else nn**2) * v["l"] * A, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C08-M1": _m("C08-M1", ("emf",), mH_as_H=True),  # reads mH as H
    "C08-M2": _m("C08-M2", ("emf",), no_t=True),  # forgets to divide by the time
    "C08-M3": _m("C08-M3", ("emf",), times_t=True),  # multiplies by the time
    "C08-M4": _m("C08-M4", ("emf",), one_I=True),  # uses one current, not the change
    "C08-M5": _m("C08-M5", ("emf",), add_I=True),  # adds the two currents
    "C08-M6": _m("C08-M6", ("L_sol", "L_rod"), no_sq=True),  # does not square N (or n)
    "C08-M7": _m("C08-M7", ("L_sol",), l_cm=True),  # leaves the length in cm
    "C08-M8": _m("C08-M8", ("L_sol",), A_cm2=True),  # leaves the area in cm^2
    "C08-M9": _m("C08-M9", ("flux",), total=True),  # gives the whole flux linkage
    "C08-M10": _m("C08-M10", ("flux",), times_N=True),  # multiplies by N
    "C08-M11": _m("C08-M11", ("flux",), mA_as_A=True),  # reads mA as A
    "C08-M12": _m("C08-M12", ("L_rod",), diam=True),  # uses the diameter as the radius
    "C08-M13": _m("C08-M13", ("L_rod",), no_pi=True),  # forgets pi in the area
    "C08-M14": _m("C08-M14"),  # takes L as emf per unit current
    "C08-M15": _m("C08-M15"),  # turns the ratio upside down
    "C08-M16": _m("C08-M16"),  # multiplies flux linkage by current
}
