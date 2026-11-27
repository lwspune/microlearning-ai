"""C01 DNA is the genetic material: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "griffith": {"key": "streptococcus", "C01-M1": "bacteriophage", "C01-M2": "drosophila", "C01-M3": "frog_eggs"},
    "transform": {"key": "r_transformed", "C01-M4": "s_revived", "C01-M5": "r_virulent_anyway", "C01-M6": "heat_toxic"},
    "avery": {"key": "dnase", "C01-M7": "protease", "C01-M8": "rnase", "C01-M9": "lipase"},
    "protease": {"key": "protease", "C01-M10": "polymerase", "C01-M11": "pectinase", "C01-M12": "rnase"},
    "hershey": {"key": "p32_dna", "C01-M13": "s35_protein", "C01-M14": "both_labels", "C01-M15": "neither_label"},
}
MODELS = mixed_models("C01", TABLE, 15)
