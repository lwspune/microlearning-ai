"""C03 Conserving biodiversity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "odd": {"key": "sacred_groves", "C03-M1": "zoo_park", "C03-M2": "tissue_culture_t", "C03-M3": "cryopreservation_t"},
    "insitu": {"key": "natural_habitat", "C03-M4": "zoo_park", "C03-M5": "seed_bank", "C03-M6": "cryopreservation_t"},
    "temp": {"key": "minus196", "C03-M7": "minus20", "C03-M8": "zero_c", "C03-M9": "minus80"},
    "gametes": {"key": "cryopreservation_t", "C03-M10": "tissue_culture_t", "C03-M11": "sacred_groves", "C03-M12": "national_park"},
    "thimmakka": {"key": "banyan_planting", "C03-M13": "chipko_leader", "C03-M14": "seed_bank_founder", "C03-M15": "park_founder"},
}
MODELS = mixed_models("C03", TABLE, 15)
