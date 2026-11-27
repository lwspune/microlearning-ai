"""C02 The male reproductive system: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "organ": {"key": "testes", "C02-M1": "sperm", "C02-M2": "seminal_fluid", "C02-M3": "ovary"},
    "leydig": {"key": "testosterone", "C02-M4": "fsh", "C02-M5": "estrogen", "C02-M6": "sperms"},
    "path": {"key": "epididymis_vas", "C02-M7": "vas_epididymis", "C02-M8": "urethra_first", "C02-M9": "prostate_first"},
    "fructose": {"key": "seminal_vesicles", "C02-M10": "prostate", "C02-M11": "cowpers_glands", "C02-M12": "epididymis"},
    "beard": {"key": "secondary_character", "C02-M13": "primary_organ", "C02-M14": "secondary_organ", "C02-M15": "primary_character"},
}
MODELS = mixed_models("C02", TABLE, 15)
