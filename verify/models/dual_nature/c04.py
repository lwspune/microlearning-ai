"""C04 Einstein's photoelectric equation: answer models (the key, and one per misconception).

K_max = h nu - phi0 = h c / lambda - h c / lambda0 = e V0; phi0 = h nu0. params["ask"]:
  "K_lam":   K_max, in eV, for lambda and threshold lambda0 in cm (inputs lam_cm, lam0_cm);
  "nu0":     the threshold frequency, in Hz, for phi0 in eV (inputs phi_eV, lam_A);
  "K_V0":    K_max, in J, from the stopping potential (input V0);
  "B":       the field, in T, bending the fastest photoelectrons into a circle (inputs lam_A, phi_eV, r_cm);
  "which":   which of two metals emits (named);
  "double":  K_max when the frequency doubles (named).
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

h, c, e, me = BOOK["h"], BOOK["c"], BOOK["e"], BOOK["m_e"]
NAMED = {
    "which": {"key": "both_emit", "C04-M7": "neither_visible", "C04-M8": "only_larger_phi", "C04-M9": "intensity"},
    "double": {"key": "more_than_twice", "C04-M10": "twice", "C04-M11": "same_K", "C04-M12": "less_than_twice"},
}
ANGSTROM = Rational(1, 10**10)


def _solve(v, p, *, cm_as_m=False, add=False, no_phi=False, eV_as_J=False, invert=False, incident=False,
           V_as_J=False, over_e=False, half=False, r_cm=False, no_half=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "K_lam":
        k = 1 if cm_as_m else Rational(1, 100)
        E, W = h * c / (v["lam_cm"] * k), h * c / (v["lam0_cm"] * k)
        K = E if no_phi else (E + W if add else E - W)
        return sig(K / e, n)
    if ask == "nu0":
        if incident:
            return sig(c / (v["lam_A"] * ANGSTROM), n)
        W = v["phi_eV"] * (1 if eV_as_J else e)
        return sig(h / W if invert else W / h, n)
    if ask == "K_V0":
        if V_as_J:
            return sig(v["V0"], n)
        if over_e:
            return sig(v["V0"] / e, n)
        return sig(e * v["V0"] / 2 if half else e * v["V0"], n)
    if ask == "B":
        E = h * c / (v["lam_A"] * ANGSTROM)
        K = E if no_phi else E - v["phi_eV"] * e
        vel = sqrt(K / me) if no_half else sqrt(2 * K / me)
        r = v["r_cm"] * (1 if r_cm else Rational(1, 100))
        return sig(me * vel / (e * r), n)
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
    "C04-M1": _m("C04-M1", ("K_lam",), cm_as_m=True),  # leaves cm unconverted
    "C04-M2": _m("C04-M2", ("K_lam",), add=True),  # adds the work function
    "C04-M3": _m("C04-M3", ("K_lam", "B"), no_phi=True),  # forgets the work function
    "C04-M4": _m("C04-M4", ("nu0",), eV_as_J=True),  # leaves eV unconverted
    "C04-M5": _m("C04-M5", ("nu0",), invert=True),  # turns phi0 / h upside down
    "C04-M6": _m("C04-M6", ("nu0",), incident=True),  # gives the incident frequency instead
    "C04-M7": _m("C04-M7"),  # thinks visible light cannot eject electrons
    "C04-M8": _m("C04-M8"),  # thinks a larger work function makes emission easier
    "C04-M9": _m("C04-M9"),  # thinks emission depends on the intensity
    "C04-M10": _m("C04-M10"),  # thinks K_max is proportional to nu
    "C04-M11": _m("C04-M11"),  # thinks K_max does not depend on nu
    "C04-M12": _m("C04-M12"),  # thinks K_max grows less than nu
    "C04-M13": _m("C04-M13", ("K_V0",), V_as_J=True),  # reads volts as joules
    "C04-M14": _m("C04-M14", ("K_V0",), over_e=True),  # divides by e
    "C04-M15": _m("C04-M15", ("K_V0",), half=True),  # puts a 1/2 in e V0
    "C04-M16": _m("C04-M16", ("B",), r_cm=True),  # leaves the radius in cm
    "C04-M17": _m("C04-M17", ("B",), no_half=True),  # drops the 1/2 in the kinetic energy
}
