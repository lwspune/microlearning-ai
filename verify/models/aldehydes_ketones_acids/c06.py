"""C06 Reduction and oxidation tests: named answers. Clemmensen (Zn-Hg, conc. HCl) and Wolff-Kishner (NH2NH2, then
KOH in ethylene glycol, via the hydrazone) reduce C=O to CH2; NaBH4/LiAlH4 give alcohols; Tollens' reagent (silver
mirror) is reduced by all aldehydes, Fehling's by aliphatic aldehydes only; ketones and alcohols give neither.
M1 thinks aromatic aldehydes fail Tollens' test too; M2 thinks benzaldehyde fails Schiff's test; M3 thinks aromatic
aldehydes do not add bisulfite; M4 swaps the Clemmensen and Wolff-Kishner reagents; M5 thinks these reductions give
the alcohol; M6 thinks the reagent leaves the ketone unchanged; M7 thinks an alkene forms; M8 stops at the hydrazone;
M9 thinks ketones give a silver mirror; M10 thinks alcohols give a silver mirror; M11 thinks every compound with O
reduces Tollens' reagent."""
from ._table import table_models

ANSWERS = {
    "benz": {"key": "fehling", "C06-M1": "tollens", "C06-M2": "schiff", "C06-M3": "bisulfite"},
    "clem": {"key": "zn_hg_hcl", "C06-M4": "hydrazine_koh", "C06-M5": "nabh4", "C06-M7": "conc_h2so4"},
    "wk": {"key": "cyclopentane", "C06-M5": "cyclopentanol", "C06-M7": "cyclopentene", "C06-M8": "hydrazone"},
    "tollens": {"key": "ethanal", "C06-M9": "propanone", "C06-M10": "ethanol", "C06-M11": "all_three"},
    "acetophenone": {"key": "ethylbenzene", "C06-M5": "phenylethanol", "C06-M7": "styrene", "C06-M6": "unchanged"},
}
MODELS = table_models("C06", ANSWERS, 11)
