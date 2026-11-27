"""C03 Bryophytes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "dependence": {"key": "sporophyte_dependent", "C03-M1": "both_independent", "C03-M2": "gametophyte_dependent", "C03-M3": "gametophyte_hidden"},
    "rhizoids": {"key": "bryophyta_g", "C03-M4": "pteridophyta_g", "C03-M5": "gymnospermae_g", "C03-M6": "angiospermae_g"},
    "amphibious": {"key": "water_fertilization", "C03-M7": "live_in_sea", "C03-M8": "breathe_water", "C03-M9": "have_gills"},
    "sporophyte_parts": {"key": "foot_seta_capsule", "C03-M10": "root_stem_leaf", "C03-M11": "rhizoid_axis", "C03-M12": "frond_rhizome"},
    "dominant": {"key": "gametophyte_d", "C03-M13": "sporophyte_d", "C03-M14": "embryo_d", "C03-M15": "capsule_d"},
}
MODELS = mixed_models("C03", TABLE, 15)
