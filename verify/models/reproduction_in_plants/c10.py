"""C10 Endosperm and embryo: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "coleoptile": {"key": "coleoptile", "C10-M1": "coleorhiza", "C10-M2": "scutellum", "C10-M3": "perisperm"},
    "coconut": {"key": "free_nuclear", "C10-M4": "cellular_endosperm", "C10-M5": "perisperm", "C10-M6": "embryo"},
    "scutellum": {"key": "scutellum", "C10-M7": "coleoptile", "C10-M8": "coleorhiza", "C10-M9": "plumule"},
    "first": {"key": "endosperm_first", "C10-M10": "embryo_first", "C10-M11": "seed_coat_first", "C10-M12": "fruit_first"},
    "common": {"key": "nuclear", "C10-M13": "cellular", "C10-M14": "helobial", "C10-M15": "perisperm"},
}
MODELS = mixed_models("C10", TABLE, 15)
