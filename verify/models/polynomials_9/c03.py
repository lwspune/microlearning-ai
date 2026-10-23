"""C03 Adding and subtracting polynomials: answer models (the key, and one per misconception).

A question is a signed list of polynomials, each written term by term in the book's order:
  polys: "t,t,...|t,t,...|..."  (sympy terms; x and y are real symbols, other letters plain)
  signs: "+-+"                  (one sign per polynomial; the first is always "+")
so (x^2 - 9x + sqrt3) - (-19x + sqrt3 + 7x^2) is polys="x**2,-9*x,sqrt(3)|-19*x,sqrt(3),7*x**2", signs="+-".
"""
from sympy import Integer, Symbol, expand, sympify, Mul

_LOC = {"x": Symbol("x", real=True), "y": Symbol("y", real=True)}


def _polys(p):
    """[(sign, [term, ...]), ...] with each term a sympy expression."""
    ps = [[sympify(t, locals=_LOC) for t in poly.split(",")] for poly in p["polys"].split("|")]
    signs = [1 if s == "+" else -1 for s in p["signs"]]
    assert len(signs) == len(ps) and signs[0] == 1, "one sign per polynomial, the first +"
    return list(zip(signs, ps))


def _has_minus(p):
    if "-" not in p["signs"]:
        raise ValueError("no polynomial is subtracted")


def _split(term):
    """term = coefficient * monomial: (coefficient, monomial), numbers and surds in the coefficient."""
    c, m = term.as_coeff_Mul()
    num = [f for f in Mul.make_args(m) if not f.free_symbols]
    var = [f for f in Mul.make_args(m) if f.free_symbols]
    return c * Mul(*num), Mul(*var)


def _signed_terms(p):
    """Every term after the brackets are removed correctly."""
    return [s * t for s, ts in _polys(p) for t in ts]


def key(v, p):
    """Straight from the definition: the signed sum of the polynomials, expanded."""
    return expand(sum((s * sum(ts) for s, ts in _polys(p)), Integer(0)))


def m1(v, p):
    """Changes the sign of only the first term of a subtracted polynomial."""
    _has_minus(p)
    out = Integer(0)
    for s, ts in _polys(p):
        out += s * ts[0] + sum(ts[1:], Integer(0))
    return expand(out)


def m2(v, p):
    """Subtracts in the wrong order: 'subtract A from B' worked as A - B, so the answer's every sign flips."""
    _has_minus(p)
    if len(p["signs"]) != 2:
        raise ValueError("modelled for one polynomial minus another")
    return -key(v, p)


def m3(v, p):
    """Treats terms with the same letters as like terms whatever their powers: adds all their coefficients
    and keeps the first such term's letters and powers (2x^2 + 3x = 5x^2, 3a^2b + 2ab^2 = 5a^2b)."""
    groups, order = {}, []
    for t in _signed_terms(p):
        c, m = _split(t)
        k = frozenset(m.free_symbols)
        if k not in groups:
            groups[k] = [Integer(0), m]
            order.append(k)
        groups[k][0] += c
    out = expand(sum((groups[k][0] * groups[k][1] for k in order), Integer(0)))
    if expand(out - key(v, p)) == 0:
        raise ValueError("no unlike terms share their letters: this gives the key")
    return out


def m4(v, p):
    """Adds the powers too when adding like terms: 2x^2 + 3x^2 = 5x^4 (n like terms: every power times n)."""
    groups, order = {}, []
    for t in _signed_terms(p):
        c, m = _split(t)
        if m not in groups:
            groups[m] = [Integer(0), 0]
            order.append(m)
        groups[m][0] += c
        groups[m][1] += 1
    out = expand(sum((groups[m][0] * m ** groups[m][1] for m in order), Integer(0)))
    if expand(out - key(v, p)) == 0:
        raise ValueError("no two like terms with letters: this gives the key")
    return out


def m5(v, p):
    """Adds where it should subtract: ignores the minus sign in front of a bracket."""
    _has_minus(p)
    return expand(sum((sum(ts) for _, ts in _polys(p)), Integer(0)))


def m6(v, p):
    """Writes down only the terms that combine: drops a term that has no like term in another polynomial."""
    count = {}
    for t in _signed_terms(p):
        m = _split(t)[1]
        count[m] = count.get(m, 0) + 1
    out = expand(sum((t for t in _signed_terms(p) if count[_split(t)[1]] > 1), Integer(0)))
    if expand(out - key(v, p)) == 0:
        raise ValueError("every term has a like term: this gives the key")
    return out


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
