"""C02 Ohm's law: answer models (the key, and one per misconception).

V = IR for an ohmic conductor; a non-ohmic device's resistance at a point is dV/dI.
params["ask"]:
  "cells":  resistance of a filament run from k cells of Vc volts each in series, carrying I (inputs k, Vc, I);
  "ohmic":  which device is an ohmic conductor (named);
  "slope":  which of two straight I-V lines has the larger resistance (named);
  "dyn":    resistance of a diode between two points (V1, I1 mA) and (V2, I2 mA) of its curve (inputs V1, I1, V2, I2);
  "lamp":   why a filament lamp's I-V graph bends (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "ohmic": {"key": "nichrome", "C02-M4": "transistor", "C02-M5": "vacuum_tube", "C02-M6": "electrolyte"},
    "slope": {"key": "line_B", "C02-M2": "line_A", "C02-M7": "equal_R", "C02-M8": "R_grows"},
    "lamp": {"key": "heats_rises", "C02-M10": "heats_falls", "C02-M11": "still_ohmic", "C02-M12": "large_current"},
}


def _solve(v, p, *, one=False, inv=False, prod=False, static=False, ma=False):
    ask = p["ask"]
    if ask == "cells":
        V = v["Vc"] if one else v["k"] * v["Vc"]
        if inv:
            return sig(v["I"] / V)
        if prod:
            return sig(V * v["I"])
        return sig(V / v["I"])
    if ask == "dyn":
        k = 1 if ma else 1000
        if static:
            return sig(v["V2"] / (v["I2"] / k))
        dV, dI = v["V2"] - v["V1"], (v["I2"] - v["I1"]) / k
        return sig(dI / dV if inv else dV / dI)
    raise ValueError(ask)


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
    "C02-M1": _m("C02-M1", ("cells",), one=True),  # uses one cell's voltage
    "C02-M2": _m("C02-M2", ("cells", "dyn"), inv=True),  # turns R = V/I upside down
    "C02-M3": _m("C02-M3", ("cells",), prod=True),  # multiplies V by I
    "C02-M4": _m("C02-M4"),  # thinks a transistor is ohmic
    "C02-M5": _m("C02-M5"),  # thinks a vacuum tube is ohmic
    "C02-M6": _m("C02-M6"),  # thinks a liquid electrolyte is ohmic
    "C02-M7": _m("C02-M7"),  # thinks all ohmic conductors have the same resistance
    "C02-M8": _m("C02-M8"),  # thinks resistance grows with the voltage applied
    "C02-M9": _m("C02-M9", ("dyn",), static=True),  # uses V/I at one point for a non-ohmic device
    "C02-M10": _m("C02-M10"),  # thinks a hot filament's resistance falls
    "C02-M11": _m("C02-M11"),  # thinks the lamp is still ohmic
    "C02-M12": _m("C02-M12"),  # thinks Ohm's law fails for any large current
    "C02-M13": _m("C02-M13", ("dyn",), ma=True),  # leaves the current in mA
}
