"""C01 Kinds of cells: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "onion": {"key": "wall_vacuole", "C01-M1": "has_nucleus", "C01-M2": "has_mitochondria", "C01-M3": "has_membrane"},
    "prokaryote": {"key": "nuclear_membrane", "C01-M4": "ribosomes_x", "C01-M5": "dna_x", "C01-M6": "cell_membrane_x"},
    "ribosome": {"key": "r80s", "C01-M7": "r70s", "C01-M8": "r50s", "C01-M9": "r30s"},
    "centrioles": {"key": "centrioles_x", "C01-M10": "mitochondria_x", "C01-M11": "golgi_x", "C01-M12": "er_x"},
    "plant_only": {"key": "wall_plastids", "C01-M13": "mitochondria_x", "C01-M14": "ribosomes_x", "C01-M15": "nucleus_x"},
}
MODELS = mixed_models("C01", TABLE, 15)
