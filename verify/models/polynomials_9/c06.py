"""C06 Synthetic division: answer models (the key, and one per misconception).

inputs["t"]: a Tuple of the dividend's terms in the order the question writes them.
inputs["d"]: the divisor, x - a or x + a.
params["ask"]: "q" for the quotient, "r" for the remainder.
"""
from sympy import Poly, Tuple, div, expand


def _var(v):
    syms = set().union(*(term.free_symbols for term in v["t"])) | v["d"].free_symbols
    if len(syms) != 1:
        raise ValueError("one variable only")
    return syms.pop()


def _a(v):
    """The number used in synthetic division: the value of x that makes the divisor zero."""
    x = _var(v)
    d = Poly(v["d"], x)
    if d.degree() != 1 or d.LC() != 1:
        raise ValueError("divisor must be x - a")
    return -d.coeff_monomial(1)


def _coeffs(v):
    """The coefficient form: every power from the highest down, 0 for a missing one."""
    return Poly(sum(v["t"]), _var(v)).all_coeffs()


def _synth(c, a):
    row = [c[0]]
    for ci in c[1:]:
        row.append(ci + a * row[-1])
    return row


def _read(row, v, p):
    """Quotient from all but the last number (one degree lower), remainder the last."""
    x = _var(v)
    if p["ask"] == "r":
        return row[-1]
    if p["ask"] == "q":
        n = len(row) - 2
        return expand(sum(b * x ** (n - i) for i, b in enumerate(row[:-1])))
    raise ValueError(p["ask"])


def key(v, p):
    """Straight from long division (Dividend = Divisor x Quotient + Remainder)."""
    x = _var(v)
    q, r = div(Poly(sum(v["t"]), x), Poly(v["d"], x))
    if p["ask"] == "q":
        return q.as_expr()
    if p["ask"] == "r":
        return r.as_expr()
    raise ValueError(p["ask"])


def m1(v, p):
    """Uses the divisor's constant as it is: -5 for x - 5, 2 for x + 2."""
    a = _a(v)
    if a == 0:
        raise ValueError("a = 0")
    return _read(_synth(_coeffs(v), -a), v, p)


def m2(v, p):
    """Leaves out the 0 for a missing power in the coefficient form."""
    c = _coeffs(v)
    if 0 not in c:
        raise ValueError("no missing power")
    return _read(_synth([b for b in c if b != 0], _a(v)), v, p)


def m3(v, p):
    """Gives the quotient the dividend's degree: reads the bottom row one power too high."""
    if p["ask"] != "q":
        raise ValueError("quotient only")
    x = _var(v)
    row = _synth(_coeffs(v), _a(v))
    n = len(row) - 1
    return expand(sum(b * x ** (n - i) for i, b in enumerate(row[:-1])))


def m4(v, p):
    """Multiplies by the number in the top row (the coefficient) instead of the last number brought down."""
    c = _coeffs(v)
    a = _a(v)
    row = [c[0]] + [c[i] + a * c[i - 1] for i in range(1, len(c))]
    return _read(row, v, p)


def m5(v, p):
    """Writes the coefficients in the order the terms are written, zeros at the end for missing powers."""
    x = _var(v)
    t = list(v["t"])
    powers = [Poly(term, x).degree() for term in t]
    if powers == sorted(powers, reverse=True):
        raise ValueError("already in standard form")
    c = [Poly(term, x).LC() for term in t]
    c += [0] * (max(powers) + 1 - len(c))
    return _read(_synth(c, _a(v)), v, p)


def m6(v, p):
    """Takes the whole bottom row, remainder included, as the quotient."""
    if p["ask"] != "q":
        raise ValueError("quotient only")
    x = _var(v)
    row = _synth(_coeffs(v), _a(v))
    if row[-1] == 0:
        raise ValueError("remainder 0: same as C06-M3")
    n = len(row) - 1
    return expand(sum(b * x ** (n - i) for i, b in enumerate(row)))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
