"""C09 A dipole in a uniform field: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "tmax_angle": the angle between p and E at which the torque is greatest, in degrees;
  "torque":     the torque in N m on charges +-q (C), sep_cm apart, at th_deg to a field E (N/C);
  "work":       the work an external agent does to turn N dipoles (default 1) slowly from th1 to th2 (degrees),
                in J; inputs E and p (C m), or q and sep_cm;
  "ExQ3":       Ex Q.3, field direction and torque (a named answer);
  "stable":     the position of stable equilibrium (a named answer).

The key works from the couple: tau = qE x 2l sin(theta) = pE sin(theta), and from
W = integral of pE sin(theta) d(theta) = pE (cos th1 - cos th2).
"""
from sympy import Symbol, cos, pi, sin

from physics import sig

NAMED = {
    "ExQ3": {"key": "x_2bqE", "C09-M1": "x_zero", "C09-M4": "x_bqE", "C09-M10": "y_zero"},
    "stable": {"key": "aligned", "C09-M1": "perpendicular", "C09-M8": "antiparallel", "C09-M9": "any_position"},
}
ANGLE = {"key": 90, "C09-M1": 0, "C09-M2": 45, "C09-M3": 180}


def _p(v, half=False):
    if "p" in v:
        return v["p"]
    return v["q"] * v["sep_cm"] / 100 / (2 if half else 1)


def _solve(v, p, *, half=False, use_cos=False, sincos=False, sign=False, arc=False, one=False):
    ask, sf = p["ask"], p.get("sf", 3)
    if ask == "torque":
        th = v["th_deg"] * pi / 180
        f = cos(th) if use_cos else (sin(th) * cos(th) if sincos else sin(th))
        return sig(_p(v, half) * v["E"] * f, sf)
    if ask == "work":
        t1, t2 = v["th1"] * pi / 180, v["th2"] * pi / 180
        pE = _p(v, half) * v["E"] * (1 if one else v.get("N", 1))
        if arc:
            return sig(pE * (t2 - t1), sf)  # maximum torque times the angle turned
        w = pE * (cos(t2) - cos(t1)) if sign else pE * (cos(t1) - cos(t2))
        return sig(w, sf)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    a = p["ask"]
    if a in NAMED:
        return Symbol(NAMED[a]["key"])
    if a == "tmax_angle":
        return ANGLE["key"]
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        a = p["ask"]
        if a in NAMED:
            if mid not in NAMED[a]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[a][mid])
        if a == "tmax_angle":
            if mid not in ANGLE:
                raise ValueError("does not apply to this item")
            return ANGLE[mid]
        if a not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C09-M1": _m("C09-M1", ("torque",), use_cos=True),  # tau = pE cos(theta)
    "C09-M2": _m("C09-M2", ("torque",), sincos=True),  # resolves the force as well as the arm
    "C09-M3": _m("C09-M3"),  # mixes up torque and potential energy: largest at 180 deg
    "C09-M4": _m("C09-M4", ("torque", "work"), half=True),  # p = q l, half the separation
    "C09-M5": _m("C09-M5", ("work",), sign=True),  # W = pE (cos th2 - cos th1)
    "C09-M6": _m("C09-M6", ("work",), arc=True),  # W = pE x angle turned
    "C09-M7": _m("C09-M7", ("work",), one=True),  # forgets the number of dipoles
    "C09-M8": _m("C09-M8"),  # stable equilibrium against the field
    "C09-M9": _m("C09-M9"),  # zero net force: equilibrium in any orientation
    "C09-M10": _m("C09-M10"),  # field along the equipotential planes
}
