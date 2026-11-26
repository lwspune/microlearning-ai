"""C06 Field of a circular loop and an arc: answer models (the key, and one per misconception).

Centre of N turns of radius R: B = mu0 N I / (2R). Arc of angle theta (rad): B = mu0 I theta / (4 pi R); straight
leads pointing at the centre add nothing. On the axis at x: B = mu0 N I R^2 / (2 (R^2 + x^2)^(3/2)). params["ask"]:
  "coil":   B, in T, at the centre of N turns of radius R_cm carrying I (inputs N, R_cm, I);
  "semi":   B at the centre of a semicircle with radial straight leads (named);
  "axis":   B, in T, on the axis at x_cm from a single loop of radius R_cm carrying I (inputs R_cm, x_cm, I);
  "arc":    B, in T, at the centre of an arc of deg degrees, radius R_cm, current I, radial leads (inputs deg, R_cm, I).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

mu0 = BOOK["mu0"]
cm = Rational(1, 100)
NAMED = {"semi": {"key": "mu0I_4R", "C06-M7": "mu0I_4piR", "C06-M8": "mu0I_4piR2", "C06-M9": "mu0I_4pi"}}


def _solve(v, p, *, no_n=False, diameter=False, straight=False, in_cm=False, no_two=False, full_loop=False,
           centre=False, no_cube=False, straight_x=False, degrees=False, leads=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "coil":
        N = 1 if no_n else v["N"]
        R = v["R_cm"] * (1 if in_cm else cm) * (2 if diameter else 1)
        if straight:
            return sig(mu0 * N * v["I"] / (2 * pi * R), n)
        return sig(mu0 * N * v["I"] / ((1 if no_two else 2) * R), n)
    if ask == "axis":
        R, x, I = v["R_cm"] * cm, v["x_cm"] * cm, v["I"]
        if centre:
            return sig(mu0 * I / (2 * R), n)
        if straight_x:
            return sig(mu0 * I / (2 * pi * x), n)
        power = 1 if no_cube else Rational(3, 2)
        return sig(mu0 * I * R**2 / (2 * (R**2 + x**2) ** power), n)
    if ask == "arc":
        R, I = v["R_cm"] * cm, v["I"]
        if full_loop:
            return sig(mu0 * I / (2 * R), n)
        theta = v["deg"] if degrees else v["deg"] * pi / 180
        B = mu0 * I * theta / (4 * pi * R)
        if leads:
            B += 2 * mu0 * I / (4 * pi * R)  # counts each radial lead as a half-infinite wire at R
        return sig(B, n)
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
    "C06-M1": _m("C06-M1", ("coil",), no_n=True),  # forgets the number of turns
    "C06-M2": _m("C06-M2", ("coil",), diameter=True),  # uses the diameter for R
    "C06-M3": _m("C06-M3", ("coil",), straight=True),  # uses the straight wire's mu0 I / (2 pi r)
    "C06-M4": _m("C06-M4", ("coil",), in_cm=True),  # leaves the radius in cm
    "C06-M5": _m("C06-M5", ("coil",), no_two=True),  # forgets the 2: mu0 N I / R
    "C06-M6": _m("C06-M6", ("arc",), full_loop=True),  # uses the whole loop's field for an arc
    "C06-M7": _m("C06-M7"),  # drops the arc's angle pi
    "C06-M8": _m("C06-M8"),  # keeps R^2 from Biot-Savart's law
    "C06-M9": _m("C06-M9"),  # drops R altogether
    "C06-M10": _m("C06-M10", ("axis",), centre=True),  # uses the centre's field on the axis
    "C06-M11": _m("C06-M11", ("axis",), no_cube=True),  # drops the 3/2 power
    "C06-M12": _m("C06-M12", ("axis",), straight_x=True),  # uses the straight-wire formula at x
    "C06-M13": _m("C06-M13", ("arc",), degrees=True),  # puts the angle in degrees
    "C06-M14": _m("C06-M14", ("arc",), leads=True),  # counts the radial straight leads
}
