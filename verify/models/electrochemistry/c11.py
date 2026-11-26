"""C11 Corrosion: named answers. Rusting needs both water and oxygen. At anodic spots Fe -> Fe2+ + 2e-; at cathodic
spots O2 + 4H+ + 4e- -> 2H2O; Fe2+ is oxidised further to rust, Fe2O3.xH2O. Prevention: paint or grease (a barrier),
galvanising (a zinc coat), and a sacrificial anode of a more reactive metal (Mg, Zn), oxidised in place of iron.
M1 swaps the electrodes; M2 expects hydrogen; M3 has iron reduced; M4 needs oxygen alone; M5 water alone; M6 carbon
dioxide; M7 picks tin; M8 copper; M9 chromium; M10 thinks Mg is less reactive; M11 thinks Mg is a paint-like barrier;
M12 thinks Mg reduces the rust; M13 gives FeO; M14 Fe3O4; M15 FeCO3."""
from ._mix import mixed_models

TABLE = {
    "anode": {"key": "fe_oxidised", "C11-M1": "o2_reduced", "C11-M2": "h2_evolved", "C11-M3": "fe_reduced"},
    "needs": {"key": "water_and_oxygen", "C11-M4": "oxygen_only", "C11-M5": "water_only", "C11-M6": "co2_only"},
    "galvanise": {"key": "zinc", "C11-M7": "tin", "C11-M8": "copper", "C11-M9": "chromium"},
    "sacrificial": {"key": "mg_oxidised_first", "C11-M10": "mg_less_reactive", "C11-M11": "mg_barrier", "C11-M12": "mg_reduces_rust"},
    "rust": {"key": "hydrated_fe2o3", "C11-M13": "iron_ii_oxide", "C11-M14": "magnetite", "C11-M15": "siderite"},
}
MODELS = mixed_models("C11", TABLE, 15)
