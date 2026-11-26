"""C09 Degree of dissociation from i: answer models (the key, and one per misconception).

A solute giving n particles per formula unit, a fraction alpha of it dissociated: i = 1 + alpha (n - 1),
so alpha = (i - 1) / (n - 1). Association of n molecules into one is the same formula with 1/n particles
per molecule: alpha = (i - 1) / (1/n - 1).
params["ask"]:
  "alpha_fp":  alpha from a freezing point (inputs dT, Kf, m, n);
  "alpha_i":   degree of association from i (inputs i, n with n < 1 for association);
  "Tf_alpha":  freezing point in °C from alpha (inputs m, Kf, a_pct (alpha as a per cent), n);
  "pi_alpha":  pi from alpha (inputs C, T, a_pct, n);
  "formula":   alpha in terms of i and n (named expression).
"""
from sympy import Symbol

from chemistry import BOOK, sig

R = BOOK["R_atm"]
i_, n_ = Symbol("i"), Symbol("n")


def _alpha(i, n, rule):
    if rule == "i_minus_1":
        return i - 1
    if rule == "over_n":
        return (i - 1) / n
    if rule == "i_over_n":
        return i / n
    if rule == "one_minus_i":
        return 1 - i
    return (i - 1) / (n - 1)


def _i_from_alpha(a, n, rule):
    if rule == "i_over_n":  # i = alpha n: only the dissociated part counted
        return a * n
    if rule == "full":
        return n
    if rule == "pct":
        a = a * 100
    return 1 + a * (n - 1)


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "formula":
        return _alpha(i_, n_, rule)
    if ask == "alpha_fp":
        i = v["dT"] / (v["Kf"] * v["m"])
        if rule == "inverted":
            i = 1 / i
        return sig(_alpha(i, v["n"], rule))
    if ask == "alpha_i":
        return sig(_alpha(v["i"], v["n"], rule))
    a = v["a_pct"] / 100
    i = _i_from_alpha(a, v["n"], rule)
    if ask == "Tf_alpha":
        return sig(-i * v["Kf"] * v["m"])
    if ask == "pi_alpha":
        return sig(i * v["C"] * R * v["T"])
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, rule):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C09-M1": _m(("formula", "alpha_fp", "alpha_i"), "i_minus_1"),  # alpha = i - 1 for every solute
    "C09-M2": _m(("formula", "alpha_fp"), "over_n"),  # divides by n, not n - 1
    "C09-M3": _m(("formula", "alpha_fp", "alpha_i", "Tf_alpha", "pi_alpha"), "i_over_n"),  # alpha = i / n
    "C09-M4": _m(("alpha_fp",), "inverted"),  # i = calculated / observed
    "C09-M5": _m(("Tf_alpha", "pi_alpha"), "full"),  # weak electrolyte taken as fully dissociated
    "C09-M6": _m(("Tf_alpha", "pi_alpha"), "pct"),  # the per cent used as the fraction
    "C09-M7": _m(("alpha_i",), "one_minus_i"),  # association: alpha = 1 - i
}
