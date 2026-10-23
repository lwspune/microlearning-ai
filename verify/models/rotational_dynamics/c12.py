"""C12 Rolling motion: answer models (the key, and one per misconception).

params["ask"] picks the quantity, and params["body"] the shape (ring, disc, cylinder, sphere):
  "ke":       total K.E. of a body of mass m rolling at v (inputs m, v);
  "k_ratio":  K^2/R^2 of a body that reaches speed v from rest after a distance s along a slope rising `rise` in every `along` (inputs v, s, rise, along, g);
  "accel":    acceleration of a body rolling down a slope at theta degrees (inputs theta, g);
  "rot_share": the fraction of a rolling body's K.E. that is rotational (a number);
  "v_bottom": speed after rolling from rest through a vertical drop h (inputs h, g).

The key writes the K.E. of rolling as (1/2) m v^2 + (1/2) I w^2 with v = R w and I = m K^2, uses energy
conservation, and for the acceleration differentiates v^2 = 2 g s sin(theta) / (1 + K^2/R^2) along the slope.
It solves these in sympy.
"""
from sympy import Rational, Symbol, diff, pi, sin, solve, sqrt

from physics import sig

K2R2 = {"ring": Rational(1), "disc": Rational(1, 2), "cylinder": Rational(1, 2), "sphere": Rational(2, 5)}
# the shape a student mixes each body up with
OTHER = {"ring": "disc", "disc": "ring", "cylinder": "ring", "sphere": "ring"}

_s, _k = Symbol("s", positive=True), Symbol("k", real=True)


def _ke(m, v, k, *, rotation=True, translation=True):
    """(1/2) m v^2 for moving plus (1/2) I w^2 = (1/2) m K^2 (v/R)^2 for turning."""
    return Rational(1, 2) * m * v ** 2 * ((1 if translation else 0) + (k if rotation else 0))


def _solve(v, p, *, other=False, rotation=True, translation=True, two=True, along=False, tan=False, multiply=False,
           share="rot_total", root=True):
    ask = p["ask"]
    k = K2R2[OTHER[p["body"]]] if other else K2R2.get(p.get("body"), None)
    if ask == "ke":
        return sig(_ke(v["m"], v["v"], k, rotation=rotation, translation=translation))
    if ask == "k_ratio":
        ratio = v["rise"] / v["along"]
        sin_t = ratio / sqrt(1 + ratio ** 2) if tan else ratio
        h = v["s"] if along else v["s"] * sin_t
        drop = (2 if two else 1) * v["g"] * h  # 2 g h, which is (1 + K^2/R^2) v^2
        (kk,) = solve(v["v"] ** 2 * (1 + _k) - drop, _k)
        return sig(kk)
    if ask == "accel":
        th = v["theta"] * pi / 180
        v2 = 2 * v["g"] * _s * sin(th) * ((1 + k) if multiply else 1 / (1 + k) if rotation else 1)
        return sig(diff(v2, _s) / 2)  # a = d(v^2)/ds / 2
    if ask == "rot_share":
        rot, total = _ke(1, 1, k, translation=False), _ke(1, 1, k)
        trans = _ke(1, 1, k, rotation=False)
        return {"rot_total": rot / total, "rot_trans": rot / trans, "trans_total": trans / total}[share]
    if ask == "v_bottom":
        (u,) = solve(_ke(1, _s, k, rotation=rotation) - v["g"] * v["h"], _s)
        return sig(u if root else u ** 2)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses another body's K^2/R^2."""
    _only(p, "ke", "accel", "rot_share", "v_bottom")
    return _solve(v, p, other=True)


def m2(v, p):
    """Ignores the rotation, as if the body only slid."""
    _only(p, "ke", "accel", "v_bottom")
    return _solve(v, p, rotation=False)


def m3(v, p):
    """Counts only the rotational part of the K.E."""
    _only(p, "ke")
    return _solve(v, p, translation=False)


def m4(v, p):
    """Drops the 2 in 2 g h."""
    _only(p, "k_ratio")
    return _solve(v, p, two=False)


def m5(v, p):
    """Uses the distance along the slope as the height dropped."""
    _only(p, "k_ratio")
    return _solve(v, p, along=True)


def m6(v, p):
    """Reads "rises 3 in every 5 along it" as tan(theta) = 3/5."""
    _only(p, "k_ratio")
    return _solve(v, p, tan=True)


def m7(v, p):
    """Multiplies by (1 + K^2/R^2) instead of dividing."""
    _only(p, "accel")
    return _solve(v, p, multiply=True)


def m8(v, p):
    """Compares the rotational K.E. with the translational K.E. instead of the total."""
    _only(p, "rot_share")
    return _solve(v, p, share="rot_trans")


def m9(v, p):
    """Gives the translational share instead of the rotational one."""
    _only(p, "rot_share")
    return _solve(v, p, share="trans_total")


def m10(v, p):
    """Forgets the square root, reporting v^2 as the speed."""
    _only(p, "v_bottom")
    return _solve(v, p, root=False)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6,
          "C12-M7": m7, "C12-M8": m8, "C12-M9": m9, "C12-M10": m10}
