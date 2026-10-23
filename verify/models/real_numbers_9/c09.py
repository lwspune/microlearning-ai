"""C09 Multiplying binomial surds: answer models (the key, and one per misconception).

Inputs (sympy): the first bracket a1*sqrt(r1) + a2*sqrt(r2) and the second bracket
b1*sqrt(s1) + b2*sqrt(s2). A coefficient of 0 drops that term, so a2 = 0 makes the first
factor a single surd (a monomial times a binomial). A radicand of 1 is a plain number.
Params: none.
"""
from sympy import Integer, expand, sqrt


def _bracket(c1, r1, c2, r2):
    return [(c, r) for c, r in ((c1, r1), (c2, r2)) if c != 0]


def _brackets(v):
    return (_bracket(v["a1"], v["r1"], v["a2"], v["r2"]),
            _bracket(v["b1"], v["s1"], v["b2"], v["s2"]))


def _value(terms):
    return sum((c * sqrt(r) for c, r in terms), Integer(0))


def key(v, p):
    # Straight from the definition: the product of the two numbers.
    first, second = _brackets(v)
    return expand(_value(first) * _value(second))


def m1(v, p):
    """Multiplies only first by first and last by last: (a + b)(c + d) = ac + bd."""
    first, second = _brackets(v)
    if len(first) != 2 or len(second) != 2:
        raise ValueError("needs two binomials")
    (a, r), (b, s) = first
    (c, t), (d, u) = second
    return expand(a * sqrt(r) * c * sqrt(t) + b * sqrt(s) * d * sqrt(u))


def m2(v, p):
    """Sign slip: a negative term times a negative term is taken as negative."""
    first, second = _brackets(v)
    total, slipped = Integer(0), False
    for a, r in first:
        for c, t in second:
            prod = a * c * sqrt(r) * sqrt(t)
            if a < 0 and c < 0:
                prod, slipped = -prod, True
            total += prod
    if not slipped:
        raise ValueError("no negative times negative")
    return expand(total)


def m3(v, p):
    """Adds the number and the surd part of the answer: 12 - 5*sqrt(6) read as 7*sqrt(6)."""
    k = key(v, p)
    rational = Integer(0)
    surd = None
    for term in k.as_ordered_terms():
        if term.is_rational:
            rational += term
        else:
            coef, rest = term.as_coeff_Mul()
            if surd is not None:
                raise ValueError("more than one surd term")
            surd = (coef, rest)
    if surd is None or rational == 0:
        raise ValueError("needs a number and one surd term")
    coef, rest = surd
    return (rational + coef) * rest


def m4(v, p):
    """Multiplies the single surd into the first term of the bracket only."""
    first, second = _brackets(v)
    if len(first) != 1 or len(second) != 2:
        raise ValueError("needs a surd times a binomial")
    (a, r), = first
    (c, t), (d, u) = second
    return expand(a * sqrt(r) * c * sqrt(t) + d * sqrt(u))


def m5(v, p):
    """Keeps the root when a surd meets itself: k*sqrt(a) times m*sqrt(a) = km*sqrt(a)."""
    first, second = _brackets(v)
    total, used = Integer(0), False
    for a, r in first:
        for c, t in second:
            if r == t and r != 1:
                total += a * c * sqrt(r)
                used = True
            else:
                total += a * c * sqrt(r) * sqrt(t)
    if not used:
        raise ValueError("no surd times itself")
    return expand(total)


def m6(v, p):
    """Adds (or subtracts) the numbers under the roots inside a bracket: sqrt(7) - sqrt(3) = sqrt(4)."""
    first, second = _brackets(v)

    def merged(terms):
        if len(terms) == 1:
            return _value(terms)
        if any(r == 1 for _, r in terms):
            raise ValueError("bracket has a plain number")
        under = sum((c * abs(c) * r for c, r in terms), Integer(0))
        if under <= 0:
            raise ValueError("nothing left under the root")
        return sqrt(under)

    if len(first) == 1 and len(second) == 1:
        raise ValueError("no bracket")
    return expand(merged(first) * merged(second))


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3,
          "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
