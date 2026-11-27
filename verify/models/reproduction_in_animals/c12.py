"""C12 Infertility and sexually transmitted diseases: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "ivf": {"key": "in_vitro", "C12-M1": "in_vivo", "C12-M2": "in_situ", "C12-M3": "artificial_insemination"},
    "zift": {"key": "zygote_intrafallopian", "C12-M4": "gamete_intrafallopian", "C12-M5": "zona_ivf", "C12-M6": "zygote_intrauterine"},
    "gonorrhoea": {"key": "neisseria", "C12-M7": "treponema", "C12-M8": "hiv", "C12-M9": "candida"},
    "syphilis": {"key": "treponema", "C12-M10": "neisseria", "C12-M11": "hiv", "C12-M12": "herpes_virus"},
    "gift": {"key": "gametes_to_tube", "C12-M13": "zygote_to_tube", "C12-M14": "embryo_to_uterus", "C12-M15": "sperm_to_cervix"},
}
MODELS = mixed_models("C12", TABLE, 15)
