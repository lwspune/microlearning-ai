"""C03 Refraction by Huygens' principle: answer models (the key, and one per misconception).

Light goes from medium 1 (index n1, speed v1) into medium 2 (n2, v2). params["ask"] picks the quantity:
  "prop":  which property is unchanged on entering a new medium (a named answer);
  "rel":   the relation the Huygens construction gives (a named answer);
  "snell": angle of refraction in degrees, from air into a medium (inputs i_deg, n);
  "speed": speed of light in medium a, in m/s (inputs n_a, and n_b, another medium named in the stem);
  "wnum":  wave number 1/lambda in a medium, in per metre (inputs n, nu);
  "range": the wavelength range in a medium, in nm (inputs l1, l2 in air, n), a Tuple.

The key works from the definitions: n = c/v, the frequency is fixed by the source, lambda = v/nu, and from the
construction sin i / sin r = BC/AE = v1 t / v2 t.
"""
from sympy import Symbol, Tuple, asin, pi, sin

from physics import BOOK, sig

NAMED = {
    "prop": {"key": "frequency", "C03-M1": "wavelength", "C03-M3": "velocity", "C03-M4": "amplitude"},
    "rel": {"key": "sin_v1_v2", "C03-M5": "sin_v2_v1", "C03-M6": "cos_v1_v2", "C03-M7": "i_eq_r"},
}

C = BOOK["c"]


def _deg(x):
    return x * 180 / pi


def _solve(v, p, *, swap=False, glancing=False, straight=False, times_n=False, same_c=False, relative=False,
           same_lam=False, change=False):
    ask, sf = p["ask"], p.get("sf", 3)
    if ask == "snell":
        i = v["i_deg"] * pi / 180
        if straight:
            return sig(v["i_deg"], sf)  # every wavelet keeps the speed it had in air: no bending
        if glancing:
            i = pi / 2 - i  # measures the angle from the boundary, not the normal
        s = sin(i) * v["n"] if swap else sin(i) / v["n"]
        return sig(_deg(asin(s)), sf)
    if ask == "speed":
        if same_c:
            return sig(C, sf)
        n = v["n_a"] / v["n_b"] if relative else v["n_a"]
        return sig(C * n if times_n else C / n, sf)
    if ask == "wnum":
        lam_air = C / v["nu"]
        if change:
            return sig(1 / (lam_air - lam_air / v["n"]), sf)
        lam = lam_air if same_lam else (lam_air * v["n"] if times_n else lam_air / v["n"])
        return sig(1 / lam, sf)
    if ask == "range":
        def one(lam):
            if same_lam:
                return sig(lam, sf)
            if times_n:
                return sig(lam * v["n"], sf)
            if change:
                return sig(lam - lam / v["n"], sf)
            return sig(lam / v["n"], sf)
        return Tuple(one(v["l1"]), one(v["l2"]))
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
    "C03-M1": _m("C03-M1", ("wnum", "range"), same_lam=True),  # wavelength fixed by the source, frequency changes
    "C03-M2": _m("C03-M2", ("speed", "wnum", "range"), times_n=True),  # takes v = nc: light faster in a denser medium
    "C03-M3": _m("C03-M3", ("speed",), same_c=True),  # light keeps speed c in every medium
    "C03-M4": _m("C03-M4"),  # amplitude unchanged: forgets the reflected part
    "C03-M5": _m("C03-M5", ("snell",), swap=True),  # swaps the two triangles: sin i / sin r = v2 / v1
    "C03-M6": _m("C03-M6", ("snell",), glancing=True),  # measures the angle from the boundary
    "C03-M7": _m("C03-M7", ("snell",), straight=True),  # wavelets in medium 2 spread at v1: no bending
    "C03-M8": _m("C03-M8", ("wnum", "range"), change=True),  # gives the drop in wavelength as the new wavelength
    "C03-M9": _m("C03-M9", ("speed",), relative=True),  # puts a relative index into v = c / n
}
