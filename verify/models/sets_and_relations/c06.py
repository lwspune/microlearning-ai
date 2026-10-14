"""C06 Counting with two sets: answer models (the key, and one per misconception).

Inputs (sympy numbers), any of: U = n(U), A = n(A), B = n(B), AB = n(A ∩ B), AuB = n(A ∪ B),
N = n(A' ∩ B') (neither). params["ask"]: union | neither | exactly1 | B.
params["pct"] = "1": A, B, AB, AuB, N are percentages of U, and the answer is a count.
"""
from sympy import Rational, linsolve, symbols

_oa, _ab, _ob, _ne = _cells = symbols("only_a both only_b neither")


def _given(v, p):
    """The given counts, with percentages turned into counts of U."""
    g = dict(v)
    if p.get("pct") == "1":
        for k in ("A", "B", "AB", "AuB", "N"):
            if k in g:
                g[k] = g[k] * g["U"] / 100
    return g


def key(v, p):
    """Solve for the four Venn cells from the facts given, then add up the cells asked for."""
    g = _given(v, p)
    facts = {
        "U": _oa + _ab + _ob + _ne, "A": _oa + _ab, "B": _ab + _ob, "AB": _ab,
        "AuB": _oa + _ab + _ob, "N": _ne,
    }
    eqs = [facts[k] - g[k] for k in facts if k in g]
    (sol,) = linsolve(eqs, list(_cells))
    cell = dict(zip(_cells, sol))
    want = {
        "union": _oa + _ab + _ob, "neither": _ne, "exactly1": _oa + _ob, "B": _ab + _ob,
    }[p["ask"]]
    ans = want.subs(cell)
    if ans.free_symbols:
        raise ValueError("the facts given don't fix the answer")
    return Rational(ans)


def m1(v, p):
    """Double counting: n(A ∪ B) = n(A) + n(B), the overlap never subtracted."""
    g, ask = _given(v, p), p["ask"]
    if ask == "union":
        return g["A"] + g["B"]
    if ask == "neither":
        return g["U"] - g["A"] - g["B"]
    if ask == "B":  # from n(A ∪ B) = n(A) + n(B)
        return g["AuB"] - g["A"]
    raise ValueError("double counting doesn't decide this count")


def m2(v, p):
    """Reads n(A) and n(B) as 'only A' and 'only B': the overlap is a third, separate group."""
    g, ask = _given(v, p), p["ask"]
    if ask == "union":
        return g["A"] + g["B"] + g["AB"]
    if ask == "neither":
        return g["U"] - g["A"] - g["B"] - g["AB"]
    if ask == "exactly1":
        return g["A"] + g["B"]
    if ask == "B":  # n(A ∪ B) = n(A) + n(B) + n(A ∩ B)
        return g["AuB"] - g["A"] - g["AB"]
    raise ValueError("no such ask")


def m3(v, p):
    """Swaps 'A or B' (at least one) and 'only one' (exactly one)."""
    g, ask = _given(v, p), p["ask"]
    if ask == "union":  # answers 'exactly one'
        return g["A"] + g["B"] - 2 * g["AB"]
    if ask == "exactly1":  # answers 'at least one'
        return g["A"] + g["B"] - g["AB"]
    if ask == "B":  # reads n(A ∪ B) as only A + only B = (A − AB) + (B − AB)
        return g["AuB"] - g["A"] + 2 * g["AB"]
    raise ValueError("no 'or' to misread")


def m4(v, p):
    """Takes n(U) − n(A ∩ B), everyone not in both, as the 'neither' or 'only one' count."""
    g, ask = _given(v, p), p["ask"]
    if ask in ("neither", "exactly1"):
        return g["U"] - g["AB"]
    raise ValueError("needs n(U) and n(A ∩ B)")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4}
