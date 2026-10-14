"""C05 Arrangements with conditions: answer models (the key, and one per misconception).

n different things in a row, with a condition chosen by params["kind"]:
  "block": params sizes (list): groups whose members must sit together, each group as one block.
           Things in no group are "loose".
  "never": two particular things must never be side by side.
  "ends":  inputs g; both end places must be filled from a set of g particular things.
"""
from itertools import permutations
from math import comb, factorial as fact, perm, prod

from sympy import Integer


def _sizes(v, p):
    sizes = [int(s) for s in p["sizes"]]
    assert sum(sizes) <= int(v["n"]), "the blocks can't hold more than n things"
    return sizes


def key(v, p):
    """Lists every order of the n things (labelled 0..n-1) and counts those meeting the condition."""
    n, kind = int(v["n"]), p["kind"]
    if kind == "block":
        groups, start = [], 0
        for s in _sizes(v, p):
            groups.append(set(range(start, start + s)))
            start += s

        def ok(row):
            spots = {x: i for i, x in enumerate(row)}
            return all(max(spots[x] for x in g) - min(spots[x] for x in g) == len(g) - 1 for g in groups)
    elif kind == "never":
        def ok(row):
            return abs(row.index(0) - row.index(1)) != 1
    else:
        g = int(v["g"])

        def ok(row):
            return row[0] < g and row[-1] < g
    return Integer(sum(1 for row in permutations(range(n)) if ok(row)))


def _units(n, sizes):
    """Blocks plus loose things: the units arranged once each block is glued."""
    return n - sum(sizes) + len(sizes)


def m1(v, p):
    """Forgets that the members of a block (or the things at the ends) can swap among themselves."""
    n, kind = int(v["n"]), p["kind"]
    if kind == "block":
        return Integer(fact(_units(n, _sizes(v, p))))
    if kind == "never":
        return Integer(fact(n) - fact(n - 1))
    g = int(v["g"])
    return Integer(comb(g, 2) * fact(n - 2))


def m2(v, p):
    """Leaves each block where it is: arranges only the loose things, then the inside of each block."""
    n, kind = int(v["n"]), p["kind"]
    if kind == "block":
        sizes = _sizes(v, p)
        return Integer(fact(n - sum(sizes)) * prod(fact(s) for s in sizes))
    if kind == "never":
        return Integer(fact(n) - fact(n - 2) * 2)
    raise ValueError("no block in an ends question")


def m3(v, p):
    """Adds the counts for the stages (place the units, then fill each block or the ends) instead of multiplying."""
    n, kind = int(v["n"]), p["kind"]
    if kind == "block":
        sizes = _sizes(v, p)
        return Integer(fact(_units(n, sizes)) + sum(fact(s) for s in sizes))
    if kind == "never":
        return Integer(fact(n) - (fact(n - 1) + 2))
    g = int(v["g"])
    return Integer(perm(g, 2) + fact(n - 2))


def m4(v, p):
    """Forgets that placed things are used up: fills the middle places from all n things,
    or arranges all n things as well as the glued block."""
    n, kind = int(v["n"]), p["kind"]
    if kind == "block":
        return Integer(fact(n) * prod(fact(s) for s in _sizes(v, p)))
    if kind == "never":
        raise ValueError("all n arranged twice over gives a negative count")
    g = int(v["g"])
    return Integer(perm(g, 2) * perm(n, n - 2))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4}
