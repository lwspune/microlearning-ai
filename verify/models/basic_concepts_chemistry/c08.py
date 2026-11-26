"""C08 Physical and chemical changes: named answers. A physical change alters form or state and makes no new substance
(dissolving sugar, melting wax, boiling water); a chemical change makes new substances with new properties (burning,
rusting, curdling milk, cooking an egg). A burning candle shows both: wax melts, then burns.
M1 picks burning paper; M2 rusting; M3 cooking an egg; M4 melting wax; M5 boiling water; M6 crushing chalk; M7 takes
a change of shape; M8 a change of state; M9 dissolving; M10 calls the candle physical only; M11 chemical only;
M12 neither; M13 calls physical changes irreversible; M14 thinks they always absorb heat; M15 thinks mass changes."""
from ._mix import mixed_models

TABLE = {
    "physical": {"key": "dissolving_sugar", "C08-M1": "burning_paper", "C08-M2": "rusting", "C08-M3": "cooking_egg"},
    "chemical": {"key": "curdling_milk", "C08-M4": "melting_wax", "C08-M5": "boiling_water", "C08-M6": "crushing_chalk"},
    "sign": {"key": "new_substance", "C08-M7": "new_shape", "C08-M8": "new_state", "C08-M9": "dissolves"},
    "candle": {"key": "both_kinds", "C08-M10": "physical_only", "C08-M11": "chemical_only", "C08-M12": "neither_kind"},
    "nature": {"key": "reversible_no_new", "C08-M13": "irreversible_new", "C08-M14": "absorb_heat", "C08-M15": "mass_changes"},
}
MODELS = mixed_models("C08", TABLE, 15)
