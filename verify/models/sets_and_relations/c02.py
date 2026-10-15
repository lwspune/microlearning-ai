"""C02 Subsets and the power set: answer models (the key, and one per misconception).

Inputs: A = the set (a FiniteSet, possibly EmptySet); k = how many times P is applied (default 1);
for statement items, named sets (e.g. X, E) that the statements talk about.
params["ask"]:
  list            the power set P(A), as a set of sets
  count           n(P(...P(A)...)), P applied k times
  proper          the number of proper subsets of A
  nonempty_proper the number of non-empty proper subsets of A
  stmt            which statement is true; params["stmts"] lists them as "op NAME",
                  op in elem (NAME ∈ A), sub (NAME ⊆ A), notsub (NAME ⊄ A), proper (NAME a proper subset of A).
                  The answer is Symbol("op_NAME").
"""
from itertools import combinations

from sympy import FiniteSet, Integer, S, Symbol


def _subsets(s):
    """Every subset of s, from the definition: each choice of its elements."""
    els = list(s)
    return [FiniteSet(*c) for r in range(len(els) + 1) for c in combinations(els, r)]


def _n(v):
    return len(list(v["A"]))


def _k(v):
    return int(v.get("k", 1))


def _stmts(v, p):
    out = []
    for s in p["stmts"]:
        op, name = s.split()
        out.append((op, name, v[name]))
    return out


def _truth(op, x, a, sub):
    """Is the statement true, given a rule sub(x, a) for 'x ⊆ a' and the real ∈."""
    if op == "elem":
        return x in a
    if op == "sub":
        return sub(x, a)
    if op == "notsub":
        return not sub(x, a)
    if op == "proper":
        return sub(x, a) and x != a
    raise ValueError(f"unknown statement {op}")


def _sub(x, a):
    """x ⊆ a: every element of x is an element of a (so ∅ ⊆ a always)."""
    return all(e in a for e in x)


def _wrongly_true(v, p, believes):
    """The one statement that is false but true under a belief (op, x, a -> truth, or None: no change)."""
    a = v["A"]
    hits = []
    for op, name, x in _stmts(v, p):
        real = _truth(op, x, a, _sub)
        b = believes(op, x, a)
        wrong = real if b is None else b
        if wrong and not real:
            hits.append(Symbol(f"{op}_{name}"))
    if len(hits) != 1:
        raise ValueError(f"belief makes {len(hits)} false statements true")
    return hits[0]


def key(v, p):
    """Built from the definition: list the subsets, then count or filter them."""
    a, ask = v["A"], p["ask"]
    if ask == "list":
        return FiniteSet(*_subsets(a))
    if ask == "count":
        s = a
        for _ in range(_k(v)):
            s = FiniteSet(*_subsets(s))
        return Integer(len(list(s)))
    if ask == "proper":
        return Integer(sum(1 for b in _subsets(a) if b != a))
    if ask == "nonempty_proper":
        return Integer(sum(1 for b in _subsets(a) if b != a and b != S.EmptySet))
    if ask == "stmt":
        true = [Symbol(f"{op}_{name}") for op, name, x in _stmts(v, p) if _truth(op, x, a, _sub)]
        if len(true) != 1:
            raise ValueError(f"{len(true)} statements are true")
        return true[0]
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Leaves out ∅: doesn't see that ∅ is a subset of every set."""
    a, ask, n = v["A"], p["ask"], _n(v)
    if ask == "list":
        return FiniteSet(*[b for b in _subsets(a) if b != S.EmptySet])
    if ask == "count":
        x = n
        for _ in range(_k(v)):
            x = 2**x - 1
        return Integer(x)
    if ask == "proper":
        return Integer(2**n - 2)
    if ask == "stmt":
        return _wrongly_true(v, p, lambda op, x, a: (not _sub(x, a) or x == S.EmptySet) if op == "notsub" else None)
    raise ValueError("leaving out ∅ gives the key here")


def m2(v, p):
    """Treats 'subset' and 'proper subset' as the same: drops A from P(A), or keeps A as a proper subset."""
    a, ask, n = v["A"], p["ask"], _n(v)
    if ask == "list":
        return FiniteSet(*[b for b in _subsets(a) if b != a])
    if ask == "count":
        x = n
        for _ in range(_k(v)):
            x = 2**x - 1
        return Integer(x)
    if ask == "proper":
        return Integer(2**n)
    if ask == "nonempty_proper":
        return Integer(2**n - 1)
    if ask == "stmt":
        return _wrongly_true(v, p, lambda op, x, a: _sub(x, a) if op == "proper" else None)
    raise ValueError(f"no ask {ask}")


def m3(v, p):
    """Nested power sets: multiplies the exponents, n(P(P(A))) = (2^n)^2 = 2^(2n), not 2^(2^n)."""
    k = _k(v)
    if p["ask"] != "count" or k < 2:
        raise ValueError("needs a power set of a power set")
    return Integer(2 ** (k * _n(v)))


def m4(v, p):
    """Mixes up ∈ and ⊆: writes x for the subset {x}, or reads {x} ∈ A as {x} ⊆ A."""
    a, ask = v["A"], p["ask"]
    if ask == "list":
        return FiniteSet(*[(list(b)[0] if len(list(b)) == 1 else b) for b in _subsets(a)])
    if ask == "stmt":
        def believes(op, x, a):
            if op == "sub":
                return _sub(x, a) or x in a
            if op == "elem":
                return x in a or _sub(x, a)
            return None
        return _wrongly_true(v, p, believes)
    raise ValueError("counts are C02-M5")


def m5(v, p):
    """Counts ∅ as an element of A (since ∅ ⊆ A), so works with n(A) + 1 elements."""
    a, ask, n = v["A"], p["ask"], _n(v)
    n1 = n if S.EmptySet in a else n + 1
    if ask == "count":
        x = n1
        for _ in range(_k(v)):
            x = 2**x
        return Integer(x)
    if ask == "proper":
        return Integer(2**n1 - 1)
    if ask == "nonempty_proper":
        return Integer(2**n1 - 2)
    raise ValueError("listing and statements are C02-M4")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
