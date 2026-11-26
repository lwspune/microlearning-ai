"""C08 Parallel resonance: answer models (the key, and one per misconception).

L and C in parallel resonate at f0 = 1 / (2 pi sqrt(L C)), where X_L = X_C; the branch currents are equal and
opposite, so (ideal L and C) the line current is zero and the impedance greatest. params["ask"]:
  "f0":    the resonant frequency, in Hz (inputs L, C_uF);
  "XL0":   the reactance of L at resonance, in ohm (inputs L, C_uF);
  "line":  the line current, in A, at resonance on V rms (inputs L, C_uF, V);
  "state": what holds at parallel resonance (named);
  "cond":  the condition for resonance (named).
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import sig

NAMED = {
    "state": {"key": "Z_max", "C08-M4": "Z_min", "C08-M5": "no_branch", "C08-M6": "leads"},
    "cond": {"key": "XL_eq_XC", "C08-M7": "XL_eq_R", "C08-M8": "XC_zero", "C08-M9": "L_eq_C"},
}
micro = Rational(1, 10**6)


def _solve(v, p, *, no_2pi=False, no_sqrt=False, uF_as_F=False, add_X=False, zero_X=False, add_I=False, one=False,
           series=False):
    ask, n = p["ask"], p.get("sf", 3)
    L, C = v["L"], v["C_uF"] * (1 if uF_as_F else micro)
    w0 = 1 / sqrt(L * C)
    if ask == "f0":
        if no_sqrt:
            return sig(1 / (2 * pi * L * C), n)
        return sig(w0 if no_2pi else w0 / (2 * pi), n)
    if ask == "XL0":
        if zero_X:
            return 0
        w = 2 * pi * w0 if no_2pi else w0  # no_2pi: takes omega0 as f0, then multiplies by 2 pi again
        X = w * L
        return sig(2 * X if add_X else X, n)
    if ask == "line":
        X = w0 * L
        I = v["V"] / X
        if add_I:
            return sig(2 * I, n)
        if one:
            return sig(I, n)
        if series:
            return sig(v["V"] / (2 * X), n)
        return 0
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
    "C08-M1": _m("C08-M1", ("f0", "XL0"), no_2pi=True),  # mixes up omega0 and f0
    "C08-M2": _m("C08-M2", ("f0",), no_sqrt=True),  # forgets the square root
    "C08-M3": _m("C08-M3", ("f0",), uF_as_F=True),  # reads uF as F
    "C08-M4": _m("C08-M4"),  # confuses parallel with series resonance
    "C08-M5": _m("C08-M5"),  # thinks no current flows in the branches
    "C08-M6": _m("C08-M6"),  # thinks the line current leads
    "C08-M7": _m("C08-M7"),  # takes X_L = R as the condition
    "C08-M8": _m("C08-M8"),  # takes X_C = 0 as the condition
    "C08-M9": _m("C08-M9"),  # takes L = C as the condition
    "C08-M10": _m("C08-M10", ("XL0",), add_X=True),  # adds the two reactances
    "C08-M11": _m("C08-M11", ("XL0",), zero_X=True),  # thinks each reactance vanishes at resonance
    "C08-M12": _m("C08-M12", ("line",), add_I=True),  # adds the branch currents as sizes
    "C08-M13": _m("C08-M13", ("line",), one=True),  # takes one branch's current as the line current
    "C08-M14": _m("C08-M14", ("line",), series=True),  # divides by X_L + X_C, as if in series
}
