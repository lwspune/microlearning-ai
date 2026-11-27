"""C01 Ecosystem and productivity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "par": {"key": "below_50", "C01-M1": "p100", "C01-M2": "p1_5", "C01-M3": "p2_10"},
    "npp": {"key": lambda v: Integer(0) + (v['g'] - v['r']), "C01-M4": lambda v: Integer(0) + (v['g'] + v['r']), "C01-M5": lambda v: Integer(0) + (v['r']), "C01-M6": lambda v: Integer(0) + (v['r'] - v['g'])},
    "define": {"key": "rate_by_plants", "C01-M7": "total_biomass", "C01-M8": "consumer_rate", "C01-M9": "decomposer_rate"},
    "units": {"key": "mass_area_time", "C01-M10": "mass_only", "C01-M11": "joules_only", "C01-M12": "area_only"},
    "secondary": {"key": "secondary_prod", "C01-M13": "primary_prod", "C01-M14": "gross_prod", "C01-M15": "net_primary_prod"},
}
MODELS = mixed_models("C01", TABLE, 15)
