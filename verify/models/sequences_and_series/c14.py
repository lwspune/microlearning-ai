"""C14 Summing a series with Σ: answer models (the key, and one per misconception).

The rth term is a product of linear factors in r, listed in params:
  params["t"]: the factors of t_r, e.g. ["2*r - 1", "2*r + 3"] for 1×5 + 3×7 + ...
  params["given"]: "terms" (the series is written out term by term) or "sigma" (given as Σ t_r).
  params["ask"]: "sum" (S_n; inputs: n = the symbol n), or "ratio" (the sum to n terms of the
                 series in params["t"] over the one in params["d"], simplified; inputs: n).
"""
from sympy import Mul, Poly, Symbol, cancel, expand, factor, summation, sympify

_r = Symbol("r")


def _factors(p, which="t"):
    return [sympify(f, locals={"r": _r}) for f in p[which]]


def _sigma(expr, n):
    """Σ_{r=1}^{n} expr, straight from the definition (sympy sums it term by term symbolically)."""
    return expand(summation(expr, (_r, 1, n)))


def _run(v, p, series_sum):
    """Applies one way of summing to the item: S_n, or the ratio of two series' sums."""
    if p["ask"] == "sum":
        return series_sum(_factors(p, "t"), v["n"])
    return factor(cancel(series_sum(_factors(p, "t"), v["n"]) / series_sum(_factors(p, "d"), v["n"])))


def key(v, p):
    """Σ of the product of the factors, summed term by term."""
    return _run(v, p, lambda fs, n: _sigma(Mul(*fs), n))


def m1(v, p):
    """Σ of a product taken as the product of the Σs: Σ(2r − 1)(2r + 3) = Σ(2r − 1) × Σ(2r + 3)."""
    def s(fs, n):
        return expand(Mul(*[_sigma(f, n) for f in fs]))
    if all(len(_factors(p, w)) < 2 for w in ("t", "d") if w in p):
        raise ValueError("no product to split")
    return _run(v, p, s)


def m2(v, p):
    """Σ of the constant term c taken as c, not nc (Σ 3 = 3)."""
    def s(fs, n):
        t = expand(Mul(*fs))
        c = Poly(t, _r).coeff_monomial(1)
        return expand(_sigma(t - c, n) + c)
    if all(Poly(expand(Mul(*_factors(p, w))), _r).coeff_monomial(1) == 0 for w in ("t", "d") if w in p):
        raise ValueError("no constant term")
    return _run(v, p, s)


def m3(v, p):
    """The rth term of each A.P. of factors written as a + rd instead of a + (r − 1)d,
    so every factor is one step ahead: the sum runs from the second term."""
    if p["given"] != "terms":
        raise ValueError("the rth term is given, not built from the terms")
    return _run(v, p, lambda fs, n: _sigma(Mul(*[f.subs(_r, _r + 1) for f in fs]), n))


def m4(v, p):
    """Brackets expanded by multiplying only the first parts and the last parts:
    (2r − 1)(2r + 3) = 4r² − 3, dropping the middle terms."""
    def s(fs, n):
        lead = Mul(*[Poly(f, _r).coeff_monomial(_r) * _r for f in fs])
        const = Mul(*[Poly(f, _r).coeff_monomial(1) for f in fs])
        return _sigma(lead + const, n)
    if all(len(_factors(p, w)) < 2 for w in ("t", "d") if w in p):
        raise ValueError("no brackets to expand")
    return _run(v, p, s)


MODELS = {"key": key, "C14-M1": m1, "C14-M2": m2, "C14-M3": m3, "C14-M4": m4}
