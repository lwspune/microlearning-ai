"""C02 Measuring large and small lengths: answer models (the key, and one per misconception).

Parallax: theta = b / D (radian); angular size: d = D alpha. 1 rad = 206265 arcsec; 1' = 2.91 x 10^-4 rad.
params["ask"]:
  "parallax": the parallax, in arcsec, of a star D_ly away seen from points 2 AU apart (inputs D_ly, AU, ly);
  "earth":    the Earth's diameter, in m, from the angle deg + min (arcmin) at the Moon D_m away (inputs deg, min, D_m);
  "jupiter":  Jupiter's diameter, in km, from its angular diameter arcsec at D_km (inputs arcsec, D_km);
  "nearer":   which of two stars has the larger parallax (named);
  "ly":       what a light year measures (named).
"""
from sympy import Rational, Symbol, pi

from physics import sig

NAMED = {
    "nearer": {"key": "nearer_B", "C02-M9": "farther_A", "C02-M10": "equal_par", "C02-M11": "neither_par"},
    "ly": {"key": "distance_u", "C02-M12": "time_u", "C02-M13": "speed_u", "C02-M14": "brightness_u"},
}
RAD = 180 * 3600 / pi  # arcsec per radian


def _solve(v, p, *, one_AU=False, give_rad=False, invert=False, deg_as_rad=False, decimal=False, divide=False,
           as_arcmin=False, as_rad=False, m_as_km=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "parallax":
        b = v["AU"] * (1 if one_AU else 2)
        D = v["D_ly"] * v["ly"]
        th = D / b if invert else b / D
        return sig(th if give_rad else th * RAD, n)
    if ask == "earth":
        if deg_as_rad:
            th = v["deg"] + v["min"] / 60
        elif decimal:
            th = (v["deg"] + v["min"] / 100) * pi / 180
        else:
            th = (v["deg"] + v["min"] / 60) * pi / 180
        return sig(v["D_m"] / th if divide else v["D_m"] * th, n)
    if ask == "jupiter":
        a = v["arcsec"]
        if as_rad:
            al = a
        elif as_arcmin:
            al = a * 60 / RAD
        else:
            al = a / RAD
        d = v["D_km"] * al
        return sig(d * 1000 if m_as_km else d, n)
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
    "C02-M1": _m("C02-M1", ("parallax",), one_AU=True),  # uses 1 AU as the baseline
    "C02-M2": _m("C02-M2", ("parallax",), give_rad=True),  # leaves the angle in radian
    "C02-M3": _m("C02-M3", ("parallax",), invert=True),  # divides the distance by the baseline
    "C02-M4": _m("C02-M4", ("earth",), deg_as_rad=True),  # uses degrees as radians
    "C02-M5": _m("C02-M5", ("earth",), decimal=True),  # reads 1 deg 54' as 1.54 deg
    "C02-M6": _m("C02-M6", ("earth",), divide=True),  # divides the distance by the angle
    "C02-M7": _m("C02-M7", ("jupiter",), as_arcmin=True),  # converts as if arcmin
    "C02-M8": _m("C02-M8", ("jupiter",), as_rad=True),  # uses the arcsec value as radians
    "C02-M9": _m("C02-M9"),  # thinks the farther star has the larger parallax
    "C02-M10": _m("C02-M10"),  # thinks parallax depends only on the baseline
    "C02-M11": _m("C02-M11"),  # thinks stars are too far for any parallax
    "C02-M12": _m("C02-M12"),  # thinks a light year is a time
    "C02-M13": _m("C02-M13"),  # thinks a light year is a speed
    "C02-M14": _m("C02-M14"),  # thinks a light year measures brightness
    "C02-M15": _m("C02-M15", ("jupiter",), m_as_km=True),  # mixes metres and kilometres
}
