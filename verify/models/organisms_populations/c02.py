"""C02 Responses to stress and adaptations: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "polar": {"key": "hibernation_r", "C02-M1": "aestivation_r", "C02-M2": "migration_r", "C02-M3": "regulation_r"},
    "snail": {"key": "aestivation_r", "C02-M4": "hibernation_r", "C02-M5": "dormancy_r", "C02-M6": "migration_r"},
    "dormancy": {"key": "plants_o", "C02-M7": "mammals_o", "C02-M8": "snails_o", "C02-M9": "birds_o"},
    "regulate": {"key": "regulate_r", "C02-M10": "conform_r", "C02-M11": "migrate_r", "C02-M12": "suspend_r"},
    "ecto": {"key": "ectotherms_o", "C02-M13": "endotherms_o", "C02-M14": "regulators_o", "C02-M15": "homeotherms_o"},
}
MODELS = mixed_models("C02", TABLE, 15)
