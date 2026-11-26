"""C08 The Davisson-Germer experiment: answer models (the key, and one per misconception).

Electrons accelerated through V have lambda = h / sqrt(2 m e V); scattered from rows of nickel atoms spaced d apart,
the first diffraction peak is at angle phi with lambda = d sin(phi). params["ask"]:
  "lam_d":   lambda, in angstrom, from spacing d_A and peak angle deg (inputs d_A, deg);
  "lam_V":   the de Broglie wavelength, in angstrom, of electrons through V volt (input V);
  "why":     what the experiment established (named);
  "crystal": why a crystal shows electron diffraction (named);
  "higherV": what a higher accelerating voltage does to the peak (named).
"""
from sympy import Rational, Symbol, cos, pi, sin, sqrt

from physics import BOOK, sig

h, c, e, me = BOOK["h"], BOOK["c"], BOOK["e"], BOOK["m_e"]
NAMED = {
    "why": {"key": "electron_waves", "C08-M1": "light_particles", "C08-M2": "electron_charge", "C08-M3": "photoemission"},
    "crystal": {"key": "spacing_matches", "C08-M10": "lens_field", "C08-M11": "metals_only", "C08-M12": "gaps_larger"},
    "higherV": {"key": "smaller_angle", "C08-M13": "larger_angle", "C08-M14": "same_angle", "C08-M15": "peak_gone"},
}
A = Rational(1, 10**10)


def _solve(v, p, *, use_cos=False, d_only=False, two_d=False, no_2=False, lin_V=False, photon=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "lam_d":
        d, th = v["d_A"], v["deg"] * pi / 180
        if d_only:
            return sig(d, n)
        if two_d:
            return sig(2 * d * sin(th), n)
        return sig(d * (cos(th) if use_cos else sin(th)), n)
    if ask == "lam_V":
        K = e * v["V"]
        if photon:
            return sig(h * c / K / A, n)
        lam = h / sqrt((1 if no_2 else 2) * me * K)
        if lin_V:
            lam = lam / sqrt(v["V"])
        return sig(lam / A, n)
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
    "C08-M1": _m("C08-M1"),  # thinks it showed light is particles
    "C08-M2": _m("C08-M2"),  # mixes it up with measuring the electron's charge
    "C08-M3": _m("C08-M3"),  # mixes it up with the photoelectric effect
    "C08-M4": _m("C08-M4", ("lam_d",), use_cos=True),  # uses cos instead of sin
    "C08-M5": _m("C08-M5", ("lam_d",), d_only=True),  # takes the spacing as the wavelength
    "C08-M6": _m("C08-M6", ("lam_d",), two_d=True),  # uses 2 d sin(phi)
    "C08-M7": _m("C08-M7", ("lam_V",), no_2=True),  # forgets the 2 in sqrt(2meV)
    "C08-M8": _m("C08-M8", ("lam_V",), lin_V=True),  # divides by V where sqrt(V) belongs
    "C08-M9": _m("C08-M9", ("lam_V",), photon=True),  # uses the photon's hc / E
    "C08-M10": _m("C08-M10"),  # thinks the crystal's field bends electrons like a lens
    "C08-M11": _m("C08-M11"),  # thinks electrons diffract only from metals
    "C08-M12": _m("C08-M12"),  # thinks the crystal's gaps are far larger than lambda
    "C08-M13": _m("C08-M13"),  # thinks the peak moves to a larger angle
    "C08-M14": _m("C08-M14"),  # thinks the angle does not change
    "C08-M15": _m("C08-M15"),  # thinks the peak disappears
}
