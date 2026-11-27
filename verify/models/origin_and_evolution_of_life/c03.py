"""C03 Fossils and the geological time scale: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "jurassic": {"key": "jurassic", "C03-M1": "cambrian", "C03-M2": "tertiary", "C03-M3": "carboniferous"},
    "cenozoic": {"key": "mammals", "C03-M4": "reptiles", "C03-M5": "fishes", "C03-M6": "invertebrates"},
    "palaeozoic": {"key": "fishes_amphibians", "C03-M7": "mammals", "C03-M8": "reptiles", "C03-M9": "birds"},
    "older": {"key": "simpler", "C03-M10": "more_complex", "C03-M11": "same_kinds", "C03-M12": "no_fossils"},
    "mesozoic": {"key": "mesozoic", "C03-M13": "cenozoic", "C03-M14": "palaeozoic", "C03-M15": "proterozoic"},
}
MODELS = mixed_models("C03", TABLE, 15)
