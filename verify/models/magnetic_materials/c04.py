"""C04 Magnetization and magnetic intensity: answer models (the key, and one per misconception).

M = m / V; B = mu0 (H + M) = mu H; mu = mu0 mu_r; mu_r = 1 + chi; M = chi H. params["ask"]:
  "B":    the induction in a plate, in T (inputs l_cm, b_cm, t_cm, H, m);
  "mur":  the relative permeability of a rod (inputs A_cm2, H, phi);
  "pct":  the percentage rise in the field when a material of susceptibility chi fills a toroid (input chi);
  "mu":   the permeability, in T m/A (inputs B, H);
  "unit": the SI unit of magnetization (named).
"""
from sympy import Symbol

from physics import BOOK, sig

mu0 = BOOK["mu0"]
NAMED = {"unit": {"key": "A_per_m", "C04-M12": "A_m2", "C04-M13": "tesla", "C04-M14": "none"}}


def _solve(v, p, *, no_H=False, cm3=False, no_mu0=False, give_mu=False, invert=False, cm2=False, swap=False,
           no_100=False, chi_mu0=False, times=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "B":
        V = v["l_cm"] * v["b_cm"] * v["t_cm"] * (1 if cm3 else 10**-6)
        M = v["m"] / V
        if no_mu0:
            return sig(v["H"] + M, n)
        return sig(mu0 * (M if no_H else v["H"] + M), n)
    if ask == "mur":
        A = v["A_cm2"] * (1 if cm2 else 10**-4)
        mu = v["phi"] / A / v["H"]
        if give_mu:
            return sig(mu, n)
        return sig(mu / mu0 - 1 if swap else mu / mu0, n)
    if ask == "pct":
        chi = v["chi"]
        if no_100:
            return sig(chi, n)
        if swap:
            return sig((1 + chi) * 100, n)
        if chi_mu0:
            return sig(chi * mu0 * 100, n)
        return sig(chi * 100, n)
    if ask == "mu":
        B, H = v["B"], v["H"]
        if invert:
            return sig(H / B, n)
        if times:
            return sig(B * H, n)
        if give_mu:  # here: gives the relative permeability instead of mu
            return sig(B / H / mu0, n)
        return sig(B / H, n)
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
    "C04-M1": _m("C04-M1", ("B",), no_H=True),  # forgets H in B = mu0 (H + M)
    "C04-M2": _m("C04-M2", ("B",), cm3=True),  # leaves the volume in cm^3
    "C04-M3": _m("C04-M3", ("B",), no_mu0=True),  # forgets mu0
    "C04-M4": _m("C04-M4", ("mur",), give_mu=True),  # gives mu, not dividing by mu0
    "C04-M5": _m("C04-M5", ("mu",), invert=True),  # inverts B / H
    "C04-M6": _m("C04-M6", ("mur",), cm2=True),  # leaves the area in cm^2
    "C04-M7": _m("C04-M7", ("mur", "pct"), swap=True),  # mixes up mu_r and chi
    "C04-M8": _m("C04-M8", ("pct",), no_100=True),  # gives the fraction, not the percentage
    "C04-M9": _m("C04-M9", ("pct",), chi_mu0=True),  # multiplies chi by mu0
    "C04-M10": _m("C04-M10", ("mu",), times=True),  # multiplies B by H
    "C04-M11": _m("C04-M11", ("mu",), give_mu=True),  # gives the relative permeability
    "C04-M12": _m("C04-M12"),  # gives the unit of magnetic moment
    "C04-M13": _m("C04-M13"),  # gives the unit of B
    "C04-M14": _m("C04-M14"),  # thinks magnetization has no unit, like chi
}
