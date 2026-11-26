"""C04 Bulk and shear moduli, Poisson's ratio: answer models (the key, and one per misconception).

K = dP / (dV/V); eta = F / (A theta), theta = dx / l; sigma = lateral strain / longitudinal strain. params["ask"]:
  "dV":      change in volume of a body of volume V under pressure P, bulk modulus K (inputs P, V, K);
  "dP":      change in pressure that changes a volume V by dV, bulk modulus K (inputs K, dV, V);
  "eta":     modulus of rigidity of a cube of side l_cm whose top moves dx_cm under a shearing force F (inputs F, l_cm, dx_cm);
  "poisson": Poisson's ratio of a wire of area A_mm2 under force F, modulus Y, lateral strain lat (inputs lat, F, A_mm2, Y);
  "which":   the modulus for a change of shape (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"which": {"key": "rigidity", "C04-M13": "bulk_K", "C04-M14": "youngs_Y", "C04-M15": "poisson_ratio"}}


def _solve(v, p, *, no_V=False, inv=False, over_V=False, strain=False, div_K=False, no_theta=False, side=False,
           cm=False, mm2=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "dV":
        P, V, K = v["P"], v["V"], v["K"]
        if no_V:
            return sig(P / K, n)
        if inv:
            return sig(K * V / P, n)
        if over_V:
            return sig(P / (K * V), n)
        return sig(P * V / K, n)
    if ask == "dP":
        e = v["dV"] / v["V"]
        if strain:
            return sig(e, n)
        if div_K:
            return sig(e / v["K"], n)
        return sig(v["K"] / e if inv else v["K"] * e, n)
    if ask == "eta":
        k = 1 if cm else Rational(1, 100)
        l, dx = v["l_cm"] * k, v["dx_cm"] * k
        A = l if side else l**2
        theta = dx if no_theta else dx / l
        return sig(v["F"] / (A * theta), n)
    if ask == "poisson":
        A = v["A_mm2"] * (1 if mm2 else Rational(1, 10**6))
        e = v["F"] / (A * v["Y"])
        if strain:
            return sig(e, n)
        return sig(e / v["lat"] if inv else v["lat"] / e, n)
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
    "C04-M1": _m("C04-M1", ("dV",), no_V=True),  # leaves out the volume
    "C04-M2": _m("C04-M2", ("dV",), inv=True),  # turns the relation upside down
    "C04-M3": _m("C04-M3", ("dV",), over_V=True),  # divides by the volume
    "C04-M4": _m("C04-M4", ("dP",), inv=True),  # divides K by the strain
    "C04-M5": _m("C04-M5", ("dP",), strain=True),  # gives the volume strain
    "C04-M6": _m("C04-M6", ("dP",), div_K=True),  # divides the strain by K
    "C04-M7": _m("C04-M7", ("eta",), no_theta=True),  # uses the displacement as the strain
    "C04-M8": _m("C04-M8", ("eta",), side=True),  # takes the area as the side
    "C04-M9": _m("C04-M9", ("eta",), cm=True),  # works in cm
    "C04-M10": _m("C04-M10", ("poisson",), inv=True),  # longitudinal over lateral
    "C04-M11": _m("C04-M11", ("poisson",), mm2=True),  # leaves the area in mm^2
    "C04-M12": _m("C04-M12", ("poisson",), strain=True),  # gives the longitudinal strain
    "C04-M13": _m("C04-M13"),  # bulk modulus
    "C04-M14": _m("C04-M14"),  # Young's modulus
    "C04-M15": _m("C04-M15"),  # Poisson's ratio
}
