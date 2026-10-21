"""C03 Mean: step deviation method: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  u      the step deviation u_i of one class: limits v["l"], v["u"], assumed mean v["A"], class width v["g"]
  mean   the mean of a grouped table: lower limits v["lo"], upper limits v["hi"], frequencies v["f"],
         with the stem fixing v["A"] and v["g"]
  sums   the mean from the totals: v["A"], v["g"], v["S"] = sum(f u) and v["N"] = sum(f)

The key works from the definition: each class stands at its class mark, and the mean is
sum(f x) / sum(f) (for ask=sums, the only data is the step deviation totals, so x = A + g u).
"""
from sympy import Rational


def _ask(p, *allowed):
    a = p.get("ask", "mean")
    if a not in allowed:
        raise ValueError(f"not modelled for {a}")
    return a


def _marks(v):
    return [(Rational(a) + Rational(b)) / 2 for a, b in zip(v["lo"], v["hi"])]


def _ubar(v, xs=None):
    """sum(f u) / sum(f) with u = (x - A) / g, from the table (mean) or the totals (sums)."""
    if p_is_sums(v):
        return v["S"] / v["N"]
    xs = xs or _marks(v)
    fs = list(v["f"])
    return sum(f * (x - v["A"]) / v["g"] for f, x in zip(fs, xs)) / sum(fs)


def p_is_sums(v):
    return "S" in v


def key(v, p):
    """From the definition: u from the class mark; the mean is sum(f x) / sum(f)."""
    a = _ask(p, "u", "mean", "sums")
    if a == "u":
        return ((v["l"] + v["u"]) / 2 - v["A"]) / v["g"]
    if a == "sums":
        return v["A"] + v["g"] * v["S"] / v["N"]
    xs, fs = _marks(v), list(v["f"])
    return sum(f * x for f, x in zip(fs, xs)) / sum(fs)


def m1(v, p):
    """Leaves g out: u = x - A, or (with u right) forgets to multiply sum(f u)/sum(f) by g."""
    if _ask(p, "u", "mean", "sums") == "u":
        return (v["l"] + v["u"]) / 2 - v["A"]
    return v["A"] + _ubar(v)


def m2(v, p):
    """Divides by g again at the end: A + sum(f u) / (g sum(f)); for u, multiplies by g."""
    if _ask(p, "u", "mean", "sums") == "u":
        return ((v["l"] + v["u"]) / 2 - v["A"]) * v["g"]
    return v["A"] + _ubar(v) / v["g"]


def m3(v, p):
    """Divides sum(f u) by the number of classes instead of sum(f)."""
    _ask(p, "mean")
    xs, fs = _marks(v), list(v["f"])
    return v["A"] + v["g"] * sum(f * (x - v["A"]) / v["g"] for f, x in zip(fs, xs)) / len(fs)


def m4(v, p):
    """Takes the deviation as A - x, so u has the wrong sign (the mean lands on the wrong side of A)."""
    if _ask(p, "u", "mean", "sums") == "u":
        return (v["A"] - (v["l"] + v["u"]) / 2) / v["g"]
    return v["A"] - v["g"] * _ubar(v)


def m5(v, p):
    """Forgets to add A back: the mean is g sum(f u) / sum(f)."""
    _ask(p, "mean", "sums")
    return v["g"] * _ubar(v)


def m6(v, p):
    """Uses each class's lower limit in place of its class mark."""
    if _ask(p, "u", "mean") == "u":
        return (v["l"] - v["A"]) / v["g"]
    return v["A"] + v["g"] * _ubar(v, [Rational(a) for a in v["lo"]])


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
