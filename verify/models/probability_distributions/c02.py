"""C02 Probability mass function: answer models (the key, and one per misconception).

inputs x, p: Tuples of the values of X and their probabilities, as printed (p may hold an unknown k).
params["kind"]:
  check  is the table a p.m.f.? A named answer: Symbol("valid"), Symbol("sum_not_one"),
         Symbol("outside_range") (a probability below 0 or above 1), or a misconception's reason.
  range  P(X op a), with params["op"] one of "<", "<=", ">", ">=" and input a; any unknown k is
         found from the total first.
"""
from sympy import Rational, S, Symbol, solve

K = Symbol("k")

VALID, SUM_NOT_ONE, OUTSIDE = Symbol("valid"), Symbol("sum_not_one"), Symbol("outside_range")
NEGATIVE_VALUE, ZERO_PROB = Symbol("negative_value"), Symbol("zero_probability")

_OPS = {"<": lambda x, a: x < a, "<=": lambda x, a: x <= a, ">": lambda x, a: x > a, ">=": lambda x, a: x >= a}
_FLIP = {"<": "<=", "<=": "<", ">": ">=", ">=": ">"}


def _in_range(ps):
    return all(0 <= q <= 1 for q in ps)


def _verdict(v):
    """From the definition: each probability in [0, 1], and the total exactly 1."""
    ps = [S(q) for q in v["p"]]
    if not _in_range(ps):
        return OUTSIDE
    if sum(ps) != 1:
        return SUM_NOT_ONE
    return VALID


def _k(v):
    """The one k that makes the total 1 and keeps every probability in [0, 1]."""
    ps = list(v["p"])
    if not any(q.has(K) for q in map(S, ps)):
        return None
    roots = [r for r in solve(sum(ps) - 1, K) if r.is_real and _in_range([S(q).subs(K, r) for q in ps])]
    if len(roots) != 1:
        raise ValueError(f"expected one admissible k, got {roots}")
    return roots[0]


def _prob(v, op, k):
    ps = [S(q).subs(K, k) if k is not None else S(q) for q in v["p"]]
    return sum((q for x, q in zip(v["x"], ps) if _OPS[op](x, v["a"])), S(0))


def _need(p, kind):
    if p["kind"] != kind:
        raise ValueError(f"only for {kind} items")


def key(v, p):
    if p["kind"] == "check":
        return _verdict(v)
    _need(p, "range")
    return _prob(v, p["op"], _k(v))


def m1(v, p):
    """Checks only that each probability lies between 0 and 1; never adds them up."""
    _need(p, "check")
    return VALID if _in_range([S(q) for q in v["p"]]) else key(v, p)


def m2(v, p):
    """Thinks a random variable can't take a negative value, so rejects the table for it."""
    _need(p, "check")
    return NEGATIVE_VALUE if any(x < 0 for x in v["x"]) else key(v, p)


def m3(v, p):
    """Thinks a probability of 0 isn't allowed in a p.m.f."""
    _need(p, "check")
    return ZERO_PROB if any(S(q) == 0 for q in v["p"]) else key(v, p)


def m4(v, p):
    """Mixes up strict and non-strict inequalities: < read as <=, >= read as >, and so on."""
    _need(p, "range")
    return _prob(v, _FLIP[p["op"]], _k(v))


def m5(v, p):
    """Adds only the numbers in front of k (every power of k counted as k, given numbers left out) and sets that to 1."""
    _need(p, "range")
    ps = [S(q) for q in v["p"]]
    c = sum((q - q.subs(K, 0)).subs(K, 1) for q in ps)
    if c == 0:
        raise ValueError("no unknown k")
    return _prob(v, p["op"], Rational(1, 1) / c)


def m6(v, p):
    """Works out the complement and gives it as the answer: 1 minus the asked probability."""
    _need(p, "range")
    return 1 - key(v, p)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
