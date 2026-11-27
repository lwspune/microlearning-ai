"""C02 Malaria, amoebiasis and filariasis: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "malaria": {"key": "plasmodium_p", "C02-M1": "entamoeba_p", "C02-M2": "wuchereria_p", "C02-M3": "salmonella_p"},
    "infective": {"key": "sporozoite_s", "C02-M4": "merozoite_s", "C02-M5": "schizont_s", "C02-M6": "gametocyte_s"},
    "elephantiasis": {"key": "w_bancrofti", "C02-M7": "p_vivax", "C02-M8": "bedbug_p", "C02-M9": "ascaris_p"},
    "vector": {"key": "female_culex", "C02-M10": "female_anopheles", "C02-M11": "male_culex", "C02-M12": "aedes_m"},
    "amoebiasis": {"key": "faeco_oral", "C02-M13": "mosquito_bite", "C02-M14": "droplets_r", "C02-M15": "blood_transfusion"},
}
MODELS = mixed_models("C02", TABLE, 15)
