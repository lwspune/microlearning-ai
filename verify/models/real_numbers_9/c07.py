"""C07 Adding and subtracting surds: answer models (the key, and one per misconception).

An expression is a signed sum of quadratic surds c*sqrt(n), given in params as
  terms: "c:n,c:n,..." with c a signed rational ("-3/5") and n a positive integer,
so 9*sqrt(5) - 4*sqrt(5) + sqrt(125) is terms="9:5,-4:5,1:125".
"""
from sympy import Integer, Rational, sqrt, factorint


def _terms(p):
    out = []
    for t in p["terms"].split(","):
        c, n = t.split(":")
        out.append((Rational(c), Integer(int(n))))
    return out


def _split(n):
    """n = k^2 * m with m square-free: returns (k, m)."""
    k, m = 1, 1
    for prime, e in factorint(int(n)).items():
        k *= prime ** (e // 2)
        m *= prime ** (e % 2)
    return Integer(k), Integer(m)


def key(v, p):
    """Straight from the definition: the value of the sum (sympy evaluates each root itself)."""
    return sum((c * sqrt(n) for c, n in _terms(p)), Integer(0))


def m1(v, p):
    """Treats unlike surds as like: adds the written coefficients and keeps the first term's root."""
    ts = _terms(p)
    if len({n for _, n in ts}) == 1:
        raise ValueError("all radicands equal: this gives the key")
    return sum((c for c, _ in ts), Integer(0)) * sqrt(ts[0][1])


def m2(v, p):
    """Takes the square factor out without its root: sqrt(k^2 m) = k^2 sqrt(m)."""
    ts = _terms(p)
    if all(_split(n)[0] == 1 for _, n in ts):
        raise ValueError("every surd already in simplest form")
    return sum((c * _split(n)[0] ** 2 * sqrt(_split(n)[1]) for c, n in ts), Integer(0))


def m3(v, p):
    """Carries a minus sign onto every term after it: a - b + c is worked as a - b - c."""
    ts = _terms(p)
    out, neg = Integer(0), False
    for c, n in ts:
        neg = neg or c < 0
        out += (-abs(c) if neg else c) * sqrt(n)
    if out == key(v, p):
        raise ValueError("no plus sign after a minus: this gives the key")
    return out


def m4(v, p):
    """Adds the numbers under the roots: sqrt(x) + sqrt(y) = sqrt(x + y), so a sqrt(m) + b sqrt(n) = sqrt(a^2 m + b^2 n)."""
    ts = _terms(p)
    if any(c < 0 for c, _ in ts):
        raise ValueError("sums only")
    return sqrt(sum((c**2 * n for c, n in ts), Integer(0)))


def m5(v, p):
    """Reads a surd written with no number in front (sqrt(3)) as having coefficient 0, not 1."""
    ts = _terms(p)
    if not any(abs(c) == 1 and _split(n)[0] == 1 for c, n in ts):
        raise ValueError("needs a simplest-form surd with no written coefficient")
    return sum((c * sqrt(n) for c, n in ts if not (abs(c) == 1 and _split(n)[0] == 1)), Integer(0))


def m6(v, p):
    """Loses the factor taken out when simplifying: sqrt(k^2 m) becomes sqrt(m)."""
    ts = _terms(p)
    if all(_split(n)[0] == 1 for _, n in ts):
        raise ValueError("every surd already in simplest form")
    return sum((c * sqrt(_split(n)[1]) for c, n in ts), Integer(0))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
