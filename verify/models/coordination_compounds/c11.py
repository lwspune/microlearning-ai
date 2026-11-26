"""C11 Metal carbonyls: named answers. CO donates its carbon lone pair to the metal (sigma) and accepts metal d
electrons into its empty pi* orbitals (pi back bonding); the two strengthen each other (synergic), and the filled pi*
weakens and lengthens C-O. The metal is in oxidation state 0. Ni(CO)4 tetrahedral (sp3), Fe(CO)5 trigonal
bipyramidal (dsp3), Cr(CO)6 octahedral (d2sp3).
M1 picks square planar; M2 octahedral; M3 trigonal bipyramidal; M4 octahedral for Fe(CO)5; M5 square pyramidal;
M6 tetrahedral; M7 sees only the sigma bond; M8 has CO's pi electrons go to the metal; M9 calls it ionic; M10 expects
a shorter C-O; M11 no change; M12 a broken C-O; M13 counts +5 for five ligands; M14 assumes +2; M15 counts -5."""
from ._mix import mixed_models

TABLE = {
    "ni": {"key": "tetrahedral", "C11-M1": "square_planar", "C11-M2": "octahedral", "C11-M3": "trigonal_bipyramidal"},
    "fe": {"key": "trigonal_bipyramidal", "C11-M4": "octahedral", "C11-M5": "square_pyramidal", "C11-M6": "tetrahedral"},
    "back": {"key": "d_to_pi_star", "C11-M7": "sigma_only", "C11-M8": "co_pi_to_metal", "C11-M9": "ionic"},
    "length": {"key": "longer", "C11-M10": "shorter", "C11-M11": "same_length", "C11-M12": "broken"},
    "ox": {"key": "ox_zero", "C11-M13": "ox_plus_five", "C11-M14": "ox_plus_two", "C11-M15": "ox_minus_five"},
}
MODELS = mixed_models("C11", TABLE, 15)
