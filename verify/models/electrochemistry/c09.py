"""C09 Cell potential, Gibbs energy and K: answer models (the key, and one per misconception).

dG0 = -n F E0_cell (J; answers in kJ); at 298 K, log10 K = n E0_cell / 0.0592; electrical work = -dG.
E0 is intensive, dG extensive. n is the number of electrons transferred in the balanced equation.
params["ask"]:
  "dG":        dG0 in kJ (inputs E0, or Ec and Ea; n; nw: the wrong n a student takes);
  "K":         the equilibrium constant (inputs E0, n, nw);
  "E_K":       E0_cell in V from K (inputs K, n, nw);
  "statement": which statement is not correct (named).
"""
from sympy import E as EULER, Symbol, log

from chemistry import BOOK, sig

F, K0 = BOOK["F"], BOOK["nernst"]

STATEMENT = {"key": "E_scaled_statement", "C09-M1": "work_minus_dG_statement", "C09-M2": "n_balanced_statement",
             "C09-M5": "E_intensive_statement"}


def _E0(v):
    return v["E0"] if "E0" in v else v["Ec"] - v["Ea"]


def _solve(v, p, rule):
    ask = p["ask"]
    if ask == "statement":
        mid = {"key": "key", "sign": "C09-M1", "wrong_n": "C09-M2", "extensive": "C09-M5"}.get(rule)
        if mid is None:
            raise ValueError("does not apply to this item")
        return Symbol(STATEMENT[mid])
    n = v["nw"] if rule == "wrong_n" else v["n"]
    sign = 1 if rule == "sign" else -1
    if ask == "dG":
        if rule not in ("key", "sign", "wrong_n", "J_as_kJ"):
            raise ValueError("does not apply to this item")
        dG = sign * n * F * _E0(v)  # J
        return sig(dG if rule == "J_as_kJ" else dG / 1000)
    if ask == "K":
        if rule not in ("key", "sign", "wrong_n", "logK", "ln"):
            raise ValueError("does not apply to this item")
        x = -sign * n * v["E0"] / K0  # log10 K (the sign rule flips it)
        if rule == "logK":
            return sig(x)
        return sig(EULER**x if rule == "ln" else 10**x)
    if ask == "E_K":
        if rule not in ("key", "sign", "wrong_n", "ln"):
            raise ValueError("does not apply to this item")
        lg = log(v["K"]) if rule == "ln" else log(v["K"], 10)
        return sig(-sign * K0 / n * lg)
    raise ValueError(f"unknown ask {ask}")


def _m(rule):
    return lambda v, p: _solve(v, p, rule)


MODELS = {
    "key": _m("key"),
    "C09-M1": _m("sign"),  # drops the minus sign of dG0 = -nFE0 (so electrical work = dG, log K = -nE0/0.0592)
    "C09-M2": _m("wrong_n"),  # takes the wrong number of electrons
    "C09-M3": _m("J_as_kJ"),  # reports the joules as kJ
    "C09-M4": _m("logK"),  # stops at log K
    "C09-M5": _m("extensive"),  # treats E0 as extensive
    "C09-M6": _m("ln"),  # uses ln with 0.0592
}
