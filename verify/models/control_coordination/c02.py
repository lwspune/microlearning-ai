"""C02 Nerve impulse and synapse: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "transmitter": {"key": "acetylcholine_t", "C02-M1": "adh_t", "C02-M2": "acetyl_coa_t", "C02-M3": "inositol_t"},
    "resting": {"key": "more_outside", "C02-M4": "more_inside", "C02-M5": "equal_both", "C02-M6": "absent_ions"},
    "depolarize": {"key": "na_in", "C02-M7": "k_in", "C02-M8": "na_out", "C02-M9": "cl_in"},
    "release": {"key": "exocytosis_r", "C02-M10": "endocytosis_r", "C02-M11": "diffusion_r", "C02-M12": "osmosis_r"},
    "calcium": {"key": "calcium_in", "C02-M13": "sodium_in", "C02-M14": "potassium_out", "C02-M15": "chloride_in"},
}
MODELS = mixed_models("C02", TABLE, 15)
