"""C05 Nylons and polyesters: named answers. Nylons are polyamides (-CO-NH-): nylon 6,6 from hexamethylenediamine and
adipic acid; nylon 6 from caprolactam (a seven-membered ring of six C and one N). Terylene (Dacron, PET) is a polyester
(-CO-O-) from ethylene glycol and terephthalic acid.
M1 thinks nylon is semisynthetic; M2 thinks it is a polyester; M3 thinks it is a cellulose fibre; M4 confuses nylon 6,6
with nylon 6; M5 with terylene; M6 thinks nylon is an ester of adipic acid; M7 leaves out the C=O carbon; M8 counts the
N as a carbon; M9 counts only the amide atoms; M10 confuses Dacron with nylon 6; M11 with Orlon; M12 with Novolac; M13
takes the ester link for an amide; M14 calls it a polyolefin; M15 calls it a polysaccharide."""
from ._table import table_models

ANSWERS = {
    "nylon": {"key": "polyamide", "C05-M1": "semisynthetic", "C05-M2": "polyester", "C05-M3": "cellulose"},
    "nylon66": {"key": "diamine_adipic", "C05-M4": "caprolactam", "C05-M5": "glycol_terephthalic", "C05-M6": "glycol_adipic"},
    "ring": {"key": "six", "C05-M7": "five", "C05-M8": "seven", "C05-M9": "two"},
    "dacron": {"key": "terylene", "C05-M10": "nylon6", "C05-M11": "orlon", "C05-M12": "novolac"},
    "ester": {"key": "polyester", "C05-M13": "polyamide", "C05-M14": "polyolefin", "C05-M15": "polysaccharide"},
}
MODELS = table_models("C05", ANSWERS, 15)
