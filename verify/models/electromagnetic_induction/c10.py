"""C10 Energy stored in an inductor: answer models (the key, and one per misconception).

U = (1/2) L I^2, stored in the magnetic field at u = B^2 / (2 mu0) per unit volume. params["ask"]:
  "U":     energy, in J, of L_mH carrying I (inputs L_mH, I);
  "I":     the current, in A, at which L_mH stores U J (inputs L_mH, U);
  "u":     energy density, in J/m^3, in a field B (input B);
  "dU":    extra energy, in J, when the current in L (H) rises from I1 to I2 (inputs L, I1, I2);
  "where": where the energy is stored (named).
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

mu0 = BOOK["mu0"]
NAMED = {"where": {"key": "mag_field", "C10-M6": "heat", "C10-M7": "e_field", "C10-M8": "nowhere"}}
half, milli = Rational(1, 2), Rational(1, 1000)


def _solve(v, p, *, no_half=False, no_sq=False, mH_as_H=False, B_lin=False, times_mu0=False, none=False, dI_sq=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 1 if no_half else half
    if ask == "U":
        if none:
            return 0
        L = v["L_mH"] * (1 if mH_as_H else milli)
        return sig(k * L * (v["I"] if no_sq else v["I"] ** 2), n)
    if ask == "I":
        L = v["L_mH"] * (1 if mH_as_H else milli)
        x = v["U"] / (k * L)
        return sig(x if no_sq else sqrt(x), n)
    if ask == "u":
        B = v["B"]
        if times_mu0:
            return sig(k * B**2 * mu0, n)
        return sig(k * (B if B_lin else B**2) / mu0, n)
    if ask == "dU":
        I1, I2 = v["I1"], v["I2"]
        if dI_sq:
            return sig(k * v["L"] * (I2 - I1) ** 2, n)
        if no_sq:
            return sig(k * v["L"] * (I2 - I1), n)
        return sig(k * v["L"] * (I2**2 - I1**2), n)
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
    "C10-M1": _m("C10-M1", ("U", "I", "u", "dU"), no_half=True),  # forgets the 1/2
    "C10-M2": _m("C10-M2", ("I", "dU"), no_sq=True),  # forgets to square the current
    "C10-M3": _m("C10-M3", ("U", "I"), mH_as_H=True),  # reads mH as H
    "C10-M4": _m("C10-M4", ("u",), B_lin=True),  # forgets to square B
    "C10-M5": _m("C10-M5", ("u",), times_mu0=True),  # multiplies by mu0
    "C10-M6": _m("C10-M6"),  # thinks it is heat in the wire
    "C10-M7": _m("C10-M7"),  # thinks it is in an electric field
    "C10-M8": _m("C10-M8", ("U",), none=True),  # thinks a steady current stores no energy
    "C10-M9": _m("C10-M9", ("dU",), dI_sq=True),  # squares the change in current
}
