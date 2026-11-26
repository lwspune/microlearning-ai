"""C09 Inductors in series and parallel: answer models (the key, and one per misconception).

Coils far apart (no mutual inductance): series L = L1 + L2 + ...; parallel 1/L = 1/L1 + 1/L2 + ... params["ask"]:
  "series":   L of the coils in series, in mH (inputs L1, L2);
  "parallel": L of the coils in parallel, in mH (inputs L1, L2);
  "nsame":    L of n equal coils of L1 in parallel, in mH (inputs n, L1);
  "emf":      the emf across L1 and L2 (in H) in series when the current changes at r A/s (inputs L1, L2, r);
  "compare":  how the parallel L compares with each coil's (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {"compare": {"key": "less_than_smaller", "C09-M3": "between", "C09-M4": "sum_both", "C09-M6": "larger"}}


def _par(Ls):
    return 1 / sum(1 / L for L in Ls)


def _solve(v, p, *, par=False, prod=False, avg=False, ser=False, no_inv=False, half=False, one=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("series", "parallel", "emf"):
        Ls = [v["L1"], v["L2"]]
        if prod:
            L = Ls[0] * Ls[1]
        elif avg:
            L = (Ls[0] + Ls[1]) / 2
        elif no_inv:
            L = sum(1 / x for x in Ls)
        elif one:
            L = Ls[0]
        elif (ask == "parallel" and not ser) or (ask != "parallel" and par):
            L = _par(Ls)
        else:
            L = sum(Ls)
        return sig(L * v["r"] if ask == "emf" else L, n)
    if ask == "nsame":
        k, L1 = v["n"], v["L1"]
        if ser:
            return sig(k * L1, n)
        if no_inv:
            return sig(k / L1, n)
        if half:
            return sig(L1 / 2, n)
        return sig(L1 / k, n)
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
    "C09-M1": _m("C09-M1", ("series", "emf"), par=True),  # uses the parallel rule for series
    "C09-M2": _m("C09-M2", ("series", "emf"), prod=True),  # multiplies the inductances
    "C09-M3": _m("C09-M3", ("series", "parallel"), avg=True),  # averages them
    "C09-M4": _m("C09-M4", ("parallel", "nsame"), ser=True),  # uses the series rule for parallel
    "C09-M5": _m("C09-M5", ("parallel", "nsame"), no_inv=True),  # forgets to invert the sum of 1/L
    "C09-M6": _m("C09-M6"),  # thinks the parallel L equals the larger
    "C09-M7": _m("C09-M7", ("nsame",), half=True),  # halves L for any number of equal coils
    "C09-M8": _m("C09-M8", ("emf",), one=True),  # uses one coil only
}
