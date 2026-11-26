"""C02 Intermolecular forces: named answers. Dispersion (London) forces act between all molecules and grow with size
(polarizability): the only force in Ar. Polar molecules (CHCl3) add dipole-dipole forces. N-H, O-H and F-H give hydrogen
bonds (CH3OH). Forces in liquids are stronger than in gases and weaker than in solids.
M1 thinks argon is polar; M2 sees hydrogen bonding where there is none; M3 calls the force ionic; M4 sees only dispersion
in methanol; M5 stops at dipole-dipole; M6 calls methanol ionic; M7 calls CHCl3 nonpolar; M8 thinks liquids are weaker
than gases; M9 thinks liquids are stronger than solids; M10 thinks liquids and gases are alike; M11 ties dispersion to
bond polarity; M12 ties it to N, O, F hydrogens; M13 ties it to temperature."""
from ._mix import mixed_models

TABLE = {
    "argon": {"key": "dispersion", "C02-M1": "dipole_dipole", "C02-M2": "hydrogen_bond", "C02-M3": "ionic"},
    "methanol": {"key": "hydrogen_bond", "C02-M4": "dispersion_only", "C02-M5": "dipole_only", "C02-M6": "ionic"},
    "chloroform": {"key": "dipole_dipole", "C02-M2": "hydrogen_bond", "C02-M7": "nothing_else", "C02-M3": "ionic"},
    "liquids": {"key": "between", "C02-M8": "weaker_than_gas", "C02-M9": "stronger_than_solid", "C02-M10": "same_as_gas"},
    "dispersion": {"key": "size_polarizability", "C02-M11": "bond_polarity", "C02-M12": "h_on_nof", "C02-M13": "temperature"},
}
MODELS = mixed_models("C02", TABLE, 13)
