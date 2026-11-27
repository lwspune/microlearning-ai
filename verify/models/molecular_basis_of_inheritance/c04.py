"""C04 DNA replication: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "semi": {"key": "one_old_one_new", "C04-M1": "both_new", "C04-M2": "old_kept_whole", "C04-M3": "mixed_pieces"},
    "proved": {"key": "meselson_stahl", "C04-M4": "watson_crick", "C04-M5": "griffith", "C04-M6": "hershey_chase"},
    "okazaki": {"key": "five_to_three_only", "C04-M7": "lagging_damaged", "C04-M8": "both_directions", "C04-M9": "no_primer"},
    "topo": {"key": "topoisomerase", "C04-M10": "helicase", "C04-M11": "ligase", "C04-M12": "primase"},
    "phase": {"key": "s_phase", "C04-M13": "g1_phase", "C04-M14": "m_phase", "C04-M15": "g2_phase"},
}
MODELS = mixed_models("C04", TABLE, 15)
