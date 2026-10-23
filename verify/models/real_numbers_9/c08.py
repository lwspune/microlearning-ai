"""C08 Multiplying and dividing surds: answer models (the key, and one per misconception).

Inputs (sympy): p, m, q, n for the surds p*sqrt(m) and q*sqrt(n) (p, q the coefficients, m, n
the numbers under the roots).
Params (strings): op, "mul" (p*sqrt(m) times q*sqrt(n)) or "div" (p*sqrt(m) divided by q*sqrt(n)).
"""
from sympy import Integer, Rational, sqrt


def _parts(v):
    return v["p"], v["m"], v["q"], v["n"]


def _coef(v, p):
    a, _, b, _ = _parts(v)
    if p["op"] == "mul":
        return a * b
    if p["op"] == "div":
        return Rational(a, b)
    raise ValueError("unknown op")


def _under(v, p):
    """The number under the root after combining: m*n or m/n."""
    _, m, _, n = _parts(v)
    return m * n if p["op"] == "mul" else Rational(m, n)


def _largest_square(r):
    if not (r.is_integer and r > 0):
        raise ValueError("needs a whole number under the root")
    r = int(r)
    s = 1
    for k in range(2, int(r ** 0.5) + 2):
        if r % (k * k) == 0:
            s = k
    return Integer(s)


def key(v, p):
    # Straight from the definition: the product or quotient of the two numbers.
    a, m, b, n = _parts(v)
    first, second = a * sqrt(m), b * sqrt(n)
    if p["op"] == "mul":
        return first * second
    if p["op"] == "div":
        return first / second
    raise ValueError("unknown op")


def m1(v, p):
    """Puts the coefficients under the root as they are: 3*sqrt(12) read as sqrt(36)."""
    a, m, b, n = _parts(v)
    if a == 1 and b == 1:
        raise ValueError("no coefficients to move")
    if p["op"] == "mul":
        return sqrt(a * m * b * n)
    return sqrt(Rational(a * m, b * n))


def m2(v, p):
    """Takes the square factor out whole instead of its root: sqrt(216) = 36*sqrt(6)."""
    r = _under(v, p)
    s = _largest_square(r)
    if s == 1:
        raise ValueError("no square factor to take out")
    return _coef(v, p) * s ** 2 * sqrt(r / s ** 2)


def m3(v, p):
    """Adds the numbers under the roots to multiply (subtracts them to divide)."""
    _, m, _, n = _parts(v)
    if p["op"] == "mul":
        return _coef(v, p) * sqrt(m + n)
    if m <= n:
        raise ValueError("needs m > n")
    return _coef(v, p) * sqrt(m - n)


def m4(v, p):
    """Multiplies like surds as if adding them: keeps the common root, 5*sqrt(8) x 2*sqrt(8) = 10*sqrt(8)."""
    a, m, b, n = _parts(v)
    if p["op"] != "mul" or m != n:
        raise ValueError("applies only to a product of like surds")
    return a * b * sqrt(m)


def m5(v, p):
    """Combines the numbers under the roots but drops the root: sqrt(98) / sqrt(2) = 49."""
    return _coef(v, p) * _under(v, p)


def m6(v, p):
    """Divides the other way round: the second surd by the first."""
    if p["op"] != "div":
        raise ValueError("applies only to division")
    return 1 / key(v, p)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4,
          "C08-M5": m5, "C08-M6": m6}
