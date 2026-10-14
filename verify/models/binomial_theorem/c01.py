"""C01 Expanding (a + b)^n: answer models (the key, and one per misconception).

Inputs (sympy): a, b = the two terms of the bracket (e.g. a = 2*x, b = -1/x), n = the index.
params["ask"]:
  full  - the whole expansion
  first - the sum of the first params["k"] terms (powers of a falling)
  last  - the last term
  coeff - the coefficient of params["of"] (a list of monomials; their coefficients are added)
"""
from math import comb, perm

from sympy import Abs, Integer, expand, simplify, sympify


def _syms(v):
    return {s.name: s for s in (v["a"] + v["b"]).free_symbols}


def _answer(terms, v, p):
    """Turn a list of terms T_1, T_2, ... (in the order written) into what the item asks."""
    ask = p["ask"]
    if ask == "full":
        return expand(sum(terms))
    if ask == "first":
        return expand(sum(terms[: int(p["k"])]))
    if ask == "last":
        return expand(terms[-1])
    if ask == "coeff":
        e, syms = expand(sum(terms)), _syms(v)
        return sum((e.coeff(sympify(m, locals=syms)) for m in p["of"]), Integer(0))
    raise ValueError(f"unknown ask {ask}")


def _ordered_terms(v):
    """The true expansion multiplied out by sympy, its terms put in the order of the
    falling power of a's variable (never via the nCr formula)."""
    a, b, n = v["a"], v["b"], int(v["n"])
    terms = expand((a + b) ** n).as_ordered_terms()
    syms = (a + b).free_symbols
    if len(syms) != 1:
        raise ValueError("ordering the terms needs exactly one variable")
    (x,) = syms
    ea = a.as_coeff_exponent(x)[1] if a.has(x) else 0
    eb = b.as_coeff_exponent(x)[1] if b.has(x) else 0
    sign = -1 if ea > eb else 1  # a's power of x falls along the expansion
    return sorted(terms, key=lambda t: sign * t.as_coeff_exponent(x)[1])


def key(v, p):
    """Straight from multiplying (a + b)^n out."""
    if p["ask"] in ("full", "coeff"):
        return _answer([expand((v["a"] + v["b"]) ** int(v["n"]))], v, p)
    return _answer(_ordered_terms(v), v, p)


def _terms(v, coef=comb, power=None, rmax=None):
    """T_{r+1} = coef(n, r) a^(n-r) b^r for r = 0..rmax, with a student's power rule."""
    a, b, n = v["a"], v["b"], int(v["n"])
    pw = power or (lambda base, k: base**k)
    top = n if rmax is None else rmax
    return [coef(n, r) * pw(a, n - r) * pw(b, r) for r in range(top + 1)]


def _unraised(base, k):
    """(c*m)^k taken as c*m^k: only the variable is raised, the number in front is not
    (its sign still alternates). A bracket with no variable is raised correctly."""
    if k == 0:
        return Integer(1)
    c, m = base.as_coeff_Mul()
    if not m.free_symbols:
        return base**k
    s = 1 if c > 0 else -1
    return s**k * Abs(c) * m**k


def m1(v, p):
    """Raises only the variable: (2x)^3 = 2x^3."""
    return _answer(_terms(v, power=_unraised), v, p)


def m2(v, p):
    """Ignores the minus sign of b: every term of (a - b)^n taken as +."""
    if not v["b"].could_extract_minus_sign():
        raise ValueError("b has no minus sign to drop")
    return _answer(_terms(dict(v, b=-v["b"])), v, p)


def m3(v, p):
    """Thinks (a + b)^n has n terms: stops at r = n - 1 and drops the last term b^n."""
    return _answer(_terms(v, rmax=int(v["n"]) - 1), v, p)


def m4(v, p):
    """(a + b)^n = a^n + b^n: raises each term and adds."""
    a, b, n = v["a"], v["b"], int(v["n"])
    return _answer([a**n, b**n], v, p)


def m5(v, p):
    """Uses nPr (arrangements) as the coefficients instead of nCr."""
    return _answer(_terms(v, coef=perm), v, p)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
