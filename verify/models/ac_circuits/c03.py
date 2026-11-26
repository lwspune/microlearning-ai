"""C03 A resistor on AC: answer models (the key, and one per misconception).

e = e0 sin(w t) across a pure resistor R drives i = (e0 / R) sin(w t), in phase with e. params["ask"] picks the quantity:
  "irms": the rms current from the peak e.m.f. (inputs e0, R), in A;
  "inst": the current at the instant w t = th (inputs e0, R, th), in A;
  "freq": the rms current after the frequency changes from f1 to f2 at the same rms voltage (inputs erms, R, f1, f2), in A;
  "facts", "eqn": named answers.

The key works from Ohm's law at every instant: R does not depend on frequency, and i peaks with e.
"""
from sympy import Symbol, pi, sin, sqrt

from physics import sig

NAMED = {
    "facts": {"key": "in_phase_any_f", "C03-M2": "lags_q", "C03-M5": "rises_with_f", "C03-M6": "steady_rms"},
    "eqn": {"key": "eqn_in_phase", "C03-M2": "eqn_lag", "C03-M7": "eqn_lead", "C03-M3": "eqn_rms_amp"},
}


def _solve(v, p, *, peak_as_rms=False, extra_root2=False, times_root2=False, r_with_f=False, lag=False, lead=False, steady=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "irms":
        e0, R = v["e0"], v["R"]
        if peak_as_rms:
            return sig(e0 / R, n)
        if extra_root2:
            return sig(e0 / 2 / R, n)  # divides by sqrt(2) twice
        if times_root2:
            return sig(sqrt(2) * e0 / R, n)
        return sig(e0 / sqrt(2) / R, n)
    if ask == "inst":
        i0, th = v["e0"] / v["R"], v["th"]
        if steady:
            return sig(i0 / sqrt(2), n)  # a steady current at the rms value
        if lag:
            th = th - pi / 2
        if lead:
            th = th + pi / 2
        return sig(i0 * sin(th), n)
    if ask == "freq":
        erms, R = v["erms"], v["R"]
        if r_with_f:
            R = R * v["f2"] / v["f1"]  # takes R to grow in proportion to f
        if extra_root2:
            erms = erms / sqrt(2)  # converts a value that is already rms
        if times_root2:
            erms = erms * sqrt(2)
        return sig(erms / R, n)
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
    "C03-M1": _m("C03-M1", ("irms",), peak_as_rms=True),  # uses the peak voltage as the rms voltage
    "C03-M2": _m("C03-M2", ("inst",), lag=True),  # takes i to lag e by pi/2
    "C03-M3": _m("C03-M3", ("irms", "freq"), extra_root2=True),  # divides by sqrt(2) where no conversion is needed
    "C03-M4": _m("C03-M4", ("irms", "freq"), times_root2=True),  # multiplies by sqrt(2) instead of dividing
    "C03-M5": _m("C03-M5", ("freq",), r_with_f=True),  # thinks the resistor's opposition grows with frequency
    "C03-M6": _m("C03-M6", ("inst",), steady=True),  # treats the current as steady at its rms value
    "C03-M7": _m("C03-M7", ("inst",), lead=True),  # takes i to lead e by pi/2
}
