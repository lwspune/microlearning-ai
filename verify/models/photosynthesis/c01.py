"""C01 Photosynthesis and the chloroplast: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "no_chloroplast": {"key": "liberate_oxygen", "C01-M1": "evolve_co2", "C01-M2": "require_water", "C01-M3": "use_carbohydrate"},
    "head_tail": {"key": "porphyrin_phytol", "C01-M4": "porphyrin_phytin", "C01-M5": "pyrrole_tetrapyrrole", "C01-M6": "tetrapyrrole_pyrrole"},
    "light_site": {"key": "thylakoid_membrane", "C01-M7": "stroma_c", "C01-M8": "mitochondria_c", "C01-M9": "cytoplasm_c"},
    "dark_site": {"key": "stroma_c", "C01-M10": "inside_thylakoid", "C01-M11": "mitochondria_c", "C01-M12": "cytoplasm_c"},
    "importance": {"key": "traps_solar_energy", "C01-M13": "releases_food_energy", "C01-M14": "feeds_plant_only", "C01-M15": "uses_up_oxygen"},
}
MODELS = mixed_models("C01", TABLE, 15)
