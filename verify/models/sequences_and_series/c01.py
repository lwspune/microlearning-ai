"""C01 Spotting a G.P.: answer models (the key, and one per misconception).

Inputs (sympy), one of: s = a tuple of the first terms; t = a formula for t_n in the symbol n;
seqs = a tuple of such tuples. params["ask"]: r (the common ratio of a G.P.) | verdict (r if
it is a G.P., else NOT_GP) | count (how many of seqs are G.P.s).
"""
from sympy import Abs, Integer, Symbol, simplify

NOT_GP = Symbol("not_gp")


def _terms(v, k=5):
    """The first terms: as given, or t_1..t_k from the formula for t_n."""
    if "t" in v:
        t = v["t"]
        (n,) = t.free_symbols
        return [simplify(t.subs(n, i)) for i in range(1, k + 1)]
    return [simplify(x) for x in v["s"]]


def _ratios(ts):
    if any(x == 0 for x in ts):
        raise ValueError("a G.P. has no zero terms")
    return [simplify(b / a) for a, b in zip(ts, ts[1:])]


def _diffs(ts):
    return [simplify(b - a) for a, b in zip(ts, ts[1:])]


def _const(xs):
    return all(simplify(x - xs[0]) == 0 for x in xs)


def _is_gp(ts):
    return _const(_ratios(ts))


def key(v, p):
    """From the definition: every ratio t_{k+1}/t_k must be the same number r."""
    ask = p.get("ask", "r")
    if ask == "count":
        return Integer(sum(_is_gp([simplify(x) for x in s]) for s in v["seqs"]))
    rs = _ratios(_terms(v))
    if _const(rs):
        return rs[0]
    if ask == "verdict":
        return NOT_GP
    raise ValueError("not a G.P.")


def m1(v, p):
    """A.P. thinking: the step between terms is a difference, so r = t2 - t1, and a sequence
    with a constant difference is taken for a G.P. (one without, rejected)."""
    ask = p.get("ask", "r")
    if ask == "count":
        return Integer(sum(_const(_diffs([simplify(x) for x in s])) for s in v["seqs"]))
    ds = _diffs(_terms(v))
    if ask == "r":
        return ds[0]
    return ds[0] if _const(ds) else NOT_GP


def m2(v, p):
    """Ratio upside down: r = t1 / t2 (an earlier term over a later one)."""
    ask = p.get("ask", "r")
    if ask == "count":
        raise ValueError("flipping every ratio doesn't change which sequences are G.P.s")
    rs = _ratios(_terms(v))
    if not _const(rs):
        raise ValueError("not a G.P.: the flipped ratios aren't constant either")
    return 1 / rs[0]


def m3(v, p):
    """Ignores signs: works with the sizes of the terms, so r loses its minus sign and a
    sign pattern that breaks the G.P. goes unnoticed."""
    ask = p.get("ask", "r")
    if ask == "count":
        return Integer(sum(_is_gp([Abs(simplify(x)) for x in s]) for s in v["seqs"]))
    rs = [Abs(r) for r in _ratios(_terms(v))]
    if ask == "r" and not _const(rs):
        raise ValueError("not a G.P. even ignoring signs")
    return rs[0] if _const(rs) else NOT_GP


def m4(v, p):
    """Decides from the first two terms only: r = t2 / t1, never checking t3 / t2."""
    ask = p.get("ask", "r")
    if ask == "count":
        return Integer(len(v["seqs"]))
    return _ratios(_terms(v))[0]


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
