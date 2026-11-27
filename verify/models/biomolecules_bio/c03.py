"""C03 Proteins: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "join": {"key": "none_of_these", "C03-M1": "disulphide_j", "C03-M2": "glycosidic_j", "C03-M3": "hydrogen_j"},
    "haemoglobin": {"key": "conjugated_p", "C03-M4": "simple_p", "C03-M5": "derived_p", "C03-M6": "complex_p"},
    "secondary": {"key": "hydrogen_bonds", "C03-M7": "peptide_bonds", "C03-M8": "disulphide_bonds", "C03-M9": "ionic_bonds"},
    "cysteine": {"key": "cysteine_a", "C03-M10": "glycine_a", "C03-M11": "lysine_a", "C03-M12": "alanine_a"},
    "muscle": {"key": "myosin_p", "C03-M13": "collagen_p", "C03-M14": "histone_p", "C03-M15": "immunoglobulin_p"},
}
MODELS = mixed_models("C03", TABLE, 15)
