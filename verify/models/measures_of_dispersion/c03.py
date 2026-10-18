"""C03 Variance with frequencies: answer models (the key, and one per misconception).

params["kind"]:
  values   inputs x, f: Tuples of the values and their frequencies.
  classes  inputs lo, hi, f: Tuples of the class limits (as printed) and frequencies;
           the value standing for a class is its class mark (lo + hi) / 2.
Every model returns the variance sigma^2.
"""
from sympy import S


def _marks(v, p):
    """The x_i column: the values, or the class marks."""
    if p["kind"] == "values":
        return list(v["x"])
    if p["kind"] == "classes":
        return [(a + b) / S(2) for a, b in zip(v["lo"], v["hi"])]
    raise ValueError(f"unknown kind {p['kind']}")


def _var(xs, fs):
    """From the definition: the frequency-weighted mean of the squared deviations from the mean."""
    N = sum(fs)
    mean = S(sum(f * x for x, f in zip(xs, fs))) / N
    return S(sum(f * (x - mean) ** 2 for x, f in zip(xs, fs))) / N


def _sums(v, p):
    xs, fs = _marks(v, p), list(v["f"])
    N = sum(fs)
    mean = S(sum(f * x for x, f in zip(xs, fs))) / N
    return xs, fs, N, mean


def key(v, p):
    xs, fs = _marks(v, p), list(v["f"])
    return _var(xs, fs)


def m1(v, p):
    """Ignores the frequencies: each value (or class mark) counted once, as raw data."""
    xs = _marks(v, p)
    return _var(xs, [1] * len(xs))


def m2(v, p):
    """Fills the f x^2 column with (f x)^2."""
    xs, fs, N, mean = _sums(v, p)
    return S(sum((f * x) ** 2 for x, f in zip(xs, fs))) / N - mean**2


def m3(v, p):
    """Stops at the mean of the squares: sum f x^2 / N, without subtracting x-bar^2."""
    xs, fs, N, mean = _sums(v, p)
    return S(sum(f * x**2 for x, f in zip(xs, fs))) / N


def m4(v, p):
    """Subtracts x-bar instead of x-bar^2."""
    xs, fs, N, mean = _sums(v, p)
    return S(sum(f * x**2 for x, f in zip(xs, fs))) / N - mean


def m5(v, p):
    """Takes lower + upper limit as the class mark, forgetting to halve it."""
    if p["kind"] != "classes":
        raise ValueError("only class intervals have class marks")
    xs = [a + b for a, b in zip(v["lo"], v["hi"])]
    return _var(xs, list(v["f"]))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
