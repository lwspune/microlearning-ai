"""C06 Half life of first order reactions: answer models (the key, and one per misconception).

First order: k = 0.693 / t1/2, and t = (2.303 / k) log10([A]0 / [A]t), with the book's 0.693 and 2.303.
params["ask"]:
  "k":       k from t1/2 (inputs th, conv: answer time units per t1/2 unit, e.g. 3600 for h -> s);
  "th_frac": t1/2 from a fraction f reacted in time t (inputs f, t);
  "t_frac":  the time for a fraction f to react, from t1/2 (inputs th, f, conv: answer units per t1/2 unit);
  "th_conc": t1/2 from [A] falling c1 -> c2 in time t (inputs c1, c2, t);
  "t_conc":  the time for [A] to fall c1 -> c2, given t1/2 = th measured from a start of c0 (inputs th, c0, c1, c2).
"""
from sympy import Rational, log

from chemistry import sig

K693 = Rational(693, 1000)
K2303 = Rational(2303, 1000)


def lg(x):
    return log(x, 10)


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "k":
        th, conv = v["th"], v["conv"]
        if rule == "m3":
            return sig(K2303 / (th * conv))
        if rule == "m4":
            return sig(th * conv / K693)
        if rule == "m5":
            return sig(K693 / th)
        if rule is None:
            return sig(K693 / (th * conv))
    if ask == "th_frac":
        f, t = v["f"], v["t"]
        if rule == "m1":
            return sig(t * Rational(1, 2) / f)
        left = f if rule == "m2" else 1 - f
        k = K2303 / t * lg(1 / left)
        if rule == "m3":
            return sig(K2303 / k)
        if rule in (None, "m2"):
            return sig(K693 / k)
    if ask == "t_frac":
        th, f, conv = v["th"], v["f"], v["conv"]
        if rule == "m1":
            return sig(2 * f * th * conv)
        k = (K2303 if rule == "m3" else K693) / th
        left = f if rule == "m2" else 1 - f
        t = K2303 / k * lg(1 / left)
        if rule == "m5":
            return sig(t)
        if rule in (None, "m2", "m3"):
            return sig(t * conv)
    if ask == "th_conc":
        c1, c2, t = v["c1"], v["c2"], v["t"]
        if rule == "m1":
            return sig((c1 / 2) / ((c1 - c2) / t))
        left = c1 - c2 if rule == "m2" else c2
        k = K2303 / t * lg(c1 / left)
        if rule == "m3":
            return sig(K2303 / k)
        if rule in (None, "m2"):
            return sig(K693 / k)
    if ask == "t_conc":
        th, c0, c1, c2 = v["th"], v["c0"], v["c1"], v["c2"]
        if rule == "m1":
            return sig((c1 - c2) / ((c0 / 2) / th))
        k = (K2303 if rule == "m3" else K693) / th
        left = c1 - c2 if rule == "m2" else c2
        if rule in (None, "m2", "m3"):
            return sig(K2303 / k * lg(c1 / left))
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p)


def _m(rule):
    return lambda v, p: _solve(v, p, rule)


MODELS = {
    "key": key,
    "C06-M1": _m("m1"),  # the reactant used up at a steady rate (zero order thinking): time in proportion
    "C06-M2": _m("m2"),  # the fraction reacted put where the fraction left belongs
    "C06-M3": _m("m3"),  # t1/2 = 2.303 / k (2.303 for 0.693)
    "C06-M4": _m("m4"),  # turns the relation upside down: k = t1/2 / 0.693
    "C06-M5": _m("m5"),  # leaves the time in the unit it was given
}
