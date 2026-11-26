"""C03 Preparing aldehydes and ketones: named answers.
Hydration of propyne (HgSO4, H2SO4) gives the enol, which becomes propanone; ozonolysis with Zn/H2O splits C=C into
two carbonyls; Rosenmund (H2, Pd-BaSO4) stops acid chlorides at aldehydes; Gattermann-Koch (CO, HCl, AlCl3/CuCl)
gives benzaldehyde; Stephen reduction (SnCl2/HCl, then water) turns nitriles into aldehydes.
M1 thinks a terminal alkyne gives an aldehyde; M2 stops at the enol; M3 loses a carbon; M4 thinks ozonolysis always
gives aldehydes; M5 splits the molecule at the wrong bond; M6 goes on to the carboxylic acid; M7 over-reduces;
M8 gives a ketone where an aldehyde forms; M9 gives the acyl chloride."""
from ._table import table_models

ANSWERS = {
    "propyne": {"key": "propanone", "C03-M1": "propanal", "C03-M2": "enol", "C03-M3": "ethanal"},
    "ozone": {"key": "acetone", "C03-M4": "acetaldehyde", "C03-M5": "acetone_propanal", "C03-M6": "acetic_acid"},
    "rosenmund": {"key": "acetaldehyde", "C03-M7": "ethanol", "C03-M6": "ethanoic_acid", "C03-M8": "propanone"},
    "gk": {"key": "benzaldehyde", "C03-M6": "benzoic_acid", "C03-M9": "benzoyl_chloride", "C03-M8": "acetophenone"},
    "stephen": {"key": "sncl2", "C03-M7": "lialh4", "C03-M8": "ch3mgbr", "C03-M6": "dilute_acid"},
}
MODELS = table_models("C03", ANSWERS, 9)
