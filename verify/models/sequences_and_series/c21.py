"""C21 A.P. in daily life: answer models (the key, and one per misconception).

params["ask"]:
  term   inputs a, d and n, or y0, y1 (the first and last year / day)  -> t_n, that one year's amount
  sum    inputs a, d and n, or y0, y1                                  -> S_n, the total up to then
  si     inputs P, R, N   -> the simple interest after N years (the interest amounts after 1, 2, 3, ... years)
  first  inputs P, I, n, c -> the first of n instalments, each c less than the one before, that repay P + I
  last   inputs P, I, n, c -> the last of those instalments
"""
from sympy import Integer, Symbol, solve

_A = Symbol("A")


def _n(v):
    """The number of terms: given, or counted from the first to the last year, both ends included."""
    if "n" in v:
        return int(v["n"])
    return int(v["y1"] - v["y0"]) + 1


def _gap(v):
    """The years between the first and the last, which misses one end."""
    if "y0" not in v:
        raise ValueError("no years to count in this item")
    return int(v["y1"] - v["y0"])


def _terms(a, d, n):
    """The first n terms a, a + d, ..., written out one by one."""
    return [a + i * d for i in range(int(n))]


def _si(v, years):
    return v["P"] * v["R"] * years / 100


def _plan(v, d, total):
    """The first instalment A when n instalments A, A + d, ... add up to total, written out term by term."""
    (a,) = solve(sum(_terms(_A, d, v["n"]), Integer(0)) - total, _A)
    return a


def key(v, p):
    """Write the terms out and read off the one asked for, or add them."""
    ask = p["ask"]
    if ask == "term":
        return _terms(v["a"], v["d"], _n(v))[-1]
    if ask == "sum":
        return sum(_terms(v["a"], v["d"], _n(v)), Integer(0))
    if ask == "si":
        return _si(v, v["N"])
    if ask in ("first", "last"):
        a = _plan(v, -v["c"], v["P"] + v["I"])
        return a if ask == "first" else _terms(a, -v["c"], v["n"])[-1]
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Mixes up one term with the total: adds up when one term is asked, gives t_n when the total is asked."""
    ask = p["ask"]
    if ask == "term":
        return sum(_terms(v["a"], v["d"], _n(v)), Integer(0))
    if ask == "sum":
        return _terms(v["a"], v["d"], _n(v))[-1]
    if ask == "si":  # adds the interest after 1, 2, ..., N years
        return sum((_si(v, k) for k in range(1, int(v["N"]) + 1)), Integer(0))
    raise ValueError("no single term or total to swap here")


def m2(v, p):
    """Counts the gap between the first and last year (2020 - 2010 = 10), one term short."""
    n = _gap(v)
    if p["ask"] == "term":
        return v["a"] + (n - 1) * v["d"]
    if p["ask"] == "sum":
        return sum(_terms(v["a"], v["d"], n), Integer(0))
    raise ValueError("no years to count in this item")


def m3(v, p):
    """Uses n where n - 1 belongs: t_n = a + nd and S_n = n/2[2a + nd]."""
    ask = p["ask"]
    if ask in ("term", "sum"):
        a, d, n = v["a"], v["d"], _n(v)
        return a + n * d if ask == "term" else Integer(n) / 2 * (2 * a + n * d)
    if ask == "si":  # a = d = one year's interest, then a + Nd
        return _si(v, 1) + v["N"] * _si(v, 1)
    if ask in ("first", "last"):
        n, d = v["n"], -v["c"]
        (a,) = solve(n / 2 * (2 * _A + n * d) - (v["P"] + v["I"]), _A)
        return a if ask == "first" else a + n * d
    raise ValueError(f"no ask {ask}")


def m4(v, p):
    """Mixes up principal and interest: repays only the sum borrowed, or adds the principal to the interest asked."""
    ask = p["ask"]
    if ask == "si":
        return v["P"] + _si(v, v["N"])
    if ask in ("first", "last"):
        a = _plan(v, -v["c"], v["P"])
        return a if ask == "first" else _terms(a, -v["c"], v["n"])[-1]
    raise ValueError("no loan or interest in this item")


def m5(v, p):
    """Takes d = +c for instalments that go down by c each time."""
    ask = p["ask"]
    if ask in ("first", "last"):
        a = _plan(v, v["c"], v["P"] + v["I"])
        return a if ask == "first" else _terms(a, v["c"], v["n"])[-1]
    raise ValueError("no decreasing payments in this item")


def m6(v, p):
    """Forgets to halve: S_n = n[2a + (n - 1)d]."""
    ask = p["ask"]
    if ask == "sum":
        a, d, n = v["a"], v["d"], _n(v)
        return n * (2 * a + (n - 1) * d)
    if ask in ("first", "last"):
        n, d = v["n"], -v["c"]
        (a,) = solve(n * (2 * _A + (n - 1) * d) - (v["P"] + v["I"]), _A)
        return a if ask == "first" else a + (n - 1) * d
    raise ValueError("no sum formula in this item")


MODELS = {"key": key, "C21-M1": m1, "C21-M2": m2, "C21-M3": m3, "C21-M4": m4, "C21-M5": m5, "C21-M6": m6}
