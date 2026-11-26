"""C01 Rate of a reaction: answer models (the key, and one per misconception).

For aA + ... -> cC + ..., rate = -(1/a) d[A]/dt = (1/c) d[C]/dt, one positive number for the reaction.
params["ask"]:
  "species":  the rate of change of species Y from that of X (inputs r: X's rate as a positive number,
              a: X's coefficient, b: Y's coefficient);
  "reaction": the rate of reaction from a reactant's d[X]/dt (inputs d: d[X]/dt, negative; a: X's coefficient);
  "tangent":  the instantaneous rate of reaction at t1 from a tangent through (0, y0) and (T, 0)
              (inputs y0, T, A0: [A] at t = 0, c1: [A] at t1, t1, a: A's coefficient);
  "equation": the reaction behind -1/3 d[A]/dt = 1/2 d[B]/dt = d[C]/dt (named).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {"equation": {"key": "eq_3a_2b_c", "C01-M1": "eq_a_b_c", "C01-M2": "eq_2a_3b_6c", "C01-M4": "eq_2b_c_3a"}}


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "species":
        r, a, b = v["r"], v["a"], v["b"]
        if rule == "same":
            return sig(r)
        if rule == "inverted":
            return sig(r * a / b)
        if rule == "one_coeff":
            return sig(r * b)
        if rule is None:
            return sig(r * b / a)
    if ask == "reaction":
        d, a = v["d"], v["a"]
        if rule == "same":
            return sig(-d)
        if rule == "inverted":
            return sig(-d * a)
        if rule == "sign":
            return sig(d / a)
        if rule is None:
            return sig(-d / a)
    if ask == "tangent":
        slope = v["y0"] / v["T"]
        a = v["a"]
        if rule == "same":
            return sig(slope)
        if rule == "sign":
            return sig(-slope / a)
        if rule == "average":
            return sig((v["A0"] - v["c1"]) / v["t1"] / a)
        if rule is None:
            return sig(slope / a)
    raise ValueError("does not apply to this item")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, rule):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1", "same"),  # every species changes at the same rate; the coefficients are ignored
    "C01-M2": _m("C01-M2", "inverted"),  # uses the coefficients upside down
    "C01-M3": _m("C01-M3", "one_coeff"),  # multiplies by the product's coefficient, never divides by the reactant's
    "C01-M4": _m("C01-M4", "sign"),  # drops the minus sign on a reactant, so its rate comes out negative
    "C01-M5": _m("C01-M5", "average"),  # takes the average rate from t = 0 for the rate at an instant
}
