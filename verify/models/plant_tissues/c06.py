"""C06 Secondary growth: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "interfascicular": {"key": "medullary_rays", "C06-M1": "intrafascicular_spread", "C06-M2": "outer_cortex", "C06-M3": "pith_cells"},
    "towards_pith": {"key": "secondary_xylem", "C06-M4": "secondary_phloem", "C06-M5": "primary_xylem", "C06-M6": "secondary_cortex"},
    "monocot_girth": {"key": "closed_scattered", "C06-M7": "too_few_bundles", "C06-M8": "exarch_xylem", "C06-M9": "no_cork_cambium"},
    "root_cambium": {"key": "conjunctive_parenchyma", "C06-M10": "medullary_rays", "C06-M11": "endodermis_r", "C06-M12": "outer_cortex"},
    "dracaena": {"key": "anomalous_growth", "C06-M13": "normal_ring", "C06-M14": "intercalary_growth", "C06-M15": "apical_growth"},
}
MODELS = mixed_models("C06", TABLE, 15)
