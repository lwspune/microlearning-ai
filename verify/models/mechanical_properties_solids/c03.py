"""C03 Young's modulus: answer models (the key, and one per misconception).

Y = F L / (A l). params["ask"]:
  "Y":      Young's modulus from a load of m kg (inputs m, g, L, A, l);
  "Y_r":    Young's modulus of a wire of radius r_mm stretched from L to L1 by F (inputs F, L, L1, r_mm);
  "F":      force that stretches a wire of diameter D_mm, length L, by l_mm (inputs Y, L, D_mm, l_mm);
  "ext":    extension of a second wire, length ratio kL and diameter ratio kD, same load, first extension l1 (inputs l1, kL, kD);
  "ratio":  Y_B / Y_C for two wires with the same load and extension (inputs LB, AB, LC, AC);
  "rigid":  Young's modulus of a perfectly rigid body (named).
"""
from sympy import Rational, Symbol, pi

from physics import sig

NAMED = {"rigid": {"key": "infinite", "C03-M16": "zero_Y", "C03-M17": "one_Y", "C03-M18": "equals_stress"}}


def _solve(v, p, *, kg_as_N=False, stress=False, inv=False, final=False, no_pi=False, mm=False, diam=False,
           mm_ext=False, swap=False, unsq=False, area_up=False, no_area=False, no_len=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "Y":
        F = v["m"] * (1 if kg_as_N else v["g"])
        if stress:
            return sig(F / v["A"], n)
        if inv:
            return sig(F * v["l"] / (v["A"] * v["L"]), n)
        return sig(F * v["L"] / (v["A"] * v["l"]), n)
    if ask == "Y_r":
        r = v["r_mm"] * (1 if mm else Rational(1, 1000))
        A = r**2 * (1 if no_pi else pi)
        l = v["L1"] if final else v["L1"] - v["L"]
        return sig(v["F"] * v["L"] / (A * l), n)
    if ask == "F":
        r = v["D_mm"] / (1 if diam else 2) / 1000
        A = pi * r**2
        l = v["l_mm"] * (1 if mm_ext else Rational(1, 1000))
        if swap:
            return sig(v["Y"] * A * v["L"] / l, n)
        return sig(v["Y"] * A * l / v["L"], n)
    if ask == "ext":
        kL, kD = v["kL"], v["kD"]
        lr = 1 / kL if swap else kL
        if area_up:
            return sig(v["l1"] * lr * kD**2, n)
        return sig(v["l1"] * lr / (kD if unsq else kD**2), n)
    if ask == "ratio":
        b = (1 if no_area else 1 / v["AB"]) * (1 if no_len else v["LB"])
        c = (1 if no_area else 1 / v["AC"]) * (1 if no_len else v["LC"])
        return sig(c / b if inv else b / c, n)
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
    "C03-M1": _m("C03-M1", ("Y",), kg_as_N=True),  # takes kg as newtons
    "C03-M2": _m("C03-M2", ("Y",), stress=True),  # gives the stress
    "C03-M3": _m("C03-M3", ("Y",), inv=True),  # turns the strain upside down
    "C03-M4": _m("C03-M4", ("Y_r",), final=True),  # uses the stretched length as the extension
    "C03-M5": _m("C03-M5", ("Y_r",), no_pi=True),  # takes the area as r^2
    "C03-M6": _m("C03-M6", ("Y_r",), mm=True),  # leaves the radius in mm
    "C03-M7": _m("C03-M7", ("F",), diam=True),  # uses the diameter as the radius
    "C03-M8": _m("C03-M8", ("F",), mm_ext=True),  # leaves the extension in mm
    "C03-M9": _m("C03-M9", ("F",), swap=True),  # swaps L and l
    "C03-M10": _m("C03-M10", ("ext",), unsq=True),  # does not square the diameter ratio
    "C03-M11": _m("C03-M11", ("ext",), swap=True),  # thinks a shorter wire stretches more
    "C03-M12": _m("C03-M12", ("ext",), area_up=True),  # thinks a thicker wire stretches more
    "C03-M13": _m("C03-M13", ("ratio",), inv=True),  # gives copper over brass
    "C03-M14": _m("C03-M14", ("ratio",), no_area=True),  # leaves out the areas
    "C03-M15": _m("C03-M15", ("ratio",), no_len=True),  # leaves out the lengths
    "C03-M16": _m("C03-M16"),  # no stretch, so no modulus
    "C03-M17": _m("C03-M17"),  # thinks it is one
    "C03-M18": _m("C03-M18"),  # takes the strain as one
}
