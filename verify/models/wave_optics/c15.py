"""C15 Resolving power: answer models (the key, and one per misconception).

Telescope: limit of resolution theta = 1.22 lambda / D (D the objective's diameter); resolving power 1/theta.
Microscope: minimum distance d_min = 0.61 lambda / sin(alpha). params["ask"]:
  "tele":   theta, in rad, for lambda_A and an objective D_m metres across (inputs lam_A, D_m);
  "tele_in": theta, in rad, for lambda_A and an objective D_in inches across (inputs lam_A, D_in);
  "micro":  d_min, in m, for lambda_nm and half-angle alpha_deg (inputs lam_nm, alpha_deg);
  "better": what raises a telescope's resolving power (a named answer);
  "rayleigh": Rayleigh's criterion (a named answer).
"""
from sympy import Rational, Symbol, pi, sin

from physics import sig

NAMED = {
    "better": {"key": "wide_short", "C15-M7": "narrow_short", "C15-M8": "wide_long", "C15-M9": "eyepiece"},
    "rayleigh": {"key": "max_on_min", "C15-M10": "coincide", "C15-M11": "max_on_secondary", "C15-M12": "no_overlap"},
}
K = Rational(122, 100)


def _solve(v, p, *, no_k=False, radius=False, rp=False, inches=False, micro_k=False, times_sin=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 1 if no_k else K
    if ask in ("tele", "tele_in"):
        lam = v["lam_A"] * Rational(1, 10**10)
        D = v["D_m"] if ask == "tele" else v["D_in"] * (1 if inches else Rational(254, 10000))
        if radius:
            D = D / 2
        th = k * lam / D
        return sig(1 / th if rp else th, n)
    if ask == "micro":
        lam = v["lam_nm"] * Rational(1, 10**9)
        s = sin(v["alpha_deg"] * pi / 180)
        c = 1 if no_k else (K if micro_k else K / 2)
        return sig(c * lam * s if times_sin else c * lam / s, n)
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
    "C15-M1": _m("C15-M1", ("tele", "tele_in", "micro"), no_k=True),  # leaves out the 1.22 (or 0.61)
    "C15-M2": _m("C15-M2", ("tele", "tele_in"), radius=True),  # uses the radius of the objective
    "C15-M3": _m("C15-M3", ("tele",), rp=True),  # gives the resolving power instead of the limit
    "C15-M4": _m("C15-M4", ("tele_in",), inches=True),  # leaves the diameter in inches
    "C15-M5": _m("C15-M5", ("micro",), micro_k=True),  # uses 1.22 for the microscope
    "C15-M6": _m("C15-M6", ("micro",), times_sin=True),  # multiplies by sin(alpha)
    "C15-M7": _m("C15-M7"),  # thinks a smaller objective resolves better
    "C15-M8": _m("C15-M8"),  # thinks a longer wavelength resolves better
    "C15-M9": _m("C15-M9"),  # thinks more magnification resolves better
    "C15-M10": _m("C15-M10"),  # takes "just resolved" as the central maxima coinciding
    "C15-M11": _m("C15-M11"),  # puts one central maximum on the other's secondary maximum
    "C15-M12": _m("C15-M12"),  # thinks the two patterns must not overlap at all
}
