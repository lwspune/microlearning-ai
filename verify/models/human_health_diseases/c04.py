"""C04 AIDS and cancer: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "aids": {"key": "aids_full", "C04-M1": "aids_acute", "C04-M2": "aids_antibody", "C04-M3": "aids_infection"},
    "test": {"key": "western_blot", "C04-M4": "elisa_test", "C04-M5": "widal_test", "C04-M6": "eastern_blot"},
    "hiv": {"key": "rna_retrovirus", "C04-M7": "dna_virus", "C04-M8": "bacterium_c", "C04-M9": "protozoan_c"},
    "malignant": {"key": "invades_tissues", "C04-M10": "stays_local", "C04-M11": "never_divides", "C04-M12": "always_harmless"},
    "asbestos": {"key": "lungs_t", "C04-M13": "liver_t", "C04-M14": "skin_t", "C04-M15": "blood_t"},
}
MODELS = mixed_models("C04", TABLE, 15)
