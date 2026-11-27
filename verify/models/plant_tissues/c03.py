"""C03 Complex permanent tissues: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "complex": {"key": "xylem_t", "C03-M1": "parenchyma_s", "C03-M2": "sclerenchyma_s", "C03-M3": "chlorenchyma_t"},
    "conducts": {"key": "water_minerals", "C03-M4": "organic_food", "C03-M5": "gases_only", "C03-M6": "food_and_water"},
    "xylem_living": {"key": "xylem_parenchyma", "C03-M7": "tracheids_x", "C03-M8": "vessels_x", "C03-M9": "xylem_fibres"},
    "phloem_dead": {"key": "phloem_fibres", "C03-M10": "sieve_tubes", "C03-M11": "companion_cells", "C03-M12": "phloem_parenchyma"},
    "gymno": {"key": "sieve_cells", "C03-M13": "sieve_tubes", "C03-M14": "vessels_x", "C03-M15": "tracheids_x"},
}
MODELS = mixed_models("C03", TABLE, 15)
