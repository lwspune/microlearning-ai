"""C02 Recurring decimals as fractions: answer models (the key, and one per misconception).

A recurring decimal I.N R R R ... is given by three digit strings in params:
  i: the whole-number part (e.g. "15");
  n: the digits after the point that do not repeat ("" for a pure recurring decimal);
  r: the repeating block (e.g. "89").
So 2.3454545... is i="2", n="3", r="45".
"""
from sympy import Integer, Rational, Sum, oo, symbols

_k = symbols("k", integer=True, positive=True)


def _parts(p):
    i, n, r = p["i"], p.get("n", ""), p["r"]
    return i, n, r, len(n), len(r)


def key(v, p):
    """From the definition: the whole part, the fixed digits, then the block repeated for ever (a geometric sum)."""
    i, n, r, ln, lr = _parts(p)
    fixed = Rational(int(n), 10**ln) if ln else Integer(0)
    tail = Sum(Integer(int(r)) * Rational(1, 10**ln) * Rational(1, 10) ** (lr * _k), (_k, 1, oo)).doit()
    return Integer(int(i)) + fixed + tail


def m1(v, p):
    """Always multiplies by 10, so puts the repeating block over a single 9, whatever its length."""
    i, n, r, ln, lr = _parts(p)
    if ln:
        raise ValueError("pure recurring decimals only")
    if lr == 1:
        raise ValueError("a one-digit block gives the key")
    return Integer(int(i)) + Rational(int(r), 9)


def m2(v, p):
    """Treats the decimal as terminating: drops the bar and writes the digits shown over a power of 10."""
    i, n, r, ln, lr = _parts(p)
    return Rational(int(i + n + r), 10 ** (ln + lr))


def m3(v, p):
    """Subtracts only the decimal parts: forgets to subtract the whole-number part of the smaller number."""
    i, n, r, ln, lr = _parts(p)
    if not ln and int(i) == 0:
        raise ValueError("nothing to forget when the whole part is 0")
    return Rational(int(i + n + r), 10**ln * (10**lr - 1))


def m4(v, p):
    """Counts the digits that do not repeat as part of the repeating block."""
    i, n, r, ln, lr = _parts(p)
    if not ln:
        raise ValueError("needs digits that do not repeat")
    return Rational(int(i + n + r) - int(i), 10 ** (ln + lr) - 1)


def m5(v, p):
    """Shifts and subtracts correctly but forgets the extra factor 10 for the digits that do not repeat."""
    i, n, r, ln, lr = _parts(p)
    if not ln:
        raise ValueError("needs digits that do not repeat")
    return Rational(int(i + n + r) - int(i + n), 10**lr - 1)


def m6(v, p):
    """Mixes up x and the shifted number: gives the value of 10x (or 100x, 1000x) instead of x."""
    i, n, r, ln, lr = _parts(p)
    return key(v, p) * 10 ** (ln + lr)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
