"""C06 The embryo sac: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "haploid": {"key": lambda v: Integer(0) + (6), "C06-M1": lambda v: Integer(0) + (7), "C06-M2": lambda v: Integer(0) + (8), "C06-M3": lambda v: Integer(0) + (3)},
    "nuclei": {"key": lambda v: Integer(0) + (8), "C06-M4": lambda v: Integer(0) + (7), "C06-M5": lambda v: Integer(0) + (6), "C06-M6": lambda v: Integer(0) + (4)},
    "apparatus": {"key": "egg_two_synergids", "C06-M7": "egg_antipodals", "C06-M8": "egg_polar_nuclei", "C06-M9": "egg_alone"},
    "filiform": {"key": "guides_tube", "C06-M10": "nourishes_embryo", "C06-M11": "forms_endosperm", "C06-M12": "on_antipodals"},
    "haploid_cell": {"key": "synergid", "C06-M13": "endosperm_cell", "C06-M14": "leaf_cell", "C06-M15": "zygote"},
}
MODELS = mixed_models("C06", TABLE, 15)
