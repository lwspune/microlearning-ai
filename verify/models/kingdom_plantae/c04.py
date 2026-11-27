"""C04 Pteridophytes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "dominant": {"key": "sporophyte_d", "C04-M1": "capsule_d", "C04-M2": "gametophyte_d", "C04-M3": "embryo_d"},
    "first": {"key": "pteridophyta_g", "C04-M4": "bryophyta_g", "C04-M5": "gymnospermae_g", "C04-M6": "thallophyta_g"},
    "fern_not_phanero": {"key": "spores_no_seeds", "C04-M7": "no_vascular", "C04-M8": "no_roots_f", "C04-M9": "aquatic_f"},
    "nephrolepis": {"key": "fern_p", "C04-M10": "moss_p", "C04-M11": "alga_p", "C04-M12": "gymnosperm_p"},
    "unique": {"key": "vascular_cryptogam", "C04-M13": "seed_cryptogam", "C04-M14": "non_vascular_land", "C04-M15": "flowering_cryptogam"},
}
MODELS = mixed_models("C04", TABLE, 15)
