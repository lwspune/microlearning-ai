"""C06 Ozone depletion and global warming: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "cfc": {"key": "industries_s", "C06-M1": "diesel_trucks", "C06-M2": "jet_planes", "C06-M3": "rice_fields"},
    "hole": {"key": "antarctic_r", "C06-M4": "arctic_r", "C06-M5": "equator_r", "C06-M6": "india_r"},
    "montreal": {"key": "ozone_depleters", "C06-M7": "greenhouse_gases", "C06-M8": "biodiversity_trade", "C06-M9": "nuclear_weapons"},
    "ozone": {"key": "uv_rays", "C06-M10": "infrared_rays", "C06-M11": "visible_light", "C06-M12": "radio_waves"},
    "greenhouse": {"key": "infrared_reemitted", "C06-M13": "uv_incoming", "C06-M14": "visible_light", "C06-M15": "x_rays"},
}
MODELS = mixed_models("C06", TABLE, 15)
