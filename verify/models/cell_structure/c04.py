"""C04 The endomembrane system: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "flow": {"key": "rer_golgi_lysosome", "C04-M1": "ser_start", "C04-M2": "nucleus_start", "C04-M3": "golgi_start"},
    "rough": {"key": "ribosomes_studded", "C04-M4": "no_ribosomes", "C04-M5": "dna_inside", "C04-M6": "double_membrane"},
    "cis": {"key": "cis_face", "C04-M7": "trans_face", "C04-M8": "lumen_g", "C04-M9": "nuclear_face"},
    "lysosome": {"key": "autophagy_l", "C04-M10": "makes_proteins", "C04-M11": "makes_atp", "C04-M12": "stores_starch"},
    "smooth": {"key": "lipids_s", "C04-M13": "proteins_s", "C04-M14": "atp_s", "C04-M15": "ribosomes_s"},
}
MODELS = mixed_models("C04", TABLE, 15)
