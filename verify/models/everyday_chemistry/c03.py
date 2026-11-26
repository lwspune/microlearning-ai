"""C03 Soaps and saponification: named answers. Saponification is alkaline hydrolysis of a fat: fat + NaOH -> soap
(sodium salts of fatty acids) + glycerol (propane-1,2,3-triol). Soap's hydrocarbon tails dissolve in grease, its ionic
heads in water; micelles carry the grease away. In hard water Ca2+ and Mg2+ form insoluble scum.
M1 says oxidation; M2 says polymerisation; M3 says free radicals; M4 gives water as the by-product; M5 gives ethanol; M6
gives fatty acid and salt; M7 swaps heads and tails; M8 thinks soap reacts with dirt; M9 thinks water alone dissolves the
grease; M10 names propanol; M11 names a diol; M12 calls glycerol an acid; M13 blames cold water; M14 blames fast
dissolving; M15 calls hard water acidic."""
from ._mix import mixed_models

TABLE = {
    "saponification": {"key": "alkaline_hydrolysis", "C03-M1": "oxidation", "C03-M2": "polymerisation", "C03-M3": "free_radical"},
    "products": {"key": "soap_glycerol", "C03-M4": "soap_water", "C03-M5": "soap_ethanol", "C03-M6": "acid_salt"},
    "cleansing": {"key": "tails_in_grease", "C03-M7": "heads_in_grease", "C03-M8": "reacts_with_dirt", "C03-M9": "water_alone"},
    "glycerin": {"key": "propane_triol", "C03-M10": "propanol", "C03-M11": "propane_diol", "C03-M12": "propanoic_acid"},
    "hard_water": {"key": "insoluble_scum", "C03-M13": "too_cold", "C03-M14": "dissolves_fast", "C03-M15": "acidic"},
}
MODELS = mixed_models("C03", TABLE, 15)
