"""C03 Extrinsic semiconductors: answer models (the key, and one per misconception).

n_e n_h = n_i^2. params["ask"]:
  "nh_doped": holes in a crystal of N atoms/m^3 doped at ppm parts per million with a donor (inputs N, ppm, ni);
  "ne_doped": electrons once acceptor doping raises the holes to nh (inputs ni, nh);
  "dopant":   an impurity that makes germanium n-type (named);
  "mobility": why n-type conducts better than p-type at equal doping (named);
  "acceptor": where acceptor levels lie (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "dopant": {"key": "arsenic", "C03-M7": "indium", "C03-M8": "silicon_d", "C03-M9": "copper"},
    "mobility": {"key": "e_mobile", "C03-M10": "more_carriers", "C03-M11": "more_charge", "C03-M12": "holes_dont"},
    "acceptor": {"key": "near_vb", "C03-M13": "near_cb", "C03-M14": "in_cb", "C03-M15": "mid_gap"},
}


def _solve(v, p, *, same_ni=False, equal=False, no_ppm=False, no_sq=False):
    n, ni = p.get("sf", 3), v["ni"]
    if p["ask"] == "nh_doped":
        ne = v["N"] * (1 if no_ppm else v["ppm"] * Rational(1, 10**6))
        if same_ni:
            return sig(ni, n)
        if equal:
            return sig(ne, n)
        return sig(ni**2 / ne, n)
    nh = v["nh"]
    if same_ni:
        return sig(ni, n)
    if equal:
        return sig(nh, n)
    return sig((ni if no_sq else ni**2) / nh, n)


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
    "C03-M1": _m("C03-M1", ("nh_doped",), same_ni=True),  # thinks doping leaves the holes at n_i
    "C03-M2": _m("C03-M2", ("nh_doped",), equal=True),  # thinks holes still equal electrons
    "C03-M3": _m("C03-M3", ("nh_doped",), no_ppm=True),  # takes every atom as a donor
    "C03-M4": _m("C03-M4", ("ne_doped",), same_ni=True),  # thinks doping leaves the electrons at n_i
    "C03-M5": _m("C03-M5", ("ne_doped",), equal=True),  # thinks electrons still equal holes
    "C03-M6": _m("C03-M6", ("ne_doped",), no_sq=True),  # forgets to square n_i
    **{f"C03-M{i}": _m(f"C03-M{i}") for i in range(7, 16)},
}
