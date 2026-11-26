"""C11 Oxides of transition metals: named answers. The higher the metal's oxidation state, the more covalent and acidic
its oxide: MnO (+2) basic, Mn2O7 (+7) acidic; CrO (+2) basic, Cr2O3 (+3) amphoteric, CrO3 (+6) acidic.
M1 calls every metal oxide basic; M2 amphoteric; M3 neutral; M4 copies Mn2O7's acidity; M5 amphoteric; M6 neutral;
M7 basic; M8 acidic; M9 neutral; M10 reverses the trend; M11 expects more ionic; M12 expects no trend; M13 basic;
M14 amphoteric; M15 neutral."""
from ._mix import mixed_models

TABLE = {
    "mn2o7": {"key": "acidic", "C11-M1": "basic", "C11-M2": "amphoteric", "C11-M3": "neutral"},
    "mno": {"key": "basic", "C11-M4": "acidic", "C11-M5": "amphoteric", "C11-M6": "neutral"},
    "cr2o3": {"key": "amphoteric", "C11-M7": "basic", "C11-M8": "acidic", "C11-M9": "neutral"},
    "trend": {"key": "more_acidic", "C11-M10": "more_basic", "C11-M11": "more_ionic", "C11-M12": "no_trend"},
    "cro3": {"key": "acidic", "C11-M13": "basic", "C11-M14": "amphoteric", "C11-M15": "neutral"},
}
MODELS = mixed_models("C11", TABLE, 15)
