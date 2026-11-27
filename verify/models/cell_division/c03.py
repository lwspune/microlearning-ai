"""C03 Meiosis I: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "synapsis": {"key": "homologous_c", "C03-M1": "any_two", "C03-M2": "non_homologous", "C03-M3": "sister_chromatids"},
    "crossing": {"key": "pachytene_s", "C03-M4": "leptotene_s", "C03-M5": "zygotene_s", "C03-M6": "diplotene_s"},
    "bouquet": {"key": "leptotene_s", "C03-M7": "zygotene_s", "C03-M8": "pachytene_s", "C03-M9": "diakinesis_s"},
    "desynapsis": {"key": "diplotene_s", "C03-M10": "pachytene_s", "C03-M11": "zygotene_s", "C03-M12": "leptotene_s"},
    "chromatids": {"key": lambda v: Integer(0) + (2*v['n']), "C03-M13": lambda v: Integer(0) + (v['n']), "C03-M14": lambda v: Integer(0) + (v['n']/2), "C03-M15": lambda v: Integer(0) + (4*v['n'])},
}
MODELS = mixed_models("C03", TABLE, 15)
