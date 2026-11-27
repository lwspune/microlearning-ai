"""C01 Symmetry, germ layers and body cavity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "sponge": {"key": "asymmetry_s", "C01-M1": "radial_s", "C01-M2": "bilateral_s", "C01-M3": "biradial_s"},
    "jelly": {"key": "radial_s", "C01-M4": "asymmetry_s", "C01-M5": "bilateral_s", "C01-M6": "spherical_s"},
    "ascaris": {"key": "mesoderm_patches", "C01-M7": "mesoglea_present", "C01-M8": "endoderm_broken", "C01-M9": "no_cavity"},
    "diplo": {"key": "two_layers", "C01-M10": "three_layers", "C01-M11": "one_layer", "C01-M12": "no_layers"},
    "blind": {"key": "blind_sac", "C01-M13": "tube_in_tube", "C01-M14": "cell_aggregate", "C01-M15": "segmented_b"},
}
MODELS = mixed_models("C01", TABLE, 15)
