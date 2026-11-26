"""C05 Ionic and covalent character: named answers. A small, highly charged cation polarises a large anion, giving
covalent character: Be2+ makes BeCl2 covalent (MgCl2 ionic); small Li+ gives LiCl covalent character (NaCl ionic).
BeCl2 is electron deficient: a Lewis acid. Be2+ has the greatest polarising power of Be2+, Ba2+, Na+, K+.
M1 calls Be more electropositive; M2 counts chlorine; M3 calls Be2+ larger; M4 gives Li+ a higher charge; M5 counts
electrons; M6 calls Na+ smaller; M7 thinks any group 2 chloride is a Lewis acid; M8 thinks K+ accepts pairs; M9 thinks
LiCl is electron deficient; M10 thinks big cations polarise more; M11 picks Na+; M12 picks K+; M13 says a large cation;
M14 says a small anion; M15 says single charges."""
from ._mix import mixed_models

TABLE = {
    "becl2": {"key": "be_small_polarising", "C05-M1": "be_electropositive", "C05-M2": "more_chlorine", "C05-M3": "be_larger"},
    "licl": {"key": "li_smaller", "C05-M4": "li_higher_charge", "C05-M5": "more_electrons", "C05-M6": "na_smaller"},
    "lewis": {"key": "becl2", "C05-M7": "bacl2", "C05-M8": "kcl", "C05-M9": "licl"},
    "polarising": {"key": "be2", "C05-M10": "ba2", "C05-M11": "na_ion", "C05-M12": "k_ion"},
    "fajans": {"key": "small_charged_cation", "C05-M13": "large_cation", "C05-M14": "small_anion", "C05-M15": "single_charges"},
}
MODELS = mixed_models("C05", TABLE, 15)
