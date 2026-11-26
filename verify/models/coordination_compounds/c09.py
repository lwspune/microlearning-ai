"""C09 Crystal field theory: answer models (the key, and one per misconception).

A complex is params as in c08 (metal, lig, charge). In an octahedral field the five d orbitals split into a
lower t2g set (three orbitals, -0.4 Delta_o) and an upper e_g set (two orbitals, +0.6 Delta_o). The book's
rule: a C, N or P donor is strong field (Delta_o larger than the pairing energy: fill t2g in pairs first, low
spin); a halogen, O or S donor is weak field (one electron in each of the five orbitals before any pairs, high
spin).
params["ask"]:
  "config": the configuration t2g^a e_g^b, a named answer "t<a>e<b>";
  "n":      the number of unpaired electrons.
"""
from sympy import Symbol

from .c08 import d_3d_first, d_ion, strong


def fill(d, is_strong, lower=3):
    """(electrons in the lower set, in the upper set); `lower` is the number of orbitals in the lower set."""
    upper = 5 - lower
    if is_strong:
        lo = min(d, 2 * lower)
        return lo, d - lo
    lo, up = min(d, lower), min(max(d - lower, 0), upper)
    rest = d - lo - up
    lo2 = min(rest, lower)
    return lo + lo2, up + rest - lo2


def unpaired(n, orbitals):
    return n if n <= orbitals else 2 * orbitals - n


def answer(p, d=None, is_strong=None, eg_lower=False):
    d = d_ion(p) if d is None else d
    is_strong = strong(p) if is_strong is None else is_strong
    if eg_lower:
        e, t = fill(d, is_strong, lower=2)
    else:
        t, e = fill(d, is_strong)
    if p["ask"] == "n":
        return unpaired(t, 3) + unpaired(e, 2)
    return Symbol(f"t{t}e{e}")


def key(v, p):
    return answer(p)


def m1(v, p):
    """Always high spin: puts one electron in each of the five orbitals first, even with a strong field ligand."""
    if not strong(p):
        raise ValueError("weak field already")
    return answer(p, is_strong=False)


def m2(v, p):
    """Always low spin: pairs in t2g first, even with a weak field ligand."""
    if strong(p):
        raise ValueError("strong field already")
    return answer(p, is_strong=True)


def m3(v, p):
    """Takes e_g as the lower set and fills it first."""
    return answer(p, eg_lower=True)


def m4(v, p):
    """Removes the ion's electrons from 3d instead of 4s, so counts the wrong number of d electrons."""
    return answer(p, d=d_3d_first(p))


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4}
