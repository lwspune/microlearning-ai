"""C07 Hard water: named answers. Dissolved Ca2+ and Mg2+ make water hard. Their hydrogencarbonates give temporary
hardness, removed by boiling (Ca(HCO3)2 -> CaCO3 + H2O + CO2) or by Clark's method (slaked lime, Ca(OH)2); chlorides
and sulfates give permanent hardness, removed by washing soda (Na2CO3) or ion exchange. Hard water wastes soap: the
fatty-acid anions form insoluble calcium and magnesium salts (scum).
M1 blames chlorides and sulfates; M2 sodium salts; M3 dissolved CO2; M4 thinks filtering removes it; M5 adds common
salt; M6 thinks nothing removes it; M7 boils it; M8 filters it; M9 adds baking soda; M10 thinks soap dissolves too
well; M11 blames acidity; M12 blames sodium ions; M13 adds washing soda; M14 adds common salt; M15 bleaching powder."""
from ._mix import mixed_models

TABLE = {
    "temporary": {"key": "hydrogencarbonates", "C07-M1": "chlorides_sulfates", "C07-M2": "sodium_salts", "C07-M3": "dissolved_co2"},
    "boil": {"key": "boiling", "C07-M4": "filtering", "C07-M5": "common_salt", "C07-M6": "cannot_remove"},
    "permanent": {"key": "washing_soda", "C07-M7": "boiling", "C07-M8": "filtering", "C07-M9": "baking_soda"},
    "soap": {"key": "insoluble_salts", "C07-M10": "soap_too_soluble", "C07-M11": "too_acidic", "C07-M12": "sodium_ions"},
    "clark": {"key": "slaked_lime", "C07-M13": "washing_soda", "C07-M14": "common_salt", "C07-M15": "bleaching_powder"},
}
MODELS = mixed_models("C07", TABLE, 15)
