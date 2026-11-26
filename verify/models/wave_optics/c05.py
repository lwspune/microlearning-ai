"""C05 Doppler effect in light: answer models (the key, and one per misconception).

For v << c: delta_lambda / lambda = v_r / c and delta_nu / nu = -v_r / c, with v_r > 0 for a receding source (red shift).
params["ask"] picks the quantity:
  "v_from_lines": speed of recession, in m/s, from rest wavelength l0 and observed l1, both in nm (inputs l0, l1);
  "lam_obs":      observed wavelength, in nm, of a line l0 nm from a source approaching at v m/s (inputs l0, v);
  "nu_obs":       observed frequency, in Hz, of light nu Hz from a source receding at v m/s (inputs nu, v);
  "red_shift":    what "red shift" means (a named answer);
  "galaxy":       what a red-shifted spectrum says about a galaxy (a named answer).
"""
from sympy import Symbol

from physics import BOOK, sig

c = BOOK["c"]
NAMED = {
    "red_shift": {"key": "longer_receding", "C05-M1": "shorter_receding", "C05-M2": "longer_approaching", "C05-M3": "medium"},
    "galaxy": {"key": "receding", "C05-M2": "approaching", "C05-M3": "dust", "C05-M14": "cooler"},
}


def _solve(v, p, *, swap=False, inv=False, twice=False, obs_as_shift=False, shift_only=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 2 if twice else 1
    if ask == "v_from_lines":
        l0, l1 = v["l0"], v["l1"]
        if inv:
            return sig(c * l0 / (l1 - l0), n)
        if obs_as_shift:
            return sig(c * l1 / l0, n)
        return sig(c * (l1 - l0) / (k * l0), n)
    if ask == "lam_obs":
        shift = k * v["l0"] * v["v"] / c  # approaching: the wavelength shortens
        if shift_only:
            return sig(shift, n)
        return sig(v["l0"] + shift if swap else v["l0"] - shift, n)
    if ask == "nu_obs":
        shift = k * v["nu"] * v["v"] / c  # receding: the frequency falls
        if shift_only:
            return sig(shift, n)
        return sig(v["nu"] + shift if swap else v["nu"] - shift, n)
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
    "C05-M1": _m("C05-M1"),  # takes red shift as a shortening of the wavelength
    "C05-M2": _m("C05-M2", ("lam_obs", "nu_obs"), swap=True),  # swaps approaching and receding
    "C05-M3": _m("C05-M3"),  # thinks the shift comes from the medium the light crosses
    "C05-M6": _m("C05-M6", ("v_from_lines",), inv=True),  # turns delta_lambda / lambda upside down
    "C05-M10": _m("C05-M10", ("v_from_lines", "lam_obs", "nu_obs"), twice=True),  # uses 2v/c, as for an echo
    "C05-M11": _m("C05-M11", ("v_from_lines",), obs_as_shift=True),  # uses the observed wavelength as the shift
    "C05-M13": _m("C05-M13", ("lam_obs", "nu_obs"), shift_only=True),  # gives the shift, not the observed value
    "C05-M14": _m("C05-M14"),  # reads a red shift as a cooler source
}
