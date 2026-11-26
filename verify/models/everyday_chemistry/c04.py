"""C04 Synthetic detergents: named answers. Cationic detergents are quaternary ammonium salts (cetyltrimethylammonium
bromide), also germicidal; anionic detergents are sulfonates (sodium dodecylbenzenesulfonate); nonionic detergents carry
no ions (esters of polyethylene glycol). Their calcium and magnesium salts are soluble, so they work in hard water.
M1 picks a sulfonate; M2 picks a nonionic ester; M3 picks a soap; M4 picks a cationic detergent; M5 picks a nonionic one;
M6 picks a soap; M7 gives them positive charge; M8 negative charge; M9 calls them soaps; M10 thinks detergents contain no
carbon; M11 thinks they soften water by boiling; M12 thinks scum cleans; M13 says food additives; M14 says antibiotics;
M15 says fertilisers."""
from ._mix import mixed_models

TABLE = {
    "cationic": {"key": "quaternary_ammonium", "C04-M1": "sulfonate", "C04-M2": "peg_ester", "C04-M3": "sodium_stearate"},
    "anionic": {"key": "dodecylbenzenesulfonate", "C04-M4": "ctab", "C04-M5": "peg_ester", "C04-M6": "sodium_stearate"},
    "nonionic": {"key": "no_ions", "C04-M7": "positive", "C04-M8": "negative", "C04-M9": "soaps"},
    "hard_water": {"key": "soluble_salts", "C04-M10": "no_carbon", "C04-M11": "boil_water", "C04-M12": "scum_cleans"},
    "germicide": {"key": "germicides", "C04-M13": "food_additives", "C04-M14": "antibiotics", "C04-M15": "fertilisers"},
}
MODELS = mixed_models("C04", TABLE, 15)
