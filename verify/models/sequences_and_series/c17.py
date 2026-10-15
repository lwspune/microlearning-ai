"""C17 Sum of n terms of an A.P.: answer models (the key, and one per misconception).

params["ask"]:
  sum   inputs a, d, n        -> S_n
  sumal inputs a, l, d        -> the sum a + (a + d) + ... + l (the number of terms is counted first)
  mult  inputs k, lo, hi      -> the sum of the multiples of k from lo to hi
  d     inputs a, n, S        -> the common difference d, given S_n = S
  tk    inputs S, n, k        -> the kth term of the A.P. whose S_n is the expression S in the symbol n
"""
from sympy import Integer, Symbol, solve, simplify

_D = Symbol("D")


def _terms(a, d, n):
    """The first n terms a, a + d, ..., written out one by one."""
    return [a + i * d for i in range(int(n))]


def _run(a, l, d):
    """The terms a, a + d, ... up to l, stepped one by one; l must be one of them."""
    terms, t = [], a
    while (t - l) * d <= 0:
        terms.append(t)
        if t == l:
            return terms
        t += d
    raise ValueError(f"{l} is not a term of the A.P. starting {a} with d = {d}")


def _ald(v, p):
    """First term, last term, step and the true number of terms for the last-term asks."""
    if p["ask"] == "sumal":
        a, l, d = v["a"], v["l"], v["d"]
    elif p["ask"] == "mult":
        k = int(v["k"])
        ms = [x for x in range(int(v["lo"]), int(v["hi"]) + 1) if x % k == 0]
        a, l, d = Integer(ms[0]), Integer(ms[-1]), Integer(k)
    else:
        raise ValueError("no last term in this ask")
    return a, l, d, Integer(len(_run(a, l, d)))


def _S(v, m):
    return v["S"].subs(v["n"], m)


def key(v, p):
    """Add the terms one by one; for d, solve that term-by-term sum; for t_k, rebuild the A.P. from S_1, S_2."""
    ask = p["ask"]
    if ask == "sum":
        return sum(_terms(v["a"], v["d"], v["n"]), Integer(0))
    if ask == "sumal":
        return sum(_run(v["a"], v["l"], v["d"]), Integer(0))
    if ask == "mult":
        k = int(v["k"])
        return Integer(sum(x for x in range(int(v["lo"]), int(v["hi"]) + 1) if x % k == 0))
    if ask == "d":
        (d,) = solve(sum(_terms(v["a"], _D, v["n"]), Integer(0)) - v["S"], _D)
        return d
    if ask == "tk":
        a = _S(v, 1)
        d = _S(v, 2) - 2 * a
        for m in range(1, 7):  # S must really be the running total of this A.P.
            assert simplify(sum(_terms(a, d, m), Integer(0)) - _S(v, m)) == 0, "S_n is not an A.P.'s sum"
        return a + (v["k"] - 1) * d
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Takes the sum S_n to be the nth term t_n = a + (n - 1)d (and t_k to be S_k)."""
    ask = p["ask"]
    if ask == "sum":
        return v["a"] + (v["n"] - 1) * v["d"]
    if ask == "d":  # a + (n - 1)d = S
        return (v["S"] - v["a"]) / (v["n"] - 1)
    if ask == "tk":
        return _S(v, v["k"])
    raise ValueError("the last term is given, so this answer is not a plausible option")


def m2(v, p):
    """Forgets to halve: the n pairs of the forwards and backwards rows make S_n = n(a + l) = n[2a + (n - 1)d]."""
    ask = p["ask"]
    if ask == "sum":
        a, d, n = v["a"], v["d"], v["n"]
        return n * (2 * a + (n - 1) * d)
    if ask in ("sumal", "mult"):
        a, l, d, n = _ald(v, p)
        return n * (a + l)
    if ask == "d":  # n[2a + (n - 1)d] = S
        a, n = v["a"], v["n"]
        return (v["S"] / n - 2 * a) / (n - 1)
    raise ValueError(f"no S_n formula in ask {ask}")


def m3(v, p):
    """Counts the terms from a to l as (l - a)/d, missing the first one, then uses S = n/2 (a + l)."""
    a, l, d, _ = _ald(v, p)
    n = (l - a) / d
    return n / 2 * (a + l)


def m4(v, p):
    """Drops the 2 on a: S_n = n/2 [a + (n - 1)d], which is n/2 times the last term alone."""
    ask = p["ask"]
    if ask == "sum":
        a, d, n = v["a"], v["d"], v["n"]
        return n / 2 * (a + (n - 1) * d)
    if ask in ("sumal", "mult"):
        a, l, d, n = _ald(v, p)
        return n / 2 * (a + (n - 1) * d)
    if ask == "d":  # n/2 [a + (n - 1)d] = S
        a, n = v["a"], v["n"]
        return (2 * v["S"] / n - a) / (n - 1)
    raise ValueError(f"no S_n formula in ask {ask}")


def m5(v, p):
    """Shares the sum out equally: t_k = S_k / k, which is the average of the first k terms."""
    if p["ask"] != "tk":
        raise ValueError("only for a term found from S_n")
    return _S(v, v["k"]) / v["k"]


def m6(v, p):
    """Subtracts the wrong pair of sums: t_k = S_(k+1) - S_k, which is the next term."""
    if p["ask"] != "tk":
        raise ValueError("only for a term found from S_n")
    return _S(v, v["k"] + 1) - _S(v, v["k"])


MODELS = {"key": key, "C17-M1": m1, "C17-M2": m2, "C17-M3": m3, "C17-M4": m4, "C17-M5": m5, "C17-M6": m6}
