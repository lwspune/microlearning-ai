"""C05 Cyclostomes, fishes and amphibians: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "venous": {"key": "rohu_a", "C05-M1": "crocodile_a", "C05-M2": "salamander_a", "C05-M3": "toad_a"},
    "scoliodon": {"key": "cartilaginous_fish", "C05-M4": "bony_fish", "C05-M5": "cyclostome_a", "C05-M6": "amphibian_a"},
    "cyclostome": {"key": "jawless_c", "C05-M7": "jawed_c", "C05-M8": "scales_paired_fins", "C05-M9": "operculum_c"},
    "frog_skin": {"key": "moist_skin", "C05-M10": "adult_gills", "C05-M11": "dry_scales", "C05-M12": "cannot_c"},
    "metamorphosis": {"key": "amphibia_c", "C05-M13": "aves_c", "C05-M14": "mammalia_c", "C05-M15": "reptilia_c"},
}
MODELS = mixed_models("C05", TABLE, 15)
