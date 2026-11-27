"""C03 The cell wall and plasmodesmata: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "elongation": {"key": "intussusception_g", "C03-M1": "apposition_g", "C03-M2": "both_g", "C03-M3": "superposition_g"},
    "present": {"key": "all_three", "C03-M4": "plants_only", "C03-M5": "prokaryotes_only", "C03-M6": "algae_only"},
    "transport": {"key": "plasmodesmata_t", "C03-M7": "blood_vessels", "C03-M8": "lysosomes_t", "C03-M9": "wall_alone"},
    "bacterial": {"key": "peptidoglycan_w", "C03-M10": "cellulose_w", "C03-M11": "chitin_w", "C03-M12": "pectin_w"},
    "apposition": {"key": "adds_layers", "C03-M13": "adds_area", "C03-M14": "removes_wall", "C03-M15": "dissolves_wall"},
}
MODELS = mixed_models("C03", TABLE, 15)
