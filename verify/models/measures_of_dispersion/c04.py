"""C04 Standard deviation: answer models (the key, and one per misconception).

params["ask"]:
  raw   inputs xs (a tuple of observations)            -> the S.D.
  sums  inputs n, sx2 (sum of x^2), mean               -> the S.D.
  nat   inputs n                                       -> the S.D. of 1, 2, ..., n
  back  inputs n, mean, sd                             -> the sum of x^2, recovered from the S.D.
"""
from sympy import FiniteSet, Rational, sqrt


def _data(v, p):
    """(n, sum of x, sum of x^2) for the asks that give the data or its sums."""
    ask = p["ask"]
    if ask == "raw":
        xs = list(v["xs"])
    elif ask == "nat":
        xs = list(range(1, int(v["n"]) + 1))
    elif ask == "sums":
        n = v["n"]
        return n, n * v["mean"], v["sx2"]
    else:
        raise ValueError(f"no data for ask {ask}")
    return Rational(len(xs)), sum(xs, Rational(0)), sum((x**2 for x in xs), Rational(0))


def _variance(v, p):
    """The mean of the squared deviations from the mean."""
    ask = p["ask"]
    if ask == "sums":
        n, sx, sx2 = _data(v, p)
        return sx2 / n - (sx / n) ** 2
    xs = list(v["xs"]) if ask == "raw" else list(range(1, int(v["n"]) + 1))
    n = Rational(len(xs))
    m = sum(xs, Rational(0)) / n
    return sum(((x - m) ** 2 for x in xs), Rational(0)) / n


def key(v, p):
    """S.D. = the positive square root of the variance; back: sum x^2 = n(sigma^2 + mean^2)."""
    if p["ask"] == "back":
        n, m, s = v["n"], v["mean"], v["sd"]
        return n * (s**2 + m**2)
    return sqrt(_variance(v, p))


def m1(v, p):
    """Forgets the square root: gives the variance as the S.D. (back: uses sigma itself as the variance)."""
    if p["ask"] == "back":
        n, m, s = v["n"], v["mean"], v["sd"]
        return n * (s + m**2)
    return _variance(v, p)


def m2(v, p):
    """Thinks the S.D. can be negative: sigma = plus or minus the root of the variance."""
    if p["ask"] == "back":
        raise ValueError("the sign of sigma doesn't change sigma^2")
    s = sqrt(_variance(v, p))
    if s == 0:
        raise ValueError("plus or minus 0 is just 0")
    return FiniteSet(-s, s)


def m3(v, p):
    """Leaves out the minus mean^2: sigma = sqrt(sum x^2 / n), the root of the mean of the squares."""
    if p["ask"] == "back":
        n, s = v["n"], v["sd"]
        return n * s**2
    n, sx, sx2 = _data(v, p)
    return sqrt(sx2 / n)


def m4(v, p):
    """Splits the root over the subtraction: sigma = sqrt(sum x^2 / n) - mean."""
    if p["ask"] == "back":
        n, m, s = v["n"], v["mean"], v["sd"]
        return n * (s + m) ** 2
    n, sx, sx2 = _data(v, p)
    return sqrt(sx2 / n) - sx / n


def m5(v, p):
    """Doesn't divide by n: sigma = sqrt(sum of (x - mean)^2)."""
    if p["ask"] == "back":
        n, m, s = v["n"], v["mean"], v["sd"]
        return s**2 + n * m**2
    n, sx, sx2 = _data(v, p)
    return sqrt(sx2 - sx**2 / n)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
