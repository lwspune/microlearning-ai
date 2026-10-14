"""C08 Least and greatest overlap: answer models (the key, and one per misconception).

Inputs (sympy integers): U = n(U), A = n(A), B = n(B); percentages work the same with U = 100.
params["ask"]: least_both | most_both | least_union | most_union.
"""
from sympy import Integer

_FLIP_DIR = {"least_both": "most_both", "most_both": "least_both", "least_union": "most_union", "most_union": "least_union"}
_FLIP_SET = {"least_both": "least_union", "least_union": "least_both", "most_both": "most_union", "most_union": "most_both"}


def key(v, p):
    """Try every possible size x of A ∩ B: the cells only A, both, only B, neither must all be >= 0."""
    U, A, B = (int(v[k]) for k in ("U", "A", "B"))
    xs = [x for x in range(0, min(A, B) + 1) if U - (A + B - x) >= 0]
    if not xs:
        raise ValueError("A and B don't fit inside U")
    both = xs
    union = [A + B - x for x in xs]
    ask = p["ask"]
    pick = min if ask.startswith("least") else max
    return Integer(pick(both if ask.endswith("both") else union))


def m1(v, p):
    """Uses the wrong one of n(A), n(B): the overlap fits inside the larger set, the union covers the smaller."""
    A, B = v["A"], v["B"]
    if p["ask"] == "most_both":
        return Integer(max(A, B))
    if p["ask"] == "least_union":
        return Integer(min(A, B))
    raise ValueError("no set size to mix up")


def m2(v, p):
    """Ignores n(U): the sets could always be pulled apart, so the overlap can be 0 and the union n(A) + n(B)."""
    if p["ask"] == "least_both":
        return Integer(0)
    if p["ask"] == "most_union":
        return Integer(v["A"] + v["B"])
    raise ValueError("n(U) doesn't limit this bound")


def m3(v, p):
    """Swaps least and greatest (reads n(A ∪ B) <= n(U) as an upper bound on the overlap)."""
    return key(v, {**p, "ask": _FLIP_DIR[p["ask"]]})


def m4(v, p):
    """Confuses A ∩ B with A ∪ B: gives the same bound for the other set."""
    return key(v, {**p, "ask": _FLIP_SET[p["ask"]]})


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4}
