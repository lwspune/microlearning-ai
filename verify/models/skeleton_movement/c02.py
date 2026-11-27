"""C02 Muscle contraction and relaxation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "calcium": {"key": "binds_troponin", "C02-M1": "breaks_bridges", "C02-M2": "crosses_junction", "C02-M3": "repolarises_t"},
    "store": {"key": "sarcoplasmic_reticulum", "C02-M4": "t_tubules", "C02-M5": "sarcolemma_t", "C02-M6": "motor_end_plate"},
    "sliding": {"key": "filaments_slide", "C02-M7": "actin_shortens", "C02-M8": "myosin_shortens", "C02-M9": "z_lines_apart"},
    "complex": {"key": "actomyosin_t", "C02-M10": "troponin_tropomyosin", "C02-M11": "meromyosin_t", "C02-M12": "myoglobin_t"},
    "relax": {"key": "covers_again", "C02-M13": "uncovers_sites", "C02-M14": "stays_off", "C02-M15": "splits_atp"},
}
MODELS = mixed_models("C02", TABLE, 15)
