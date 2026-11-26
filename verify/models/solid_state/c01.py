"""C01 Crystalline and amorphous solids: answer models (the key, and one per misconception).

params["sub"] names the solid; PROPS holds what the stem tells the student about it. The key is the book's
class (Section 1.3, Table 1.1: by the particles and the forces between them); each misconception is a rule
that classifies from one property alone.
"""
from sympy import Symbol

# hard: very hard; cond_solid / cond_melt: conducts as a solid / when molten; lustre: shiny;
# molecules: made of separate covalently bonded molecules; polar_bonds: those molecules have polar bonds.
PROPS = {
    "salt": dict(hard=True, cond_solid=False, cond_melt=True, lustre=False, molecules=False, polar_bonds=False),
    "iodine": dict(hard=False, cond_solid=False, cond_melt=False, lustre=True, molecules=True, polar_bonds=False),
    "dry_ice": dict(hard=False, cond_solid=False, cond_melt=False, lustre=False, molecules=True, polar_bonds=True),
    "graphite": dict(hard=False, cond_solid=True, cond_melt=False, lustre=True, molecules=False, polar_bonds=False,
                     network=True),
    "ice": dict(hard=False, cond_solid=False, cond_melt=False, lustre=False, molecules=True, polar_bonds=True),
}

# The book's class of each solid (Table 1.1 and the molecular-solid subclasses of Section 1.3.3).
CLASS = {
    "salt": "ionic",
    "iodine": "nonpolar_molecular",
    "dry_ice": "nonpolar_molecular",
    "graphite": "covalent_network",
    "ice": "h_bonded_molecular",
}


def _props(p):
    return PROPS[p["sub"]]


def key(v, p):
    return Symbol(CLASS[p["sub"]])


def m1(v, p):
    """Classes by hardness alone: very hard means covalent network, soft means molecular."""
    return Symbol("covalent_network" if _props(p)["hard"] else "molecular")


def m2(v, p):
    """Anything that conducts (solid or melt) or shines is metallic."""
    s = _props(p)
    if s["cond_solid"] or s["cond_melt"] or s["lustre"]:
        return Symbol("metallic")
    raise ValueError("no metal-like property to mislead")


def m3(v, p):
    """Covalent bonds inside the molecules make it a covalent network solid."""
    if _props(p)["molecules"]:
        return Symbol("covalent_network")
    raise ValueError("not a molecular solid")


def m4(v, p):
    """A soft, low-melting solid must be amorphous: crystalline means hard."""
    if not _props(p)["hard"]:
        return Symbol("amorphous")
    raise ValueError("not soft")


def m5(v, p):
    """A solid that does not conduct as a solid must be molecular (forgets ionic solids)."""
    if not _props(p)["cond_solid"]:
        return Symbol("molecular")
    raise ValueError("conducts as a solid")


def m6(v, p):
    """Names the molecular subclass by bond polarity alone: polar bonds make a polar molecular solid."""
    s = _props(p)
    if s["molecules"]:
        return Symbol("polar_molecular" if s["polar_bonds"] else "nonpolar_molecular")
    raise ValueError("not a molecular solid")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
