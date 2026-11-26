"""C06 Radius and packing efficiency: answer models (the key, and one per misconception).

The touching line: simple cubic along an edge (a = 2r), bcc along the body diagonal (sqrt3 a = 4r),
fcc along the face diagonal (sqrt2 a = 4r). Packing efficiency = n (4/3) pi r^3 / a^3 x 100.
params["lat"]: "sc" | "bcc" | "fcc".  params["ask"]:
  "r":   r in pm from the edge a (input a);
  "a":   a in pm from the radius r (input r);
  "rel": r as an expression in the symbol a;
  "pe":  percentage of the cell's volume filled;
  "void": percentage left empty.
"""
from sympy import Rational, Symbol, pi, sqrt

from chemistry import sig

A = Symbol("a")
K = {"sc": Rational(1, 2), "bcc": sqrt(3) / 4, "fcc": sqrt(2) / 4}  # r = K a
N = {"sc": 1, "bcc": 2, "fcc": 4}  # atoms per unit cell
OTHER = {"bcc": "fcc", "fcc": "bcc"}


def _pe(k, n):
    return n * Rational(4, 3) * pi * k**3 * 100


def _answer(v, p, k, n):
    ask = p["ask"]
    if ask == "r":
        return sig(k * v["a"])
    if ask == "a":
        return sig(v["r"] / k)
    if ask == "rel":
        return k * A
    pe = _pe(k, n)
    if ask == "pe":
        return sig(pe)
    if ask == "void":
        return sig(100 - pe)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _answer(v, p, K[p["lat"]], N[p["lat"]])


def m1(v, p):
    """Mixes up bcc and fcc: uses the other lattice's touching line (and so its packing)."""
    lat = p["lat"]
    if lat not in OTHER:
        raise ValueError("no other lattice to swap with")
    o = OTHER[lat]
    return _answer(v, p, K[o], N[o])


def m2(v, p):
    """Takes the atoms as touching along the edge in every lattice: a = 2r."""
    if p["lat"] == "sc" or p["ask"] not in ("r", "a", "rel"):
        raise ValueError("does not apply")
    return _answer(v, p, Rational(1, 2), N[p["lat"]])


def m3(v, p):
    """Takes the diagonal as 2r, forgetting the full diameter of the middle atom."""
    if p["lat"] == "sc" or p["ask"] not in ("r", "a", "rel"):
        raise ValueError("does not apply")
    return _answer(v, p, 2 * K[p["lat"]], N[p["lat"]])


def m4(v, p):
    """Gives the filled percentage when the empty space is asked, or the reverse."""
    if p["ask"] not in ("pe", "void"):
        raise ValueError("does not apply")
    flip = {"pe": "void", "void": "pe"}[p["ask"]]
    return _answer(v, {**p, "ask": flip}, K[p["lat"]], N[p["lat"]])


def m5(v, p):
    """Counts one sphere per unit cell, whatever the lattice."""
    if p["lat"] == "sc" or p["ask"] not in ("pe", "void"):
        raise ValueError("does not apply")
    return _answer(v, p, K[p["lat"]], 1)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
