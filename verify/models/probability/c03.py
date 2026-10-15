"""C03 Probability by counting: answer models (the key, and one per misconception).

Two kinds of item, params["kind"]:

"select": r things are drawn together (without replacement) from N; inputs N, r.
  The key enumerates every selection: params["pop"] is "cards" (a 52-card pack) or "groups"
  (params["groups"]: "label:size" for each group, together everyone), and params["event"] says which
  selections are favourable: "samesuit" (cards), or "label:k,label:k" (exactly k of each label named).
  The models read the student's working from params["parts"] ("size:take" for each group the
  condition names), params["rest"] (optional "size:take": the unnamed group that fills the other
  places) and params["versions"] (optional: how many interchangeable versions the event has, e.g.
  the 4 suits for "all from the same suit").

"arrange": the n different letters of params["word"] are arranged in a row; inputs n.
  params["event"]: "together:<letters>" (those letters side by side) or "ends:<first>:<last>"
  (the first letter is one of <first>, the last one of <last>). The key enumerates every arrangement.
"""
from itertools import combinations, permutations
from math import comb, factorial

from sympy import Rational

FACES = {"J", "Q", "K"}


def _deck():
    ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    return [(rank, suit) for suit in "SHDC" for rank in ranks]


def _pair(s):
    a, b = s.split(":")
    return int(a), int(b)


def _parts(p):
    return [_pair(x) for x in p["parts"]]


def _versions(p):
    return int(p.get("versions", "1"))


def _named_count(p):
    """The student's count of the favourable selections, before any slip: versions x product of nCr."""
    out = _versions(p)
    for size, take in _parts(p):
        out *= comb(size, take)
    if "rest" in p:
        size, take = _pair(p["rest"])
        out *= comb(size, take)
    return out


def _select_key(v, p):
    n_total, r = int(v["N"]), int(v["r"])
    if p["pop"] == "cards":
        pop = _deck()
        if p["event"] != "samesuit":
            raise ValueError("unknown card event")
        fav = lambda sel: len({suit for _, suit in sel}) == 1
    else:
        pop = []
        for g in p["groups"]:
            label, size = g.split(":")
            pop += [(label, i) for i in range(int(size))]
        want = {lab: int(k) for lab, k in (x.split(":") for x in p["event"].split(","))}
        fav = lambda sel: all(sum(1 for lab, _ in sel if lab == w) == k for w, k in want.items())
    if len(pop) != n_total:
        raise ValueError("population size does not match N")
    good = total = 0
    for sel in combinations(pop, r):
        total += 1
        good += fav(sel)
    return Rational(good, total)


def _arrange_key(v, p):
    word = p["word"]
    if len(set(word)) != len(word) or len(word) != int(v["n"]):
        raise ValueError("word must have n different letters")
    ev = p["event"].split(":")
    if ev[0] == "together":
        k = len(ev[1])
        fav = lambda w: max(i for i, c in enumerate(w) if c in ev[1]) - min(i for i, c in enumerate(w) if c in ev[1]) == k - 1
    else:
        fav = lambda w: w[0] in ev[1] and w[-1] in ev[2]
    good = total = 0
    for w in permutations(word):
        total += 1
        good += fav(w)
    return Rational(good, total)


def key(v, p):
    """Straight from the definition: list every equally likely outcome and count the favourable ones."""
    return _select_key(v, p) if p["kind"] == "select" else _arrange_key(v, p)


def _arrange_parts(v, p):
    n = int(v["n"])
    ev = p["event"].split(":")
    return n, ev


def m1(v, p):
    """Counts n(S) as ordered draws (52 x 51, nPr) but n(A) as an unordered selection (products of nCr)."""
    if p["kind"] != "select":
        raise ValueError("selection items only")
    n_total, r = int(v["N"]), int(v["r"])
    return Rational(_named_count(p), factorial(n_total) // factorial(n_total - r))


def m2(v, p):
    """Adds the counts for the different groups (or stages) instead of multiplying them."""
    if p["kind"] == "select":
        parts = _parts(p) + ([_pair(p["rest"])] if "rest" in p else [])
        if len(parts) < 2:
            raise ValueError("needs two groups")
        n_a = _versions(p) * sum(comb(size, take) for size, take in parts)
        return Rational(n_a, comb(int(v["N"]), int(v["r"])))
    n, ev = _arrange_parts(v, p)
    if ev[0] == "together":
        k = len(ev[1])
        return Rational(factorial(n - k + 1) + factorial(k), factorial(n))
    return Rational((len(ev[1]) + len(ev[2])) * factorial(n - 2), factorial(n))


def m3(v, p):
    """Counts only one version of the event: one fixed suit, or the block's letters in one fixed order."""
    if p["kind"] == "select":
        if _versions(p) < 2:
            raise ValueError("event has only one version")
        return Rational(_named_count(p) // _versions(p), comb(int(v["N"]), int(v["r"])))
    n, ev = _arrange_parts(v, p)
    if ev[0] != "together":
        raise ValueError("block items only")
    k = len(ev[1])
    return Rational(factorial(n - k + 1), factorial(n))


def m4(v, p):
    """Counts only the part of the outcome the condition names; forgets to choose or arrange the rest."""
    if p["kind"] == "select":
        if "rest" not in p:
            raise ValueError("the condition names the whole selection")
        n_a = _versions(p)
        for size, take in _parts(p):
            n_a *= comb(size, take)
        return Rational(n_a, comb(int(v["N"]), int(v["r"])))
    n, ev = _arrange_parts(v, p)
    if ev[0] == "together":
        return Rational(factorial(len(ev[1])), factorial(n))
    return Rational(len(ev[1]) * len(ev[2]), factorial(n))


def m5(v, p):
    """Counts as if each draw (or place) is made from all N again: the choices never drop after one is used."""
    if p["kind"] == "select":
        n_total, r = int(v["N"]), int(v["r"])
        parts = _parts(p) + ([_pair(p["rest"])] if "rest" in p else [])
        orders = factorial(r)
        n_a = _versions(p)
        for size, take in parts:
            orders //= factorial(take)
            n_a *= size ** take
        return Rational(orders * n_a, n_total ** r)
    n, ev = _arrange_parts(v, p)
    if ev[0] == "together":
        raise ValueError("ends items only")
    return Rational(len(ev[1]) * len(ev[2]) * n ** (n - 2), n ** n)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
