"""C02 Carbohydrates: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "glycosidic": {"key": "each_of_these", "C02-M1": "disaccharide_only", "C02-M2": "nucleosides_only", "C02-M3": "polysaccharide_only"},
    "test": {"key": "benedicts_r", "C02-M4": "iodine_r", "C02-M5": "biuret_r", "C02-M6": "sudan_r"},
    "reducing": {"key": "free_aldehyde_ketone", "C02-M7": "no_free_group", "C02-M8": "peptide_group", "C02-M9": "phosphate_group"},
    "glycogen": {"key": "animal_homo", "C02-M10": "plant_storage", "C02-M11": "hetero_poly", "C02-M12": "disaccharide_g"},
    "transport": {"key": "sucrose_c", "C02-M13": "glucose_c", "C02-M14": "starch_c", "C02-M15": "cellulose_c"},
}
MODELS = mixed_models("C02", TABLE, 15)
