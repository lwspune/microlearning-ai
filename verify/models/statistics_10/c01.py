"""C01 Mean: direct method: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  mark     the class mark of one class with limits v["l"] and v["u"]
  mean     the mean of a grouped table: lower limits v["lo"], upper limits v["hi"], frequencies v["f"]
  missing  as mean, but v["f"] holds one unknown frequency (a symbol) and v["m"] is the given mean
           -> that frequency

The key works from the definition: every observation in a class stands at the class mark
(the average of its two limits), so the mean is sum(f x) / sum(f).
"""
from sympy import Rational, solve


def _ask(p, *allowed):
    a = p.get("ask", "mean")
    if a not in allowed:
        raise ValueError(f"not modelled for {a}")
    return a


def _unknown(v):
    syms = set().union(*(f.free_symbols for f in v["f"] if hasattr(f, "free_symbols")))
    if len(syms) != 1:
        raise ValueError("a missing-frequency item needs exactly one unknown")
    return syms.pop()


def _positive_root(eq, s):
    roots = [r for r in solve(eq, s) if r.is_positive]
    if len(roots) != 1:
        raise ValueError(f"no single positive frequency: {roots}")
    return roots[0]


def _value(xs, v, p, denom=None):
    """The mean (ask=mean) or the unknown frequency (ask=missing) when each class stands at xs.

    denom(fs) is the divisor the student uses; the right one is sum(fs)."""
    fs = list(v["f"])
    denom = denom or (lambda fs: sum(fs))
    total = sum(f * x for f, x in zip(fs, xs))
    if _ask(p, "mean", "missing") == "mean":
        return total / denom(fs)
    return _positive_root(total - v["m"] * denom(fs), _unknown(v))


def _marks(v):
    return [(Rational(a) + Rational(b)) / 2 for a, b in zip(v["lo"], v["hi"])]


def key(v, p):
    """From the definition: the class mark is the middle of the class; divide by the total frequency."""
    if p.get("ask") == "mark":
        return (v["l"] + v["u"]) / 2
    return _value(_marks(v), v, p)


def m1(v, p):
    """Divides sum(f x) by the number of classes instead of the total frequency sum(f)."""
    return _value(_marks(v), v, p, denom=lambda fs: len(fs))


def m2(v, p):
    """Takes each class's lower limit as its class mark."""
    if p.get("ask") == "mark":
        return v["l"]
    return _value([Rational(a) for a in v["lo"]], v, p)


def m3(v, p):
    """Averages the class marks and ignores the frequencies."""
    _ask(p, "mean")
    xs = _marks(v)
    return sum(xs) / len(xs)


def m4(v, p):
    """Confuses the class mark with the class width: upper limit minus lower limit."""
    _ask(p, "mark")
    return v["u"] - v["l"]


def m5(v, p):
    """Takes each class's upper limit as its class mark."""
    if p.get("ask") == "mark":
        return v["u"]
    return _value([Rational(b) for b in v["hi"]], v, p)


def m6(v, p):
    """Puts the missing frequency into sum(f x) but leaves it out of sum(f)."""
    _ask(p, "missing")
    return _value(_marks(v), v, p, denom=lambda fs: sum(f for f in fs if not getattr(f, "free_symbols", None)))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
