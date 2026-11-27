"""C01 Asexual reproduction in animals: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "hydra": {"key": "budding", "C01-M1": "binary_fission", "C01-M2": "gemmules", "C01-M3": "fragmentation"},
    "sponge": {"key": "gemmules", "C01-M4": "budding", "C01-M5": "binary_fission", "C01-M6": "spores"},
    "amoeba": {"key": "binary_fission", "C01-M7": "budding", "C01-M8": "gemmules", "C01-M9": "multiple_fission"},
    "cells": {"key": "archaeocytes", "C01-M10": "choanocytes", "C01-M11": "pinacocytes", "C01-M12": "spicules"},
    "genetics": {"key": "mitosis_identical", "C01-M13": "meiosis_varied", "C01-M14": "gametes_fuse", "C01-M15": "mitosis_varied"},
}
MODELS = mixed_models("C01", TABLE, 15)
