"""C01 Electric current and drift speed: answer models (the key, and one per misconception).

I = q/t; in a wire I = nAev_d, so v_d = I/(nAe); current density J = I/A = nev_d.
params["ask"]:
  "vd":     drift speed in a wire of diameter d mm (inputs I, d, n, e);
  "J":      current density in a wire of radius r mm (inputs I, r);
  "vdJ":    drift speed from J in A/cm^2 and n per cm^3 (inputs J, n, e), in m/s;
  "count":  number of electrons that pass in t hours (inputs I, t, e);
  "steady": which quantity stays the same along a wire of changing cross-section (named);
  "instant": why a lamp lights the moment it is switched on (named).
"""
from sympy import Symbol, pi

from physics import sig

NAMED = {
    "steady": {"key": "current_only", "C01-M9": "drift_only", "C01-M10": "density_only", "C01-M11": "all_three"},
    "instant": {"key": "field_at_once", "C01-M12": "light_speed", "C01-M13": "thermal_speed", "C01-M14": "no_motion"},
}


def _area(rad_mm, *, swap=False, plain=False, nosq=False, given="d"):
    """Cross-section in m^2 from a radius in mm. swap: mixes up radius and diameter; plain: 1 mm^2 = 10^-3 m^2;
    nosq: forgets to square the radius."""
    rr = rad_mm
    if swap:
        rr = rad_mm * 2 if given == "d" else rad_mm / 2
    if nosq:
        return pi * rr * 10**-3
    return pi * rr**2 * (10**-3 if plain else 10**-6)


def _solve(v, p, *, swap=False, plain=False, nosq=False, cgs=False, onlyJ=False, hours=False, rate=False, div=False):
    ask = p["ask"]
    if ask == "vd":
        A = _area(v["d"] / 2, swap=swap, plain=plain, nosq=nosq, given="d")
        return sig(v["I"] / (v["n"] * A * v["e"]))
    if ask == "J":
        A = _area(v["r"], swap=swap, plain=plain, nosq=nosq, given="r")
        return sig(v["I"] / A)
    if ask == "vdJ":
        if cgs:  # works in cm and calls the answer m/s
            return sig(v["J"] / (v["n"] * v["e"]))
        if plain:  # per cm^2 -> per m^2 by 10^2, per cm^3 -> per m^3 by 10^3
            return sig(v["J"] * 10**2 / (v["n"] * 10**3 * v["e"]))
        if onlyJ:  # converts J to A/m^2 but leaves n per cm^3
            return sig(v["J"] * 10**4 / (v["n"] * v["e"]))
        return sig(v["J"] * 10**4 / (v["n"] * 10**6 * v["e"]))
    if ask == "count":
        t = v["t"] if hours else v["t"] * 3600
        if rate:
            return sig(v["I"] / v["e"])
        if div:
            return sig(v["I"] / t / v["e"])
        return sig(v["I"] * t / v["e"])
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
    "C01-M1": _m("C01-M1", ("vd", "J"), swap=True),  # mixes up radius and diameter
    "C01-M2": _m("C01-M2", ("vd", "J", "vdJ"), plain=True),  # converts mm^2, cm^2, cm^3 with the plain factor
    "C01-M3": _m("C01-M3", ("vd", "J"), nosq=True),  # forgets to square the radius
    "C01-M4": _m("C01-M4", ("vdJ",), cgs=True),  # leaves the answer in cm/s
    "C01-M5": _m("C01-M5", ("vdJ",), onlyJ=True),  # converts J but not n
    "C01-M6": _m("C01-M6", ("count",), hours=True),  # leaves the time in hours
    "C01-M7": _m("C01-M7", ("count",), rate=True),  # takes the current as the whole charge
    "C01-M8": _m("C01-M8", ("count",), div=True),  # divides by the time
    "C01-M9": _m("C01-M9"),  # thinks the drift speed is fixed by the metal
    "C01-M10": _m("C01-M10"),  # thinks the current density is fixed
    "C01-M11": _m("C01-M11"),  # thinks all three stay the same
    "C01-M12": _m("C01-M12"),  # thinks electrons race from the switch at the speed of light
    "C01-M13": _m("C01-M13"),  # confuses drift speed with the random thermal speed
    "C01-M14": _m("C01-M14"),  # thinks electrons do not move at all
}
