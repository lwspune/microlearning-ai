"""C09 Converting a galvanometer into an ammeter: answer models (the key, and one per misconception).

A shunt S in parallel: Ig G = (I - Ig) S, so S = G Ig / (I - Ig) = G / (n - 1) with n = I / Ig. params["ask"]:
  "range":   S, in ohm, for G ohm, full-scale Ig_uA microamperes, range I_mA milliamperes (inputs G, Ig_uA, I_mA);
  "percent": S, in ohm, so that pct per cent of the main current goes through G (inputs G, pct);
  "connect": how the shunt is connected (named);
  "fraction": fraction of the main current through G with shunt S (inputs G, S);
  "meter":   resistance, in ohm, of the ammeter made from G and S (inputs G, S).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"connect": {"key": "small_parallel", "C09-M5": "large_series", "C09-M6": "small_series", "C09-M7": "large_parallel"}}


def _solve(v, p, *, g_over_n=False, invert=False, n_plus=False, share=False, frac_g=False, s_over_g=False, equal=False,
           series=False, g_only=False, s_only=False):
    ask, n_sf = p["ask"], p.get("sf", 3)
    if ask in ("range", "percent"):
        G = v["G"]
        if ask == "range":
            n = (v["I_mA"] * 1000) / v["Ig_uA"]
        else:
            f = Rational(100 - v["pct"], 100) if share else v["pct"] / 100  # fraction through G
            n = 1 / f
        if g_over_n:
            return sig(G / n, n_sf)
        if invert:
            return sig(G * (n - 1), n_sf)
        if n_plus:
            return sig(G / (n + 1), n_sf)
        return sig(G / (n - 1), n_sf)
    if ask == "fraction":
        G, S = v["G"], v["S"]
        if frac_g:
            return sig(G / (S + G), n_sf)
        if s_over_g:
            return sig(S / G, n_sf)
        if equal:
            return sig(Rational(1, 2), n_sf)
        return sig(S / (S + G), n_sf)
    if ask == "meter":
        G, S = v["G"], v["S"]
        if series:
            return sig(G + S, n_sf)
        if g_only:
            return sig(G, n_sf)
        if s_only:
            return sig(S, n_sf)
        return sig(G * S / (G + S), n_sf)
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
    "C09-M1": _m("C09-M1", ("range", "percent"), g_over_n=True),  # takes S = G Ig / I, using I for I - Ig
    "C09-M2": _m("C09-M2", ("range",), invert=True),  # turns the current ratio upside down
    "C09-M3": _m("C09-M3", ("range", "percent"), n_plus=True),  # takes S = G / (n + 1)
    "C09-M4": _m("C09-M4", ("percent",), share=True),  # takes the given percentage as the shunt's share
    "C09-M5": _m("C09-M5"),  # puts a large resistance in series, as for a voltmeter
    "C09-M6": _m("C09-M6"),  # puts the small resistance in series
    "C09-M7": _m("C09-M7"),  # puts a large resistance in parallel
    "C09-M8": _m("C09-M8", ("fraction",), frac_g=True),  # gives the galvanometer the larger share
    "C09-M9": _m("C09-M9", ("fraction",), s_over_g=True),  # takes the fraction as S/G
    "C09-M10": _m("C09-M10", ("fraction",), equal=True),  # splits the current equally
    "C09-M11": _m("C09-M11", ("meter",), series=True),  # adds S and G as if in series
    "C09-M12": _m("C09-M12", ("meter",), g_only=True),  # takes the galvanometer's resistance as the ammeter's
    "C09-M13": _m("C09-M13", ("meter",), s_only=True),  # takes the shunt alone as the ammeter's resistance
}
