"""C06 Arranging identical objects: answer models (the key, and one per misconception).

Inputs: none. params: word (the letters or digits, e.g. "BANANA"), cond: all | together | apart | lead.
  together: params["grp"] lists the letters that must stand together (e.g. "AEI" for the vowels).
  apart: params["x"] is the letter whose copies must never stand side by side.
  lead: params["x"] is the digit that can't come first (0), so every arrangement is a number of full length.
"""
from collections import Counter
from functools import lru_cache
from math import factorial, prod

from sympy import Integer


def _distinct(word, ok):
    """Counts the different strings of exactly these letters, built one place at a time, that `ok` allows.
    ok(prev, ch, pos, state) -> new state, or None to forbid placing ch there."""
    letters = sorted(set(word))
    start = tuple(Counter(word)[c] for c in letters)

    @lru_cache(maxsize=None)
    def go(left, prev, pos, state):
        if sum(left) == 0:
            return 1
        total = 0
        for i, c in enumerate(letters):
            if left[i]:
                s = ok(prev, c, pos, state)
                if s is not None:
                    total += go(left[:i] + (left[i] - 1,) + left[i + 1:], c, pos + 1, s)
        return total

    return go(start, "", 0, 0)


def key(v, p):
    """Straight from the definition: count the different strings, place by place, that obey the condition."""
    word, cond = p["word"], p["cond"]
    if cond == "all":
        ok = lambda prev, c, pos, s: 0
    elif cond == "together":
        g = set(p["grp"])

        def ok(prev, c, pos, s):  # s: 0 = group not started, 1 = inside the group's run, 2 = run over
            if c in g:
                return None if s == 2 else 1
            return 2 if s == 1 else s
    elif cond == "apart":
        ok = lambda prev, c, pos, s: None if c == p["x"] and prev == p["x"] else 0
    elif cond == "lead":
        ok = lambda prev, c, pos, s: None if pos == 0 and c == p["x"] else 0
    else:
        raise ValueError(cond)
    return Integer(_distinct(word, ok))


def _formula(p, div):
    """The textbook method, n!/(p! q! ...), with `div` standing in for what the student divides by."""
    word, cond = p["word"], p["cond"]
    cnt = Counter(word)
    arr = lambda c: factorial(sum(c.values())) // div(c)
    if cond == "all":
        return arr(cnt)
    if cond == "together":  # glue the group into one block, then arrange inside the block
        grp = Counter({k: n for k, n in cnt.items() if k in p["grp"]})
        rest = Counter({k: n for k, n in cnt.items() if k not in p["grp"]})
        rest["#block"] = 1
        return arr(rest) * arr(grp)
    if cond == "apart":  # all, less those with the copies of x glued together
        x = p["x"]
        rest = Counter(cnt)
        rest[x] = 0
        rest["#block"] = 1
        return arr(cnt) - arr(+rest) * arr(Counter({x: cnt[x]}))
    if cond == "lead":  # all, less those that start with x
        rest = Counter(cnt)
        rest[p["x"]] -= 1
        return arr(cnt) - arr(+rest)
    raise ValueError(cond)


def m1(v, p):
    """Treats alike letters as different: n! (and g! inside a block)."""
    return Integer(_formula(p, lambda c: 1))


def m2(v, p):
    """Divides by the counts p x q x ... instead of p! q! ...."""
    if max(Counter(p["word"]).values()) < 3:
        raise ValueError("with no letter used 3 or more times, p = p! and this gives the key")
    return Integer(_formula(p, lambda c: prod(c.values())))


def m3(v, p):
    """Lumps all the repeated letters into one alike group: divides by (p + q + ...)!."""
    if sum(1 for n in Counter(p["word"]).values() if n > 1) < 2:
        raise ValueError("needs two groups of alike letters")
    ans = _formula(p, lambda c: factorial(sum(n for n in c.values() if n > 1)))
    if ans <= 1:
        raise ValueError("the lumped count makes no sense here")
    return Integer(ans)


def m4(v, p):
    """Counts every arrangement and forgets to remove the ones that break the condition."""
    if p["cond"] not in ("apart", "lead"):
        raise ValueError("only where bad arrangements are taken away")
    return Integer(_formula({"word": p["word"], "cond": "all"}, lambda c: prod(factorial(n) for n in c.values())))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4}
