"""C01 Electronic configuration of d-block elements: answer models (the key, and one per misconception).

Named answers. A configuration beyond the argon core is (d, s) = 3d^d 4s^s, written as the symbol "d5s1";
an item that asks for an atom and its ion together answers with the pair "d5s1_d4s0".
params: "Z" the atomic number (21 to 30), "q" the ion's charge, "ask" = "ion" (the ion alone) or "pair".

The helpers (ATOM, ion_cfg, unpaired) are shared with C02 and C04 of this chapter.
"""
from sympy import Symbol

NAME = {21: "Sc", 22: "Ti", 23: "V", 24: "Cr", 25: "Mn", 26: "Fe", 27: "Co", 28: "Ni", 29: "Cu", 30: "Zn"}

# Observed ground states beyond [Ar] (book Table 8.2): Cr and Cu take 3d5 4s1 and 3d10 4s1.
ATOM = {21: (1, 2), 22: (2, 2), 23: (3, 2), 24: (5, 1), 25: (5, 2), 26: (6, 2), 27: (7, 2), 28: (8, 2),
        29: (10, 1), 30: (10, 2)}


def aufbau(Z):
    """Strict Aufbau filling (4s before 3d), with no half-filled or full-subshell exception."""
    e = Z - 18
    s = min(2, e)
    return (e - s, s)


def all_in_d(Z):
    """Every electron beyond [Ar] put in 3d: the (n-1)d subshell taken to fill completely before ns."""
    e = Z - 18
    if e > 10:
        raise ValueError("more than ten electrons beyond argon")
    return (e, 0)


def strip(cfg, q, first="4s"):
    """Remove q electrons from a configuration, from 4s first (the rule) or from 3d first."""
    d, s = cfg
    if q > d + s:
        raise ValueError("not that many electrons beyond argon")
    if first == "4s":
        take = min(q, s)
        return (d - (q - take), s - take)
    take = min(q, d)
    return (d - take, s - (q - take))


def ion_cfg(Z, q, first="4s"):
    """The ion M^q+ from the observed atom: 4s electrons go first (the rule) unless first="3d"."""
    return strip(ATOM[Z], q, first)


def unpaired(d):
    """Unpaired electrons in a d^n subshell by Hund's rule."""
    return d if d <= 5 else 10 - d


def _cfg(c):
    return f"d{c[0]}s{c[1]}"


def _answer(p, atom_rule, ion_rule):
    Z, q = int(p["Z"]), int(p["q"])
    ion = _cfg(ion_rule(Z, q))
    if p["ask"] == "ion":
        return Symbol(ion)
    return Symbol(_cfg(atom_rule(Z)) + "_" + ion)


def key(v, p):
    return _answer(p, lambda Z: ATOM[Z], lambda Z, q: ion_cfg(Z, q))


def m1(v, p):
    """Fills by the Aufbau order with no exception (Cr 3d4 4s2, Cu 3d9 4s2), then strips 4s first."""
    Z = int(p["Z"])
    if aufbau(Z) == ATOM[Z]:
        raise ValueError("no exception for this element")
    return _answer(p, aufbau, lambda Z, q: strip(aufbau(Z), q))


def m2(v, p):
    """Takes the ion's electrons from 3d first, because 3d fills after 4s."""
    return _answer(p, lambda Z: ATOM[Z], lambda Z, q: ion_cfg(Z, q, "3d"))


def m3(v, p):
    """Puts every electron beyond argon into 3d, for the atom and the ion alike."""
    return _answer(p, all_in_d, lambda Z, q: strip(all_in_d(Z), q))


def m4(v, p):
    """Adds q electrons for a positive ion instead of removing them: writes the atom with Z + q electrons."""
    def added(Z, q):
        if Z + q not in ATOM:
            raise ValueError("past zinc")
        return ATOM[Z + q]
    return _answer(p, lambda Z: ATOM[Z], added)


def m5(v, p):
    """Thinks an ion loses only its 4s electrons, whatever its charge: the 3d count stays the atom's."""
    def only_4s(Z, q):
        d, s = ATOM[Z]
        if q <= s:
            raise ValueError("charge does not exceed the 4s electrons")
        return (d, 0)
    return _answer(p, lambda Z: ATOM[Z], only_4s)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
