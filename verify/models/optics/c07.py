"""C07 Defects of lenses: answer models (the key, and one per misconception).

Longitudinal chromatic aberration of a thin lens: |f_R - f_V| with 1/f = (n - 1)(1/R1 - 1/R2) for each colour
(R1, R2 signed: a double convex lens has R1 > 0 > R2; a concavo-convex meniscus has both of one sign).
Achromatic pair in contact: f2 / f1 = -omega2 / omega1.
params["ask"]:
  "chrom": chromatic aberration in cm (inputs nR, nV, R1, R2 signed);
  "achro": focal length of the second lens for an achromatic pair (inputs w1, f1, w2);
  "mirror", "reduce": named answers.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "mirror": {"key": "chromatic", "C07-M4": "spherical", "C07-M5": "none_free", "C07-M6": "all_free"},
    "reduce": {"key": "curved_to_rays", "C07-M7": "flat_to_rays", "C07-M8": "wider_aperture", "C07-M9": "thicker_lens"},
}


def _solve(v, p, *, flip=False, use_n=False, recip=False, pos=False, inv=False, equal=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "chrom":
        R2 = -v["R2"] if flip else v["R2"]
        K = 1 / v["R1"] - 1 / R2
        aR, aV = (v["nR"], v["nV"]) if use_n else (v["nR"] - 1, v["nV"] - 1)
        if recip:
            return sig(abs(1 / ((aV - aR) * K)), n)
        return sig(abs(1 / (aR * K) - 1 / (aV * K)), n)
    if ask == "achro":
        w1, f1, w2 = v["w1"], v["f1"], v["w2"]
        if equal:
            return sig(-f1, n)
        f2 = w1 * f1 / w2 if inv else w2 * f1 / w1
        return sig(f2 if pos else -f2, n)
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
    "C07-M1": _m("C07-M1", ("chrom",), flip=True),  # gives R2 the wrong sign for the lens's shape
    "C07-M2": _m("C07-M2", ("chrom",), use_n=True),  # uses n instead of n - 1
    "C07-M3": _m("C07-M3", ("chrom",), recip=True),  # inverts the difference of the powers
    "C07-M4": _m("C07-M4"),  # thinks spherical aberration needs refraction, so mirrors are free of it
    "C07-M5": _m("C07-M5"),  # thinks mirrors suffer from every lens defect
    "C07-M6": _m("C07-M6"),  # thinks mirrors form perfect images
    "C07-M7": _m("C07-M7"),  # turns the flat face towards the incident rays
    "C07-M8": _m("C07-M8"),  # thinks a wider aperture sharpens the image
    "C07-M9": _m("C07-M9"),  # thinks a thicker, more curved lens helps
    "C07-M10": _m("C07-M10", ("achro",), pos=True),  # takes the second lens as converging too
    "C07-M11": _m("C07-M11", ("achro",), inv=True),  # inverts the ratio of dispersive powers
    "C07-M12": _m("C07-M12", ("achro",), equal=True),  # thinks the second lens must cancel the first: f2 = -f1
}
