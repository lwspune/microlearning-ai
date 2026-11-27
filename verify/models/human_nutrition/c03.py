"""C03 Digestive glands: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "acinar": {"key": "pancreas_t", "C03-M1": "liver_t", "C03-M2": "gastric_glands", "C03-M3": "intestinal_glands"},
    "starch": {"key": "maltose_t", "C03-M4": "glucose_t", "C03-M5": "sucrose_t", "C03-M6": "peptones_t"},
    "heterocrine": {"key": "both_exo_endo", "C03-M7": "only_exocrine", "C03-M8": "only_endocrine", "C03-M9": "makes_bile"},
    "insulin": {"key": "beta_cells", "C03-M10": "alpha_cells", "C03-M11": "delta_cells", "C03-M12": "acinar_cells"},
    "kupffer": {"key": "detoxification_t", "C03-M13": "produce_bile", "C03-M14": "store_bile", "C03-M15": "secrete_insulin"},
}
MODELS = mixed_models("C03", TABLE, 15)
