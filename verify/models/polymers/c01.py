"""C01 Monomers, polymers and classes: named answers. Proteins, cellulose, starch and natural rubber are natural; rayon is
semisynthetic; polythene, PVC and Teflon are synthetic. A copolymer has two or more kinds of monomer (PHBV, Buna-S,
nylon 6,6); a homopolymer one (PVC, Orlon, Teflon). Degree of polymerization = polymer molar mass / repeat-unit molar
mass. Linear, branched (LDP) or cross-linked (Bakelite) by structure.
M1 thinks a polymer is natural when its monomer occurs in nature; M2 counts semisynthetic polymers as natural; M3 calls
any household polymer natural; M4 takes a side group for a second monomer; M5 takes PVC's vinyl and chloride parts for
two monomers; M6 thinks two kinds of atom in a monomer make a copolymer; M7 multiplies the masses; M8 uses the CH2
mass; M9 divides the wrong way; M10 thinks Bakelite is linear; M11 takes cross-links for branches; M12 thinks Bakelite is
one giant ring; M13 confuses homo- with copolymers; M14 thinks homo means natural; M15 confuses homo with linear."""
from ._table import table_models

ANSWERS = {
    "natural": {"key": "protein", "C01-M1": "polythene", "C01-M2": "rayon", "C01-M3": "teflon"},
    "copolymer": {"key": "phbv", "C01-M4": "orlon", "C01-M5": "pvc", "C01-M6": "teflon"},
    "dp": {"key": "dp_1000", "C01-M7": "dp_784000", "C01-M8": "dp_2000", "C01-M9": "dp_0_001"},
    "bakelite": {"key": "cross_linked", "C01-M10": "linear", "C01-M11": "branched", "C01-M12": "one_ring"},
    "homo": {"key": "one_monomer", "C01-M13": "two_monomers", "C01-M14": "natural_monomers", "C01-M15": "no_side_groups"},
}
MODELS = table_models("C01", ANSWERS, 15)
