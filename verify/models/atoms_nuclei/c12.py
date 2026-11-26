"""C12 de Broglie's explanation of Bohr's orbits: answer models (the key, and one per misconception).

de Broglie: an allowed orbit holds a whole number of electron waves, 2 pi r_n = n lambda, lambda = h / (m v).
params["ask"]:
  "ratio":   lambda_n1 / lambda_n2 in hydrogen (inputs n1, n2);
  "lam":     lambda_n, in nm, from a0 in nm (inputs n, a0);
  "r":       the orbit's radius, in nm, from the electron's speed v in m/s (inputs n, v);
  "rule", "misfit", "picture": named answers.
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

h, me = BOOK["h"], BOOK["m_e"]

NAMED = {
    "rule": {"key": "L_nh_2pi", "C12-M1": "L_h_2pi", "C12-M4": "L_nh_pi", "C12-M5": "L_nh"},
    "misfit": {"key": "destroys_itself", "C12-M1": "one_wave_only", "C12-M4": "half_waves_fit", "C12-M7": "any_radius"},
    "picture": {"key": "matter_waves", "C12-M1": "one_wave", "C12-M4": "half_waves", "C12-M6": "wavy_path"},
}

# How many wavelengths an orbit of quantum number n holds, under each idea.
WAVES = {
    "key": lambda n: n,
    "C12-M1": lambda n: 1,  # one wave per orbit, whatever n
    "C12-M4": lambda n: Rational(1, 2) * n,  # n half-wavelengths, as on a string fixed at both ends
}


def _solve(mid, v, p):
    ask = p["ask"]
    if ask in NAMED:
        if mid not in NAMED[ask]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[ask][mid])
    if ask == "ratio":
        q = Rational(v["n1"]) / Rational(v["n2"])
        if mid == "key":
            return q  # lambda_n = 2 pi a0 n, so lambda grows as n
        if mid == "C12-M1":
            return q**2  # lambda = 2 pi r_n, so it grows as n^2
        if mid == "C12-M2":
            return 1 / q  # higher orbits taken as faster, so lambda falls as 1/n
        if mid == "C12-M3":
            return Rational(1)  # the same wavelength in every orbit
        raise ValueError("does not apply to this item")
    if ask == "lam":
        n, a0 = v["n"], v["a0"]
        r = a0 * n**2
        if mid == "C12-M5":
            return sig(r / n)  # takes the orbit's length as r, not 2 pi r
        if mid == "C12-M3":
            return sig(2 * pi * a0)  # the ground state's wavelength in every orbit
        if mid not in WAVES:
            raise ValueError("does not apply to this item")
        return sig(2 * pi * r / WAVES[mid](n))
    if ask == "r":
        n = v["n"]
        lam_nm = h / (me * v["v"]) * 10**9
        if mid == "C12-M5":
            return sig(n * lam_nm)  # r = n lambda: the 2 pi forgotten
        if mid not in WAVES:
            raise ValueError("does not apply to this item")
        return sig(WAVES[mid](n) * lam_nm / (2 * pi))
    raise ValueError(f"unknown ask {ask}")


def _m(mid):
    return lambda v, p: _solve(mid, v, p)


MODELS = {"key": _m("key"), **{f"C12-M{i}": _m(f"C12-M{i}") for i in range(1, 8)}}
