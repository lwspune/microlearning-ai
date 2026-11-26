"""C04 Homogeneous and heterogeneous equilibria: named answers. Pure solids and liquids have constant concentration and
are left out of K: CaCO3(s) <=> CaO(s) + CO2(g) has Kp = p(CO2); 2NaHCO3(s) <=> Na2CO3(s) + CO2(g) + H2O(g) has
Kc = [CO2][H2O], unit mol^2 dm^-6. N2 + 3H2 <=> 2NH3 (all gases) is homogeneous. Adding Cl- to AgCl(s) <=> Ag+ + Cl-
shifts it left: more AgCl precipitates.
M1 includes the solids; M2 inverts; M3 writes concentrations of solids; M4 thinks K has no unit; M5 counts one gas; M6
inverts the unit; M7 thinks gas with solids is homogeneous; M8 thinks a solid with its ions is homogeneous; M9 thinks one
substance in two phases is homogeneous; M10 thinks solids do not react; M11 thinks they are too heavy; M12 gives solids
zero concentration; M13 shifts it right; M14 thinks equilibria with solids do not shift; M15 thinks K changes."""
from ._mix import mixed_models

TABLE = {
    "caco3": {"key": "p_co2", "C04-M1": "with_solids", "C04-M2": "inverse_co2", "C04-M3": "conc_solids"},
    "unit": {"key": "mol2_dm_minus6", "C04-M4": "no_unit", "C04-M5": "mol_dm_minus3", "C04-M6": "mol_minus2_dm6"},
    "homogeneous": {"key": "ammonia_gases", "C04-M7": "caco3_system", "C04-M8": "baso4_system", "C04-M9": "water_vapour"},
    "omit_solids": {"key": "constant_concentration", "C04-M10": "do_not_react", "C04-M11": "too_heavy", "C04-M12": "zero_concentration"},
    "agcl": {"key": "shifts_left", "C04-M13": "shifts_right", "C04-M14": "no_shift", "C04-M15": "k_changes"},
}
MODELS = mixed_models("C04", TABLE, 15)
