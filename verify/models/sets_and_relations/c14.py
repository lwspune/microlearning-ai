"""C14 How many relations: answer models (the key, and one per misconception).

Inputs (sympy integers): m = n(A), n = n(B) (for a relation on A, m = n = n(A)),
k = the number of given pairs a relation must contain (default 0).
params["ask"]: all (every relation from A to B) | contain (those containing the k given pairs).
"""
from sympy import Integer


def _mnk(v):
    return int(v["m"]), int(v["n"]), int(v.get("k", 0))


def key(v, p):
    """Straight from the definition: list every subset of A × B (as a bitmask over its m·n pairs)
    and count those holding the k given pairs (taken as the first k pairs)."""
    m, n, k = _mnk(v)
    pairs = m * n
    if k > pairs:
        raise ValueError("more given pairs than A × B has")
    if p["ask"] == "all":
        k = 0
    fixed = (1 << k) - 1
    return Integer(sum(1 for r in range(1 << pairs) if r & fixed == fixed))


def m1(v, p):
    """Counts the pairs, not the relations: n(A × B) (minus the given pairs) instead of 2 to that power."""
    m, n, k = _mnk(v)
    return Integer(m * n) if p["ask"] == "all" else Integer(m * n - k)


def m2(v, p):
    """Takes n(A × B) = n(A) + n(B), so 2^(m + n) relations (2^(m + n − k) with k pairs fixed)."""
    m, n, k = _mnk(v)
    e = m + n if p["ask"] == "all" else m + n - k
    if e < 0:
        raise ValueError("more given pairs than m + n")
    return Integer(2) ** e


def m3(v, p):
    """Leaves out the empty relation: 2^(mn) − 1."""
    m, n, _ = _mnk(v)
    if p["ask"] != "all":
        raise ValueError("the empty relation contains no pairs, so it is never among these")
    return Integer(2) ** (m * n) - 1


def m4(v, p):
    """Reads 'contains the pairs' as 'is made from the pairs': counts subsets of the k given pairs, 2^k."""
    _, _, k = _mnk(v)
    if p["ask"] != "contain":
        raise ValueError("no given pairs to misread")
    return Integer(2) ** k


MODELS = {"key": key, "C14-M1": m1, "C14-M2": m2, "C14-M3": m3, "C14-M4": m4}
