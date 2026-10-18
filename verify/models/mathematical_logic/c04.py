"""C04 Tautology, contradiction, contingency: answer models (the key, and one per misconception).

params["f"]: the statement pattern, written with Not, And, Or, Implies, Equivalent over the
letters p, q, r (e.g. "Implies(And(Implies(p, q), Not(q)), Not(p))"). It is a param, not an
input, because sympy evaluates Equivalent(p, p) and Implies(p, p) to true on sight, which would
hide a wrong truth table.

Every answer is a Tuple (count, kind): how many rows of the truth table end in T, and the named
answer Symbol("tautology"), Symbol("contradiction") or Symbol("contingency").
"""
import ast
from itertools import product

from sympy import And, Equivalent, Implies, Integer, Not, Or, Symbol, Tuple, satisfiable

_OPS = {"Not", "And", "Or", "Implies", "Equivalent"}
TAUT, CONTRA, CONT = Symbol("tautology"), Symbol("contradiction"), Symbol("contingency")


def _parse(s):
    """The pattern as a tree: a letter, or (op, [subtrees])."""
    def walk(n):
        if isinstance(n, ast.Name):
            assert n.id in "pqr" and len(n.id) == 1, f"unknown letter {n.id}"
            return n.id
        assert isinstance(n, ast.Call) and n.func.id in _OPS, f"bad pattern {s}"
        return (n.func.id, [walk(a) for a in n.args])
    return walk(ast.parse(s, mode="eval").body)


def _letters(tree):
    if isinstance(tree, str):
        return {tree}
    return set().union(*(_letters(a) for a in tree[1]))


def _sympy(tree):
    """The tree as a sympy.logic expression (for the key)."""
    if isinstance(tree, str):
        return Symbol(tree)
    op = {"Not": Not, "And": And, "Or": Or, "Implies": Implies, "Equivalent": Equivalent}[tree[0]]
    return op(*(_sympy(a) for a in tree[1]))


def _answer(count, n):
    """Classify straight from the definition: all T, all F, or a mix."""
    kind = TAUT if count == 2**n else CONTRA if count == 0 else CONT
    return Tuple(Integer(count), kind)


def key(v, p):
    tree = _parse(p["f"])
    names = sorted(_letters(tree))
    e = _sympy(tree)
    syms = [Symbol(c) for c in names]
    count = sum(1 for vals in product([True, False], repeat=len(syms)) if e.subs(dict(zip(syms, vals))))
    # Cross-check the kind with satisfiable: no model means a contradiction, no model of ~e a tautology.
    ans = _answer(count, len(names))
    assert (ans[1] == CONTRA) == (not satisfiable(e)) and (ans[1] == TAUT) == (not satisfiable(Not(e)))
    return ans


# Truth tables a student might use for each connective: (a, b) -> value.
_RIGHT = {
    "And": lambda a, b: a and b,
    "Or": lambda a, b: a or b,
    "Implies": lambda a, b: (not a) or b,
    "Equivalent": lambda a, b: a == b,
}


def _eval(tree, row, table):
    if isinstance(tree, str):
        return row[tree]
    op, args = tree
    vals = [_eval(a, row, table) for a in args]
    if op == "Not":
        return not vals[0]
    out = vals[0]
    for b in vals[1:]:
        out = table[op](out, b)
    return out


def _count(p, wrong):
    """Rows ending in T when the student fills the table with `wrong` connectives."""
    tree = _parse(p["f"])
    names = sorted(_letters(tree))
    table = {**_RIGHT, **wrong}
    for op in wrong:
        if op not in str(tree):
            raise ValueError(f"no {op} in the pattern")
    count = sum(1 for vals in product([True, False], repeat=len(names)) if _eval(tree, dict(zip(names, vals)), table))
    return count, len(names)


def m1(v, p):
    """Two kinds only: all T is a tautology, anything else a contradiction (no contingency)."""
    ans = key(v, p)
    if ans[1] != CONT:
        raise ValueError("only a contingency shows this")
    return Tuple(ans[0], CONTRA)


def m2(v, p):
    """A tautology is a pattern that can be true: one T row is enough."""
    ans = key(v, p)
    if ans[1] != CONT:
        raise ValueError("only a contingency shows this")
    return Tuple(ans[0], TAUT)


def m3(v, p):
    """Fills p -> q as 'both the same' (like p <-> q): F -> T taken as F."""
    return _answer(*_count(p, {"Implies": lambda a, b: a == b}))


def m4(v, p):
    """Reads 'or' as exclusive: T v T taken as F."""
    return _answer(*_count(p, {"Or": lambda a, b: a != b}))


def m5(v, p):
    """Fills p <-> q as one-way, like p -> q: T <-> F is F, but F <-> T taken as T."""
    return _answer(*_count(p, {"Equivalent": lambda a, b: (not a) or b}))


def m6(v, p):
    """Fills p -> q like p ^ q: true only when both are T, so F -> T and F -> F taken as F."""
    return _answer(*_count(p, {"Implies": lambda a, b: a and b}))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
