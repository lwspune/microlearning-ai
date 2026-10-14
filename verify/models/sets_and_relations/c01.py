"""C01 Roster and set-builder form: answer models (the key, and one per misconception).

A set given by a rule: A = {x | x = f(n), n in N, W or Z, lo < n < hi} (each end strict or not).
Inputs (sympy numbers): hi, and lo (needed for Z). Params:
  f: the rule, an expression in n (default "n");
  over: "N" (starts at 1), "W" (starts at 0) or "Z";
  hi_op, lo_op: "<" or "<=";
  ask: "set"   the roster form of A;
       "k"     B = {x | x = f(n), n in over, n < k} is equivalent to the set of letters of
               params["word"] (same number of elements): the value of k.
"""
from sympy import FiniteSet, Integer, sympify, symbols

_n = symbols("n")
_START = {"N": 1, "W": 0}


def _domain(v, p, hi_op=None, start=None):
    """The values of n the rule allows, read straight from the definition."""
    over = p["over"]
    hi_op = hi_op or p.get("hi_op", "<")
    if over == "Z":
        lo, lo_op = v["lo"], p.get("lo_op", "<")
        first = lo + 1 if lo_op == "<" else lo
    else:
        first = _START[over] if start is None else start
        if "lo" in v:
            first = max(first, v["lo"] + 1 if p.get("lo_op", "<") == "<" else v["lo"])
    last = v["hi"] - 1 if hi_op == "<" else v["hi"]
    return [Integer(n) for n in range(int(first), int(last) + 1)]


def _rule(p):
    return sympify(p.get("f", "n"), locals={"n": _n})


def _elements(ns, p):
    f = _rule(p)
    return FiniteSet(*[f.subs(_n, n) for n in ns])


def _k_for(count, target):
    """The k for which B, read with `count(k)` elements, has `target` elements."""
    for k in range(0, 200):
        if count(k) == target:
            return Integer(k)
    raise ValueError("no k gives that many elements")


def _b_count(p, hi_op="<", start=None):
    """n(B) for B = {f(n) | n in over, n (hi_op) k}, as a function of k."""
    return lambda k: len(_elements(_domain({"hi": Integer(k)}, p, hi_op=hi_op, start=start), p))


def _letters(p):
    return len(set(p["word"]))


def key(v, p):
    """List every allowed n, apply the rule, keep each value once (a set has no repeats)."""
    if p["ask"] == "set":
        return _elements(_domain(v, p), p)
    if p["ask"] == "k":
        return _k_for(_b_count(p), _letters(p))
    raise ValueError("no such ask")


def m1(v, p):
    """Counts repeats: every letter of the word (or every value of n) as a new element."""
    if p["ask"] == "k":
        return _k_for(_b_count(p), len(p["word"]))
    raise ValueError("repeats don't change a roster set")


def m2(v, p):
    """Includes the end of a strict inequality: reads n < b as n <= b."""
    if p["ask"] == "k":
        return _k_for(_b_count(p, hi_op="<="), _letters(p))
    if p.get("hi_op", "<") != "<":
        raise ValueError("no strict end to include")
    return _elements(_domain(v, p, hi_op="<="), p)


def m3(v, p):
    """Swaps N and W: starts N at 0, or W at 1."""
    if p["over"] not in _START:
        raise ValueError("only N and W have a starting number to mix up")
    start = 1 - _START[p["over"]]
    if p["ask"] == "k":
        return _k_for(_b_count(p, start=start), _letters(p))
    return _elements(_domain(v, p, start=start), p)


def m4(v, p):
    """Lists the values of n, not the elements x = f(n) the rule makes from them."""
    if p["ask"] == "set":
        return FiniteSet(*_domain(v, p))
    raise ValueError("listing n gives the same count")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
