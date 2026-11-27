"""C03 Kingdom Monera: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "odd": {"key": "cyanobacteria_b", "C03-M1": "nitrogen_fixers", "C03-M2": "lactobacilli_b", "C03-M3": "methanogens_b"},
    "bacillus": {"key": "rod_shape", "C03-M4": "spherical_shape", "C03-M5": "comma_shape", "C03-M6": "spiral_shape"},
    "coccus": {"key": "spherical_shape", "C03-M7": "rod_shape", "C03-M8": "comma_shape", "C03-M9": "spiral_shape"},
    "dna": {"key": "nucleoid_d", "C03-M10": "true_nucleus", "C03-M11": "in_mitochondria", "C03-M12": "no_dna"},
    "mycoplasma": {"key": "no_wall", "C03-M13": "chitin_wall", "C03-M14": "cellulose_wall", "C03-M15": "silica_wall"},
}
MODELS = mixed_models("C03", TABLE, 15)
