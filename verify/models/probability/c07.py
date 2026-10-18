"""C07 Conditional probability: answer models (the key, and one per misconception).

Every item asks for P(A | B): A is the event asked about, B the event given.

params["kind"]:
  count    inputs nS, nA, nB, nAB: counts of equally likely outcomes (a table, a box of cards).
           When params["exp"] names an experiment, the key ignores the counts and enumerates the
           sample space itself, with A = params["A"] and B = params["B"] (see _EXPERIMENTS, _EVENTS).
  atleast  inputs n, k: n fair coins (or children); A = all n heads, B = at least k heads.
  prob     inputs pAc, pB, pBgA: P(A'), P(B) and P(B | A) are given.
"""
from itertools import product

from sympy import Rational, S

_EXPERIMENTS = {
    "dice2": lambda: list(product(range(1, 7), repeat=2)),
    "cards10": lambda: [(n,) for n in range(1, 11)],
}

_EVENTS = {
    "sum_odd": lambda o: sum(o) % 2 == 1,
    "sum_div5": lambda o: sum(o) % 5 == 0,
    "even": lambda o: sum(o) % 2 == 0,
    "more_than_3": lambda o: sum(o) > 3,
}


def _enumerate(p):
    """P(A | B) straight from the sample space: keep only the outcomes in B, count A among them."""
    space = _EXPERIMENTS[p["exp"]]()
    a, b = _EVENTS[p["A"]], _EVENTS[p["B"]]
    reduced = [o for o in space if b(o)]
    return Rational(sum(1 for o in reduced if a(o)), len(reduced))


def _coins(n):
    return list(product("HT", repeat=int(n)))


def _counts(v, p):
    """nS, nA, nB, nAB for the count and at-least kinds."""
    if p["kind"] == "count":
        return S(v["nS"]), S(v["nA"]), S(v["nB"]), S(v["nAB"])
    if p["kind"] == "atleast":
        space = _coins(v["n"])
        a = [o for o in space if o.count("H") == int(v["n"])]
        b = [o for o in space if o.count("H") >= int(v["k"])]
        ab = [o for o in a if o in b]
        return S(len(space)), S(len(a)), S(len(b)), S(len(ab))
    raise ValueError(f"no counts for kind {p['kind']}")


def _probs(v, p, pA=None):
    """P(A), P(B), P(A ∩ B). pA overrides the P(A) the student starts from."""
    if p["kind"] == "prob":
        pA = (1 - v["pAc"]) if pA is None else pA
        return pA, v["pB"], v["pBgA"] * pA
    nS, nA, nB, nAB = _counts(v, p)
    return nA / nS, nB / nS, nAB / nS


# ---------- the key ----------

def key(v, p):
    """Count items with an experiment: enumerate. At least k heads: enumerate the coins.
    Otherwise P(A ∩ B) / P(B), with P(A ∩ B) from P(B | A) P(A) and P(A) = 1 - P(A')."""
    if p["kind"] == "count" and p.get("exp"):
        ans = _enumerate(p)
        nS, nA, nB, nAB = _counts(v, p)
        assert ans == nAB / nB, f"inputs disagree with the enumeration: {nAB}/{nB} vs {ans}"
        return ans
    if p["kind"] == "atleast":
        space = _coins(v["n"])
        reduced = [o for o in space if o.count("H") >= int(v["k"])]
        return Rational(sum(1 for o in reduced if o.count("H") == int(v["n"])), len(reduced))
    pA, pB, pAB = _probs(v, p)
    return pAB / pB


# ---------- misconceptions ----------

def m1(v, p):
    """Swaps the condition: divides by P(A) instead of P(B), so finds P(B | A)."""
    pA, pB, pAB = _probs(v, p)
    return pAB / pA


def m2(v, p):
    """Ignores the condition: answers P(A) over the whole sample space."""
    return _probs(v, p)[0]


def m3(v, p):
    """Keeps the whole sample space as the denominator: answers P(A ∩ B)."""
    return _probs(v, p)[2]


def m4(v, p):
    """'At least k heads' read as 'these k coins are heads': only the other n - k are left to chance."""
    if p["kind"] != "atleast":
        raise ValueError("only for the at-least kind")
    return Rational(1, 2) ** (int(v["n"]) - int(v["k"]))


def m5(v, p):
    """Takes the given P(A') as P(A), skipping the complement."""
    if p["kind"] != "prob":
        raise ValueError("only when P(A') is given")
    pA, pB, pAB = _probs(v, p, pA=v["pAc"])
    return pAB / pB


def m6(v, p):
    """Shrinks the denominator to B but still counts all of A: P(A) / P(B)."""
    pA, pB, pAB = _probs(v, p)
    return pA / pB


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
