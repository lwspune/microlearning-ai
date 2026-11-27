"""C02 Epithelia and glands: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "intestine": {"key": "columnar_e", "C02-M1": "stratified_e", "C02-M2": "ciliated_e", "C02-M3": "squamous_e"},
    "epidermis": {"key": "stratified_e", "C02-M4": "columnar_e", "C02-M5": "ciliated_e", "C02-M6": "dense_irregular"},
    "buccal": {"key": "ciliated_e", "C02-M7": "columnar_e", "C02-M8": "stratified_e", "C02-M9": "squamous_e"},
    "mixed": {"key": "pancreas_g", "C02-M10": "sebaceous_g", "C02-M11": "mammary_g", "C02-M12": "pituitary_g"},
    "odd": {"key": "salivary_g", "C02-M13": "thyroid_g", "C02-M14": "pituitary_g", "C02-M15": "adrenal_g"},
}
MODELS = mixed_models("C02", TABLE, 15)
