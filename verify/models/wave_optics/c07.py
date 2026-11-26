"""C07 Brewster's law: answer models (the key, and one per misconception).

Unpolarized light goes from medium 1 (index n1, 1 for air) to medium 2 (index n2). params["ask"] picks the quantity:
  "theta": the polarizing angle in degrees (inputs n2, and n1 when the first medium is not air);
  "n":     the refractive index from the polarizing angle th_deg (an exact value);
  "r":     the angle of refraction in degrees at the polarizing angle (input n2);
  "pol":   how the reflected and refracted beams are polarized at the polarizing angle (a named answer).

The key works from Snell's law and the observed right angle between reflected and refracted rays:
theta_B + r = 90 deg, so n2 / n1 = sin theta_B / cos theta_B = tan theta_B.
"""
from sympy import Symbol, acos, asin, atan, cos, pi, sin, tan

from physics import sig

NAMED = {"pol": {"key": "refl_full", "C07-M5": "both_full", "C07-M6": "swapped", "C07-M7": "in_plane"}}


def _deg(x):
    return x * 180 / pi


def _theta(n, mode):
    """The polarizing angle, in radians, that a rule gives for relative index n."""
    if mode == "sin":
        return asin(1 / n)  # the critical-angle formula
    if mode == "inv":
        return atan(1 / n)  # tan theta_B = 1 / n
    if mode == "45":
        return pi / 4  # reflected ray taken perpendicular to the incident ray
    if mode == "cos":
        return acos(1 / n)
    return atan(n)


def _solve(v, p, mode=None):
    ask, sf = p["ask"], p.get("sf", 3)
    if ask == "theta":
        n1 = v.get("n1", 1)
        n = v["n2"] if mode == "n2only" else v["n2"] / n1
        if mode == "sin":
            return sig(_deg(asin(n1 / v["n2"])), sf)
        return sig(_deg(_theta(n, mode)), sf)
    if ask == "n":
        th = v["th_deg"] * pi / 180
        if mode == "sin":
            return 1 / sin(th)
        if mode == "inv":
            return 1 / tan(th)
        if mode == "cos":
            return 1 / cos(th)
        return tan(th)
    if ask == "r":
        return sig(90 - _deg(_theta(v["n2"], mode)), sf)
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
    "C07-M1": _m("C07-M1", ("theta", "n", "r"), mode="sin"),  # sin theta_B = 1/n, the critical-angle formula
    "C07-M2": _m("C07-M2", ("theta", "n", "r"), mode="inv"),  # tan theta_B = 1/n
    "C07-M3": _m("C07-M3", ("theta", "r"), mode="45"),  # theta_B = 45 deg for every medium
    "C07-M4": _m("C07-M4", ("theta",), mode="n2only"),  # uses n2 alone when medium 1 is not air
    "C07-M5": _m("C07-M5"),  # both beams completely polarized
    "C07-M6": _m("C07-M6"),  # refracted completely polarized, reflected partly
    "C07-M7": _m("C07-M7"),  # reflected vibrations in the plane of incidence
    "C07-M8": _m("C07-M8", ("theta", "n"), mode="cos"),  # cos where the law has tan
}
