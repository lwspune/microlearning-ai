"""C01 The cell cycle: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "dna": {"key": "s_phase", "C01-M1": "g1_phase", "C01-M2": "g2_phase", "C01-M3": "g0_phase"},
    "histones": {"key": "s_phase", "C01-M4": "g1_phase", "C01-M5": "g2_phase", "C01-M6": "m_phase"},
    "longest": {"key": "g1_phase", "C01-M7": "s_phase", "C01-M8": "g2_phase", "C01-M9": "m_phase"},
    "cancer": {"key": "g1_phase", "C01-M10": "s_phase", "C01-M11": "telophase_p", "C01-M12": "cytokinesis_p"},
    "paramoecium": {"key": "amitosis_d", "C01-M13": "mitosis_d", "C01-M14": "meiosis_d", "C01-M15": "budding_d"},
}
MODELS = mixed_models("C01", TABLE, 15)
