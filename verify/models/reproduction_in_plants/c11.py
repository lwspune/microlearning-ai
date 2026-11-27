"""C11 Seeds and fruits: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "ovary": {"key": "fruit", "C11-M1": "seed", "C11-M2": "embryo", "C11-M3": "seed_coat"},
    "testa": {"key": "testa", "C11-M4": "tegmen", "C11-M5": "pericarp", "C11-M6": "hilum"},
    "hilum": {"key": "hilum", "C11-M7": "micropyle", "C11-M8": "chalaza", "C11-M9": "funicle"},
    "nonendo": {"key": "bean", "C11-M10": "maize", "C11-M11": "castor", "C11-M12": "coconut"},
    "zygote": {"key": "embryo", "C11-M13": "endosperm", "C11-M14": "seed_coat", "C11-M15": "pericarp"},
}
MODELS = mixed_models("C11", TABLE, 15)
