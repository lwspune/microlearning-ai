"""C09 Young's double slit experiment: answer models (the key, and one per misconception).

Path difference at a point y from the centre: yd/D. Bright fringes at y_n = n lambda D / d, dark at
(2n - 1) lambda D / 2d, fringe width W = lambda D / d; in a liquid of refractive index n the wavelength, and so W,
falls to 1/n of its value in air.

params["ask"] picks the question (lengths in SI inside the model; answers in mm):
  "d_from_W": slit separation from a span of N fringe widths (inputs lam, D, span_cm, N);
  "dark":     distance of the n-th dark fringe from the centre (inputs lam, D_cm, d_mm, n);
  "water":    fringe width with the set-up in water (inputs lam, d_mm, D, mu);
  "double":   which single change doubles W (named);
  "white":    what white light gives (named).
"""
from sympy import Integer, Symbol

from physics import sig

NAMED = {
    "double": {"key": "double_lam", "C09-M4": "halve_lam", "C09-M7": "halve_D", "C09-M5": "liquid_2"},
    "white": {"key": "white_centre_violet_in", "C09-M4": "white_centre_red_in", "C09-M8": "no_fringes",
              "C09-M10": "all_white"},
}


def _solve(v, p, *, spread=False, half=False, bright=False, raw=False, times_n=False, same=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = Integer(2) if half else Integer(1)  # W = lambda D / (k d)
    if ask == "d_from_W":
        span = v["span_cm"] * (1 if raw else Integer(1) / 100)
        W = span if spread else span / v["N"]
        return sig(v["lam"] * v["D"] / (k * W) * 1000, n)
    if ask == "dark":
        D = v["D_cm"] * (1 if raw else Integer(1) / 100)
        W = v["lam"] * D / (k * v["d_mm"] / 1000)
        m = v["n"] if bright else (2 * v["n"] - 1) / Integer(2)
        return sig(m * W * 1000, n)
    if ask == "water":
        W = v["lam"] * v["D"] / (k * v["d_mm"] / 1000)
        if times_n:
            W = W * v["mu"]
        elif not same:
            W = W / v["mu"]
        return sig(W * 1000, n)
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
    "C09-M1": _m("C09-M1", ("d_from_W",), spread=True),  # takes a span of several fringes as one fringe width
    "C09-M2": _m("C09-M2", ("d_from_W", "dark", "water"), half=True),  # takes W = lambda D / 2d
    "C09-M3": _m("C09-M3", ("dark",), bright=True),  # puts the n-th dark fringe at n lambda D / d
    "C09-M4": _m("C09-M4"),  # thinks a shorter wavelength gives wider fringes
    "C09-M5": _m("C09-M5", ("water",), times_n=True),  # multiplies W by the refractive index in a liquid
    "C09-M6": _m("C09-M6", ("water",), same=True),  # thinks a liquid leaves W unchanged
    "C09-M7": _m("C09-M7"),  # swaps d and D in W = lambda D / d
    "C09-M8": _m("C09-M8"),  # thinks white light, a mixture, gives no fringes
    "C09-M9": _m("C09-M9", ("d_from_W", "dark"), raw=True),  # leaves a length in cm unconverted
    "C09-M10": _m("C09-M10"),  # thinks the fringe width is the same for every colour
}
