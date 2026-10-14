"""C08 Recurring decimals as fractions: answer models (the key, and one per misconception).

The number is w . nr rep rep rep ...: inputs["w"] is the whole-number part; params["nr"] is the
string of digits after the point that do not repeat (may be "" or start with 0), and params["rep"]
the repeating block (e.g. 2.3(5): w = 2, nr = "3", rep = "5").
"""
from sympy import Integer, Rational


def _parts(v, p):
    w, nr, rep = Integer(v["w"]), p["nr"], p["rep"]
    m, k = len(nr), len(rep)
    head = w + (Rational(int(nr), 10**m) if m else 0)  # w.nr, the part before the G.P.
    return w, nr, rep, m, k, head


def key(v, p):
    """By shifting the point, not by a G.P.: 10^(m+k) x and 10^m x have the same tail, so
    (10^(m+k) - 10^m) x = (digits w nr rep) - (digits w nr)."""
    w, nr, rep, m, k, _ = _parts(v, p)
    big = int(f"{w}{nr}{rep}")
    small = int(f"{w}{nr}")
    return Rational(big - small, 10**m * (10**k - 1))


def _gp(a, r):
    return a / (1 - r)


def m1(v, p):
    """Takes r = 0.1 for a block of k >= 2 digits (0.46 + 0.0046 + ... read as r = 0.1)."""
    w, nr, rep, m, k, head = _parts(v, p)
    if k < 2:
        raise ValueError("a one-digit block has r = 0.1 anyway")
    return head + _gp(Rational(int(rep), 10 ** (m + k)), Rational(1, 10))


def m2(v, p):
    """Starts the G.P. right after the point, ignoring the non-repeating digits:
    2.3555... = 2.3 + (0.5 + 0.05 + ...)."""
    w, nr, rep, m, k, head = _parts(v, p)
    if m == 0:
        raise ValueError("no non-repeating digits to skip")
    return head + _gp(Rational(int(rep), 10**k), Rational(1, 10**k))


def m3(v, p):
    """Sums the G.P. but never adds back the part before it (w.nr)."""
    w, nr, rep, m, k, head = _parts(v, p)
    if head == 0:
        raise ValueError("nothing before the G.P.")
    return _gp(Rational(int(rep), 10 ** (m + k)), Rational(1, 10**k))


def m4(v, p):
    """Takes only the first term of the G.P., as if the decimal stopped after one block."""
    w, nr, rep, m, k, head = _parts(v, p)
    return head + Rational(int(rep), 10 ** (m + k))


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4}
