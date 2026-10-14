"""C14 Choosing any number of things: answer models (the key, and one per misconception).

Inputs n, lo, hi: the number of selections of r things out of n different things, for every r
from lo to hi, that is nC_lo + ... + nC_hi. "Any number, even none" is lo = 0, hi = n;
"at least one" is lo = 1, hi = n.
params["kind"]: count (a word problem) | sum (a written sum of nC_r).
"""
from sympy import Integer, binomial


def _n_lo_hi(v):
    return int(v["n"]), int(v["lo"]), int(v["hi"])


def _left_out(n, lo, hi):
    """The selections the question leaves out: nC_r for r below lo or above hi."""
    return sum((binomial(n, r) for r in range(n + 1) if r < lo or r > hi), Integer(0))


def key(v, p):
    """Straight from the definition: add the selections of each size r, nC_r, for r = lo to hi."""
    n, lo, hi = _n_lo_hi(v)
    return sum((binomial(n, r) for r in range(lo, hi + 1)), Integer(0))


def m1(v, p):
    """Keeps the empty selection (and any other left-out size): answers 2^n even where at least one is needed."""
    n, lo, hi = _n_lo_hi(v)
    if lo == 0 and hi == n:
        raise ValueError("nothing is left out, so 2^n is the key")
    return Integer(2) ** n


def m2(v, p):
    """Adds instead of multiplying: each thing has 2 choices, so 2 + 2 + ... = 2n in all, then removes the left-out ones."""
    n, lo, hi = _n_lo_hi(v)
    return 2 * n - _left_out(n, lo, hi)


def m3(v, p):
    """Swaps base and exponent: n things with 2 choices each taken as n^2, then removes the left-out ones."""
    n, lo, hi = _n_lo_hi(v)
    return Integer(n) ** 2 - _left_out(n, lo, hi)


def m4(v, p):
    """Reads 'at least one' as 'exactly one': counts only the n single choices."""
    n, lo, hi = _n_lo_hi(v)
    if p.get("kind") != "count" or lo != 1 or hi != n:
        raise ValueError("only for an 'at least one' word problem")
    return Integer(n)


def m5(v, p):
    """Takes nC_0 = 0: drops the empty selection even where choosing none is allowed."""
    n, lo, hi = _n_lo_hi(v)
    if lo != 0:
        raise ValueError("only where the empty selection counts")
    return key(v, p) - 1


MODELS = {"key": key, "C14-M1": m1, "C14-M2": m2, "C14-M3": m3, "C14-M4": m4, "C14-M5": m5}
