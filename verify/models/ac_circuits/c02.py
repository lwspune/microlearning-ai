"""C02 Phasors: answer models (the key, and one per misconception).

A phasor of length e0 starts along the reference (horizontal) axis at t = 0 and turns anticlockwise at w; its
projection on the vertical axis is e = e0 sin(w t). params["ask"] picks the quantity:
  "proj": the instantaneous value the phasor gives at time t (inputs e0, w, t), in V;
  "lead": the angle by which i leads e, in degrees (negative: i lags), for e = e0 sin(w t + pe) or, with ce = 1,
          e0 cos(w t + pe), and likewise i with pc and ci (inputs pe, pc, ce, ci; phases in radians);
  "dt":   the time by which one of e = e0 sin(w t + pe), i = i0 sin(w t + pc) runs ahead of the other (inputs pe, pc, w), in s;
  "rel1", "rel4": which leads, and by how much (named answers).

The key works from the definitions: a cosine is a sine pi/2 ahead, cos x = sin(x + pi/2); the phase difference is
the difference of the phases, and it takes a time (phase difference) / w to turn through it.
"""
from sympy import Abs, Symbol, cos, pi, sin

from physics import sig

NAMED = {
    "rel1": {"key": "i_leads_q", "C02-M3": "i_lags_q", "C02-M4": "in_phase_q", "C02-M8": "i_ahead_secs"},
    "rel4": {"key": "i_leads_70", "C02-M5": "i_lags_70", "C02-M7": "i_leads_10", "C02-M4": "in_phase_w"},
}


def _solve(v, p, *, horiz=False, length=False, cw=False, flip=False, no_cos=False, unsigned=False, as_time=False, times_T=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "proj":
        th = v["w"] * v["t"]
        if cw:
            th = -th  # turns the phasor clockwise
        if length:
            return sig(v["e0"], n)
        return sig(v["e0"] * (cos(th) if horiz else sin(th)), n)
    pe, pi_ = v["pe"], v["pc"]
    if unsigned:
        pe, pi_ = Abs(pe), Abs(pi_)  # drops the signs of the phase constants
    if ask == "lead":
        ce, ci = (0, 0) if no_cos else (v["ce"], v["ci"])
        d = (pi_ + ci * pi / 2) - (pe + ce * pi / 2)
        if flip:
            d = -d  # reads a larger phase as lagging
        return sig(d * 180 / pi, n)
    if ask == "dt":
        d = Abs(pi_ - pe)
        if as_time:
            return sig(d, n)  # takes the phase angle in radians as seconds
        if times_T:
            return sig(d * 2 * pi / v["w"], n)  # multiplies the angle by the period
        return sig(d / v["w"], n)
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
    "C02-M1": _m("C02-M1", ("proj",), horiz=True),  # takes the projection on the horizontal axis
    "C02-M2": _m("C02-M2", ("proj",), length=True),  # takes the phasor's length as the instantaneous value
    "C02-M3": _m("C02-M3", ("lead",), flip=True),  # reads a + phase constant as lagging
    "C02-M4": _m("C02-M4"),  # thinks the same frequency means in phase
    "C02-M5": _m("C02-M5", ("proj",), cw=True),  # turns phasors clockwise
    "C02-M6": _m("C02-M6", ("lead",), no_cos=True),  # compares a sine with a cosine without converting
    "C02-M7": _m("C02-M7", ("lead", "dt"), unsigned=True),  # drops the sign of a phase constant
    "C02-M8": _m("C02-M8", ("dt",), as_time=True),  # treats the phase angle as a time
    "C02-M9": _m("C02-M9", ("dt",), times_T=True),  # multiplies the phase angle by the period
}
