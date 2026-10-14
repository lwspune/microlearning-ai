"""C12 Ordered pairs and the Cartesian product: answer models (the key, and one per misconception).

Inputs: A, B (FiniteSets; B defaults to A, for A x A), or k = n(A ∩ B) alone (a number).
params["ask"]:
  count        n(A x B)
  common       n((A x B) ∩ (B x A))
  common_list  the set (A x B) ∩ (B x A)
"""
from itertools import product

from sympy import FiniteSet, Integer, Tuple


def _sets(v):
    """A and B as Python sets. Given only k = n(A ∩ B), build two sets that share exactly k elements."""
    if "k" in v:
        k = int(v["k"])
        common = set(range(1, k + 1))
        return common | {-1}, common | {-2}
    a = set(v["A"])
    return a, set(v.get("B", v["A"]))


def _x(a, b):
    """The Cartesian product, straight from the definition: every (first, second) with first in a, second in b."""
    return set(product(a, b))


def _answer(pairs, ask):
    if ask in ("count", "common"):
        return Integer(len(pairs))
    if ask == "common_list":
        return FiniteSet(*(Tuple(*p) for p in pairs))
    raise ValueError(f"no ask {ask}")


def _true_pairs(v, p):
    a, b = _sets(v)
    if p["ask"] == "count":
        return _x(a, b)
    return _x(a, b) & _x(b, a)


def key(v, p):
    """List the pairs from the definition and count or return them."""
    return _answer(_true_pairs(v, p), p["ask"])


def m1(v, p):
    """Order doesn't matter: (a, b) and (b, a) are one pair, so each such couple is kept once (the first, a < b)."""
    kept = {tuple(sorted(q)) for q in _true_pairs(v, p)}
    return _answer(kept, p["ask"])


def m2(v, p):
    """Adds instead of multiplying: n(A x B) = n(A) + n(B); common pairs n(A ∩ B) + n(B ∩ A)."""
    a, b = _sets(v)
    if p["ask"] == "count":
        return Integer(len(a) + len(b))
    if p["ask"] == "common":
        return Integer(2 * len(a & b))
    raise ValueError("adding counts doesn't give a list")


def m3(v, p):
    """No repeats in a pair: drops pairs with equal entries, like (3, 3), as if a pair were a set."""
    return _answer({q for q in _true_pairs(v, p) if q[0] != q[1]}, p["ask"])


def m4(v, p):
    """Only pairs with equal entries, (c, c) for c in A ∩ B, are common to A x B and B x A."""
    if p["ask"] == "count":
        raise ValueError("about common pairs only")
    a, b = _sets(v)
    return _answer({(c, c) for c in a & b}, p["ask"])


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4}
