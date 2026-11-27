"""C10 Sex-linked inheritance: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "son": {"key": lambda v: Integer(0) + (0), "C10-M1": lambda v: Integer(0) + (25), "C10-M2": lambda v: Integer(0) + (50), "C10-M3": lambda v: Integer(0) + (100)},
    "holandric": {"key": "y_linked", "C10-M4": "x_linked", "C10-M5": "autosomal", "C10-M6": "mitochondrial"},
    "criss": {"key": "grandson_via_daughter", "C10-M7": "son", "C10-M8": "grandson_via_son", "C10-M9": "daughter_only"},
    "carrier": {"key": "one_x", "C10-M10": "y_suppresses", "C10-M11": "males_immune", "C10-M12": "gene_lethal"},
    "carrier_son": {"key": lambda v: Integer(0) + (50), "C10-M13": lambda v: Integer(0) + (25), "C10-M14": lambda v: Integer(0) + (100), "C10-M15": lambda v: Integer(0) + (0)},
}
MODELS = mixed_models("C10", TABLE, 15)
