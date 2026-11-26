"""C03 The electron as a magnet: answer models (the key, and one per misconception).

An electron (charge e, mass m_e) in an orbit of radius r at speed v is a current I = e v / (2 pi r) round an area pi r^2:
m_orb = e v r / 2, L = m_e v r, m_orb / L = e / (2 m_e); with L = n h / (2 pi), m_orb = n e h / (4 pi m_e).
params["ask"]:
  "gyro":  e / (2 m_e), in C/kg;      "moment": m_orb, in A m^2 (inputs r, v);
  "L":     L, in kg m^2/s (inputs r, v); "bohr": the orbital moment in the n-th orbit (named);
  "dir":   the direction of the moment of an electron orbiting clockwise seen from above (named).
"""
from sympy import Symbol, pi

from physics import BOOK, sig

e, me, mp = BOOK["e"], BOOK["m_e"], BOOK["m_p"]
NAMED = {
    "bohr": {"key": "neh_4pim", "C03-M1": "neh_2pim", "C03-M3": "proton", "C03-M9": "no_n"},
    "dir": {"key": "up", "C03-M10": "down", "C03-M11": "along", "C03-M12": "none"},
}


def _solve(v, p, *, no_half=False, invert=False, proton=False, current=False, circ=False, charge_for_mass=False,
           no_r=False, over_r=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "gyro":
        m = mp if proton else me
        if invert:
            return sig(2 * m / e, n)
        return sig(e / m if no_half else e / (2 * m), n)
    if ask == "moment":
        r, s = v["r"], v["v"]
        I = e * s / (2 * pi * r)
        if current:
            return sig(I, n)
        if circ:
            return sig(I * 2 * pi * r, n)
        return sig(e * s * r if no_half else e * s * r / 2, n)
    if ask == "L":
        r, s = v["r"], v["v"]
        m = e if charge_for_mass else me
        if no_r:
            return sig(m * s, n)
        if over_r:
            return sig(m * s / r, n)
        return sig(m * s * r, n)
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
    "C03-M1": _m("C03-M1", ("gyro", "moment"), no_half=True),  # forgets the factor 1/2
    "C03-M2": _m("C03-M2", ("gyro",), invert=True),  # turns e / 2m upside down
    "C03-M3": _m("C03-M3", ("gyro",), proton=True),  # uses the proton's mass
    "C03-M4": _m("C03-M4", ("moment",), current=True),  # gives the current instead of the moment
    "C03-M5": _m("C03-M5", ("moment",), circ=True),  # multiplies by the circumference instead of the area
    "C03-M6": _m("C03-M6", ("L",), charge_for_mass=True),  # uses the charge in place of the mass
    "C03-M7": _m("C03-M7", ("L",), no_r=True),  # forgets r: gives the linear momentum
    "C03-M8": _m("C03-M8", ("L",), over_r=True),  # divides by r
    "C03-M9": _m("C03-M9"),  # drops n
    "C03-M10": _m("C03-M10"),  # treats the electron as a positive charge
    "C03-M11": _m("C03-M11"),  # puts the moment along the orbit
    "C03-M12": _m("C03-M12"),  # thinks an orbit has no magnetic moment
}
