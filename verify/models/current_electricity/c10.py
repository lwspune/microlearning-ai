"""C10 Converting a galvanometer into a voltmeter: answer models (the key, and one per misconception).

A large resistance X in series: V = Ig (G + X), so X = V/Ig - G. A real voltmeter of resistance Rv across a cell
(emf e, internal resistance r) reads e Rv / (Rv + r). params["ask"]:
  "series_uA": X, in ohm, for G ohm, Ig_uA microamperes, range V volts (inputs G, Ig_uA, V);
  "series_mA": X, in ohm, for G ohm, Ig_mA milliamperes, range V volts (inputs G, Ig_mA, V);
  "reading":   reading, in V, of a voltmeter Rv across a cell e, r (inputs Rv, e, r);
  "ideal":     the resistance of an ideal voltmeter (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"ideal": {"key": "infinite", "C10-M8": "zero", "C10-M9": "circuit", "C10-M10": "galvanometer"}}


def _solve(v, p, *, no_minus=False, plus=False, units=False, over_g=False, emf=False, drop=False, ratio=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("series_uA", "series_mA"):
        G, V = v["G"], v["V"]
        if ask == "series_uA":
            Ig = v["Ig_uA"] * (Rational(1, 1000) if units else Rational(1, 10**6))  # units: takes uA as mA
        else:
            Ig = v["Ig_mA"] * Rational(1, 1000)
        if over_g:
            return sig(V / (Ig * G), n)
        if no_minus:
            return sig(V / Ig, n)
        return sig(V / Ig + G if plus else V / Ig - G, n)
    if ask == "reading":
        Rv, e, r = v["Rv"], v["e"], v["r"]
        if emf:
            return sig(e, n)
        if drop:
            return sig(e * r / (Rv + r), n)
        if ratio:
            return sig(e * Rv / r, n)
        return sig(e * Rv / (Rv + r), n)
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
    "C10-M1": _m("C10-M1", ("series_uA", "series_mA"), no_minus=True),  # forgets to subtract G
    "C10-M2": _m("C10-M2", ("series_uA", "series_mA"), plus=True),  # adds G instead of subtracting
    "C10-M3": _m("C10-M3", ("series_uA",), units=True),  # takes microamperes as milliamperes
    "C10-M4": _m("C10-M4", ("series_mA",), over_g=True),  # divides by G as well: X = V / (Ig G)
    "C10-M5": _m("C10-M5", ("reading",), emf=True),  # takes the reading as the full emf
    "C10-M6": _m("C10-M6", ("reading",), drop=True),  # gives the drop across the internal resistance
    "C10-M7": _m("C10-M7", ("reading",), ratio=True),  # takes the reading as e Rv / r
    "C10-M8": _m("C10-M8"),  # thinks an ideal voltmeter has zero resistance
    "C10-M9": _m("C10-M9"),  # thinks it should match the circuit's resistance
    "C10-M10": _m("C10-M10"),  # thinks it is the galvanometer's own resistance
}
