"""C02 Magnetic lines of force: answer models (the key, and one per misconception). Every item has a named answer.

params["ask"]: "inside", "neutral", "cross", "strong", "gap".
"""
from sympy import Symbol

NAMED = {
    "inside": {"key": "s_to_n", "C02-M1": "n_to_s_inside", "C02-M2": "none_inside", "C02-M3": "across_magnet"},
    "neutral": {"key": "midway_nn", "C02-M4": "magnet_centres", "C02-M5": "no_neutral", "C02-M6": "far_s_poles"},
    "cross": {"key": "one_direction", "C02-M7": "lines_repel", "C02-M8": "cross_if_strong", "C02-M9": "would_cancel"},
    "strong": {"key": "lines_closest", "C02-M10": "at_equator", "C02-M11": "lines_spread", "C02-M12": "same_along_line"},
    "gap": {"key": "radially_out", "C02-M13": "radially_in", "C02-M14": "circles_round", "C02-M15": "no_gap_field"},
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
