"""C07 Chromosome structure and types: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "acro": {"key": "acrocentric", "C07-M1": "metacentric", "C07-M2": "submetacentric", "C07-M3": "telocentric"},
    "primary": {"key": "primary_constriction", "C07-M4": "telomere", "C07-M5": "secondary_constriction", "C07-M6": "satellite"},
    "allosome": {"key": "sex_chromosome", "C07-M7": "autosome", "C07-M8": "extra_chromosome", "C07-M9": "chromatid"},
    "v": {"key": "metacentric", "C07-M10": "submetacentric", "C07-M11": "acrocentric", "C07-M12": "telocentric"},
    "autosomes": {"key": lambda v: Integer(0) + (22), "C07-M13": lambda v: Integer(0) + (23), "C07-M14": lambda v: Integer(0) + (46), "C07-M15": lambda v: Integer(0) + (44)},
}
MODELS = mixed_models("C07", TABLE, 15)
