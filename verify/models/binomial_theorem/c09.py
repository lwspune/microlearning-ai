"""C09 Approximating with the first terms: answer models (the key, and one per misconception).

The number is written as a(1 + x) with x small, and (a(1 + x))^n = a^n (1 + x)^n is approximated
by the first `terms` terms (2 or 3) of the expansion of (1 + x)^n, worked out exactly.
inputs a, x, n (rationals; a^n is rational); params["terms"] = "2" or "3".
"""
from sympy import Symbol, series

_t = Symbol("t")


def _terms(p):
    k = int(p["terms"])
    if k not in (2, 3):
        raise ValueError("terms is 2 or 3")
    return k


def _bracket(n, x, k, c2=None):
    """1 + n x (+ c2 x^2): the method, with the x^2 coefficient c2 (default n(n - 1)/2!)."""
    if c2 is None:
        c2 = n * (n - 1) / 2
    return 1 + n * x + (c2 * x**2 if k == 3 else 0)


def key(v, p):
    """From the definition: a^n times the Taylor polynomial of (1 + t)^n, to `terms` terms, at t = x."""
    a, x, n, k = v["a"], v["x"], v["n"], _terms(p)
    poly = series((1 + _t) ** n, _t, 0, k).removeO()
    return a**n * poly.subs(_t, x)


def m1(v, p):
    """Takes a out of the bracket as a, not a^n: (a(1 + x))^n = a(1 + x)^n."""
    a, x, n, k = v["a"], v["x"], v["n"], _terms(p)
    if a == 1:
        raise ValueError("a = 1: nothing comes out of the bracket")
    return a * _bracket(n, x, k)


def m2(v, p):
    """Uses n(n + 1)/2! for the x^2 coefficient instead of n(n - 1)/2!."""
    a, x, n, k = v["a"], v["x"], v["n"], _terms(p)
    if k != 3:
        raise ValueError("only with a third term")
    return a**n * _bracket(n, x, k, n * (n + 1) / 2)


def m3(v, p):
    """Leaves out the 2! under n(n - 1): third term n(n - 1)x^2."""
    a, x, n, k = v["a"], v["x"], v["n"], _terms(p)
    if k != 3:
        raise ValueError("only with a third term")
    return a**n * _bracket(n, x, k, n * (n - 1))


def m4(v, p):
    """Drops the minus sign of x: expands (1 - h)^n as if it were (1 + h)^n."""
    a, x, n, k = v["a"], v["x"], v["n"], _terms(p)
    if x >= 0:
        raise ValueError("only for a negative x")
    return a**n * _bracket(n, -x, k)


def m5(v, p):
    """For a root (0 < n < 1), divides the extra part b by the root a^n instead of by a:
    (a + b)^n = a^n (1 + b/a^n)^n, so x becomes x a / a^n."""
    a, x, n, k = v["a"], v["x"], v["n"], _terms(p)
    if a == 1 or not (0 < n < 1):
        raise ValueError("only for a root with a != 1")
    return a**n * _bracket(n, x * a / a**n, k)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
