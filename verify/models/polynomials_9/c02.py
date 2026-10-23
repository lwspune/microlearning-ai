"""C02 Standard and coefficient forms: answer models (the key, and one per misconception).

params["ask"] says what the item asks for:
  "coeff": the coefficient form of a polynomial. inputs["t"] is a Tuple of its terms in the
           order the question writes them (e.g. (3*m**5, -7*m, 5*m**3, 2)); the answer is a Tuple.
  "index": the polynomial (index form) of a coefficient form. inputs["c"] is the Tuple of
           coefficients; params["var"] names the variable; the answer is an expression.
  "first": the first term of the standard form. inputs["t"] as for "coeff"; the answer is a term.
"""
from sympy import Integer, Poly, Symbol, Tuple


def _var(v, p):
    if "t" in v:
        syms = set().union(*(getattr(term, "free_symbols", set()) for term in v["t"]))
        if len(syms) != 1:
            raise ValueError("one variable only")
        return syms.pop()
    name = p["var"]
    return Symbol(name, real=True) if name in ("x", "y") else Symbol(name)


def _terms(v):
    return list(v["t"])


def _power(term, x):
    return Poly(term, x).degree()


def _coeff(term, x):
    return Poly(term, x).LC()


def _all_coeffs(v, p):
    """Every coefficient from the highest power down to the constant, 0 for a missing power."""
    x = _var(v, p)
    poly = Poly(sum(_terms(v)), x)
    n = poly.degree()
    return [poly.coeff_monomial(x**k) for k in range(n, -1, -1)]


def _build(coeffs, x, top):
    """coeffs[0] x^top + coeffs[1] x^(top-1) + ..."""
    return sum((Integer(c) if isinstance(c, int) else c) * x ** (top - i) for i, c in enumerate(coeffs))


def key(v, p):
    ask = p["ask"]
    x = _var(v, p)
    if ask == "coeff":
        return Tuple(*_all_coeffs(v, p))
    if ask == "index":
        c = list(v["c"])
        return _build(c, x, len(c) - 1)
    if ask == "first":
        return max(_terms(v), key=lambda t: _power(t, x))
    raise ValueError(ask)


def m1(v, p):
    """Skips the missing powers: zeros don't hold a place."""
    ask = p["ask"]
    x = _var(v, p)
    if ask == "coeff":
        c = _all_coeffs(v, p)
        if 0 not in c:
            raise ValueError("no missing power")
        return Tuple(*[a for a in c if a != 0])
    if ask == "index":
        c = [a for a in v["c"] if a != 0]
        if len(c) == len(v["c"]):
            raise ValueError("no zero coefficient")
        return _build(c, x, len(c) - 1)
    raise ValueError("coefficient forms only")


def m2(v, p):
    """Writes the powers in ascending order: constant first."""
    ask = p["ask"]
    x = _var(v, p)
    if ask == "coeff":
        return Tuple(*reversed(_all_coeffs(v, p)))
    if ask == "index":
        return sum(c * x**i for i, c in enumerate(v["c"]))
    if ask == "first":
        return min(_terms(v), key=lambda t: _power(t, x))
    raise ValueError(ask)


def m3(v, p):
    """Keeps the terms in the order the question writes them (no sorting, no zeros)."""
    ask = p["ask"]
    x = _var(v, p)
    t = _terms(v) if "t" in v else None
    if t is None:
        raise ValueError("needs a written polynomial")
    if [_power(a, x) for a in t] == sorted((_power(a, x) for a in t), reverse=True):
        raise ValueError("already in standard form")
    if ask == "coeff":
        return Tuple(*[_coeff(a, x) for a in t])
    if ask == "first":
        return t[0]
    raise ValueError(ask)


def m4(v, p):
    """Thinks the list has no place for the constant term: n entries means degree n."""
    ask = p["ask"]
    x = _var(v, p)
    if ask == "coeff":
        return Tuple(*_all_coeffs(v, p)[:-1])
    if ask == "index":
        c = list(v["c"])
        return _build(c, x, len(c))
    raise ValueError("coefficient forms only")


def m5(v, p):
    """Reads 'descending order' as descending coefficients: puts the biggest coefficient first."""
    if p["ask"] != "first":
        raise ValueError("first term only")
    x = _var(v, p)
    t = _terms(v)
    cs = sorted((_coeff(a, x) for a in t), reverse=True)
    if cs[0] == cs[1]:
        raise ValueError("tie for the biggest coefficient")
    return max(t, key=lambda a: _coeff(a, x))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
