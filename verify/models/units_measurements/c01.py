"""C01 Units and the SI system: answer models (the key, and one per misconception).

Solid angle of a far disc of radius r at distance d: Omega = pi r^2 / d^2 sr. 1 km/h = 1000/3600 m/s. params["ask"]:
  "omega":    the solid angle, in sr, of a disc of diameter D_km at distance d_m (inputs D_km, d_m);
  "kmh":      a speed in m/s from km/h (input v);
  "notbase":  which unit is not fundamental (named);
  "sr":       the unit of solid angle (named);
  "newton":   the newton in base units (named).
"""
from sympy import Rational, Symbol, pi

from physics import sig

NAMED = {
    "notbase": {"key": "volt_u", "C01-M1": "cm_u", "C01-M2": "kg_u", "C01-M3": "centigrade_u"},
    "sr": {"key": "steradian", "C01-M7": "radian", "C01-M8": "degree_u", "C01-M9": "square_metre"},
    "newton": {"key": "kg_m_s2", "C01-M10": "kg_m_s1", "C01-M11": "kg_m2_s2", "C01-M12": "kg_s2"},
}


def _solve(v, p, *, diam=False, no_pi=False, km=False, times36=False, k_only=False, per_min=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "omega":
        r = v["D_km"] * (1 if km else 1000) / (1 if diam else 2)
        return sig((1 if no_pi else pi) * r**2 / v["d_m"] ** 2, n)
    if ask == "kmh":
        x = v["v"]
        if times36:
            return sig(x * Rational(36, 10), n)
        if k_only:
            return sig(x * 1000, n)
        if per_min:
            return sig(x * 1000 / 60, n)
        return sig(x * 1000 / 3600, n)
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
    "C01-M1": _m("C01-M1"),  # thinks only the metre, not the centimetre, is fundamental
    "C01-M2": _m("C01-M2"),  # thinks a prefixed unit like kg is derived
    "C01-M3": _m("C01-M3"),  # thinks temperature is not a base quantity
    "C01-M4": _m("C01-M4", ("omega",), diam=True),  # uses the diameter as the radius
    "C01-M5": _m("C01-M5", ("omega",), no_pi=True),  # leaves out pi
    "C01-M6": _m("C01-M6", ("omega",), km=True),  # leaves km unconverted
    "C01-M7": _m("C01-M7"),  # confuses solid angle with plane angle
    "C01-M8": _m("C01-M8"),  # gives the degree, a plane-angle unit
    "C01-M9": _m("C01-M9"),  # takes a solid angle for an area
    "C01-M10": _m("C01-M10"),  # gives the unit of momentum
    "C01-M11": _m("C01-M11"),  # gives the unit of energy
    "C01-M12": _m("C01-M12"),  # drops the metre
    "C01-M13": _m("C01-M13", ("kmh",), times36=True),  # multiplies by 3.6
    "C01-M14": _m("C01-M14", ("kmh",), k_only=True),  # converts the km but not the hour
    "C01-M15": _m("C01-M15", ("kmh",), per_min=True),  # divides by 60 instead of 3600
}
