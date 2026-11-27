"""C05 Kingdom Fungi: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "wall": {"key": "chitin_wall", "C05-M1": "cellulose_wall", "C05-M2": "peptidoglycan_wall", "C05-M3": "silica_wall"},
    "antibiotic": {"key": "penicillium_f", "C05-M4": "agaricus_f", "C05-M5": "rhizopus_f", "C05-M6": "neurospora_f"},
    "mushroom": {"key": "basidiomycetes_f", "C05-M7": "ascomycetes_f", "C05-M8": "phycomycetes_f", "C05-M9": "deuteromycetes_f"},
    "lichen": {"key": "fungus_alga", "C05-M10": "fungus_root", "C05-M11": "bacteria_root", "C05-M12": "alga_alga"},
    "nutrition": {"key": "heterotrophic_f", "C05-M13": "photosynthetic_f", "C05-M14": "chemosynthetic_f", "C05-M15": "holozoic_f"},
}
MODELS = mixed_models("C05", TABLE, 15)
