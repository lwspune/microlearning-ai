"""C06 Hardness: answer models (the key, and one per misconception). Every item has a named answer.

params["ask"]:
  "resist_plastic": the property that resists plastic deformation;
  "resist_fracture": the property that resists fracturing;
  "hardest":  the hardest known material;
  "scratch":  what it means when A scratches B but not the other way;
  "test":     how the hardness of a metal is measured.
"""
from sympy import Symbol

NAMED = {
    "resist_plastic": {"key": "hardness", "C06-M1": "elasticity", "C06-M2": "plasticity", "C06-M3": "ductility"},
    "resist_fracture": {"key": "toughness", "C06-M4": "hardness_f", "C06-M5": "elasticity_f", "C06-M6": "plasticity_f"},
    "hardest": {"key": "diamond", "C06-M7": "steel", "C06-M8": "lead", "C06-M9": "rubber"},
    "scratch": {"key": "A_harder", "C06-M10": "B_harder", "C06-M11": "equal_hard", "C06-M12": "A_tougher"},
    "test": {"key": "indent", "C06-M13": "stretch", "C06-M14": "hammer", "C06-M15": "bend_back"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {"key": key, **{f"C06-M{i}": _m(f"C06-M{i}") for i in range(1, 16)}}
