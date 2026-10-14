"""C08 Negative or fractional index: answer models (the key, and one per misconception).

Every item is about (a + b x)^n with n rational (negative or a fraction), so inputs a, b, n.
params["ask"]:
  terms  input m  -> the first m terms, as a polynomial in x
  coef   input r  -> the coefficient of x^r
  valid           -> the interval of x where the expansion holds (an open Interval)
"""
from sympy import Abs, Interval, Rational, Symbol, binomial, ff, series, solve

X = Symbol("x", real=True)


def _poly(v, p, coef):
    """a^n times the sum of coef(r) x^r over the asked terms; coef(r) is the student's coefficient of x^r
    inside the bracket (1 + ...)^n."""
    a, n = v["a"], v["n"]
    if p["ask"] == "terms":
        return (a**n * sum(coef(r) * X**r for r in range(int(v["m"])))).expand()
    if p["ask"] == "coef":
        return (a**n * coef(int(v["r"]))).expand()
    raise ValueError(f"no expansion for ask {p['ask']}")


def _interval(c):
    return Interval.open(-c, c)


def key(v, p):
    """From the definition: sympy's Taylor series of (a + bx)^n about 0; it holds up to the nearest point
    where a + bx = 0 (the branch point), so for |x| < |a/b|."""
    a, b, n = v["a"], v["b"], v["n"]
    if p["ask"] == "valid":
        (root,) = solve(a + b * X, X)
        return _interval(Abs(root))
    if p["ask"] == "terms":
        return series((a + b * X) ** n, X, 0, int(v["m"])).removeO().expand()
    if p["ask"] == "coef":
        r = int(v["r"])
        return series((a + b * X) ** n, X, 0, r + 1).removeO().coeff(X, r)
    raise ValueError(f"no ask {p['ask']}")


def m1(v, p):
    """Does not raise the number in front of x: writes (kx)^r as k x^r."""
    k = v["b"] / v["a"]
    if Abs(k) == 1:
        raise ValueError("k = ±1: k^r = ±k, so no difference that is visible")
    return _poly(v, p, lambda r: binomial(v["n"], r) * (k if r else 1))


def m2(v, p):
    """Thinks a negative index only flips signs: (1 + x)^(-n) taken as (1 - x)^n."""
    if v["n"] >= 0:
        raise ValueError("only for a negative index")
    k = v["b"] / v["a"]
    return _poly(v, p, lambda r: binomial(-v["n"], r) * (-k) ** r)


def m3(v, p):
    """Leaves out the r! under n(n - 1)...(n - r + 1)."""
    k = v["b"] / v["a"]
    return _poly(v, p, lambda r: ff(v["n"], r) * k**r)


def m4(v, p):
    """Takes a^n out of (a + bx)^n but does not divide bx by a: writes a^n (1 + bx)^n."""
    a, b, n = v["a"], v["b"], v["n"]
    if a == 1:
        raise ValueError("a = 1: nothing to take out")
    if p["ask"] == "valid":
        return _interval(1 / Abs(b))
    return _poly(v, p, lambda r: binomial(n, r) * b**r)


def m5(v, p):
    """Solves |bx/a| < 1 upside down: |x| < |b/a|."""
    if p["ask"] != "valid":
        raise ValueError("only for the validity condition")
    return _interval(Abs(v["b"] / v["a"]))


def m6(v, p):
    """Believes the expansion always holds for |x| < 1, whatever multiplies x in the bracket."""
    if p["ask"] != "valid":
        raise ValueError("only for the validity condition")
    return _interval(Rational(1))


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
