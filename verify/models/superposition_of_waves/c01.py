"""C01 Equation of a progressive wave: answer models (the key, and one per misconception).

The wave is y = A sin(w t - k x) (the book's y = A sin 2 pi (t/T - x/lambda), expanded). params["ask"] picks the quantity:
  "lam": wavelength, in m (inputs w, k; for M2 also ld, the bracket's x-denominator, when the factor is not 2 pi);
  "v":   wave speed, in m/s, of a wave written in cm (inputs w, k, scale = metres per unit of x);
  "vq":  wave speed, in m/s, from tq_ms (mean to extreme) and d_cm (two neighbouring points at the mean position);
  "dir": direction and speed of y = A sin(Bx + Ct), A, B, C > 0 (a named answer);
  "axis": which equation travels along +y (a named answer).

The key works from the definitions: k = 2 pi / lambda, w = 2 pi n, v = w / k = n lambda; a particle takes T/4 from the
mean position to an extreme, and neighbouring particles at the mean position are lambda/2 apart.
"""
from sympy import Symbol, pi

from physics import sig

NAMED = {
    "dir": {"key": "negx_CB", "C01-M9": "posx_CB", "C01-M3": "negx_BC", "C01-M10": "posy_CB"},
    "axis": {"key": "x_ky_minus", "C01-M9": "x_ky_plus", "C01-M10": "y_kx_minus", "C01-M11": "y_standing"},
}


def _solve(v, p, *, no_2pi=False, denom=False, swap=False, unit=False, coeff_t=False, full=False, lam_d=False, half=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "lam":
        if denom:
            return sig(v["ld"], n)  # reads the bracket's denominator as lambda
        k = v["w"] if swap else v["k"]
        return sig(1 / k if no_2pi else 2 * pi / k, n)
    if ask == "v":
        s = 1 if unit else v["scale"]
        if coeff_t:
            return sig(v["w"] * s, n)
        return sig((v["k"] / v["w"] if swap else v["w"] / v["k"]) * s, n)
    if ask == "vq":
        tq, d = v["tq_ms"] / 1000, v["d_cm"] / 100
        T = tq if full else (2 * tq if half else 4 * tq)
        lam = d if lam_d else 2 * d
        return sig(lam / T, n)
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
    "C01-M1": _m("C01-M1", ("lam",), no_2pi=True),  # lambda = 1/k
    "C01-M2": _m("C01-M2", ("lam",), denom=True),  # reads the bracket's denominator as lambda though the factor is not 2 pi
    "C01-M3": _m("C01-M3", ("lam", "v"), swap=True),  # swaps the roles of w and k
    "C01-M4": _m("C01-M4", ("v",), unit=True),  # forgets that x is in cm
    "C01-M5": _m("C01-M5", ("v",), coeff_t=True),  # takes the coefficient of t as the speed
    "C01-M6": _m("C01-M6", ("vq",), full=True),  # takes mean to extreme as a whole period
    "C01-M7": _m("C01-M7", ("vq",), lam_d=True),  # takes neighbouring mean-position points as a wavelength apart
    "C01-M8": _m("C01-M8", ("vq",), half=True),  # takes mean to extreme as half a period
    "C01-M9": _m("C01-M9"),  # reads a plus sign as travel in the positive direction
    "C01-M10": _m("C01-M10"),  # takes the wave to travel along the displacement axis
    "C01-M11": _m("C01-M11"),  # takes a stationary-wave equation for a travelling wave
}
