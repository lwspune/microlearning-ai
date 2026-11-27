"""C05 Incomplete dominance and codominance: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "mirabilis": {"key": "one_two_one", "C05-M1": "three_one", "C05-M2": "two_one_one", "C05-M3": "two_two"},
    "same": {"key": "incomplete_dominance", "C05-M4": "complete_dominance", "C05-M5": "multiple_alleles", "C05-M6": "cytoplasmic"},
    "roan": {"key": "codominance", "C05-M7": "incomplete_dominance", "C05-M8": "epistasis", "C05-M9": "pleiotropy"},
    "pink": {"key": "heterozygote_rr", "C05-M10": "homozygous_red", "C05-M11": "homozygous_white", "C05-M12": "new_allele"},
    "ab": {"key": "codominance", "C05-M13": "incomplete_dominance", "C05-M14": "a_dominant", "C05-M15": "pleiotropy"},
}
MODELS = mixed_models("C05", TABLE, 15)
