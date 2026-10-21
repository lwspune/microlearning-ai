"""C02 Mean: assumed mean method: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  sumfd     sum f_i d_i of a grouped table: lower limits v["lo"], upper limits v["hi"],
            frequencies v["f"], assumed mean v["A"]
  mean      the mean of that table
  fromsums  the mean from the totals alone: v["A"], v["S"] = sum f_i d_i, v["N"] = sum f_i

The key works from the definition: every observation in a class stands at the class mark
(the average of its two limits); sum f_i d_i is sum f_i (x_i - A) worked out directly, and the
mean of a table is sum(f x) / sum(f) (the direct method, not the method being taught).
"""
from sympy import Rational


def _ask(p, *allowed):
    a = p.get("ask", "mean")
    if a not in allowed:
        raise ValueError(f"not modelled for {a}")
    return a


def _marks(v):
    return [(Rational(a) + Rational(b)) / 2 for a, b in zip(v["lo"], v["hi"])]


def _table(v, p, ds):
    """sum f d (ask=sumfd) or A + sum f d / sum f (ask=mean) for the deviations ds a student uses."""
    fs = list(v["f"])
    s = sum(f * d for f, d in zip(fs, ds))
    if _ask(p, "sumfd", "mean") == "sumfd":
        return s
    return v["A"] + s / sum(fs)


def key(v, p):
    """From the definition: deviations x_i - A from the class marks; the mean by the direct method."""
    a = _ask(p, "sumfd", "mean", "fromsums")
    if a == "fromsums":
        return v["A"] + v["S"] / v["N"]
    xs, fs = _marks(v), list(v["f"])
    if a == "sumfd":
        return sum(f * (x - v["A"]) for f, x in zip(fs, xs))
    return sum(f * x for f, x in zip(fs, xs)) / sum(fs)


def m1(v, p):
    """Stops at d-bar = sum f d / sum f and reports it as the mean, forgetting to add A back."""
    a = _ask(p, "mean", "fromsums")
    if a == "fromsums":
        return v["S"] / v["N"]
    fs = list(v["f"])
    return sum(f * (x - v["A"]) for f, x in zip(fs, _marks(v))) / sum(fs)


def m2(v, p):
    """Takes the deviation the other way round: d_i = A - x_i (so the mean comes out as A - d-bar)."""
    if _ask(p, "sumfd", "mean", "fromsums") == "fromsums":
        return v["A"] - v["S"] / v["N"]
    return _table(v, p, [v["A"] - x for x in _marks(v)])


def m3(v, p):
    """Measures each deviation from the class's lower limit instead of its class mark: d_i = l_i - A."""
    return _table(v, p, [Rational(l) - v["A"] for l in v["lo"]])


def m4(v, p):
    """Drops the minus signs: adds the sizes of the negative f_i d_i instead of subtracting them."""
    return _table(v, p, [abs(x - v["A"]) for x in _marks(v)])


def m5(v, p):
    """Adds sum f_i d_i itself to A, forgetting to divide it by sum f_i."""
    if _ask(p, "mean", "fromsums") == "fromsums":
        return v["A"] + v["S"]
    return v["A"] + sum(f * (x - v["A"]) for f, x in zip(v["f"], _marks(v)))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
