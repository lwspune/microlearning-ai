"""C10 Ampere's circuital law: answer models (the key, and one per misconception).

Round a closed loop, the line integral of B equals mu0 times the current threading the loop. params["ask"]:
  "coax_out":  B beyond a coaxial cable carrying I in and out (named);
  "coax_mid":  B, in T, between the core and the sheath, at r_cm from the axis, core current I (inputs I, r_cm);
  "inside_j":  B inside a wire of uniform current density J at r from the axis (named);
  "loops":     the line integral round loop a (threaded, opposite sense) and loop b (not threaded) (named);
  "inside":    B, in T, at r_cm inside a wire of radius R_cm carrying I (inputs I, r_cm, R_cm).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

mu0 = BOOK["mu0"]
cm = Rational(1, 100)
NAMED = {
    "coax_out": {"key": "zero", "C10-M1": "core_only", "C10-M2": "both_add", "C10-M3": "outer_radius"},
    "inside_j": {"key": "half_jr", "C10-M7": "jr", "C10-M8": "outside_form", "C10-M9": "half_jr2"},
    "loops": {"key": "neg_zero", "C10-M10": "pos_zero", "C10-M11": "neg_neg", "C10-M12": "zero_zero"},
}


def _solve(v, p, *, zero=False, no_2pi=False, four_pi=False, outside=False, no_two=False, conductor_zero=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "coax_mid":
        I, r = v["I"], v["r_cm"] * cm
        if zero:
            return sig(0, n)
        if no_2pi:
            return sig(mu0 * I / r, n)
        if four_pi:
            return sig(mu0 * I / (4 * pi * r), n)
        return sig(mu0 * I / (2 * pi * r), n)
    if ask == "inside":
        I, r, R = v["I"], v["r_cm"] * cm, v["R_cm"] * cm
        if conductor_zero:
            return sig(0, n)
        if outside:
            return sig(mu0 * I / (2 * pi * r), n)
        if no_two:
            return sig(mu0 * I * r / (pi * R**2), n)
        return sig(mu0 * I * r / (2 * pi * R**2), n)
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
    "C10-M1": _m("C10-M1"),  # counts only the core's current outside the cable
    "C10-M2": _m("C10-M2"),  # adds the sizes of the two currents
    "C10-M3": _m("C10-M3"),  # uses the outer radius for every point outside
    "C10-M4": _m("C10-M4", ("coax_mid",), zero=True),  # thinks the sheath cancels the field between the conductors
    "C10-M5": _m("C10-M5", ("coax_mid",), no_2pi=True),  # forgets the 2 pi of the loop's length
    "C10-M6": _m("C10-M6", ("coax_mid",), four_pi=True),  # uses 4 pi, as in Biot-Savart's constant
    "C10-M7": _m("C10-M7", ("inside",), no_two=True),  # forgets the 2: B = mu0 J r
    "C10-M8": _m("C10-M8", ("inside",), outside=True),  # uses the outside formula inside the wire
    "C10-M9": _m("C10-M9"),  # takes B as growing with r^2 inside
    "C10-M10": _m("C10-M10"),  # ignores the loop's sense when signing the current
    "C10-M11": _m("C10-M11"),  # counts a current that passes near the loop without threading it
    "C10-M12": _m("C10-M12"),  # thinks the line integral of B round a closed loop is always zero
    "C10-M13": _m("C10-M13", ("inside",), conductor_zero=True),  # thinks B is zero inside a conductor
}
