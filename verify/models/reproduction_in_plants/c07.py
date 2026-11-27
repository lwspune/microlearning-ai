"""C07 Pollination and its agents: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "geitonogamy": {"key": "geitonogamy", "C07-M1": "xenogamy", "C07-M2": "cleistogamy", "C07-M3": "apogamy"},
    "insect": {"key": "sticky_rough", "C07-M4": "large_quantities", "C07-M5": "dry_smooth", "C07-M6": "feathery_stigma"},
    "wind": {"key": "light_dry_pollen", "C07-M7": "bright_nectar", "C07-M8": "sticky_scented", "C07-M9": "submerged"},
    "water": {"key": "hydrophily", "C07-M10": "anemophily", "C07-M11": "entomophily", "C07-M12": "ornithophily"},
    "xenogamy": {"key": "xenogamy", "C07-M13": "geitonogamy", "C07-M14": "autogamy", "C07-M15": "cleistogamy"},
}
MODELS = mixed_models("C07", TABLE, 15)
