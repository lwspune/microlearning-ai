"""C04 The Earth's magnetism: answer models (the key, and one per misconception).

tan(dip) = B_V / B_H. params["ask"]:
  "equal":    dip where B_H = B_V (named);
  "bv_zero":  dip where B_V = 0 (named);
  "bh_zero":  where B_H = 0 (named);
  "meridian": what the magnetic meridian is (named);
  "apparent": true dip from an apparent dip phi_a, in a plane at theta to the meridian (inputs phi_a, theta, in degrees);
  "moment":   Earth's dipole moment from the equatorial field B and radius R (inputs B, R).
"""
from sympy import Rational, Symbol, atan, cos, pi, sin, tan

from physics import sig

NAMED = {
    "equal": {"key": "dip_45", "C04-M1": "dip_0", "C04-M2": "dip_90", "C04-M3": "dip_30"},
    "bv_zero": {"key": "dip_zero", "C04-M4": "dip_ninety", "C04-M5": "dip_fortyfive", "C04-M6": "dip_sixty"},
    "bh_zero": {"key": "geomag_pole", "C04-M7": "geog_equator", "C04-M8": "geomag_equator", "C04-M9": "geog_pole"},
    "meridian": {"key": "through_mag_axis", "C04-M10": "through_geo_axis", "C04-M11": "perp_mag_axis", "C04-M12": "perp_geo_axis"},
}
DEG = pi / 180


def _solve(v, p, *, divide=False, use_sin=False, same=False, km=False, sq=False, axial=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "apparent":
        if same:
            return sig(v["phi_a"], n)
        t, f = tan(v["phi_a"] * DEG), v["theta"] * DEG
        x = t / cos(f) if divide else t * (sin(f) if use_sin else cos(f))
        return sig(atan(x) / DEG, n)
    R = v["R"] * (Rational(1, 1000) if km else 1)
    m = v["B"] * (R**2 if sq else R**3) * 10**7
    return sig(m / 2 if axial else m, n)


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
    **{f"C04-M{i}": _m(f"C04-M{i}") for i in range(1, 13)},
    "C04-M13": _m("C04-M13", ("apparent",), divide=True),  # divides by cos instead of multiplying
    "C04-M14": _m("C04-M14", ("apparent",), use_sin=True),  # uses sin of the angle with the meridian
    "C04-M15": _m("C04-M15", ("apparent",), same=True),  # takes the apparent dip as the true dip
    "C04-M16": _m("C04-M16", ("moment",), km=True),  # puts R in km
    "C04-M17": _m("C04-M17", ("moment",), sq=True),  # uses r^2 instead of r^3
    "C04-M18": _m("C04-M18", ("moment",), axial=True),  # uses the axial field formula
}
