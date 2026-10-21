"""C05 Value of a determinant: answer models (the key, and one per misconception).

Inputs (sympy): A = a 2 x 2 Matrix, entries numbers (fractions, surds) or one unknown m;
k = the value the determinant equals (find-m items only).
params["ask"]: value (the determinant, default) | m (the m that makes the determinant equal k).
"""
from sympy import Abs, Pow, Rational, Symbol, expand, solve


def _answer(v, p, d):
    """The value d, or, for a find-m item, the one m with d = k."""
    if p.get("ask", "value") == "value":
        return expand(d)
    (m,) = v["A"].free_symbols
    roots = solve(expand(d - v["k"]), m)
    if len(roots) != 1:
        raise ValueError(f"not one value of m: {roots}")
    return roots[0]


def key(v, p):
    """From the definition (sympy's own determinant)."""
    return _answer(v, p, v["A"].det())


def m1(v, p):
    """Up diagonal first: bc - ad."""
    (a, b), (c, d) = v["A"].tolist()
    return _answer(v, p, b * c - a * d)


def m2(v, p):
    """Adds the two products: ad + bc."""
    (a, b), (c, d) = v["A"].tolist()
    return _answer(v, p, a * d + b * c)


def m3(v, p):
    """Multiplies along the rows: ab - cd."""
    (a, b), (c, d) = v["A"].tolist()
    return _answer(v, p, a * b - c * d)


def m4(v, p):
    """Takes sqrt(n) x sqrt(n) = sqrt(n), so 2 sqrt(3) x 3 sqrt(3) = 6 sqrt(3)."""
    A = v["A"]
    roots = {r for r in A.atoms(Pow) if r.exp == Rational(1, 2)}
    if len(roots) != 1:
        raise ValueError("needs exactly one kind of surd in the entries")
    (r,) = roots
    j = Symbol("j_surd")
    d = expand(A.subs(r, j).det()).subs(j**2, j)
    if not d.has(j):
        raise ValueError("no surd times surd")
    return _answer(v, p, d.subs(j, r))


def m5(v, p):
    """Drops the minus sign of every negative entry, then works out ad - bc."""
    A = v["A"]
    if not any(e.is_number and e < 0 for e in A):
        raise ValueError("no negative entry")
    return _answer(v, p, A.applyfunc(lambda e: Abs(e) if e.is_number else e).det())


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
