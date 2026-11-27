"""C06 Photorespiration: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "oxygenase": {"key": "pga_phosphoglycolate", "C06-M1": "malic_pep", "C06-M2": "pga_pep", "C06-M3": "pga_malic"},
    "wrong_statement": {"key": "c4_feature", "C06-M4": "in_chloroplast", "C06-M5": "daytime_only", "C06-M6": "c3_feature"},
    "vs_respiration": {"key": "light_c3_only", "C06-M7": "gives_atp", "C06-M8": "all_cells", "C06-M9": "glucose_substrate"},
    "conditions": {"key": "hot_bright_high_o2", "C06-M10": "low_o2_high_co2", "C06-M11": "dark_cool", "C06-M12": "bright_high_co2"},
    "wasteful": {"key": "carbon_lost", "C06-M13": "splits_water", "C06-M14": "releases_o2", "C06-M15": "destroys_chlorophyll"},
}
MODELS = mixed_models("C06", TABLE, 15)
