"""C13 Sums of r, r^2 and r^3: answer models (the key, and one per misconception).

Inputs: a, b = the limits of r (integers, 1 <= a <= b).
params["f"]: the general term as an expression in r (a polynomial of degree <= 3),
e.g. "r**2", "8*r - 7", "(2*r)**2 - (2*r - 1)**2" for (2r)^2 - (2r - 1)^2 brackets.
Every item asks for the value of sum_{r=a}^{b} f(r).
"""
from sympy import Integer, Poly, Rational, Symbol, sympify

_r = Symbol("r")


def _f(p):
    return sympify(p["f"], locals={"r": _r})


def key(v, p):
    """Straight from the definition: add f(r) term by term for r = a, ..., b."""
    f, a, b = _f(p), int(v["a"]), int(v["b"])
    return sum((f.subs(_r, k) for k in range(a, b + 1)), Integer(0))


def _coeffs(p):
    """[c0, c1, c2, c3]: f = c0 + c1 r + c2 r^2 + c3 r^3."""
    poly = Poly(_f(p).expand(), _r)
    assert poly.degree() <= 3, "f must have degree at most 3"
    return [poly.coeff_monomial(_r**k) for k in range(4)]


def _S1(m):
    return Rational(m * (m + 1), 2)


def _S2(m):
    return Rational(m * (m + 1) * (2 * m + 1), 6)


def _S3(m):
    return _S1(m) ** 2


def _F(c, m, s2=_S2, s3=_S3, const=None):
    """sum_{r=1}^{m} f(r) by the formulas; const overrides how the constant term is summed."""
    if m == 0:
        return Integer(0)
    k = c[0] * m if const is None else const
    return k + c[1] * _S1(m) + c[2] * s2(m) + c[3] * s3(m)


def _range(c, a, b, **kw):
    """The method taught: sum_{1}^{b} minus sum_{1}^{a-1}."""
    return _F(c, b, **kw) - (_F(c, a - 1, **kw) if a > 1 else 0)


def m1(v, p):
    """Range sums: subtracts sum_{1}^{a} instead of sum_{1}^{a-1}, losing the first term f(a)."""
    a, b = int(v["a"]), int(v["b"])
    if a == 1:
        raise ValueError("the sum starts at r = 1: nothing is subtracted")
    c = _coeffs(p)
    return _F(c, b) - _F(c, a)


def m2(v, p):
    """Sums a constant once: takes sum_{r=1}^{m} c as c instead of mc."""
    c, a, b = _coeffs(p), int(v["a"]), int(v["b"])
    if c[0] == 0:
        raise ValueError("no constant term")
    return _F(c, b, const=c[0]) - (_F(c, a - 1, const=c[0]) if a > 1 else 0)


def m3(v, p):
    """Mixes up the square and cube formulas: (n(n+1)/2)^2 for sum r^2, n(n+1)(2n+1)/6 for sum r^3."""
    c, a, b = _coeffs(p), int(v["a"]), int(v["b"])
    if c[2] == 0 and c[3] == 0:
        raise ValueError("no r^2 or r^3 term")
    return _range(c, a, b, s2=_S3, s3=_S2)


def m4(v, p):
    """Range sums: counts the terms and sums f(r) for r = 1 to that count, as if the sum started at r = 1."""
    a, b = int(v["a"]), int(v["b"])
    if a == 1:
        raise ValueError("the sum already starts at r = 1")
    return _F(_coeffs(p), b - a + 1)


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4}
