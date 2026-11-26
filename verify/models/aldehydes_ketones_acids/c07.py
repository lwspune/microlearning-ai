"""C07 Aldol and Cannizzaro: named answers. With an alpha-H, dilute alkali joins two molecules (the alpha-carbon of
one to the carbonyl carbon of the other): the aldol, which dehydrates on heating (an addition-elimination overall).
Without an alpha-H (HCHO, C6H5CHO), conc. alkali gives Cannizzaro: one molecule reduced to the alcohol, one oxidised
to the acid salt.
M1 calls aldol condensation a nucleophilic substitution; M2 calls it a plain elimination; M3 dehydrates the aldol
even in the cold; M4 thinks every aldehyde undergoes Cannizzaro; M5 joins the molecules at the wrong carbons; M6 gives
only the acid from Cannizzaro; M7 thinks an aldehyde with no alpha-H does not react with alkali; M8 thinks aldehydes
without an alpha-H undergo aldol; M9 thinks ketones undergo Cannizzaro; M10 calls aldol condensation an electrophilic
substitution."""
from ._table import table_models

ANSWERS = {
    "type": {"key": "addition_elimination", "C07-M1": "nucleophilic_substitution", "C07-M2": "elimination",
             "C07-M10": "electrophilic_substitution"},
    "ethanal": {"key": "hydroxybutanal_3", "C07-M3": "but_2_enal", "C07-M4": "ethanol_acetate", "C07-M5": "hydroxybutanal_2"},
    "benz": {"key": "alcohol_benzoate", "C07-M8": "aldol", "C07-M6": "benzoic_only", "C07-M7": "no_reaction"},
    "which": {"key": "methanal", "C07-M4": "ethanal", "C07-M9": "propanone", "C07-M8": "none"},
    "propanal": {"key": "hydroxy_methylpentanal", "C07-M5": "hydroxyhexanal", "C07-M3": "methylpent_2_enal",
                 "C07-M4": "propanol_propanoate"},
}
MODELS = table_models("C07", ANSWERS, 10)
