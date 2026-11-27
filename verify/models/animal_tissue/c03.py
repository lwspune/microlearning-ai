"""C03 Cell junctions: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "integrin": {"key": "hemidesmosomes_j", "C03-M1": "gap_j", "C03-M2": "desmosomes_j", "C03-M3": "adherens_j"},
    "ions": {"key": "gap_j", "C03-M4": "tight_j", "C03-M5": "desmosomes_j", "C03-M6": "hemidesmosomes_j"},
    "polarity": {"key": "tight_j", "C03-M7": "gap_j", "C03-M8": "adherens_j", "C03-M9": "hemidesmosomes_j"},
    "strength": {"key": "desmosomes_j", "C03-M10": "tight_j", "C03-M11": "gap_j", "C03-M12": "hemidesmosomes_j"},
    "adherens": {"key": "signalling_regulation", "C03-M13": "mechanical_strength", "C03-M14": "ion_passage", "C03-M15": "polarity_t"},
}
MODELS = mixed_models("C03", TABLE, 15)
