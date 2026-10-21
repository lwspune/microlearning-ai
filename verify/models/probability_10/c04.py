"""C04 Two coins, two dice: answer models (the key, and one per misconception).

Every item describes a two-stage experiment in params:
  exp     "coins" (two coins), "dice" (two dice, or one die rolled twice) or "number" (a two-digit number)
  faces   dice only: "1-6" (default) or "0-5", the numbers on the faces
  digits  number only: the digits allowed, e.g. "2,3,5,7,9"
  rep     number only: "yes" if a digit may repeat, "no" if not
  event   "heads_atleast" (at least k heads), "sum_atleast" (sum at least k), "prod_zero",
          "first_gt" (first number greater than the second), "prime" (the number formed is prime)
v["k"] is the threshold for the "atleast" events. Every model returns P(A) as a Rational.

The key lists the ordered outcomes, (first, second), and counts them: P(A) = n(A) / n(S).
"""
from sympy import Integer, Rational, isprime


def _faces(p):
    lo, hi = (int(x) for x in p.get("faces", "1-6").split("-"))
    return list(range(lo, hi + 1))


def _digits(p):
    return [int(x) for x in p["digits"].split(",")]


def _space(p, zero_tens=False, rep=None):
    """The ordered outcomes (first stage, second stage)."""
    exp = p["exp"]
    if exp == "coins":
        return [(a, b) for a in "HT" for b in "HT"]
    if exp == "dice":
        f = _faces(p)
        return [(a, b) for a in f for b in f]
    if exp == "number":
        d = _digits(p)
        rep = p["rep"] == "yes" if rep is None else rep
        return [(a, b) for a in d for b in d if (zero_tens or a != 0) and (rep or a != b)]
    raise ValueError(exp)


def _pred(v, p, strict=False):
    """The event's condition on one outcome; strict=True moves its boundary (M6)."""
    ev = p["event"]
    k = v.get("k", Integer(0))
    if ev == "heads_atleast":
        return (lambda o: o.count("H") > k) if strict else (lambda o: o.count("H") >= k)
    if ev == "sum_atleast":
        return (lambda o: o[0] + o[1] > k) if strict else (lambda o: o[0] + o[1] >= k)
    if ev == "first_gt":
        return (lambda o: o[0] >= o[1]) if strict else (lambda o: o[0] > o[1])
    if strict:
        raise ValueError(f"no boundary in {ev}")
    if ev == "prod_zero":
        return lambda o: o[0] * o[1] == 0
    if ev == "prime":
        return lambda o: isprime(10 * o[0] + o[1])
    raise ValueError(ev)


def _p(n_a, n_s):
    if n_a > n_s:
        raise ValueError("a probability above 1")
    return Rational(n_a, n_s)


def _unordered(outcomes):
    return {tuple(sorted(o)) for o in outcomes}


def key(v, p):
    s = _space(p)
    a = [o for o in s if _pred(v, p)(o)]
    return _p(len(a), len(s))


def m1(v, p):
    """Treats (2, 3) and (3, 2) as one outcome: lists unordered pairs in both S and the event."""
    s = _space(p)
    a = [o for o in s if _pred(v, p)(o)]
    return _p(len(_unordered(a)), len(_unordered(s)))


def m2(v, p):
    """Takes n(S) = 36 (or 4) but lists each pair only one way round in the event, so (4, 6) without (6, 4)."""
    s = _space(p)
    a = [o for o in s if _pred(v, p)(o)]
    n_a = len(_unordered(a))
    if n_a == len(a):
        raise ValueError("every pair already appears one way only")
    return _p(n_a, len(s))


def m3(v, p):
    """Adds the counts of the two stages instead of multiplying: two dice give 6 + 6 = 12 outcomes."""
    s = _space(p)
    first = len({o[0] for o in s})
    second = len(s) // first
    a = [o for o in s if _pred(v, p)(o)]
    return _p(len(a), first + second)


def m4(v, p):
    """Lets 0 stand in the tens place, so 02 counts as a two-digit number."""
    if p["exp"] != "number" or 0 not in _digits(p):
        raise ValueError("needs the digit 0")
    s = _space(p, zero_tens=True)
    a = [o for o in s if _pred(v, p)(o)]
    return _p(len(a), len(s))


def m5(v, p):
    """Ignores "without repetition": counts 22, 33, ... as well."""
    if p["exp"] != "number" or p["rep"] == "yes":
        raise ValueError("only without repetition")
    s = _space(p, rep=True)
    a = [o for o in s if _pred(v, p)(o)]
    return _p(len(a), len(s))


def m6(v, p):
    """Moves the boundary: reads "at least 10" as "more than 10", "greater than" as "greater than or equal to"."""
    s = _space(p)
    a = [o for o in s if _pred(v, p, strict=True)(o)]
    return _p(len(a), len(s))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
