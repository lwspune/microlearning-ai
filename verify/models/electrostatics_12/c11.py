"""C11 Capacitance and the parallel plate capacitor: answer models (the key, and one per misconception).

C = Q/V; a parallel plate capacitor has C = eps0 A / d. params["ask"]:
  "electrons": C, in F, when N electrons moved between two conductors give a PD of V (inputs N, V);
  "plates":    C, in F, for plates of area A_cm2 a distance d_mm apart (inputs A_cm2, d_mm);
  "circle":    Q, in C, on circular plates of radius r_cm, d_mm apart, at V volts (inputs r_cm, d_mm, V);
  "isolate":   what happens to Q, V, C of an isolated capacitor when d grows (a named answer);
  "double":    new C, in microfarads, of a C_uF capacitor whose plate gap is doubled (input C_uF).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

eps0, e = BOOK["eps0"], BOOK["e"]
NAMED = {"isolate": {"key": "c_up_down", "C11-M10": "c_down_down", "C11-M11": "up_down_down", "C11-M12": "c_down_up"}}


def _solve(v, p, *, no_e=False, inv=False, times=False, cm2=False, mm=False, inv_ad=False, circ=False, no_pi=False,
           give_c=False, prop_d=False, inv_d2=False, same=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "electrons":
        Q = v["N"] * (1 if no_e else e)
        if inv:
            return sig(v["V"] / Q, n)
        return sig(Q * v["V"] if times else Q / v["V"], n)
    if ask == "plates":
        A = v["A_cm2"] * (1 if cm2 else Rational(1, 10**4))
        d = v["d_mm"] * (1 if mm else Rational(1, 1000))
        return sig(eps0 * d / A if inv_ad else eps0 * A / d, n)
    if ask == "circle":
        r, d = v["r_cm"] / 100, v["d_mm"] / 1000
        A = 2 * pi * r if circ else (r**2 if no_pi else pi * r**2)
        C = eps0 * A / d
        return sig(C if give_c else C * v["V"], n)
    if ask == "double":
        c = v["C_uF"]
        if same:
            return sig(c, n)
        return sig(2 * c if prop_d else (c / 4 if inv_d2 else c / 2), n)
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
    "C11-M1": _m("C11-M1", ("electrons",), no_e=True),  # forgets to multiply by e
    "C11-M2": _m("C11-M2", ("electrons",), inv=True),  # turns Q/V upside down
    "C11-M3": _m("C11-M3", ("electrons",), times=True),  # multiplies Q by V
    "C11-M4": _m("C11-M4", ("plates",), cm2=True),  # leaves the area in cm^2
    "C11-M5": _m("C11-M5", ("plates",), mm=True),  # leaves the gap in mm
    "C11-M6": _m("C11-M6", ("plates",), inv_ad=True),  # turns A/d upside down
    "C11-M7": _m("C11-M7", ("circle",), circ=True),  # uses the circumference as the area
    "C11-M8": _m("C11-M8", ("circle",), no_pi=True),  # forgets the pi in the area
    "C11-M9": _m("C11-M9", ("circle",), give_c=True),  # gives the capacitance instead of the charge
    "C11-M10": _m("C11-M10"),  # thinks V falls along with C when Q is fixed
    "C11-M11": _m("C11-M11"),  # thinks the charge grows
    "C11-M12": _m("C11-M12", ("double",), prop_d=True),  # takes C as proportional to d
    "C11-M13": _m("C11-M13", ("double",), inv_d2=True),  # takes C as proportional to 1/d^2
    "C11-M14": _m("C11-M14", ("double",), same=True),  # thinks C depends only on the plate area
}
