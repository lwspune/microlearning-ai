"""C01 Stress, strain and Hooke's law: answer models (the key, and one per misconception).

Stress = F / A; strain = change of length / original length. params["ask"]:
  "strain_cm":  strain of a band stretched from l0 to l1 cm (inputs l0, l1);
  "stress":     stress, in N/m^2, from a load of m kg on a cross-section A_cm2 (inputs m, A_cm2, l, g);
  "strain_m":   strain for an increase dl_cm in a length L_m (inputs L_m, dl_cm);
  "unit":       the SI unit and dimensions of stress (named);
  "hooke":      when Hooke's law holds (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "unit": {"key": "Pa_dims", "C01-M10": "newton_u", "C01-M11": "no_unit", "C01-M12": "N_per_m"},
    "hooke": {"key": "within_elastic", "C01-M13": "up_to_break", "C01-M14": "metals_only", "C01-M15": "compression_only"},
}


def _solve(v, p, *, final=False, ext=False, invert=False, kg_as_N=False, cm2=False, over_l=False, cm=False,
           mixed=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "strain_cm":
        d = v["l1"] - v["l0"]
        if ext:
            return sig(d, n)
        L = v["l1"] if final else v["l0"]
        return sig(L / d if invert else d / L, n)
    if ask == "stress":
        F = v["m"] * (1 if kg_as_N else v["g"])
        if over_l:
            return sig(F / v["l"], n)
        A = v["A_cm2"] * (1 if cm2 else Rational(1, 10**4))
        return sig(F / A, n)
    if ask == "strain_m":
        dl = v["dl_cm"] * (1 if cm else Rational(1, 100))
        L = v["L_m"] * (100 if mixed else 1)
        return sig(L / dl if invert else dl / L, n)
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
    "C01-M1": _m("C01-M1", ("strain_cm",), final=True),  # divides by the final length
    "C01-M2": _m("C01-M2", ("strain_cm",), ext=True),  # gives the extension
    "C01-M3": _m("C01-M3", ("strain_cm",), invert=True),  # turns the ratio upside down
    "C01-M4": _m("C01-M4", ("stress",), kg_as_N=True),  # takes kg as newtons
    "C01-M5": _m("C01-M5", ("stress",), cm2=True),  # leaves the area in cm^2
    "C01-M6": _m("C01-M6", ("stress",), over_l=True),  # divides by the length
    "C01-M7": _m("C01-M7", ("strain_m",), cm=True),  # leaves the extension in cm
    "C01-M8": _m("C01-M8", ("strain_m",), invert=True),  # turns the ratio upside down
    "C01-M9": _m("C01-M9", ("strain_m",), mixed=True),  # puts the length in cm too, but the extension in m
    "C01-M10": _m("C01-M10"),  # gives the unit of force
    "C01-M11": _m("C01-M11"),  # thinks stress has no unit, like strain
    "C01-M12": _m("C01-M12"),  # gives force per length
    "C01-M13": _m("C01-M13"),  # thinks it holds all the way to breaking
    "C01-M14": _m("C01-M14"),  # thinks it holds only for metals
    "C01-M15": _m("C01-M15"),  # thinks it holds only for compression
}
