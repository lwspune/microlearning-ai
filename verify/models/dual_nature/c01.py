"""C01 Photons and their energy: answer models (the key, and one per misconception).

E = h nu = h c / lambda; in eV, E / e; a beam of power P carries N = P lambda / (h c) photons a second.
params["ask"]:
  "E_lam":  photon energy, in J, for a wavelength in angstrom (input lam_A);
  "E_eV":   photon energy, in eV, for a frequency nu (input nu);
  "N":      photons a second from power P at wavelength lam_A (inputs P, lam_A);
  "formula": the energy of a photon of wavelength lambda (named);
  "redblue": red and blue sources of equal power (named).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

h, c, e = BOOK["h"], BOOK["c"], BOOK["e"]
NAMED = {
    "formula": {"key": "hc_over_lam", "C01-M2": "hlam_over_c", "C01-M9": "hclam", "C01-M10": "lam_over_hc"},
    "redblue": {"key": "red_more", "C01-M11": "equal_n", "C01-M12": "blue_more", "C01-M13": "no_photons"},
}
A = Rational(1, 10**10)


def _solve(v, p, *, A_as_m=False, hlam_c=False, h_over_lam=False, times_e=False, joules=False, hc_nu=False,
           times_E=False, invert=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "E_lam":
        lam = v["lam_A"] * (1 if A_as_m else A)
        if hlam_c:
            return sig(h * lam / c, n)
        if h_over_lam:
            return sig(h / lam, n)
        return sig(h * c / lam, n)
    if ask == "E_eV":
        E = h * c / v["nu"] if hc_nu else h * v["nu"]
        if joules:
            return sig(E, n)
        return sig(E * e if times_e else E / e, n)
    if ask == "N":
        lam = v["lam_A"] * (1 if A_as_m else A)
        E = h * c / lam
        if times_E:
            return sig(v["P"] * E, n)
        return sig(E / v["P"] if invert else v["P"] / E, n)
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
    "C01-M1": _m("C01-M1", ("E_lam", "N"), A_as_m=True),  # leaves angstrom unconverted
    "C01-M2": _m("C01-M2", ("E_lam",), hlam_c=True),  # uses h lambda / c
    "C01-M3": _m("C01-M3", ("E_lam",), h_over_lam=True),  # uses h / lambda, the momentum
    "C01-M4": _m("C01-M4", ("E_eV",), times_e=True),  # multiplies by e to get eV
    "C01-M5": _m("C01-M5", ("E_eV",), joules=True),  # leaves the energy in joule
    "C01-M6": _m("C01-M6", ("E_eV",), hc_nu=True),  # uses h c / nu
    "C01-M7": _m("C01-M7", ("N",), times_E=True),  # multiplies the power by the photon energy
    "C01-M8": _m("C01-M8", ("N",), invert=True),  # divides the photon energy by the power
    "C01-M9": _m("C01-M9"),  # multiplies by lambda
    "C01-M10": _m("C01-M10"),  # turns hc / lambda upside down
    "C01-M11": _m("C01-M11"),  # thinks equal power means equal photons
    "C01-M12": _m("C01-M12"),  # thinks red photons carry more energy
    "C01-M13": _m("C01-M13"),  # thinks steady light is a wave with no photons
}
