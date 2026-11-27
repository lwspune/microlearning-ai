"""C01 Growth and its phases: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "phases": {"key": "lag_log_stationary", "C01-M1": "stationary_log_lag", "C01-M2": "log_lag_stationary", "C01-M3": "log_stationary_lag"},
    "open": {"key": "lifelong_growth", "C01-M4": "stops_at_maturity", "C01-M5": "only_in_light", "C01-M6": "only_seedlings"},
    "grand": {"key": "all_phases_time", "C01-M7": "log_phase_time", "C01-M8": "lag_phase_time", "C01-M9": "whole_lifespan"},
    "fastest": {"key": "enlargement_phase", "C01-M10": "division_phase", "C01-M11": "maturation_phase", "C01-M12": "all_equal"},
    "shape": {"key": "s_shaped", "C01-M13": "straight_line", "C01-M14": "bell_shaped", "C01-M15": "j_shaped"},
}
MODELS = mixed_models("C01", TABLE, 15)
