"""C02 The stress-strain curve: answer models (the key, and one per misconception). Every item has a named answer.

params["ask"]:
  "yield":      the point where strain grows with no rise in stress;
  "elastomer":  what an elastomer is;
  "loop":       what the area of a hysteresis loop measures;
  "brittle":    how a brittle material behaves;
  "set":        the point beyond which a wire keeps a permanent set.
"""
from sympy import Symbol

NAMED = {
    "yield": {"key": "yield_point", "C02-M1": "elastic_point", "C02-M2": "breaking_point", "C02-M3": "neck_point"},
    "elastomer": {"key": "large_elastic", "C02-M4": "hooke_large", "C02-M5": "breaks_early", "C02-M6": "stays_deformed"},
    "loop": {"key": "energy_lost", "C02-M7": "energy_stored", "C02-M8": "modulus", "C02-M9": "zero_area"},
    "brittle": {"key": "no_plastic", "C02-M10": "long_plastic", "C02-M11": "no_strain", "C02-M12": "soft"},
    "set": {"key": "elastic_limit", "C02-M13": "proportional_limit", "C02-M14": "fracture_point", "C02-M15": "ultimate_point"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {"key": key, **{f"C02-M{i}": _m(f"C02-M{i}") for i in range(1, 16)}}
