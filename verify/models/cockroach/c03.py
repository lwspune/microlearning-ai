"""C03 Midgut and hindgut: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "mesenteron": {"key": "midgut_t", "C03-M1": "foregut_t", "C03-M2": "hindgut_t", "C03-M3": "gizzard_t"},
    "absorption": {"key": "stomach_t", "C03-M4": "crop_t", "C03-M5": "gizzard_t", "C03-M6": "rectum_t"},
    "malpighian": {"key": "mid_hind_junction", "C03-M7": "into_crop", "C03-M8": "into_rectum", "C03-M9": "hypopharynx_base"},
    "rectal_pads": {"key": "absorb_water", "C03-M10": "secrete_enzymes", "C03-M11": "filter_food", "C03-M12": "store_food"},
    "no_gizzard": {"key": "coarse_food_poor", "C03-M13": "no_storage", "C03-M14": "no_saliva", "C03-M15": "no_effect"},
}
MODELS = mixed_models("C03", TABLE, 15)
