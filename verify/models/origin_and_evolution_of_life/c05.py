"""C05 Variation and natural selection: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "melanism": {"key": "natural_selection", "C05-M1": "geographical_isolation", "C05-M2": "reproductive_isolation", "C05-M3": "adaptive_radiation"},
    "pool": {"key": "gene_pool", "C05-M4": "genome", "C05-M5": "gene_frequency", "C05-M6": "karyotype"},
    "drift": {"key": "genetic_drift", "C05-M7": "natural_selection", "C05-M8": "gene_flow", "C05-M9": "mutation"},
    "disruptive": {"key": "disruptive", "C05-M10": "stabilizing", "C05-M11": "directional", "C05-M12": "artificial"},
    "flow": {"key": "gene_flow", "C05-M13": "genetic_drift", "C05-M14": "mutation", "C05-M15": "recombination"},
}
MODELS = mixed_models("C05", TABLE, 15)
