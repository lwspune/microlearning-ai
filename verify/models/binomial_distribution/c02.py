"""C02 The binomial probability: answer models (the key, and one per misconception).

Every item asks for P(X = r) when X ~ B(n, p); inputs n, p (the success probability, as the
question's success is defined) and r. The key enumerates all 2^n success/failure sequences and adds
the probability of each one with exactly r successes, so it never uses the formula being taught.
"""
from itertools import product
from math import comb

from sympy import Integer, Rational, sympify


def _npr(v):
    n, p, r = int(v["n"]), sympify(v["p"]), int(v["r"])
    if not (0 < p < 1 and 0 <= r <= n):
        raise ValueError("need 0 < p < 1 and 0 <= r <= n")
    return n, p, r


def key(v, p_):
    n, p, r = _npr(v)
    q = 1 - p
    total = Integer(0)
    for seq in product((True, False), repeat=n):
        if sum(seq) == r:
            term = Integer(1)
            for s in seq:
                term *= p if s else q
            total += term
    return total


def m1(v, p_):
    """Drops nCr: gives the probability of one particular order only."""
    n, p, r = _npr(v)
    return p**r * (1 - p) ** (n - r)


def m2(v, p_):
    """Swaps success and failure: raises q to the r and p to the n - r."""
    n, p, r = _npr(v)
    return comb(n, r) * (1 - p) ** r * p ** (n - r)


def m3(v, p_):
    """Leaves out the failures: nCr p^r, with no q^(n - r)."""
    n, p, r = _npr(v)
    return comb(n, r) * p**r


def m4(v, p_):
    """Counts the orders over all 2^n outcomes, as if success and failure were equally likely."""
    n, p, r = _npr(v)
    return Rational(comb(n, r), 2**n)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4}
