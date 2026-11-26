"""C04 Basic strength of amines: named answers. The N lone pair accepts a proton; alkyl groups push electrons (+I) and
raise basicity; in water solvation and crowding give secondary > primary > tertiary > NH3 (for methyl amines);
in the gas phase only +I counts: tertiary > secondary > primary > NH3; aryl amines are weaker than NH3 (lone pair in
resonance); electron-withdrawing ring groups weaken them further; a smaller pKb means a stronger base.
M1 counts +I only, ignoring solvation and crowding in water; M2 thinks solvation alone decides; M3 thinks alkyl groups
lower basicity; M4 thinks OCH3 withdraws electrons; M5 thinks CH3 withdraws electrons; M6 thinks a second NH2 weakens the
base; M7 thinks a larger pKb means a stronger base; M8 thinks amines of one class are equally basic; M9 thinks amines are
neutral; M10 reads increasing pKb as increasing basicity; M11 ignores the resonance of the aniline lone pair; M12 thinks
NO2 donates electrons; M13 applies the aqueous order in the gas phase; M14 thinks crowding decides in the gas phase."""
from ._table import table_models

ANSWERS = {
    "highest": {"key": "dimethylamine", "C04-M1": "trimethylamine", "C04-M2": "methylamine", "C04-M3": "ammonia"},
    "weakest": {"key": "aminobenzoic_acid", "C04-M4": "dimethoxyaniline", "C04-M5": "o_toluidine", "C04-M6": "phenylenediamine"},
    "pkb": {"key": "diethylamine", "C04-M7": "dimethylamine", "C04-M8": "equal", "C04-M9": "neutral"},
    "pkb_order": {"key": "cyclohexyl_lt_aniline_lt_nitroaniline", "C04-M10": "nitroaniline_lt_aniline_lt_cyclohexyl",
                  "C04-M11": "aniline_lt_cyclohexyl_lt_nitroaniline", "C04-M12": "cyclohexyl_lt_nitroaniline_lt_aniline"},
    "gas": {"key": "tert_sec_prim_nh3", "C04-M13": "sec_prim_tert_nh3", "C04-M3": "nh3_prim_sec_tert", "C04-M14": "prim_sec_tert_nh3"},
}
MODELS = table_models("C04", ANSWERS, 14)
