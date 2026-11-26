"""C05 Zero order reactions: answer models (the key, and one per misconception).

rate = k (independent of [A]); [A]t = [A]0 - kt, a straight line of slope -k; t1/2 = [A]0 / 2k.
params["ask"]:
  "thalf": the half life (inputs A0, k);
  "conc":  [A] after time t (inputs A0, k, t);
  "thalf_eq", "plot", "rate_double": the half life formula, the [A]-t graph, and the rate when [A] doubles (named).
"""
from sympy import Symbol, exp

from chemistry import sig

NAMED = {
    "thalf_eq": {"key": "a0_over_2k", "C05-M1": "ln2_over_k", "C05-M2": "a0_over_k", "C05-M3": "two_a0_over_k"},
    "plot": {"key": "line_minus_k", "C05-M1": "curve_ln_line", "C05-M4": "horizontal_line", "C05-M5": "line_plus_k"},
    "rate_double": {"key": "rate_same", "C05-M1": "rate_doubles", "C05-M4": "rate_stays_zero",
                    "C05-M6": "rate_four_times"},
}


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "thalf":
        A0, k = v["A0"], v["k"]
        if rule is None:
            return sig(A0 / (2 * k))
        if rule == "first_order":
            return sig(0.693 / k)
        if rule == "completion":
            return sig(A0 / k)
        if rule == "two_up":
            return sig(2 * A0 / k)
    if ask == "conc":
        A0, k, t = v["A0"], v["k"], v["t"]
        if rule is None:
            return sig(A0 - k * t)
        if rule == "first_order":
            return sig(A0 * exp(-k * t))
        if rule == "no_reaction":
            return sig(A0)
        if rule == "plus":
            return sig(A0 + k * t)
    raise ValueError("does not apply to this item")


def _model(mid, rule):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": _model("key", None),
    "C05-M1": _model("C05-M1", "first_order"),  # applies the first order law: exponential fall, t1/2 = 0.693/k
    "C05-M2": _model("C05-M2", "completion"),  # takes the half life as the time for all of A to go, [A]0/k
    "C05-M3": _model("C05-M3", "two_up"),  # moves the 2 to the wrong side: t1/2 = 2[A]0/k
    "C05-M4": _model("C05-M4", "no_reaction"),  # thinks zero order means no reaction: [A] stays constant
    "C05-M5": _model("C05-M5", "plus"),  # adds kt: [A]t = [A]0 + kt
    "C05-M6": _model("C05-M6", "coeffs"),  # takes the order from the coefficient in the equation
}
