"""C11 Selections with conditions: answer models (the key, and one per misconception).

Inputs: r = how many are selected.
params["groups"]: one "size:lo:hi" per group of people, in the order the stem names them; a selection
takes between lo and hi people from that group (lo = hi is an exact count, lo > 0 with lo < hi is
"at least lo", lo = 0 is unrestricted). The groups don't overlap and together are everyone.
"""
from itertools import product

from sympy import Integer, binomial


def _groups(p):
    return [tuple(int(x) for x in g.split(":")) for g in p["groups"]]


def _count(gs, r):
    """Selections of r people, taking between lo and hi from each group: the case-sum, term by term."""
    total = Integer(0)
    for xs in product(*[range(lo, min(hi, size) + 1) for size, lo, hi in gs]):
        if sum(xs) == r:
            term = Integer(1)
            for (size, _, _), x in zip(gs, xs):
                term *= binomial(size, x)
            total += term
    return total


def _at_least(gs):
    """Indexes of the groups with an "at least" condition."""
    return [i for i, (size, lo, hi) in enumerate(gs) if 0 < lo < min(hi, size)]


def key(v, p):
    """Add the counts of every allowed case; each case multiplies the choices from each group."""
    return _count(_groups(p), int(v["r"]))


def m1(v, p):
    """Fixes the required people first, then fills the remaining places from everyone still available
    (including more of the required kind): C(a, k) * C(rest, r - k), which counts a selection more than once."""
    gs, r = _groups(p), int(v["r"])
    if not _at_least(gs):
        raise ValueError("no 'at least' condition to fix first")
    out, fixed, pool = Integer(1), 0, 0
    for size, lo, hi in gs:
        out *= binomial(size, lo)
        fixed += lo
        if lo != hi:  # an exact count is used up; every other group still offers its leftover people
            pool += size - lo
    return out * binomial(pool, r - fixed)


def m2(v, p):
    """Reads the first "at least k" as "exactly k": counts only the smallest case."""
    gs, r = _groups(p), int(v["r"])
    idx = _at_least(gs)
    if not idx:
        raise ValueError("no 'at least' condition")
    size, lo, _ = gs[idx[0]]
    gs[idx[0]] = (size, lo, lo)
    return _count(gs, r)


def _relaxed(gs):
    return [(size, 0, hi) if i in _at_least(gs) else (size, lo, hi) for i, (size, lo, hi) in enumerate(gs)]


def _nones(gs, r):
    """For each "at least" group, the selections with none from it (other conditions kept)."""
    rel = _relaxed(gs)
    total = Integer(0)
    for i in _at_least(gs):
        none_from_i = [(g[0], 0, 0) if j == i else g for j, g in enumerate(rel)]
        total += _count(none_from_i, r)
    return total


def m3(v, p):
    """Uses "all - none" for every "at least" condition, even "at least 2" or "at least 3":
    subtracts only the selections with none from that group."""
    gs, r = _groups(p), int(v["r"])
    if not _at_least(gs):
        raise ValueError("no 'at least' condition")
    return _count(_relaxed(gs), r) - _nones(gs, r)


def m4(v, p):
    """Works out the 'none' count for all - none and gives it as the answer, forgetting to subtract."""
    gs, r = _groups(p), int(v["r"])
    if not _at_least(gs):
        raise ValueError("no 'at least' condition")
    return _nones(gs, r)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4}
