"""C04 Bond parameters and polarity: named answers. Strength: covalent > hydrogen bond > van der Waals. More bonds
between two atoms (more unsaturation) make the bond shorter and stronger: C-C bond enthalpy ethane 348 < ethene 612 <
ethyne 837 kJ/mol. C=O bonds are polar but linear CO2 has zero dipole moment; HF is polar because F is far more
electronegative.
M1 ranks van der Waals forces above hydrogen bonds; M2 ranks hydrogen bonds above covalent ones; M3 reverses the order;
M4 thinks unsaturation lengthens bonds; M5 thinks length does not change; M6 thinks it rises then falls; M7 thinks
single bonds are strongest; M8 thinks double bonds are strongest; M9 thinks all are equally stable; M10 thinks C=O is
nonpolar; M11 ignores symmetry; M12 reverses bond and molecule; M13 thinks HF is ionic; M14 thinks H is more
electronegative; M15 puts a lone pair on H."""
from ._mix import mixed_models

TABLE = {
    "strength": {"key": "cov_h_vdw", "C04-M1": "cov_vdw_h", "C04-M2": "h_cov_vdw", "C04-M3": "vdw_h_cov"},
    "unsaturation": {"key": "decreases", "C04-M4": "increases", "C04-M5": "unchanged", "C04-M6": "rises_falls"},
    "stable": {"key": "ethyne", "C04-M7": "ethane", "C04-M8": "ethene", "C04-M9": "all_equal"},
    "co2": {"key": "polar_bond_nonpolar_molecule", "C04-M10": "nonpolar_both", "C04-M11": "polar_both", "C04-M12": "nonpolar_bond_polar_molecule"},
    "hf": {"key": "f_electronegative", "C04-M13": "ionic", "C04-M14": "h_electronegative", "C04-M15": "lone_pair_h"},
}
MODELS = mixed_models("C04", TABLE, 15)
