"""C01 Temperature, heat and temperature scales: answer models (the key, and one per misconception).

params["ask"]:
  "c2f":   a Celsius reading C in degrees Fahrenheit (input C);
  "k2f":   a kelvin reading K in degrees Fahrenheit (input K);
  "diff":  a temperature difference dC (Celsius degrees) in Fahrenheit degrees (input dC);
  "fixed": the reading on a target scale (ice point l2, steam point u2) of a temperature that reads x on a
           source scale whose ice and steam points read L and U (inputs L, U, x, l2, u2);
  "flow":  which way heat flows between two bodies in contact (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "flow": {"key": "hot_to_cold", "C01-M10": "more_heat_to_less", "C01-M11": "cold_flows", "C01-M12": "equal_heat"},
}

R95 = Rational(9, 5)
K0 = Rational(27315, 100)


def _f(C, *, flip=False, no32=False, wrong32=False):
    if flip:
        return C / R95 + 32
    if no32:
        return R95 * C
    if wrong32:
        return R95 * (C + 32)
    return R95 * C + 32


def _solve(v, p, *, flip=False, no32=False, wrong32=False, plus32=False, same=False, kplus=False,
           through0=False, no_l2=False, whole_u2=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "c2f":
        return sig(_f(v["C"], flip=flip, no32=no32, wrong32=wrong32), n)
    if ask == "k2f":
        C = v["K"] + K0 if kplus else v["K"] - K0
        return sig(_f(C, flip=flip, no32=no32, wrong32=wrong32), n)
    if ask == "diff":
        d = v["dC"]
        if plus32:
            return sig(R95 * d + 32, n)
        if same:
            return sig(d, n)
        if flip:
            return sig(d / R95, n)
        return sig(R95 * d, n)
    if ask == "fixed":
        L, U, x, l2, u2 = v["L"], v["U"], v["x"], v["l2"], v["u2"]
        if through0:
            return sig(x / U * u2, n)
        f = (x - L) / (U - L)
        if no_l2:
            return sig(f * (u2 - l2), n)
        if whole_u2:
            return sig(l2 + f * u2, n)
        return sig(l2 + f * (u2 - l2), n)
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
    "C01-M1": _m(("diff",), plus32=True),  # adds 32 to a temperature difference
    "C01-M2": _m(("c2f", "k2f", "diff"), flip=True),  # uses 100/180 where 180/100 belongs
    "C01-M3": _m(("c2f", "k2f"), no32=True),  # forgets the 32
    "C01-M4": _m(("c2f", "k2f"), wrong32=True),  # adds the 32 before scaling: F = 1.8(C + 32)
    "C01-M5": _m(("diff",), same=True),  # thinks a difference is the same number on both scales
    "C01-M6": _m(("k2f",), kplus=True),  # adds 273.15 to a kelvin reading to get Celsius
    "C01-M7": _m(("fixed",), through0=True),  # treats the reading as proportional, from zero
    "C01-M8": _m(("fixed",), no_l2=True),  # forgets to add the target scale's lower fixed point
    "C01-M9": _m(("fixed",), whole_u2=True),  # takes the whole upper reading as the interval
    "C01-M10": _n("C01-M10"),  # heat flows from the body holding more heat
    "C01-M11": _n("C01-M11"),  # "cold" flows from the colder body into the hotter
    "C01-M12": _n("C01-M12"),  # heat flows until both hold equal amounts of heat
}
