"""C09 Power in an AC circuit: answer models (the key, and one per misconception).

P = e_rms i_rms cos(phi) = (e0 i0 / 2) cos(phi); power factor cos(phi) = R / Z. params["ask"]:
  "Pres":  the power taken by a resistor on an rms supply, in W (inputs R, erms);
  "Pphase": the power from e = e0 sin(w t), i = i0 sin(w t + phi), in W (inputs e0, i0, phi);
  "pf":    the power factor of a series LR circuit (inputs R, L, w);
  "Plcr":  the power taken by a series LCR circuit, in W (inputs e0, R, XL, XC);
  "Cpf":   the capacitance that gives an RC circuit a power factor, in microfarad (inputs R, pf, f);
  "capP":  what a pure capacitor does with energy over a cycle (named).
"""
from sympy import Rational, Symbol, acos, cos, pi, sin, sqrt

from physics import sig

NAMED = {
    "capP": {"key": "returns_it", "C09-M8": "heats_it", "C09-M9": "no_current", "C09-M10": "piles_up"},
}
micro = Rational(1, 10**6)


def _solve(v, p, *, rms_as_peak=False, peak_full=False, zero=False, use_sin=False, no_pf=False, R_over_X=False,
           pf_one=False, XC_is_Z=False, f_for_w=False):
    ask, n = p["ask"], p.get("sf", 3)
    if zero:
        return 0
    if ask == "Pres":
        e = v["erms"] / sqrt(2) if rms_as_peak else v["erms"]
        if peak_full:
            e = v["erms"] * sqrt(2)  # converts to peak values but keeps P = e i
        return sig(e**2 / v["R"], n)
    if ask in ("Pphase", "Plcr"):
        if ask == "Pphase":
            e0, i0, phi = v["e0"], v["i0"], v["phi"]
            c, s = cos(phi), sin(phi)
        else:
            e0, R, X = v["e0"], v["R"], v["XL"] - v["XC"]
            Z = sqrt(R**2 + X**2)
            i0 = e0 / Z
            c, s = R / Z, abs(X) / Z
        pf = 1 if no_pf else (s if use_sin else c)
        return sig((e0 * i0 if peak_full else e0 * i0 / 2) * pf, n)
    if ask == "pf":
        R, X = v["R"], v["w"] * v["L"]
        if pf_one:
            return 1
        if R_over_X:
            return sig(R / X, n)
        Z = sqrt(R**2 + X**2)
        return sig(X / Z if use_sin else R / Z, n)
    if ask == "Cpf":
        R, pf = v["R"], v["pf"]
        if use_sin:  # takes the power factor as X / Z
            X = R * pf / sqrt(1 - pf**2)
        elif XC_is_Z:
            X = R / pf
        else:
            X = R * sqrt(1 - pf**2) / pf
        w = v["f"] if f_for_w else 2 * pi * v["f"]
        return sig(1 / (w * X) / micro, n)
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
    "C09-M1": _m("C09-M1", ("Pres",), rms_as_peak=True),  # takes the rms voltage as the peak
    "C09-M2": _m("C09-M2", ("Pres", "Pphase", "Plcr"), peak_full=True),  # uses peak values without the 1/2
    "C09-M3": _m("C09-M3", ("Pres", "Pphase"), zero=True),  # thinks the average power over a cycle is zero
    "C09-M4": _m("C09-M4", ("Pphase", "pf", "Plcr", "Cpf"), use_sin=True),  # uses sin(phi) for the power factor
    "C09-M5": _m("C09-M5", ("Pphase", "Plcr"), no_pf=True),  # leaves out the power factor
    "C09-M6": _m("C09-M6", ("pf",), R_over_X=True),  # takes the power factor as R / X
    "C09-M7": _m("C09-M7", ("pf",), pf_one=True),  # ignores the inductor: power factor 1
    "C09-M8": _m("C09-M8"),  # thinks a capacitor turns energy into heat
    "C09-M9": _m("C09-M9"),  # thinks no current flows
    "C09-M10": _m("C09-M10"),  # thinks the stored energy keeps growing
    "C09-M11": _m("C09-M11", ("Cpf",), XC_is_Z=True),  # takes X_C = Z, leaving out R
    "C09-M12": _m("C09-M12", ("Cpf",), f_for_w=True),  # uses f for omega
}
