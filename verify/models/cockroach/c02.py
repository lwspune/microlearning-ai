"""C02 Mouthparts and foregut: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "mouthparts": {"key": "chewing_biting", "C02-M1": "sponging_t", "C02-M2": "piercing_sucking", "C02-M3": "lapping_t"},
    "digestive": {"key": "hypopharynx_t", "C02-M4": "trachea_t", "C02-M5": "haemocyte_t", "C02-M6": "seminal_vesicle"},
    "lingua": {"key": "mixes_saliva", "C02-M7": "crushes_food", "C02-M8": "stores_food", "C02-M9": "tastes_food"},
    "store": {"key": "crop_t", "C02-M10": "gizzard_t", "C02-M11": "oesophagus_t", "C02-M12": "pharynx_t"},
    "gizzard": {"key": "teeth_bristles", "C02-M13": "enzyme_epithelium", "C02-M14": "rectal_pads", "C02-M15": "taste_sensillae"},
}
MODELS = mixed_models("C02", TABLE, 15)
