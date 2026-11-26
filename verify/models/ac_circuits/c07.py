"""C07 Series resonance and the Q factor: answer models (the key, and one per misconception).

f0 = 1 / (2 pi sqrt(L C)); at f0, X_L = X_C and Z = R; Q = omega0 L / R = (1/R) sqrt(L / C). params["ask"]:
  "f0":    the resonant frequency, in Hz (inputs L, C_uF, f_supply);
  "Z0":    the impedance at resonance, in ohm (inputs L, C_uF, R, f_supply);
  "Q":     the Q factor (inputs L, C_uF, R);
  "state": what holds at series resonance (named);
  "sharp": what a larger Q means (named).
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import sig

NAMED = {
    "state": {"key": "max_in_phase", "C07-M5": "Z_zero", "C07-M10": "lags", "C07-M11": "least_I"},
    "sharp": {"key": "sharper", "C07-M12": "wider", "C07-M13": "higher_f0", "C07-M14": "larger_everywhere"},
}
micro = Rational(1, 10**6)


def _solve(v, p, *, no_2pi=False, no_sqrt=False, supply=False, at_supply=False, zero=False, add_X=False, inv=False,
           Q_no_sqrt=False, use_f=False):
    ask, n = p["ask"], p.get("sf", 3)
    L, C = v["L"], v["C_uF"] * micro
    if ask == "f0":
        if supply:
            return sig(v["f_supply"], n)
        if no_sqrt:
            return sig(1 / (2 * pi * L * C), n)
        return sig(1 / sqrt(L * C) if no_2pi else 1 / (2 * pi * sqrt(L * C)), n)
    if ask == "Z0":
        R = v["R"]
        if zero:
            return 0
        if at_supply:
            w = 2 * pi * v["f_supply"]
            return sig(sqrt(R**2 + (w * L - 1 / (w * C)) ** 2), n)
        if add_X:
            w0 = 1 / sqrt(L * C)
            return sig(sqrt(R**2 + (2 * w0 * L) ** 2), n)
        return sig(R, n)
    if ask == "Q":
        R = v["R"]
        if inv:
            return sig(R * sqrt(C / L), n)
        if Q_no_sqrt:
            return sig(L / (C * R), n)
        if use_f:
            return sig(L / (2 * pi * sqrt(L * C)) / R, n)
        return sig(sqrt(L / C) / R, n)
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
    "C07-M1": _m("C07-M1", ("f0",), no_2pi=True),  # forgets the 2 pi: gives omega0
    "C07-M2": _m("C07-M2", ("f0",), no_sqrt=True),  # forgets the square root
    "C07-M3": _m("C07-M3", ("f0",), supply=True),  # takes the supply frequency as f0
    "C07-M4": _m("C07-M4", ("Z0",), at_supply=True),  # finds Z at the supply frequency
    "C07-M5": _m("C07-M5", ("Z0",), zero=True),  # thinks Z is zero at resonance
    "C07-M6": _m("C07-M6", ("Z0",), add_X=True),  # adds the equal reactances
    "C07-M7": _m("C07-M7", ("Q",), inv=True),  # turns Q upside down
    "C07-M8": _m("C07-M8", ("Q",), Q_no_sqrt=True),  # forgets the square root in Q
    "C07-M9": _m("C07-M9", ("Q",), use_f=True),  # uses f0 for omega0
    "C07-M10": _m("C07-M10"),  # thinks the current lags at resonance
    "C07-M11": _m("C07-M11"),  # thinks the current is least, as in parallel resonance
    "C07-M12": _m("C07-M12"),  # thinks a larger Q widens the peak
    "C07-M13": _m("C07-M13"),  # thinks a larger Q raises f0
    "C07-M14": _m("C07-M14"),  # thinks a larger Q raises the current at every frequency
}
