"""C05 Microbes in the kitchen: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "idli": {"key": "co2_gas", "C05-M1": "oxygen_gas", "C05-M2": "lactic_acid_g", "C05-M3": "steam_only"},
    "idli_bacteria": {"key": "leuconostoc_streptococcus", "C05-M4": "lactobacillus_only", "C05-M5": "acetobacter_b", "C05-M6": "rhizobium_b"},
    "lab": {"key": "checks_pathogens", "C05-M7": "makes_alcohol", "C05-M8": "fixes_nitrogen", "C05-M9": "raises_bread"},
    "food": {"key": "bread_f", "C05-M10": "raw_vegetables", "C05-M11": "pulses_f", "C05-M12": "fresh_fruit"},
    "bread": {"key": "yeast_co2", "C05-M13": "bacteria_oxygen", "C05-M14": "steam_only", "C05-M15": "lactic_acid_g"},
}
MODELS = mixed_models("C05", TABLE, 15)
