"""C02 The human respiratory tract: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "nasal": {"key": "mesethmoid", "C02-M1": "hyaline_cartilage", "C02-M2": "ligamentum_arteriosum", "C02-M3": "laryngopharynx"},
    "sound": {"key": "larynx_o", "C02-M4": "pharynx_o", "C02-M5": "tonsils_o", "C02-M6": "trachea_o"},
    "food": {"key": "epiglottis_o", "C02-M7": "glottis_o", "C02-M8": "soft_palate", "C02-M9": "vocal_cords"},
    "rings": {"key": "prevent_collapse", "C02-M10": "make_sound", "C02-M11": "filter_air", "C02-M12": "exchange_gases"},
    "alveoli": {"key": "large_thin", "C02-M13": "thick_walls", "C02-M14": "few_large", "C02-M15": "still_air"},
}
MODELS = mixed_models("C02", TABLE, 15)
