"""C04 Optical path length: answer models (the key, and one per misconception).

The optical path of a geometric path d in a medium of index n is n d: the distance light would cover in vacuum in
the time it takes to cross d at speed c/n. params["ask"] picks the quantity:
  "match": the distance in medium 2 with the same optical path as d1 in medium 1, in cm (inputs n1, d1, n2);
  "def":   what the optical path is (a named answer);
  "time":  the time to cross a slab, in s (inputs n, d_cm);
  "waves": the number of waves in a slab (inputs n, d_mm, lam_nm, the wavelength in vacuum);
  "plate": the path difference a plate of thickness t_cm in one of two air paths adds, in cm (inputs n, t_cm).

The key works from the definitions: time = d / (c / n), waves = d / (lambda / n); a plate replaces air path t by n t.
"""
from sympy import Abs, Symbol

from physics import BOOK, sig

NAMED = {"def": {"key": "nd", "C04-M1": "d_over_n", "C04-M2": "d", "C04-M3": "n_minus_1_d"}}


def _opt(n, d, mode):
    if mode == "div":
        return d / n  # divides by n
    if mode == "geo":
        return d  # takes the geometric path
    if mode == "less1":
        return (n - 1) * d  # takes the extra path (n - 1) d
    return n * d


def _solve(v, p, mode=None):
    ask, sf = p["ask"], p.get("sf", 3)
    if ask == "match":
        o = _opt(v["n1"], v["d1"], mode)
        if mode == "div":
            return sig(o * v["n2"], sf)
        if mode == "geo":
            return sig(v["d1"], sf)
        if mode == "less1":
            return sig(o / (v["n2"] - 1), sf)
        return sig(o / v["n2"], sf)
    if ask == "time":
        return sig(_opt(v["n"], v["d_cm"] / 100, mode) / BOOK["c"], sf)
    if ask == "waves":
        return sig(_opt(v["n"], v["d_mm"] / 1000, mode) / (v["lam_nm"] * 10**-9), sf)
    if ask == "plate":
        if mode == "less1":
            raise ValueError("(n - 1) t is the key here")
        if mode == "whole":
            return sig(v["n"] * v["t_cm"], sf)  # the plate's whole optical path
        return sig(Abs(_opt(v["n"], v["t_cm"], mode) - v["t_cm"]), sf)
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


ALL = ("match", "time", "waves", "plate")
MODELS = {
    "key": key,
    "C04-M1": _m("C04-M1", ALL, mode="div"),  # optical path = d / n
    "C04-M2": _m("C04-M2", ALL, mode="geo"),  # optical path = geometric path
    "C04-M3": _m("C04-M3", ALL, mode="less1"),  # optical path = (n - 1) d
    "C04-M4": _m("C04-M4", ("plate",), mode="whole"),  # a plate adds its whole n t
}
