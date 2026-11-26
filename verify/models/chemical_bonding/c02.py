"""C02 Ionic bonds and lattice energy: named answers. Lattice energy, released when gaseous ions form one mole of the
solid, measures an ionic compound's stability. It grows with ionic charge and as ions get smaller. Book Table 5.1:
AlCl3 5492 > BeF2 3020 > CaCl2 2258 > LiCl 853 > NaCl 788 kJ/mol.
M1 reverses the order; M2 lets small size outweigh charge; M3 thinks 1 : 1 salts are most stable; M4 confuses lattice
energy with ionisation energy; M5 with electronegativity; M6 with bond length; M7 thinks heavier formulas mean higher
lattice energy; M8 thinks all 1 : 1 salts are equal; M9 thinks masses are needed; M10 thinks bigger ions attract more;
M11 thinks equal charges mean equal lattice energy; M12 thinks only the anion matters; M13 confuses it with electron
gain; M14 confuses it with melting."""
from ._mix import mixed_models

TABLE = {
    "order": {"key": "al_be_ca_li_na", "C02-M1": "na_li_ca_be_al", "C02-M2": "be_al_ca_li_na", "C02-M3": "li_na_be_ca_al"},
    "stability": {"key": "lattice_energy", "C02-M4": "ionisation_energy", "C02-M5": "electronegativity", "C02-M6": "bond_length"},
    "charge": {"key": "mgo", "C02-M7": "nacl", "C02-M8": "equal", "C02-M9": "need_masses"},
    "size": {"key": "licl", "C02-M10": "nacl", "C02-M11": "equal", "C02-M12": "anion_only"},
    "define": {"key": "ions_form_solid", "C02-M4": "remove_electron", "C02-M13": "gain_electron", "C02-M14": "melt"},
}
MODELS = mixed_models("C02", TABLE, 14)
