"""C01 Random variables: answer models (the key, and one per misconception).

params["var"] names the random variable X:
  coin_diff:  a coin tossed n times; X = number of heads - number of tails.        inputs n
  coin_gain:  a coin tossed n times; a head pays the player a, a tail costs b.      inputs n, a, b
  coin_ratio: a coin tossed n times; X = heads / (tails + 1).                       inputs n
  urn_gain:   r balls drawn together from `red` red and `black` black balls; each
              black ball pays a, each red ball costs b.                             inputs red, black, r, a, b
  measure:    a measured quantity that can take every value from lo to hi.          inputs lo, hi
params["ask"]:
  values: the set of values of X (a FiniteSet).
  type:   Tuple(Symbol("discrete") | Symbol("continuous"), the set of values: FiniteSet or Interval).
"""
from itertools import combinations, product

from sympy import FiniteSet, Interval, Rational, Symbol, Tuple, oo

DISCRETE, CONTINUOUS = Symbol("discrete"), Symbol("continuous")


def _coin_outcomes(n):
    return list(product("HT", repeat=int(n)))


def _values(v, p):
    """(type, set of values) straight from the definition: list every outcome, find X for each."""
    var = p["var"]
    if var == "measure":
        return CONTINUOUS, Interval(v["lo"], v["hi"])
    if var == "coin_diff":
        xs = [o.count("H") - o.count("T") for o in _coin_outcomes(v["n"])]
    elif var == "coin_gain":
        xs = [v["a"] * o.count("H") - v["b"] * o.count("T") for o in _coin_outcomes(v["n"])]
    elif var == "coin_ratio":
        xs = [Rational(o.count("H"), o.count("T") + 1) for o in _coin_outcomes(v["n"])]
    elif var == "urn_gain":
        balls = ["R"] * int(v["red"]) + ["B"] * int(v["black"])
        xs = [v["a"] * [balls[i] for i in c].count("B") - v["b"] * [balls[i] for i in c].count("R")
              for c in combinations(range(len(balls)), int(v["r"]))]
    else:
        raise ValueError(f"no such var {var}")
    return DISCRETE, FiniteSet(*xs)


def _answer(kind, values, p):
    if p["ask"] == "values":
        return values
    if p["ask"] == "type":
        return Tuple(kind, values)
    raise ValueError("no such ask")


def key(v, p):
    return _answer(*_values(v, p), p)


def m1(v, p):
    """Fills the gaps: lists every whole number from the smallest value to the largest."""
    kind, vals = _values(v, p)
    if kind != DISCRETE:
        raise ValueError("discrete variables only")
    lo, hi = min(vals), max(vals)
    if not (lo.is_integer and hi.is_integer):
        raise ValueError("ends are not whole numbers")
    return _answer(kind, FiniteSet(*range(int(lo), int(hi) + 1)), p)


def m2(v, p):
    """Ignores the limited supply: lets the number of black balls be anything from 0 to the number drawn."""
    if p["var"] != "urn_gain":
        raise ValueError("draws from an urn only")
    r = int(v["r"])
    return _answer(DISCRETE, FiniteSet(*[v["a"] * k - v["b"] * (r - k) for k in range(r + 1)]), p)


def m3(v, p):
    """Thinks a random variable takes only positive values: drops 0 and every negative value."""
    kind, vals = _values(v, p)
    return _answer(kind, vals.intersect(Interval.open(0, oo)), p)


def m4(v, p):
    """Drops the minus sign of a loss: takes the size of every value."""
    kind, vals = _values(v, p)
    if kind == CONTINUOUS:
        lo, hi = vals.inf, vals.sup
        if lo >= 0:
            raise ValueError("no negative values")
        return _answer(kind, Interval(0, max(-lo, hi)), p)
    return _answer(kind, FiniteSet(*[abs(x) for x in vals]), p)


def m5(v, p):
    """Thinks a variable with a smallest and a largest value is discrete: lists the whole numbers between them."""
    kind, vals = _values(v, p)
    if kind != CONTINUOUS or p["ask"] != "type":
        raise ValueError("a bounded measurement, asked for its type")
    import math
    lo, hi = math.ceil(vals.inf), math.floor(vals.sup)
    return _answer(DISCRETE, FiniteSet(*range(lo, hi + 1)), p)


def m6(v, p):
    """Thinks a variable that takes fractions is continuous: all values from the smallest to the largest."""
    kind, vals = _values(v, p)
    if kind != DISCRETE or p["ask"] != "type" or all(x.is_integer for x in vals):
        raise ValueError("a discrete variable with a fractional value, asked for its type")
    return _answer(CONTINUOUS, Interval(min(vals), max(vals)), p)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
