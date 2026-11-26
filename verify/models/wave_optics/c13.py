"""C13 Diffraction at a single slit: answer models (the key, and one per misconception).

Minima: a sin(theta) = n lambda (n = 1, 2, ...), found by dividing the slit into 2n equal parts whose wavelets cancel in
pairs; secondary maxima near a sin(theta) = (n + 1/2) lambda. Angles are exact: no small-angle step where theta is large.

params["ask"]:
  "ratio":  a / lambda for the first minimum at theta_deg (input theta_deg);
  "max1":   angle, in degrees, of the n-th secondary maximum (inputs a_um, lam_nm, n);
  "kinds":  diffraction and its two kinds (named);
  "differ": a property of single-slit diffraction that double-slit interference lacks (named);
  "when":   when diffraction is noticeable (named).
"""
from sympy import Integer, Rational, Symbol, asin, pi, sin

from physics import sig

NAMED = {
    "kinds": {"key": "bend_fraun_inf", "C13-M4": "bend_fraun_finite", "C13-M8": "reflect_edges", "C13-M5": "bend_large_only"},
    "differ": {"key": "central_double", "C13-M6": "equal_bands", "C13-M7": "two_sources", "C13-M3": "n_lambda_bright"},
    "when": {"key": "comparable", "C13-M5": "much_wider", "C13-M8": "shiny_edges", "C13-M7": "two_coherent"},
}


def _solve(v, p, *, small=False, half=False, swap=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "ratio":
        th = v["theta_deg"] * pi / 180
        m = Rational(1, 2) if half else (Rational(3, 2) if swap else Integer(1))  # path difference / lambda at the first minimum
        return sig(m / (th if small else sin(th)), n)
    if ask == "max1":
        k = v["n"] + Rational(1, 2)
        if swap:
            k = v["n"]  # takes a sin(theta) = n lambda as a bright band
        elif half:
            k = k / 2
        s = k * v["lam_nm"] * Integer(10) ** -9 / (v["a_um"] * Integer(10) ** -6)
        theta = s if small else asin(s)  # small: theta (rad) = sin(theta)
        return sig(theta * 180 / pi, n)
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
    "C13-M1": _m("C13-M1", ("ratio", "max1"), small=True),  # uses sin(theta) = theta at a large angle
    "C13-M2": _m("C13-M2", ("ratio", "max1"), half=True),  # halves the path difference (lambda/2 at the first minimum)
    "C13-M3": _m("C13-M3", ("ratio", "max1"), swap=True),  # swaps the dark and bright conditions, as in interference
    "C13-M4": _m("C13-M4"),  # swaps Fresnel and Fraunhofer
    "C13-M5": _m("C13-M5"),  # thinks diffraction needs an opening much wider than lambda
    "C13-M6": _m("C13-M6"),  # thinks diffraction bands are equally wide and bright
    "C13-M7": _m("C13-M7"),  # thinks diffraction needs two coherent sources
    "C13-M8": _m("C13-M8"),  # thinks diffraction is reflection at the slit's edges
}
