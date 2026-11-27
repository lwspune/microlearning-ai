"""C03 Properties of muscles: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "fatigue": {"key": "lactic_acid", "C03-M1": "pyruvic_acid", "C03-M2": "malic_acid", "C03-M3": "succinic_acid"},
    "neck": {"key": "tetanus_t", "C03-M4": "single_contraction", "C03-M5": "no_contraction", "C03-M6": "fatigue_t"},
    "tetanus_cause": {"key": "rapid_stimuli", "C03-M7": "single_stimulus", "C03-M8": "lactic_build_up", "C03-M9": "slow_stimuli"},
    "red": {"key": "much_myoglobin", "C03-M10": "little_myoglobin", "C03-M11": "anaerobic_t", "C03-M12": "more_lactic"},
    "anaerobic": {"key": "less_atp_lactic", "C03-M13": "more_atp_lactic", "C03-M14": "less_atp_no_waste", "C03-M15": "pyruvic_builds"},
}
MODELS = mixed_models("C03", TABLE, 15)
