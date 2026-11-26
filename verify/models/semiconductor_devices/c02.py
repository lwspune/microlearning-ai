"""C02 Half-wave and full-wave rectifiers: answer models (the key, and one per misconception).

params["ask"]:
  "f_half": output (ripple) frequency, in Hz, of a half-wave rectifier (input f, the supply frequency in Hz);
  "f_full": output frequency, in Hz, of a full-wave rectifier (input w, the supply's angular frequency in rad/s);
  "peak_ct": peak output, in V, of a centre-tapped full-wave rectifier (input Vab, the peak across the whole
             secondary, ideal diodes);
  "avg_half": the average (DC) output, in V, of a half-wave rectifier (input Vm, the peak input, ideal diode);
  "ct_cycle", "half_when": named answers on how the circuits work.

The key works from the circuits: a half-wave rectifier gives one pulse per input cycle (output frequency f),
a full-wave one two (2f); each diode of a centre-tapped rectifier sees half the secondary; the average of a
half-wave output over a whole cycle is Vm / pi.
"""
from sympy import Symbol, pi, sqrt

from physics import sig

NAMED = {
    "ct_cycle": {"key": "d1_same_way", "C02-M5": "both_conduct", "C02-M6": "d1_reverses", "C02-M7": "d2_conducts"},
    "half_when": {"key": "fwd_half_one_way", "C02-M3": "steady_always", "C02-M6": "both_halves_reversing",
                  "C02-M7": "rev_half_only"},
}


def _solve(v, p, *, swap=False, halve=False, steady=False, omega=False, whole=False, rms=False, double=False,
           full_avg=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "f_half":
        f = v["f"]
        if steady:
            return sig(0, n)
        if halve:
            return sig(f / 2, n)
        return sig(2 * f if swap else f, n)
    if ask == "f_full":
        f = v["w"] if omega else v["w"] / (2 * pi)
        if steady:
            return sig(0, n)
        return sig(f if swap else 2 * f, n)
    if ask == "peak_ct":
        Vab = v["Vab"]
        peak = 2 * Vab if double else (Vab if whole else Vab / 2)
        return sig(peak / sqrt(2) if rms else peak, n)
    if ask == "avg_half":
        Vm = v["Vm"]
        if steady:
            return sig(Vm, n)  # takes the output as steady DC at the peak
        if rms:
            return sig(Vm / sqrt(2), n)
        return sig(2 * Vm / pi if full_avg else Vm / pi, n)
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
    "C02-M1": _m("C02-M1", ("f_half", "f_full"), swap=True),  # swaps the half-wave and full-wave output frequencies
    "C02-M2": _m("C02-M2", ("f_half",), halve=True),  # halves the frequency for a half-wave rectifier
    "C02-M3": _m("C02-M3", ("f_half", "f_full", "avg_half"), steady=True),  # takes the output as steady DC
    "C02-M4": _m("C02-M4", ("f_full",), omega=True),  # takes the angular frequency for the frequency
    "C02-M5": _m("C02-M5"),  # thinks both diodes of a full-wave rectifier conduct together
    "C02-M6": _m("C02-M6"),  # thinks the load current still reverses every half cycle
    "C02-M7": _m("C02-M7"),  # thinks a diode conducts when its anode is at the lower potential
    "C02-M8": _m("C02-M8", ("peak_ct",), whole=True),  # takes the whole secondary's peak for one diode's
    "C02-M9": _m("C02-M9", ("avg_half",), full_avg=True),  # uses the full-wave average 2 Vm / pi
    "C02-M10": _m("C02-M10", ("peak_ct", "avg_half"), rms=True),  # gives the rms value Vm / sqrt 2
    "C02-M11": _m("C02-M11", ("peak_ct",), double=True),  # thinks the two diodes add their voltages
}
