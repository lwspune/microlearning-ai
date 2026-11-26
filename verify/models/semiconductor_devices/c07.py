"""C07 Current gains alpha and beta: answer models (the key, and one per misconception).

I_E = I_B + I_C; alpha = I_C / I_E; beta = I_C / I_B; beta = alpha / (1 - alpha), alpha = beta / (1 + beta).
params["ask"]:
  "IB":       I_B, in mA, from alpha and I_E (inputs alpha, IE);
  "alpha_I":  alpha from I_E and I_C (inputs IE, IC);
  "beta_I":   beta from I_E and I_C (inputs IE, IC);
  "alpha_b":  alpha from beta (input beta);
  "relation": the relation between beta and alpha (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {"relation": {"key": "a_over_1_minus_a", "C07-M7": "a_over_a_minus_1", "C07-M8": "one_minus_a_over_a",
                      "C07-M9": "a_over_1_plus_a"}}


def _solve(v, p, *, give_IC=False, minus_alpha=False, add=False, invert=False, give_beta=False, IB_IE=False,
           give_alpha=False, IE_IB=False, IB_IC=False, one_over_beta=False, b_minus_1=False, base_frac=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "IB":
        a, IE = v["alpha"], v["IE"]
        IC = a * IE
        if give_IC:
            return sig(IC, n)
        if minus_alpha:
            return sig(IE - a, n)
        return sig(IE + IC if add else IE - IC, n)
    if ask in ("alpha_I", "beta_I"):
        IE, IC = v["IE"], v["IC"]
        IB = IE - IC
        if ask == "alpha_I":
            if invert:
                return sig(IE / IC, n)
            if give_beta:
                return sig(IC / IB, n)
            return sig(IB / IE if IB_IE else IC / IE, n)
        if give_alpha:
            return sig(IC / IE, n)
        if IE_IB:
            return sig(IE / IB, n)
        return sig(IB / IC if IB_IC else IC / IB, n)
    if ask == "alpha_b":
        b = v["beta"]
        if one_over_beta:
            return sig(1 / b, n)
        if b_minus_1:
            return sig(b / (b - 1), n)
        return sig(1 / (1 + b) if base_frac else b / (1 + b), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C07-M1": _m("C07-M1", ("IB",), give_IC=True),  # gives the collector current
    "C07-M2": _m("C07-M2", ("IB",), minus_alpha=True),  # subtracts alpha itself from I_E
    "C07-M3": _m("C07-M3", ("IB",), add=True),  # adds I_C to I_E
    "C07-M4": _m("C07-M4", ("alpha_I",), invert=True),  # turns I_C / I_E upside down
    "C07-M5": _m("C07-M5", ("alpha_I",), give_beta=True),  # gives beta for alpha
    "C07-M6": _m("C07-M6", ("alpha_I",), IB_IE=True),  # gives I_B / I_E
    "C07-M7": _m("C07-M7"),  # uses the book's misprint, alpha / (alpha - 1)
    "C07-M8": _m("C07-M8"),  # turns the relation upside down
    "C07-M9": _m("C07-M9"),  # swaps in the form of alpha = beta / (1 + beta)
    "C07-M10": _m("C07-M10", ("beta_I",), give_alpha=True),  # gives alpha for beta
    "C07-M11": _m("C07-M11", ("beta_I",), IE_IB=True),  # gives I_E / I_B
    "C07-M12": _m("C07-M12", ("beta_I",), IB_IC=True),  # turns I_C / I_B upside down
    "C07-M13": _m("C07-M13", ("alpha_b",), one_over_beta=True),  # takes alpha as 1 / beta
    "C07-M14": _m("C07-M14", ("alpha_b",), b_minus_1=True),  # uses beta / (beta - 1)
    "C07-M15": _m("C07-M15", ("alpha_b",), base_frac=True),  # gives the base's share, 1 / (1 + beta)
}
