"""C07 Life cycles and alternation of generations: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "spores": {"key": "meiosis_s", "C07-M1": "mitosis_s", "C07-M2": "fertilization_s", "C07-M3": "budding_s"},
    "zygote_only": {"key": "haplontic_c", "C07-M4": "diplontic_c", "C07-M5": "haplodiplontic_c", "C07-M6": "no_cycle"},
    "both_phases": {"key": "haplodiplontic_c", "C07-M7": "haplontic_c", "C07-M8": "diplontic_c", "C07-M9": "no_cycle"},
    "gametophyte": {"key": "haploid_g", "C07-M10": "diploid_g", "C07-M11": "triploid_g", "C07-M12": "tetraploid_g"},
    "order": {"key": "correct_order", "C07-M13": "fertilization_first", "C07-M14": "spores_from_gametes", "C07-M15": "zygote_to_gametophyte"},
}
MODELS = mixed_models("C07", TABLE, 15)
