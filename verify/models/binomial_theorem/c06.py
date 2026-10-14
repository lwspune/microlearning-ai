"""C06 Sums of binomial coefficients: answer models (the key, and one per misconception).

params["ask"]:
  sum    inputs n, lo, hi, step  -> nC_lo + nC_(lo+step) + ... + nC_hi  (step 1: a run; step 2: odd- or even-placed)
  coeff  inputs a, b, n          -> the sum of the coefficients in the expansion of (a x + b)^n
"""
from sympy import Integer, Poly, Symbol, expand, factorial

_x = Symbol("x")


def _ncr(n, r):
    return factorial(n) / (factorial(r) * factorial(n - r))


def _sum_parts(v):
    """n, the listed r's, and the missing r's (same step and parity) the shortcut must take off."""
    n, lo, hi, step = (int(v[k]) for k in ("n", "lo", "hi", "step"))
    if step not in (1, 2) or not 0 <= lo <= hi <= n:
        raise ValueError("bad range")
    listed = list(range(lo, hi + 1, step))
    every = range(0, n + 1) if step == 1 else range(lo % 2, n + 1, 2)
    missing = [r for r in every if r not in listed]
    return n, step, listed, missing


def _ask(p, want):
    if p["ask"] != want:
        raise ValueError(f"only for ask={want}")


def key(v, p):
    """Straight from the definition: add the coefficients themselves."""
    if p["ask"] == "sum":
        n, _, listed, _ = _sum_parts(v)
        return sum((_ncr(n, r) for r in listed), Integer(0))
    if p["ask"] == "coeff":
        poly = Poly(expand((v["a"] * _x + v["b"]) ** v["n"]), _x)
        return sum(poly.all_coeffs(), Integer(0))
    raise ValueError(f"no ask {p['ask']}")


def m1(v, p):
    """Swaps the two totals: 2^(n-1) for the sum of all coefficients, 2^n for an odd- or even-placed sum."""
    _ask(p, "sum")
    n, step, _, missing = _sum_parts(v)
    total = Integer(2) ** (n - 1) if step == 1 else Integer(2) ** n
    return total - sum((_ncr(n, r) for r in missing), Integer(0))


def m2(v, p):
    """Uses the full total (2^n, or 2^(n-1) for odd/even-placed) without taking off the missing terms."""
    _ask(p, "sum")
    n, step, _, missing = _sum_parts(v)
    if not missing:
        raise ValueError("nothing is missing: this is the key")
    return Integer(2) ** (n if step == 1 else n - 1)


def m3(v, p):
    """Takes off 1 for each missing term, as if every end coefficient were 1 (but nC1 = n)."""
    _ask(p, "sum")
    n, step, _, missing = _sum_parts(v)
    if all(_ncr(n, r) == 1 for r in missing):
        raise ValueError("every missing term is 1: this is the key")
    return Integer(2) ** (n if step == 1 else n - 1) - len(missing)


def m4(v, p):
    """Takes 'the sum of the coefficients' of (ax + b)^n to be the sum of the nCr's, 2^n."""
    _ask(p, "coeff")
    return Integer(2) ** v["n"]


def m5(v, p):
    """Puts x = 1 but drops the minus sign: (|a| + |b|)^n."""
    _ask(p, "coeff")
    if v["a"] >= 0 and v["b"] >= 0:
        raise ValueError("no minus sign to drop")
    return (abs(v["a"]) + abs(v["b"])) ** v["n"]


def m6(v, p):
    """Puts x = 0 instead of x = 1, which gives only the constant term b^n."""
    _ask(p, "coeff")
    return v["b"] ** v["n"]


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
