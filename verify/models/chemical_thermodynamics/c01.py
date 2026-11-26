"""C01 System, state and properties: answer models (the key, and one per misconception).

All answers are named. params["ask"]:
  "not_state":   which of 1. Q + W, 2. Q, 3. W, 4. H - TS are not state functions;
  "same_paths":  which of dU, Q + W, Q, W are the same along two paths from A to B;
  "state_list":  which of 1. P, 2. H, 3. Q, 4. Q + W are state functions;
  "density":     density: intensive or extensive, and why;
  "specific_heat": specific heat: intensive or extensive, and why.
"""
from sympy import Symbol

_RATIO = {"key": "intensive_same_ratio", "C01-M1": "extensive_grows", "C01-M2": "extensive_ratio",
          "C01-M3": "extensive_swapped"}

NAMED = {
    "not_state": {"key": "two_and_three", "C01-M4": "none_of_them", "C01-M5": "one_two_three",
                  "C01-M6": "all_four"},
    "same_paths": {"key": "dU_and_QW", "C01-M4": "all_four_same", "C01-M5": "dU_only", "C01-M6": "none_same"},
    "state_list": {"key": "one_two_four", "C01-M4": "all_four_state", "C01-M5": "one_and_two",
                   "C01-M6": "one_only"},
    "density": _RATIO,
    "specific_heat": _RATIO,
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        table = NAMED[p["ask"]]
        if mid not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[mid])
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1"),  # thinks every property grows with the amount of matter (T, density too)
    "C01-M2": _m("C01-M2"),  # takes a ratio of two extensive properties as extensive
    "C01-M3": _m("C01-M3"),  # swaps the definitions of intensive and extensive
    "C01-M4": _m("C01-M4"),  # takes heat and work as state functions
    "C01-M5": _m("C01-M5"),  # thinks a sum of path quantities (Q + W) cannot be a state function
    "C01-M6": _m("C01-M6"),  # thinks only measured P, V, T are state functions, not U, H or G
}
