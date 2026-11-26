"""C02 Photon momentum and wave-particle duality: answer models (the key, and one per misconception).

A photon has p = E / c = h nu / c = h / lambda. params["ask"]:
  "p_lam":   momentum, in kg m/s, for a wavelength in nm (input lam_nm);
  "p_E":     momentum, in kg m/s, for an energy in eV (input E_eV);
  "formula": the momentum of a photon of frequency nu (named);
  "Epc":     where E = pc holds (named);
  "dual":    what interference and the photoelectric effect together tell us (named).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

h, c, e = BOOK["h"], BOOK["c"], BOOK["e"]
NAMED = {
    "formula": {"key": "hnu_over_c", "C02-M1": "hnu", "C02-M2": "hlam", "C02-M3": "hnuc"},
    "Epc": {"key": "photon_only", "C02-M4": "both", "C02-M5": "electron_only", "C02-M6": "half_pv"},
    "dual": {"key": "both_natures", "C02-M10": "wave_only", "C02-M11": "particle_only", "C02-M12": "switches"},
}
nm = Rational(1, 10**9)


def _solve(v, p, *, energy=False, hlam=False, nm_as_m=False, eV_as_J=False, times_c=False, over_c2=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "p_lam":
        lam = v["lam_nm"] * (1 if nm_as_m else nm)
        if energy:
            return sig(h * c / lam, n)
        return sig(h * lam if hlam else h / lam, n)
    if ask == "p_E":
        E = v["E_eV"] * (1 if eV_as_J else e)
        if times_c:
            return sig(E * c, n)
        return sig(E / c**2 if over_c2 else E / c, n)
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
    "C02-M1": _m("C02-M1", ("p_lam",), energy=True),  # gives the energy instead of the momentum
    "C02-M2": _m("C02-M2", ("p_lam",), hlam=True),  # multiplies h by lambda
    "C02-M3": _m("C02-M3", ("p_E",), times_c=True),  # multiplies by c
    "C02-M4": _m("C02-M4"),  # thinks E = pc holds for every particle
    "C02-M5": _m("C02-M5"),  # thinks a massless photon has no momentum
    "C02-M6": _m("C02-M6"),  # uses KE = pv / 2 for everything
    "C02-M7": _m("C02-M7", ("p_lam",), nm_as_m=True),  # leaves nm unconverted
    "C02-M8": _m("C02-M8", ("p_E",), eV_as_J=True),  # leaves eV unconverted
    "C02-M9": _m("C02-M9", ("p_E",), over_c2=True),  # divides by c^2, mixing up momentum and mass
    "C02-M10": _m("C02-M10"),  # thinks light is only a wave
    "C02-M11": _m("C02-M11"),  # thinks light is only particles
    "C02-M12": _m("C02-M12"),  # thinks light switches between the two over time
}
