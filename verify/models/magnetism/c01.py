"""C01 The bar magnet: answer models (the key, and one per misconception).

k = mu0 / 4pi = 1e-7. params["ask"]:
  "axial":  field on the axis of a short magnet of moment m at r_cm (inputs m, r_cm);
  "equat":  field on its equator (inputs m, r_cm);
  "force":  force on a pole qp on the axis of a magnet of pole strength qM, length L_cm, at r_cm (inputs qp, qM, L_cm, r_cm);
  "two":    field midway between two perpendicular magnets of moment m, centres d apart (inputs m, d);
  "needle": what acts on a needle in a non-uniform field (named);
  "cut":    what happens when a magnet is cut (named).
"""
from sympy import Rational, Symbol, sqrt

from physics import sig

K = Rational(1, 10**7)
NAMED = {
    "needle": {"key": "force_and_torque", "C01-M11": "torque_only", "C01-M12": "force_only", "C01-M13": "neither_ft"},
    "cut": {"key": "two_magnets", "C01-M14": "separate_poles", "C01-M15": "loses_magnetism", "C01-M16": "one_piece_magnet"},
}


def _solve(v, p, *, swap=False, sq=False, cm=False, no_q=False, no_len=False, add=False, sub=False, both_axial=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("axial", "equat"):
        r = v["r_cm"] * (1 if cm else Rational(1, 100))
        axial = (ask == "axial") != swap
        f = 2 if axial else 1
        return sig(K * f * v["m"] / (r**2 if sq else r**3), n)
    if ask == "force":
        r = v["r_cm"] / 100
        M = v["qM"] * (1 if no_len else v["L_cm"] / 100)
        B = K * (1 if swap else 2) * M / r**3
        return sig(B if no_q else v["qp"] * B, n)
    if ask == "two":
        r = v["d"] / 2
        B1, B2 = 2 * K * v["m"] / r**3, K * v["m"] / r**3
        if both_axial:
            return sig(sqrt(2) * B1, n)
        if add:
            return sig(B1 + B2, n)
        if sub:
            return sig(B1 - B2, n)
        return sig(sqrt(B1**2 + B2**2), n)
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
    "C01-M1": _m("C01-M1", ("axial",), swap=True),  # uses the equatorial formula on the axis
    "C01-M2": _m("C01-M2", ("axial", "equat"), sq=True),  # uses 1/r^2
    "C01-M3": _m("C01-M3", ("axial", "equat"), cm=True),  # leaves r in cm
    "C01-M4": _m("C01-M4", ("equat",), swap=True),  # uses the axial formula on the equator
    "C01-M5": _m("C01-M5", ("force",), no_q=True),  # gives the field, not the force
    "C01-M6": _m("C01-M6", ("force",), no_len=True),  # takes the pole strength as the moment
    "C01-M7": _m("C01-M7", ("force",), swap=True),  # uses the equatorial field
    "C01-M8": _m("C01-M8", ("two",), add=True),  # adds the perpendicular fields as numbers
    "C01-M9": _m("C01-M9", ("two",), sub=True),  # subtracts them
    "C01-M10": _m("C01-M10", ("two",), both_axial=True),  # treats both points as axial
    **{f"C01-M{i}": _m(f"C01-M{i}") for i in range(11, 17)},
}
