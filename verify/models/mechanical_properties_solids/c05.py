"""C05 Strain energy: answer models (the key, and one per misconception).

U = (1/2) F l = F^2 L / (2 A Y); energy per unit volume u = (1/2) stress x strain = stress^2 / (2Y). params["ask"]:
  "volume":  volume of a wire storing U joules at u J/m^3 (inputs U, u);
  "work":    work done stretching a wire of length L, area A_mm2, modulus Y by a load F (inputs F, L, A_mm2, Y);
  "density": energy per unit volume at a stress S in a material of modulus Y (inputs S, Y);
  "formula": the energy stored per unit volume (named);
  "ratio":   energy in a wire of kD times the diameter over the first, same load, length and material (inputs kD).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"formula": {"key": "half_stress_strain", "C05-M10": "stress_strain", "C05-M11": "stress_over_strain",
                     "C05-M12": "half_F_l"}}


def _solve(v, p, *, mult=False, inv=False, half=False, no_half=False, mm2=False, length=False, strain=False,
           stress=False, area_up=False, unsq=False, same=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "volume":
        U, u = v["U"], v["u"]
        if mult:
            return sig(U * u, n)
        if inv:
            return sig(u / U, n)
        return sig(U / (2 * u) if half else U / u, n)
    if ask == "work":
        A = v["A_mm2"] * (1 if mm2 else Rational(1, 10**6))
        l = v["F"] * v["L"] / (A * v["Y"])
        k = 1 if no_half else Rational(1, 2)
        return sig(k * v["F"] * (v["L"] if length else l), n)
    if ask == "density":
        S, Y = v["S"], v["Y"]
        if strain:
            return sig(S / Y / 2, n)
        if stress:
            return sig(S / 2, n)
        return sig(S**2 / Y if no_half else S**2 / (2 * Y), n)
    if ask == "ratio":
        kD = v["kD"]
        if same:
            return sig(1, n)
        if area_up:
            return sig(kD**2, n)
        return sig(1 / kD if unsq else 1 / kD**2, n)
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
    "C05-M1": _m("C05-M1", ("volume",), mult=True),  # multiplies the two
    "C05-M2": _m("C05-M2", ("volume",), inv=True),  # divides the density by the energy
    "C05-M3": _m("C05-M3", ("volume",), half=True),  # puts in an extra 1/2
    "C05-M4": _m("C05-M4", ("work",), no_half=True),  # forgets the 1/2
    "C05-M5": _m("C05-M5", ("work",), mm2=True),  # leaves the area in mm^2
    "C05-M6": _m("C05-M6", ("work",), length=True),  # multiplies F by the length
    "C05-M7": _m("C05-M7", ("density",), no_half=True),  # forgets the 1/2
    "C05-M8": _m("C05-M8", ("density",), strain=True),  # gives half the strain
    "C05-M9": _m("C05-M9", ("density",), stress=True),  # leaves out the strain
    "C05-M10": _m("C05-M10"),  # stress x strain
    "C05-M11": _m("C05-M11"),  # stress / strain
    "C05-M12": _m("C05-M12"),  # the whole energy, not per volume
    "C05-M13": _m("C05-M13", ("ratio",), area_up=True),  # thinks a thicker wire stores more
    "C05-M14": _m("C05-M14", ("ratio",), unsq=True),  # does not square the diameter ratio
    "C05-M15": _m("C05-M15", ("ratio",), same=True),  # same load, same energy
}
