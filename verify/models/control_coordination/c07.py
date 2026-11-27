"""C07 Sense organs and nervous disorders: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "ossicles": {"key": "malleus_incus_stapes", "C07-M1": "cochlea_set", "C07-M2": "pinna_set", "C07-M3": "incus_cochlea_set"},
    "smallest": {"key": "stapes_b", "C07-M4": "malleus_b", "C07-M5": "incus_b", "C07-M6": "hyoid_b"},
    "taste": {"key": "chemoreceptors_r", "C07-M7": "mechanoreceptors_r", "C07-M8": "photoreceptors_r", "C07-M9": "thermoreceptors_r"},
    "dopamine": {"key": "parkinsons_d", "C07-M10": "alzheimers_d", "C07-M11": "addisons_d", "C07-M12": "graves_d"},
    "dementia": {"key": "dementia_d", "C07-M13": "epilepsy_d", "C07-M14": "paralysis_d", "C07-M15": "tremor_d"},
}
MODELS = mixed_models("C07", TABLE, 15)
