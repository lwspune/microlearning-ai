"""C11 Shifting the fringes with a thin sheet: answer models (the key, and one per misconception).

A sheet of thickness t and refractive index mu over one slit replaces a thickness t of air, adding the optical path
(mu - 1)t to that beam. The point of zero path difference moves to where yd/D = (mu - 1)t, so the whole pattern shifts
towards the covered slit by (mu - 1)tD/d = (mu - 1)tW/lambda; the fringe width is unchanged and the number of fringes
that pass a point is (mu - 1)t/lambda.

params["ask"]:
  "t":     thickness, in micrometres, from the shift y_mm, fringe width W_mm, lam, mu;
  "shift": shift, in mm, from t_um, mu, D, d_mm;
  "count": number of fringes shifted, from t_um, mu, lam;
  "both":  a sheet over both slits (named);
  "one":   a sheet over the upper slit (named).
"""
from sympy import Integer, Symbol

from physics import sig

NAMED = {
    "both": {"key": "unchanged", "C11-M4": "shifts", "C11-M3": "narrower", "C11-M8": "wider"},
    "one": {"key": "up_same", "C11-M2": "down_same", "C11-M3": "up_narrower", "C11-M8": "up_wider"},
}


def _extra(mu, *, whole=False, geom=False):
    """The factor multiplying t in the added path."""
    if geom:
        return Integer(1)
    return mu if whole else mu - 1


def _solve(v, p, *, whole=False, geom=False, half=False, path=False):
    ask, n = p["ask"], p.get("sf", 3)
    f = _extra(v["mu"], whole=whole, geom=geom)
    if ask == "t":
        N = v["y_mm"] / v["W_mm"]  # fringe widths in the shift
        added = N * v["lam"] / (2 if half else 1)  # the path difference the sheet must add
        return sig(added / f * 10**6, n)
    if ask == "shift":
        t = v["t_um"] * Integer(10) ** -6
        if path:
            return sig(f * t * 1000, n)  # the added path itself, in mm
        return sig(f * t * v["D"] / (v["d_mm"] / 1000) * 1000, n)
    if ask == "count":
        t = v["t_um"] * Integer(10) ** -6
        return sig(f * t / (v["lam"] / (2 if half else 1)), n)
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
    "C11-M1": _m("C11-M1", ("t", "shift", "count"), whole=True),  # takes the added path as mu t
    "C11-M2": _m("C11-M2"),  # thinks the pattern shifts away from the covered slit
    "C11-M3": _m("C11-M3"),  # thinks the sheet narrows the fringes (W / mu)
    "C11-M4": _m("C11-M4"),  # thinks a sheet over both slits shifts the pattern
    "C11-M5": _m("C11-M5", ("shift",), path=True),  # takes the added path itself as the shift on the screen
    "C11-M6": _m("C11-M6", ("t", "count"), half=True),  # counts one fringe per half wavelength of added path
    "C11-M7": _m("C11-M7", ("t", "shift", "count"), geom=True),  # takes the added path as the thickness t
    "C11-M8": _m("C11-M8"),  # thinks the extra optical path widens the fringes
}
