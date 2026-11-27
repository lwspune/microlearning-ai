"""C01 Classifying plants: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "seed": {"key": "phanerogamae_g", "C01-M1": "cryptogamae_g", "C01-M2": "thallophyta_g", "C01-M3": "pteridophyta_g"},
    "spore": {"key": "cryptogamae_g", "C01-M4": "phanerogamae_g", "C01-M5": "gymnospermae_g", "C01-M6": "angiospermae_g"},
    "fern": {"key": "no_seeds", "C01-M7": "no_vessels", "C01-M8": "no_leaves", "C01-M9": "no_roots"},
    "undifferentiated": {"key": "thallophyta_g", "C01-M10": "angiospermae_g", "C01-M11": "pteridophyta_g", "C01-M12": "gymnospermae_g"},
    "crypto_groups": {"key": "thallo_bryo_pterido", "C01-M13": "gymno_angio", "C01-M14": "bryo_gymno", "C01-M15": "algae_only"},
}
MODELS = mixed_models("C01", TABLE, 15)
