"""C03 The photoelectric effect: answer models (the key, and one per misconception).

params["ask"]:
  "t_wave":    the wave theory's time for one surface electron to gather the work function, in s (inputs I in W/m^2,
               r_pm the atom's radius in pm, phi_eV, A_cm2 the cathode's area). Under the wave theory the beam's power
               is shared among the surface atoms, each taking the power on its own cross-section pi r^2, so
               t = phi0 / (I pi r^2): the cathode's area cancels;
  "energy":    where the extra energy of a brighter beam goes (named);
  "red":       whether red light is always needed (named);
  "intensity": what doubling the intensity does to the saturation current and the stopping potential (named);
  "curves":    what makes one photocurrent curve differ from another (named);
  "highest":   which metal needs the highest frequency (named).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

e = BOOK["e"]
NAMED = {
    "energy": {"key": "more_electrons", "C03-M1": "slow_ones_faster", "C03-M7": "lost_as_heat", "C03-M3": "stored_for_later"},
    "red": {"key": "frequency_decides", "C03-M2": "any_if_bright", "C03-M3": "any_if_long", "C03-M6": "red_most_energy"},
    "intensity": {"key": "Isat_up_V0_same", "C03-M1": "both_up", "C03-M5": "V0_up_Isat_same", "C03-M4": "neither_changes"},
    "curves": {"key": "higher_frequency", "C03-M5": "brighter_light", "C03-M6": "longer_wavelength", "C03-M3": "shone_longer"},
    "highest": {"key": "gold_metal", "C03-M11": "potassium_metal", "C03-M12": "same_for_all", "C03-M2": "none_if_bright"},
}


def _solve(v, p, *, eV_as_J=False, no_pi=False, one_electron=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "t_wave":
        W = v["phi_eV"] * (1 if eV_as_J else e)
        r = v["r_pm"] * Rational(1, 10**12)
        if one_electron:
            return sig(W / (v["I"] * v["A_cm2"] * Rational(1, 10**4)), n)
        return sig(W / (v["I"] * (r**2 if no_pi else pi * r**2)), n)
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
    "C03-M1": _m("C03-M1"),  # thinks brighter light gives the electrons more energy
    "C03-M2": _m("C03-M2"),  # thinks any frequency works if the light is bright enough
    "C03-M3": _m("C03-M3"),  # thinks the electrons gather energy over time
    "C03-M4": _m("C03-M4"),  # thinks the voltage alone sets the photocurrent, as in a resistor
    "C03-M5": _m("C03-M5"),  # swaps the roles of intensity and frequency
    "C03-M6": _m("C03-M6"),  # thinks a longer wavelength carries more energy
    "C03-M7": _m("C03-M7"),  # thinks the extra energy is lost as heat
    "C03-M8": _m("C03-M8", ("t_wave",), eV_as_J=True),  # leaves the work function in eV
    "C03-M9": _m("C03-M9", ("t_wave",), no_pi=True),  # takes an atom's cross-section as r^2
    "C03-M10": _m("C03-M10", ("t_wave",), one_electron=True),  # gives one electron all the power on the cathode
    "C03-M11": _m("C03-M11"),  # thinks a smaller work function needs a higher frequency
    "C03-M12": _m("C03-M12"),  # thinks the threshold frequency belongs to the light, not the metal
}
