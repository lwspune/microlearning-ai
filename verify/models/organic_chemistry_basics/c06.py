"""C06 The inductive effect: named answers. A permanent shift of sigma electrons: -I towards electronegative atoms (Cl,
NO2, COOH), +I away from alkyl groups (CH3). More -I groups strengthen it (CH3CHCl2 > CH3CH2Cl); Cl > Br > I in -I. It
fades quickly along the chain, negligible beyond about three carbons.
M1 picks one Cl; M2 calls them equal; M3 calls Cl +I; M4 calls the shift temporary; M5 thinks it needs an attacking
reagent; M6 limits it to ions; M7 picks Br; M8 picks I; M9 calls them equal; M10 picks NO2; M11 picks Cl; M12 picks COOH;
M13 thinks it grows along the chain; M14 thinks it is constant; M15 thinks it acts through pi bonds."""
from ._mix import mixed_models

TABLE = {
    "dichloro": {"key": "chcl2", "C06-M1": "ch2cl", "C06-M2": "equal", "C06-M3": "cl_plus_i"},
    "permanent": {"key": "permanent", "C06-M4": "temporary", "C06-M5": "reagent_only", "C06-M6": "ions_only"},
    "halides": {"key": "chloride", "C06-M7": "bromide", "C06-M8": "iodide", "C06-M9": "equal"},
    "plus_i": {"key": "methyl", "C06-M10": "nitro", "C06-M11": "chloro", "C06-M12": "carboxyl"},
    "distance": {"key": "fades", "C06-M13": "grows", "C06-M14": "constant", "C06-M15": "pi_only"},
}
MODELS = mixed_models("C06", TABLE, 15)
