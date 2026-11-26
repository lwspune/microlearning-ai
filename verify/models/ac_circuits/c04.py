"""C04 An inductor on AC: answer models (the key, and one per misconception).

X_L = omega L = 2 pi f L; i0 = e0 / X_L; the current lags the emf by pi/2; rms = peak / sqrt 2. params["ask"]:
  "i0":    the peak current, in A (inputs e0, f, L_mH);
  "erms":  the rms voltage, in V, for a current of amplitude i0 (inputs i0, f, L);
  "irms":  the rms current, in A, for e = e0 sin(w t) on L (inputs e0, w_over_pi, L_over_pi_inv);
  "v_at":  the source voltage when the current is at its peak (named);
  "eq":    the equation of the current (named);
  "fx2":   what happens to the current when the frequency doubles (named).
"""
from sympy import Symbol, pi, sqrt

from physics import sig

NAMED = {
    "v_at": {"key": "zero_v", "C04-M4": "peak_v", "C04-M5": "rms_v", "C04-M6": "neg_peak"},
    "eq": {"key": "lag", "C04-M9": "lead", "C04-M4": "in_phase", "C04-M10": "over_L"},
    "fx2": {"key": "halves", "C04-M13": "doubles", "C04-M14": "same", "C04-M15": "quarter"},
}


def _solve(v, p, *, no_2pi=False, mH_as_H=False, inv=False, peak_rms=False, over_X=False, avg=False, times_rt2=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "i0":
        L = v["L_mH"] / (1 if mH_as_H else 1000)
        w = v["f"] if no_2pi else 2 * pi * v["f"]
        X = 1 / (w * L) if inv else w * L
        return sig(v["e0"] / X, n)
    if ask == "erms":
        w = v["f"] if no_2pi else 2 * pi * v["f"]
        X = w * v["L"]
        irms = v["i0"] if peak_rms else v["i0"] / sqrt(2)
        return sig(irms / X if over_X else irms * X, n)
    if ask == "irms":
        X = v["w_over_pi"] * pi / (v["L_over_pi_inv"] * pi)  # omega L, with L = 1/(k pi)
        i0 = v["e0"] / X
        if peak_rms:
            return sig(i0, n)
        if avg:
            return sig(2 * i0 / pi, n)
        return sig(i0 * sqrt(2) if times_rt2 else i0 / sqrt(2), n)
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
    "C04-M1": _m("C04-M1", ("i0", "erms"), no_2pi=True),  # uses f for omega
    "C04-M2": _m("C04-M2", ("i0",), mH_as_H=True),  # reads mH as H
    "C04-M3": _m("C04-M3", ("i0",), inv=True),  # uses 1 / (omega L), the capacitor's form
    "C04-M4": _m("C04-M4"),  # thinks current and voltage are in phase
    "C04-M5": _m("C04-M5"),  # gives the rms voltage
    "C04-M6": _m("C04-M6"),  # thinks they are in antiphase
    "C04-M7": _m("C04-M7", ("erms", "irms"), peak_rms=True),  # mixes up peak and rms
    "C04-M8": _m("C04-M8", ("erms",), over_X=True),  # divides by X_L
    "C04-M9": _m("C04-M9"),  # makes the current lead, as for a capacitor
    "C04-M10": _m("C04-M10"),  # divides e0 by L, not by X_L
    "C04-M11": _m("C04-M11", ("irms",), avg=True),  # gives the half-cycle average
    "C04-M12": _m("C04-M12", ("irms",), times_rt2=True),  # multiplies by sqrt 2
    "C04-M13": _m("C04-M13"),  # thinks X_L falls as f rises
    "C04-M14": _m("C04-M14"),  # thinks X_L does not depend on f
    "C04-M15": _m("C04-M15"),  # takes X_L as proportional to f^2
}
