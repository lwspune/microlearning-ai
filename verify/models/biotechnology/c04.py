"""C04 Recombinant proteins: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "clots": {"key": "tpa_p", "C04-M1": "insulin_p", "C04-M2": "relaxin_p", "C04-M3": "erythropoietin_p"},
    "anaemia": {"key": "erythropoietin_p", "C04-M4": "pdgf_p", "C04-M5": "relaxin_p", "C04-M6": "factor_viii_p"},
    "parturition": {"key": "relaxin_p", "C04-M7": "erythropoietin_p", "C04-M8": "antitrypsin_p", "C04-M9": "tpa_p"},
    "emphysema": {"key": "antitrypsin_p", "C04-M10": "pdgf_p", "C04-M11": "relaxin_p", "C04-M12": "insulin_p"},
    "chains": {"key": "separate_plasmids", "C04-M13": "one_plasmid", "C04-M14": "chain_a_only", "C04-M15": "from_pigs"},
}
MODELS = mixed_models("C04", TABLE, 15)
