"""C06 Potential gradient: answer models (the key, and one per misconception).

E = -dV/dx; between parallel plates E = V/d. params["ask"]:
  "drop":  mass, in kg, of a particle of charge q held between plates d_cm apart at PD V (inputs q, d_cm, V, g);
  "unit":  the SI unit of potential gradient (a named answer);
  "grad":  E, in V/m, at x m for V = a x^2 + b (inputs a, b, x);
  "dir":   which way the field points (a named answer);
  "two":   E between x = 0 at VA and x = d at VB in a uniform field (a named answer built from the numbers).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "unit": {"key": "V_per_m", "C06-M3": "V_m", "C06-M1": "V_per_cm", "C06-M4": "V"},
    "dir": {"key": "down", "C06-M5": "up", "C06-M8": "along", "C06-M9": "unrelated"},
    "two": {"key": "pos200", "C06-M5": "neg200", "C06-M6": "pos133", "C06-M3": "pos18"},
}


def _solve(v, p, *, cm=False, no_g=False, times_d=False, no_minus=False, over_x=False, minus_v=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "drop":
        d = v["d_cm"] * (1 if cm else Rational(1, 100))
        E = v["V"] * d if times_d else v["V"] / d
        return sig(v["q"] * E if no_g else v["q"] * E / v["g"], n)
    if ask == "grad":
        a, b, x = v["a"], v["b"], v["x"]
        Vx = a * x**2 + b
        if over_x:
            return sig(Vx / x, n)
        if minus_v:
            return sig(-Vx, n)
        dVdx = 2 * a * x
        return sig(dVdx if no_minus else -dVdx, n)
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
    "C06-M1": _m("C06-M1", ("drop",), cm=True),  # leaves the distance in cm
    "C06-M2": _m("C06-M2", ("drop",), no_g=True),  # forgets g: takes qE as the mass
    "C06-M3": _m("C06-M3", ("drop",), times_d=True),  # multiplies V by d instead of dividing
    "C06-M4": _m("C06-M4"),  # gives the unit of potential itself
    "C06-M5": _m("C06-M5", ("grad",), no_minus=True),  # drops the minus sign
    "C06-M6": _m("C06-M6", ("grad",), over_x=True),  # uses V/x instead of the slope
    "C06-M7": _m("C06-M7", ("grad",), minus_v=True),  # takes E = -V
    "C06-M8": _m("C06-M8"),  # thinks the field runs along the equipotentials
    "C06-M9": _m("C06-M9"),  # thinks the field's direction has nothing to do with the potential
}
