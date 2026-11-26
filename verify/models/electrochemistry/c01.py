"""C01 Conductance and conductivity: answer models (the key, and one per misconception).

G = 1/R; kappa = G x (l/a) = b / R, with b = l/a the cell constant; b = kappa_KCl x R_KCl.
params["ask"]:
  "cell_const": b from a standard solution (inputs k, R);
  "kappa":      kappa of a solution (inputs R and b, or R, l, a);
  "kappa2":     kappa of a second solution in the cell calibrated with KCl (inputs k1, R1, R2);
  "unit":       the unit of conductivity (named).
"""
from sympy import Symbol

from chemistry import sig

UNITS = {"key": "ohm_inv_cm_inv", "C01-M1": "ohm_inv_cm", "C01-M2": "ohm_inv", "C01-M3": "ohm_cm_inv",
         "C01-M4": "ohm_cm"}


def _b(v):
    return v["b"] if "b" in v else v["l"] / v["a"]


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "cell_const":
        k, R = v["k"], v["R"]
        out = {"key": k * R, "M1": 1 / (k * R), "M3": k / R, "M4": R / k}
    elif ask == "kappa":
        R, b = v["R"], _b(v)
        out = {"key": b / R, "M1": 1 / (b * R), "M2": 1 / R, "M3": R * b, "M4": R / b}
    elif ask == "kappa2":
        k1, R1, R2 = v["k1"], v["R1"], v["R2"]
        out = {"key": k1 * R1 / R2, "M2": 1 / R2, "M3": k1 * R2 / R1, "M5": k1}
    else:
        out = {}
    if how not in out:
        raise ValueError("does not apply to this item")
    return sig(out[how], n)


def key(v, p):
    if p["ask"] == "unit":
        return Symbol(UNITS["key"])
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        if p["ask"] == "unit":
            if mid not in UNITS:
                raise ValueError("does not apply to this item")
            return Symbol(UNITS[mid])
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1"),  # cell constant upside down (a/l): divides by it, b = 1/(kappa R)
    "C01-M2": _m("C01-M2"),  # takes the conductance 1/R as the conductivity (no cell constant)
    "C01-M3": _m("C01-M3"),  # drops the reciprocal (G = R): kappa = R b, b = kappa / R
    "C01-M4": _m("C01-M4"),  # works out the resistivity R a / l and calls it conductivity: kappa = R / b
    "C01-M5": _m("C01-M5"),  # thinks the conductivity belongs to the cell: the KCl value again
}
