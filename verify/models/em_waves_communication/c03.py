"""C03 Propagation of EM waves: answer models (the key, and one per misconception).

Range of an antenna of height h: d = sqrt(2 R h). params["ask"]:
  "range":  range in km of an antenna h metres high, Earth radius R metres (inputs h, R);
  "two":    greatest distance in km between antennas hT and hR metres high (inputs hT, hR, R);
  "height": antenna height in m to cover a radius d_km (inputs d_km, R);
  "people": population covered by a tower h metres high at density rho per km^2 (inputs h, R, rho);
  "law":    how range depends on height (named).
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import sig

NAMED = {"law": {"key": "root_h", "C03-M6": "prop_h", "C03-M7": "h_three_halves", "C03-M8": "h_squared"}}


def _solve(v, p, *, no2=False, km=False, diam=False, one=False, sum_h=False, d_km=False, R_km=False,
           no_pi=False, d_only=False, quarter=False):
    ask, n = p["ask"], p.get("sf", 3)
    R = v["R"] * (Rational(1, 1000) if km else 1)
    k = 1 if no2 else (4 if diam else 2)
    if ask == "range":
        return sig(sqrt(k * R * v["h"]) / (1 if km else 1000), n)
    if ask == "two":
        if sum_h:
            return sig(sqrt(k * R * (v["hT"] + v["hR"])) / 1000, n)
        d = sqrt(k * R * v["hT"]) + (0 if one else sqrt(k * R * v["hR"]))
        return sig(d / 1000, n)
    if ask == "height":
        d = v["d_km"] * (1 if d_km else 1000)
        Rr = v["R"] / (1000 if R_km else 1)
        return sig(d**2 / ((1 if no2 else 2) * Rr), n)
    if ask == "people":
        d2 = 2 * v["R"] * v["h"] / 10**6  # km^2
        if d_only:
            return sig(pi * sqrt(d2) * v["rho"], n)
        area = d2 * (1 if no_pi else pi) / (4 if quarter else 1)
        return sig(area * v["rho"], n)
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
    "C03-M1": _m("C03-M1", ("range", "two", "height"), no2=True),  # forgets the 2
    "C03-M2": _m("C03-M2", ("range",), diam=True),  # uses the Earth's diameter for R
    "C03-M3": _m("C03-M3", ("range",), km=True),  # puts R in km but h in m
    "C03-M4": _m("C03-M4", ("two",), one=True),  # counts only the transmitter's range
    "C03-M5": _m("C03-M5", ("two",), sum_h=True),  # adds the heights first
    **{f"C03-M{i}": _m(f"C03-M{i}") for i in (6, 7, 8)},
    "C03-M9": _m("C03-M9", ("height",), d_km=True),  # puts d in km with R in m
    "C03-M10": _m("C03-M10", ("height",), R_km=True),  # puts R in km with d in m
    "C03-M11": _m("C03-M11", ("people",), no_pi=True),  # takes the area as d^2
    "C03-M12": _m("C03-M12", ("people",), d_only=True),  # uses d, not d^2
    "C03-M13": _m("C03-M13", ("people",), quarter=True),  # uses pi d^2 / 4
}
