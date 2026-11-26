"""C08 Coherent sources and conditions for interference: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "setup":  which arrangement gives a good, steady pattern (a named answer);
  "bulbs":  why two independent lamps give no fringes (a named answer);
  "dark":   the path difference for destructive interference (a named answer);
  "order":  what lies at a point with path difference dl_mm (in mm) for wavelength lam_A (in angstrom), as a
            Symbol "<bright|dark>_<order>";
  "film":   why a thin oil film shows colours (a named answer).

The key for "order" works from the conditions: bright where the path difference is n lambda, dark where it is
(2n - 1) lambda / 2, n = 1, 2, 3, ... for the dark fringes on one side of the centre.
"""
from sympy import Rational, Symbol, nsimplify

NAMED = {
    "setup": {"key": "one_source_narrow", "C08-M1": "two_lamps", "C08-M2": "equal_brightness", "C08-M10": "wide_slits"},
    "bulbs": {"key": "random_phase", "C08-M1": "freq_differs", "C08-M2": "brightness_differs", "C08-M10": "too_large"},
    "dark": {"key": "odd_half_lambda", "C08-M3": "n_lambda", "C08-M4": "n_half_lambda", "C08-M6": "odd_pi"},
    "film": {"key": "two_surfaces", "C08-M7": "dispersion", "C08-M8": "wavefront", "C08-M9": "pigment"},
}


def _order(v, mode=None):
    m = nsimplify(v["dl_mm"] * 10**7 / v["lam_A"])  # path difference in wavelengths (1 mm = 10^7 angstrom)
    if mode == "half":  # dark at every multiple of lambda/2
        return Symbol(f"dark_{m * 2}")
    if (2 * m).is_integer and not m.is_integer:
        n = m + Rational(1, 2)  # (2n - 1)/2 = m
        if mode == "swap":
            return Symbol(f"bright_{n}")
        if mode == "count0":
            return Symbol(f"dark_{n - 1}")  # (2n + 1)/2 = m, counting from n = 0
        return Symbol(f"dark_{n}")
    if m.is_integer:
        return Symbol(f"{'dark' if mode == 'swap' else 'bright'}_{m}")
    raise ValueError("neither bright nor dark")


def key(v, p):
    if p["ask"] == "order":
        return _order(v)
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid, mode=None):
    def model(v, p):
        if p["ask"] == "order":
            if mode is None:
                raise ValueError("does not apply to this item")
            return _order(v, mode)
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C08-M1": _m("C08-M1"),  # same frequency is enough for coherence
    "C08-M2": _m("C08-M2"),  # coherence means equal intensity
    "C08-M3": _m("C08-M3", "swap"),  # swaps the bright and dark conditions
    "C08-M4": _m("C08-M4", "half"),  # dark at every multiple of lambda/2
    "C08-M5": _m("C08-M5", "count0"),  # counts dark fringes from n = 0
    "C08-M6": _m("C08-M6"),  # gives the phase condition as a path difference
    "C08-M7": _m("C08-M7"),  # thin-film colours are dispersion
    "C08-M8": _m("C08-M8"),  # a thin film divides the wavefront
    "C08-M9": _m("C08-M9"),  # thin-film colours are the oil's pigment
    "C08-M10": _m("C08-M10"),  # wider slits or larger sources give better fringes
}
