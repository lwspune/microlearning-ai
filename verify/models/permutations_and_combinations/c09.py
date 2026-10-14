"""C09 Combinations: nCr: answer models (the key, and one per misconception).

Inputs: n, r for one selection of r things from n; or n1, r1, n2, r2 (and n3, r3) for
selections made one after another from separate groups, whose counts multiply.
"""
from itertools import combinations

from sympy import Integer, factorial

_MAX_SUBSETS = 200000  # largest selection count the key will list out


def _parts(v):
    """The (n, r) of each selection the question asks for."""
    if "n" in v:
        return [(int(v["n"]), int(v["r"]))]
    parts = []
    i = 1
    while f"n{i}" in v:
        parts.append((int(v[f"n{i}"]), int(v[f"r{i}"])))
        i += 1
    if not parts:
        raise ValueError("no selection given")
    return parts


def _perm(n, r):
    return factorial(n) / factorial(n - r)


def _comb(n, r):
    return factorial(n) / (factorial(r) * factorial(n - r))


def _count_subsets(n, r):
    """The number of r-element subsets of n things, by listing them one by one."""
    if not 0 <= r <= n:
        raise ValueError("r must lie between 0 and n")
    count = 0
    for _ in combinations(range(n), r):
        count += 1
        if count > _MAX_SUBSETS:
            raise ValueError("too many subsets to list")
    return Integer(count)


def key(v, p):
    """From the definition: list every unordered selection; separate groups multiply."""
    out = Integer(1)
    for n, r in _parts(v):
        out *= _count_subsets(n, r)
    return out


def m1(v, p):
    """Order counted: uses nPr = n!/(n - r)! for each selection."""
    out = Integer(1)
    for n, r in _parts(v):
        out *= _perm(n, r)
    return out


def m2(v, p):
    """Adds the counts of selections from separate groups instead of multiplying."""
    parts = _parts(v)
    if len(parts) < 2:
        raise ValueError("only one selection: nothing to add")
    return sum((_comb(n, r) for n, r in parts), Integer(0))


def m3(v, p):
    """Divides nPr by r instead of r!: thinks each selection was counted r times."""
    parts = _parts(v)
    if all(r <= 2 for _, r in parts):
        raise ValueError("r! = r here, so dividing by r gives the key")
    out = Integer(1)
    for n, r in parts:
        out *= _perm(n, r) / r
    return out


def m4(v, p):
    """Counts the numerator up: n(n + 1)...(n + r - 1)/r! instead of n(n - 1)...(n - r + 1)/r!."""
    out = Integer(1)
    for n, r in _parts(v):
        if r == 0:
            raise ValueError("no factors to count")
        num = Integer(1)
        for k in range(r):
            num *= n + k
        out *= num / factorial(r)
    return out


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4}
