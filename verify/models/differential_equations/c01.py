"""C01 Order and degree: answer models (the key, and one per misconception).

Inputs: L and R, the two sides of the equation L = R, written with p1, p2, p3, p4 for
dy/dx, d^2y/dx^2, d^3y/dx^3, d^4y/dx^4 (and x, y as themselves).
Every model answers Tuple(order, degree); a degree (or order) that is not defined is
Symbol("not_defined").

The key works from the definition: the order is the highest k with p_k present; the
equation is made polynomial in the derivatives by clearing fractions and eliminating each
radical with a resultant (so no hand-chosen "square both sides"); the degree is the power
of p_order in that polynomial. A derivative inside sin, cos, e^, log, ... means no
polynomial form exists: degree not defined.
"""
from sympy import Function, Pow, Rational, Symbol, Tuple, degree, factor_list, ilcm, numer, resultant, together

ND = Symbol("not_defined")
P = [Symbol(f"p{k}") for k in range(1, 5)]


def _eq(v):
    return v["L"] - v["R"]


def _derivs(e):
    return [k + 1 for k, s in enumerate(P) if e.has(s)]


def _order(e):
    ks = _derivs(e)
    if not ks:
        raise ValueError("no derivative in the equation")
    return max(ks)


def _has_p(e):
    return any(e.has(s) for s in P)


def _funcs(e):
    """Applications of sin, cos, exp, log, ... in e."""
    return list(e.atoms(Function))


def _deriv_in_func(e):
    return any(_has_p(f) for f in _funcs(e))


def _radical_or_fraction(e):
    """A derivative under a root, a fractional power, or a denominator."""
    return any(_has_p(a.base) and (not a.exp.is_Integer or a.exp < 0) for a in e.atoms(Pow))


def _polynomial(e):
    """e = 0 made polynomial in the derivatives: fractions cleared, radicals eliminated."""
    e = numer(together(e))
    k = 0
    while True:
        rads = [a for a in e.atoms(Pow) if not a.exp.is_Integer and _has_p(a.base)]
        if not rads:
            break
        base = rads[0].base
        q = ilcm(1, *[Rational(a.exp).q for a in rads if a.base == base])
        t = Symbol(f"_t{k}")
        k += 1
        e = e.replace(lambda a: a.is_Pow and a.base == base and not a.exp.is_Integer, lambda a: t ** (a.exp * q))
        e = numer(together(e))
        e = resultant(e, t**q - base, t)
    e = numer(together(e.expand()))
    _, fs = factor_list(e)  # drop constant factors and factors free of the derivatives
    out = 1
    for f, m in fs:
        if _has_p(f):
            out *= f**m
    return out.expand()


def key(v, p):
    e = _eq(v)
    n = _order(e)
    if _deriv_in_func(e):
        return Tuple(n, ND)
    return Tuple(n, degree(_polynomial(e), P[n - 1]))


def m1(v, p):
    """Reads the degree off the equation as printed, before clearing radicals or fractions:
    the highest exponent written directly on the highest derivative (1 where it stands bare)."""
    e = _eq(v)
    n = _order(e)
    if _deriv_in_func(e) or not _radical_or_fraction(e):
        raise ValueError("no radical or fraction to clear (or degree not defined)")
    s = P[n - 1]
    pows = [a for a in e.atoms(Pow) if a.base == s]
    exps = [a.exp for a in pows]
    if e.xreplace({a: 0 for a in pows}).has(s):
        exps.append(1)
    return Tuple(n, max(exps))


def m2(v, p):
    """Takes the highest power of y or of any derivative, not of the highest-order derivative."""
    e = _eq(v)
    n = _order(e)
    if _deriv_in_func(e):
        raise ValueError("degree not defined")
    poly = _polynomial(e)
    return Tuple(n, max(degree(poly, s) for s in [q for q in e.free_symbols if q.name == "y"] + [P[k - 1] for k in _derivs(e)]))


def m3(v, p):
    """Ignores a derivative inside sin, cos, e^, log and reads the degree from the rest."""
    e = _eq(v)
    n = _order(e)
    if not _deriv_in_func(e):
        raise ValueError("no derivative inside a function")
    rest = e.xreplace({f: 0 for f in _funcs(e) if _has_p(f)})
    if not rest.has(P[n - 1]):
        raise ValueError("highest derivative only inside the function")
    return Tuple(n, degree(_polynomial(rest), P[n - 1]))


def m4(v, p):
    """Swaps the two: gives the degree as the order and the order as the degree."""
    o, d = key(v, p)
    return Tuple(d, o)


def m5(v, p):
    """Thinks that when the degree is not defined, the order is not defined either."""
    e = _eq(v)
    if not _deriv_in_func(e):
        raise ValueError("the degree is defined here")
    return Tuple(ND, ND)


def m6(v, p):
    """Calls the degree not defined because sin, cos, e^ or log appears anywhere (even of x alone)."""
    e = _eq(v)
    n = _order(e)
    if not _funcs(e) or _deriv_in_func(e):
        raise ValueError("needs a function of x only")
    return Tuple(n, ND)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
