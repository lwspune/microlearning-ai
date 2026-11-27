"""C09 Cardiac cycle and ECG: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "pacemaker": {"key": "sa_node", "C09-M1": "av_node", "C09-M2": "his_bundle", "C09-M3": "purkinje_fibres"},
    "p_wave": {"key": "p_wave_e", "C09-M4": "qrs_e", "C09-M5": "q_wave_e", "C09-M6": "t_wave_e"},
    "systole": {"key": "t03", "C09-M7": "t07", "C09-M8": "t04", "C09-M9": "t05"},
    "output": {"key": lambda v: Integer(0) + (v['s']*v['h']), "C09-M10": lambda v: Integer(0) + (v['s'] + v['h']), "C09-M11": lambda v: Integer(0) + (60*v['s']), "C09-M12": lambda v: Integer(0) + (2*v['s']*v['h'])},
    "myogenic": {"key": "own_nodal", "C09-M13": "nerve_driven", "C09-M14": "hormone_driven", "C09-M15": "skeletal_muscle"},
}
MODELS = mixed_models("C09", TABLE, 15)
