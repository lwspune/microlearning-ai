"""C04 Multiplying polynomials: answer models (the key, and one per misconception).

Params (strings):
  P, Q: lists of the two polynomials' terms, in the order the stem writes them
        (e.g. ["2*y", "1"] and ["y**2", "-2*y**3", "3*y"]); the order matters for the
        "first term" and "last term" slips.
  var:  the variable ("x", "m", "y").
  ask:  "product" (the whole product) or "coef" (the coefficient of var**k in it).
  k:    the power asked about when ask is "coef".
x and y are real symbols, as the verifier parses option values.
"""
from sympy import Integer, Poly, Symbol, expand, sympify

_LOC = {"x": Symbol("x", real=True), "y": Symbol("y", real=True)}


def _var(p):
    return _LOC.get(p["var"], Symbol(p["var"]))


def _terms(p, name):
    return [sympify(t, locals=_LOC) for t in p[name]]


def _split(t, s):
    """A monomial c*s**n as (c, n)."""
    (n,), c = Poly(t, s).terms()[0]
    return c, n


def _answer(expr, p):
    expr = expand(expr)
    if p["ask"] == "product":
        return expr
    if p["ask"] == "coef":
        return Poly(expr, _var(p)).coeff_monomial(_var(p) ** int(p["k"]))
    raise ValueError("unknown ask")


def key(v, p):
    # Straight from the definition: the product of the two polynomials, expanded.
    P, Q = _terms(p, "P"), _terms(p, "Q")
    return _answer(sum(P) * sum(Q), p)


def m1(v, p):
    """Multiplies the powers instead of adding them: x^5 times x^3 = x^15 (a number times x^n stays x^n)."""
    s = _var(p)
    total = Integer(0)
    for a in _terms(p, "P"):
        ca, na = _split(a, s)
        for b in _terms(p, "Q"):
            cb, nb = _split(b, s)
            n = na * nb if na and nb else na + nb
            total += ca * cb * s ** n
    return _answer(total, p)


def m2(v, p):
    """Multiplies only first term by first term and last term by last term."""
    P, Q = _terms(p, "P"), _terms(p, "Q")
    if len(P) < 2 or len(Q) < 2:
        raise ValueError("needs two or more terms in each factor")
    return _answer(P[0] * Q[0] + P[-1] * Q[-1], p)


def m3(v, p):
    """Takes a negative term times a negative term as negative."""
    s = _var(p)
    total, hit = Integer(0), False
    for a in _terms(p, "P"):
        for b in _terms(p, "Q"):
            prod = a * b
            if _split(a, s)[0] < 0 and _split(b, s)[0] < 0:
                prod, hit = -prod, True
            total += prod
    if not hit:
        raise ValueError("no negative term meets a negative term")
    return _answer(total, p)


def m4(v, p):
    """Multiplies a monomial into the first term of the bracket only, copying the other terms."""
    P, Q = _terms(p, "P"), _terms(p, "Q")
    if len(P) != 1 or len(Q) < 2:
        raise ValueError("needs a monomial times a polynomial")
    return _answer(P[0] * Q[0] + sum(Q[1:]), p)


def m5(v, p):
    """Lets a negative term's minus sign reach only the first term of the bracket."""
    s = _var(p)
    P, Q = _terms(p, "P"), _terms(p, "Q")
    if len(Q) < 2 or all(_split(a, s)[0] > 0 for a in P):
        raise ValueError("needs a negative term times a polynomial")
    total = Integer(0)
    for a in P:
        if _split(a, s)[0] < 0:
            total += a * Q[0] - a * sum(Q[1:])
        else:
            total += a * sum(Q)
    return _answer(total, p)


def m6(v, p):
    """Multiplies only the first term of the first factor into the second, forgetting the other rows."""
    P, Q = _terms(p, "P"), _terms(p, "Q")
    if len(P) < 2:
        raise ValueError("needs two or more terms in the first factor")
    return _answer(P[0] * sum(Q), p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
