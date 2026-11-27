"""C01 The root and its modifications: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "origin": {"key": "radicle_r", "C01-M1": "stem_base", "C01-M2": "stem_nodes", "C01-M3": "plumule_r"},
    "fusiform": {"key": "fusiform_r", "C01-M4": "conical_r", "C01-M5": "napiform_r", "C01-M6": "fasciculated_r"},
    "stilt": {"key": "stilt_r", "C01-M7": "pneumatophore_r", "C01-M8": "clinging_r", "C01-M9": "fasciculated_r"},
    "breathing": {"key": "gas_exchange", "C01-M10": "support_t", "C01-M11": "air_moisture", "C01-M12": "food_storage"},
    "orchid": {"key": "orchid_p", "C01-M13": "opuntia_p", "C01-M14": "mangrove_p", "C01-M15": "lotus_p"},
}
MODELS = mixed_models("C01", TABLE, 15)
