"""C05 VSEPR and molecular shapes: named answers. Electron pairs around the central atom spread apart; lone pairs repel
more than bond pairs. CO2 is linear; CH4 109.5, NH3 107, H2O 104.5 degrees; BF3 (no lone pair) is trigonal planar but
NH3 (one lone pair) pyramidal; NF3 is trigonal pyramidal. VSEPR predicts the shapes of molecules and ions.
M1 thinks double bonds make a molecule linear; M2 ignores lone pairs on the central atom; M3 thinks two bonded atoms
always give a straight line; M4 thinks more bonds mean smaller angles; M5 thinks a linear molecule has the smallest
angle; M6 thinks one lone pair compresses more than two; M7 credits atom size; M8 thinks N forms double bonds; M9 thinks
B is sp3; M10 counts the lone pair as a bonded position; M11 invents a T shape; M12 thinks VSEPR gives energy levels;
M13 thinks it gives bond energies; M14 thinks it gives magnetic properties."""
from ._mix import mixed_models

TABLE = {
    "linear": {"key": "co2", "C05-M1": "so3", "C05-M2": "h2s", "C05-M3": "cl2o"},
    "smallest_angle": {"key": "h2o", "C05-M4": "ch4", "C05-M5": "c2h2", "C05-M6": "nh3"},
    "bf3_nh3": {"key": "lone_pair_n", "C05-M7": "n_larger", "C05-M8": "n_double_bonds", "C05-M9": "b_sp3"},
    "nf3": {"key": "pyramidal", "C05-M2": "trigonal_planar", "C05-M10": "tetrahedral", "C05-M11": "t_shaped"},
    "predicts": {"key": "shapes", "C05-M12": "energy_levels", "C05-M13": "bond_energies", "C05-M14": "magnetism"},
}
MODELS = mixed_models("C05", TABLE, 14)
