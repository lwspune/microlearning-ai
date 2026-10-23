"""C07 Number of elements in a union: answer models (the key, and one per misconception).

Inputs (numbers; give only those the question states):
  nA, nB  n(A), n(B): everything in A, everything in B
  nI      n(A ∩ B): in both
  nU      n(A ∪ B): in at least one
  N       the total (the universal set)
  nE      in neither set
  oA, oB  in A only, in B only
params["ask"]: the count asked for: "nA", "nB", "nI", "nU", "neither", "onlyA", "onlyB".
"""
from sympy import Symbol, linsolve

# The four cells of the Venn diagram: only A, only B, both, neither.
_a, _b, _c, _d = Symbol("a"), Symbol("b"), Symbol("c"), Symbol("d")
_CELLS = {
    "nA": _a + _c, "nB": _b + _c, "nI": _c, "nU": _a + _b + _c, "N": _a + _b + _c + _d,
    "nE": _d, "neither": _d, "oA": _a, "oB": _b, "onlyA": _a, "onlyB": _b,
}


def key(v, p):
    """Solve for the cells straight from what each count means, then read off the count asked."""
    eqs = [_CELLS[k] - val for k, val in v.items()]
    sols = list(linsolve(eqs, [_a, _b, _c, _d]))
    if len(sols) != 1:
        raise ValueError("the givens don't fix the cells")
    cells = dict(zip([_a, _b, _c, _d], sols[0]))
    ans = _CELLS[p["ask"]].subs(cells)
    if ans.free_symbols:
        raise ValueError("the givens don't fix the asked count")
    return ans


def _true_union(v):
    """n(A ∪ B) as it really is, from whatever is given."""
    return key(v, {"ask": "nU"})


def _believed(v, p, coeff):
    """A student who believes n(A ∪ B) = n(A) + n(B) + coeff * n(A ∩ B) (the right rule has coeff = -1).

    Solves that rule for the one missing count among nA, nB, nI, nU; a neither count is N - n(A ∪ B)."""
    ask = p["ask"]
    if any(k in v for k in ("oA", "oB")):
        raise ValueError("this rule reads n(A) and n(B), not the 'only' counts")
    nA, nB, nI, nU = Symbol("nA"), Symbol("nB"), Symbol("nI"), Symbol("nU")
    known = {s: v[s.name] for s in (nA, nB, nI, nU) if s.name in v}
    if nU not in known and "N" in v and "nE" in v:
        known[nU] = v["N"] - v["nE"]
    rule = nA + nB + coeff * nI - nU
    target = {"neither": nU, "onlyA": None, "onlyB": None}.get(ask, Symbol(ask))
    if target is None:
        raise ValueError("this rule finds a union, not an 'only' count")
    if target in known:
        val = known[target]
    else:
        missing = [s for s in (nA, nB, nI, nU) if s not in known]
        if missing != [target] or (coeff == 0 and target == nI):
            raise ValueError("the rule doesn't give this count")
        sols = list(linsolve([rule.subs(known)], [target]))
        val = sols[0][0]
    if ask == "neither":
        if "N" not in v:
            raise ValueError("needs the total")
        return v["N"] - val
    return val


def m1(v, p):
    """Overlap counted twice: n(A ∪ B) = n(A) + n(B)."""
    return _believed(v, p, 0)


def m2(v, p):
    """n(A) read as 'A only': n(A ∪ B) = n(A) + n(B) + n(A ∩ B), and 'only B' = n(B)."""
    if p["ask"] == "onlyA":
        return v["nA"]
    if p["ask"] == "onlyB":
        return v["nB"]
    return _believed(v, p, 1)


def m3(v, p):
    """'A or B' taken as 'exactly one': the overlap is left out of the union."""
    if "oA" in v and "oB" in v:
        u = v["oA"] + v["oB"]
        if p["ask"] == "neither":
            return v["N"] - u
        if p["ask"] == "nU":
            return u
        raise ValueError("only neither or the union")
    return _believed(v, p, -2)


def m4(v, p):
    """Everyone outside the overlap, N - n(A ∩ B), taken as the group asked for (neither, or only one set)."""
    if p["ask"] not in ("neither", "onlyA", "onlyB"):
        raise ValueError("only for neither or only-one counts")
    return v["N"] - key(v, {"ask": "nI"})


def m5(v, p):
    """Stops at n(A ∪ B), the 'at least one' count, when another count is asked for."""
    if p["ask"] == "nU":
        raise ValueError("the union is the right answer here")
    return _true_union(v)


def m6(v, p):
    """Forgets the people in neither set: takes the total N as n(A ∪ B)."""
    if "N" not in v:
        raise ValueError("needs the total")
    u = v["N"]
    nA, nB = v.get("nA"), v.get("nB")
    ask = p["ask"]
    if ask == "onlyB":
        return u - nA
    if ask == "onlyA":
        return u - nB
    if ask == "nI":
        return nA + nB - u
    raise ValueError("not for this count")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
