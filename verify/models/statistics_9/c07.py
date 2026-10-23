"""C07 Median: answer models (the key, and one per misconception).

p["kind"] picks the question type:
  raw     - the median of the raw observations obs (a Tuple, in the order the question lists them)
  unknown - n observations in ascending order: the known ones (known, a Tuple) and the two middle ones
            a1*x + b1 and a2*x + b2; the median is M. The answer is x.
"""
from sympy import Integer, Rational, Symbol, solve

x = Symbol("x")


def _kind(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} item")
    return p["kind"]


def _middle(data):
    """The middle value of a list as it stands (the mean of the two middle values when the count is even)."""
    n = len(data)
    if n % 2:
        return data[n // 2]
    return (data[n // 2 - 1] + data[n // 2]) / Integer(2)


def _even(v):
    if len(v["obs"]) % 2:
        raise ValueError("odd number of observations")


def _x(eq):
    (sol,) = solve(eq, x)
    return sol


def _mids(v):
    return v["a1"] * x + v["b1"], v["a2"] * x + v["b2"]


def key(v, p):
    if _kind(p, "raw", "unknown") == "raw":
        return _middle(sorted(v["obs"]))
    lo, hi = _mids(v)
    return _x((lo + hi) / 2 - v["M"])


def m1(v, p):
    """Skips arranging the data: takes the middle of the list as it is given."""
    _kind(p, "raw")
    if list(v["obs"]) == sorted(v["obs"]):
        raise ValueError("the list is already in order")
    return _middle(list(v["obs"]))


def m2(v, p):
    """Even count: takes only the lower middle value (the (n/2)-th) as the median."""
    if _kind(p, "raw", "unknown") == "raw":
        _even(v)
        s = sorted(v["obs"])
        return s[len(s) // 2 - 1]
    lo, _ = _mids(v)
    return _x(lo - v["M"])


def m3(v, p):
    """Gives the middle position (n + 1)/2 instead of the observation at that position."""
    _kind(p, "raw")
    return Rational(len(v["obs"]) + 1, 2)


def m4(v, p):
    """Finds the mean instead of the median."""
    if _kind(p, "raw", "unknown") == "raw":
        return sum(v["obs"]) / Integer(len(v["obs"]))
    lo, hi = _mids(v)
    n = len(v["known"]) + 2
    return _x((sum(v["known"]) + lo + hi) / Integer(n) - v["M"])


def m5(v, p):
    """Even count: adds the two middle values but forgets to divide by 2."""
    if _kind(p, "raw", "unknown") == "raw":
        _even(v)
        return 2 * _middle(sorted(v["obs"]))
    lo, hi = _mids(v)
    return _x(lo + hi - v["M"])


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
