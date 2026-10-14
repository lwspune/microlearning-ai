"""C03 Union and intersection: answer models (the key, and one per misconception).

Inputs: one per set, named by its letter. A set given in roster form is a set, `{1, 4, 7}`; a set
given by a quadratic rule {x | ax² + bx + c = 0} is its coefficient list, `[a, b, c]`.
params["expr"]: the set asked for, in letters with | for ∪, & for ∩ and brackets, e.g. "A | (B & C)".
"""
from sympy import FiniteSet, S, Symbol, roots

_x = Symbol("x")


def _roster(v, flip=False):
    """Each set in roster form. flip: the roots of a quadratic taken with the wrong sign."""
    out = {}
    for name, val in v.items():
        if isinstance(val, (list, tuple)):
            a, b, c = val
            rs = [r for r in roots(a * _x**2 + b * _x + c, _x) if r.is_real]
            out[name] = FiniteSet(*[-r if flip else r for r in rs])
        else:
            out[name] = FiniteSet(*val) if val else S.EmptySet
    return out


def _parse(expr):
    """A parse tree: a set letter, or (op, left, right) with op '|' or '&'. Operators of equal rank, left to right."""
    tokens = [ch for ch in expr if not ch.isspace()]
    pos = 0

    def atom():
        nonlocal pos
        tok = tokens[pos]
        pos += 1
        if tok == "(":
            tree = chain()
            assert tokens[pos] == ")", f"unbalanced brackets in {expr!r}"
            pos += 1
            return tree
        assert tok.isalpha(), f"unexpected {tok!r} in {expr!r}"
        return tok

    def chain():
        nonlocal pos
        tree = atom()
        while pos < len(tokens) and tokens[pos] in "|&":
            op = tokens[pos]
            pos += 1
            tree = (op, tree, atom())
        return tree

    tree = chain()
    assert pos == len(tokens), f"trailing input in {expr!r}"
    return tree


def _eval(tree, sets, union, inter):
    if isinstance(tree, str):
        return sets[tree]
    op, left, right = tree
    a, b = _eval(left, sets, union, inter), _eval(right, sets, union, inter)
    return union(a, b) if op == "|" else inter(a, b)


def _flat(tree):
    """The letters and operators in reading order, brackets dropped."""
    if isinstance(tree, str):
        return [tree]
    op, left, right = tree
    return _flat(left) + [op] + _flat(right)


def _ops(tree):
    return set() if isinstance(tree, str) else {tree[0]} | _ops(tree[1]) | _ops(tree[2])


def _union(a, b):
    return a | b


def _inter(a, b):
    return a & b


def key(v, p):
    """Straight from the definitions, element by element: x ∈ A ∪ B if x is in A or in B (or both); x ∈ A ∩ B if in both."""
    sets = _roster(v)
    tree = _parse(p["expr"])
    universe = set().union(*[set(s) for s in sets.values()])

    def member(t, x):
        if isinstance(t, str):
            return x in sets[t]
        op, left, right = t
        return (member(left, x) or member(right, x)) if op == "|" else (member(left, x) and member(right, x))

    found = [x for x in universe if member(tree, x)]
    return FiniteSet(*found) if found else S.EmptySet


def m1(v, p):
    """Swaps the symbols: reads ∪ as 'common to both' and ∩ as 'everything in either'."""
    return _eval(_parse(p["expr"]), _roster(v), _inter, _union)


def m2(v, p):
    """Reads 'in A or in B' as 'in exactly one of them': ∪ leaves out the elements the sets share."""
    tree = _parse(p["expr"])
    if "|" not in _ops(tree):
        raise ValueError("no union to misread")
    sets = _roster(v)
    if _ops(tree) == {"|"}:  # a plain union of 2 or 3 sets: the elements in exactly one of them
        names = [t for t in _flat(tree) if t.isalpha()]
        alone = [x for x in set().union(*[set(sets[n]) for n in names]) if sum(x in sets[n] for n in names) == 1]
        return FiniteSet(*alone) if alone else S.EmptySet
    return _eval(tree, sets, lambda a, b: a.symmetric_difference(b), _inter)


def m3(v, p):
    """Ignores the brackets and works left to right: A ∪ (B ∩ C) done as (A ∪ B) ∩ C."""
    tree = _parse(p["expr"])
    flat = _flat(tree)
    if _ops(tree) != {"|", "&"}:
        raise ValueError("brackets only matter when ∪ and ∩ are mixed")
    left_to_right = _parse(" ".join(flat))
    return _eval(left_to_right, _roster(v), _union, _inter)


def m4(v, p):
    """Lists the roots of a quadratic with the wrong sign: (x + 10)(x + 4) = 0 read as x = 10, 4."""
    if not any(isinstance(val, (list, tuple)) for val in v.values()):
        raise ValueError("no set given by a quadratic")
    return _eval(_parse(p["expr"]), _roster(v, flip=True), _union, _inter)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4}
