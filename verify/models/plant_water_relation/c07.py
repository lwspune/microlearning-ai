"""C07 Ascent of sap: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "theory": {"key": "transpiration_pull", "C07-M1": "capillarity", "C07-M2": "root_pressure", "C07-M3": "diffusion"},
    "height": {"key": "ten_to_twenty", "C07-M4": "fifty_to_sixty", "C07-M5": "thirty_to_forty", "C07-M6": "twenty_to_thirty"},
    "dixon": {"key": "dixon_joly", "C07-M7": "boehm", "C07-M8": "priestley", "C07-M9": "darwin"},
    "broken": {"key": "column_broken", "C07-M10": "stomata_open", "C07-M11": "high_root_pressure", "C07-M12": "wet_soil"},
    "negative": {"key": "transpiring_trees", "C07-M13": "seedlings_night", "C07-M14": "aquatic_plants", "C07-M15": "dead_plants"},
}
MODELS = mixed_models("C07", TABLE, 15)
