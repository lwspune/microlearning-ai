"""C10 Factorising quadratic polynomials: answer models (the key, and one per misconception).

Params (strings):
  P:     the quadratic, e.g. "6*x**2 - 5*x - 6" (a*s**2 + b*s + c, integer a, b, c).
  var:   its variable ("x", "m", "y").
  split: optional "m,n", the two numbers the middle term is split into, in the order the
         book writes them (6x^2 - 9x + 4x - 6 is "-9,4"); needed by C10-M4 only.
x and y are real symbols, as the verifier parses option values.
"""
from sympy import Integer, Poly, Symbol, divisors, expand, factor, factor_list, gcd, sqrt, sympify

_LOC = {"x": Symbol("x", real=True), "y": Symbol("y", real=True)}


def _var(p):
    return _LOC.get(p["var"], Symbol(p["var"]))


def _abc(p):
    s = _var(p)
    P = Poly(sympify(p["P"], locals=_LOC), s)
    if P.degree() != 2:
        raise ValueError("not a quadratic")
    return [Integer(P.coeff_monomial(s ** k)) for k in (2, 1, 0)]


def _pair(a, b, c):
    """The two integers with product a*c and sum b (raises when there are none)."""
    ac = a * c
    if ac == 0:
        raise ValueError("a*c is zero")
    for d in divisors(abs(ac)):
        for m in (d, -d):
            n = ac / m
            if m + n == b:
                return m, n
    raise ValueError("no integer pair")


def _linear_factors(p):
    """The key as two linear factors (q*s + r), each with a positive s-coefficient."""
    s = _var(p)
    a, b, c = _abc(p)
    k, fs = factor_list(a * s ** 2 + b * s + c, s)
    lin = []
    for f, e in fs:
        lin += [f] * e
    if len(lin) != 2 or k != 1:
        raise ValueError("expects two linear factors and no number outside")
    return [Poly(f, s).all_coeffs() for f in lin]


def key(v, p):
    # Straight from the definition: sympy's own factorisation of the polynomial.
    s = _var(p)
    a, b, c = _abc(p)
    return factor(a * s ** 2 + b * s + c)


def m1(v, p):
    """Picks the pair with the right product but signs swapped, so it adds to -b, not b."""
    s = _var(p)
    a, b, c = _abc(p)
    if b == 0:
        raise ValueError("no middle term")
    return factor(a * s ** 2 - b * s + c)


def m2(v, p):
    """Writes (s + m)(s + n) straight from the pair, as for x^2 + bx + c, ignoring a."""
    s = _var(p)
    a, b, c = _abc(p)
    if a == 1:
        raise ValueError("a is 1: this is the key")
    m, n = _pair(a, b, c)
    return (s + m) * (s + n)


def m3(v, p):
    """Takes a^2 - b^2 as (a - b)^2."""
    s = _var(p)
    a, b, c = _abc(p)
    if b != 0 or a <= 0 or c >= 0:
        raise ValueError("not a difference of squares")
    return (sqrt(a) * s - sqrt(-c)) ** 2


def m4(v, p):
    """Drops the minus sign of the second group's common factor: -1(9x + 2) becomes +1."""
    s = _var(p)
    a, b, c = _abc(p)
    if "split" not in p:
        raise ValueError("needs the split")
    m, n = [Integer(t) for t in p["split"].split(",")]
    if m + n != b or m * n != a * c:
        raise ValueError("split does not fit")
    g = gcd(a, m)                      # first group: a s^2 + m s = g s (a/g s + m/g)
    bracket = (a / g) * s + m / g
    h = n / (a / g)                    # second group: n s + c = h (bracket)
    if expand(h * bracket - (n * s + c)) != 0:
        raise ValueError("groups do not share the bracket")
    if h >= 0:
        raise ValueError("second group's factor is not negative")
    return bracket * (g * s - h)


def m5(v, p):
    """Takes the square root of the variable only, not of its coefficient: 4x^2 as (4x)^2."""
    s = _var(p)
    a, b, c = _abc(p)
    if b != 0 or a <= 1 or c >= 0:
        raise ValueError("not a difference of squares with a coefficient")
    r = sqrt(-c)
    return (a * s + r) * (a * s - r)


def m6(v, p):
    """Puts the constants in the wrong brackets: right first and last terms, wrong middle term."""
    s = _var(p)
    (q1, r1), (q2, r2) = _linear_factors(p)
    if q1 == q2 or r1 == r2 or r1 == -r2:
        raise ValueError("swapping the constants changes nothing or matches another slip")
    return (q1 * s + r2) * (q2 * s + r1)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
