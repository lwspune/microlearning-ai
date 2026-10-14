"""C03 Arrangements with repetition: answer models (the key, and one per misconception).

Inputs: n (things each place can take), r (places to fill), z (how many of the n
things the first place may not take: 1 for a leading 0 or for a = 0 in a quadratic,
else 0).
"""
from itertools import product

from sympy import Integer


def _nrz(v):
    return int(v["n"]), int(v["r"]), int(v.get("z", 0))


def key(v, p):
    """Lists every filling of the r places and counts those whose first place is allowed."""
    n, r, z = _nrz(v)
    return Integer(sum(1 for f in product(range(n), repeat=r) if f[0] >= z))


def m1(v, p):
    """Base and power swapped: r^n (the places choose, not the things)."""
    n, r, z = _nrz(v)
    if z:
        raise ValueError("swap modelled only where every place is free")
    return Integer(r) ** n


def m2(v, p):
    """Repetition ignored: each thing used up once placed (first place still avoids the z)."""
    n, r, z = _nrz(v)
    if r > n:
        raise ValueError("no arrangement without repetition when r > n")
    out = Integer(n - z)
    for k in range(1, r):
        out *= n - k
    return out


def m3(v, p):
    """The choices for the places added instead of multiplied."""
    n, r, z = _nrz(v)
    return Integer(n - z + (r - 1) * n)


def m4(v, p):
    """The first-place restriction ignored: n^r, counting a leading 0 (or a = 0)."""
    n, r, z = _nrz(v)
    if not z:
        raise ValueError("needs a restricted first place")
    return Integer(n) ** r


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4}
