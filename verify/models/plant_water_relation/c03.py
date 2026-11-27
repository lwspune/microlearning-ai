"""C03 Osmotic pressure, turgor and DPD: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "moves": {"key": "dpd", "C03-M1": "turgor_pressure", "C03-M2": "wall_pressure", "C03-M3": "incipient_plasmolysis"},
    "dpd": {"key": lambda v: Integer(0) + (v['o'] - v['t']), "C03-M4": lambda v: Integer(0) + (v['o'] + v['t']), "C03-M5": lambda v: Integer(0) + (v['t'] - v['o']), "C03-M6": lambda v: Integer(0) + (v['o'])},
    "turgid": {"key": "zero_dpd", "C03-M7": "equals_op", "C03-M8": "at_maximum", "C03-M9": "negative"},
    "direction": {"key": "higher_dpd", "C03-M10": "lower_dpd", "C03-M11": "higher_tp", "C03-M12": "higher_potential"},
    "pressure": {"key": "increases", "C03-M13": "decreases", "C03-M14": "unchanged", "C03-M15": "becomes_zero"},
}
MODELS = mixed_models("C03", TABLE, 15)
