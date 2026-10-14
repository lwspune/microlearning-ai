"""C12 Arithmetico-geometric series: answer models (the key, and one per misconception).

The series is a + (a + d)r + (a + 2d)r^2 + ..., so t_k = [a + (k - 1)d] r^(k - 1).
params["ask"]:
  sum  inputs a, d, r, n  -> S_n, the sum of the first n terms
  inf  inputs a, d, r     -> the sum to infinity (NO_SUM if the series has none)
"""
from sympy import Abs, Rational, Sum, Symbol, oo

NO_SUM = Symbol("no_finite_sum")
_k = Symbol("k", integer=True, nonnegative=True)


def _end(v):
    """The last term's A.P. factor times r^n: [a + (n - 1)d] r^n, the end term of rS_n left over."""
    return (v["a"] + (v["n"] - 1) * v["d"]) * v["r"] ** v["n"]


def key(v, p):
    """From the definition: add the terms one by one, or take the limit of the partial sums."""
    a, d, r = v["a"], v["d"], v["r"]
    if p["ask"] == "sum":
        return sum(((a + k * d) * r**k for k in range(int(v["n"]))), Rational(0))
    if p["ask"] == "inf":
        series = Sum((a + _k * d) * r**_k, (_k, 0, oo))
        return series.doit() if series.is_convergent() else NO_SUM
    raise ValueError(f"no ask {p['ask']}")


def m1(v, p):
    """Treats the series as a G.P. with ratio q = t_2/t_1 (checking |q| < 1 for a sum to infinity)."""
    a, d, r = v["a"], v["d"], v["r"]
    q = (a + d) * r / a
    if q == 1:
        raise ValueError("q = 1")
    if p["ask"] == "sum":
        return a * (q ** v["n"] - 1) / (q - 1)
    if p["ask"] == "inf":
        return a / (1 - q) if Abs(q) < 1 else NO_SUM
    raise ValueError(f"no ask {p['ask']}")


def m2(v, p):
    """Divides the G.P. part by (1 - r) only once: S = a/(1 - r) + dr/(1 - r), the square forgotten."""
    a, d, r = v["a"], v["d"], v["r"]
    if p["ask"] == "sum":
        n = v["n"]
        return a / (1 - r) + d * r * (1 - r ** (n - 1)) / (1 - r) - _end(v) / (1 - r)
    if p["ask"] == "inf":
        if Abs(r) >= 1:
            raise ValueError("no sum to infinity")
        return a / (1 - r) + d * r / (1 - r)
    raise ValueError(f"no ask {p['ask']}")


def m3(v, p):
    """Drops the end term of rS_n that has nothing to cancel against: no -[a + (n - 1)d]r^n."""
    if p["ask"] != "sum":
        raise ValueError("only for S_n")
    a, d, r, n = v["a"], v["d"], v["r"], v["n"]
    return a / (1 - r) + d * r * (1 - r ** (n - 1)) / (1 - r) ** 2


def m4(v, p):
    """Starts the G.P. of d's at d instead of dr: dr + dr^2 + ... summed as d + dr + ..."""
    a, d, r = v["a"], v["d"], v["r"]
    if p["ask"] == "sum":
        n = v["n"]
        return a / (1 - r) + d * (1 - r ** (n - 1)) / (1 - r) ** 2 - _end(v) / (1 - r)
    if p["ask"] == "inf":
        if Abs(r) >= 1:
            raise ValueError("no sum to infinity")
        return a / (1 - r) + d / (1 - r) ** 2
    raise ValueError(f"no ask {p['ask']}")


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4}
