"""C03 The arithmetic mean: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  mean         values v["xs"] (a tuple), with frequencies v["fs"] if given (else raw data,
               where a repeated value is one more observation) -> the mean
  dev          the same data and a number v["c"] -> the sum of the deviations from c,
               sum f_i (x_i - c)
  series_mean  the numbers k^p for k = v["a"], ..., v["b"] (p = v["p"]) -> their mean
  series_dev   the same numbers and v["c"] -> the sum of their deviations from c
"""
from sympy import Rational


def _ask(p):
    return p.get("ask", "mean")


def _rows(v):
    """The data as a table: (value, frequency) pairs, one per different value."""
    xs = [Rational(x) for x in v["xs"]]
    if "fs" in v:
        fs = [Rational(f) for f in v["fs"]]
        return list(zip(xs, fs))
    return [(x, Rational(xs.count(x))) for x in sorted(set(xs))]


def _series(v):
    a, b, pw = int(v["a"]), int(v["b"]), int(v["p"])
    return [Rational(k) ** pw for k in range(a, b + 1)]


def key(v, p):
    a = _ask(p)
    if a in ("mean", "dev"):
        rows = _rows(v)
        n = sum(f for _, f in rows)
        total = sum(f * x for x, f in rows)
        if a == "mean":
            return total / n
        return sum(f * (x - v["c"]) for x, f in rows)
    if a in ("series_mean", "series_dev"):
        ts = _series(v)
        if a == "series_mean":
            return sum(ts) / len(ts)
        return sum(t - v["c"] for t in ts)
    raise ValueError(a)


def m1(v, p):
    """Counts the rows (different values), not the observations: n = number of rows."""
    a = _ask(p)
    if a not in ("mean", "dev"):
        raise ValueError("only for a table or a list with repeats")
    rows = _rows(v)
    k = len(rows)
    total = sum(f * x for x, f in rows)
    if a == "mean":
        return total / k
    return total - k * v["c"]


def m2(v, p):
    """Ignores the frequencies (or repeats): uses each different value once."""
    a = _ask(p)
    if a not in ("mean", "dev"):
        raise ValueError("only for a table or a list with repeats")
    xs = [x for x, _ in _rows(v)]
    if a == "mean":
        return sum(xs) / len(xs)
    return sum(x - v["c"] for x in xs)


def m3(v, p):
    """Takes the mean as halfway between the first and last (smallest and largest) values."""
    a = _ask(p)
    if a in ("mean", "dev"):
        rows = _rows(v)
        xs = [x for x, _ in rows]
        mid = (min(xs) + max(xs)) / 2
        n = sum(f for _, f in rows)
    elif a in ("series_mean", "series_dev"):
        ts = _series(v)
        mid = (ts[0] + ts[-1]) / 2
        n = len(ts)
    else:
        raise ValueError(a)
    if a in ("mean", "series_mean"):
        return mid
    return n * (mid - v["c"])


def m4(v, p):
    """Takes the mean of the squares k^2 as the square of the mean of the k's."""
    a = _ask(p)
    if a not in ("series_mean", "series_dev") or int(v["p"]) != 2:
        raise ValueError("only for a series of squares")
    ks = list(range(int(v["a"]), int(v["b"]) + 1))
    sq = Rational(sum(ks), len(ks)) ** 2
    if a == "series_mean":
        return sq
    return len(ks) * (sq - v["c"])


def m5(v, p):
    """Counts the whole numbers from a to b as b - a, one too few (the sum itself is right)."""
    if _ask(p) != "series_mean":
        raise ValueError("only for the mean of a run of terms")
    ts = _series(v)
    return sum(ts) / (int(v["b"]) - int(v["a"]))


def m6(v, p):
    """Believes the deviations from any number add up to 0, not only those from the mean."""
    if _ask(p) not in ("dev", "series_dev"):
        raise ValueError("only for a sum of deviations")
    return Rational(0)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
