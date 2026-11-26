"""C03 Molecularity and mechanism: answer models (the key, and one per misconception).

An elementary step's molecularity is the number of particles that collide in it, and its rate law follows its
equation; a complex reaction's rate law is that of its slowest step.
params["ask"]:
  "nof2", "noh2": the rate law of a two-step mechanism (named);
  "statement":    order against molecularity (named);
  "elem":         molecularity and order of an elementary step (inputs n: particles colliding, s: kinds of
                  reactant), named as mol<m>_ord<o>, with "exp" for "found only by experiment".
"""
from sympy import Symbol

NAMED = {
    "nof2": {"key": "rl_no2_f2", "C03-M1": "rl_no2sq_f2", "C03-M2": "rl_f_no2", "C03-M3": "rl_unpredictable"},
    "noh2": {"key": "rl_nosq_h2", "C03-M1": "rl_nosq_h2sq", "C03-M2": "rl_h2o2_h2", "C03-M5": "rl_no_h2"},
    "statement": {"key": "st_key", "C03-M1": "st_coeffs", "C03-M3": "st_neither", "C03-M4": "st_both_exp"},
}

ELEM = {  # (molecularity, order) under each rule
    "key": lambda n, s: (n, n),
    "C03-M3": lambda n, s: (n, "exp"),  # an elementary step's order too must come from experiment
    "C03-M4": lambda n, s: ("exp", n),  # molecularity, like order, must come from experiment
    "C03-M5": lambda n, s: (s, s),  # counts the kinds of reactant, not the particles
}


def _model(mid):
    def model(v, p):
        ask = p["ask"]
        if ask in NAMED:
            if mid not in NAMED[ask]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[ask][mid])
        if ask == "elem":
            if mid not in ELEM:
                raise ValueError("does not apply to this item")
            m, o = ELEM[mid](v["n"], v["s"])
            return Symbol(f"mol{m}_ord{o}")
        raise ValueError(f"unknown ask {ask}")
    return model


MODELS = {
    "key": _model("key"),
    "C03-M1": _model("C03-M1"),  # writes the rate law from the overall equation
    "C03-M2": _model("C03-M2"),  # writes the rate law from the fast step
    "C03-M3": _model("C03-M3"),  # thinks even an elementary step's order must come from experiment
    "C03-M4": _model("C03-M4"),  # treats molecularity like order: from experiment, possibly zero or fractional
    "C03-M5": _model("C03-M5"),  # counts the kinds of reactant in a step, not the particles colliding
}
