"""C05 Chirality and optical isomerism: answer models (the key, and one per misconception).

Three kinds of item (params["kind"]):
  "count"   params["smiles"]: how many chiral carbons the molecule has (an Integer).
  "which"   params["set"]: four SMILES labelled a, b, c, d; the answer names which are chiral
            (a Symbol such as ch_a, ch_abc, ch_none, ch_all). A molecule counts as chiral when it has
            at least one carbon its rule calls chiral.
  "many"    params["set"]: four SMILES; how many of them are chiral (an Integer).
  "racemic" what an equimolar mixture of the two enantiomers does to plane-polarised light (a Symbol).
The key compares the four whole groups on each carbon (each group's full branch, H included);
each misconception applies its own test of "chiral carbon". parse() comes from C01.
"""
from sympy import Integer, Symbol

from .c01 import HALOGENS, parse


def _groups(atoms, bonds, hs, i):
    """Canonical strings for the four groups on atom i (hydrogens included)."""
    def branch(j, parent, seen):
        seen = seen | {j}
        kids = sorted(
            f"{bonds[j][k]}{branch(k, j, seen)}" for k in bonds[j] if k != parent and k not in seen
        )
        return f"{atoms[j]}H{hs[j]}(" + ",".join(kids) + ")"
    return [branch(j, i, {i}) for j in bonds[i]] + ["H"] * hs[i]


def _sp3_carbons(atoms, bonds):
    return [i for i, a in enumerate(atoms) if a == "C" and all(o == 1 for o in bonds[i].values())]


def chiral_key(s):
    atoms, bonds, hs = parse(s)
    return [i for i in _sp3_carbons(atoms, bonds) if len(set(_groups(atoms, bonds, hs, i))) == 4]


def chiral_m1(s):
    """Every carbon carrying the functional group (a halogen or OH) is chiral."""
    atoms, bonds, hs = parse(s)
    return [i for i in _sp3_carbons(atoms, bonds) if any(atoms[j] in HALOGENS | {"O"} for j in bonds[i])]


def chiral_m2(s):
    """Compares only the atoms bonded directly to the carbon: chiral only if they are four different elements."""
    atoms, bonds, hs = parse(s)
    return [
        i for i in _sp3_carbons(atoms, bonds)
        if len({atoms[j] for j in bonds[i]} | ({"H"} if hs[i] else set())) == 4 and hs[i] <= 1
    ]


def chiral_m3(s):
    """Takes three different groups as enough: a carbon with two H atoms (or two equal groups) still counts."""
    atoms, bonds, hs = parse(s)
    return [i for i in _sp3_carbons(atoms, bonds) if len(set(_groups(atoms, bonds, hs, i))) >= 3]


RULES = {"key": chiral_key, "C05-M1": chiral_m1, "C05-M2": chiral_m2, "C05-M3": chiral_m3}
RACEMIC = {
    "key": "rac_cancel",
    "C05-M4": "rac_same_way",
    "C05-M5": "rac_half",
    "C05-M6": "rac_achiral",
}


def _answer(mid, p):
    kind = p["kind"]
    if kind == "racemic":
        if mid not in RACEMIC:
            raise ValueError("not a light-rotation misconception")
        return Symbol(RACEMIC[mid])
    if mid not in RULES:
        raise ValueError("not a chiral-carbon misconception")
    rule = RULES[mid]
    if kind == "count":
        return Integer(len(rule(p["smiles"])))
    chiral = [bool(rule(s)) for s in p["set"].split(",")]
    if kind == "many":
        return Integer(sum(chiral))
    picked = "".join(l for l, c in zip("abcd", chiral) if c)
    return Symbol("ch_" + {"": "none", "abcd": "all"}.get(picked, picked))


def key(v, p):
    return _answer("key", p)


def m1(v, p):
    return _answer("C05-M1", p)


def m2(v, p):
    return _answer("C05-M2", p)


def m3(v, p):
    return _answer("C05-M3", p)


def m4(v, p):
    """Thinks the two enantiomers rotate the plane of polarised light the same way."""
    return _answer("C05-M4", p)


def m5(v, p):
    """Thinks only one enantiomer is optically active and the other is inactive."""
    return _answer("C05-M5", p)


def m6(v, p):
    """Thinks a racemic mixture is inactive because its molecules are achiral."""
    return _answer("C05-M6", p)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
