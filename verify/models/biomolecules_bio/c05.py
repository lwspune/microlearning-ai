"""C05 Enzymes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "holo": {"key": "holoenzyme_e", "C05-M1": "isoenzyme_e", "C05-M2": "denatured_e", "C05-M3": "none_e"},
    "km": {"key": "higher_affinity", "C05-M4": "less_affinity", "C05-M5": "no_product", "C05-M6": "all_saturated"},
    "induced": {"key": "koshland_s", "C05-M7": "fischer_s", "C05-M8": "singer_s", "C05-M9": "chargaff_s"},
    "sucrase": {"key": "hydrolase_c", "C05-M10": "ligase_c", "C05-M11": "isomerase_c", "C05-M12": "transferase_c"},
    "ribozyme": {"key": "ribozymes_e", "C05-M13": "proteases_e", "C05-M14": "holoenzymes_e", "C05-M15": "apoenzymes_e"},
}
MODELS = mixed_models("C05", TABLE, 15)
