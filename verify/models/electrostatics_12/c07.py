"""C07 Potential of a dipole and equipotentials: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "V":     potential of a short dipole at distance r (m), angle th_deg to the axis, in volts. Inputs: p (C m), or
           q (C) and two_l (m), the charges and their separation;
  "eq":    work to carry a charge along the dipole's equatorial plane (a named answer);
  "semi":  Ex Q.1 (iv): +q at A, -q at B, AB = 2L, C the midpoint, D on AB beyond B with BD = L. The work to carry +Q
           from C to D, as the coefficient c in W = c qQ / (pi eps0 L);
  "equi":  which statement about equipotential surfaces is true (a named answer).

The key works from superposition, V = k sum(q_i / r_i), and for a short dipole V = k p cos(theta) / r^2; the work to
carry a charge is W = Q (V_final - V_initial).
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import BOOK, sig

K = BOOK["k_e"]

NAMED = {
    "eq": {"key": "zero", "C07-M4": "axial", "C07-M5": "path", "C07-M6": "field_nonzero"},
    "equi": {"key": "perp", "C07-M5": "work_along", "C07-M6": "field_zero", "C07-M10": "parallel"},
}


def _p(v, half=False):
    if "p" in v:
        return v["p"]
    return v["q"] * v["two_l"] / (2 if half else 1)


def _V(v, p, *, use_sin=False, one_r=False, no_cos=False, field=False):
    th = v["th_deg"] * pi / 180
    pm, r = _p(v), v["r"]
    if field:
        return sig(2 * K * pm / r**3 * cos(th), p.get("sf", 3))  # the axial field formula
    f = 1 if no_cos else (sin(th) if use_sin else cos(th))
    return sig(K * pm * f / (r if one_r else r**2), p.get("sf", 3))


def _semi(mode=None):
    # In units of k qQ / L: V_C = 0, V_D = 1/3 - 1 = -2/3. k = 1/(4 pi eps0), so c = (k-coefficient) / 4.
    if mode == "sign":
        w = Rational(2, 3)  # W = Q (V_C - V_D)
    elif mode == "near":
        w = Rational(-1)  # only -q, at distance L from D
    elif mode == "short":
        w = Rational(-1, 2)  # V_D = -k p / r^2, p = 2qL, r = 2L from the centre
    else:
        w = Rational(-2, 3)
    return w / 4


def key(v, p):
    a = p["ask"]
    if a in NAMED:
        return Symbol(NAMED[a]["key"])
    if a == "V":
        return _V(v, p)
    if a == "semi":
        return _semi()
    raise ValueError(f"unknown ask {a}")


def _m(mid, V=None, semi=None):
    def model(v, p):
        a = p["ask"]
        if a in NAMED:
            if mid not in NAMED[a]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[a][mid])
        if a == "V" and V is not None:
            return _V(v, p, **V)
        if a == "semi" and semi is not None:
            return _semi(semi)
        raise ValueError("does not apply to this item")
    return model


MODELS = {
    "key": key,
    "C07-M1": _m("C07-M1", V={"use_sin": True}),  # sin theta for cos theta
    "C07-M2": _m("C07-M2", V={"one_r": True}),  # 1/r, as for a point charge
    "C07-M3": _m("C07-M3", V={"no_cos": True}),  # drops cos theta: the axial value everywhere
    "C07-M4": _m("C07-M4"),  # takes the equatorial potential as k p / r^2
    "C07-M5": _m("C07-M5"),  # work needed between points of equal potential / along an equipotential
    "C07-M6": _m("C07-M6", V={"field": True}),  # mixes up the dipole's potential and field
    "C07-M7": _m("C07-M7", semi="sign"),  # W = Q (V_initial - V_final)
    "C07-M8": _m("C07-M8", semi="near"),  # counts only the nearer charge
    "C07-M9": _m("C07-M9", semi="short"),  # short-dipole formula close to the dipole
    "C07-M10": _m("C07-M10"),  # equipotentials parallel to the field
}
