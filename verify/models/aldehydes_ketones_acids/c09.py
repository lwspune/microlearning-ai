"""C09 Acid strength of carboxylic acids: named answers. Carboxylate ions are stabilised by resonance, so acids beat
phenols, which beat alcohols; electron-withdrawing groups (NO2, Cl; nearer = stronger) raise acidity, electron-donating
groups (CH3, OCH3, NH2) lower it; HCOOH > CH3COOH.
M1 thinks electron-donating groups raise acidity; M2 thinks electron-withdrawing groups lower it; M3 thinks a halogen
lowers acidity; M4 thinks the lighter acid is stronger; M5 thinks every COOH acid is equally strong; M6 thinks a more
distant Cl has the bigger effect; M7 thinks phenols are stronger acids than carboxylic acids; M8 thinks alcohols are
stronger acids than phenols; M9 thinks CH3 donates more strongly than NH2."""
from ._table import table_models

ANSWERS = {
    "lowest": {"key": "methoxy", "C09-M2": "nitro", "C09-M1": "benzoic", "C09-M3": "chloro"},
    "formic": {"key": "methyl_plus_i", "C09-M1": "acetic_stronger", "C09-M4": "lighter", "C09-M5": "equal"},
    "chloro": {"key": "chloro_2", "C09-M6": "chloro_4", "C09-M2": "butanoic", "C09-M5": "all_equal"},
    "order": {"key": "etoh_phoh_acoh", "C09-M7": "etoh_acoh_phoh", "C09-M8": "phoh_etoh_acoh", "C09-M5": "equal"},
    "weakest": {"key": "aminophenol", "C09-M2": "nitrophenol", "C09-M9": "cresol", "C09-M3": "chlorophenol"},
}
MODELS = table_models("C09", ANSWERS, 9)
