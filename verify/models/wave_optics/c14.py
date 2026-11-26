"""C14 Width of the central maximum: answer models (the key, and one per misconception).

First minima at y = +-lambda D / a, so the central maximum is 2 lambda D / a wide. params["ask"]:
  "width":  width, in mm, between the first minima (inputs lam_nm, a_mm, D_cm);
  "slit":   slit width, in mm, for a central maximum Wc_mm wide (inputs lam_nm, D_m, Wc_mm);
  "lam":    wavelength, in nm, when the first minimum is y_mm from the centre (inputs y_mm, a_mm, D_m);
  "colour": what replacing blue light by red does to the bands (a named answer);
  "halve":  what halving the slit width does to the central maximum (a named answer).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "colour": {"key": "broader", "C14-M5": "narrower", "C14-M6": "disappear", "C14-M7": "same"},
    "halve": {"key": "doubles", "C14-M10": "halves", "C14-M11": "quadruples", "C14-M7": "same"},
}
NM, MM = Rational(1, 10**9), Rational(1, 1000)


def _solve(v, p, *, one=False, cm=False, airy=False, half=False, y_as_width=False, half_lam=False):
    ask, n = p["ask"], p.get("sf", 3)
    f = Rational(122, 100) if airy else 1
    k = 1 if one else (Rational(1, 2) if half else 2)  # central width = k f lambda D / a
    if ask == "width":
        D = v["D_cm"] * (1 if cm else Rational(1, 100))
        return sig(k * f * v["lam_nm"] * NM * D / (v["a_mm"] * MM) / MM, n)
    if ask == "slit":
        return sig(k * f * v["lam_nm"] * NM * v["D_m"] / (v["Wc_mm"] * MM) / MM, n)
    if ask == "lam":
        y = v["y_mm"] * MM / 2 if y_as_width else v["y_mm"] * MM  # first minimum: a y / D = f lambda (or lambda/2)
        lam = y * v["a_mm"] * MM / v["D_m"] / f
        return sig((2 * lam if half_lam else lam) / NM, n)
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
    "C14-M1": _m("C14-M1", ("width", "slit"), one=True),  # forgets the 2: takes the width as lambda D / a
    "C14-M2": _m("C14-M2", ("width",), cm=True),  # leaves D in cm
    "C14-M3": _m("C14-M3", ("width", "slit", "lam"), airy=True),  # uses the 1.22 of a circular aperture
    "C14-M4": _m("C14-M4", ("slit",), half=True),  # halves instead of doubling: lambda D / 2a
    "C14-M5": _m("C14-M5"),  # thinks a longer wavelength gives narrower bands
    "C14-M6": _m("C14-M6"),  # thinks red light gives no diffraction bands
    "C14-M7": _m("C14-M7"),  # thinks the band width depends only on the slit (or only on the light)
    "C14-M8": _m("C14-M8", ("lam",), y_as_width=True),  # takes the first minimum's distance as the full central width
    "C14-M9": _m("C14-M9", ("lam",), half_lam=True),  # uses a sin(theta) = lambda/2 for the first minimum
    "C14-M10": _m("C14-M10"),  # takes the width as proportional to the slit width
    "C14-M11": _m("C14-M11"),  # takes the width as proportional to 1/a^2
}
