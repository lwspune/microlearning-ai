"""C12 Apomixis, polyembryony and parthenocarpy: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "apomixis": {"key": "neither_needed", "C12-M1": "both_needed", "C12-M2": "pollination_only", "C12-M3": "fertilization_only"},
    "seedless": {"key": "parthenocarpy", "C12-M4": "apomixis", "C12-M5": "polyembryony", "C12-M6": "parthenogenesis"},
    "citrus": {"key": "polyembryony", "C12-M7": "parthenocarpy", "C12-M8": "double_fertilization", "C12-M9": "vivipary"},
    "nucellar": {"key": "true_to_type", "C12-M10": "hybrid", "C12-M11": "haploid", "C12-M12": "triploid"},
    "banana": {"key": "banana", "C12-M13": "mango", "C12-M14": "pea", "C12-M15": "coconut"},
}
MODELS = mixed_models("C12", TABLE, 15)
