"""C01 Complexes and their terms: answer models (the key, and one per misconception).

A complex is described by string params, so every concept of the chapter can share these helpers:
  lig:    the ligands inside the bracket, in formula order, "NH3:5,Cl:1" (keys of LIG);
  out:    the counter ions outside the bracket, "Cl:2" or "K:3" (keys of ION); omit for a bare complex ion;
  charge: the charge on a bare complex ion (only when `out` is omitted);
  metal:  the metal's symbol (names in C05).

params["ask"]: "ox" (the metal's oxidation state) or "cn" (its coordination number).
"""
from sympy import Integer

# charge, denticity (donor atoms), atoms carrying a lone pair (N, O, S, C, halogen), donor element(s),
# book name, whether the name is itself complex (bis/tris), ambidentate, and the number prefix inside the name.
LIG = {
    "NH3": dict(charge=0, dent=1, lone=1, donor="N", name="ammine", amb=False, num=1),
    "H2O": dict(charge=0, dent=1, lone=1, donor="O", name="aqua", amb=False, num=1),
    "CO": dict(charge=0, dent=1, lone=2, donor="C", name="carbonyl", amb=False, num=1),
    "Cl": dict(charge=-1, dent=1, lone=1, donor="Cl", name="chloro", amb=False, num=1),
    "Br": dict(charge=-1, dent=1, lone=1, donor="Br", name="bromo", amb=False, num=1),
    "F": dict(charge=-1, dent=1, lone=1, donor="F", name="fluoro", amb=False, num=1),
    "CN": dict(charge=-1, dent=1, lone=2, donor="C", name="cyano", amb=False, num=1),
    "NO2": dict(charge=-1, dent=1, lone=3, donor="N", name="nitro", amb=True, num=1),
    "SCN": dict(charge=-1, dent=1, lone=2, donor="S", name="thiocyanato", amb=True, num=1),
    "en": dict(charge=0, dent=2, lone=2, donor="N", name="ethylenediamine", amb=False, num=2, paren=True),
    "ox": dict(charge=-2, dent=2, lone=4, donor="O", name="oxalato", amb=False, num=1),
    "dien": dict(charge=0, dent=3, lone=3, donor="N", name="diethylenetriamine", amb=False, num=2, paren=True),
    "EDTA": dict(charge=-4, dent=6, lone=10, donor="N,O", name="ethylenediaminetetraacetato", amb=False, num=4,
                 paren=True),
}

# Counter ions: charge and name.
ION = {
    "Cl": (-1, "chloride"), "Br": (-1, "bromide"), "NO3": (-1, "nitrate"), "SO4": (-2, "sulphate"),
    "K": (1, "potassium"), "Na": (1, "sodium"),
}


def parse(s):
    """ "NH3:5,Cl:1" -> [("NH3", 5), ("Cl", 1)] (empty string -> [])."""
    out = []
    for part in (s or "").split(","):
        if part:
            k, n = part.split(":")
            out.append((k, int(n)))
    return out


def ligands(p):
    return parse(p["lig"])


def counters(p):
    return parse(p.get("out", ""))


def sphere_charge(p):
    """The charge on the coordination sphere: it balances the counter ions."""
    if counters(p):
        return -sum(ION[k][0] * n for k, n in counters(p))
    return int(p.get("charge", 0))


def ligand_charge(p):
    return sum(LIG[k]["charge"] * n for k, n in ligands(p))


def ox_state(p):
    return sphere_charge(p) - ligand_charge(p)


def coord_number(p):
    return sum(LIG[k]["dent"] * n for k, n in ligands(p))


def key(v, p):
    if p["ask"] == "ox":
        return Integer(ox_state(p))
    return Integer(coord_number(p))


def m1(v, p):
    """Takes the oxidation state to be the charge on the coordination sphere (forgets the ligands' charges)."""
    if p["ask"] != "ox":
        raise ValueError("does not apply")
    return Integer(sphere_charge(p))


def m2(v, p):
    """Forgets the counter ions: takes the coordination sphere to be neutral, so x + (ligand charges) = 0."""
    if p["ask"] != "ox":
        raise ValueError("does not apply")
    return Integer(-ligand_charge(p))


def m3(v, p):
    """Mixes up oxidation state and coordination number: gives one when asked for the other."""
    if p["ask"] == "ox":
        return Integer(coord_number(p))
    return Integer(ox_state(p))


def m4(v, p):
    """Counts the counter ions outside the bracket as ligands too."""
    if p["ask"] != "cn":
        raise ValueError("does not apply")
    return Integer(coord_number(p) + sum(n for _, n in counters(p)))


def m5(v, p):
    """Thinks only neutral molecules are ligands: anions inside the bracket are left out of the count."""
    if p["ask"] != "cn":
        raise ValueError("does not apply")
    return Integer(sum(LIG[k]["dent"] * n for k, n in ligands(p) if LIG[k]["charge"] == 0))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
