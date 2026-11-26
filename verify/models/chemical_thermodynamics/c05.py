"""C05 Enthalpy, dH and dU: answer models (the key, and one per misconception).

dH = dU + dn_g RT, W = -dn_g RT, dn_g = gas moles of products - gas moles of reactants.
inputs: gp, gr (gas moles in the equation as written), cp, cr (solid or liquid moles, default 0),
        k (equations' worth reacting, default 1), T (K) or Tc (deg C), dH (kJ) for "dU".
params["ask"]: "W" (work, in J or kJ by params["out"]) or "dU" (in kJ).
"""
from sympy import Integer

from chemistry import BOOK, sig

R = BOOK["R"]


def _solve(v, p, how):
    n = p.get("sf", 3)
    k = 1 if how == "M4" else v.get("k", Integer(1))
    if how == "M4" and v.get("k", 1) == 1:
        raise ValueError("one equation's worth reacts here")
    gp, gr = v["gp"], v["gr"]
    if how == "M1":
        if v.get("cp", 0) == 0 and v.get("cr", 0) == 0:
            raise ValueError("no solids or liquids here")
        gp, gr = gp + v.get("cp", 0), gr + v.get("cr", 0)
    dn = k * (gr - gp if how == "M2" else gp - gr)
    if "T" in v:
        if how == "M3":
            raise ValueError("temperature is given in K")
        T = v["T"]
    else:
        T = v["Tc"] if how == "M3" else v["Tc"] + 273
    W = -dn * R * T  # J
    if p["ask"] == "W":
        return sig(W / 1000 if p.get("out") == "kJ" else W, n)
    if p["ask"] == "dU":
        return sig(v["dH"] + W / 1000, n)
    raise ValueError(f"unknown ask {p['ask']}")


def key(v, p):
    return _solve(v, p, "key")


def _m(how):
    def model(v, p):
        return _solve(v, p, how)
    return model


MODELS = {
    "key": key,
    "C05-M1": _m("M1"),  # counts solids and liquids in dn_g
    "C05-M2": _m("M2"),  # takes dn_g as reactants - products
    "C05-M3": _m("M3"),  # uses the temperature in deg C
    "C05-M4": _m("M4"),  # uses the equation's dn_g whatever amount reacts
}
