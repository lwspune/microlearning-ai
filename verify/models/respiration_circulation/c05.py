"""C05 Open and closed circulation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "cyclosis": {"key": "cyclosis_c", "C05-M1": "diffusion_c", "C05-M2": "circulation_c", "C05-M3": "thrombosis_c"},
    "closed": {"key": "butterfly_a", "C05-M4": "earthworm_a", "C05-M5": "rabbit_a", "C05-M6": "shark_a"},
    "cockroach": {"key": "open_c", "C05-M7": "closed_c", "C05-M8": "lymphatic_c", "C05-M9": "double_c"},
    "efficient": {"key": "high_pressure_c", "C05-M10": "bathes_organs", "C05-M11": "no_pigment", "C05-M12": "slow_flow"},
    "double": {"key": "twice_c", "C05-M13": "once_c", "C05-M14": "thrice_c", "C05-M15": "four_times_c"},
}
MODELS = mixed_models("C05", TABLE, 15)
