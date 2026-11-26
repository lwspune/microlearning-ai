"""C09 Detecting nitrogen, sulfur and halogens: named answers. Sodium fusion (Lassaigne) turns N into NaCN, S into
Na2S and halogens into NaX. N: FeSO4, then FeCl3 and acid give Prussian blue. S: sodium nitroprusside gives violet.
Halogens: boil with conc. HNO3 first (it decomposes NaCN and Na2S, which would also precipitate with Ag+), then AgNO3:
AgCl white and soluble in ammonia, AgBr pale yellow and sparingly soluble, AgI yellow and insoluble.
M1 reads Prussian blue as sulfur; M2 as chlorine; M3 as phosphorus; M4 thinks N leaves as ammonia; M5 as a nitrate;
M6 as nitrogen gas; M7 reads violet as nitrogen; M8 as iron; M9 as sodium; M10 thinks the acid dissolves AgX; M11
thinks it oxidises the halide; M12 thinks it precipitates the halogens; M13 reads pale yellow as chlorine; M14 as
iodine; M15 as fluorine."""
from ._mix import mixed_models

TABLE = {
    "prussian": {"key": "nitrogen", "C09-M1": "sulfur", "C09-M2": "chlorine", "C09-M3": "phosphorus"},
    "fusion": {"key": "sodium_cyanide", "C09-M4": "ammonia", "C09-M5": "sodium_nitrate", "C09-M6": "nitrogen_gas"},
    "violet": {"key": "sulfur", "C09-M7": "nitrogen", "C09-M8": "iron", "C09-M9": "sodium"},
    "boil": {"key": "remove_cn_s", "C09-M10": "dissolve_agx", "C09-M11": "oxidise_halide", "C09-M12": "precipitate_x"},
    "silver": {"key": "bromine", "C09-M13": "chlorine", "C09-M14": "iodine", "C09-M15": "fluorine"},
}
MODELS = mixed_models("C09", TABLE, 15)
