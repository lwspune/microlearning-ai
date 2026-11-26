"""C11 Reflecting telescopes: answer models (the key, and one per misconception).

Magnifying power in normal adjustment: m = f_o / f_e, with f_o = R / 2 for the objective mirror.
Light gathered is proportional to the objective's area, so to D^2.
params["ask"]:
  "mag": magnifying power from the mirror's radius of curvature R (in m) and the eyepiece's f_e (in cm);
  "light": how many times as much light an objective of diameter D1 (in m) gathers as one of D2 (in cm);
  "prefer", "chrom", "secondary", "aperture": named answers.
"""
from sympy import Integer, Symbol

from physics import sig

NAMED = {
    # why big telescopes use a mirror objective
    "prefer": {"key": "no_colour_big", "C11-M4": "less_colour", "C11-M5": "more_mag", "C11-M6": "secondary_fixes"},
    # is the image of a reflecting telescope free of chromatic aberration, and why
    "chrom": {"key": "refraction_only", "C11-M4": "mirror_disperses", "C11-M8": "shape_cures",
              "C11-M6": "secondary_cancels"},
    # the job of a Cassegrain telescope's secondary mirror
    "secondary": {"key": "back_through_hole", "C11-M6": "fix_spherical", "C11-M4": "fix_chromatic",
                  "C11-M10": "sideways"},
    # why the objective's aperture is large
    "aperture": {"key": "light_D2_resolve", "C11-M5": "aperture_mag", "C11-M1": "light_D",
                 "C11-M9": "aperture_nothing"},
}


def _mag(v, f_is_R=False, flip=False, no_convert=False):
    fo = v["R"] if f_is_R else v["R"] / 2  # m
    fe = v["fe"] if no_convert else v["fe"] / 100  # cm to m, unless the slip
    return sig(fe / fo if flip else fo / fe)


def _light(v, square=True, no_convert=False, same=False):
    if same:  # the objective's size changes nothing
        return Integer(1)
    q = v["D1"] / v["D2"] if no_convert else v["D1"] * 100 / v["D2"]
    return sig(q**2 if square else q)


NUMERIC = {"mag": _mag, "light": _light}


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return NUMERIC[p["ask"]](v)


def _m(mid, **kw):
    """kw: {ask: options for that numeric ask}; named asks use NAMED."""
    def model(v, p):
        ask = p["ask"]
        if ask in NAMED:
            if mid not in NAMED[ask]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[ask][mid])
        if ask not in kw:
            raise ValueError("does not apply to this item")
        return NUMERIC[ask](v, **kw[ask])
    return model


MODELS = {
    "key": key,
    "C11-M1": _m("C11-M1", light=dict(square=False)),  # light gathered goes as D, not D^2
    "C11-M2": _m("C11-M2", mag=dict(f_is_R=True)),  # takes the mirror's focal length as R
    "C11-M3": _m("C11-M3", mag=dict(flip=True)),  # f_e / f_o
    "C11-M4": _m("C11-M4"),  # thinks a mirror has chromatic aberration too
    "C11-M5": _m("C11-M5"),  # thinks a wider objective magnifies more
    "C11-M6": _m("C11-M6"),  # thinks the secondary mirror corrects the primary's aberrations
    "C11-M7": _m("C11-M7", mag=dict(no_convert=True), light=dict(no_convert=True)),  # mixes m and cm
    "C11-M8": _m("C11-M8"),  # mixes up chromatic and spherical aberration
    "C11-M9": _m("C11-M9", light=dict(same=True)),  # thinks the objective's size changes nothing
    "C11-M10": _m("C11-M10"),  # mixes up the Cassegrain and Newtonian designs
}
