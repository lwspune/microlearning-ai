"""C06 Carbon and phosphorus cycles: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "limiting": {"key": "phosphorus_e", "C06-M1": "carbon_e", "C06-M2": "nitrogen_e", "C06-M3": "sulphur_e"},
    "sinks": {"key": "sinks_c", "C06-M4": "reservoirs_c", "C06-M5": "producers_c", "C06-M6": "decomposers_c"},
    "carbon_res": {"key": "atmosphere_r", "C06-M7": "earth_crust", "C06-M8": "living_bodies", "C06-M9": "soil_r"},
    "sedimentary": {"key": "earth_crust", "C06-M10": "atmosphere_r", "C06-M11": "oceans_r", "C06-M12": "living_bodies"},
    "ocean": {"key": "c71", "C06-M13": "c49", "C06-M14": "c29", "C06-M15": "c10"},
}
MODELS = mixed_models("C06", TABLE, 15)
