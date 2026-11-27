"""C01 Organisms and their environment: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "biotic": {"key": "biotic_f", "C01-M1": "abiotic_f", "C01-M2": "direct_f", "C01-M3": "indirect_f"},
    "community": {"key": "biotic_community", "C01-M4": "niche_c", "C01-M5": "population_c", "C01-M6": "ecosystem_c"},
    "marine": {"key": "stenohaline_dies", "C01-M7": "survives_easily", "C01-M8": "grows_faster", "C01-M9": "turns_euryhaline"},
    "salinity": {"key": "s30_35", "C01-M10": "below_5", "C01-M11": "above_100", "C01-M12": "zero_s"},
    "wide": {"key": "euryhaline_o", "C01-M13": "stenohaline_o", "C01-M14": "eurythermal_o", "C01-M15": "stenothermal_o"},
}
MODELS = mixed_models("C01", TABLE, 15)
