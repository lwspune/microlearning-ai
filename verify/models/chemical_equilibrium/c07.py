"""C07 The Haber process: named answers. N2 + 3H2 <=> 2NH3 is exothermic with fewer gas moles on the right: high pressure
(about 200 atm), a moderate temperature (about 700 K, a compromise between yield and rate), an iron catalyst, and removing
ammonia as it forms. Raising the temperature lowers K for this exothermic reaction.
M1 picks low pressure; M2 thinks pressure does not matter; M3 calls the reaction endothermic; M4 thinks high temperature
raises the yield; M5 picks a very low temperature; M6 thinks temperature has no effect; M7 thinks removal helps the
catalyst; M8 thinks it raises K; M9 thinks it lowers the pressure; M10 picks V2O5; M11 picks Pt; M12 picks Ni; M13 thinks
K rises; M14 thinks K is unchanged; M15 thinks K becomes zero."""
from ._mix import mixed_models

TABLE = {
    "pressure": {"key": "high_fewer_moles", "C07-M1": "low_pressure", "C07-M2": "no_matter", "C07-M3": "high_endothermic"},
    "temperature": {"key": "moderate_compromise", "C07-M4": "high_yield", "C07-M5": "very_low", "C07-M6": "no_effect"},
    "remove": {"key": "shifts_right", "C07-M7": "helps_catalyst", "C07-M8": "raises_k", "C07-M9": "lowers_pressure"},
    "catalyst": {"key": "iron", "C07-M10": "v2o5", "C07-M11": "platinum", "C07-M12": "nickel"},
    "k_temp": {"key": "k_decreases", "C07-M13": "k_increases", "C07-M14": "k_unchanged", "C07-M15": "k_zero"},
}
MODELS = mixed_models("C07", TABLE, 15)
