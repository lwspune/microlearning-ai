"""C08 Hyperconjugation: named answers. A C-H sigma bond on an alpha-carbon overlaps (sigma-p) with the empty p orbital
of a carbocation or a pi bond: 'no-bond resonance'. More alpha-hydrogens give more stabilisation: tert-butyl (9) >
isopropyl (6) > ethyl (3) > methyl (0). The isopropyl cation, (CH3)2CH+, has 6 alpha-hydrogens.
M1 says sigma-sigma; M2 says p-p; M3 says pi-pi; M4 says inductive effect; M5 says resonance; M6 says electromeric effect;
M7 counts the H on the cationic carbon; M8 counts alpha-carbons; M9 counts one methyl; M10 reverses the order; M11 calls
them equal; M12 puts isopropyl first; M13 says inductive effect; M14 says electromeric effect; M15 says conjugation."""
from ._mix import mixed_models

TABLE = {
    "overlap": {"key": "sigma_p", "C08-M1": "sigma_sigma", "C08-M2": "p_p", "C08-M3": "pi_pi"},
    "name": {"key": "hyperconjugation", "C08-M4": "inductive", "C08-M5": "resonance", "C08-M6": "electromeric"},
    "alpha_h": {"key": "six", "C08-M7": "seven", "C08-M8": "two", "C08-M9": "three"},
    "order": {"key": "tert_iso_ethyl_methyl", "C08-M10": "methyl_ethyl_iso_tert", "C08-M11": "all_equal", "C08-M12": "iso_tert_ethyl_methyl"},
    "no_bond": {"key": "no_bond_resonance", "C08-M13": "inductive", "C08-M14": "electromeric", "C08-M15": "conjugation"},
}
MODELS = mixed_models("C08", TABLE, 15)
