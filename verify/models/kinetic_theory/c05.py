"""C05 Kinetic energy and temperature: answer models (the key, and one per misconception).

params["ask"] picks the quantity (params["sf"], optional, sets the significant figures):
  "sample":   total kinetic energy of V_cc cubic centimetres of a gas at pressure P (inputs P, V_cc);
  "molecule": average kinetic energy of a molecule at t deg C (inputs t, k, R);
  "per_kg":   average kinetic energy per kilogram of a gas of molar mass M_g at t deg C (inputs t, R, M_g);
  "formula":  the average kinetic energy of a molecule at temperature T (a formula, named);
  "heating":  why heating a gas raises its temperature (a named answer).

The key combines PV = (1/3) N m v_rms^2 with PV = N k T, so (1/2) m v_rms^2 = (3/2) k T per molecule; a sample
has (3/2) N k T = (3/2) P V in all.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "formula": {"key": Symbol("three_halves_kT"), "C05-M1": Symbol("kT"), "C05-M2": Symbol("half_kT"), "C05-M5": Symbol("three_halves_RT")},
    "heating": {"key": Symbol("more_kinetic_energy"), "C05-M8": Symbol("bigger_molecules"), "C05-M9": Symbol("more_potential_energy"), "C05-M10": Symbol("fewer_collisions")},
}


def _factor(*, three_halves=True, half=False):
    if half:
        return Rational(1, 2)
    return Rational(3, 2) if three_halves else 1


def _solve(v, p, *, three_halves=True, half=False, si=True, celsius=False, use_R=False, grams=False, times_M=False):
    ask = p["ask"]
    n = p.get("sf", 3)
    f = _factor(three_halves=three_halves, half=half)
    if ask == "sample":
        V = v["V_cc"] * Rational(1, 10**6) if si else v["V_cc"]
        return sig(f * v["P"] * V, n)  # (3/2) N k T = (3/2) P V
    T = v["t"] if celsius else v["t"] + 273
    if ask == "molecule":
        return sig(f * (v["R"] if use_R else v["k"]) * T, n)
    if ask == "per_kg":
        M = v["M_g"] if grams else v["M_g"] / 1000
        per_mole = f * v["R"] * T
        return sig(per_mole * M if times_M else per_mole / M, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return NAMED[p["ask"]]["key"]
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def _named(p, ask, m):
    _only(p, ask)
    return NAMED[ask][m]


def m1(v, p):
    """Leaves out the 3/2."""
    if p["ask"] == "formula":
        return NAMED["formula"]["C05-M1"]
    _only(p, "sample", "molecule")
    return _solve(v, p, three_halves=False)


def m2(v, p):
    """Uses 1/2 in place of 3/2."""
    if p["ask"] == "formula":
        return NAMED["formula"]["C05-M2"]
    _only(p, "sample")
    return _solve(v, p, half=True)


def m3(v, p):
    """Leaves cubic centimetres unconverted."""
    _only(p, "sample")
    return _solve(v, p, si=False)


def m4(v, p):
    """Uses temperatures in degrees Celsius."""
    _only(p, "molecule", "per_kg")
    return _solve(v, p, celsius=True)


def m5(v, p):
    """Uses R in place of k_B, giving the energy of a mole instead of a molecule."""
    if p["ask"] == "formula":
        return NAMED["formula"]["C05-M5"]
    _only(p, "molecule")
    return _solve(v, p, use_R=True)


def m6(v, p):
    """Uses the molar mass in grams per mole."""
    _only(p, "per_kg")
    return _solve(v, p, grams=True)


def m7(v, p):
    """Multiplies by the molar mass instead of dividing."""
    _only(p, "per_kg")
    return _solve(v, p, times_M=True)


def m8(v, p):
    """Thinks heating makes the molecules themselves bigger."""
    return _named(p, "heating", "C05-M8")


def m9(v, p):
    """Thinks heating raises the potential energy between the molecules."""
    return _named(p, "heating", "C05-M9")


def m10(v, p):
    """Thinks heating makes the molecules collide less often."""
    return _named(p, "heating", "C05-M10")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6,
          "C05-M7": m7, "C05-M8": m8, "C05-M9": m9, "C05-M10": m10}
