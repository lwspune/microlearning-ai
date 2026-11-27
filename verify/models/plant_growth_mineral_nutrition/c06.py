"""C06 Photoperiodism and vernalization: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "flowering": {"key": "definite_photoperiod", "C06-M1": "adequate_oxygen", "C06-M2": "adequate_water", "C06-M3": "water_minerals"},
    "critical": {"key": "dark_period", "C06-M4": "light_period", "C06-M5": "uv_rays", "C06-M6": "light_and_uv"},
    "not_dnp": {"key": "tobacco_p", "C06-M7": "cucumber_p", "C06-M8": "tomato_p", "C06-M9": "cotton_p"},
    "ldp": {"key": "wheat_p", "C06-M10": "tobacco_p", "C06-M11": "tomato_p", "C06-M12": "soybean_p"},
    "replace": {"key": "gibberellin_h", "C06-M13": "auxin_h", "C06-M14": "cytokinin_h", "C06-M15": "ethylene_h"},
}
MODELS = mixed_models("C06", TABLE, 15)
