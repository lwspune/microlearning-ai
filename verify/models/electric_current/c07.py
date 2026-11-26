"""C07 Electricity at home: answer models (the key, and one per misconception).

Appliances sit in parallel across the 220 V mains: each draws I = P/V and the main line carries the sum.
Energy is billed in kWh (power in kW times hours); a fuse is a low-melting-point wire in series in the live wire;
a short circuit makes the resistance nearly zero, so the current rises sharply.
params["ask"]:
  "fuse":     what a fuse wire is and where it goes (named);
  "short":    what the current does in a short circuit (named);
  "material": the metals of a bulb filament and an iron's heating element (named);
  "bulbs":    which of a low-rated and a high-rated bulb glows brighter in series and in parallel (named);
  "bill":     cost of the light from a filament bulb drawing I amperes at V volts, a fraction f of its power
              becoming light, for hd hours a day over d days at a rate of `rate` rupees a unit (inputs V, I, f, hd, d, rate);
  "main":     current in the main line from appliances P1, P2 and n bulbs of P3 each on V volts (inputs V, P1, P2, P3, n).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "fuse": {"key": "low_melt_live", "C07-M1": "high_melt_live", "C07-M2": "low_melt_neutral",
             "C07-M3": "low_melt_parallel"},
    "short": {"key": "rises_sharply", "C07-M4": "becomes_zero", "C07-M5": "stays_same", "C07-M6": "falls_slightly"},
    "material": {"key": "tungsten_nichrome", "C07-M7": "nichrome_tungsten", "C07-M8": "copper_copper",
                 "C07-M9": "tungsten_tungsten"},
    "bulbs": {"key": "low_series_high_parallel", "C07-M10": "high_both", "C07-M11": "low_both",
              "C07-M12": "equal_series_high_parallel"},
}


def _solve(v, p, *, all_light=False, watts=False, swap=False, series=False):
    ask = p["ask"]
    if ask == "bill":
        P = v["V"] / v["I"] if swap else v["V"] * v["I"]  # watts
        light = P if all_light else v["f"] * P
        hours = v["hd"] * v["d"]
        units = light * hours if watts else light / 1000 * hours
        return sig(units * v["rate"])
    if ask == "main":
        V = v["V"]
        powers = [v["P1"], v["P2"]] + [v["P3"]] * int(v["n"])
        if series:
            return sig(V / sum(V**2 / P for P in powers))
        total = sum(powers)
        if swap:
            return sig(V / total)
        return sig(total / 1000 / V if watts else total / V)
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
    "C07-M1": _m("C07-M1"),  # thinks a fuse wire needs a high melting point
    "C07-M2": _m("C07-M2"),  # thinks the fuse can go in the neutral wire
    "C07-M3": _m("C07-M3"),  # thinks the fuse is joined across the appliance
    "C07-M4": _m("C07-M4"),  # thinks a short circuit breaks the circuit, so no current flows
    "C07-M5": _m("C07-M5"),  # thinks the supply voltage fixes the current
    "C07-M6": _m("C07-M6", ("main",), series=True),  # thinks the parts of a house circuit are in series
    "C07-M7": _m("C07-M7"),  # swaps the filament and heating-element metals
    "C07-M8": _m("C07-M8"),  # thinks the best conductor makes the best hot wire
    "C07-M9": _m("C07-M9"),  # thinks a high melting point is all a hot wire needs
    "C07-M10": _m("C07-M10"),  # thinks the higher-rated bulb is always brighter
    "C07-M11": _m("C07-M11"),  # thinks the lower-rated bulb is always brighter
    "C07-M12": _m("C07-M12"),  # thinks the same current in series means the same brightness
    "C07-M13": _m("C07-M13", ("bill",), all_light=True),  # thinks a filament bulb turns all its power into light
    "C07-M14": _m("C07-M14", ("bill", "main"), watts=True),  # mixes up watts and kilowatts
    "C07-M15": _m("C07-M15", ("bill", "main"), swap=True),  # inverts P = VI (takes P = V/I or I = V/P)
}
