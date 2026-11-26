"""C07 Hysteresis: answer models (the key, and one per misconception).

The area of a B-H loop is the energy lost as heat per unit volume in one cycle, so a core of volume V taken round
the loop f times a second loses power P = area x V x f. params["ask"]:
  "power":    the hysteresis loss, in W (inputs area in J/m^3, V_cm3, f);
  "h0":       the name of B at H = 0 (named);
  "hc":       the coercivity read off the figure's loop (named);
  "br":       the retentivity read off the figure's loop (named);
  "area":     what the loop's area stands for (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "h0": {"key": "retentivity", "C07-M1": "coercivity", "C07-M2": "saturation", "C07-M3": "zero"},
    "hc": {"key": "H40", "C07-M1": "B1_2", "C07-M4": "H80", "C07-M2": "H160"},
    "br": {"key": "B1_2", "C07-M1": "H40", "C07-M4": "B2_4", "C07-M2": "B1_5"},
    "area": {"key": "heat_per_cycle", "C07-M5": "stored", "C07-M6": "per_second", "C07-M7": "kept"},
}


def _solve(v, p, *, no_f=False, cm3=False, over_f=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "power":
        V = v["V_cm3"] * (1 if cm3 else 10**-6)
        E = v["area"] * V
        if no_f:
            return sig(E, n)
        return sig(E / v["f"] if over_f else E * v["f"], n)
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
    "C07-M1": _m("C07-M1"),  # mixes up retentivity and coercivity
    "C07-M2": _m("C07-M2"),  # mixes them up with saturation
    "C07-M3": _m("C07-M3"),  # thinks B is zero whenever H is
    "C07-M4": _m("C07-M4"),  # reads the loop's full width or height
    "C07-M5": _m("C07-M5"),  # thinks the area is energy stored and given back
    "C07-M6": _m("C07-M6", ("power",), no_f=True),  # takes the loss per cycle as the loss per second
    "C07-M7": _m("C07-M7"),  # thinks the area is the magnetization kept
    "C07-M8": _m("C07-M8", ("power",), cm3=True),  # leaves the volume in cm^3
    "C07-M9": _m("C07-M9", ("power",), over_f=True),  # divides by the frequency
}
