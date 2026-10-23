"""C09 Stokes' law and terminal velocity: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "stokes":  viscous force on a sphere of radius r_mm (or diameter d_mm) moving at v (inputs eta, v, and r_mm or d_mm);
  "ratio":   ratio of the terminal velocities of two spheres whose radii are in the ratio k (input k);
  "vt":      terminal speed of a sphere of radius r_mm (or diameter d_mm), density rho, in a fluid of density sigma
             (inputs eta, rho, sigma, g, and r_mm or d_mm); a bubble (rho < sigma) rises, and its speed is given.

Stokes' law gives the drag, F = 6 pi eta r v. At terminal velocity the forces balance: weight
(4/3) pi r^3 rho g = upthrust (4/3) pi r^3 sigma g + 6 pi eta r v. The key solves this for v in sympy.
"""
from sympy import Abs, Rational, Symbol, pi, solve

from physics import sig

_v = Symbol("v", real=True)


def _radius(v, *, si=True, diameter_as_r=False):
    if "r_mm" in v:
        r = v["r_mm"]
    else:
        r = v["d_mm"] if diameter_as_r else v["d_mm"] / 2
    return r / 1000 if si else r


def _terminal(r, rho, sigma, eta, g, *, buoyancy=True, r_power=2, flip=False):
    """Terminal velocity from the balance of weight, upthrust and drag (or a misconception's version)."""
    if r_power != 2 or flip:
        coeff = Rational(9, 2) if flip else Rational(2, 9)
        return coeff * r ** r_power * (rho - (sigma if buoyancy else 0)) * g / eta
    vol = Rational(4, 3) * pi * r ** 3
    (vt,) = solve(vol * rho * g - (vol * sigma * g if buoyancy else 0) - 6 * pi * eta * r * _v, _v)
    return vt


def _solve(v, p, *, six_pi=True, si=True, r_sq=False, diameter_as_r=False, power=2, buoyancy=True, r_power=2, flip=False):
    ask = p["ask"]
    if ask == "stokes":
        r = _radius(v, si=si, diameter_as_r=diameter_as_r)
        F = (6 * pi if six_pi else 1) * v["eta"] * (r ** 2 if r_sq else r) * v["v"]
        return sig(F)
    if ask == "ratio":
        return v["k"] ** power  # v_t goes as r^2 (or a misconception's power)
    if ask == "vt":
        r = _radius(v, diameter_as_r=diameter_as_r)
        return sig(Abs(_terminal(r, v["rho"], v["sigma"], v["eta"], v["g"], buoyancy=buoyancy, r_power=r_power, flip=flip)))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Drops the 6 pi from Stokes' law."""
    _only(p, "stokes")
    return _solve(v, p, six_pi=False)


def m2(v, p):
    """Leaves millimetres unconverted."""
    _only(p, "stokes")
    return _solve(v, p, si=False)


def m3(v, p):
    """Uses r^2 in Stokes' law, as in the terminal velocity."""
    _only(p, "stokes")
    return _solve(v, p, r_sq=True)


def m4(v, p):
    """Uses the diameter as the radius."""
    _only(p, "stokes", "vt")
    return _solve(v, p, diameter_as_r=True)


def m5(v, p):
    """Thinks the terminal velocity grows in proportion to the radius."""
    _only(p, "ratio")
    return _solve(v, p, power=1)


def m6(v, p):
    """Thinks the terminal velocity grows as r^3, like the weight."""
    _only(p, "ratio")
    return _solve(v, p, power=3)


def m7(v, p):
    """Thinks all spheres reach the same terminal velocity."""
    _only(p, "ratio")
    return _solve(v, p, power=0)


def m8(v, p):
    """Ignores the upthrust, leaving out the fluid's density."""
    _only(p, "vt")
    return _solve(v, p, buoyancy=False)


def m9(v, p):
    """Uses r where r^2 belongs in the terminal velocity."""
    _only(p, "vt")
    return _solve(v, p, r_power=1)


def m10(v, p):
    """Swaps the 2/9 for 9/2."""
    _only(p, "vt")
    return _solve(v, p, flip=True)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6,
          "C09-M7": m7, "C09-M8": m8, "C09-M9": m9, "C09-M10": m10}
