"""C06 Balancing by half reactions: named answers. MnO4- + 8H+ + 5e- -> Mn2+ + 4H2O (charge: -1 + 8 - 5 = +2); the
Fe2+ -> Fe3+ + e- half is multiplied by 5 so electrons cancel. Mn2+ + 2H2O -> MnO2 + 4H+ + 2e- with ClO3- + 2H+ + e- ->
ClO2 + H2O gives Mn2+ + 2ClO3- -> MnO2 + 2ClO2. Electrons go on the more positive side; in basic solution add OH- to both
sides to turn H+ into water.
M1 uses Mn's oxidation number; M2 uses the number of waters; M3 uses the number of H+; M4 leaves the Fe half alone; M5
inverts the factor; M6 doubles it; M7 takes a 1 : 1 ratio; M8 inverts the ratio; M9 uses Mn's +7 change; M10 adds
electrons to the oxidation half only; M11 always adds them to the products; M12 thinks electrons balance oxygen; M13
replaces H+ by O2; M14 removes all water; M15 adds H+ to both sides."""
from ._mix import mixed_models

TABLE = {
    "electrons": {"key": "five", "C06-M1": "seven", "C06-M2": "four", "C06-M3": "eight"},
    "multiply": {"key": "five", "C06-M4": "one", "C06-M5": "one_fifth", "C06-M6": "two"},
    "chlorate": {"key": "two_to_one", "C06-M7": "one_to_one", "C06-M8": "one_to_two", "C06-M9": "five_to_one"},
    "where": {"key": "positive_side", "C06-M10": "oxidation_only", "C06-M11": "products_always", "C06-M12": "balance_oxygen"},
    "basic": {"key": "add_oh", "C06-M13": "replace_with_o2", "C06-M14": "remove_water", "C06-M15": "add_h"},
}
MODELS = mixed_models("C06", TABLE, 15)
