"""C11 Reproductive health and birth control: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "tubectomy": {"key": "tubectomy", "C11-M1": "vasectomy", "C11-M2": "iud", "C11-M3": "condom"},
    "vasectomy": {"key": "vas_deferens", "C11-M4": "fallopian_tube", "C11-M5": "urethra", "C11-M6": "epididymis"},
    "barrier": {"key": "condom", "C11-M7": "oral_pill", "C11-M8": "vasectomy_m", "C11-M9": "rhythm"},
    "pill": {"key": "blocks_ovulation", "C11-M10": "kills_sperm", "C11-M11": "blocks_tube", "C11-M12": "barrier"},
    "rch": {"key": "awareness_care", "C11-M13": "only_contraception", "C11-M14": "only_abortion", "C11-M15": "only_census"},
}
MODELS = mixed_models("C11", TABLE, 15)
