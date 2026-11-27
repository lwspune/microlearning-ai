"""C05 Gymnosperms: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "tallest": {"key": "sequoia_g", "C05-M1": "taxodium_g", "C05-M2": "zamia_g", "C05-M3": "ginkgo_g"},
    "naked": {"key": "naked_seeds", "C05-M4": "enclosed_seeds", "C05-M5": "no_seeds", "C05-M6": "spores_only"},
    "smallest": {"key": "zamia_g", "C05-M7": "sequoia_g", "C05-M8": "taxodium_g", "C05-M9": "ginkgo_g"},
    "fossil": {"key": "ginkgo_g", "C05-M10": "sequoia_g", "C05-M11": "zamia_g", "C05-M12": "taxodium_g"},
    "girth": {"key": "taxodium_g", "C05-M13": "sequoia_g", "C05-M14": "zamia_g", "C05-M15": "ginkgo_g"},
}
MODELS = mixed_models("C05", TABLE, 15)
