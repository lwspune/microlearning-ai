"""C07 Units of k and pseudo first order: answer models (the key, and one per misconception).

For order n, k = rate / [A]^n has units mol^(1-n) L^(n-1) s^-1, returned as an expression in the plain
symbols mol, L, s. Pseudo first order: rate = k[A][B] with B in large excess is rate = k'[A], k' = k[B].
params["ask"]:
  "units":  the units of k for order n (inputs n: the order from the rate law; ne: the sum of the
            balanced equation's coefficients);
  "order":  the order from the units of k, mol^p L^-p s^-1 (inputs p, ne);
  "pseudo": k' for rate = k[A][B] with B in excess (inputs k, A, B: the concentrations).
"""
from sympy import Symbol

from chemistry import sig

MOL, L, S = Symbol("mol"), Symbol("L"), Symbol("s")


def unit(n):
    """mol^(1-n) L^(n-1) s^-1, the units of k for order n."""
    return MOL ** (1 - n) * L ** (n - 1) / S


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "units":
        n = v["n"]
        if rule == "m1":
            return MOL ** (n - 1) * L ** (1 - n) / S
        if rule == "m2":
            return 1 / S
        if rule == "m3":
            return unit(v["ne"])
        if rule is None:
            return unit(n)
    if ask == "order":
        pw = v["p"]
        if rule == "m1":
            return 1 + pw
        if rule == "m2":
            return 1
        if rule == "m3":
            return v["ne"]
        if rule is None:
            return 1 - pw
    if ask == "pseudo":
        k, a, b = v["k"], v["A"], v["B"]
        if rule == "m4":
            return sig(k)
        if rule == "m5":
            return sig(k / b)
        if rule == "m6":
            return sig(k * a * b)
        if rule is None:
            return sig(k * b)
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p)


def _m(rule):
    return lambda v, p: _solve(v, p, rule)


MODELS = {
    "key": key,
    "C07-M1": _m("m1"),  # writes the concentration factor as (mol L^-1)^(n-1), the exponent flipped
    "C07-M2": _m("m2"),  # gives every k the first order unit s^-1 (so any k looks first order)
    "C07-M3": _m("m3"),  # takes the order from the balanced equation's coefficients
    "C07-M4": _m("m4"),  # drops the excess reactant: k' = k
    "C07-M5": _m("m5"),  # divides by the excess concentration: k' = k / [B]
    "C07-M6": _m("m6"),  # gives the rate, k[A][B], as k'
}
