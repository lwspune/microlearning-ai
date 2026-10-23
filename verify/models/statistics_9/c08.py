"""C08 Mode: answer models (the key, and one per misconception).

p["kind"] picks the question type:
  raw   - the mode of the raw observations obs (a Tuple, in the order the question lists them)
  table - a frequency table: the values x (a Tuple) and their frequencies f (a Tuple)
A single mode is returned as a number; data with more than one mode returns a FiniteSet of the modes.
"""
from sympy import FiniteSet, Integer

KINDS = ("raw", "table")


def _kind(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} item")
    return p["kind"]


def _table(v, p):
    """The data as (value, frequency) pairs, counted straight from the observations for raw data."""
    if _kind(p, *KINDS) == "raw":
        obs = list(v["obs"])
        return [(x, Integer(obs.count(x))) for x in sorted(set(obs))]
    if len(v["x"]) != len(v["f"]):
        raise ValueError("x and f differ in length")
    return list(zip(v["x"], v["f"]))


def _modes(v, p):
    t = _table(v, p)
    top = max(f for _, f in t)
    return sorted(x for x, f in t if f == top), top


def key(v, p):
    modes, _ = _modes(v, p)
    return modes[0] if len(modes) == 1 else FiniteSet(*modes)


def m1(v, p):
    """Gives the highest frequency (how many times the mode occurs) instead of the observation."""
    _, top = _modes(v, p)
    return top


def m2(v, p):
    """Finds the mean instead of the mode."""
    t = _table(v, p)
    return sum(x * f for x, f in t) / sum(f for _, f in t)


def m3(v, p):
    """Finds the median (middle of the ordered raw data) instead of the mode."""
    _kind(p, "raw")
    s = sorted(v["obs"])
    n = len(s)
    return s[n // 2] if n % 2 else (s[n // 2 - 1] + s[n // 2]) / Integer(2)


def m4(v, p):
    """Data with two modes: stops at the first value with the highest frequency and gives only that one."""
    modes, _ = _modes(v, p)
    if len(modes) < 2:
        raise ValueError("only one mode")
    return modes[0]


def m5(v, p):
    """From a table, picks the value with the largest product f_i x_i (mixing up the mean's table)."""
    _kind(p, "table")
    t = _table(v, p)
    best = max(x * f for x, f in t)
    winners = [x for x, f in t if x * f == best]
    if len(winners) > 1:
        raise ValueError("tie in f*x")
    return winners[0]


def m6(v, p):
    """Takes the largest observation (the 'highest' value) as the mode."""
    return max(x for x, _ in _table(v, p))


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
