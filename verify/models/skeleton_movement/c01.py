"""C01 Structure of skeletal muscle: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "unit": {"key": "sarcomere_t", "C01-M1": "myofibril_t", "C01-M2": "z_band", "C01-M3": "cross_bridges"},
    "i_band": {"key": "actin_only", "C01-M4": "myosin_only", "C01-M5": "actin_and_myosin", "C01-M6": "m_line"},
    "cover": {"key": "tropomyosin_t", "C01-M7": "troponin_t", "C01-M8": "g_actin", "C01-M9": "myosin_head"},
    "head": {"key": "atpase_activity", "C01-M10": "calcium_affinity", "C01-M11": "covers_sites", "C01-M12": "g_actin_strands"},
    "antagonist": {"key": "sphincter_supinator", "C01-M13": "flexor_extensor", "C01-M14": "adductor_abductor", "C01-M15": "levator_depressor"},
}
MODELS = mixed_models("C01", TABLE, 15)
