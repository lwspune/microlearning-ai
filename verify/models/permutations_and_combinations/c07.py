"""C07 Circular arrangements: answer models (the key, and one per misconception).

params["kind"]:
  "together"  - n different people (or flowers), k particular ones always together.
                Inputs n, k.
  "apart"     - n different people, two particular ones never side by side. Input n.
  "alternate" - m men and w women (w <= m), no two women side by side (w = m: they alternate).
                Inputs m, w.
params["flip"]: "yes" for a garland or necklace (it can be turned over), else a table.
"""
from itertools import combinations, permutations
from math import factorial, perm

from sympy import Integer


def _flip(p):
    return p.get("flip") == "yes"


def _numbered(v, p):
    """Seatings in n numbered seats 0..n-1 round a circle (seat n-1 is next to seat 0),
    found by listing where the particular people can sit; the rest fill the other seats freely."""
    kind = p["kind"]
    if kind == "alternate":
        m, w = int(v["m"]), int(v["w"])
        n = m + w
        ok = sum(1 for s in combinations(range(n), w) if all((a + 1) % n not in s for a in s))
        return n, ok * factorial(m) * factorial(w)
    n = int(v["n"])
    if kind == "together":
        k = int(v["k"])
        assert 2 <= k < n
        blocks = {frozenset((s + i) % n for i in range(k)) for s in range(n)}
        ok = sum(1 for seats in permutations(range(n), k) if frozenset(seats) in blocks)
        return n, ok * factorial(n - k)
    if kind == "apart":
        ok = sum(1 for a, b in permutations(range(n), 2) if (a - b) % n not in (1, n - 1))
        return n, ok * factorial(n - 2)
    raise ValueError(f"unknown kind {kind}")


def key(v, p):
    """From the definition: seatings that are turns of one another (and, for a garland,
    turns over) are one arrangement. With different people each arrangement is n numbered
    seatings round a table, 2n on a garland (n >= 3), so divide the numbered count."""
    n, count = _numbered(v, p)
    orbit = n * (2 if _flip(p) else 1)
    assert count % orbit == 0
    return Integer(count // orbit)


def _formula(v, p, circ, flip, inner, second):
    """The counting method with each step swappable: circ(u) for u units round the ring,
    inner(k) for the order inside a block, second(m, w) for the second group's places."""
    kind, half = p["kind"], 2 if flip else 1
    if kind == "together":
        n, k = int(v["n"]), int(v["k"])
        out = circ(n - k + 1) * inner(k)
    elif kind == "apart":
        n = int(v["n"])
        out = circ(n) - circ(n - 1) * inner(2)
    else:
        m, w = int(v["m"]), int(v["w"])
        out = circ(m) * second(m, w)
    assert out % half == 0
    return Integer(out // half)


def _circle(u):
    return factorial(u - 1)


def m1(v, p):
    """Round table taken as a row: u! for the u units round the ring, not (u - 1)!."""
    return _formula(v, p, factorial, _flip(p), factorial, perm)


def m2(v, p):
    """Halving mixed up: halves for a table, or doesn't halve for a garland."""
    return _formula(v, p, _circle, not _flip(p), factorial, perm)


def m3(v, p):
    """The order inside the block forgotten: the block counted as one unit only."""
    if p["kind"] == "alternate":
        raise ValueError("no block when the groups alternate")
    return _formula(v, p, _circle, _flip(p), lambda k: 1, perm)


def m4(v, p):
    """The circle rule used twice: (r - 1)! again for the inside of a block or for the
    second group, as if it too sat round a table on its own."""
    kind = p["kind"]
    if kind == "apart" or (kind == "together" and int(v["k"]) == 2):
        raise ValueError("a block of 2 gives (2 - 1)! = 1, the same as C07-M3")
    if kind == "alternate" and int(v["w"]) != int(v["m"]):
        raise ValueError("modelled only when the two groups alternate (w = m)")
    return _formula(v, p, _circle, _flip(p), _circle, lambda m, w: factorial(w - 1))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4}
