"""C02 The alimentary canal: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "coils": {"key": "mesenteries_t", "C02-M1": "peristalsis_t", "C02-M2": "sphincters_t", "C02-M3": "rugae_t"},
    "push": {"key": "peristalsis_t", "C02-M4": "gravity_alone", "C02-M5": "mucus_t", "C02-M6": "cardiac_sphincter"},
    "backflow": {"key": "cardiac_sphincter", "C02-M7": "oddi_sphincter", "C02-M8": "mesenteries_t", "C02-M9": "rugae_t"},
    "folds": {"key": "rugae_t", "C02-M10": "villi_t", "C02-M11": "mesenteries_t", "C02-M12": "gastric_glands"},
    "protect": {"key": "mucus_goblet", "C02-M13": "hcl_parietal", "C02-M14": "pepsinogen_chief", "C02-M15": "intrinsic_factor"},
}
MODELS = mixed_models("C02", TABLE, 15)
