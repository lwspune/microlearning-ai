"""C06 The potentiometer: answer models (the key, and one per misconception).

A driver cell (emf eps, internal resistance r, any series resistance Rs) sends a steady current I = eps/(Rw + r + Rs)
through a uniform wire of resistance Rw and length L, so the potential gradient is K = I Rw / L. A cell balanced at
length l has emf K l, and at balance it sends no current. params["ask"]:
  "K":   K in V/cm (inputs eps, r, Rw, L_cm);
  "box": the series resistance, in ohm, that sets K (inputs eps, r, Rw, L_m, K_uV_mm, K in microvolt per mm);
  "bal", "longer", "adv", "factor": named answers.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "bal": {"key": "aux_only", "C06-M1": "neither", "C06-M2": "both", "C06-M9": "cell_only"},
    "longer": {"key": "larger_l", "C06-M7": "no_change", "C06-M8": "K_up", "C06-M6": "shorter_l"},
    "adv": {"key": "no_current", "C06-M2": "tiny_current", "C06-M1": "no_power", "C06-M5": "high_resistance"},
    "factor": {"key": "test_emf", "C06-M3": "driver_r", "C06-M5": "driver_emf", "C06-M7": "wire_current"},
}


def _solve(v, p, *, no_r=False, per_m=False, res=False, no_wire=False, mm_as_m=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "K":
        if res:
            return sig(v["Rw"] / v["L_cm"], n)  # resistance per cm, read as V/cm
        r = 0 if no_r else v["r"]
        I = v["eps"] / (v["Rw"] + r)
        K = I * v["Rw"] / v["L_cm"]
        return sig(K * 100 if per_m else K, n)
    if ask == "box":
        K = v["K_uV_mm"] * Rational(1, 10**6) / (Rational(1, 1) if mm_as_m else Rational(1, 10**3))  # V/m
        I = K * v["L_m"] / v["Rw"]
        total = v["eps"] / I
        return sig(total - (0 if no_wire else v["Rw"]) - (0 if no_r else v["r"]), n)
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
    "C06-M1": _m("C06-M1"),  # thinks no current flows anywhere at balance
    "C06-M2": _m("C06-M2"),  # thinks the cell under test still sends a small current at balance
    "C06-M3": _m("C06-M3", ("K", "box"), no_r=True),  # ignores the driver cell's internal resistance
    "C06-M4": _m("C06-M4", ("K", "box"), per_m=True, mm_as_m=True),  # mixes cm (or mm) and m
    "C06-M5": _m("C06-M5", ("K",), res=True),  # takes K as the wire's resistance per unit length
    "C06-M6": _m("C06-M6"),  # takes the balancing length to grow with K
    "C06-M7": _m("C06-M7"),  # thinks the null point is fixed by the test cell alone
    "C06-M8": _m("C06-M8"),  # thinks a longer wire has a larger potential gradient
    "C06-M9": _m("C06-M9"),  # swaps the roles of the driver and the cell under test
    "C06-M10": _m("C06-M10", ("box",), no_wire=True),  # leaves the wire out of the series total
}
