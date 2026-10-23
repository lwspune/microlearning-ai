"""C03 Equal sets and subsets: answer models (the key, and one per misconception).

Inputs: named sets. A set written in listing form is a Tuple, in the order the stem lists it (so a model can
see order); a FiniteSet or EmptySet is fine where order doesn't matter.
params["stmts"]: statements "op X Y", op in eq (X = Y), neq (X != Y), sub (X ⊆ Y), notsub (X ⊄ Y).
params["ask"]:
  true   the one true statement; a model gives the one false statement its belief makes true
  false  the one false statement; a model gives the one true statement its belief makes false
  count  how many statements are true; a model counts the ones it believes
A statement's answer is Symbol("op_X_Y").
"""
from sympy import Integer, Symbol, Tuple


def _set(x):
    """The elements, compared as written (letters are names, not unknowns)."""
    return frozenset(x.args)


def _sub(x, y):
    """x ⊆ y: every element of x is an element of y (so ∅ ⊆ y, and y ⊆ y)."""
    return _set(x) <= _set(y)


def _eq(x, y):
    """x = y: exactly the same elements, whatever the order."""
    return _set(x) == _set(y)


def _truth(op, x, y, sub=_sub, eq=_eq):
    if op == "eq":
        return eq(x, y)
    if op == "neq":
        return not eq(x, y)
    if op == "sub":
        return sub(x, y)
    if op == "notsub":
        return not sub(x, y)
    raise ValueError(f"unknown statement {op}")


def _stmts(v, p):
    out = []
    for s in p["stmts"]:
        op, a, b = s.split()
        out.append((op, a, b, v[a], v[b]))
    return out


def _answer(v, p, sub=_sub, eq=_eq):
    """The answer under a reading of ⊆ and =; the key uses the real ones."""
    ask, st = p["ask"], _stmts(v, p)
    real = [_truth(op, x, y) for op, _, _, x, y in st]
    held = [_truth(op, x, y, sub, eq) for op, _, _, x, y in st]
    if ask == "count":
        return Integer(sum(held))
    want = ask == "true"
    if sub is _sub and eq is _eq:
        hits = [i for i, r in enumerate(real) if r == want]
    else:
        hits = [i for i, (r, h) in enumerate(zip(real, held)) if h == want and r != want]
    if len(hits) != 1:
        raise ValueError(f"{len(hits)} statements fit")
    op, a, b, _, _ = st[hits[0]]
    return Symbol(f"{op}_{a}_{b}")


def key(v, p):
    """From the definitions: same elements for =, every element inside for ⊆."""
    return _answer(v, p)


def m1(v, p):
    """Order matters: two listed sets are equal only if they are listed in the same order."""
    def eq(x, y):
        if isinstance(x, Tuple) and isinstance(y, Tuple):
            return list(x) == list(y)
        return _eq(x, y)
    return _answer(v, p, eq=eq)


def m2(v, p):
    """Reads X ⊆ Y the wrong way round: as every element of Y being in X."""
    return _answer(v, p, sub=lambda x, y: _sub(y, x))


def m3(v, p):
    """The empty set is not a subset: a subset must have at least one element."""
    return _answer(v, p, sub=lambda x, y: _sub(x, y) and len(_set(x)) > 0)


def m4(v, p):
    """A subset must be smaller: a set is not a subset of itself (or of a set equal to it)."""
    return _answer(v, p, sub=lambda x, y: _sub(x, y) and not _eq(x, y))


def m5(v, p):
    """Sharing an element is enough: X ⊆ Y if some element of X is in Y."""
    return _answer(v, p, sub=lambda x, y: len(_set(x) & _set(y)) > 0)


def m6(v, p):
    """Same number of elements means equal sets."""
    return _answer(v, p, eq=lambda x, y: len(_set(x)) == len(_set(y)))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
