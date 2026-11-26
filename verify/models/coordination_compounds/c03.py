"""C03 Ionisable ions and Werner's theory: answer models (the key, and one per misconception).

Complexes use the C01 params (lig, out). params["ask"]:
  "mass": grams of AgCl precipitated when params["mol"] mol of the complex meets excess AgNO3;
  "val":  Werner's (primary valency, secondary valency) of the metal, as a named answer primary<P>_secondary<S>.
"""
from sympy import Rational, Symbol

from chemistry import MASS, molar_mass, sig

from .c01 import LIG, coord_number, counters, ligands, ox_state

AGCL = molar_mass("AgCl")


def _cl_out(p):
    return sum(n for k, n in counters(p) if k == "Cl")


def _cl_in(p):
    return sum(n for k, n in ligands(p) if k == "Cl")


def _val(primary, secondary):
    """A named answer for the pair of valencies, e.g. primary3_secondary6."""
    return Symbol(f"primary{primary}_secondary{secondary}")


def _mass(p, chlorides, per=AGCL):
    return sig(Rational(p["mol"]) * chlorides * per)


def key(v, p):
    if p["ask"] == "mass":
        return _mass(p, _cl_out(p))
    return _val(ox_state(p), coord_number(p))


def m1(v, p):
    """Thinks every chloride in the formula ionises, inside the bracket or not."""
    if p["ask"] != "mass":
        raise ValueError("does not apply")
    return _mass(p, _cl_out(p) + _cl_in(p))


def m2(v, p):
    """Takes the chlorides inside the bracket to be the ionisable ones."""
    if p["ask"] != "mass":
        raise ValueError("does not apply")
    return _mass(p, _cl_in(p))


def m3(v, p):
    """Takes the primary valency to be the number of ionisable ions outside the bracket, not the oxidation state."""
    if p["ask"] != "val":
        raise ValueError("does not apply")
    return _val(sum(n for _, n in counters(p)), coord_number(p))


def m4(v, p):
    """Swaps the two valencies: primary = coordination number, secondary = oxidation state."""
    if p["ask"] != "val":
        raise ValueError("does not apply")
    return _val(coord_number(p), ox_state(p))


def m5(v, p):
    """Uses the molar mass of silver (108) for the precipitate instead of AgCl (143.5)."""
    if p["ask"] != "mass":
        raise ValueError("does not apply")
    return _mass(p, _cl_out(p), MASS["Ag"])


def m6(v, p):
    """Thinks a chloride can satisfy only one valency, so the secondary valency counts only the neutral ligands."""
    if p["ask"] != "val":
        raise ValueError("does not apply")
    neutral = sum(LIG[k]["dent"] * n for k, n in ligands(p) if LIG[k]["charge"] == 0)
    return _val(ox_state(p), neutral)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
