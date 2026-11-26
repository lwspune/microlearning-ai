"""C06 Antiseptics and disinfectants: named answers. Antiseptics are safe on living tissue; disinfectants kill microbes
on objects and would harm tissue. Concentration can decide which: dilute phenol is an antiseptic, concentrated phenol a
disinfectant. Tincture of iodine is 2-3% iodine in alcohol-water. Turmeric's compounds kill or slow microbes on skin.
Dettol is chloroxylenol with terpineol.
M1 limits antiseptics to floors; M2 confuses them with disinfectants; M3 calls them oral antibiotics; M4 thinks phenol is
never antiseptic; M5 reverses the dilution; M6 calls phenol an antibiotic; M7 says iodine in water only; M8 says in oil;
M9 says potassium iodide only; M10 thinks it only colours the wound; M11 calls it an antibiotic pill; M12 calls it a floor
disinfectant; M13 says phenol and iodine; M14 says aspirin; M15 says BHT."""
from ._mix import mixed_models

TABLE = {
    "antiseptic": {"key": "safe_on_tissue", "C06-M1": "floors_only", "C06-M2": "kills_on_drains", "C06-M3": "oral_antibiotic"},
    "phenol": {"key": "concentration_decides", "C06-M4": "never_antiseptic", "C06-M5": "dilute_disinfectant", "C06-M6": "antibiotic"},
    "iodine": {"key": "iodine_alcohol_water", "C06-M7": "iodine_water", "C06-M8": "iodine_oil", "C06-M9": "ki_only"},
    "turmeric": {"key": "kills_microbes", "C06-M10": "colours_only", "C06-M11": "antibiotic_pill", "C06-M12": "floor_disinfectant"},
    "dettol": {"key": "chloroxylenol_terpineol", "C06-M13": "phenol_iodine", "C06-M14": "aspirin", "C06-M15": "bht"},
}
MODELS = mixed_models("C06", TABLE, 15)
