"""C07 Antibiotics: named answers. Salvarsan is arsenic-based (Ehrlich); Alexander Fleming discovered penicillin, a
narrow-spectrum antibiotic; chloramphenicol is broad spectrum, acting on many kinds of bacteria; sulphanilamide is a sulfa
drug that stops bacterial growth.
M1 picks an azo dye; M2 picks prontosil; M3 picks sulphapyridine; M4 credits Ehrlich; M5 credits Pasteur; M6 credits
Domagk; M7 says one kind only; M8 says it kills viruses; M9 names penicillin G; M10 calls sulphanilamide an analgesic;
M11 a floor antiseptic; M12 an antioxidant; M13 calls penicillin broad spectrum; M14 an analgesic; M15 arsenic-based."""
from ._mix import mixed_models

TABLE = {
    "arsenic": {"key": "salvarsan", "C07-M1": "azo_dye", "C07-M2": "prontosil", "C07-M3": "sulphapyridine"},
    "fleming": {"key": "fleming", "C07-M4": "ehrlich", "C07-M5": "pasteur", "C07-M6": "domagk"},
    "broad": {"key": "many_kinds", "C07-M7": "one_kind", "C07-M8": "viruses", "C07-M9": "penicillin_g"},
    "sulpha": {"key": "sulfa_drug", "C07-M10": "analgesic", "C07-M11": "floor_antiseptic", "C07-M12": "antioxidant"},
    "penicillin": {"key": "narrow", "C07-M13": "broad", "C07-M14": "analgesic", "C07-M15": "arsenic_based"},
}
MODELS = mixed_models("C07", TABLE, 15)
