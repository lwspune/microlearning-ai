"""C05 Stopping potential against frequency: answer models (the key, and one per misconception).

e V0 = h nu - phi0, so V0 = (h/e) nu - phi0/e = (hc/e)(1/lambda) - phi0/e. params["ask"]:
  "h_slope":  Planck's constant, in J s, from the slope of the V0-nu line (input slope, in V s);
  "lam2":     the second source's wavelength, in angstrom, from (lam1_A, V1) and a second stopping potential V2;
  "h_two":    Planck's constant, in J s, from two readings (lam1_A, V1) and (lam2_A, V2);
  "poly":     what sets V0 for polychromatic light (named);
  "lam_dep":  how V0 depends on lambda (named);
  "intercept": what the V0-axis intercept of the V0-nu line stands for (named).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

h, c, e = BOOK["h"], BOOK["c"], BOOK["e"]
A = Rational(1, 10**10)
NAMED = {
    "poly": {"key": "shortest_wavelength", "C05-M6": "average_wavelength", "C05-M7": "longest_wavelength",
             "C05-M8": "no_wavelength_dependence"},
    "lam_dep": {"key": "linear_in_inverse", "C05-M4": "proportional_to_inverse", "C05-M5": "linear_in_lambda",
                "C05-M8": "independent_of_lambda"},
    "intercept": {"key": "minus_phi_over_e", "C05-M10": "h_over_e", "C05-M4": "zero_through_origin",
                  "C05-M11": "threshold_frequency"},
}


def _solve(v, p, *, slope_is_h=False, over_e=False, other_slope=False, origin=False, lam_lin=False, flip=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "h_slope":
        s = v["slope"]
        if slope_is_h:
            return sig(s, n)
        if over_e:
            return sig(s / e, n)
        return sig(s * e / c if other_slope else s * e, n)  # other_slope: takes the slope as hc/e
    if ask == "lam2":
        l1, V1, V2 = v["lam1_A"], v["V1"], v["V2"]
        if origin:  # V0 proportional to 1/lambda
            return sig(l1 * V1 / V2, n)
        if lam_lin:  # V0 proportional to lambda
            return sig(l1 * V2 / V1, n)
        E1 = h * c / (l1 * A)
        if flip:  # e V0 = phi0 - h nu
            phi = E1 + e * V1
            E2 = phi - e * V2
        else:
            phi = E1 - e * V1
            E2 = phi + e * V2
        return sig(h * c / E2 / A, n)
    if ask == "h_two":
        l1, l2 = v["lam1_A"] * A, v["lam2_A"] * A
        if origin:  # one reading, line through the origin: e V1 = h c / lambda1
            return sig(e * v["V1"] * l1 / c, n)
        slope = (v["V1"] - v["V2"]) / (1 / l1 - 1 / l2)  # V0 against 1/lambda: hc/e
        if slope_is_h:
            return sig(slope, n)
        return sig(slope * e if other_slope else slope * e / c, n)  # other_slope: takes this slope as h/e
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
    "C05-M1": _m("C05-M1", ("h_slope", "h_two"), slope_is_h=True),  # takes the slope itself as h
    "C05-M2": _m("C05-M2", ("h_slope",), over_e=True),  # divides the slope by e
    "C05-M3": _m("C05-M3", ("h_slope", "h_two"), other_slope=True),  # mixes up the slopes h/e (V0-nu) and hc/e (V0-1/lambda)
    "C05-M4": _m("C05-M4", ("lam2", "h_two"), origin=True),  # takes V0 proportional to nu, through the origin
    "C05-M5": _m("C05-M5", ("lam2",), lam_lin=True),  # takes V0 to rise in step with lambda
    "C05-M6": _m("C05-M6"),  # takes the average wavelength to set V0
    "C05-M7": _m("C05-M7"),  # takes the longest wavelength to set V0
    "C05-M8": _m("C05-M8"),  # thinks V0 does not depend on the wavelength
    "C05-M9": _m("C05-M9", ("lam2",), flip=True),  # writes e V0 = phi0 - h nu
    "C05-M10": _m("C05-M10"),  # swaps the slope and the intercept
    "C05-M11": _m("C05-M11"),  # mixes up the two intercepts
}
