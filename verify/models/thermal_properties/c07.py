"""C07 Conduction, convection and radiation: answer models (the key, and one per misconception).

params["ask"]:
  "window": heat flow per square metre, W/m^2, through glass x_mm millimetres thick, inside Tin, outside Tout
            (inputs k, x_mm, Tin, Tout);
  "dT":     temperature difference across a plate x_cm thick carrying flux q kcal per minute per m^2 (inputs q, x_cm, k);
  "resist": thermal resistance from a temperature difference dT and a heat flow rate H (inputs dT, H);
  "glass":  rate of heat loss, cal/s, through a window of area A_cm2, x_mm thick, k in cal/(s cm deg C)
            (inputs k, A_cm2, x_mm, Tin, Tout);
  "space":  how the Sun's heat crosses empty space (named);
  "steady": what the steady state of a heated rod means (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "space": {"key": "em_waves", "C07-M12": "conduction_space", "C07-M13": "convection_space", "C07-M14": "hot_particles"},
    "steady": {"key": "constant_each_section", "C07-M15": "same_everywhere", "C07-M16": "no_flow", "C07-M17": "all_warming"},
}


def _solve(v, p, *, mm_as_m=False, sign=False, times_x=False, per_min=False, cm_as_m=False, invert=False,
           times=False, no_dT=False, mm_as_cm=False, mixed=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("window", "glass"):
        Tin, Tout = v["Tin"], v["Tout"]
        dT = abs(Tin) - abs(Tout) if sign else Tin - Tout
        if ask == "window":
            x = v["x_mm"] if mm_as_m else v["x_mm"] / 1000
            return sig(v["k"] * dT * x if times_x else v["k"] * dT / x, n)
        x = v["x_mm"] if mm_as_cm else v["x_mm"] / 10
        A = v["A_cm2"] / 10**4 if mixed else v["A_cm2"]
        return sig(v["k"] * A * dT / x, n)
    if ask == "dT":
        q = v["q"] if per_min else v["q"] / 60
        x = v["x_cm"] if cm_as_m else v["x_cm"] / 100
        return sig(q / (v["k"] * x) if invert else q * x / v["k"], n)
    if ask == "resist":
        dT, H = v["dT"], v["H"]
        if invert:
            return sig(H / dT, n)
        if times:
            return sig(dT * H, n)
        return sig(1 / H if no_dT else dT / H, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


def _n(mid):
    def model(v, p):
        if mid not in NAMED.get(p["ask"], {}):
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C07-M1": _m(("window",), mm_as_m=True),  # puts the thickness in mm as if it were m
    "C07-M2": _m(("window", "glass"), sign=True),  # subtracts the sizes of the two temperatures, ignoring the minus sign
    "C07-M3": _m(("window",), times_x=True),  # multiplies by the thickness
    "C07-M4": _m(("dT",), per_min=True),  # leaves the flux per minute
    "C07-M5": _m(("dT",), cm_as_m=True),  # puts the thickness in cm as if it were m
    "C07-M6": _m(("dT",), invert=True),  # divides the flux by k x
    "C07-M7": _m(("resist",), invert=True),  # takes rate / temperature difference
    "C07-M8": _m(("resist",), times=True),  # multiplies them
    "C07-M9": _m(("resist",), no_dT=True),  # leaves out the temperature difference
    "C07-M10": _m(("glass",), mm_as_cm=True),  # puts the thickness in mm as if it were cm
    "C07-M11": _m(("glass",), mixed=True),  # puts the area in m^2 with k in cgs units
    **{f"C07-M{i}": _n(f"C07-M{i}") for i in range(12, 18)},
}
