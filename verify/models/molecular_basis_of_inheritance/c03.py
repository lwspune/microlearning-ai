"""C03 DNA packaging: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "bp": {"key": lambda v: Integer(0) + (146), "C03-M1": lambda v: Integer(0) + (200), "C03-M2": lambda v: Integer(0) + (54), "C03-M3": lambda v: Integer(0) + (20)},
    "core": {"key": "h2a_h2b_h3_h4", "C03-M4": "h1_h2a_h2b_h3", "C03-M5": "h1_alone", "C03-M6": "h1_h3_h4"},
    "h1": {"key": "linker", "C03-M7": "in_core", "C03-M8": "absent", "C03-M9": "is_dna"},
    "charge": {"key": "positive", "C03-M10": "negative", "C03-M11": "neutral", "C03-M12": "acidic"},
    "euchromatin": {"key": "euchromatin", "C03-M13": "heterochromatin", "C03-M14": "centromere", "C03-M15": "nucleosome"},
}
MODELS = mixed_models("C03", TABLE, 15)
