"""C06 Viruses and viroids: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "viroid": {"key": "viroid_v", "C06-M1": "bacteriophage_v", "C06-M2": "plant_virus_v", "C06-M3": "animal_virus_v"},
    "tmv": {"key": "rna_rod", "C06-M4": "dna_rod", "C06-M5": "rna_sphere", "C06-M6": "dna_and_rna"},
    "phage": {"key": "infects_bacteria", "C06-M7": "infects_plants", "C06-M8": "infects_humans", "C06-M9": "is_a_bacterium"},
    "outside": {"key": "inactive_v", "C06-M10": "grows_v", "C06-M11": "divides_v", "C06-M12": "photosynthesises_v"},
    "genetic": {"key": "dna_or_rna", "C06-M13": "both_dna_rna", "C06-M14": "protein_only", "C06-M15": "neither_v"},
}
MODELS = mixed_models("C06", TABLE, 15)
