"""C08 The mode and the empirical relation: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  mode        raw observations v["xs"] (a tuple) -> the mode: a number, or a FiniteSet when
              several values tie for the highest frequency
  grouped     classes of width v["h"] starting at v["lo"], frequencies v["fs"] (a tuple)
              -> the mode by L + (f1 - f0) / (2 f1 - f0 - f2) * h
  emp_mode    v["mean"] and v["median"] of moderately skewed data -> the mode by the empirical relation
  emp_median  v["mean"] and v["mode"] -> the median by the empirical relation
  order       p["skew"] is "left" or "right" -> the order of the three averages, a named answer
              such as Symbol("mode_median_mean") (largest first)
"""
from collections import Counter

from sympy import FiniteSet, Rational, Symbol


def _ask(p):
    return p.get("ask", "mode")


def _xs(v):
    return [Rational(x) for x in v["xs"]]


def _top(xs):
    """The values that share the highest frequency, smallest first, and that frequency."""
    c = Counter(xs)
    f = max(c.values())
    return sorted(x for x in c if c[x] == f), f


def _median(xs):
    s = sorted(xs)
    n = len(s)
    return s[n // 2] if n % 2 else (s[n // 2 - 1] + s[n // 2]) / 2


def _mean(xs):
    return sum(xs) / len(xs)


def _classes(v):
    lo, h, fs = Rational(v["lo"]), Rational(v["h"]), [Rational(f) for f in v["fs"]]
    return lo, h, fs


def _modal(v):
    """L, h, f0, f1, f2 of the modal class (it must be unique and not at either end)."""
    lo, h, fs = _classes(v)
    f1 = max(fs)
    if fs.count(f1) != 1:
        raise ValueError("two modal classes")
    i = fs.index(f1)
    if i in (0, len(fs) - 1):
        raise ValueError("modal class at an end")
    return lo + i * h, h, fs[i - 1], f1, fs[i + 1]


def _grouped_median(v):
    lo, h, fs = _classes(v)
    n = sum(fs)
    cf = 0
    for i, f in enumerate(fs):
        if cf + f >= n / 2:
            return lo + i * h + (n / 2 - cf) / f * h
        cf += f
    raise ValueError("no median class")


def _grouped_mean(v):
    lo, h, fs = _classes(v)
    return sum(f * (lo + i * h + h / 2) for i, f in enumerate(fs)) / sum(fs)


# The three averages in order, largest first, as named answers.
_ORDER = {"left": ("mode", "median", "mean"), "right": ("mean", "median", "mode")}


def _named(seq):
    return Symbol("_".join(seq))


def _swap(seq, a, b):
    return tuple(b if s == a else a if s == b else s for s in seq)


def key(v, p):
    a = _ask(p)
    if a == "mode":
        top, _ = _top(_xs(v))
        return top[0] if len(top) == 1 else FiniteSet(*top)
    if a == "grouped":
        L, h, f0, f1, f2 = _modal(v)
        return L + (f1 - f0) / (2 * f1 - f0 - f2) * h
    if a == "emp_mode":
        return 3 * v["median"] - 2 * v["mean"]
    if a == "emp_median":
        return (v["mode"] + 2 * v["mean"]) / 3
    if a == "order":
        return _named(_ORDER[p["skew"]])
    raise ValueError(a)


def m1(v, p):
    """Gives the highest frequency, not the value that has it."""
    if _ask(p) == "mode":
        return _top(_xs(v))[1]
    if _ask(p) == "grouped":
        return _modal(v)[3]
    raise ValueError("only where frequencies are counted")


def m2(v, p):
    """Mixes up the mode and the median."""
    a = _ask(p)
    if a == "mode":
        return _median(_xs(v))
    if a == "grouped":
        return _grouped_median(v)
    if a == "emp_mode":  # writes median = 3 mode - 2 mean
        return (v["median"] + 2 * v["mean"]) / 3
    if a == "emp_median":
        return 3 * v["mode"] - 2 * v["mean"]
    if a == "order":
        return _named(_swap(_ORDER[p["skew"]], "mode", "median"))
    raise ValueError(a)


def m3(v, p):
    """Mixes up the mode and the mean (so puts the mean at the peak of skewed data)."""
    a = _ask(p)
    if a == "mode":
        return _mean(_xs(v))
    if a == "grouped":
        return _grouped_mean(v)
    if a == "emp_mode":  # writes mean = 3 median - 2 mode
        return (3 * v["median"] - v["mean"]) / 2
    if a == "emp_median":
        return (v["mean"] + 2 * v["mode"]) / 3
    if a == "order":
        return _named(_swap(_ORDER[p["skew"]], "mode", "mean"))
    raise ValueError(a)


def m4(v, p):
    """Reports one mode when two values tie: the first (smallest) one found."""
    if _ask(p) != "mode":
        raise ValueError("only for raw observations")
    top, _ = _top(_xs(v))
    if len(top) < 2:
        raise ValueError("no tie")
    return top[0]


def m5(v, p):
    """Takes the class mark (mid-value) of the modal class as the mode."""
    if _ask(p) != "grouped":
        raise ValueError("only for grouped data")
    L, h, *_ = _modal(v)
    return L + h / 2


def m6(v, p):
    """Swaps the mean and the median in the empirical relation: mode = 3 mean - 2 median."""
    a = _ask(p)
    if a == "emp_mode":
        return 3 * v["mean"] - 2 * v["median"]
    if a == "emp_median":
        return (3 * v["mean"] - v["mode"]) / 2
    if a == "order":  # mode - mean = 2(mean - median): the mean lands between the other two
        return _named(_swap(_ORDER[p["skew"]], "mean", "median"))
    raise ValueError("only for the empirical relation")


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
