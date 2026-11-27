"""C01 Plant breeding: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "rice": {"key": "ratna_v", "C01-M1": "ganga3_v", "C01-M2": "co12_v", "C01-M3": "niphad_v"},
    "maize": {"key": "ganga3_v", "C01-M4": "ratna_v", "C01-M5": "co12_v", "C01-M6": "niphad_v"},
    "sugarcane": {"key": "s_officinarum", "C01-M7": "s_barberi", "C01-M8": "oryza_sativa", "C01-M9": "zea_mays"},
    "germplasm": {"key": "germplasm_c", "C01-M10": "genome_c", "C01-M11": "hybrid_c", "C01-M12": "clone_c"},
    "mutagens": {"key": "physical_mutagens", "C01-M13": "chemical_mutagens", "C01-M14": "plant_hormones", "C01-M15": "fertilizers_m"},
}
MODELS = mixed_models("C01", TABLE, 15)
