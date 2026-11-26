"""C05 A capacitor on AC: answer models (the key, and one per misconception).

X_C = 1 / (omega C) = 1 / (2 pi f C); i0 = e0 / X_C = omega C e0; the current leads the emf by pi/2. params["ask"]:
  "XC":     the reactance, in ohm (inputs f, C_uF);
  "irms":   the rms current, in A, on an rms supply (inputs erms, f, C_uF);
  "phase":  how the voltage across a capacitor compares with the current (named);
  "eq":     the equation of the current for e = 250 sin 100 pi t on 2 uF (named);
  "lamp":   a lamp in series with a capacitor when C is increased (named).
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import sig

NAMED = {
    "phase": {"key": "v_lags", "C05-M6": "v_leads", "C05-M7": "half_cycle", "C05-M8": "in_phase"},
    "eq": {"key": "lead", "C05-M6": "lag", "C05-M9": "over_wC", "C05-M10": "no_w"},
    "lamp": {"key": "brighter", "C05-M11": "dimmer", "C05-M12": "unchanged", "C05-M13": "goes_out"},
}
micro = Rational(1, 10**6)


def _solve(v, p, *, wC=False, no_2pi=False, uF_as_F=False, peak=False, times_X=False):
    ask, n = p["ask"], p.get("sf", 3)
    C = v["C_uF"] * (1 if uF_as_F else micro)
    w = v["f"] if no_2pi else 2 * pi * v["f"]
    X = w * C if wC else 1 / (w * C)
    if ask == "XC":
        return sig(X, n)
    if ask == "irms":
        if times_X:
            return sig(v["erms"] * X, n)
        i = v["erms"] / X
        return sig(i * sqrt(2) if peak else i, n)
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
    "C05-M1": _m("C05-M1", ("XC",), wC=True),  # uses 2 pi f C, the inductor's form
    "C05-M2": _m("C05-M2", ("XC", "irms"), no_2pi=True),  # forgets the 2 pi
    "C05-M3": _m("C05-M3", ("XC",), uF_as_F=True),  # reads uF as F
    "C05-M4": _m("C05-M4", ("irms",), peak=True),  # gives the peak current
    "C05-M5": _m("C05-M5", ("irms",), times_X=True),  # multiplies by X_C
    "C05-M6": _m("C05-M6"),  # makes the voltage lead, as in an inductor
    "C05-M7": _m("C05-M7"),  # thinks they are half a cycle apart
    "C05-M8": _m("C05-M8"),  # thinks they are in phase
    "C05-M9": _m("C05-M9"),  # divides e0 by omega C
    "C05-M10": _m("C05-M10"),  # forgets omega: i0 = C e0
    "C05-M11": _m("C05-M11"),  # thinks X_C grows with C
    "C05-M12": _m("C05-M12"),  # thinks a capacitor has no effect on AC
    "C05-M13": _m("C05-M13"),  # thinks a capacitor blocks AC as it blocks DC
}
