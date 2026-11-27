"""C01 Histology and types of tissues: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "histology": {"key": "histology_s", "C01-M1": "anatomy_s", "C01-M2": "microbiology_s", "C01-M3": "morphology_s"},
    "heart": {"key": "cardiac_muscle", "C01-M4": "skeletal_muscle", "C01-M5": "smooth_muscle", "C01-M6": "nervous_tissue"},
    "nerve_cord": {"key": "nervous_tissue", "C01-M7": "muscular_tissue", "C01-M8": "connective_tissue", "C01-M9": "epithelial_tissue"},
    "dermis": {"key": "dense_irregular", "C01-M10": "stratified_epithelium", "C01-M11": "adipose_tissue", "C01-M12": "columnar_epithelium"},
    "sarcolemma": {"key": "muscle_fibre", "C01-M13": "bone_t", "C01-M14": "nerve_cell", "C01-M15": "cartilage_t"},
}
MODELS = mixed_models("C01", TABLE, 15)
