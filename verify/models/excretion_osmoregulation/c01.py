"""C01 Nitrogenous wastes and excretory modes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "energy": {"key": "flamingo_t", "C01-M1": "polar_bear", "C01-M2": "frog_t", "C01-M3": "shark_t"},
    "tadpole": {"key": "water_dilutes", "C01-M4": "least_toxic", "C01-M5": "little_water", "C01-M6": "all_amphibians"},
    "urea_source": {"key": "amino_acids", "C01-M7": "fatty_acids", "C01-M8": "glucose_t", "C01-M9": "fats_t"},
    "spider": {"key": "guanine_w", "C01-M10": "uric_acid_w", "C01-M11": "urea_w", "C01-M12": "ammonia_w"},
    "metanephridia": {"key": "earthworm_t", "C01-M13": "liver_fluke", "C01-M14": "cockroach_t", "C01-M15": "crab_t"},
}
MODELS = mixed_models("C01", TABLE, 15)
