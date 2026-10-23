"""C04 Surface energy: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "blow":     work to blow a soap bubble of radius r_cm from nothing (inputs r_cm, T);
  "stored":   energy stored in a soap bubble of diameter d_cm (inputs d_cm, T);
  "frame":    work to stretch a film on a square frame from side a_cm to b_cm (inputs a_cm, b_cm, T);
  "enlarge":  work to enlarge a bubble from r1_cm to r2_cm, T in dyne/cm, with the book's pi (inputs r1_cm, r2_cm, T_dyne, pi_book);
  "drop_d":   diameter (in m) of a liquid drop whose surface energy is k pi T (input k).

The key multiplies the surface tension by the new surface made: W = T x (number of surfaces) x (change in
area), with a sphere's surface 4 pi r^2; it solves for the drop's radius in sympy.
"""
from sympy import Rational, Symbol, pi, solve

from physics import sig

_r = Symbol("r", positive=True)


def _sphere(r, *, square=True, circle=False):
    return (pi if circle else 4 * pi) * (r ** 2 if square else r)


def _solve(v, p, *, surfaces=None, square=True, metres=True, radius_slip=False, final_only=False, si_T=True,
           diff_sq=False, circle=False):
    ask = p["ask"]
    if ask == "blow":
        r = v["r_cm"] / 100 if metres else v["r_cm"]
        return sig(v["T"] * (surfaces or 2) * _sphere(r, square=square))
    if ask == "stored":
        d = v["d_cm"] / 100 if metres else v["d_cm"]
        r = d if radius_slip else d / 2
        return sig(v["T"] * (surfaces or 2) * _sphere(r))
    if ask == "frame":
        scale = Rational(1, 10000) if metres else 1
        A1, A2 = v["a_cm"] ** 2 * scale, v["b_cm"] ** 2 * scale
        dA = A2 if final_only else A2 - A1
        return sig(v["T"] * (surfaces or 2) * dA)
    if ask == "enlarge":
        T = v["T_dyne"] / 1000 if si_T else v["T_dyne"]
        r1, r2 = v["r1_cm"] / 100, v["r2_cm"] / 100
        if final_only:
            change = r2 ** 2
        elif diff_sq:
            change = (r2 - r1) ** 2
        else:
            change = r2 ** 2 - r1 ** 2
        return sig(T * 2 * 4 * v["pi_book"] * change)
    if ask == "drop_d":
        T = Symbol("T", positive=True)
        energy = T * (surfaces or 1) * _sphere(_r, circle=circle)
        (r,) = solve(energy - v["k"] * pi * T, _r)
        return sig(r if radius_slip else 2 * r)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Miscounts the surfaces: one for a bubble or film, two for a drop."""
    _only(p, "blow", "stored", "frame", "drop_d")
    return _solve(v, p, surfaces=2 if p["ask"] == "drop_d" else 1)


def m2(v, p):
    """Doesn't square the radius."""
    _only(p, "blow")
    return _solve(v, p, square=False)


def m3(v, p):
    """Leaves centimetres (or cm^2) unconverted."""
    _only(p, "blow", "stored", "frame")
    return _solve(v, p, metres=False)


def m4(v, p):
    """Mixes up radius and diameter."""
    _only(p, "stored", "drop_d")
    return _solve(v, p, radius_slip=True)


def m5(v, p):
    """Uses the final area instead of the change in area."""
    _only(p, "frame", "enlarge")
    return _solve(v, p, final_only=True)


def m6(v, p):
    """Leaves dyne/cm unconverted."""
    _only(p, "enlarge")
    return _solve(v, p, si_T=False)


def m7(v, p):
    """Squares the change in radius, (r2 - r1)^2, instead of taking r2^2 - r1^2."""
    _only(p, "enlarge")
    return _solve(v, p, diff_sq=True)


def m8(v, p):
    """Uses the area of a circle, pi r^2, for a sphere's surface."""
    _only(p, "drop_d")
    return _solve(v, p, circle=True)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6,
          "C04-M7": m7, "C04-M8": m8}
