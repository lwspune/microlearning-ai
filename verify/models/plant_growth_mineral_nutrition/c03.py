"""C03 Differentiation and plasticity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "differentiation": {"key": "differentiation_term", "C03-M1": "dedifferentiation_term", "C03-M2": "redifferentiation_term", "C03-M3": "plasticity_term"},
    "cambium": {"key": "dedifferentiation_term", "C03-M4": "differentiation_term", "C03-M5": "redifferentiation_term", "C03-M6": "senescence_term"},
    "cork": {"key": "redifferentiation_term", "C03-M7": "dedifferentiation_term", "C03-M8": "differentiation_term", "C03-M9": "abscission_term"},
    "plasticity": {"key": "plasticity_term", "C03-M10": "differentiation_term", "C03-M11": "vernalization_term", "C03-M12": "photoperiodism_term"},
    "heterophylly": {"key": "leaf_shapes", "C03-M13": "fruit_ripening", "C03-M14": "autumn_leaf_fall", "C03-M15": "bending_to_light"},
}
MODELS = mixed_models("C03", TABLE, 15)
