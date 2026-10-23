"""C01 Pressure in a fluid: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "gauge":    pressure due to the water above a point h m deep (inputs h, rho, g);
  "absolute": total pressure h m below a free surface at one atmosphere (inputs h, rho, g);
  "piston":   pressure under a piston of area A carrying mass m (inputs m, A, g);
  "manometer": gauge pressure shown by a manometer whose liquid levels differ by h_cm (inputs h_cm, rho, g);
  "depends":  what the pressure at a point in a liquid depends on (a named answer).

The key finds the pressure as weight per area: a column of height h and base area A holds liquid of
weight rho A h g, so it presses with rho A h g / A on its base, plus whatever presses on the free surface.
"""
from sympy import Symbol

from physics import BOOK, sig

_A = Symbol("A", positive=True)

NAMED = {
    "key": Symbol("depth_density_g"),
    "C01-M6": Symbol("depth_only"),
    "C01-M7": Symbol("amount_of_liquid"),
    "C01-M8": Symbol("base_area"),
}


def _column(h, rho, g):
    """Weight of a column over its base area: (rho A h g) / A."""
    return (rho * _A * h * g / _A).simplify()


def _solve(v, p, *, gauge_swap=False, with_g=True, metres=True, gcc=False, invert=False):
    ask = p["ask"]
    g = v["g"] if with_g else 1
    rho = v.get("rho")
    if rho is not None and gcc:
        rho = rho / 1000  # density written in g/cm^3
    if ask == "gauge":
        return sig(_column(v["h"], rho, g) + (BOOK["atm"] if gauge_swap else 0))
    if ask == "absolute":
        return sig(_column(v["h"], rho, g) + (0 if gauge_swap else BOOK["atm"]))
    if ask == "piston":
        F, A = v["m"] * g, v["A"]
        return sig((A / F if invert else F / A) + (BOOK["atm"] if gauge_swap else 0))
    if ask == "manometer":
        h = v["h_cm"] / 100 if metres else v["h_cm"]
        return sig(_column(h, rho, g) + (BOOK["atm"] if gauge_swap else 0))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return NAMED["key"] if p["ask"] == "depends" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Mixes up gauge and absolute pressure: adds the atmosphere when only the liquid's share is asked, or leaves it out."""
    _only(p, "gauge", "absolute", "piston", "manometer")
    return _solve(v, p, gauge_swap=True)


def m2(v, p):
    """Leaves out g, taking a mass for a weight."""
    _only(p, "gauge", "absolute", "piston", "manometer")
    return _solve(v, p, with_g=False)


def m3(v, p):
    """Leaves centimetres unconverted."""
    _only(p, "manometer")
    return _solve(v, p, metres=False)


def m4(v, p):
    """Uses the density in g/cm^3."""
    _only(p, "gauge", "absolute")
    return _solve(v, p, gcc=True)


def m5(v, p):
    """Turns p = F / A upside down."""
    _only(p, "piston")
    return _solve(v, p, invert=True)


def _named(p, m):
    _only(p, "depends")
    return NAMED[m]


def m6(v, p):
    """Thinks the pressure depends only on the depth."""
    return _named(p, "C01-M6")


def m7(v, p):
    """Thinks more liquid, as in a wider vessel, gives more pressure."""
    return _named(p, "C01-M7")


def m8(v, p):
    """Thinks the pressure depends on the area of the vessel's base."""
    return _named(p, "C01-M8")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6,
          "C01-M7": m7, "C01-M8": m8}
