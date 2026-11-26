"""C06 The electric dipole: answer models (the key, and one per misconception).

p = q x 2l; for a short dipole at a far distance r, E_axis = 2kp/r^3 along p, E_equator = kp/r^3 opposite p;
in a uniform field the torque is tau = pE sin(theta). k = 9e9 (the book's value).
params["ask"]:
  "moment":  p of charges +-q a distance d mm apart (inputs q, d);
  "axial":   field on the axis, r cm from the centre of a dipole of charges +-q, d mm apart (inputs q, d, r);
  "equator": the same on the equatorial line (inputs q, d, r);
  "torque":  q from the torque tau on a dipole of length d cm at theta degrees to a field E (inputs tau, E, d, theta);
  "bisector", "unit": named answers.
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import BOOK, sig

NAMED = {
    "bisector": {"key": "parallel_plus_to_minus", "C06-M9": "bisector_away", "C06-M10": "toward_negative", "C06-M11": "parallel_minus_to_plus"},
    "unit": {"key": "Cm_vector_up", "C06-M2": "Cm_vector_down", "C06-M3": "C_per_m_vector", "C06-M13": "Cm_scalar"},
}

K = BOOK["k_e"]
MM = Rational(1, 1000)
CM = Rational(1, 100)


def _p(v, half=False, no_mm=False, both=False):
    d = v["d"] if no_mm else v["d"] * MM
    return (2 if both else 1) * v["q"] * (d / 2 if half else d)


def _solve(v, p, *, half=False, no_mm=False, both=False, swap=False, inv2=False, use_cos=False, no_cm=False):
    ask = p["ask"]
    if ask == "moment":
        return sig(_p(v, half, no_mm, both))
    if ask in ("axial", "equator"):
        pm = _p(v, half, no_mm)
        r = v["r"] * CM
        axis = (ask == "axial") != swap
        return sig((2 if axis else 1) * K * pm / (r**2 if inv2 else r**3))
    if ask == "torque":
        d = v["d"] if no_cm else v["d"] * CM
        if half:
            d = d / 2
        t = v["theta"] * pi / 180
        return sig(v["tau"] / (v["E"] * d * (cos(t) if use_cos else sin(t))))
    raise ValueError("unknown ask")


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
    "C06-M1": _m("C06-M1", ("moment", "equator", "torque"), half=True),  # uses l for the length 2l
    "C06-M2": _m("C06-M2"),  # thinks p points from +q to -q
    "C06-M3": _m("C06-M3"),  # gives the unit as C/m
    "C06-M4": _m("C06-M4", ("moment", "axial"), no_mm=True),  # leaves mm unconverted
    "C06-M5": _m("C06-M5", ("moment",), both=True),  # adds the two charges
    "C06-M6": _m("C06-M6", ("axial",), swap=True),  # uses the equatorial formula on the axis
    "C06-M7": _m("C06-M7", ("axial", "equator"), inv2=True),  # uses 1/r^2, as for a point charge
    "C06-M8": _m("C06-M8", ("equator",), swap=True),  # uses the axial formula on the equator
    "C06-M9": _m("C06-M9"),  # thinks the field on the bisector points away from AB
    "C06-M10": _m("C06-M10"),  # counts only the pull of the negative charge
    "C06-M11": _m("C06-M11"),  # thinks the equatorial field points along p
    "C06-M12": _m("C06-M12", ("torque",), use_cos=True),  # uses cos(theta) in the torque
    "C06-M13": _m("C06-M13"),  # thinks the dipole moment is a scalar
    "C06-M14": _m("C06-M14", ("torque",), no_cm=True),  # leaves cm unconverted
}
