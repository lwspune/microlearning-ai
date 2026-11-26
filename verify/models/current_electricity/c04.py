"""C04 Wheatstone's network: answer models (the key, and one per misconception).

Arms P (A-B), Q (B-C), R (A-D), S (D-C); cell across A-C, galvanometer across B-D. Balanced when P/Q = R/S.
params["ask"]:
  "q":      Q, in ohm, for balance given P, R, S (inputs P, R, S);
  "shunt":  shunt, in ohm, across the arm Big so it acts as Small, all other arms Small (inputs Big, Small);
  "vout":   potential difference, in V, across the galvanometer's ends at balance (inputs V);
  "cond":   the balance condition (named);
  "emf":    what doubling the cell's emf does to a balanced bridge (named).
"""
from sympy import Rational, Symbol, solve

from physics import sig

NAMED = {
    "cond": {"key": "pq_rs", "C04-M10": "ps_rq", "C04-M11": "sums", "C04-M12": "products"},
    "emf": {"key": "still_balanced", "C04-M13": "double_q", "C04-M14": "deflects", "C04-M15": "galvanometer"},
}
_x = Symbol("x", positive=True)


def _solve(v, p, *, wrong_pair=False, rs_over_p=False, additive=False, equal=False, subtract=False, combined=False,
           arm=False, source=False, half=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "q":
        P, R, S = v["P"], v["R"], v["S"]
        if wrong_pair:
            return sig(P * R / S, n)
        if rs_over_p:
            return sig(R * S / P, n)
        if additive:
            return sig(P + S - R, n)
        return sig(P * S / R, n)
    if ask == "shunt":
        big, small = v["Big"], v["Small"]
        if equal:
            return sig(small, n)
        if subtract:
            return sig(big - small, n)
        if combined:
            return sig(big * small / (big + small), n)  # the parallel of the arm and a shunt equal to the others
        (x,) = solve(big * _x / (big + _x) - small, _x)
        return sig(x, n)
    if ask == "vout":
        V = v["V"]
        if arm:
            return sig(V * v["frac"], n)
        if source:
            return sig(V, n)
        if half:
            return sig(V * Rational(1, 2), n)
        return sig(0, n)
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
    "C04-M1": _m("C04-M1", ("q",), wrong_pair=True),  # pairs the wrong arms: Q = PR/S
    "C04-M2": _m("C04-M2", ("q",), rs_over_p=True),  # takes Q = RS/P
    "C04-M3": _m("C04-M3", ("q",), additive=True),  # balances sums of resistances
    "C04-M4": _m("C04-M4", ("shunt",), equal=True),  # makes the shunt equal to the other arms
    "C04-M5": _m("C04-M5", ("shunt",), subtract=True),  # subtracts, as if the shunt were in series
    "C04-M6": _m("C04-M6", ("shunt",), combined=True),  # gives the combined resistance instead of the shunt
    "C04-M7": _m("C04-M7", ("vout",), arm=True),  # gives the potential difference across one arm
    "C04-M8": _m("C04-M8", ("vout",), source=True),  # gives the source voltage
    "C04-M9": _m("C04-M9", ("vout",), half=True),  # halves the source voltage
    "C04-M10": _m("C04-M10"),  # crosses the ratio: P/S = R/Q
    "C04-M11": _m("C04-M11"),  # balances the sums: P + Q = R + S
    "C04-M12": _m("C04-M12"),  # balances the products: PQ = RS
    "C04-M13": _m("C04-M13"),  # thinks a stronger cell needs a new Q
    "C04-M14": _m("C04-M14"),  # thinks the galvanometer then deflects
    "C04-M15": _m("C04-M15"),  # thinks balance depends on the galvanometer's resistance
}
