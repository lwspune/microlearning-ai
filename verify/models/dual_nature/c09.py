"""C09 Electron emission: answer models (the key, and one per misconception).

1 eV = e x 1 V = 1.6e-19 J. An electron leaves a metal only if it is given at least the work function phi_0.
params["ask"]:
  "to_J":  the work function phi_eV (in eV) in joules;
  "to_eV": the least energy E_J (in J) to free an electron, as a work function in eV;
  "match", "readily", "visible", "will_emit": named answers.
"""
from sympy import Float, Symbol

from physics import BOOK, sig

e = BOOK["e"]
E19 = Float("1.6e19")  # the slip: 1 eV = 1.6 x 10^19 J

NAMED = {
    # valve filament / spark plug / photocell: how the electrons leave
    "match": {"key": "T_F_P", "C09-M4": "T_F_T", "C09-M5": "P_P_P", "C09-M6": "F_T_P"},
    # caesium 2.14 eV, sodium 4.40e-19 J, platinum 5.65 eV: which emits most readily
    "readily": {"key": "caesium", "C09-M1": "platinum", "C09-M2": "all_alike", "C09-M7": "sodium"},
    # Rb, Na, Cd, Cs under visible light (photons up to 3.1 eV): which emits no electrons
    "visible": {"key": "cadmium", "C09-M1": "caesium", "C09-M2": "none_alike", "C09-M3": "none_bright"},
    # 2.06 eV photons (given as 3.3e-19 J) on potassium, phi_0 = 2.3 eV
    "will_emit": {"key": "no_emission", "C09-M3": "yes_if_bright", "C09-M4": "yes_after_delay",
                  "C09-M7": "yes_raw_numbers"},
}


def _convert(v, p, *, unchanged=False, wrong_way=False, plus19=False):
    if p["ask"] == "to_J":
        x = v["phi_eV"]
        if unchanged:
            return sig(x)
        if wrong_way:
            return sig(x / e)
        return sig(x * (E19 if plus19 else e))
    x = v["E_J"]  # to_eV
    if unchanged:
        return sig(x)
    if wrong_way:
        return sig(x * e)
    return sig(x / (E19 if plus19 else e))


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _convert(v, p)


def _m(mid, **kw):
    """kw: options for the eV-J conversion; None when the misconception has no numeric form."""
    def model(v, p):
        ask = p["ask"]
        if ask in NAMED:
            if mid not in NAMED[ask]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[ask][mid])
        if not kw:
            raise ValueError("does not apply to this item")
        return _convert(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C09-M1": _m("C09-M1"),  # a larger work function lets electrons out more easily
    "C09-M2": _m("C09-M2"),  # every metal has the same work function
    "C09-M3": _m("C09-M3"),  # bright enough light frees electrons whatever the photon energy
    "C09-M4": _m("C09-M4"),  # light frees electrons by warming the metal; energy is stored up
    "C09-M5": _m("C09-M5"),  # names the process after what the device gives out (glow, spark = light)
    "C09-M6": _m("C09-M6"),  # swaps thermionic and field emission
    "C09-M7": _m("C09-M7", unchanged=True),  # treats eV as J
    "C09-M8": _m("C09-M8", wrong_way=True),  # multiplies where it should divide, and back
    "C09-M9": _m("C09-M9", plus19=True),  # 1 eV = 1.6 x 10^19 J
}
