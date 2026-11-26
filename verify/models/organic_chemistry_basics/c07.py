"""C07 Resonance: named answers. When one Lewis structure is not enough, the molecule is a hybrid of structures differing
only in electron positions. Acetate has resonance; methanol, ethane and cyclohexane do not. CH2=CH-CH=CH-CH3 is
conjugated; CH2=CH-CH2-CH=CH2 is not. The more favourable structure has no separated charges. Formate's two structures are
equivalent, so its C-O bonds are equal.
M1 thinks any lone pair gives resonance; M2 thinks sigma bonds delocalise; M3 thinks any ring has resonance; M4 counts
isolated double bonds; M5 picks both; M6 picks neither; M7 thinks the structures are separate molecules in equilibrium;
M8 moves atoms; M9 thinks the molecule flips between them; M10 prefers the most charges; M11 prefers positive charge on
O; M12 weights all equally; M13 keeps one C=O fixed; M14 puts the charge on C; M15 denies resonance."""
from ._mix import mixed_models

TABLE = {
    "shows": {"key": "acetate", "C07-M1": "methanol", "C07-M2": "ethane", "C07-M3": "cyclohexane"},
    "conjugated": {"key": "second", "C07-M4": "first", "C07-M5": "both", "C07-M6": "neither"},
    "hybrid": {"key": "electrons_only_hybrid", "C07-M7": "equilibrium", "C07-M8": "atoms_move", "C07-M9": "flips"},
    "favourable": {"key": "no_separated_charge", "C07-M10": "most_charges", "C07-M11": "positive_on_o", "C07-M12": "all_equal"},
    "formate": {"key": "equivalent_equal_bonds", "C07-M13": "fixed_double", "C07-M14": "charge_on_c", "C07-M15": "no_resonance"},
}
MODELS = mixed_models("C07", TABLE, 15)
