"""C02 Types of ligands: answer models (the key, and one per misconception).

Complexes use the C01 params (lig, out, charge). params["ask"]:
  "dent": the number of donor atoms of the one ligand in params["lig"];
  "type": the same, as a word (monodentate, bidentate, ...);
  "cn":   the coordination number of the complex;
  "sum":  the coordination number plus the metal's oxidation state.
Each misconception is a different rule for one ligand's donor-atom count.
"""
from sympy import Integer, Symbol

from .c01 import LIG, ligands, ox_state

WORD = {1: "monodentate", 2: "bidentate", 3: "tridentate", 4: "tetradentate", 6: "hexadentate"}


def _answer(p, dent):
    """Applies a per-ligand donor count `dent(name)` to the question asked."""
    lig = ligands(p)
    a = p["ask"]
    if a in ("dent", "type"):
        (name, _), = lig
        d = dent(name)
        return Symbol(WORD[d]) if a == "type" else Integer(d)
    cn = sum(dent(k) * n for k, n in lig)
    if a == "cn":
        return Integer(cn)
    return Integer(cn + ox_state(p))


def key(v, p):
    return _answer(p, lambda k: LIG[k]["dent"])


def m1(v, p):
    """Counts ligands, not donor atoms: every ligand counts once, whatever its denticity."""
    return _answer(p, lambda k: 1)


def m2(v, p):
    """Treats an ambidentate ligand as bidentate: counts both of its possible donor atoms."""
    if not any(LIG[k]["amb"] for k, _ in ligands(p)):
        raise ValueError("no ambidentate ligand")
    return _answer(p, lambda k: 2 if LIG[k]["amb"] else LIG[k]["dent"])


def m3(v, p):
    """Takes a ligand's denticity to be the size of its charge (a neutral ligand counts once)."""
    return _answer(p, lambda k: max(1, abs(LIG[k]["charge"])))


def m4(v, p):
    """Counts every atom that carries a lone pair as a donor (both oxygens of each carboxylate group)."""
    return _answer(p, lambda k: LIG[k]["lone"])


def m5(v, p):
    """Counts the electrons donated, two for each donor atom, instead of the donor atoms."""
    return _answer(p, lambda k: 2 * LIG[k]["dent"])


def m6(v, p):
    """Reads the denticity off a number prefix in the ligand's name (di-ethylene-triamine as bidentate)."""
    return _answer(p, lambda k: LIG[k]["num"])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
