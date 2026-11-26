"""C02 Field of a charged sphere: answer models (the key, and one per misconception).

A charged conducting sphere (or shell) of radius R: outside E = q / (4 pi eps0 K r^2), as if the charge were at the
centre; inside E = 0; at the surface E = sigma / eps0. params["ask"]:
  "out":   E, in N/C, at r_cm from the centre (inputs q_uC, R_cm, r_cm; K defaults to 1);
  "in":    E, in N/C, at r_cm inside (inputs q_uC, R_cm, r_cm);
  "sigma": the field outside in terms of sigma (a named answer);
  "surf":  E, in N/C, at the surface from sigma (inputs sigma, R_cm).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

NAMED = {"sigma": {"key": "R_over_r", "C02-M7": "r_over_R", "C02-M8": "R_over_r2", "C02-M9": "eps_over_sigma"}}
k, eps0 = BOOK["k_e"], BOOK["eps0"]
cm, uC = Rational(1, 100), Rational(1, 10**6)


def _solve(v, p, *, from_surface=False, one_over_r=False, in_cm=False, point_inside=False, solid=False,
           surface_inside=False, sheet=False, k_sigma=False, flux=False, times_K=False):
    ask, n = p["ask"], p.get("sf", 3)
    s = 1 if in_cm else cm
    q, R = v.get("q_uC", 0) * uC, v["R_cm"] * s
    K = v.get("K", 1)
    if ask == "out":
        r = v["r_cm"] * s - (R if from_surface else 0)
        Keff = 1 / K if times_K else K
        return sig(k * q / (Keff * (r if one_over_r else r**2)), n)
    if ask == "in":
        r = v["r_cm"] * s
        if point_inside:
            return sig(k * q / r**2, n)
        if solid:
            return sig(k * q * r / R**3, n)
        if surface_inside:
            return sig(k * q / R**2, n)
        return sig(0, n)
    if ask == "surf":
        sg = v["sigma"]
        if sheet:
            return sig(sg / (2 * eps0), n)
        if k_sigma:
            return sig(k * sg, n)
        if flux:
            return sig(sg * 4 * pi * R**2 / eps0, n)
        return sig(sg / eps0, n)
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
    "C02-M1": _m("C02-M1", ("out",), from_surface=True),  # measures r from the surface, not the centre
    "C02-M2": _m("C02-M2", ("out",), one_over_r=True),  # uses 1/r instead of 1/r^2
    "C02-M3": _m("C02-M3", ("out",), in_cm=True),  # leaves the distances in cm
    "C02-M4": _m("C02-M4", ("in",), point_inside=True),  # uses kq/r^2 at a point inside
    "C02-M5": _m("C02-M5", ("in",), solid=True),  # treats the conductor as a uniformly charged solid
    "C02-M6": _m("C02-M6", ("in",), surface_inside=True),  # takes the surface value inside
    "C02-M7": _m("C02-M7"),  # turns R/r upside down
    "C02-M8": _m("C02-M8"),  # squares r twice when substituting q = 4 pi R^2 sigma
    "C02-M9": _m("C02-M9"),  # turns both sigma/eps and R/r upside down
    "C02-M10": _m("C02-M10", ("surf",), sheet=True),  # uses the sheet's sigma / 2 eps0
    "C02-M11": _m("C02-M11", ("surf",), k_sigma=True),  # uses k sigma
    "C02-M12": _m("C02-M12", ("surf",), flux=True),  # stops at the flux, forgetting to divide by the area
    "C02-M13": _m("C02-M13", ("out",), times_K=True),  # multiplies by the dielectric constant instead of dividing
}
