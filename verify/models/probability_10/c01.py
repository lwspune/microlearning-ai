"""C01 Sample space: answer models (the key, and one per misconception).

Every item asks for n(S) and names its experiment in params["ask"]:
  range      one card from cards numbered a to b (one number on each card)        inputs a, b
  digits     two-digit numbers formed from d different non-zero digits;
             params["rep"] is "yes" (a digit may repeat) or "no"                 input d
  committee  a committee of two from b boys and g girls                          inputs b, g

The key lists the sample space itself (every card, every number, every committee) and counts it,
so it never uses the counting shortcut being taught.

Two questions settle a two-step count: does order matter (23 and 32 are different numbers, but
B1G1 and G1B1 are one committee), and may a thing be used twice (22, but never B1B1)?
"""
from itertools import combinations, combinations_with_replacement, permutations, product

from sympy import Integer


def _ask(p, *allowed):
    if p["ask"] not in allowed:
        raise ValueError(f"not modelled for {p['ask']}")
    return p["ask"]


def _int(x):
    return int(x)


def _rep(p):
    return p.get("rep", "no") == "yes"


def _people(v):
    return [f"B{i}" for i in range(1, _int(v["b"]) + 1)] + [f"G{i}" for i in range(1, _int(v["g"]) + 1)]


def _digits(v):
    return list(range(1, _int(v["d"]) + 1))


def _two_step(v, p):
    """(choices for the first place, choices for the second) when one thing can't repeat."""
    if p["ask"] == "digits":
        n = _int(v["d"])
        return (n, n) if _rep(p) else (n, n - 1)
    n = _int(v["b"]) + _int(v["g"])
    return (n, n - 1)


def key(v, p):
    ask = _ask(p, "range", "digits", "committee")
    if ask == "range":
        return Integer(len(list(range(_int(v["a"]), _int(v["b"]) + 1))))
    if ask == "digits":
        ds = _digits(v)
        nums = {10 * x + y for x, y in (product(ds, repeat=2) if _rep(p) else permutations(ds, 2))}
        return Integer(len(nums))
    return Integer(len({frozenset(c) for c in combinations(_people(v), 2)}))


def m1(v, p):
    """Counts the cards a to b by subtracting: b - a."""
    _ask(p, "range")
    return v["b"] - v["a"]


def m2(v, p):
    """Takes the last number on the cards as the number of cards: b."""
    _ask(p, "range")
    return v["b"]


def m3(v, p):
    """Adds the choices for the two places (or two members) instead of pairing each with each."""
    _ask(p, "digits", "committee")
    first, second = _two_step(v, p)
    return Integer(first + second)


def m4(v, p):
    """Swaps the order rule: counts B1G1 and G1B1 as two committees, or 23 and 32 as one number."""
    ask = _ask(p, "digits", "committee")
    if ask == "committee":
        return Integer(len(list(permutations(_people(v), 2))))
    ds = _digits(v)
    picks = combinations_with_replacement(ds, 2) if _rep(p) else combinations(ds, 2)
    return Integer(len(list(picks)))


def m5(v, p):
    """Swaps the repetition rule: lets a member sit twice (B1B1), forgets 22, or allows 22 when barred."""
    ask = _ask(p, "digits", "committee")
    if ask == "committee":
        return Integer(len(list(combinations_with_replacement(_people(v), 2))))
    ds = _digits(v)
    nums = {10 * x + y for x, y in (permutations(ds, 2) if _rep(p) else product(ds, repeat=2))}
    return Integer(len(nums))


def m6(v, p):
    """Leaves out both end cards: counts only the numbers strictly between a and b."""
    _ask(p, "range")
    return v["b"] - v["a"] - 1


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
