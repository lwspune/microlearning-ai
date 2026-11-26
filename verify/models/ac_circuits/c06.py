"""C06 The series LCR circuit: answer models (the key, and one per misconception).

Z = sqrt(R^2 + (X_L - X_C)^2), tan phi = (X_L - X_C) / R; X_L = omega L, X_C = 1 / (omega C). params["ask"]:
  "Zcoil": the impedance of a coil with resistance, in ohm (inputs L, R, f);
  "Z":     the impedance of a series LCR circuit, in ohm (inputs L, C_uF, R, w);
  "irms":  the rms current in a series LCR circuit, in A (inputs L, C_uF, R, f, erms);
  "phi":   the phase difference between voltage and current, in degrees (inputs R, XL, XC);
  "C45":   the capacitance that makes the current lead the voltage by 45 degrees (symbols f, L, R);
  "react": what is true of a reactance (named).
"""
from sympy import Rational, Symbol, atan, pi, sqrt

from physics import sig

NAMED = {
    "react": {"key": "no_heat", "C06-M10": "heats_up", "C06-M11": "f_indep", "C06-M12": "in_step"},
}
micro = Rational(1, 10**6)
f, L, R = Symbol("f"), Symbol("L"), Symbol("R")


def _deg(x, n):
    return sig(atan(x) * 180 / pi, n)


def _solve(v, p, *, add_X=False, add_R=False, no_R=False, over_R=False, inv=False, over_Z=False, f_for_w=False,
           flip=False, XC_wC=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "Zcoil":
        X = (v["f"] if f_for_w else 2 * pi * v["f"]) * v["L"]
        if no_R:
            return sig(X, n)
        if add_R:
            return sig(v["R"] + X, n)
        return sig(sqrt(v["R"] ** 2 + X**2), n)
    if ask in ("Z", "irms"):
        w = v["w"] if ask == "Z" else 2 * pi * v["f"]
        XL, XC = w * v["L"], 1 / (w * v["C_uF"] * micro)
        X = XL + XC if add_X else abs(XL - XC)
        if no_R:
            Z = X
        elif add_R:
            Z = v["R"] + X
        elif over_R:
            Z = v["R"]
        else:
            Z = sqrt(v["R"] ** 2 + X**2)
        return sig(Z if ask == "Z" else v["erms"] / Z, n)
    if ask == "phi":
        R_, XL, XC = v["R"], v["XL"], v["XC"]
        X = XL + XC if add_X else XL - XC
        if inv:
            return _deg(R_ / X, n)
        if over_Z:
            return _deg(X / sqrt(R_**2 + X**2), n)
        return _deg(X / R_, n)
    if ask == "C45":
        XL = 2 * pi * f * L
        if add_X:  # tan 45 = (X_L + X_C) / R
            XC = R - XL
        elif flip:  # takes the current as lagging: X_L - X_C = R
            XC = XL - R
        else:  # current leads: X_C - X_L = R
            XC = XL + R
        return XC / (2 * pi * f) if XC_wC else 1 / (2 * pi * f * XC)
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
    "C06-M1": _m("C06-M1", ("Z", "irms", "phi", "C45"), add_X=True),  # adds X_L and X_C
    "C06-M2": _m("C06-M2", ("Zcoil", "Z", "irms"), add_R=True),  # adds R and the reactance as plain numbers
    "C06-M3": _m("C06-M3", ("Zcoil", "Z"), no_R=True),  # takes the reactance alone as the impedance
    "C06-M4": _m("C06-M4", ("phi",), inv=True),  # turns tan phi upside down
    "C06-M5": _m("C06-M5", ("phi",), over_Z=True),  # divides the net reactance by Z, not R
    "C06-M6": _m("C06-M6", ("C45",), flip=True),  # takes a leading current to mean X_L > X_C
    "C06-M7": _m("C06-M7", ("irms",), over_R=True),  # divides the voltage by R, not Z
    "C06-M8": _m("C06-M8", ("Zcoil",), f_for_w=True),  # uses f for omega
    "C06-M9": _m("C06-M9", ("C45",), XC_wC=True),  # takes X_C = omega C
    "C06-M10": _m("C06-M10"),  # thinks a reactance turns energy into heat
    "C06-M11": _m("C06-M11"),  # thinks a reactance does not depend on f
    "C06-M12": _m("C06-M12"),  # thinks the current is in phase with the voltage across a reactance
}
