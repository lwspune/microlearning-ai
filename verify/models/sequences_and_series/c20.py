"""C20 Counting the terms of an A.P.: answer models (the key, and one per misconception).

params["ask"]:
  which  the n with t_n = T. Inputs a, d, T.
  count  how many natural numbers from lo to hi (both included) are divisible by k. Inputs lo, hi, k.
  equal  the n for which the nth terms of two A.P.s are equal. Inputs a1, d1, a2, d2.
"""
from sympy import Integer, ceiling, floor

_MAX = 5000  # longest run of terms the key will walk


def _natural(n):
    """n itself when it is a natural number; a term number can be nothing else."""
    if not (n.is_integer and n >= 1):
        raise ValueError(f"n = {n} is not a natural number")
    return Integer(n)


def _ends(v):
    """The first and last multiples of k from lo to hi: the A.P. being counted."""
    k = v["k"]
    return ceiling(v["lo"] / k) * k, floor(v["hi"] / k) * k, k


def _abd(v, p):
    """The A.P.'s first term, the term to reach, and d, for the which and count asks."""
    if p["ask"] == "which":
        return v["a"], v["T"], v["d"]
    if p["ask"] == "count":
        return _ends(v)
    raise ValueError("no single A.P.")


def key(v, p):
    """From the definition: walk the terms one at a time, or count the numbers one by one."""
    ask = p["ask"]
    if ask == "which":
        t, m = v["a"], 1
        while m < _MAX and t != v["T"] and (t - v["T"]) * v["d"] < 0:
            t, m = t + v["d"], m + 1
        if t != v["T"]:
            raise ValueError("T is not a term")
        return Integer(m)
    if ask == "count":
        return Integer(sum(1 for x in range(int(v["lo"]), int(v["hi"]) + 1) if x % int(v["k"]) == 0))
    if ask == "equal":
        t1, t2, m = v["a1"], v["a2"], 1
        while m < _MAX and t1 != t2:
            t1, t2, m = t1 + v["d1"], t2 + v["d2"], m + 1
        if t1 != t2:
            raise ValueError("the nth terms are never equal")
        return Integer(m)
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Counts the steps of d, not the terms: n = (t_n - a)/d, with no + 1 (t_n = a + nd)."""
    if p["ask"] == "equal":
        return _natural((v["a2"] - v["a1"]) / (v["d1"] - v["d2"]))  # a1 + n d1 = a2 + n d2
    a, t, d = _abd(v, p)
    return _natural((t - a) / d)


def m2(v, p):
    """Takes the ends of the range as the first and last terms, though they are not multiples of k."""
    if p["ask"] != "count":
        raise ValueError("no range to count")
    if v["lo"] % v["k"] == 0 and v["hi"] % v["k"] == 0:
        raise ValueError("the ends are multiples: this is the key")
    return _natural((v["hi"] - v["lo"]) / v["k"] + 1)


def m3(v, p):
    """Counts every multiple of k from 1 up to hi, forgetting those below lo: hi / k."""
    if p["ask"] != "count":
        raise ValueError("no range to count")
    return Integer(floor(v["hi"] / v["k"]))


def m4(v, p):
    """Moves the first term across the equals sign without changing its sign: (n - 1)d = t_n + a."""
    if p["ask"] == "equal":
        return _natural((v["a2"] + v["a1"]) / (v["d1"] - v["d2"]) + 1)
    a, t, d = _abd(v, p)
    return _natural((t + a) / d + 1)


def m5(v, p):
    """Divides only t_n by d, not the whole of t_n - a: n - 1 = t_n / d - a."""
    if p["ask"] == "equal":
        raise ValueError("no single term to divide")
    a, t, d = _abd(v, p)
    return _natural(t / d - a + 1)


def m6(v, p):
    """Gets the sign of (-1) x d wrong when expanding (n - 1)d with a negative d: nd + d."""
    if p["ask"] == "equal":
        if v["d1"] >= 0 and v["d2"] >= 0:
            raise ValueError("no negative d")
        # a1 + n d1 + d1 = a2 + n d2 + d2
        return _natural((v["a2"] + v["d2"] - v["a1"] - v["d1"]) / (v["d1"] - v["d2"]))
    a, t, d = _abd(v, p)
    if d >= 0:
        raise ValueError("no negative d")
    return _natural((t - a - d) / d)


MODELS = {"key": key, "C20-M1": m1, "C20-M2": m2, "C20-M3": m3, "C20-M4": m4, "C20-M5": m5, "C20-M6": m6}
