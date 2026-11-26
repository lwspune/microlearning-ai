"""C08 Field of a charged ring and rod: answer models (the key, and one per misconception).

A continuous charge is many bits dq; their fields add as vectors. On a ring's axis the parts across the axis
cancel: E = kQx / (R^2 + x^2)^(3/2), zero at the centre, largest at x = R/sqrt(2). An arc of angle theta at its
centre: E = (2k lambda / R) sin(theta/2) (2k lambda / R for a semicircle). A rod on its axis, d from its near end:
E = kQ / (d(d + L)). A rod of length L at distance a on its perpendicular bisector: E = (2k lambda / a) sin(phi),
with sin(phi) = (L/2) / sqrt(a^2 + L^2/4); a long line: 2k lambda / r.
params["ask"]:
  "ring":     field on the axis of a ring, Q uC, radius R cm, at x cm from its centre (inputs Q_uC, R_cm, x_cm);
  "maxpos":   where on the axis of a ring of radius R the field is largest (input R, an expression in a);
  "semi":     field at the centre of a half ring of charge Q nC and radius R cm (inputs Q_nC, R_cm);
  "quarter":  field at the centre of a half ring ABC whose quarter AB alone gives E0 there (no inputs);
  "arc":      size of the field at the centre of an arc of angle th_deg, charge of size Q, radius R
              (symbolic in q, R, epsilon0; input th_deg);
  "bisector": field on the perpendicular bisector of a rod of length L and charge Q, a = sqrt(3) L / 2 from it
              (symbolic in q, L, epsilon0);
  "rodaxis":  field on the axis of a rod, Q nC, length L cm, d cm beyond its near end (inputs Q_nC, L_cm, d_cm).
"""
from sympy import Integer, Rational, Symbol, pi, sin, sqrt

from physics import BOOK, sig

K = BOOK["k_e"]
CM = Rational(1, 100)
q, R, L, eps0, E0 = Symbol("q"), Symbol("R"), Symbol("L"), Symbol("epsilon0"), Symbol("E0")
KS = 1 / (4 * pi * eps0)  # k, kept symbolic for the symbolic items


def _ring(v, how):
    Q, Rr, x = v["Q_uC"] * Rational(1, 10**6), v["R_cm"] * CM, v["x_cm"] * CM
    if how == "key":
        return sig(K * Q * x / (Rr**2 + x**2) ** Rational(3, 2))
    if how == "add":  # every bit's full field k dq / r^2, added as numbers
        return sig(K * Q / (Rr**2 + x**2))
    if how == "point":  # all of Q at the centre
        return sig(K * Q / x**2)
    if how == "power":  # E = kQx / (R^2 + x^2), the power 3/2 lost
        return sig(K * Q * x / (Rr**2 + x**2))
    raise ValueError("does not apply to this item")


def _maxpos(v, how):
    Rr = v["R"]
    if how == "key":  # d/dx [x (R^2 + x^2)^(-3/2)] = 0 gives R^2 = 2x^2
        return Rr / sqrt(2)
    if how in ("add", "point"):  # a field that only falls with x is largest at the centre
        return Integer(0)
    if how == "power":  # x / (R^2 + x^2) is largest at x = R
        return Rr
    if how == "chain":  # chain-rule factor 2x dropped: R^2 + x^2 = (3/2) x^2, x^2 = 2R^2
        return sqrt(2) * Rr
    raise ValueError("does not apply to this item")


def _arc_field(Qv, Rv, theta, k, how):
    """Size of the field at the centre of an arc of angle theta (radians), charge Qv, radius Rv."""
    lam = Qv / (Rv * theta)
    if how == "key":
        return 2 * k * lam * sin(theta / 2) / Rv
    if how == "add":  # sum of |k dq / R^2|: k Q / R^2
        return k * Qv / Rv**2
    if how == "circum":  # lambda from the whole circle, Q / (2 pi R)
        return 2 * k * (Qv / (2 * pi * Rv)) * sin(theta / 2) / Rv
    if how == "semi":  # the semicircle's 2k lambda / R used for every arc
        return 2 * k * lam / Rv
    if how == "zero":  # thinks the field at the centre of any arc cancels, as for a ring
        return Integer(0)
    raise ValueError("does not apply to this item")


