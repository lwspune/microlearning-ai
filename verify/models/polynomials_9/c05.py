"""C05 Dividing polynomials: answer models (the key, and one per misconception).

Every polynomial is in one variable, x. params["ask"] says what the item asks for:
  "q", "r", "qr": divide inputs["D"] by inputs["d"]; the quotient, the remainder, or Tuple(q, r).
  "rem":      inputs D, d and q are given; the remainder from Dividend = Divisor x Quotient + Remainder.
  "dividend": inputs d, q and r are given; the dividend from the same relation.
"""
from sympy import LT, Integer, Poly, Symbol, Tuple, div, expand


def _x(v):
    """The variable: the x the inputs were parsed with (real in the verifier, plain in the drafter)."""
    syms = set().union(*(e.free_symbols for e in v.values()))
    return syms.pop() if len(syms) == 1 else Symbol("x", real=True)


def _answer(q, r, p):
    q, r = expand(q), expand(r)
    ask = p["ask"]
    if ask == "q":
        return q
    if ask == "r":
        return r
    if ask == "qr":
        return Tuple(q, r)
    raise ValueError(ask)


def _divide(D, d, p, x):
    q, r = div(expand(D), expand(d), x)
    return _answer(q, r, p)


def _is_division(p):
    return p["ask"] in ("q", "r", "qr")


def key(v, p):
    ask = p["ask"]
    if _is_division(p):
        return _divide(v["D"], v["d"], p, _x(v))
    if ask == "rem":
        return expand(v["D"] - v["d"] * v["q"])
    if ask == "dividend":
        return expand(v["d"] * v["q"] + v["r"])
    raise ValueError(ask)


def m1(v, p):
    """Subtracting a polynomial, changes the sign of its first term only and adds the rest.

    In long division this happens at every step, which is the same as dividing by the
    divisor with the signs of its lower terms flipped."""
    x = _x(v)
    ask = p["ask"]
    if _is_division(p):
        d = expand(v["d"])
        lead = LT(d, x)
        if d == lead:
            raise ValueError("a one-term divisor has nothing to mis-sign")
        return _divide(v["D"], lead - (d - lead), p, x)
    if ask == "rem":
        P = expand(v["d"] * v["q"])
        lead = LT(P, x)
        return expand(v["D"] - lead + (P - lead))
    raise ValueError("needs a subtraction")


def m2(v, p):
    """Stops after one step of the division, though the remainder's degree is not yet below the divisor's."""
    x = _x(v)
    if not _is_division(p):
        raise ValueError("division only")
    D, d = expand(v["D"]), expand(v["d"])
    t = LT(D, x) / LT(d, x)
    r = expand(D - t * d)
    if Poly(r, x).degree() < Poly(d, x).degree():
        raise ValueError("one step finishes this division")
    return _answer(t, r, p)


def m3(v, p):
    """Multiplies a quotient term by the first term of the divisor only (forgets its other terms)."""
    x = _x(v)
    ask = p["ask"]
    if _is_division(p):
        return _divide(v["D"], LT(expand(v["d"]), x), p, x)
    lead = LT(expand(v["d"]), x)
    if ask == "rem":
        return expand(v["D"] - lead * v["q"])
    if ask == "dividend":
        return expand(lead * v["q"] + v["r"])
    raise ValueError(ask)


def m4(v, p):
    """Leaves no place (0 term) for a missing power, so later terms slide one column up."""
    x = _x(v)
    if not _is_division(p):
        raise ValueError("division only")
    poly = Poly(expand(v["D"]), x)
    n = poly.degree()
    cs = [poly.coeff_monomial(x**k) for k in range(n, -1, -1)]
    packed = [c for c in cs if c != 0]
    if len(packed) == len(cs):
        raise ValueError("no missing power")
    D2 = sum(c * x ** (n - i) for i, c in enumerate(packed))
    return _divide(D2, v["d"], p, x)


def m5(v, p):
    """Takes the relation the wrong way round: Remainder = Divisor x Quotient - Dividend,
    so Dividend = Divisor x Quotient - Remainder."""
    ask = p["ask"]
    if ask == "rem":
        return expand(v["d"] * v["q"] - v["D"])
    if ask == "dividend":
        return expand(v["d"] * v["q"] - v["r"])
    raise ValueError("relation items only")


def m6(v, p):
    """Leaves out the remainder: Dividend = Divisor x Quotient (so a missing remainder is 0)."""
    if p["ask"] == "rem":
        return Integer(0)
    if p["ask"] != "dividend":
        raise ValueError("relation items only")
    return expand(v["d"] * v["q"])


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
