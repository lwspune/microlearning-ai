"""C02 Rate law and order: answer models (the key, and one per misconception).

rate = k[A]^x[B]^y; when [A] is multiplied by f (others fixed) the rate is multiplied by f^x, so x = log(rate factor) / log f.
params["ask"]:
  "law":     orders (x, y) from two pairs of runs (named; inputs fA, rA: A's concentration and rate factors at fixed [B];
             fB, rB: B's at fixed [A]; a, b: the coefficients in the equation);
  "order1":  the order in one reactant (inputs f, rf, a);
  "overall": the overall order from [B] times fB alone (rate times rB), then [A] times fA with [B] times fB
             (rate times r2) (inputs fA, fB, rB, r2, a, b);
  "k":       the rate constant (inputs rate, A, B, x, y: the stated orders, a, b);
  "factor":  the factor the rate changes by when [A] and [B] are multiplied by fA, fB (inputs fA, fB, x, y, a, b).
"""
from sympy import Symbol, log, nsimplify, simplify

from chemistry import sig


def _order(rate_factor, conc_factor, rule):
    if rule == "inverted":
        return nsimplify(simplify(log(conc_factor) / log(rate_factor)))
    if rule == "rate_factor":
        return rate_factor
    return nsimplify(simplify(log(rate_factor) / log(conc_factor)))


def _law(x, y):
    """A rate law k[A]^x[B]^y as a named answer, e.g. law_a1_b1over2."""
    n = lambda r: str(r).replace("/", "over")  # noqa: E731
    return Symbol(f"law_a{n(x)}_b{n(y)}")


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "law":
        if rule == "coeffs":
            return _law(v["a"], v["b"])
        if rule in (None, "inverted", "rate_factor"):
            return _law(_order(v["rA"], v["fA"], rule), _order(v["rB"], v["fB"], rule))
    if ask == "order1":
        if rule == "coeffs":
            return v["a"]
        if rule in (None, "inverted", "rate_factor"):
            return _order(v["rf"], v["f"], rule)
    if ask == "overall":
        if rule == "coeffs":
            return v["a"] + v["b"]
        if rule in (None, "inverted", "rate_factor"):
            y = _order(v["rB"], v["fB"], rule)
            x = _order(v["r2"] / v["rB"], v["fA"], rule)  # the part of the rise due to A
            return nsimplify(x + y)
    if ask == "k":
        rate, A, B = v["rate"], v["A"], v["B"]
        if rule is None:
            return sig(rate / (A ** v["x"] * B ** v["y"]))
        if rule == "coeffs":
            return sig(rate / (A ** v["a"] * B ** v["b"]))
        if rule == "no_power":
            return sig(rate / (A * B))
        if rule == "times_order":
            return sig(rate / (v["x"] * A * v["y"] * B))
    if ask == "factor":
        fA, fB = v["fA"], v["fB"]
        if rule is None:
            return sig(fA ** v["x"] * fB ** v["y"])
        if rule == "coeffs":
            return sig(fA ** v["a"] * fB ** v["b"])
        if rule == "no_power":
            return sig(fA * fB)
        if rule == "times_order":
            return sig(v["x"] * fA * v["y"] * fB)
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p)


def _m(rule):
    return lambda v, p: _solve(v, p, rule)


MODELS = {
    "key": key,
    "C02-M1": _m("coeffs"),  # takes the orders from the coefficients of the balanced equation
    "C02-M2": _m("inverted"),  # solves (rate factor) = f^x upside down: x = log f / log(rate factor)
    "C02-M3": _m("rate_factor"),  # takes the order as the factor by which the rate changes
    "C02-M4": _m("no_power"),  # leaves out the exponents: every concentration enters to the first power
    "C02-M5": _m("times_order"),  # multiplies by the order instead of raising to it
}
