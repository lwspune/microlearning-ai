"""C04 Lamarckism, Darwinism and mutation theory: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "weismann": {"key": "weismann", "C04-M1": "de_vries", "C04-M2": "darwin", "C04-M3": "lamarck"},
    "lamarck": {"key": "lamarck", "C04-M4": "darwin", "C04-M5": "de_vries", "C04-M6": "weismann"},
    "wrong": {"key": "mutations_directional", "C04-M7": "darwin_small_directional", "C04-M8": "mutations_random", "C04-M9": "radiation_divergent"},
    "oenothera": {"key": "evening_primrose", "C04-M10": "pea", "C04-M11": "drosophila", "C04-M12": "peppered_moth"},
    "drawback": {"key": "no_inheritance_explained", "C04-M13": "too_much_genetics", "C04-M14": "denied_selection", "C04-M15": "relied_on_mutations"},
}
MODELS = mixed_models("C04", TABLE, 15)
