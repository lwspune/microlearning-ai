"""C07 Wavelength from energy and accelerating voltage: answer models (the key, and one per misconception).

p = sqrt(2 m K); lambda = h / sqrt(2 m K); through V, K = e V, so for an electron lambda = h / sqrt(2 m e V).
params["ask"]:
  "lam_V":   lambda, in nm, of an electron accelerated through V volt (input V);
  "lam_ratio": lambda, in angstrom, at energy E2 given lambda1 at E1 (inputs lam1_A, E1, E2);
  "lam_K":   lambda, in m, of a neutron of energy K joule (input K);
  "ratio":   lambda_e / lambda_p at equal kinetic energies (no inputs);
  "p_V":     momentum, in kg m/s, of an electron accelerated through V volt (input V);
  "longest": which of four particles of equal energy has the longest wavelength (named).
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

h, c, e, me, mp = BOOK["h"], BOOK["c"], BOOK["e"], BOOK["m_e"], BOOK["m_p"]
NAMED = {"longest": {"key": "electron_l", "C07-M7": "alpha_l", "C07-M8": "hydrogen_l", "C07-M9": "all_equal"}}
nm = Rational(1, 10**9)


def _solve(v, p, *, no_2=False, lin_V=False, eV_as_J=False, inv_E=False, sqrt_E=False, lin_E=False, e_mass=False,
           photon=False, equal=False, mass_ratio=False, inv_ratio=False, no_sqrt=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 1 if no_2 else 2
    if ask == "lam_V":
        K = v["V"] * (1 if eV_as_J else e)
        lam = h / sqrt(k * me * K)
        if lin_V:
            lam = lam / sqrt(v["V"])  # divides by V where sqrt(V) belongs
        return sig(lam / nm, n)
    if ask == "lam_ratio":
        r = v["E2"] / v["E1"]
        if inv_E:
            return sig(v["lam1_A"] / r, n)
        if sqrt_E:
            return sig(v["lam1_A"] * sqrt(r), n)
        if lin_E:
            return sig(v["lam1_A"] * r, n)
        return sig(v["lam1_A"] / sqrt(r), n)
    if ask == "lam_K":
        if photon:
            return sig(h * c / v["K"], n)
        m = me if e_mass else mp
        return sig(h / sqrt(k * m * v["K"]), n)
    if ask == "ratio":
        if equal:
            return 1
        r = mp / me
        if mass_ratio:
            return sig(r, n)
        return sig(1 / sqrt(r) if inv_ratio else sqrt(r), n)
    if ask == "p_V":
        K = v["V"] * (1 if eV_as_J else e)
        return sig(k * me * K if no_sqrt else sqrt(k * me * K), n)
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
    "C07-M1": _m("C07-M1", ("lam_V", "lam_K", "p_V"), no_2=True),  # forgets the 2 in sqrt(2mK)
    "C07-M2": _m("C07-M2", ("lam_V",), lin_V=True),  # divides by V where sqrt(V) belongs
    "C07-M3": _m("C07-M3", ("lam_V", "p_V"), eV_as_J=True),  # takes eV as J
    "C07-M4": _m("C07-M4", ("lam_ratio",), inv_E=True),  # takes lambda as proportional to 1/K
    "C07-M5": _m("C07-M5", ("lam_ratio",), sqrt_E=True),  # takes lambda as proportional to sqrt K
    "C07-M6": _m("C07-M6", ("lam_ratio",), lin_E=True),  # takes lambda as proportional to K
    "C07-M7": _m("C07-M7"),  # thinks the heaviest has the longest wavelength
    "C07-M8": _m("C07-M8"),  # thinks a neutral particle has the longest wavelength
    "C07-M9": _m("C07-M9", ("ratio",), equal=True),  # thinks equal energies mean equal wavelengths
    "C07-M10": _m("C07-M10", ("lam_K",), e_mass=True),  # uses the electron's mass for a neutron
    "C07-M11": _m("C07-M11", ("lam_K",), photon=True),  # uses the photon's hc / E
    "C07-M12": _m("C07-M12", ("ratio",), mass_ratio=True),  # uses the mass ratio, as at equal speeds
    "C07-M13": _m("C07-M13", ("ratio",), inv_ratio=True),  # turns the ratio upside down
    "C07-M14": _m("C07-M14", ("p_V",), no_sqrt=True),  # forgets the square root: p = 2mK
}
