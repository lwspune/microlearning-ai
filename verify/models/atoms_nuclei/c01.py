"""C01 Thomson's and Rutherford's models: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "K":     the starting kinetic energy, in MeV, of an alpha particle that just reaches a nucleus's surface
           (inputs Z, rn_fm = nucleus radius, ra_fm = alpha radius; the centres are rn + ra apart);
  "r0":    the distance of closest approach, in fm, of an alpha particle fired head-on (inputs Z, m in kg,
           u = speed in m/s, R_fm = the nucleus's radius, given in the stem);
  "ratio": the new distance of closest approach, as a multiple of r_0, when the speed is multiplied by f;
  "pattern", "nucleus", "fate": named answers.

The key works from energy conservation: far away the energy is all kinetic; at closest approach it is all
potential, K = k (2e)(Ze) / r, with k = 1/(4 pi eps0) = 9e9 (the book's value).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

NAMED = {
    "pattern": {"key": "most_through_few_back", "C01-M8": "most_back", "C01-M9": "none_through", "C01-M10": "all_slight"},
    "nucleus": {"key": "tiny_dense_nucleus", "C01-M11": "electrons_push", "C01-M10": "charge_spread", "C01-M9": "solid_atom"},
    "fate": {"key": "spiral_in", "C01-M12": "no_radiation", "C01-M13": "line_spectrum_atom", "C01-M14": "steady_orbit"},
}

FM = Rational(1, 10**15)
MEV = BOOK["e"] * 10**6


def _solve(v, p, *, q=2, nucleus_only=False, no_half=False, inv_v=False, grows=False, fixed=False):
    ask, n = p["ask"], p.get("sf", 3)
    k, e = BOOK["k_e"], BOOK["e"]
    if ask == "K":
        r = v["rn_fm"] if nucleus_only else v["rn_fm"] + v["ra_fm"]
        return sig(k * q * v["Z"] * e**2 / (r * FM) / MEV, n)
    if ask == "r0":
        if fixed:
            return sig(v["R_fm"], n)  # gives the nucleus's own size
        K = (1 if no_half else Rational(1, 2)) * v["m"] * v["u"] ** 2
        return sig(k * q * v["Z"] * e**2 / K / FM, n)
    if ask == "ratio":
        r0, f = Symbol("r_0"), v["f"]
        if fixed:
            return r0
        if grows:
            return f * r0  # a faster particle stops farther away
        return r0 / f if inv_v else r0 / f**2
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
    "C01-M1": _m("C01-M1", ("K", "r0"), q=1),  # takes the alpha particle's charge as e
    "C01-M2": _m("C01-M2", ("K",), nucleus_only=True),  # takes the nucleus's radius alone as the distance between centres
    "C01-M3": _m("C01-M3", ("K", "r0"), q=4),  # takes the alpha particle's charge as 4e, its mass number
    "C01-M4": _m("C01-M4", ("r0",), no_half=True),  # drops the 1/2 in the kinetic energy
    "C01-M5": _m("C01-M5", ("ratio",), inv_v=True),  # takes r0 inversely proportional to the speed
    "C01-M6": _m("C01-M6", ("ratio",), grows=True),  # thinks a faster particle stops farther away
    "C01-M7": _m("C01-M7", ("r0", "ratio"), fixed=True),  # takes the closest approach as the nucleus's own fixed size
    "C01-M8": _m("C01-M8"),  # thinks most alpha particles bounced back
    "C01-M9": _m("C01-M9"),  # thinks atoms are solid, so the foil stops alpha particles
    "C01-M10": _m("C01-M10"),  # holds Thomson's model: positive charge spread through the atom
    "C01-M11": _m("C01-M11"),  # thinks the foil's electrons turn alpha particles back
    "C01-M12": _m("C01-M12"),  # thinks an electron at constant speed in a circle does not accelerate
    "C01-M13": _m("C01-M13"),  # credits Rutherford's model with line spectra
    "C01-M14": _m("C01-M14"),  # thinks the electron can radiate yet keep its orbit
}
