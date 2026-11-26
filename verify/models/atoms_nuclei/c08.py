"""C08 Alpha, beta and gamma decays: answer models (the key, and one per misconception).

A and Z are separately conserved. Alpha: A - 4, Z - 2. Beta minus (n -> p + e- + antineutrino): A same, Z + 1.
Beta plus (p -> n + e+ + neutrino): A same, Z - 1. Gamma: nothing changes but the energy.
Q from ATOMIC masses (1 u = 931.5 MeV): alpha Q = [m_X - m_Y - m_He] c^2 (electrons balance);
beta plus Q = [m_X - m_Y - 2 m_e] c^2 (the parent atom has one electron more, and a positron is made).
params["ask"]:
  "alpha_d": the daughter (A, Z) of an alpha decay (inputs A, Z), named nuclide_<A>_<Z>;
  "betam_d": the daughter (A, Z) of a beta minus decay (inputs A, Z), named nuclide_<A>_<Z>;
  "emit":    what N-12 -> C-12 emits besides the daughter (named);
  "Q_alpha": Q of an alpha decay, in MeV (inputs mX, mY, mHe, me);
  "Q_bplus": Q of a beta plus decay, the positron's largest kinetic energy, in MeV (inputs mX, mY, me);
  "nu":      why the neutrino was proposed (named).
"""
from sympy import Rational, Symbol

from physics import sig

C2 = Rational(9315, 10)  # MeV per u
NAMED = {
    "emit": {"key": "positron_nu", "C08-M4": "electron_antinu", "C08-M7": "positron_only", "C08-M8": "positron_antinu"},
    "nu": {"key": "spread_of_energy", "C08-M14": "balance_charge", "C08-M15": "balance_mass_no", "C08-M16": "photon_nu"},
}


def _nuc(A, Z):
    return Symbol(f"nuclide_{A}_{Z}")  # a named answer computed from A and Z


def _daughter(v, p, *, two_p=False, swap=False, z_same=False, z_down=False, e_nucleon=False, orbital=False):
    A, Z = v["A"], v["Z"]
    if p["ask"] == "alpha_d":
        if two_p:
            return _nuc(A - 2, Z - 2)  # alpha taken as two protons
        if swap:
            return _nuc(A - 2, Z - 4)
        if z_same:
            return _nuc(A - 4, Z)
        return _nuc(A - 4, Z - 2)
    if z_down:
        return _nuc(A, Z - 1)
    if e_nucleon:
        return _nuc(A - 1, Z + 1)
    if orbital:
        return _nuc(A, Z)
    return _nuc(A, Z + 1)


def _q(v, p, *, in_u=False, e_alpha=False, sign=False, one_e=False, no_e=False):
    n = p.get("sf", 3)
    me = v["me"]
    if p["ask"] == "Q_alpha":
        dm = v["mX"] - v["mY"] - v["mHe"]
        if e_alpha:
            dm -= 2 * me  # subtracts electron masses where they balance
    else:
        dm = v["mX"] - v["mY"] - (0 if no_e else (1 if one_e else 2)) * me
    if sign:
        dm = -dm
    return sig(dm if in_u else dm * C2, n)


def _solve(v, p, **kw):
    if p["ask"] in ("alpha_d", "betam_d"):
        return _daughter(v, p, **kw)
    if p["ask"] in ("Q_alpha", "Q_bplus"):
        return _q(v, p, **kw)
    raise ValueError(f"unknown ask {p['ask']}")


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
    "C08-M1": _m("C08-M1", ("alpha_d",), two_p=True),  # takes the alpha particle as two protons
    "C08-M2": _m("C08-M2", ("alpha_d",), swap=True),  # swaps the changes in A and Z
    "C08-M3": _m("C08-M3", ("alpha_d",), z_same=True),  # lowers A only, as if the alpha carried no charge
    "C08-M4": _m("C08-M4", ("betam_d",), z_down=True),  # thinks giving out an electron lowers Z
    "C08-M5": _m("C08-M5", ("betam_d",), e_nucleon=True),  # counts the electron as a nucleon
    "C08-M6": _m("C08-M6", ("betam_d",), orbital=True),  # thinks the beta electron comes from an orbit
    "C08-M7": _m("C08-M7"),  # leaves out the neutrino
    "C08-M8": _m("C08-M8"),  # pairs the positron with an antineutrino
    "C08-M9": _m("C08-M9", ("Q_alpha", "Q_bplus"), in_u=True),  # leaves the mass difference in u
    "C08-M10": _m("C08-M10", ("Q_alpha",), e_alpha=True),  # subtracts two electron masses in alpha decay
    "C08-M11": _m("C08-M11", ("Q_alpha",), sign=True),  # subtracts the parent from the products
    "C08-M12": _m("C08-M12", ("Q_bplus",), one_e=True),  # subtracts one electron mass in beta plus decay
    "C08-M13": _m("C08-M13", ("Q_bplus",), no_e=True),  # subtracts no electron mass in beta plus decay
    "C08-M14": _m("C08-M14"),  # thinks the neutrino balances charge
    "C08-M15": _m("C08-M15"),  # thinks the neutrino balances the mass number
    "C08-M16": _m("C08-M16"),  # confuses the neutrino with a gamma photon
}
