"""C07 The dicot seed: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "scar": {"key": "hilum_s", "C07-M1": "micropyle_s", "C07-M2": "testa_s", "C07-M3": "plumule_s"},
    "outer_coat": {"key": "testa_s", "C07-M4": "tegmen_s", "C07-M5": "hilum_s", "C07-M6": "cotyledon_s"},
    "axis": {"key": "radicle_plumule", "C07-M7": "two_cotyledons", "C07-M8": "testa_tegmen", "C07-M9": "hilum_micropyle"},
    "tap_root": {"key": "radicle_s", "C07-M10": "plumule_s", "C07-M11": "cotyledon_s", "C07-M12": "hilum_s"},
    "inside": {"key": "two_cotyledons_axis", "C07-M13": "one_cotyledon", "C07-M14": "plumule_only", "C07-M15": "hilum_micropyle"},
}
MODELS = mixed_models("C07", TABLE, 15)
