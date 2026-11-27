"""C07 Female reproductive system: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "fertilized": {"key": "genital_chamber", "C07-M1": "ovary_t", "C07-M2": "spermatheca_t", "C07-M3": "colleterial_t"},
    "ootheca": {"key": "colleterial_t", "C07-M4": "spermatheca_t", "C07-M5": "ovarioles_t", "C07-M6": "oviduct_t"},
    "spermatheca": {"key": "stores_sperms", "C07-M7": "makes_eggs", "C07-M8": "forms_ootheca", "C07-M9": "copulation_organ"},
    "egg_case": {"key": "fertilized_case", "C07-M10": "single_egg", "C07-M11": "unfertilized_case", "C07-M12": "ovary_part"},
    "gonapophyses": {"key": "six_plates", "C07-M13": "three_phallomeres", "C07-M14": "anal_styles", "C07-M15": "anal_cerci"},
}
MODELS = mixed_models("C07", TABLE, 15)
