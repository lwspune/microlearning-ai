"""C05 Section formula: answer models (the key, and one per misconception).

Every item gives A(x1, y1), B(x2, y2) and the ratio m : n in which P divides seg AB
(AP : PB = m : n); a midpoint is m = n = 1. Each model returns P as Tuple(x, y), or one
co-ordinate when the item's params say ask="x" or ask="y". params trisect="1" marks an item
whose stem names a point of trisection (one or two thirds of the way) rather than a ratio.
"""
from sympy import Rational, Tuple, sympify


def _ins(v):
    return [sympify(v[k]) for k in ("x1", "y1", "x2", "y2", "m", "n")]


def _out(x, y, p):
    ask = p.get("ask")
    if ask == "x":
        return x
    if ask == "y":
        return y
    return Tuple(x, y)


def key(v, p):
    """From the definition: P lies m/(m + n) of the way from A to B."""
    x1, y1, x2, y2, m, n = _ins(v)
    f = Rational(m, m + n)
    return _out(x1 + f * (x2 - x1), y1 + f * (y2 - y1), p)


def m1(v, p):
    """Swaps the weights: m with A's co-ordinates and n with B's."""
    x1, y1, x2, y2, m, n = _ins(v)
    if m == n:
        raise ValueError("equal weights: swapping them gives the key")
    return _out((m * x1 + n * x2) / (m + n), (m * y1 + n * y2) / (m + n), p)


def m2(v, p):
    """Forgets to divide by m + n: the weighted sums alone (x1 + x2 for a midpoint)."""
    x1, y1, x2, y2, m, n = _ins(v)
    return _out(m * x2 + n * x1, m * y2 + n * y1, p)


def m3(v, p):
    """Reads the ratio m : n as the fraction m/n of the way from A to B."""
    x1, y1, x2, y2, m, n = _ins(v)
    if m == n:
        raise ValueError("m/n = 1 lands on B")
    f = Rational(m, n)
    return _out(x1 + f * (x2 - x1), y1 + f * (y2 - y1), p)


def m4(v, p):
    """Gives the step from A to P as P's co-ordinates: forgets to start from A ((x2 - x1)/2 for a midpoint)."""
    x1, y1, x2, y2, m, n = _ins(v)
    f = Rational(m, m + n)
    return _out(f * (x2 - x1), f * (y2 - y1), p)


def m5(v, p):
    """Turns 'k thirds of the way' into the ratio k : 3 (1 : 3 for one third), not k : (3 - k)."""
    if p.get("trisect") != "1":
        raise ValueError("only for a point named as a fraction of the way")
    x1, y1, x2, y2, m, n = _ins(v)
    a, b = m, m + n
    return _out((a * x2 + b * x1) / (a + b), (a * y2 + b * y1) / (a + b), p)


def m6(v, p):
    """For a midpoint, averages the two co-ordinates of each point: (x1 + y1)/2 and (x2 + y2)/2."""
    x1, y1, x2, y2, m, n = _ins(v)
    if m != n:
        raise ValueError("midpoint slip only")
    return _out((x1 + y1) / 2, (x2 + y2) / 2, p)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
