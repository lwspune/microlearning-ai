"""C03 Annelids to echinoderms: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "chitin": {"key": "millipede_a", "C03-M1": "dentalium_a", "C03-M2": "antedon_a", "C03-M3": "sea_urchin_a"},
    "closed": {"key": "annelida_p", "C03-M4": "arthropoda_p", "C03-M5": "mollusca_p", "C03-M6": "cnidaria_p"},
    "radula": {"key": "mollusca_p", "C03-M7": "annelida_p", "C03-M8": "arthropoda_p", "C03-M9": "echinodermata_p"},
    "tube_feet": {"key": "echinodermata_p", "C03-M10": "mollusca_p", "C03-M11": "porifera_p", "C03-M12": "annelida_p"},
    "crab_snail": {"key": "chitin_vs_lime", "C03-M13": "both_chitin", "C03-M14": "both_lime", "C03-M15": "both_bone"},
}
MODELS = mixed_models("C03", TABLE, 15)
