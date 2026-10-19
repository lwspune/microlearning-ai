"""C10 Mean deviation: answer models (the key, and one per misconception).

p["kind"] picks the question type:
  raw     the observations v["xs"] (a tuple, as printed) -> the mean deviation about p["about"]
  table   the values v["x"] with frequencies v["f"] (tuples, as printed) -> the mean deviation
          about p["about"]
  least   the observations v["xs"] -> the least value of sum |x_i - A| / n over all A
          (the mean deviation about the median)
  shift   the observations v["xs"] and numbers v["a"], v["b"] -> the mean deviation about the
          mean of the new observations a + b x_i
p["about"] is "mean" or "median" (raw and table only).
"""
from sympy import Abs, S


def _kind(p):
    return p["kind"]


def _pairs(v, p):
    """(value, frequency) pairs in the order printed; raw data have frequency 1 each."""
    if _kind(p) == "table":
        return [(S(x), S(f)) for x, f in zip(v["x"], v["f"])]
    return [(S(x), S(1)) for x in v["xs"]]


def _mean(pairs):
    N = sum(f for _, f in pairs)
    return sum(f * x for x, f in pairs) / N


def _median(pairs):
    """From the definition: list every observation in order; the middle one (or the mean of the middle two)."""
    obs = sorted(x for x, f in pairs for _ in range(int(f)))
    n = len(obs)
    return obs[n // 2] if n % 2 else (obs[n // 2 - 1] + obs[n // 2]) / 2


def _centre(pairs, about):
    if about == "mean":
        return _mean(pairs)
    if about == "median":
        return _median(pairs)
    raise ValueError(about)


def _md(pairs, A):
    """The frequency-weighted average distance from A."""
    N = sum(f for _, f in pairs)
    return sum(f * Abs(x - A) for x, f in pairs) / N


def _about(p):
    """The centre the question asks about."""
    k = _kind(p)
    if k in ("raw", "table"):
        return p["about"]
    if k == "least":
        return "median"
    if k == "shift":
        return "mean"
    raise ValueError(k)


def _new_obs(v):
    return [(S(v["a"]) + S(v["b"]) * S(x), S(1)) for x in v["xs"]]


def key(v, p):
    if _kind(p) == "shift":
        ys = _new_obs(v)
        return _md(ys, _mean(ys))
    pairs = _pairs(v, p)
    return _md(pairs, _centre(pairs, _about(p)))


def m1(v, p):
    """Forgets the absolute value: averages the signed deviations x_i - A."""
    pairs = _new_obs(v) if _kind(p) == "shift" else _pairs(v, p)
    A = _centre(pairs, _about(p))
    N = sum(f for _, f in pairs)
    return sum(f * (x - A) for x, f in pairs) / N


def m2(v, p):
    """Uses the other centre: the median when the mean is asked, the mean when the median is
    (for the least value: believes the mean gives it)."""
    if _kind(p) == "shift":
        raise ValueError("not for a shift")
    pairs = _pairs(v, p)
    other = "median" if _about(p) == "mean" else "mean"
    return _md(pairs, _centre(pairs, other))


def m3(v, p):
    """Ignores the frequencies: treats the listed values as raw data, once each."""
    if _kind(p) != "table":
        raise ValueError("only for a frequency table")
    pairs = [(x, S(1)) for x, _ in _pairs(v, p)]
    return _md(pairs, _centre(pairs, _about(p)))


def m4(v, p):
    """Takes the median as the middle entry of the list as printed (unsorted raw data, or the
    middle row of a table, ignoring the frequencies), then averages the distances correctly."""
    if _about(p) != "median" or _kind(p) == "shift":
        raise ValueError("only about the median")
    pairs = _pairs(v, p)
    xs = [x for x, _ in pairs]
    n = len(xs)
    A = xs[n // 2] if n % 2 else (xs[n // 2 - 1] + xs[n // 2]) / 2
    return _md(pairs, A)


def _md_x(v):
    pairs = [(S(x), S(1)) for x in v["xs"]]
    return _md(pairs, _mean(pairs))


def m5(v, p):
    """Applies the mean's rule to the mean deviation: M.D. of a + bx is a + b M.D."""
    if _kind(p) != "shift":
        raise ValueError("only for a shift")
    return S(v["a"]) + S(v["b"]) * _md_x(v)


def m6(v, p):
    """Drops the shift but keeps the sign of b: M.D. of a + bx is b M.D."""
    if _kind(p) != "shift":
        raise ValueError("only for a shift")
    return S(v["b"]) * _md_x(v)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
