"""C04 Physiology of digestion: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "analogy": {"key": "protease_t", "C04-M1": "lipase_t", "C04-M2": "galactose_t", "C04-M3": "proenzyme_t"},
    "acidic": {"key": "pepsin_t", "C04-M4": "salivary_amylase", "C04-M5": "trypsin_t", "C04-M6": "nucleotidase_t"},
    "pepsin_stop": {"key": "alkaline_medium", "C04-M7": "more_acidic", "C04-M8": "no_protein_left", "C04-M9": "pepsin_absorbed"},
    "trypsinogen": {"key": "enterokinase_t", "C04-M10": "hcl_t", "C04-M11": "bile_salts", "C04-M12": "secretin_t"},
    "satiety": {"key": "cck_t", "C04-M13": "gastrin_t", "C04-M14": "secretin_t", "C04-M15": "gip_t"},
}
MODELS = mixed_models("C04", TABLE, 15)
