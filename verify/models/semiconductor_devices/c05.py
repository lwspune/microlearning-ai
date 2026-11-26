"""C05 Photodiode, solar cell and LED: answer models (the key, and one per misconception).

An LED glows when, under forward bias, electrons and holes recombine; each photon carries about the band gap,
E_g = hc / lambda, with hc = 1240 eV nm. A photodiode works in reverse bias: its reverse current grows with the light.
A solar cell works by photovoltaic action. params["ask"]:
  "Eg":  the band gap, in eV, from the wavelength in um (input lam_um) and the applied voltage (input V);
  "led", "colour", "true", "pd", "solar": named answers.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "led": {"key": "recombine", "C05-M1": "reverse_bias", "C05-M2": "depletion_widens", "C05-M3": "junction_hot"},
    "colour": {"key": "band_gap", "C05-M4": "forward_current", "C05-M5": "case_colour", "C05-M3": "temperature_j"},
    "true": {"key": "efficient", "C05-M1": "glows_reverse", "C05-M4": "colour_current", "C05-M9": "no_resistor"},
    "pd": {"key": "current_rises", "C05-M10": "current_falls", "C05-M11": "current_fixed", "C05-M12": "turns_forward"},
    "solar": {"key": "photovoltaic", "C05-M13": "recombination", "C05-M14": "diffusion", "C05-M15": "photoemission"},
}

HC = 1240  # eV nm


def _solve(v, p, *, invert=False, use_V=False, no_conv=False):
    if p["ask"] != "Eg":
        raise ValueError(f"unknown ask {p['ask']}")
    lam_nm = v["lam_um"] * 1000
    if use_V:
        return sig(v["V"])  # takes the photon energy as e times the applied voltage
    if no_conv:
        return sig(HC / v["lam_um"])  # puts the wavelength in um into hc = 1240 eV nm
    return sig(lam_nm / HC if invert else HC / lam_nm)


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
    "C05-M1": _m("C05-M1"),  # thinks an LED glows in reverse bias
    "C05-M2": _m("C05-M2"),  # thinks the light comes from a widened depletion region
    "C05-M3": _m("C05-M3"),  # thinks an LED glows because its junction is hot, like a filament
    "C05-M4": _m("C05-M4"),  # thinks the colour depends on the forward current
    "C05-M5": _m("C05-M5"),  # thinks the colour comes from the plastic case
    "C05-M6": _m("C05-M6", ("Eg",), invert=True),  # turns E = hc / lambda upside down
    "C05-M7": _m("C05-M7", ("Eg",), use_V=True),  # takes the photon energy as e times the applied voltage
    "C05-M8": _m("C05-M8", ("Eg",), no_conv=True),  # uses the wavelength in um with hc in eV nm
    "C05-M9": _m("C05-M9"),  # thinks an LED needs no series resistor
    "C05-M10": _m("C05-M10"),  # thinks light lowers a photodiode's reverse current
    "C05-M11": _m("C05-M11"),  # thinks the reverse current is fixed, whatever the light
    "C05-M12": _m("C05-M12"),  # thinks light makes the photodiode conduct forwards
    "C05-M13": _m("C05-M13"),  # confuses the solar cell with the LED: recombination
    "C05-M14": _m("C05-M14"),  # thinks the cell works by diffusion across the junction
    "C05-M15": _m("C05-M15"),  # confuses photovoltaic action with photoelectric emission
}
