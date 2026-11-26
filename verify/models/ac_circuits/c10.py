"""C10 LC oscillations: answer models (the key, and one per misconception).

f = 1 / (2 pi sqrt(L C)); energy (1/2) C V^2 = (1/2) L i0^2, so i0 = V sqrt(C / L) and L = C V^2 / i0^2. params["ask"]:
  "C_pF":  the capacitance for a given frequency, in pF (inputs L_uH, f);
  "f":     the frequency of oscillation, in Hz (inputs L_mH, C_uF);
  "i0":    the maximum current, in A (inputs C_uF, V, L_mH);
  "L":     the inductance that gives a maximum current, in H (inputs C_uF, V, i0);
  "X":     the net reactance of the LC circuit at its natural frequency (named);
  "when":  when the energy is first all magnetic (named).
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import sig

NAMED = {
    "X": {"key": "zero_X", "C10-M7": "twice_XL", "C10-M8": "infinite_X", "C10-M9": "equals_XL"},
    "when": {"key": "quarter_T", "C10-M10": "half_T", "C10-M11": "full_T", "C10-M12": "never_all"},
}
micro, milli, pico = Rational(1, 10**6), Rational(1, 10**3), Rational(1, 10**12)


def _f(L, C, no_2pi=False, no_sqrt=False):
    s = L * C if no_sqrt else sqrt(L * C)
    return 1 / s if no_2pi else 1 / (2 * pi * s)


def _solve(v, p, *, no_2pi=False, no_sqrt=False, prefix=False, no_sq=False, half=False, inv=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "C_pF":
        L = v["L_uH"] * (milli if prefix else micro)
        w = v["f"] if no_2pi else 2 * pi * v["f"]
        C = 1 / (w * L) if no_sqrt else 1 / (w**2 * L)  # no_sqrt: from f = 1 / (2 pi L C)
        return sig(C / pico, n)
    if ask == "f":
        L = v["L_mH"] * (1 if prefix else milli)
        return sig(_f(L, v["C_uF"] * micro, no_2pi, no_sqrt), n)
    if ask == "i0":
        C, V, L = v["C_uF"] * micro, v["V"], v["L_mH"] * (1 if prefix else milli)
        if inv:
            return sig(V * sqrt(L / C), n)
        if no_sq:
            return sig(V * C / L, n)
        return sig(V * sqrt(C / (2 * L)) if half else V * sqrt(C / L), n)
    if ask == "L":
        C, V, i0 = v["C_uF"] * (1 if prefix else micro), v["V"], v["i0"]
        if no_sq:
            return sig(C * V / i0, n)
        return sig(C * V**2 / (2 * i0**2) if half else C * V**2 / i0**2, n)
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
    "C10-M1": _m("C10-M1", ("C_pF", "f"), no_2pi=True),  # takes 1/sqrt(LC) as f, leaving out 2 pi
    "C10-M2": _m("C10-M2", ("C_pF", "f"), no_sqrt=True),  # leaves out the square root
    "C10-M3": _m("C10-M3", ("C_pF", "f", "i0", "L"), prefix=True),  # gets a unit prefix wrong
    "C10-M4": _m("C10-M4", ("i0", "L"), no_sq=True),  # leaves out the squares in the energy balance
    "C10-M5": _m("C10-M5", ("i0", "L"), half=True),  # keeps the 1/2 on one side only
    "C10-M6": _m("C10-M6", ("i0",), inv=True),  # turns C / L upside down
    "C10-M7": _m("C10-M7"),  # adds the reactances
    "C10-M8": _m("C10-M8"),  # takes the parallel circuit's infinite impedance
    "C10-M9": _m("C10-M9"),  # leaves out the capacitor's reactance
    "C10-M10": _m("C10-M10"),  # half a period
    "C10-M11": _m("C10-M11"),  # a full period
    "C10-M12": _m("C10-M12"),  # thinks the energy is never all magnetic
}
