"""C02 Events: answer models (the key, and one per misconception).

params:
  exp    coins2 | coins3 | dice2 | committee (2 members from inputs b boys and g girls)
  cond   the event's condition, with threshold input k:
           heads_at_least, tails_at_most, sum_at_least, girls_at_least, sum_eq, sum_lt, both_prime
  cond2  optional second event B (threshold input k2): the answer is then the pair (n(A), n(B))
  ask    n (the number n(A)) | set (the event as a set of outcomes, coins only) | pair

The key lists every outcome of the sample space and keeps those that meet the condition.
"""
from itertools import combinations, combinations_with_replacement, permutations, product

from sympy import FiniteSet, Integer, Symbol, Tuple

_PRIMES = {2, 3, 5}
_PRIMES_WITH_1 = {1, 2, 3, 5}


def _people(v):
    return [f"B{i}" for i in range(1, int(v["b"]) + 1)] + [f"G{i}" for i in range(1, int(v["g"]) + 1)]


def _space(v, p, ordered_flip=False):
    """Outcomes of the experiment. ordered_flip gets order wrong: coins and dice unordered, a committee ordered."""
    exp = p["exp"]
    if exp in ("coins2", "coins3"):
        n = 2 if exp == "coins2" else 3
        if ordered_flip:
            return ["".join(o) for o in combinations_with_replacement("HT", n)]
        return ["".join(o) for o in product("HT", repeat=n)]
    if exp == "dice2":
        if ordered_flip:
            return list(combinations_with_replacement(range(1, 7), 2))
        return list(product(range(1, 7), repeat=2))
    if exp == "committee":
        pick = permutations if ordered_flip else combinations
        return list(pick(_people(v), 2))
    raise ValueError(exp)


def _measure(cond, o):
    """The number the condition talks about, for one outcome."""
    if cond.startswith("heads"):
        return o.count("H")
    if cond.startswith("tails"):
        return o.count("T")
    if cond.startswith("sum"):
        return sum(o)
    if cond.startswith("girls"):
        return sum(1 for x in o if x.startswith("G"))
    raise ValueError(cond)


def _test(cond, k, rule="right", primes=_PRIMES):
    """The condition as a test on one outcome. rule: right | exact (at least/at most read as exactly)
    | strict (the boundary k left out)."""
    if cond == "both_prime":
        return lambda o: o[0] in primes and o[1] in primes
    if cond == "sum_eq":
        return lambda o: sum(o) == k
    if cond == "sum_lt":
        return lambda o: sum(o) < k
    at_least = cond.endswith("at_least")
    if rule == "exact":
        return lambda o: _measure(cond, o) == k
    if rule == "strict":
        return (lambda o: _measure(cond, o) > k) if at_least else (lambda o: _measure(cond, o) < k)
    return (lambda o: _measure(cond, o) >= k) if at_least else (lambda o: _measure(cond, o) <= k)


def _answer(outcomes, p):
    if p["ask"] == "set":
        return FiniteSet(*[Symbol(o) for o in outcomes])
    return Integer(len(outcomes))


def _event(v, p, cond_key="cond", k_key="k", **kw):
    flip = kw.pop("ordered_flip", False)
    return [o for o in _space(v, p, flip) if _test(p[cond_key], v.get(k_key), **kw)(o)]


def _both(v, p, f):
    """Apply f to event A, and to event B when the item has one."""
    a = f(v, p, "cond", "k")
    if p["ask"] == "pair":
        return Tuple(a, f(v, p, "cond2", "k2"))
    return a


def key(v, p):
    return _both(v, p, lambda v, p, c, k: _answer(_event(v, p, c, k), p))


def m1(v, p):
    """Reads 'at least k' or 'at most k' as 'exactly k'."""
    if not p["cond"].endswith(("at_least", "at_most")):
        raise ValueError("needs an at-least or at-most condition")
    return _answer(_event(v, p, rule="exact"), p)


def m2(v, p):
    """Leaves the boundary out: 'at least k' as 'more than k', 'at most k' as 'less than k'."""
    if not p["cond"].endswith(("at_least", "at_most")):
        raise ValueError("needs an at-least or at-most condition")
    return _answer(_event(v, p, rule="strict"), p)


def m3(v, p):
    """Gets order wrong: HT and TH (or (1, 2) and (2, 1)) as one outcome; B1G1 and G1B1 as two committees."""
    return _both(v, p, lambda v, p, c, k: _answer(_event(v, p, c, k, ordered_flip=True), p))


def m4(v, p):
    """Counts 1 as a prime number."""
    if p["cond"] != "both_prime":
        raise ValueError("prime conditions only")
    return _answer([o for o in _space(v, p) if _test("both_prime", None, primes=_PRIMES_WITH_1)(o)], p)


def m5(v, p):
    """Counts the numbers that meet the condition (the sums, or the prime faces) instead of the outcomes."""
    if p["exp"] != "dice2" or p["ask"] == "set":
        raise ValueError("dice counts only")

    def values(v, p, c, k):
        cond = p[c]
        if cond == "both_prime":
            return Integer(len(_PRIMES))
        sums = {sum(o) for o in _space(v, p)}
        return Integer(sum(1 for s in sums if _test(cond, v.get(k))((s, 0))))

    return _both(v, p, values)


def m6(v, p):
    """Swaps the sure and the impossible event: an impossible event gets all of S, a sure event none."""
    n_s = len(_space(v, p))

    def swapped(v, p, c, k):
        n_a = len(_event(v, p, c, k))
        if n_a not in (0, n_s):
            raise ValueError("only for sure or impossible events")
        return Integer(n_s - n_a)

    return _both(v, p, swapped)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