def _rodaxis(v, how):
    Q, Ll, d = v["Q_nC"] * Rational(1, 10**9), v["L_cm"] * CM, v["d_cm"] * CM
    lam = Q / Ll
    if how == "key":  # k lambda (1/d - 1/(d + L))
        return sig(K * Q / (d * (d + Ll)))
    if how == "point":  # all of Q at the rod's middle
        return sig(K * Q / (d + Ll / 2) ** 2)
    if how == "line":  # the long-line field 2k lambda / r
        return sig(2 * K * lam / d)
    if how == "farend":  # k lambda / d: the far end's term dropped
        return sig(K * lam / d)
    raise ValueError("does not apply to this item")


def _bisector(v, how):
    a = sqrt(3) * L / 2
    lam = q / L
    if how == "key":  # (2k lambda / a) sin(phi), sin(phi) = (L/2) / sqrt(a^2 + L^2/4) = 1/2
        end = L  # distance to either end, sqrt(a^2 + L^2/4) = sqrt(3L^2/4 + L^2/4) = L (L > 0)
        return 2 * KS * lam / a * (L / 2) / end
    if how == "add":  # sum of |k dq / r^2|: (2k lambda / a) phi, phi = pi/6
        return 2 * KS * lam / a * (pi / 6)
    if how == "point":  # all of Q at the rod's middle
        return KS * q / a**2
    if how == "line":  # the long-line field 2k lambda / a
        return 2 * KS * lam / a
    raise ValueError("does not apply to this item")


def _solve(v, p, how):
    ask = p["ask"]
    if ask == "ring":
        return _ring(v, how)
    if ask == "maxpos":
        return _maxpos(v, how)
    if ask == "semi":
        Q, Rr = v["Q_nC"] * Rational(1, 10**9), v["R_cm"] * CM
        return sig(_arc_field(Q, Rr, pi, K, how))
    if ask == "quarter":
        # the half ring's field as a multiple of the quarter arc's, E0 (same lambda and R)
        ratio = {h: _arc_field(2 * Integer(1), Integer(1), pi, Integer(1), h)
                 / _arc_field(Integer(1), Integer(1), pi / 2, Integer(1), h) for h in ("key", "add", "semi")}
        if how in ratio:  # key: sqrt(2), two fields E0 at right angles; add: 2; semi: 1, both 2k lambda / R
            return ratio[how] * E0
        if how == "zero":
            return Integer(0)
        raise ValueError("does not apply to this item")
    if ask == "arc":
        th = v["th_deg"] * pi / 180
        return _arc_field(q, R, th, KS, how)
    if ask == "bisector":
        return _bisector(v, how)
    if ask == "rodaxis":
        return _rodaxis(v, how)
    raise ValueError("unknown ask")


def _m(how):
    def model(v, p):
        return _solve(v, p, how)
    return model


MODELS = {
    "key": _m("key"),
    "C08-M1": _m("add"),  # adds the bits' fields as numbers, ignoring their directions
    "C08-M2": _m("point"),  # takes the whole charge as a point charge at the centre of the shape
    "C08-M3": _m("zero"),  # thinks the field at the centre of any arc is zero, as for a ring
    "C08-M4": _m("semi"),  # uses the semicircle's 2k lambda / R for an arc of any angle
    "C08-M5": _m("circum"),  # finds an arc's lambda from the whole circle, Q / (2 pi R)
    "C08-M6": _m("power"),  # writes the ring's field as kQx / (R^2 + x^2), losing the power 3/2
    "C08-M7": _m("chain"),  # drops the chain rule's 2x when maximising, so x = sqrt(2) R
    "C08-M8": _m("line"),  # uses the long line's 2k lambda / r for a short rod
    "C08-M9": _m("farend"),  # integrates a rod on its axis to k lambda / d, dropping the far end
}
