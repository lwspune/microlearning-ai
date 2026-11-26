"""C04 Field of a plane sheet: answer models (the key, and one per misconception).

A large sheet with charge sigma per m^2: E = sigma / (2 eps0) on each side, whatever the distance. Just outside a
charged conductor: E = sigma / eps0, and the outward force per unit area is sigma^2 / (2 eps0). params["ask"]:
  "sheet":    E, in N/C, near a sheet of sigma_uC microcoulombs per m^2 (input sigma_uC);
  "conductor": E, in N/C, just outside a conductor of area A_cm2 carrying q_uC (inputs q_uC, A_cm2);
  "force":    force per unit area, in N/m^2, on that conductor's surface (inputs q_uC, A_cm2);
  "between":  E, in N/C, between two parallel sheets of +sigma and -sigma (input sigma_uC);
  "distance": how a sheet's field changes with distance (a named answer).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

NAMED = {"distance": {"key": "constant", "C04-M13": "inv_r2", "C04-M14": "inv_r", "C04-M15": "grows"}}
k, eps0 = BOOK["k_e"], BOOK["eps0"]
uC, cm2 = Rational(1, 10**6), Rational(1, 10**4)


def _solve(v, p, *, cond=False, k_sigma=False, times_eps=False, sheet=False, area_cm=False, flux=False, no_half=False,
           field=False, times2=False, cancel=False, one=False, double=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "sheet":
        s = v["sigma_uC"] * uC
        if k_sigma:
            return sig(k * s, n)
        if times_eps:
            return sig(s * 2 * eps0, n)
        return sig(s / (eps0 if cond else 2 * eps0), n)
    if ask in ("conductor", "force"):
        q = v["q_uC"] * uC
        s = q / (v["A_cm2"] * (1 if area_cm else cm2))
        if ask == "conductor":
            if flux:
                return sig(q / eps0, n)
            return sig(s / (2 * eps0 if sheet else eps0), n)
        if field:
            return sig(s / (2 * eps0), n)
        if times2:
            return sig(s**2 * 2 * eps0, n)
        return sig(s**2 / (eps0 if no_half else 2 * eps0), n)
    if ask == "between":
        s = v["sigma_uC"] * uC
        if cancel:
            return sig(0, n)
        if double:
            return sig(2 * s / eps0, n)
        return sig(s / (2 * eps0) if one else s / eps0, n)
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
    "C04-M1": _m("C04-M1", ("sheet",), cond=True),  # uses the conductor's sigma/eps0 for an isolated sheet
    "C04-M2": _m("C04-M2", ("sheet",), k_sigma=True),  # uses k sigma
    "C04-M3": _m("C04-M3", ("sheet",), times_eps=True),  # multiplies by 2 eps0 instead of dividing
    "C04-M4": _m("C04-M4", ("conductor",), sheet=True),  # uses the sheet's sigma/2eps0 next to a conductor
    "C04-M5": _m("C04-M5", ("conductor",), area_cm=True),  # leaves the area in cm^2
    "C04-M6": _m("C04-M6", ("conductor",), flux=True),  # takes the flux q/eps0 as the field
    "C04-M7": _m("C04-M7", ("force",), no_half=True),  # forgets the half: sigma^2/eps0
    "C04-M8": _m("C04-M8", ("force",), field=True),  # gives a field instead of the force per unit area
    "C04-M9": _m("C04-M9", ("force",), times2=True),  # multiplies by 2 eps0 instead of dividing
    "C04-M10": _m("C04-M10", ("between",), cancel=True),  # thinks the two sheets' fields cancel between them
    "C04-M11": _m("C04-M11", ("between",), one=True),  # counts only one sheet's field
    "C04-M12": _m("C04-M12", ("between",), double=True),  # doubles the conductor formula: 2 sigma/eps0
    "C04-M13": _m("C04-M13"),  # thinks a sheet's field falls as 1/r^2
    "C04-M14": _m("C04-M14"),  # thinks a sheet's field falls as 1/r
    "C04-M15": _m("C04-M15"),  # thinks a sheet's field grows with distance
}
