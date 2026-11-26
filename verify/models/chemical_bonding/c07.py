"""C07 Hybridisation: named answers. sp: linear, 180 degrees (BeCl2); sp2: trigonal planar, 120 (BF3, ethene carbon);
sp3: tetrahedral (CH4), with lone pairs in NH3 (107) and H2O (104.5, two lone pairs repel more). Carbon promotes a 2s
electron and mixes 2s with three 2p into four equal sp3 orbitals.
M1 picks an sp3 centre; M2 picks an sp centre; M3 ignores the lone pair on N; M4 gives the sp2 angle; M5 gives the sp3
angle; M6 gives the angle between pure p orbitals; M7 thinks O is sp2; M8 thinks H2O has more bonds; M9 credits O's
size; M10 thinks carbon forms two ionic bonds; M11 thinks carbon borrows electrons; M12 thinks the four bonds are
unequal; M13 thinks every carbon is sp3; M14 confuses ethene with ethyne; M15 picks sp3d."""
from ._mix import mixed_models

TABLE = {
    "sp2": {"key": "bf3", "C07-M1": "ch4", "C07-M2": "becl2", "C07-M3": "nh3"},
    "becl2": {"key": "deg_180", "C07-M4": "deg_120", "C07-M5": "deg_109_5", "C07-M6": "deg_90"},
    "nh3_h2o": {"key": "two_lone_pairs", "C07-M7": "o_sp2", "C07-M8": "more_bonds", "C07-M9": "o_larger"},
    "carbon": {"key": "promote_sp3", "C07-M10": "ionic_bonds", "C07-M11": "borrows", "C07-M12": "unequal"},
    "ethene": {"key": "sp2", "C07-M13": "sp3", "C07-M14": "sp", "C07-M15": "sp3d"},
}
MODELS = mixed_models("C07", TABLE, 15)
