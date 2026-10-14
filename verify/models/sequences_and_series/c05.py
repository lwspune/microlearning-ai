"""C05 Sums like 5 + 55 + 555: answer models (the key, and one per misconception).

Inputs: d = the repeated digit (1-9), n = the symbol n.
params["kind"]: "int" for d, dd, ddd, ... or "dec" for 0.d, 0.dd, 0.ddd, ...
params["ask"]: "sum" (S_n, the sum to n terms) or "term" (t_n, the nth term).
"""
from sympy import Rational, Sum, Symbol, simplify

_j, _k = Symbol("j", integer=True), Symbol("k", integer=True)


def _term(d, k, kind):
    """The kth term straight from its digits: d repeated k times, before or after the point."""
    if kind == "int":
        return Sum(d * 10**_j, (_j, 0, k - 1)).doit()
    return Sum(d * Rational(1, 10) ** _j, (_j, 1, k)).doit()


def key(v, p):
    """t_n from its digits, or S_n by adding those terms for k = 1..n."""
    d, n, kind = v["d"], v["n"], p["kind"]
    if p["ask"] == "term":
        return simplify(_term(d, n, kind))
    return simplify(Sum(_term(d, _k, kind), (_k, 1, n)).doit())


def _parts(v, p):
    """The split the concept teaches: t_k = (d/9)(10^k - 1) or (d/9)(1 - 10^-k)."""
    d, n = v["d"], v["n"]
    big = 10 * (10**n - 1) / 9  # 10 + 100 + ... + 10^n
    small = Rational(1, 9) * (1 - Rational(1, 10) ** n)  # 0.1 + 0.01 + ... + 0.1^n
    return d, n, big, small


def m1(v, p):
    """Takes d, dd, ddd, ... as a G.P. with r = t2/t1 = 11 and uses a(r^n - 1)/(r - 1)."""
    d, n = v["d"], v["n"]
    a = d if p["kind"] == "int" else d * Rational(1, 10)
    r = Rational(11) if p["kind"] == "int" else Rational(11, 10)
    if p["ask"] == "term":
        return a * r ** (n - 1)
    return simplify(a * (r**n - 1) / (r - 1))


def m2(v, p):
    """Sums the powers of 10 from the wrong first term: 10 + 100 + ... + 10^n as (10^n - 1)/9,
    or 0.1 + 0.01 + ... + 0.1^n as (1 - 0.1^n)/(1 - 0.1), i.e. a = 1 in both."""
    if p["ask"] != "sum":
        raise ValueError("no G.P. of powers to sum for t_n")
    d, n, big, small = _parts(v, p)
    if p["kind"] == "int":
        return Rational(1, 9) * d * ((10**n - 1) / 9 - n)
    return Rational(1, 9) * d * (n - 10 * small)


def m3(v, p):
    """Splits each term in two but keeps only one part: drops the -1s (the -n),
    or drops the decimal tails (taking 0.dd...d as d/9)."""
    d, n, big, small = _parts(v, p)
    if p["kind"] == "int":
        return d * 10**n / 9 if p["ask"] == "term" else d * big / 9
    return d / Rational(9) if p["ask"] == "term" else d * n / 9


def m4(v, p):
    """Mixes up t_n and S_n: gives the nth term when the sum is asked, and the sum when t_n is asked."""
    other = dict(p, ask="term" if p["ask"] == "sum" else "sum")
    return key(v, other)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4}
