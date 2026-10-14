"""C09 Harmonic progression: answer models (the key, and one per misconception).

Inputs: a = the first term of the H.P., b = a later term, j = the position of b,
k = the position asked for (a number, or the symbol n for the nth term).
"""
from sympy import simplify


def _ap(v):
    """The A.P. of reciprocals: its first term A and common difference D."""
    a, b, j = v["a"], v["b"], v["j"]
    A = 1 / a
    D = (1 / b - A) / (j - 1)
    return A, D


def key(v, p):
    """By the definition: 1/t_k lies in the A.P. of reciprocals, so t_k = 1/(A + (k - 1)D)."""
    A, D = _ap(v)
    return simplify(1 / (A + (v["k"] - 1) * D))


def m1(v, p):
    """Treats the H.P. terms themselves as an A.P.: t_k = a + (k - 1)(common difference of the terms)."""
    a, b, j, k = v["a"], v["b"], v["j"], v["k"]
    return simplify(a + (k - 1) * (b - a) / (j - 1))


def m2(v, p):
    """Finds the A.P. term A + (k - 1)D and forgets to flip it back."""
    A, D = _ap(v)
    return simplify(A + (v["k"] - 1) * D)


def m3(v, p):
    """Flips each part of the sum: 1/(A + (k - 1)D) taken as 1/A + 1/((k - 1)D)."""
    A, D = _ap(v)
    if D == 0 or v["k"] == 1:
        raise ValueError("no second part to flip")
    return simplify(1 / A + 1 / ((v["k"] - 1) * D))


def m4(v, p):
    """Uses A + kD for the kth term of the A.P. (one difference too many), then flips."""
    A, D = _ap(v)
    return simplify(1 / (A + v["k"] * D))


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4}
