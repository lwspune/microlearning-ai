"""C04 The term independent of x: answer models (the key, and one per misconception).

Inputs (sympy): the expansion (a x^p + b x^q)^n, with a, b the constants (b carries the sign),
p, q the powers of x (p > 0 > q) and n the index. params["ask"]: value (the constant term,
the default) | position (its place, k for T_k).
"""
from sympy import Abs, Integer, Symbol, binomial, expand

_X = Symbol("x", positive=True)
_A, _B = Symbol("A"), Symbol("B")


def _ask(p):
    return p.get("ask", "value")


def _r(v):
    """The r with (x^p)^(n-r) (x^q)^r = x^0, as a student solving p(n - r) + q r = 0 finds it."""
    a_p, q, n = v["p"], v["q"], v["n"]
    r = a_p * n / (a_p - q)
    if not (r.is_integer and 0 <= r <= n):
        raise ValueError("no term independent of x")
    return Integer(r)


def _coef(v, r):
    """The constant part of T_{r+1} = nCr (a x^p)^(n-r) (b x^q)^r."""
    return binomial(v["n"], r) * v["a"] ** (v["n"] - r) * v["b"] ** r


def key(v, p):
    """From the definition: expand (A + B)^n in rising powers of B (term k carries B^(k-1)),
    put A = a x^p, B = b x^q, and pick the term with no x."""
    n = int(v["n"])
    terms = expand((_A + _B) ** n).as_coefficients_dict()
    found = []
    for mono, c in terms.items():
        k = Integer(mono.as_powers_dict().get(_B, 0)) + 1
        t = expand(c * mono.subs({_A: v["a"] * _X ** v["p"], _B: v["b"] * _X ** v["q"]}))
        if not t.has(_X):
            found.append((k, t))
    if len(found) != 1:
        raise ValueError("no single term independent of x")
    k, t = found[0]
    return k if _ask(p) == "position" else t


def m1(v, p):
    """The constant term is just nCr: the constants of a and b, raised to their powers, are left out."""
    if _ask(p) != "value":
        raise ValueError("a value mistake")
    return binomial(v["n"], _r(v))


def m2(v, p):
    """Drops the minus sign of the second term: works with |b|, so (-b)^r turns positive."""
    if _ask(p) != "value":
        raise ValueError("a value mistake")
    return _coef({**v, "b": Abs(v["b"])}, _r(v))


def m3(v, p):
    """Takes the r found from the power of x as the term number: answers T_r, and works out
    T_r's coefficient (nC(r-1) a^(n-r+1) b^(r-1)) as the constant term."""
    r = _r(v)
    if _ask(p) == "position":
        return r
    if r == 0:
        raise ValueError("no T_0")
    return _coef(v, r - 1)


def m4(v, p):
    """Swaps the powers in the general term (nCr a^r b^(n-r)), so the r it finds counts from the
    other end: the place is n - r + 1. The value comes out the same."""
    if _ask(p) != "position":
        raise ValueError("the value is unchanged")
    return v["n"] - _r(v) + 1


def m5(v, p):
    """Raises only x to the power, not the constants: (a x^p)^(n-r) taken as a x^(p(n-r)),
    so the constant term comes out as nCr * a * b."""
    if _ask(p) != "value":
        raise ValueError("a value mistake")
    return binomial(v["n"], _r(v)) * v["a"] * v["b"]


def m6(v, p):
    """The constant term is the middle term, as in (x + 1/x)^n: answers T_(n/2 + 1)."""
    if _ask(p) != "position":
        raise ValueError("a position mistake")
    if v["n"] % 2:
        raise ValueError("n odd: two middle terms")
    return v["n"] / 2 + 1


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
