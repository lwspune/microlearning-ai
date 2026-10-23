"""C10 Rationalising a denominator: answer models (the key, and one per misconception).

Inputs (sympy):
- op "rat": a, b, n for the number a / (b*sqrt(n)), to be written with a rational denominator.
- op "rf": p, m for the surd p*sqrt(m), whose simplest rationalising factor is asked.
Params (strings): op, "rat" or "rf".
"""
from sympy import Integer, factorint, sqrt


def _squarefree(m):
    """The part of the whole number m left under the root in simplest form: 72 -> 2."""
    if not (m.is_integer and m > 0):
        raise ValueError("needs a whole number under the root")
    s = 1
    for prime, power in factorint(int(m)).items():
        if power % 2:
            s *= prime
    return Integer(s)


def _rat(v, p):
    if p["op"] != "rat":
        raise ValueError("applies only to rationalising a denominator")
    return v["a"], v["b"], v["n"]


def _rf(v, p):
    if p["op"] != "rf":
        raise ValueError("applies only to a rationalising factor")
    return v["p"], v["m"]


def key(v, p):
    if p["op"] == "rat":
        # Rationalising never changes the value: the key is the number itself.
        a, b, n = _rat(v, p)
        return a / (b * sqrt(n))
    if p["op"] == "rf":
        # Simplest rationalising factor: the root of the square-free part of m.
        _, m = _rf(v, p)
        s = _squarefree(m)
        if s == 1:
            raise ValueError("the surd is already rational")
        return sqrt(s)
    raise ValueError("unknown op")


def m1(v, p):
    """Multiplies only the denominator by sqrt(n): 3/sqrt(5) -> 3/5."""
    a, b, n = _rat(v, p)
    return a / (b * n)


def m2(v, p):
    """Takes sqrt(n) x sqrt(n) as n squared: 3/sqrt(5) -> 3*sqrt(5)/25."""
    a, b, n = _rat(v, p)
    return a * sqrt(n) / (b * n ** 2)


def m3(v, p):
    """Moves the surd up to the numerator and drops it from the denominator: 3/sqrt(5) -> 3*sqrt(5)."""
    a, b, n = _rat(v, p)
    return a * sqrt(n) / b


def m4(v, p):
    """Gives the root as written, without simplifying it first: for sqrt(72), sqrt(72)."""
    _, m = _rf(v, p)
    if _squarefree(m) == m:
        raise ValueError("the root is already in simplest form")
    return sqrt(m)


def m5(v, p):
    """Gives the whole surd, coefficient included: for 3*sqrt(72), 3*sqrt(72)."""
    pp, m = _rf(v, p)
    if pp == 1 and _squarefree(m) == m:
        raise ValueError("the surd itself is the key")
    return pp * sqrt(m)


def m6(v, p):
    """Gives the rational product (surd x factor) instead of the factor."""
    pp, m = _rf(v, p)
    return pp * sqrt(m) * key(v, p)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4,
          "C10-M5": m5, "C10-M6": m6}
