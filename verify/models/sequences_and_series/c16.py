"""C16 A.P. and its nth term: answer models (the key, and one per misconception).

params["ask"]:
  d      the common difference from a, n and t_n. Inputs a, n, tn.
  which  the n with t_n = T. Inputs a, d, T.
  a2     the first term from two terms. Inputs p, tp, q, tq (t_p and t_q, p < q).
  term2  the nth term from two terms. Inputs p, tp, q, tq, n.
  end    the nth term from the end of a finite A.P. Inputs t1, t2 (the A.P. listed), l (its last term), n.
"""
from sympy import Integer, Symbol, solve

_x = Symbol("x")
_MAX = 5000  # longest run of terms the key will walk


def _natural(n):
    """n itself when it is a natural number; a term number can be nothing else."""
    if not (n.is_integer and n >= 1):
        raise ValueError(f"n = {n} is not a natural number")
    return Integer(n)


def _walk(start, step, k):
    """start, then step added k times, one at a time."""
    t = start
    for _ in range(int(k)):
        t += step
    return t


def _step_between(v):
    """The one step x with t_p plus (q - p) steps of x landing on t_q."""
    (d,) = solve(_walk(v["tp"], _x, v["q"] - v["p"]) - v["tq"], _x)
    return d


def key(v, p):
    """From the definition: the same step d is added to get from each term to the next."""
    ask = p["ask"]
    if ask == "d":
        (d,) = solve(_walk(v["a"], _x, v["n"] - 1) - v["tn"], _x)
        return d
    if ask == "which":
        t, m = v["a"], 1
        while m < _MAX and t != v["T"] and (t - v["T"]) * v["d"] < 0:
            t, m = t + v["d"], m + 1
        if t != v["T"]:
            raise ValueError("T is not a term")
        return Integer(m)
    if ask in ("a2", "term2"):
        d = _step_between(v)
        a = _walk(v["tp"], -d, v["p"] - 1)  # step back to t_1
        return a if ask == "a2" else _walk(a, d, v["n"] - 1)
    if ask == "end":
        d = v["t2"] - v["t1"]
        terms = [v["t1"]]
        while len(terms) < _MAX and terms[-1] != v["l"]:
            terms.append(terms[-1] + d)
        if terms[-1] != v["l"]:
            raise ValueError("l is not a term")
        return terms[-int(v["n"])]
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Takes n steps of d to the nth term: t_n = a + nd."""
    ask = p["ask"]
    if ask == "d":
        return (v["tn"] - v["a"]) / v["n"]
    if ask == "which":
        return _natural((v["T"] - v["a"]) / v["d"])
    if ask == "a2":
        d = (v["tq"] - v["tp"]) / (v["q"] - v["p"])
        return v["tp"] - v["p"] * d
    if ask == "end":
        return v["l"] - v["n"] * (v["t2"] - v["t1"])
    raise ValueError("a + nd gives the same term from two terms (the extra d cancels)")


def m2(v, p):
    """Common difference upside down: an earlier term minus a later one."""
    ask = p["ask"]
    if ask in ("a2", "term2"):
        d = (v["tp"] - v["tq"]) / (v["q"] - v["p"])
        a = v["tp"] - (v["p"] - 1) * d
        return a if ask == "a2" else a + (v["n"] - 1) * d
    if ask == "end":
        return v["l"] - (v["n"] - 1) * (v["t1"] - v["t2"])
    raise ValueError("d is given, not worked out")


def m3(v, p):
    """Takes the difference of two given terms as d, though they are not next to each other."""
    ask = p["ask"]
    if ask in ("a2", "term2"):
        d = v["tq"] - v["tp"]
        a = v["tp"] - (v["p"] - 1) * d
        return a if ask == "a2" else a + (v["n"] - 1) * d
    raise ValueError("no two terms given")


def m4(v, p):
    """Counts the nth term from the end from the start: a + (n - 1)d."""
    if p["ask"] != "end":
        raise ValueError("not a term from the end")
    return v["t1"] + (v["n"] - 1) * (v["t2"] - v["t1"])


def m5(v, p):
    """Moves a term across the equals sign without changing its sign."""
    ask = p["ask"]
    if ask == "d":
        return (v["tn"] + v["a"]) / (v["n"] - 1)  # (n - 1)d = t_n + a
    if ask == "which":
        return _natural((v["T"] + v["a"]) / v["d"] + 1)
    if ask in ("a2", "term2"):
        d = (v["tq"] - v["tp"]) / (v["q"] - v["p"])
        a = v["tp"] + (v["p"] - 1) * d  # a = t_p + (p - 1)d
        return a if ask == "a2" else a + (v["n"] - 1) * d
    raise ValueError("nothing moved across")


def m6(v, p):
    """Leaves out the first term when solving: uses t_n = (n - 1)d."""
    ask = p["ask"]
    if ask == "d":
        return v["tn"] / (v["n"] - 1)
    if ask == "which":
        return _natural(v["T"] / v["d"] + 1)
    raise ValueError("no equation solved for n or d")


MODELS = {"key": key, "C16-M1": m1, "C16-M2": m2, "C16-M3": m3, "C16-M4": m4, "C16-M5": m5, "C16-M6": m6}
