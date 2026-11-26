"""C02 The electromagnetic spectrum: answer models (the key, and one per misconception).

c = f lambda, c = 3e8 m/s. params["ask"]:
  "f_MHz":   frequency in MHz of a wave of wavelength lam metres (input lam);
  "lam_nm":  wavelength in nm of a wave of frequency f Hz (input f);
  "lam_cm":  wavelength in cm of a wave of frequency f_GHz (input f_GHz);
  "green", "satellite", "radar": named.
"""
from sympy import Rational, Symbol

from physics import sig

C = 3 * 10**8
NAMED = {
    "green": {"key": "infrared", "C02-M1": "x_ray", "C02-M2": "microwave_g", "C02-M3": "visible"},
    "satellite": {"key": "microwaves", "C02-M4": "am_radio", "C02-M5": "fm_radio", "C02-M6": "x_rays"},
    "radar": {"key": "narrow_beam", "C02-M11": "faster", "C02-M12": "bend_round", "C02-M13": "ionosphere"},
}


def _solve(v, p, *, inv=False, mult=False, unit=False, wrong=False, ghz_as_mhz=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "f_MHz":
        lam = v["lam"]
        if inv:
            return sig(lam / C / 10**6, n)
        if mult:
            return sig(C * lam / 10**6, n)
        f = C / lam
        return sig(f if unit else f / 10**6, n)
    if ask == "lam_nm":
        lam = C / v["f"]
        if inv:
            return sig(v["f"] / C * 10**9, n)
        if unit:
            return sig(lam, n)
        if wrong:
            return sig(lam * Rational(1, 10**9), n)
        return sig(lam * 10**9, n)
    if ask == "lam_cm":
        f = v["f_GHz"] * (10**6 if ghz_as_mhz else 10**9)
        if inv:
            return sig(f / C * 100, n)
        lam = C / f
        return sig(lam if unit else lam * 100, n)
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
    **{f"C02-M{i}": _m(f"C02-M{i}") for i in (1, 2, 3, 4, 5, 6, 11, 12, 13)},
    "C02-M7": _m("C02-M7", ("f_MHz", "lam_nm", "lam_cm"), inv=True),  # turns c = f lambda round
    "C02-M8": _m("C02-M8", ("f_MHz",), mult=True),  # multiplies c by lambda
    "C02-M9": _m("C02-M9", ("f_MHz", "lam_nm", "lam_cm"), unit=True),  # leaves the answer in SI base units
    "C02-M10": _m("C02-M10", ("lam_nm",), wrong=True),  # converts m to nm the wrong way
    "C02-M14": _m("C02-M14", ("lam_cm",), ghz_as_mhz=True),  # takes GHz as MHz
}
