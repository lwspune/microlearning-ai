"""C08 Biofertilizers: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "free": {"key": "azotobacter_b", "C08-M1": "rhizobium_b", "C08-M2": "nostoc_b", "C08-M3": "bt_b"},
    "anaerobic": {"key": "rhodospirillum_b", "C08-M4": "azotobacter_b", "C08-M5": "beijerinckia_b", "C08-M6": "rhizobium_b"},
    "rice": {"key": "azolla_f", "C08-M7": "azotobacter_b", "C08-M8": "azospirillum_b", "C08-M9": "bacillus_b"},
    "mycorrhiza": {"key": "fungus_root", "C08-M10": "bacteria_nodule", "C08-M11": "alga_fungus", "C08-M12": "cyanobacteria_fern"},
    "rhizobium": {"key": "legume_nodules", "C08-M13": "free_in_soil", "C08-M14": "azolla_leaves", "C08-M15": "cereal_roots"},
}
MODELS = mixed_models("C08", TABLE, 15)
