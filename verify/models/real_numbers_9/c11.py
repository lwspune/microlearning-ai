"""C11 Rationalising with a conjugate: answer models (the key, and one per misconception).

Inputs (sympy): num, the numerator; p, m, q, n, s for the denominator p*sqrt(m) + s*q*sqrt(n)
(m = 1 makes the first term rational, s = 1 or -1 is the sign between the terms).
The conjugate is p*sqrt(m) - s*q*sqrt(n); the true product of the pair is p^2*m - q^2*n.
"""
from sympy import expand, sqrt


def _den(v):
    return v["p"] * sqrt(v["m"]) + v["s"] * v["q"] * sqrt(v["n"])


def _conj(v):
    return v["p"] * sqrt(v["m"]) - v["s"] * v["q"] * sqrt(v["n"])


def _diff(v):
    """(first term)^2 - (second term)^2, the rational product of the pair."""
    return v["p"] ** 2 * v["m"] - v["q"] ** 2 * v["n"]


def key(v, p):
    # Straight from the definition: the number itself, numerator over denominator.
    return v["num"] / _den(v)


def m1(v, p):
    """Takes (sqrt a + sqrt b)(sqrt a - sqrt b) to be a + b: adds the squares."""
    return expand(v["num"] * _conj(v)) / (v["p"] ** 2 * v["m"] + v["q"] ** 2 * v["n"])


def m2(v, p):
    """Multiplies the top by the denominator itself, not its conjugate (keeps the sign), yet uses a - b below."""
    return expand(v["num"] * _den(v)) / _diff(v)


def m3(v, p):
    """Squares only the root, not the number in front: (3*sqrt 2)^2 taken as 3*2.

    A whole-number term (m or n = 1) has no root, so it is squared normally: 7^2 = 49.
    """
    def sq(c, r):
        return c ** 2 if r == 1 else c * r

    if (v["p"] == 1 or v["m"] == 1) and (v["q"] == 1 or v["n"] == 1):
        raise ValueError("no surd with a coefficient to square")
    return expand(v["num"] * _conj(v)) / (sq(v["p"], v["m"]) - sq(v["q"], v["n"]))


def m4(v, p):
    """Multiplies only the denominator by the conjugate, so the numerator stays as it was."""
    return v["num"] / _diff(v)


def m5(v, p):
    """Squares a binomial numerator term by term, dropping the middle term: (sqrt 5 - sqrt 3)^2 = 5 + 3."""
    if expand(v["num"] - _conj(v)) != 0:
        raise ValueError("applies only when the numerator is the conjugate")
    return (v["p"] ** 2 * v["m"] + v["q"] ** 2 * v["n"]) / _diff(v)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5}
