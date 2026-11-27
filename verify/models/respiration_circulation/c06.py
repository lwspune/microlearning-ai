"""C06 Blood: plasma, RBCs and platelets: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "plasma": {"key": "p55", "C06-M1": "p45", "C06-M2": "p90", "C06-M3": "p7"},
    "nucleus": {"key": "rbc_cell", "C06-M4": "neutrophil_cell", "C06-M5": "basophil_cell", "C06-M6": "lymphocyte_cell"},
    "megakaryocyte": {"key": "thrombocytes_c", "C06-M7": "erythrocytes_c", "C06-M8": "leucocytes_c", "C06-M9": "monocytes_c"},
    "haematocrit": {"key": "rbc_volume_ratio", "C06-M10": "wbc_count", "C06-M11": "haemoglobin_content", "C06-M12": "plasma_ratio"},
    "fibrin": {"key": "fibrin_p", "C06-M13": "prothrombin_p", "C06-M14": "thromboplastin_p", "C06-M15": "heparin_p"},
}
MODELS = mixed_models("C06", TABLE, 15)
