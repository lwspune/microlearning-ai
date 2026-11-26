"""C07 A string with one free end: answer models (the key, and one per misconception).

The fixed end is a node and the free end an antinode. Node to antinode is lambda/4 and each complete loop (node to
node) is lambda/2, so with q complete loops L = q lambda/2 + lambda/4 = (2q + 1) lambda/4; in general
L = (2p - 1) lambda/4, n_p = (2p - 1) v / 4L: only odd harmonics. The k-th overtone is p = k + 1.
params["ask"] picks the quantity:
  "v_loops": wave speed, in m/s, from L (in m, or L_cm in cm), the frequency n and the number of complete loops q;
  "n_ov":    frequency, in Hz, of the k-th overtone (k = 0: the fundamental) from v and L;
  "length":  the rule for the string's length (a named answer).
"""
from sympy import Symbol

from physics import sig

NAMED = {"length": {"key": "odd_quarter", "C07-M1": "int_half", "C07-M6": "int_whole", "C07-M4": "int_quarter"}}


def _solve(v, p, *, node=False, extra_loop=False, count_p=False, cm=False, all_h=False, whole=False, inv_quarter=False):
    ask, sf = p["ask"], p.get("sf", 3)
    if ask == "v_loops":
        if "L_cm" in v:
            L = v["L_cm"] if cm else v["L_cm"] / 100
        else:
            L = v["L"]
        q, n = v["q"], v["n"]
        if node:
            quarters = 2 * q  # q loops of lambda/2, no quarter at the end
        elif extra_loop:
            quarters = 2 * (q + 1)  # the end piece counted as one more loop
        elif count_p:
            quarters = 2 * q - 1  # q put straight in for p in (2p - 1)
        else:
            quarters = 2 * q + 1
        return sig(n * 4 * L / quarters, sf)
    if ask == "n_ov":
        sp, L, k = v["v"], v["L"], v["k"]
        if node:
            return sig((k + 1) * sp / (2 * L), sf)
        if all_h:
            return sig((k + 1) * sp / (4 * L), sf)
        if count_p:
            if k < 1:
                raise ValueError("needs an overtone")
            return sig((2 * k - 1) * sp / (4 * L), sf)
        if whole:
            if k != 0:
                raise ValueError("fundamental only")
            return sig(sp / L, sf)
        if inv_quarter:
            if k != 0:
                raise ValueError("fundamental only")
            return sig(sp / (L / 4), sf)
        return sig((2 * k + 1) * sp / (4 * L), sf)
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
    "C07-M1": _m("C07-M1", ("v_loops", "n_ov"), node=True),  # takes the free end as a node
    "C07-M2": _m("C07-M2", ("v_loops",), extra_loop=True),  # counts the end piece as one more complete loop
    "C07-M3": _m("C07-M3", ("v_loops", "n_ov"), count_p=True),  # uses the count of loops or overtones as p
    "C07-M4": _m("C07-M4", ("n_ov",), all_h=True),  # takes every harmonic to be present
    "C07-M5": _m("C07-M5", ("v_loops",), cm=True),  # forgets to convert cm to m
    "C07-M6": _m("C07-M6", ("n_ov",), whole=True),  # takes the fundamental as one whole wavelength
    "C07-M7": _m("C07-M7", ("n_ov",), inv_quarter=True),  # writes lambda = L/4 for the fundamental
}
