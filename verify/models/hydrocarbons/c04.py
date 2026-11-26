"""C04 Addition to alkenes: named answers. Markovnikov: H adds to the carbon with more H (propene + HBr ->
2-bromopropane; cold conc. H2SO4 then water -> propan-2-ol). With peroxide, HBr adds the other way (propene ->
1-bromopropane; 2-methylpropene -> 1-bromo-2-methylpropane). Bromine adds across C=C, decolourising bromine water.
M1 adds anti-Markovnikov without peroxide; M2 adds Br2 instead; M3 reduces; M4 ignores the peroxide; M5 adds Br2; M6
gives an alcohol; M7 reduces; M8 adds Br2; M9 adds water anti-Markovnikov; M10 reduces; M11 oxidises to an aldehyde; M12
thinks Br substitutes; M13 thinks bromine is only reduced; M14 thinks bromine dissolves."""
from ._mix import mixed_models

TABLE = {
    "markovnikov": {"key": "bromo_2", "C04-M1": "bromo_1", "C04-M2": "dibromo", "C04-M3": "propane"},
    "peroxide": {"key": "bromo_1", "C04-M4": "bromo_2", "C04-M5": "dibromo", "C04-M6": "propanol_1"},
    "isobutene": {"key": "bromo_1_methyl_2", "C04-M4": "bromo_2_methyl_2", "C04-M7": "methylpropane", "C04-M8": "dibromo"},
    "hydration": {"key": "propan_2_ol", "C04-M9": "propan_1_ol", "C04-M10": "propane", "C04-M11": "propanal"},
    "bromine_water": {"key": "adds", "C04-M12": "substitutes", "C04-M13": "reduced_only", "C04-M14": "dissolves"},
}
MODELS = mixed_models("C04", TABLE, 14)
