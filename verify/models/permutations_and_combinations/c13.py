"""C13 Dividing into groups: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["kind"]:
  "split": inputs n; params sizes (list of group sizes, in the order the stem gives them, summing
           to n) and labelled ("yes" when the groups have names: given to named people, car vs
           train; "no" when nothing tells groups of the same size apart).
  "two":   inputs n, lo; n people into two labelled groups with at least lo in each.
"""
from collections import Counter

from sympy import binomial, factorial, ff, Integer, prod


def _sizes(v, p):
    sizes = [Integer(s) for s in p["sizes"]]
    assert sum(sizes) == v["n"], "group sizes must add up to n"
    return sizes


def _choose_in_turn(n, sizes):
    """Fill the groups one after another, choosing each group's members from those left."""
    left, ways = n, Integer(1)
    for s in sizes:
        ways *= binomial(left, s)
        left -= s
    return ways


def _repeats(sizes):
    """The number of orders in which groups of equal size can be picked: product of (count)!."""
    return prod(factorial(c) for c in Counter(sizes).values())


def key(v, p):
    """Choose each group in turn; unnamed groups of equal size come out in every order, so divide
    by those orders. Two named groups with at least lo each: add the cases lo..n-lo."""
    n = v["n"]
    if p["kind"] == "two":
        lo = v["lo"]
        return sum(binomial(n, r) for r in range(lo, n - lo + 1))
    sizes = _sizes(v, p)
    ways = _choose_in_turn(n, sizes)
    return ways if p["labelled"] == "yes" else ways / _repeats(sizes)


def m1(v, p):
    """Over-divides: divides by k! (k = the number of groups) even when the groups differ in size
    or have names, as if every group were interchangeable."""
    if p["kind"] == "two":
        return key(v, p) / 2
    sizes = _sizes(v, p)
    if p["labelled"] == "no" and len(set(sizes)) == 1:
        raise ValueError("unnamed groups all of one size: dividing by k! is right")
    return _choose_in_turn(v["n"], sizes) / factorial(len(sizes))


def m2(v, p):
    """Forgets to divide by k! for unnamed groups of equal size."""
    if p["kind"] == "two":
        raise ValueError("named groups: nothing to divide")
    sizes = _sizes(v, p)
    if p["labelled"] == "yes" or _repeats(sizes) == 1:
        raise ValueError("no unnamed groups of equal size")
    return _choose_in_turn(v["n"], sizes)


def m3(v, p):
    """Counts the order inside each group: nPr for each group in place of nCr."""
    if p["kind"] == "two":
        raise ValueError("not modelled for the two-group case count")
    sizes = _sizes(v, p)
    left, ways = v["n"], Integer(1)
    for s in sizes:
        ways *= ff(left, s)
        left -= s
    return ways


def m4(v, p):
    """Swaps the sum and product rules: adds the choices for the groups (one task AND then
    another), or multiplies the separate cases (one OR another)."""
    n = v["n"]
    if p["kind"] == "two":
        lo = v["lo"]
        return prod(binomial(n, r) for r in range(lo, n - lo + 1))
    left, total = n, Integer(0)
    for s in _sizes(v, p):
        total += binomial(left, s)
        left -= s
    return total


def m5(v, p):
    """Drops the top case of an 'at least' range: the first group takes lo..n-lo-1."""
    if p["kind"] != "two":
        raise ValueError("only for case counts")
    n, lo = v["n"], v["lo"]
    return sum(binomial(n, r) for r in range(lo, n - lo))


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4, "C13-M5": m5}
