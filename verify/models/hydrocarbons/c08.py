"""C08 Electrophilic substitution in benzene: named answers. Nitration's electrophile is NO2+ (from conc. HNO3 and conc.
H2SO4). An ethyl group directs ortho-para; para is the major product (less crowded). Acylation uses CH3COCl with anhydrous
AlCl3. NO2 directs meta: chlorinating nitrobenzene gives m-chloronitrobenzene. Benzene substitutes rather than adds so its
aromatic ring survives.
M1 says NO2-; M2 says HNO3 itself; M3 says NO3-; M4 calls ethyl meta-directing; M5 replaces the ethyl group; M6 picks
ortho over para; M7 gives the alkylation reagents; M8 gives the nitrating mixture; M9 gives the chlorinating reagents; M10
calls NO2 ortho-para directing; M11 replaces NO2; M12 expects no reaction; M13 thinks benzene has no double bonds; M14
thinks addition is faster; M15 calls benzene saturated."""
from ._mix import mixed_models

TABLE = {
    "nitration": {"key": "nitronium", "C08-M1": "nitrite", "C08-M2": "nitric_acid", "C08-M3": "nitrate"},
    "ethylbenzene": {"key": "para", "C08-M4": "meta", "C08-M5": "chlorobenzene", "C08-M6": "ortho"},
    "acylation": {"key": "acyl_chloride_alcl3", "C08-M7": "methyl_chloride_alcl3", "C08-M8": "nitrating_mix", "C08-M9": "cl2_fecl3"},
    "nitrobenzene": {"key": "meta", "C08-M10": "ortho_para", "C08-M11": "replaces_no2", "C08-M12": "no_reaction"},
    "substitution": {"key": "keeps_aromatic", "C08-M13": "no_double_bonds", "C08-M14": "addition_faster", "C08-M15": "saturated"},
}
MODELS = mixed_models("C08", TABLE, 15)
