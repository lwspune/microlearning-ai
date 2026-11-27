"""C04 Electron transport system: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "site": {"key": "inner_membrane", "C04-M1": "outer_membrane", "C04-M2": "matrix_s", "C04-M3": "cytoplasm_s"},
    "acceptor": {"key": "oxygen_mol", "C04-M4": "nad_plus", "C04-M5": "cytochrome_c", "C04-M6": "water_t"},
    "f0f1": {"key": "atp_t", "C04-M7": "nadh_t", "C04-M8": "water_t", "C04-M9": "gtp_t"},
    "mobile": {"key": "cytochrome_c", "C04-M10": "ubiquinone_t", "C04-M11": "cytochrome_a3", "C04-M12": "nadh_dehydrogenase"},
    "yield": {"key": lambda v: Integer(0) + (3*v['n'] + 2*v['f']), "C04-M13": lambda v: Integer(0) + (2*v['n'] + 3*v['f']), "C04-M14": lambda v: Integer(0) + (3*(v['n'] + v['f'])), "C04-M15": lambda v: Integer(0) + (2*(v['n'] + v['f']))},
}
MODELS = mixed_models("C04", TABLE, 15)
