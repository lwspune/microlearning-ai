"""C16 Equivalence relations: answer models (the key, and one per misconception).

The set is A = {lo, lo + 1, ..., hi} (inputs lo, hi). The relation is either
  - given by pairs: input R (a set of pairs); the item is about the smallest equivalence
    relation on A containing R, or
  - given by a rule: input m; (a, b) is in R when m divides a − b (equivalently |a − b| is a
    multiple of m).
params["ask"]: add_count (how many pairs must be added to R) | add_set (which pairs) |
class (the class of input x) | pairs (how many ordered pairs the equivalence relation has).
"""
from sympy import FiniteSet, Integer, Tuple


def _set_of_a(v):
    return list(range(int(v["lo"]), int(v["hi"]) + 1))


def _pairs(v):
    """R's pairs as Python int tuples (sympify turns {(1, 2)} into a Python set)."""
    return {(int(a), int(b)) for a, b in v["R"]}


def _same(v, a, b):
    """True when a and b are in one class of the correct equivalence relation."""
    if "m" in v:
        return (a - b) % int(v["m"]) == 0
    # Union-find over A, joining the two ends of every pair of R.
    parent = {x: x for x in _set_of_a(v)}

    def root(x):
        while parent[x] != x:
            x = parent[x]
        return x

    for p, q in _pairs(v):
        parent[root(p)] = root(q)
    return root(a) == root(b)


def _equivalence(v):
    A = _set_of_a(v)
    return {(a, b) for a in A for b in A if _same(v, a, b)}


def _answer(v, p, E):
    """Read the asked-for answer off a relation E that a student (or the key) believes is R."""
    ask = p["ask"]
    if ask == "pairs":
        return Integer(len(E))
    if ask == "class":
        x = int(v["x"])
        return FiniteSet(*sorted(b for a, b in E if a == x))
    added = E - _pairs(v)
    if ask == "add_count":
        return Integer(len(added))
    if ask == "add_set":
        return FiniteSet(*(Tuple(a, b) for a, b in sorted(added)))
    raise ValueError(f"no such ask {ask}")


def key(v, p):
    """Straight from the definition: a is related to b exactly when they fall in one class."""
    return _answer(v, p, _equivalence(v))


def m1(v, p):
    """No chaining: adds every (a, a) and the reverse of each pair, but never (a, c) from (a, b), (b, c)."""
    if "m" in v:
        raise ValueError("a rule already relates every pair it should; nothing to chain")
    R = _pairs(v)
    return _answer(v, p, R | {(b, a) for a, b in R} | {(a, a) for a in _set_of_a(v)})


def m2(v, p):
    """Reflexive only where it shows: leaves out (a, a) for an element related to no other element."""
    E = _equivalence(v)
    if "m" in v:
        alone = {a for a in _set_of_a(v) if all(b == a for x, b in E if x == a)}
    else:
        used = {x for pair in _pairs(v) for x in pair}
        alone = set(_set_of_a(v)) - used
    if not alone:
        raise ValueError("every element is related to another one")
    return _answer(v, p, E - {(a, a) for a in alone})


def m3(v, p):
    """An element isn't related to itself: drops every (a, a), so a is not in its own class."""
    E = _equivalence(v)
    if p["ask"].startswith("add"):  # pairs already in R stay; only the (a, a) still to add are skipped
        return _answer(v, p, {(a, b) for a, b in E if a != b} | _pairs(v))
    return _answer(v, p, {(a, b) for a, b in E if a != b})


def m4(v, p):
    """One direction only: keeps (a, b) but never adds (b, a)."""
    A = _set_of_a(v)
    if "m" in v:  # reads 'm divides a − b' as needing a − b ≥ 0
        return _answer(v, p, {(a, b) for a, b in _equivalence(v) if a >= b})
    # Reflexive and transitive, but not symmetric: follow the pairs forwards only.
    E = _pairs(v) | {(a, a) for a in A}
    while True:
        more = {(a, d) for a, b in E for c, d in E if b == c} - E
        if not more:
            return _answer(v, p, E)
        E |= more


MODELS = {"key": key, "C16-M1": m1, "C16-M2": m2, "C16-M3": m3, "C16-M4": m4}
