"""C03 Acceleration due to gravity: answer models (the key, and one per misconception).

From g = GM/R^2 at the surface of a body of mass M and radius R. params["ask"]:
  "mass":  M, in kg, from g, G and R (inputs g, G, R, u = metres per unit of R);
  "G":     G, in N m^2/kg^2, from g, M and R (inputs g, M, R, u);
  "gsurf": g, in m/s^2, from G, M and R (inputs G, M, R, u);
  "ratio": g (or a weight) on a planet whose mass is km times and radius kr times the Earth's, given the Earth's
           value w (inputs w, km, kr);
  "planets": what happens to a body's mass and weight on another planet (a named answer).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "planets": {"key": "mass_same_weight_changes", "C03-M3": "both_same", "C03-M4": "both_change",
                "C03-M8": "mass_changes_weight_same"},
}


def _solve(v, p, *, lin=False, km=False, under=False, no_r=False, inv=False, same=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("mass", "G", "gsurf"):
        R = v["R"] * (1 if km else v["u"])
        if ask == "gsurf":
            return sig(v["G"] * v["M"] / (1 if no_r else (R if lin else R**2)), n)
        Rf = R if lin else R**2
        other = v["G"] if ask == "mass" else v["M"]
        return sig(v["g"] / (other * Rf) if under else v["g"] * Rf / other, n)
    if ask == "ratio":
        w, k_m, k_r = v["w"], v["km"], v["kr"]
        if same:
            return sig(w, n)
        if no_r:
            return sig(w * k_m, n)
        if inv:
            return sig(w * k_r**2 / k_m, n)
        return sig(w * k_m / (k_r if lin else k_r**2), n)
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
    "C03-M1": _m("C03-M1", ("mass", "G", "gsurf", "ratio"), lin=True),  # takes g as GM/R, radius not squared
    "C03-M2": _m("C03-M2", ("mass", "G", "gsurf"), km=True),  # leaves the radius in km
    "C03-M3": _m("C03-M3", ("ratio",), same=True),  # thinks a body's weight is the same everywhere, like its mass
    "C03-M4": _m("C03-M4"),  # thinks a body's mass changes with g as well
    "C03-M5": _m("C03-M5", ("gsurf", "ratio"), no_r=True),  # thinks g depends on the mass only, not the radius
    "C03-M6": _m("C03-M6", ("mass", "G"), under=True),  # divides by R^2 instead of multiplying when rearranging
    "C03-M7": _m("C03-M7", ("ratio",), inv=True),  # turns the ratio upside down
    "C03-M8": _m("C03-M8"),  # swaps the meanings of mass and weight
}
