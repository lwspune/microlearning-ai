"""C06 The genetic code: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "codons": {"key": lambda v: Integer(0) + (3), "C06-M1": lambda v: Integer(0) + (9), "C06-M2": lambda v: Integer(0) + (6), "C06-M3": lambda v: Integer(0) + (1)},
    "start": {"key": "aug", "C06-M4": "uaa", "C06-M5": "uag", "C06-M6": "uga"},
    "commaless": {"key": "no_gaps", "C06-M7": "overlapping", "C06-M8": "one_codon_each", "C06-M9": "universal"},
    "degenerate": {"key": "many_codons", "C06-M10": "one_codon_many", "C06-M11": "overlap", "C06-M12": "no_stop"},
    "sense": {"key": lambda v: Integer(0) + (61), "C06-M13": lambda v: Integer(0) + (64), "C06-M14": lambda v: Integer(0) + (20), "C06-M15": lambda v: Integer(0) + (3)},
}
MODELS = mixed_models("C06", TABLE, 15)
