"""C01 Average and rms values: answer models (the key, and one per misconception).

The current (or e.m.f.) is i = i0 sin(w t), w = 2 pi f, measured from an instant it is zero and rising.
params["ask"] picks the quantity:
  "inst": the current t seconds after it was zero, from its rms value (inputs irms, f, t), in A;
  "rms":  what an AC voltmeter reads across e = e0 sin(w t) (input e0), in V;
  "trms": the time from zero to the rms value (input f), in ms;
  "half": the average over a half cycle of e = e0 sin(w t) (input e0), in V;
  "full": the average and the rms value over a full cycle (a named answer).

The key works from the definitions: the average of sin over a half cycle is 2/pi, the rms of sin is 1/sqrt(2),
the full-cycle average is zero, and sin(w t) = 1/sqrt(2) first at w t = pi/4.
"""
from sympy import Symbol, pi, sin, sqrt

from physics import sig

NAMED = {
    "full": {"key": "zero_rms", "C01-M1": "same_rms", "C01-M4": "half_avg", "C01-M3": "zero_root2"},
}


def _solve(v, p, *, mean=False, peak=False, inv=False, deg=False, w_f=False, to_peak=False, ramp=False, over_T=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "inst":
        irms = v["irms"]
        if mean:
            i0 = pi * irms / 2  # reads the rms value as the half-cycle average 2 i0 / pi
        elif peak:
            i0 = irms  # takes the rms reading for the peak
        elif inv:
            i0 = irms / sqrt(2)
        else:
            i0 = sqrt(2) * irms
        w = v["f"] if w_f else 2 * pi * v["f"]
        arg = w * v["t"]
        return sig(i0 * sin(arg * pi / 180 if deg else arg), n)
    if ask == "rms":
        e0 = v["e0"]
        if mean:
            return sig(2 * e0 / pi, n)
        if peak:
            return sig(e0, n)
        if inv:
            return sig(sqrt(2) * e0, n)
        return sig(e0 / sqrt(2), n)
    if ask == "trms":
        f = v["f"]
        T = 1 / f
        if to_peak:
            t = T / 4
        elif ramp:
            t = T / 4 / sqrt(2)  # a straight-line rise reaches 0.707 i0 at 0.707 of T/4
        elif w_f:
            t = (pi / 4) / f  # takes w as f
        else:
            t = (pi / 4) / (2 * pi * f)
        return sig(1000 * t, n)
    if ask == "half":
        e0 = v["e0"]
        if mean:
            return sig(e0 / sqrt(2), n)  # takes the rms value for the average
        if ramp:
            return sig(e0 / 2, n)  # a straight line from 0 to e0 averages e0/2
        if over_T:
            return sig(e0 / pi, n)  # the half-cycle area 2 e0 / w divided by the whole period
        return sig(2 * e0 / pi, n)
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
    "C01-M1": _m("C01-M1", ("inst", "rms", "half"), mean=True),  # treats the rms value and the average as the same
    "C01-M2": _m("C01-M2", ("inst", "rms"), peak=True),  # takes the rms (meter) value as the peak
    "C01-M3": _m("C01-M3", ("inst", "rms"), inv=True),  # turns the sqrt(2) the wrong way: i0 = irms / sqrt(2)
    "C01-M4": _m("C01-M4"),  # takes the half-cycle average 2 i0 / pi as the full-cycle average
    "C01-M5": _m("C01-M5", ("inst",), deg=True),  # works out sin(w t) with w t in degrees
    "C01-M6": _m("C01-M6", ("inst", "trms"), w_f=True),  # takes w as f, forgetting the 2 pi
    "C01-M7": _m("C01-M7", ("trms",), to_peak=True),  # takes the time to the rms value as the time to the peak
    "C01-M8": _m("C01-M8", ("trms", "half"), ramp=True),  # pictures the rise to the peak as a straight line
    "C01-M9": _m("C01-M9", ("half",), over_T=True),  # divides the half-cycle area by the whole period
}
