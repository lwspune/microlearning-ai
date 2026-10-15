"""C01 Sample space and events: answer models (the key, and one per misconception).

params["ask"] is one of:
  count:    n(S) for drawing r of n distinct items; inputs n, r; params["draw"] is
            seq_repl (one after another, with replacement), seq (one after another, without
            replacement: also arrangements, like letters into envelopes) or together (taken at once).
  classify: how events A and B of an experiment relate; params exp (dice2 | coins3) and A, B
            (names in _EVENTS). A named answer: Symbol me_only | ex_only | complementary | neither.
"""
from itertools import combinations, combinations_with_replacement, permutations, product

from sympy import Integer, Symbol

_EXPERIMENTS = {
    "dice2": lambda: list(product(range(1, 7), repeat=2)),
    "coins3": lambda: list(product("HT", repeat=3)),
}

_EVENTS = {
    "sum_div_3_or_4": lambda o: sum(o) % 3 == 0 or sum(o) % 4 == 0,
    "sum_7": lambda o: sum(o) == 7,
    "at_least_one_head": lambda o: "H" in o,
    "at_least_one_tail": lambda o: "T" in o,
}


def _count(n, r, draw):
    """n(S) by listing every outcome."""
    items = range(int(n))
    lister = {"seq_repl": lambda: product(items, repeat=int(r)), "seq": lambda: permutations(items, int(r)),
              "together": lambda: combinations(items, int(r))}[draw]
    return Integer(sum(1 for _ in lister()))


def _events(p):
    S = set(_EXPERIMENTS[p["exp"]]())
    A = {o for o in S if _EVENTS[p["A"]](o)}
    B = {o for o in S if _EVENTS[p["B"]](o)}
    return S, A, B


def _name(me, ex):
    if me and ex:
        return Symbol("complementary")
    if me:
        return Symbol("me_only")
    if ex:
        return Symbol("ex_only")
    return Symbol("neither")


def _ask(p, want):
    if p["ask"] != want:
        raise ValueError(f"only for ask={want}")


def key(v, p):
    """Straight from the definitions: list S; A and B are mutually exclusive when A ∩ B = ∅,
    exhaustive when A ∪ B = S."""
    if p["ask"] == "count":
        return _count(v["n"], v["r"], p["draw"])
    if p["ask"] == "classify":
        S, A, B = _events(p)
        return _name(not (A & B), (A | B) == S)
    raise ValueError("no such ask")


def m1(v, p):
    """Gets order the wrong way round: merges (a, b) and (b, a) in a sequence of draws, and counts
    orders when the items are taken together."""
    _ask(p, "count")
    n, r = int(v["n"]), int(v["r"])
    lister = {"seq_repl": lambda: combinations_with_replacement(range(n), r),
              "seq": lambda: combinations(range(n), r),
              "together": lambda: permutations(range(n), r)}[p["draw"]]
    return Integer(sum(1 for _ in lister()))


def m2(v, p):
    """Gets replacement backwards: every stage keeps all n choices when items are used up (n^r),
    and one fewer each stage when they are put back (n(n - 1)...)."""
    _ask(p, "count")
    n, r = int(v["n"]), int(v["r"])
    if p["draw"] == "seq_repl":
        return Integer(sum(1 for _ in permutations(range(n), r)))
    return Integer(n) ** r


def m3(v, p):
    """Adds the choices at each stage instead of multiplying them."""
    _ask(p, "count")
    n, r = int(v["n"]), int(v["r"])
    if p["draw"] == "seq_repl":
        return Integer(n * r)
    return Integer(sum(n - k for k in range(r)))


def m4(v, p):
    """Mutually exclusive taken to mean complementary: tests only A ∩ B = ∅ and decides both from it."""
    _ask(p, "classify")
    S, A, B = _events(p)
    me = not (A & B)
    return _name(me, me)


def m5(v, p):
    """Exhaustive taken to mean complementary: tests only A ∪ B = S and decides both from it."""
    _ask(p, "classify")
    S, A, B = _events(p)
    ex = (A | B) == S
    return _name(ex, ex)


def m6(v, p):
    """Swaps the two tests: mutually exclusive by A ∪ B = S, exhaustive by A ∩ B = ∅."""
    _ask(p, "classify")
    S, A, B = _events(p)
    return _name((A | B) == S, not (A & B))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
