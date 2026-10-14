"""C02 The general term: answer models (the key, and one per misconception).

Inputs a, b (the two terms of the binomial, b with its sign), n, k.
params["ask"]:
  term   the kth term from the start.
  end    the kth term from the end.
  coef   the numerical coefficient of the kth term from the start (a one-variable term c*x^m).
"""
from sympy import Poly, Symbol, binomial, expand

_A, _B = Symbol("A"), Symbol("B")


def _r(v, p):
    """The correct r: the term is T_{r+1}."""
    n, k = int(v["n"]), int(v["k"])
    if not 1 <= k <= n + 1:
        raise ValueError("there are only n + 1 terms")
    return k - 1 if p["ask"] in ("term", "coef") else n - k + 1


def _out(term, p):
    if p["ask"] == "coef":
        return term.as_coeff_Mul()[0]
    return term


def _general(v, r, a=None, b=None):
    a = v["a"] if a is None else a
    b = v["b"] if b is None else b
    n = int(v["n"])
    if not 0 <= r <= n:
        raise ValueError("no such term")
    return expand(binomial(n, r) * a ** (n - r) * b**r)


def key(v, p):
    """From the definition: multiply out (A + B)^n, write the terms in falling powers of A,
    count along the list (from the end when asked), then put a and b in."""
    n, k = int(v["n"]), int(v["k"])
    terms = sorted(Poly(expand((_A + _B) ** n), _A, _B).terms(), key=lambda t: -t[0][0])
    if not 1 <= k <= len(terms):
        raise ValueError("there are only n + 1 terms")
    if p["ask"] == "end":
        terms = terms[::-1]
    (i, j), c = terms[k - 1]
    return _out(expand(c * v["a"] ** i * v["b"] ** j), p)


def m1(v, p):
    """Takes r as the term's number: the kth term as nC_k a^(n-k) b^k (one term too far)."""
    return _out(_general(v, _r(v, p) + 1), p)


def m2(v, p):
    """Drops the minus sign of b: works with (a + b)^n instead of (a - b)^n."""
    if not v["b"].could_extract_minus_sign():
        raise ValueError("b has no minus sign")
    return _out(_general(v, _r(v, p), b=-v["b"]), p)


def m3(v, p):
    """Swaps the powers: nC_r a^r b^(n-r)."""
    n, r = int(v["n"]), _r(v, p)
    return _out(expand(binomial(n, r) * v["a"] ** r * v["b"] ** (n - r)), p)


def m4(v, p):
    """Raises only the variable part of a and b, not their numbers: (2x^2)^4 = 2x^8."""
    n, r = int(v["n"]), _r(v, p)
    ca, xa = v["a"].as_coeff_Mul()
    cb, xb = v["b"].as_coeff_Mul()
    if (ca in (1, -1) or n - r in (0, 1)) and (cb in (1, -1) or r in (0, 1)):
        raise ValueError("no number to raise")
    return _out(expand(binomial(n, r) * ca * xa ** (n - r) * cb * xb**r), p)


def m5(v, p):
    """The kth term from the end taken as the (n - k + 1)th from the start (one term short)."""
    if p["ask"] != "end":
        raise ValueError("only for a term from the end")
    return _general(v, _r(v, p) - 1)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
