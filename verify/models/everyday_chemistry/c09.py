"""C09 Common acids, bases and salts: named answers. Ant and bee stings: methanoic (formic) acid; vinegar acetic, lemon
citric, curd lactic. Plaster of Paris CaSO4.1/2H2O (gypsum is CaSO4.2H2O). Baking soda NaHCO3 (washing soda
Na2CO3.10H2O). Milk of magnesia, Mg(OH)2, is a mild base that neutralises excess stomach acid. Bleaching powder CaOCl2.
M1 picks acetic; M2 citric; M3 lactic; M4 gives gypsum; M5 calcium carbonate; M6 anhydrous calcium sulfate; M7 washing
soda; M8 common salt; M9 caustic soda; M10 calls it an acid; M11 thinks it kills bacteria; M12 calls it caustic soda;
M13 gives CaCl2; M14 slaked lime; M15 household bleach."""
from ._mix import mixed_models

TABLE = {
    "sting": {"key": "methanoic", "C09-M1": "acetic", "C09-M2": "citric", "C09-M3": "lactic"},
    "pop": {"key": "hemihydrate", "C09-M4": "dihydrate", "C09-M5": "calcium_carbonate", "C09-M6": "anhydrous_sulfate"},
    "baking": {"key": "sodium_hydrogencarbonate", "C09-M7": "sodium_carbonate", "C09-M8": "sodium_chloride", "C09-M9": "sodium_hydroxide"},
    "antacid": {"key": "mild_base", "C09-M10": "an_acid", "C09-M11": "kills_bacteria", "C09-M12": "caustic_soda"},
    "bleach": {"key": "caocl2", "C09-M13": "cacl2", "C09-M14": "slaked_lime", "C09-M15": "naocl"},
}
MODELS = mixed_models("C09", TABLE, 15)
