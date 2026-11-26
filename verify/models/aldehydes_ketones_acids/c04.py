"""C04 Boiling points and solubility: named answers. Aldehydes and ketones are polar but cannot hydrogen bond to one
another, so they boil above alkanes and ethers but below alcohols; carboxylic acids form hydrogen-bonded dimers and
boil highest; small carbonyl compounds dissolve in water by accepting hydrogen bonds; formalin is 40% aqueous methanal.
M1 thinks carbonyl compounds hydrogen bond to one another; M2 ranks by molar mass alone; M3 thinks acids boil below
alcohols; M4 thinks formalin is pure methanal; M5 confuses methanal with methanol; M6 thinks carbonyl compounds are
non-polar, so they neither attract one another nor dissolve in water; M7 thinks C-H hydrogens bond to water; M8 thinks acids are ionic; M9 reverses the order."""
from ._table import table_models

ANSWERS = {
    "order": {"key": "ethane_hcho_meoh", "C04-M1": "ethane_meoh_hcho", "C04-M6": "hcho_ethane_meoh",
              "C04-M9": "meoh_hcho_ethane"},
    "formalin": {"key": "aq_methanal_40", "C04-M4": "pure_methanal", "C04-M5": "aq_methanol", "C04-M6": "suspension"},
    "dissolve": {"key": "accept_h_bonds", "C04-M6": "do_not_dissolve", "C04-M7": "ch_bonds", "C04-M2": "light_only"},
    "acids": {"key": "dimers", "C04-M3": "alcohols_higher", "C04-M2": "mass_only", "C04-M8": "ionic"},
    "propanal": {"key": "no_self_h_bond", "C04-M1": "propanal_higher", "C04-M2": "lighter", "C04-M6": "nonpolar"},
}
MODELS = table_models("C04", ANSWERS, 9)
