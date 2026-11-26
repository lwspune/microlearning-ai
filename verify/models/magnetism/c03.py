"""C03 Gauss' law of magnetism: answer models (the key, and one per misconception).

params["ask"]:
  "closed":   net flux out of a closed surface (named);
  "monopole": Gauss' law if a monopole p were enclosed (named);
  "n_only":   net flux through a surface round only one pole (named);
  "face":     flux through the sixth face of a closed box when five faces give phi out (input phi);
  "loops":    what magnetic field lines do (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "closed": {"key": "zero_flux", "C03-M1": "mu0_pole", "C03-M2": "positive_if_n", "C03-M3": "b_times_area"},
    "monopole": {"key": "mu0_p", "C03-M4": "p_over_eps0", "C03-M5": "still_zero", "C03-M6": "p_over_mu0"},
    "n_only": {"key": "zero_n", "C03-M7": "positive_out", "C03-M8": "negative_in", "C03-M9": "pole_strength"},
    "loops": {"key": "closed_loops", "C03-M13": "n_to_s_end", "C03-M14": "s_to_n_end", "C03-M15": "from_infinity"},
}


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return sig(-v["phi"], p.get("sf", 3))


def _m(mid, f=None):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if f is None:
            raise ValueError("does not apply to this item")
        return sig(f(v["phi"]), p.get("sf", 3))
    return model


MODELS = {
    "key": key,
    **{f"C03-M{i}": _m(f"C03-M{i}") for i in (1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15)},
    "C03-M10": _m("C03-M10", lambda x: x),  # thinks the sixth face carries the same outward flux
    "C03-M11": _m("C03-M11", lambda x: 0 * x),  # thinks the sixth face carries no flux
    "C03-M12": _m("C03-M12", lambda x: x / 5),  # shares the flux equally among the faces
}
