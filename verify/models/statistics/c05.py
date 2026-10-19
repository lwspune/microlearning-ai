"""C05 The combined mean: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  mean    group sizes v["ns"] (a tuple, or a ratio of sizes) and group means v["ms"] -> the combined mean
  split   N people in two groups, combined mean v["c"], group means v["m1"], v["m2"]
          -> Tuple(n1, n2), the two group sizes (with N = 100 they are percentages)
  gmean   N people, combined mean v["c"], group 1 of v["n1"] people with mean v["m1"]
          -> the mean of group 2
"""
from sympy import S, Tuple, solve, Symbol


def _ask(p):
    return p.get("ask", "mean")


def _groups(v):
    return [S(n) for n in v["ns"]], [S(m) for m in v["ms"]]


def key(v, p):
    a = _ask(p)
    if a == "mean":
        # From the definition: all the observations' total over how many there are.
        ns, ms = _groups(v)
        return sum(n * m for n, m in zip(ns, ms)) / sum(ns)
    if a == "split":
        N, c, m1, m2 = S(v["N"]), S(v["c"]), S(v["m1"]), S(v["m2"])
        b = Symbol("b")
        n1 = solve(b * m1 + (N - b) * m2 - N * c, b)[0]
        return Tuple(n1, N - n1)
    if a == "gmean":
        N, c, n1, m1 = S(v["N"]), S(v["c"]), S(v["n1"]), S(v["m1"])
        return (N * c - n1 * m1) / (N - n1)
    raise ValueError(a)


def m1(v, p):
    """Plain average of the group means, as if the groups were the same size."""
    a = _ask(p)
    if a == "mean":
        _, ms = _groups(v)
        return sum(ms) / len(ms)
    if a == "split":
        N = S(v["N"])
        return Tuple(N / 2, N / 2)
    if a == "gmean":
        return 2 * S(v["c"]) - S(v["m1"])
    raise ValueError(a)


def m2(v, p):
    """Pairs each group's size with the other group's mean (two groups)."""
    a = _ask(p)
    if a == "mean":
        ns, ms = _groups(v)
        if len(ns) != 2:
            raise ValueError("two groups only")
        return (ns[1] * ms[0] + ns[0] * ms[1]) / (ns[0] + ns[1])
    if a == "split":
        n1, n2 = key(v, p)
        return Tuple(n2, n1)
    if a == "gmean":
        N, c, n1, mm1 = S(v["N"]), S(v["c"]), S(v["n1"]), S(v["m1"])
        return (N * c - (N - n1) * mm1) / n1
    raise ValueError(a)


def m3(v, p):
    """Divides the sum of the group totals by the number of groups."""
    if _ask(p) != "mean":
        raise ValueError("combining groups only")
    ns, ms = _groups(v)
    return sum(n * m for n, m in zip(ns, ms)) / len(ns)


def m4(v, p):
    """Missing mean: divides what is left of the grand total by the combined size N."""
    if _ask(p) != "gmean":
        raise ValueError("a missing group mean only")
    N, c, n1, mm1 = S(v["N"]), S(v["c"]), S(v["n1"]), S(v["m1"])
    return (N * c - n1 * mm1) / N


def m5(v, p):
    """Takes the ratio smaller : bigger as the smaller group's share of the whole."""
    if _ask(p) != "split":
        raise ValueError("group sizes only")
    N = S(v["N"])
    n1, n2 = key(v, p)
    if n1 == n2:
        raise ValueError("equal groups")
    if n1 < n2:
        small = N * n1 / n2
        return Tuple(small, N - small)
    small = N * n2 / n1
    return Tuple(N - small, small)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
