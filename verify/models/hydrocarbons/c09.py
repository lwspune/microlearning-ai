"""C09 Conformations of ethane: named answers. Rotation about the C-C sigma bond gives staggered (dihedral angle 60
degrees, most stable) and eclipsed (0 degrees, least stable) conformations; the difference, about 12.5 kJ/mol, is
torsional strain (repulsion between the bond pairs of adjacent C-H bonds). The barrier is small, so they interconvert
at room temperature and cannot be isolated.
M1 picks eclipsed; M2 picks skew; M3 thinks all are equal; M4 gives the staggered angle; M5 gives 180; M6 gives 120;
M7 thinks there is no difference; M8 multiplies by ten; M9 gives the C-C bond enthalpy; M10 blames angle strain;
M11 thinks rotation breaks the sigma bond; M12 blames hydrogen bonding; M13 calls them separable isomers; M14 thinks
only the staggered form exists; M15 thinks a bond must break."""
from ._mix import mixed_models

TABLE = {
    "stable": {"key": "staggered", "C09-M1": "eclipsed", "C09-M2": "skew", "C09-M3": "all_equal"},
    "angle": {"key": "deg_0", "C09-M4": "deg_60", "C09-M5": "deg_180", "C09-M6": "deg_120"},
    "energy": {"key": "kj_12_5", "C09-M7": "kj_0", "C09-M8": "kj_125", "C09-M9": "kj_348"},
    "cause": {"key": "torsional_strain", "C09-M10": "angle_strain", "C09-M11": "broken_sigma", "C09-M12": "h_bonding"},
    "isolate": {"key": "no_interconvert", "C09-M13": "yes_isomers", "C09-M14": "only_staggered", "C09-M15": "needs_bond_break"},
}
MODELS = mixed_models("C09", TABLE, 15)
