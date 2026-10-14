"""C07 Counting with three sets: answer models (the key, and one per misconception).

Inputs (sympy numbers), any of: U = n(U), A, B, C = n(A), n(B), n(C), AB, BC, CA = the pair
intersections n(A ∩ B), n(B ∩ C), n(C ∩ A), ABC = n(A ∩ B ∩ C), Un = n(A ∪ B ∪ C), N = none.
params["ask"]: union | none | exactly1 | exactly2.
Below, S = n(A) + n(B) + n(C), P = n(A ∩ B) + n(B ∩ C) + n(C ∩ A), T = n(A ∩ B ∩ C).
"""
from sympy import Rational, linsolve, symbols

# The eight Venn cells: only a, only b, only c, a∩b only, b∩c only, c∩a only, all three, none.
_a, _b, _c, _ab, _bc, _ca, _t, _n = _cells = symbols("a b c ab bc ca t n")


def key(v, p):
    """Solve for the eight Venn cells from the facts given, then add up the cells asked for."""
    facts = {
        "U": _a + _b + _c + _ab + _bc + _ca + _t + _n,
        "A": _a + _ab + _ca + _t, "B": _b + _ab + _bc + _t, "C": _c + _bc + _ca + _t,
        "AB": _ab + _t, "BC": _bc + _t, "CA": _ca + _t, "ABC": _t,
        "Un": _a + _b + _c + _ab + _bc + _ca + _t, "N": _n,
    }
    eqs = [facts[k] - v[k] for k in facts if k in v]
    (sol,) = linsolve(eqs, list(_cells))
    cell = dict(zip(_cells, sol))
    want = {
        "union": _a + _b + _c + _ab + _bc + _ca + _t, "none": _n,
        "exactly1": _a + _b + _c, "exactly2": _ab + _bc + _ca,
    }[p["ask"]]
    ans = want.subs(cell).expand()
    if ans.free_symbols:
        raise ValueError("the facts given don't fix the answer")
    return Rational(ans)


def _spt(v):
    s = v["A"] + v["B"] + v["C"]
    pairs = v["AB"] + v["BC"] + v["CA"] if "AB" in v else None
    return s, pairs, v["ABC"]


def m1(v, p):
    """Forgets to add back the centre: every count is worked with its n(A ∩ B ∩ C) term dropped."""
    s, pairs, t = _spt(v)
    ask = p["ask"]
    if ask == "exactly2" and pairs is None:  # n(A ∪ B ∪ C) = S − P, so P = S − n(A ∪ B ∪ C)
        return s - v["Un"]
    if pairs is None:
        raise ValueError("needs the pair counts")
    union = s - pairs
    return {"union": union, "none": v["U"] - union if "U" in v else None, "exactly1": s - 2 * pairs, "exactly2": pairs}[ask]


def m2(v, p):
    """Reads each given pair count n(A ∩ B) as 'A and B only', as if the centre were not inside it."""
    s, pairs, t = _spt(v)
    ask = p["ask"]
    if pairs is None:  # n(A ∪ B ∪ C) = S − P − 2T gives P, and 'exactly two' is then P
        if ask == "exactly2":
            return s - v["Un"] - 2 * t
        raise ValueError("needs the pair counts")
    union = s - pairs - 2 * t  # cells: only A = n(A) − n(A ∩ B) − n(C ∩ A) − T, pairs as given, centre T
    return {"union": union, "none": v["U"] - union if "U" in v else None, "exactly1": s - 2 * pairs - 3 * t, "exactly2": pairs}[ask]


def m3(v, p):
    """Mixes up 'exactly' and 'at least': exactly one with at least one, exactly two with at least two."""
    s, pairs, t = _spt(v)
    ask = p["ask"]
    if pairs is None:
        pairs = s - v["Un"] + t  # from the right formula for n(A ∪ B ∪ C)
    if ask == "union":  # answers 'exactly one'
        return s - 2 * pairs + 3 * t
    if ask == "exactly1":  # answers 'at least one'
        return s - pairs + t
    if ask == "exactly2":  # answers 'at least two'
        return pairs - 2 * t
    raise ValueError("no 'exactly' or 'at least' to mix up")


def m4(v, p):
    """Subtracts n(A ∩ B ∩ C) like one more overlap: n(A ∪ B ∪ C) = S − P − T."""
    s, pairs, t = _spt(v)
    ask = p["ask"]
    if pairs is None:
        if ask == "exactly2":  # P = S − n(A ∪ B ∪ C) − T, then exactly two = P − 3T
            return s - v["Un"] - t - 3 * t
        raise ValueError("needs the pair counts")
    if ask == "union":
        return s - pairs - t
    if ask == "none":
        return v["U"] - (s - pairs - t)
    raise ValueError("the sign slip is in the union formula only")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4}
