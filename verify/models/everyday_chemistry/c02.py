"""C02 Rancidity, browning and antioxidants: named answers. Oxidative rancidity is a free-radical reaction; butyric acid
gives rancid fats their flavour. Cut fruit browns because an enzyme oxidises phenolic compounds in air; SO2 and lemon
juice slow it. Vitamin E in packed oil is an antioxidant that delays rancidity.
M1 says addition; M2 says substitution; M3 says combination; M4 picks glycerol; M5 picks protein; M6 picks saturated fat;
M7 picks SO3; M8 picks H2SO4; M9 picks Na2CO3; M10 thinks vitamin E is for flavour; M11 thinks it kills bacteria; M12
thinks it removes water; M13 blames bacteria; M14 blames caramelising sugar; M15 blames evaporation."""
from ._mix import mixed_models

TABLE = {
    "rancidity": {"key": "free_radical", "C02-M1": "addition", "C02-M2": "substitution_rxn", "C02-M3": "combination"},
    "rancid_flavour": {"key": "butyric_acid", "C02-M4": "glycerol", "C02-M5": "protein", "C02-M6": "saturated_fat"},
    "browning_agent": {"key": "so2", "C02-M7": "so3", "C02-M8": "h2so4", "C02-M9": "na2co3"},
    "vitamin_e": {"key": "antioxidant", "C02-M10": "flavour", "C02-M11": "kills_bacteria", "C02-M12": "removes_water"},
    "browning": {"key": "enzyme_oxidises_phenols", "C02-M13": "bacteria", "C02-M14": "caramelises", "C02-M15": "evaporation"},
}
MODELS = mixed_models("C02", TABLE, 15)
