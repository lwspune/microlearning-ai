"""C02 Reflection by Huygens' principle: answer models (the key, and one per misconception).

The book's construction: a plane wavefront AB meets the mirror MN at A at t = 0; its other end B reaches the mirror at C
at t = T, so BC = vT. In that time A's wavelet grows to AE = vT, and the tangent from C to it, CE, is the reflected
wavefront. With i the angle of incidence (ray to normal), the incident wavefront makes angle BAC = i with the mirror,
so BC = AC sin i; right triangles ABC and AEC (common hypotenuse AC, AE = BC) are congruent, so angle ACE = i = r.

params["ask"] picks the question:
  "congruent": which triangles are congruent, and why (named);
  "wavelets":  how the secondary wavelets are drawn (named);
  "angle_ce":  the angle ACE the reflected wavefront makes with the mirror (named);
  "r_glance":  the angle of reflection, in degrees, when the rays make g degrees with the mirror's surface (input g);
  "time":      the time, in ns, from A striking the mirror to B reaching C (inputs AC in m, i in degrees, v in m/s).
"""
from sympy import Symbol, pi, sin, cos

from physics import BOOK, sig

NAMED = {
    "congruent": {"key": "rhs_vT", "C02-M9": "assumes_i_r", "C02-M3": "slower_similar", "C02-M5": "behind_mirror"},
    "wavelets": {"key": "above_shrinking", "C02-M5": "below", "C02-M6": "same_radius", "C02-M10": "speed_c"},
    "angle_ce": {"key": "equal_i", "C02-M2": "complement", "C02-M3": "less_than_i", "C02-M6": "zero"},
}


def _solve(v, p, *, glance=False, between=False, deviation=False, comp=False, along=False, vac=False):
    ask, n = p["ask"], p.get("sf", 2)
    if ask == "r_glance":
        g = v["g"]
        i = g if glance else 90 - g  # the angle of incidence, from the normal
        if between:
            return 2 * i  # the angle between the incident and reflected rays
        if deviation:
            return 180 - 2 * i  # the angle the beam turns through
        return i
    if ask == "time":
        rad = v["i"] * pi / 180
        bc = v["AC"] if along else v["AC"] * (cos(rad) if comp else sin(rad))
        speed = BOOK["c"] if vac else v["v"]
        return sig(bc / speed * 10**9, n)
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
    "C02-M1": _m("C02-M1", ("r_glance",), glance=True),  # takes the angle with the mirror's surface as i
    "C02-M2": _m("C02-M2", ("time",), comp=True),  # takes the incident wavefront's angle with the mirror as 90 - i
    "C02-M3": _m("C02-M3"),  # thinks light slows down on reflection, so AE < BC
    "C02-M4": _m("C02-M4", ("time",), along=True),  # takes B's path to the mirror as AC
    "C02-M5": _m("C02-M5"),  # draws the wavelets behind the mirror, as in refraction
    "C02-M6": _m("C02-M6"),  # gives every wavelet the same radius vT
    "C02-M7": _m("C02-M7", ("r_glance",), between=True),  # gives the angle between the two rays, i + r
    "C02-M8": _m("C02-M8", ("r_glance",), deviation=True),  # gives the deviation, 180 - 2i
    "C02-M9": _m("C02-M9"),  # assumes i = r to prove the triangles congruent
    "C02-M10": _m("C02-M10", ("time",), vac=True),  # uses c for the speed in the medium
}
