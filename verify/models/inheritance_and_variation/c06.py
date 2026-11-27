"""C06 Multiple alleles and pleiotropy: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "genotypes": {"key": lambda v: Integer(0) + (6), "C06-M1": lambda v: Integer(0) + (4), "C06-M2": lambda v: Integer(0) + (3), "C06-M3": lambda v: Integer(0) + (9)},
    "o": {"key": "ii", "C06-M4": "ia_ib", "C06-M5": "ia_i", "C06-M6": "ib_i"},
    "pleiotropy": {"key": "pleiotropy", "C06-M7": "polygenic", "C06-M8": "multiple_alleles", "C06-M9": "epistasis"},
    "ratio": {"key": "pleiotropy", "C06-M10": "incomplete_dominance", "C06-M11": "codominance", "C06-M12": "multiple_alleles"},
    "children": {"key": "all_four", "C06-M13": "only_ab", "C06-M14": "only_a_b", "C06-M15": "only_o"},
}
MODELS = mixed_models("C06", TABLE, 15)
