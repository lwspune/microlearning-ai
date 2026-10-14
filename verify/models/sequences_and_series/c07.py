"""C07 Sum to infinity: answer models (the key, and one per misconception).

params["ask"]:
  sum  inputs c, q, s  -> the sum to infinity of c q^k for k = s, s + 1, ... (NO_SUM if it has none).
                          A G.P. a, ar, ar^2, ... is c = a, q = r, s = 0.
  a    inputs r, S     -> the first term a of a G.P. with ratio r and sum to infinity S
                          (NO_GP if no such G.P. exists).
"""
from sympy import Abs, Symbol, Sum, oo

NO_SUM = Symbol("no_finite_sum")
NO_GP = Symbol("no_such_gp")
_k = Symbol("k", integer=True)


def _ar(v):
    """First term and ratio of the series c q^s + c q^(s+1) + ..."""
    return v["c"] * v["q"] ** v["s"], v["q"]


def key(v, p):
    """From the definition: the limit of the partial sums, when they settle (sympy's convergence test)."""
    if p["ask"] == "sum":
        series = Sum(v["c"] * v["q"] ** _k, (_k, v["s"], oo))
        return series.doit() if series.is_convergent() else NO_SUM
    if p["ask"] == "a":
        unit = Sum(v["r"] ** _k, (_k, 0, oo))  # 1 + r + r^2 + ..., so S = a times this
        return v["S"] / unit.doit() if unit.is_convergent() else NO_GP
    raise ValueError(f"no ask {p['ask']}")


def m1(v, p):
    """Believes a sum to infinity exists only for 0 < r < 1, so a negative ratio means no sum."""
    r = v["q"] if p["ask"] == "sum" else v["r"]
    if not (-1 < r < 0):
        raise ValueError("only differs from the key for -1 < r < 0")
    return NO_SUM if p["ask"] == "sum" else NO_GP


def m2(v, p):
    """Uses S = a/(1 - r) without checking |r| < 1."""
    if p["ask"] != "sum":
        raise ValueError("only for a sum")
    a, r = _ar(v)
    if Abs(r) < 1 or r == 1:
        raise ValueError("only differs from the key for |r| >= 1, r != 1")
    return a / (1 - r)


def m3(v, p):
    """Drops the minus sign of a negative r: 1 - r worked out as 1 - |r| (and no check of |r| < 1)."""
    if p["ask"] == "sum":
        a, r = _ar(v)
        if r >= 0 or Abs(r) == 1:
            raise ValueError("only for a negative r other than -1")
        return a / (1 - Abs(r))
    if p["ask"] == "a":
        if v["r"] >= 0:
            raise ValueError("only for a negative r")
        return v["S"] * (1 - Abs(v["r"]))
    raise ValueError(f"no ask {p['ask']}")


def m4(v, p):
    """Turns the formula over: S = a/(r - 1), as in the S_n form a(r^n - 1)/(r - 1) with r^n dropped
    (and no check of |r| < 1)."""
    if p["ask"] == "sum":
        a, r = _ar(v)
        if r == 1:
            raise ValueError("r = 1")
        return a / (r - 1)
    if p["ask"] == "a":
        return v["S"] * (v["r"] - 1)
    raise ValueError(f"no ask {p['ask']}")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4}
