"""C09 Oxides of nitrogen and nitric acid: named answers. N2O (+1, laughing gas), NO (+2, colourless, paramagnetic),
N2O3 (+3, blue), NO2 (+4, brown, paramagnetic, dimerises to colourless N2O4), N2O5 (+5). Ostwald's process: NH3 burnt
over platinum (Pt/Rh) gauze to NO, then NO2, absorbed in water to HNO3. Copper with concentrated HNO3 gives NO2, with
dilute HNO3 gives NO; no H2 (nitrate oxidises it). Concentrated HNO3 makes iron and aluminium passive (oxide layer).
M1 picks N2O; M2 picks NO; M3 picks N2O5; M4 forgets to divide by two; M5 gives NO's +2; M6 gives +5; M7 gives the
dilute acid's NO; M8 expects hydrogen; M9 expects N2O; M10 uses Haber's iron; M11 the contact process's V2O5;
M12 nickel; M13 expects hydrogen; M14 expects fast dissolving; M15 expects a nitride."""
from ._mix import mixed_models

TABLE = {
    "brown": {"key": "no2", "C09-M1": "n2o", "C09-M2": "no", "C09-M3": "n2o5"},
    "ox": {"key": "ox_plus_three", "C09-M4": "ox_plus_six", "C09-M5": "ox_plus_two", "C09-M6": "ox_plus_five"},
    "copper": {"key": "no2", "C09-M7": "no", "C09-M8": "hydrogen", "C09-M9": "n2o"},
    "ostwald": {"key": "platinum", "C09-M10": "iron", "C09-M11": "vanadium_pentoxide", "C09-M12": "nickel"},
    "iron": {"key": "passive", "C09-M13": "gives_hydrogen", "C09-M14": "dissolves_fast", "C09-M15": "nitride"},
}
MODELS = mixed_models("C09", TABLE, 15)
