"""C04 Avogadro's law and Dalton's theory: named answers. Avogadro: equal volumes of all gases at the same T and P hold
equal numbers of molecules; H2 + Cl2 -> 2HCl (1 + 1 -> 2 volumes) needs diatomic molecules. Dalton: matter is made of
indivisible atoms (no longer accepted), atoms of an element are alike, they combine in simple whole-number ratios and are
only rearranged in reactions, which explains conservation of mass.
M1 says equal masses; M2 says equal numbers of atoms; M3 states Boyle's law; M4 scales molecules by mass; M5 thinks
lighter gases hold more molecules; M6 says equal masses of gas; M7 lets atoms split; M8 thinks gases expand on
reacting; M9 credits larger HCl molecules; M10 rejects the whole-number postulate; M11 rejects conservation of atoms;
M12 rejects fixed ratios; M13 says molecules never break apart; M14 cites gas volumes; M15 says all atoms weigh the
same."""
from ._mix import mixed_models

TABLE = {
    "statement": {"key": "equal_volumes_molecules", "C04-M1": "equal_masses", "C04-M2": "equal_atoms", "C04-M3": "boyle"},
    "same_volume": {"key": "same_molecules", "C04-M4": "o2_sixteen_times", "C04-M5": "h2_sixteen_times", "C04-M6": "same_mass"},
    "hcl": {"key": "diatomic", "C04-M7": "atoms_split", "C04-M8": "gases_expand", "C04-M9": "larger_hcl"},
    "rejected": {"key": "indivisible", "C04-M10": "whole_number_ratio", "C04-M11": "not_created", "C04-M12": "fixed_ratio"},
    "mass": {"key": "rearranged", "C04-M13": "molecules_intact", "C04-M14": "gas_volumes", "C04-M15": "same_mass_atoms"},
}
MODELS = mixed_models("C04", TABLE, 15)
