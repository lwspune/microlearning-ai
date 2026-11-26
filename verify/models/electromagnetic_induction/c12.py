"""C12 The coefficient of coupling: answer models (the key, and one per misconception).

M = K sqrt(L1 L2), 0 <= K <= 1. params["ask"]:
  "M":    M, in the unit of L1 and L2, from K (inputs L1, L2, K);
  "K":    K from M (inputs L1, L2, M);
  "pct":  K as a percentage (inputs L1, L2, M);
  "full": K when all the flux of each coil links the other (named).
"""
from sympy import Symbol, sqrt

from physics import sig

NAMED = {"full": {"key": "one", "C12-M6": "zero", "C12-M7": "two", "C12-M8": "depends"}}


def _solve(v, p, *, no_sqrt=False, over_K=False, use_sum=False, invert=False, no_pct=False):
    ask, n = p["ask"], p.get("sf", 3)
    L1, L2 = v["L1"], v["L2"]
    G = L1 + L2 if use_sum else (L1 * L2 if no_sqrt else sqrt(L1 * L2))
    if ask == "M":
        return sig(G / v["K"] if over_K else v["K"] * G, n)
    if ask in ("K", "pct"):
        K = G / v["M"] if invert else v["M"] / G
        return sig(K if ask == "K" or no_pct else 100 * K, n)
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
    "C12-M1": _m("C12-M1", ("M", "K", "pct"), no_sqrt=True),  # forgets the square root
    "C12-M2": _m("C12-M2", ("M",), over_K=True),  # divides by K instead of multiplying
    "C12-M3": _m("C12-M3", ("M", "K"), use_sum=True),  # uses L1 + L2
    "C12-M4": _m("C12-M4", ("K", "pct"), invert=True),  # turns K upside down
    "C12-M5": _m("C12-M5", ("pct",), no_pct=True),  # gives the fraction as the percentage
    "C12-M6": _m("C12-M6"),  # thinks K = 0 means tight coupling
    "C12-M7": _m("C12-M7"),  # thinks K can exceed 1
    "C12-M8": _m("C12-M8"),  # thinks K depends on the currents
}
