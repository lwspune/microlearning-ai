"""C03 Rational numbers between two numbers: answer models (the key, and one per misconception).

Inputs (sympy): a, b, the two given rational numbers (in either order).
Params (strings): ask, "count" (how many rational numbers lie between a and b) or "mid" (the
number exactly halfway between them); for "count", d, the most decimal places in the given
decimals (so 5.2 and 5.3 have d = 1, -2.33 and -2.3 have d = 2).
"""
from sympy import Integer, Rational, Symbol

INFINITE = Symbol("infinitely_many")


def _ends(v):
    a, b = v["a"], v["b"]
    return (a, b) if a < b else (b, a)


def _need(p, ask):
    if p["ask"] != ask:
        raise ValueError(f"applies only to '{ask}' items")


def _count_at(v, places):
    """How many numbers with exactly `places` decimal places lie strictly between a and b."""
    lo, hi = _ends(v)
    scale = Integer(10) ** places
    n = hi * scale - lo * scale
    if not n.is_integer:
        raise ValueError("the ends need more decimal places")
    return n - 1


def key(v, p):
    lo, hi = _ends(v)
    if lo == hi:
        raise ValueError("the two numbers must differ")
    if p["ask"] == "count":
        # The average of two different rationals is a rational strictly between them, so the
        # halving never stops: no finite list can hold them all.
        return INFINITE
    if p["ask"] == "mid":
        return (lo + hi) / 2
    raise ValueError("unknown ask")


def m1(v, p):
    """Counts only the numbers written with the given decimal places (5.2 to 5.3: none)."""
    _need(p, "count")
    return _count_at(v, int(p["d"]))


def m2(v, p):
    """Adds one decimal place and thinks that list is all of them (5.2 to 5.3: 5.21 ... 5.29)."""
    _need(p, "count")
    return _count_at(v, int(p["d"]) + 1)


def m3(v, p):
    """Thinks only one number lies between: their average."""
    _need(p, "count")
    return Integer(1)


def m4(v, p):
    """Adds the two numbers but forgets to divide by 2."""
    _need(p, "mid")
    lo, hi = _ends(v)
    return lo + hi


def m5(v, p):
    """Takes half the gap between them as the halfway number."""
    _need(p, "mid")
    lo, hi = _ends(v)
    return (hi - lo) / 2


def m6(v, p):
    """Adds fractions by adding the numerators and the denominators, then halves."""
    _need(p, "mid")
    a, b = Rational(v["a"]), Rational(v["b"])
    return Rational(a.p + b.p, a.q + b.q) / 2


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
