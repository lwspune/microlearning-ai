"""C03 Atomic radii and ionisation enthalpy: answer models (the key, and one per misconception).

params["ask"]:
  "radius": the elements params["els"] ("21,22,28,30") in increasing atomic radius (book Table 8.5, pm),
            a named answer such as "ni_lt_zn_lt_ti_lt_sc";
  "ie":     the energy (kJ/mol) to form M^q+(g) from M(g), from inputs ie1, ie2, ie3 and params["q"],
            rounded with sig(x, 4) (the data have 3 and 4 figures; the sums are whole numbers).
"""
from sympy import Symbol

from chemistry import sig

from .c01 import NAME

# Atomic (metallic) radii of the 3d series, pm (book Table 8.5).
RADIUS = {21: 164, 22: 147, 23: 135, 24: 129, 25: 137, 26: 126, 27: 125, 28: 125, 29: 128, 30: 137}


def _order(els):
    return Symbol("_lt_".join(NAME[Z].lower() for Z in els))


def _els(p):
    return [int(z) for z in p["els"].split(",")]


def _ies(v, p):
    q = int(p["q"])
    return [v[f"ie{i}"] for i in range(1, q + 1)], q


def key(v, p):
    if p["ask"] == "radius":
        return _order(sorted(_els(p), key=lambda Z: RADIUS[Z]))
    ies, _ = _ies(v, p)
    return sig(sum(ies), 4)


def m1(v, p):
    """Expects the radius to fall steadily all across the series, as in a p-block period (zinc smallest)."""
    if p["ask"] != "radius":
        raise ValueError("does not apply")
    return _order(sorted(_els(p), reverse=True))


def m2(v, p):
    """Thinks more electrons make a bigger atom, so the radius grows across the series."""
    if p["ask"] != "radius":
        raise ValueError("does not apply")
    return _order(sorted(_els(p)))


def m3(v, p):
    """Reads the order backwards: lists the radii from largest to smallest."""
    if p["ask"] != "radius":
        raise ValueError("does not apply")
    return _order(sorted(_els(p), key=lambda Z: -RADIUS[Z]))


def m4(v, p):
    """Treats every electron as costing the first ionisation enthalpy: q x IE1."""
    if p["ask"] != "ie":
        raise ValueError("does not apply")
    ies, q = _ies(v, p)
    return sig(q * ies[0], 4)


def m5(v, p):
    """Takes the q-th ionisation enthalpy alone as the energy to remove q electrons."""
    if p["ask"] != "ie":
        raise ValueError("does not apply")
    ies, _ = _ies(v, p)
    return sig(ies[-1], 4)


def m6(v, p):
    """Stops one short: adds IE1 to IE(q - 1), leaving out the last electron."""
    if p["ask"] != "ie":
        raise ValueError("does not apply")
    ies, q = _ies(v, p)
    if q < 2:
        raise ValueError("one electron only")
    return sig(sum(ies[:-1]), 4)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
