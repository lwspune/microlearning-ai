"""C02 Intrinsic semiconductors: answer models (the key, and one per misconception).

params["ask"]:
  "carriers":  what carries current in a semiconductor (named);
  "intrinsic": what is true of an intrinsic semiconductor (named);
  "total":     total free carriers when ne electrons are in the conduction band (input ne);
  "hole":      what a hole is (named);
  "hole_move": how a hole moves (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "carriers": {"key": "both_eh", "C02-M1": "electrons_only", "C02-M2": "holes_only", "C02-M3": "neither"},
    "intrinsic": {"key": "ne_eq_nh", "C02-M4": "ne_more", "C02-M5": "no_holes", "C02-M6": "has_impurity"},
    "hole": {"key": "vacancy", "C02-M10": "proton", "C02-M11": "positive_ion", "C02-M12": "missing_atom"},
    "hole_move": {"key": "neighbour_fills", "C02-M13": "ions_drift", "C02-M14": "nuclei_move", "C02-M15": "never_moves"},
}


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return sig(2 * v["ne"], p.get("sf", 3))


def _m(mid, f=None):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if f is None:
            raise ValueError("does not apply to this item")
        return sig(f(v["ne"]), p.get("sf", 3))
    return model


MODELS = {
    "key": key,
    **{f"C02-M{i}": _m(f"C02-M{i}") for i in (1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15)},
    "C02-M7": _m("C02-M7", lambda x: x),  # forgets the holes
    "C02-M8": _m("C02-M8", lambda x: x / 2),  # thinks the electrons split into electrons and holes
    "C02-M9": _m("C02-M9", lambda x: x * x),  # multiplies the two densities
}
