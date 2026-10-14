"""C15 Reflexive, symmetric, transitive: answer models (the key, and one per misconception).

A relation on a set A comes in params, either as a list or as a rule:
  A = ["1", "2", "3"] and R = ["1,2", "2,2"] (each pair "a,b"), or
  rule = "a + b - 10" (a pair (a, b) is in R when this is 0) and dom = "N" | "Z"; the rule is
  tested on a window of the set (1..W or -W..W), wide enough for the rules used here.
params["ask"]: classify (which of the three properties hold, a named answer such as
Symbol("refl_trans")), or refl_count (the fewest pairs to add to make R reflexive).
"""
from itertools import product

from sympy import Integer, Symbol, symbols, sympify

_a, _b = symbols("a b")
_W = 30


def _relation(p):
    """(A, R): the set and its pairs, from a list or from a rule on a window of N or Z."""
    if "rule" in p:
        A = list(range(1, _W + 1)) if p["dom"] == "N" else list(range(-_W, _W + 1))
        f = sympify(p["rule"], locals={"a": _a, "b": _b})
        R = {(x, y) for x, y in product(A, A) if f.subs({_a: x, _b: y}) == 0}
        return A, R
    A = [int(s) for s in p["A"]]
    R = {tuple(int(s) for s in pair.split(",")) for pair in p["R"]}
    return A, R


def _name(refl, sym, trans):
    """The named answer: the properties that hold, e.g. Symbol('refl_trans')."""
    parts = [n for n, ok in (("refl", refl), ("sym", sym), ("trans", trans)) if ok]
    return Symbol("_".join(parts) if parts else "no_property")


def _chains(R):
    """Every chain (a, b), (b, c) in R, as (a, b, c)."""
    return [(a, b, c) for (a, b) in R for (b2, c) in R if b == b2]


def _reflexive(A, R):
    return all((x, x) in R for x in A)


def _symmetric(R):
    return all((b, a) in R for (a, b) in R)


def _transitive(R):
    return all((a, c) in R for a, b, c in _chains(R))


def key(v, p):
    """Straight from the definitions: every (a, a); every reverse; every chain closes."""
    A, R = _relation(p)
    if p["ask"] == "classify":
        return _name(_reflexive(A, R), _symmetric(R), _transitive(R))
    if p["ask"] == "refl_count":
        return Integer(sum((x, x) not in R for x in A))
    raise ValueError("no such ask")


def m1(v, p):
    """Checks (a, a) only for the elements that appear in R's pairs, not for every element of A."""
    if "rule" in p:
        raise ValueError("every element of N or Z appears in a rule's pairs here")
    A, R = _relation(p)
    used = sorted({x for pair in R for x in pair})
    if p["ask"] == "classify":
        return _name(_reflexive(used, R), _symmetric(R), _transitive(R))
    if p["ask"] == "refl_count":
        return Integer(sum((x, x) not in R for x in used))
    raise ValueError("no such ask")


def m2(v, p):
    """Skips the chains that come back to the start: (a, b), (b, a) is not checked for (a, a)."""
    if p["ask"] != "classify":
        raise ValueError("only a classification has a transitivity check")
    A, R = _relation(p)
    trans = all((a, c) in R for a, b, c in _chains(R) if a != c)
    return _name(_reflexive(A, R), _symmetric(R), trans)


def m3(v, p):
    """One example is enough: some (a, a); some (a, b), a != b, with its reverse; some chain
    (a, b), (b, c) through new elements (a != b, b != c) that closes."""
    A, R = _relation(p)
    if p["ask"] == "refl_count":  # one (a, a) already there: "it is reflexive, add nothing"
        if not any(a == b for a, b in R):
            raise ValueError("no (a, a) to take as the example")
        return Integer(0)
    refl = any(a == b for a, b in R)
    sym = any(a != b and (b, a) in R for a, b in R)
    trans = any((a, c) in R for a, b, c in _chains(R) if a != b and b != c)
    return _name(refl, sym, trans)


def m4(v, p):
    """Mixes up the names: tests 'every (a, b) has (b, a)' for reflexive, and 'every (a, a)' for symmetric."""
    A, R = _relation(p)
    if p["ask"] == "classify":
        return _name(_symmetric(R), _reflexive(A, R), _transitive(R))
    if p["ask"] == "refl_count":  # counts the missing reverses
        return Integer(sum((b, a) not in R for a, b in R))
    raise ValueError("no such ask")


def m5(v, p):
    """Takes reflexive to mean 'only pairs (a, a)': any other pair in R spoils it (the identity relation)."""
    if p["ask"] != "classify":
        raise ValueError("only a classification")
    A, R = _relation(p)
    return _name(R == {(x, x) for x in A}, _symmetric(R), _transitive(R))


MODELS = {"key": key, "C15-M1": m1, "C15-M2": m2, "C15-M3": m3, "C15-M4": m4, "C15-M5": m5}
