"""C03 Coefficient of a given power: answer models (the key, and one per misconception).

Inputs (sympy): a, b = the two terms of the binomial, each a constant times a power of x
(e.g. 2*x**5, -5/x**3); n = the index (a positive integer); k = the power of x asked for.
The answer is the coefficient of x^k in (a + b)^n.
"""
from sympy import Integer, binomial, expand, simplify


def _x(v):
    (x,) = (v["a"] + v["b"]).free_symbols
    return x


def _parts(v):
    """a = c1 x^p1, b = c2 x^p2."""
    x = _x(v)
    c1, p1 = v["a"].as_coeff_exponent(x)
    c2, p2 = v["b"].as_coeff_exponent(x)
    return c1, p1, c2, p2


def _r(n, num, den):
    """Solve den * r = num for a whole r in 0..n."""
    if den == 0:
        raise ValueError("the power of x doesn't depend on r")
    r = simplify(num / den)
    if not (r.is_integer and 0 <= r <= n):
        raise ValueError(f"r = {r} is not a whole number from 0 to n")
    return int(r)


def _coeff(v, r):
    c1, _, c2, _ = _parts(v)
    n = int(v["n"])
    if not 0 <= r <= n:
        raise ValueError(f"r = {r} out of range")
    return simplify(binomial(n, r) * c1 ** (n - r) * c2**r)


def _r_key(v):
    """The power of x in T_{r+1} is p1(n - r) + p2 r; set it to k."""
    _, p1, _, p2 = _parts(v)
    n, k = int(v["n"]), v["k"]
    return _r(n, k - p1 * n, p2 - p1)


def key(v, p):
    """Straight from the definition: expand (a + b)^n and read off the coefficient of x^k."""
    x = _x(v)
    c = simplify(expand((v["a"] + v["b"]) ** int(v["n"])).coeff(x, v["k"]))
    if c == 0:
        raise ValueError("no x^k term")
    return c


def m1(v, p):
    """Counts the power of x from b^r only, forgetting that a^(n - r) carries x too:
    p2 r = k."""
    _, _, _, p2 = _parts(v)
    return _coeff(v, _r(int(v["n"]), v["k"], p2))


def m2(v, p):
    """Reads a negative power as positive (1/x^q as x^q) when collecting the power of x:
    |p1|(n - r) + |p2| r = k."""
    _, p1, _, p2 = _parts(v)
    if p1 >= 0 and p2 >= 0:
        raise ValueError("no negative power to misread")
    n, k = int(v["n"]), v["k"]
    return _coeff(v, _r(n, k - abs(p1) * n, abs(p2) - abs(p1)))


def m3(v, p):
    """Takes the coefficient to be nCr alone, leaving out the constants (and signs) of a and b."""
    return Integer(binomial(int(v["n"]), _r_key(v)))


def m4(v, p):
    """Leaves the minus sign out of the terms: works with |c1|, |c2|."""
    c1, _, c2, _ = _parts(v)
    if c1 >= 0 and c2 >= 0:
        raise ValueError("no minus sign to drop")
    n, r = int(v["n"]), _r_key(v)
    return simplify(binomial(n, r) * abs(c1) ** (n - r) * abs(c2) ** r)


def m5(v, p):
    """Raises only the power of x, not the constant: (2x^5)^4 as 2x^20, so the coefficient is
    nCr * c1 * c2."""
    c1, _, c2, _ = _parts(v)
    return simplify(binomial(int(v["n"]), _r_key(v)) * c1 * c2)


def m6(v, p):
    """Uses the term number for r: x^k is in T_(r+1), and the student puts r + 1 into
    nCr a^(n - r) b^r."""
    return _coeff(v, _r_key(v) + 1)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
