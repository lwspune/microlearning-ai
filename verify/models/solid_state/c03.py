"""C03 Counting particles in a unit cell: answer models (the key, and one per misconception).

A particle at a corner is shared by 8 cubic cells, on an edge by 4, on a face by 2; one at the body centre
belongs to its cell alone. params:
  ask="count", sites: the occupied positions, e.g. ["corners", "body"]: particles per unit cell;
  ask="formula", sites: one "X=position" per element in formula order, e.g. ["A=faces", "B=corners"]: the
    simplest formula (a named answer such as A3B).
"""
from functools import reduce
from math import gcd

from sympy import Rational, Symbol, ilcm

NUMBER = {"corners": 8, "edges": 12, "faces": 6, "body": 1}
KEY_SHARE = {"corners": Rational(1, 8), "edges": Rational(1, 4), "faces": Rational(1, 2), "body": 1}


def formula(counts):
    """{"A": 3, "B": 1} in order -> Symbol("A3B"): smallest whole-number ratio, subscript 1 left out."""
    den = reduce(ilcm, [Rational(c).q for c in counts.values()], 1)
    whole = {k: int(Rational(c) * den) for k, c in counts.items()}
    g = reduce(gcd, whole.values())
    return Symbol("".join(k + (str(n // g) if n // g != 1 else "") for k, n in whole.items()))


def _solve(p, share, swap=False):
    if p["ask"] == "count":
        return sum((NUMBER[s] * share[s] for s in p["sites"]), Rational(0))
    pairs = [x.split("=") for x in p["sites"]]
    if swap:
        if len(pairs) != 2:
            raise ValueError("swap needs two elements")
        pairs = [[pairs[0][0], pairs[1][1]], [pairs[1][0], pairs[0][1]]]
    counts = {}
    for el, pos in pairs:
        counts[el] = counts.get(el, 0) + NUMBER[pos] * share[pos]
    return formula(counts)


def key(v, p):
    return _solve(p, KEY_SHARE)


def _with(share, asks=("count", "formula")):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply")
        return _solve(p, share)
    return model


def m5(v, p):
    if p["ask"] != "formula":
        raise ValueError("a formula mistake")
    return _solve(p, KEY_SHARE, swap=True)


MODELS = {
    "key": key,
    # counts every position as a whole particle: no sharing
    "C03-M1": _with({"corners": 1, "edges": 1, "faces": 1, "body": 1}),
    # shares as in one flat layer of squares: corner by 4, edge by 2, face not shared
    "C03-M2": _with({"corners": Rational(1, 4), "edges": Rational(1, 2), "faces": 1, "body": 1}),
    # shares every particle by 8, wherever it sits
    "C03-M3": _with({"corners": Rational(1, 8), "edges": Rational(1, 8), "faces": Rational(1, 8), "body": Rational(1, 8)}),
    # swaps the face and edge shares: face 1/4, edge 1/2
    "C03-M4": _with({"corners": Rational(1, 8), "edges": Rational(1, 2), "faces": Rational(1, 4), "body": 1}),
    # writes each element's count against the other element's position
    "C03-M5": m5,
}
