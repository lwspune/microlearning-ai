"""C06 The mean of grouped data: answer models (the key, and one per misconception).

Every item gives a grouped table: lower limits v["lo"], upper limits v["hi"] and
frequencies v["f"] (tuples). v["A"], when given, is the assumed mean the stem tells the
student to use, with step deviations u = (x - A)/h, h the class width.
p["ask"] picks the question type:
  mean     -> the mean of the table
  double   every frequency is multiplied by v["c"] -> the new mean
  missing  v["f"] holds one unknown frequency (a symbol) and v["m"] is the mean -> that frequency
"""
from sympy import Rational, Symbol, solve


def _ask(p):
    return p.get("ask", "mean")


def _marks(v):
    return [(Rational(a) + Rational(b)) / 2 for a, b in zip(v["lo"], v["hi"])]


def _width(v):
    return Rational(v["hi"][0]) - Rational(v["lo"][0])


def _fs(v, p):
    fs = list(v["f"])
    if _ask(p) == "double":
        fs = [v["c"] * f for f in fs]
    return fs


def _unknown(v):
    syms = set().union(*(f.free_symbols for f in v["f"] if hasattr(f, "free_symbols")))
    if len(syms) != 1:
        raise ValueError("a missing-frequency item needs exactly one unknown")
    return syms.pop()


def _solve(eq, s):
    roots = [r for r in solve(eq, s) if r.is_positive]
    if len(roots) != 1:
        raise ValueError(f"no single positive frequency: {roots}")
    return roots[0]


def _weighted(xs, fs):
    return sum(f * x for f, x in zip(fs, xs)) / sum(fs)


def key(v, p):
    """From the definition: each class's frequency sits at its class mark."""
    a = _ask(p)
    xs = _marks(v)
    if a in ("mean", "double"):
        return _weighted(xs, _fs(v, p))
    if a == "missing":
        s = _unknown(v)
        return _solve(sum(f * x for f, x in zip(v["f"], xs)) - v["m"] * sum(v["f"]), s)
    raise ValueError(a)


def m1(v, p):
    """Divides by the number of classes instead of the total frequency."""
    a = _ask(p)
    if a not in ("mean", "double"):
        raise ValueError("only for finding a mean")
    xs, fs, k = _marks(v), _fs(v, p), len(v["f"])
    if "A" in v:
        h, A = _width(v), v["A"]
        return A + h * sum(f * (x - A) / h for f, x in zip(fs, xs)) / k
    return sum(f * x for f, x in zip(fs, xs)) / k


def m2(v, p):
    """Uses each class's lower limit as its value instead of the class mark."""
    a = _ask(p)
    los = [Rational(x) for x in v["lo"]]
    if a in ("mean", "double"):
        return _weighted(los, _fs(v, p))
    if a == "missing":
        s = _unknown(v)
        return _solve(sum(f * x for f, x in zip(v["f"], los)) - v["m"] * sum(v["f"]), s)
    raise ValueError(a)


def m3(v, p):
    """Averages the class marks and ignores the frequencies."""
    if _ask(p) not in ("mean", "double"):
        raise ValueError("only for finding a mean")
    xs = _marks(v)
    return sum(xs) / len(xs)


def m4(v, p):
    """Step deviations: forgets to multiply the mean of u by the class width h."""
    a = _ask(p)
    if "A" not in v:
        raise ValueError("only for the step-deviation method")
    h, A, xs = _width(v), v["A"], _marks(v)
    us = [(x - A) / h for x in xs]
    if a == "mean":
        fs = _fs(v, p)
        return A + sum(f * u for f, u in zip(fs, us)) / sum(fs)
    if a == "missing":
        s = _unknown(v)
        return _solve(A + sum(f * u for f, u in zip(v["f"], us)) / sum(v["f"]) - v["m"], s)
    raise ValueError(a)


def m5(v, p):
    """Thinks multiplying every frequency by c multiplies the mean by c."""
    if _ask(p) != "double":
        raise ValueError("only for scaled frequencies")
    return v["c"] * _weighted(_marks(v), list(v["f"]))


def m6(v, p):
    """Missing frequency: puts it in the sum of f*x but leaves it out of the total frequency."""
    if _ask(p) != "missing":
        raise ValueError("only for a missing frequency")
    s = _unknown(v)
    xs = _marks(v)
    n0 = sum(f.subs(s, 0) for f in v["f"])
    if "A" in v:
        h, A = _width(v), v["A"]
        su = sum(f * (x - A) / h for f, x in zip(v["f"], xs))
        return _solve(A + h * su / n0 - v["m"], s)
    return _solve(sum(f * x for f, x in zip(v["f"], xs)) - v["m"] * n0, s)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
