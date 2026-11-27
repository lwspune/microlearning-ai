"""C01 Asexual reproduction and vegetative propagation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "clone": {"key": "clones", "C01-M1": "varied_offspring", "C01-M2": "haploid_offspring", "C01-M3": "hybrids"},
    "grafting": {"key": "scion", "C01-M4": "stock", "C01-M5": "cutting_piece", "C01-M6": "layer"},
    "runner": {"key": "runners", "C01-M7": "bulbs", "C01-M8": "stem_tubers", "C01-M9": "leaf_buds"},
    "bryophyllum": {"key": "leaf_buds", "C01-M10": "stem_tubers", "C01-M11": "rhizomes", "C01-M12": "bulbs"},
    "culture": {"key": "micropropagation", "C01-M13": "layering", "C01-M14": "grafting", "C01-M15": "cutting"},
}
MODELS = mixed_models("C01", TABLE, 15)
