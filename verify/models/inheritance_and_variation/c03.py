"""C03 Dihybrid cross and independent assortment: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "genotypes": {"key": lambda v: Integer(0) + (9), "C03-M1": lambda v: Integer(0) + (16), "C03-M2": lambda v: Integer(0) + (4), "C03-M3": lambda v: Integer(0) + (3)},
    "round_green": {"key": lambda v: Integer(0) + (3*v['n']/16), "C03-M4": lambda v: Integer(0) + (9*v['n']/16), "C03-M5": lambda v: Integer(0) + (v['n']/16), "C03-M6": lambda v: Integer(0) + (v['n']/4)},
    "ratio": {"key": "nine_three_three_one", "C03-M7": "three_one", "C03-M8": "one_two_one", "C03-M9": "one_one_one_one"},
    "gametes": {"key": lambda v: Integer(0) + (4), "C03-M10": lambda v: Integer(0) + (2), "C03-M11": lambda v: Integer(0) + (16), "C03-M12": lambda v: Integer(0) + (1)},
    "law": {"key": "different_chromosomes", "C03-M13": "same_chromosome", "C03-M14": "same_allele", "C03-M15": "sex_chromosomes"},
}
MODELS = mixed_models("C03", TABLE, 15)
