"""C02 Variance of raw data: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  var    the observations v["xs"] (a tuple) -> the variance
  sd     the observations v["xs"] -> the S.D.
  fix    n observations v["n"] with mean v["m"] and S.D. v["s"]; the value v["right"] was
         misread as v["wrong"] -> the corrected S.D.
The book divides by n throughout.
"""
from sympy import Abs, Rational, sqrt


def _ask(p):
    return p.get("ask", "var")


def _xs(v):
    return [Rational(x) for x in v["xs"]]


def _mean(xs):
    return sum(xs) / len(xs)


def _var(xs):
    """From the definition: the mean of the squared deviations from the mean."""
    m = _mean(xs)
    return sum((x - m) ** 2 for x in xs) / len(xs)


def _fix_sums(v):
    """Corrected sum and sum of squares, rebuilt from the given mean and S.D."""
    n, m, s = v["n"], v["m"], v["s"]
    sx = n * m - v["wrong"] + v["right"]
    sxx = n * (s**2 + m**2) - v["wrong"] ** 2 + v["right"] ** 2
    return n, sx, sxx


def _report(var, p):
    """The variance or its square root, whichever the question asks."""
    return var if _ask(p) == "var" else sqrt(var)


def key(v, p):
    a = _ask(p)
    if a in ("var", "sd"):
        return _report(_var(_xs(v)), p)
    if a == "fix":
        n, sx, sxx = _fix_sums(v)
        return sqrt(sxx / n - (sx / n) ** 2)
    raise ValueError(a)


def m1(v, p):
    """Takes the mean of the squares as the variance: forgets to subtract x-bar squared."""
    if _ask(p) not in ("var", "sd"):
        raise ValueError("only for raw observations")
    xs = _xs(v)
    return _report(sum(x**2 for x in xs) / len(xs), p)


def m2(v, p):
    """Subtracts the mean, not its square: sum(x^2)/n - x-bar."""
    if _ask(p) not in ("var", "sd"):
        raise ValueError("only for raw observations")
    xs = _xs(v)
    return _report(sum(x**2 for x in xs) / len(xs) - _mean(xs), p)


def m3(v, p):
    """Divides the sum of squared deviations by n - 1 instead of n."""
    a = _ask(p)
    if a in ("var", "sd"):
        xs = _xs(v)
        n = len(xs)
        return _report(_var(xs) * n / (n - 1), p)
    if a == "fix":
        # Uses n - 1 both ways: rebuilds sum(x^2) from (n - 1) s^2 + n m^2, then divides by n - 1.
        n, m, s = v["n"], v["m"], v["s"]
        sx = n * m - v["wrong"] + v["right"]
        sxx = (n - 1) * s**2 + n * m**2 - v["wrong"] ** 2 + v["right"] ** 2
        return sqrt((sxx - sx**2 / n) / (n - 1))
    raise ValueError(a)


def m4(v, p):
    """Averages the deviations without squaring them (their sizes, since they sum to 0)."""
    if _ask(p) not in ("var", "sd"):
        raise ValueError("only for raw observations")
    xs = _xs(v)
    m = _mean(xs)
    return sum(Abs(x - m) for x in xs) / len(xs)


def m5(v, p):
    """Mixes up variance and S.D.: gives sigma^2 when the S.D. is asked, sigma when the variance is."""
    a = _ask(p)
    if a == "var":
        return sqrt(key(v, p))
    if a in ("sd", "fix"):
        return key(v, p) ** 2
    raise ValueError(a)


def m6(v, p):
    """Correcting a misread item: corrects the mean but leaves sum(x^2) as it was."""
    if _ask(p) != "fix":
        raise ValueError("only for a misread item")
    n, m, s = v["n"], v["m"], v["s"]
    sx = n * m - v["wrong"] + v["right"]
    sxx = n * (s**2 + m**2)
    return sqrt(sxx / n - (sx / n) ** 2)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
