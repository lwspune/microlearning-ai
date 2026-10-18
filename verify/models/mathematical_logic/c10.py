"""C10 Switching circuits: answer models (the key, and one per misconception).

params["f"]: the circuit, written as a tree over the switches p (S1), q (S2), r (S3):
And(...) = switches or blocks in series, Or(...) = branches in parallel, Not(x) = the switch
x' that is always in the opposite state to x (e.g. "Or(And(Not(p), q), And(p, Not(r)))").
It is a param, not an input, because sympy would flatten and reorder the tree, and one
misconception (M3) depends on the order the switches are read in.

params["ask"]:
  "form":  the statement of the circuit, as its truth column read down the rows of the
           switching table in the standard order (the first letter halves slowest):
           Symbol("TFFT"). Two statements are the same circuit exactly when their columns
           agree, so an option matches a model whenever the statements are equivalent.
  "count": the number of settings of the switches (rows of the switching table) in which
           the lamp glows, an Integer.

Letters are p = "S1 is closed", q = "S2 is closed", r = "S3 is closed"; the lamp glows when
the statement is T. The key is computed with sympy.logic straight from the circuit, never
through a student's reading of it.
"""
import ast
from itertools import product

from sympy import And, Integer, Not, Or, Symbol, false, satisfiable, true

_OPS = {"Not", "And", "Or"}
_LETTERS = "pqr"


def _parse(s):
    """The circuit as a tree: a letter, or (op, [subtrees])."""
    def walk(n):
        if isinstance(n, ast.Name):
            assert n.id in _LETTERS and len(n.id) == 1, f"unknown switch {n.id}"
            return n.id
        assert isinstance(n, ast.Call) and n.func.id in _OPS, f"bad circuit {s}"
        args = [walk(a) for a in n.args]
        if n.func.id == "Not":
            assert len(args) == 1 and isinstance(args[0], str), "a primed switch is Not(letter)"
        else:
            assert len(args) >= 2, f"{n.func.id} needs two or more parts"
        return (n.func.id, args)
    return walk(ast.parse(s, mode="eval").body)


def _letters(tree):
    if isinstance(tree, str):
        return {tree}
    return set().union(*(_letters(a) for a in tree[1]))


def _has(tree, op):
    return not isinstance(tree, str) and (tree[0] == op or any(_has(a, op) for a in tree[1]))


def _sympy(tree):
    if isinstance(tree, str):
        return Symbol(tree)
    op = {"Not": Not, "And": And, "Or": Or}[tree[0]]
    return op(*(_sympy(a) for a in tree[1]))


def _answer(e, p):
    """The statement e of the circuit given in p, as the item asks for it."""
    names = sorted(_letters(_parse(p["f"])), key=_LETTERS.index)
    syms = [Symbol(n) for n in names]
    col = []
    for vals in product([True, False], repeat=len(names)):
        col.append(e.xreplace(dict(zip(syms, vals))) == true)
    if p["ask"] == "count":
        return Integer(sum(col))
    assert p["ask"] == "form", f"unknown ask {p['ask']}"
    return Symbol("".join("T" if c else "F" for c in col))


def key(v, p):
    e = _sympy(_parse(p["f"]))
    ans = _answer(e, p)
    # Cross-check: the lamp never glows exactly when the statement can't be satisfied.
    if p["ask"] == "count":
        assert (ans == 0) == (not satisfiable(e))
    return ans


def _map(tree, fn):
    """Rebuild the tree bottom-up, letting fn replace any node."""
    if isinstance(tree, str):
        return fn(tree)
    return fn((tree[0], [_map(a, fn) for a in tree[1]]))


def m1(v, p):
    """Swaps the two rules: series read as 'or', parallel as 'and'."""
    tree = _parse(p["f"])
    if not (_has(tree, "And") or _has(tree, "Or")):
        raise ValueError("no series or parallel joins")
    swap = {"And": "Or", "Or": "And"}
    t = _map(tree, lambda n: (swap.get(n[0], n[0]), n[1]) if isinstance(n, tuple) else n)
    return _answer(_sympy(t), p)


def m2(v, p):
    """Ignores the prime: reads S1' as S1, so writes p for the switch that is ~p."""
    tree = _parse(p["f"])
    if not _has(tree, "Not"):
        raise ValueError("no primed switch")
    t = _map(tree, lambda n: n[1][0] if isinstance(n, tuple) and n[0] == "Not" else n)
    return _answer(_sympy(t), p)


def _infix(tree):
    """The circuit's switches and joins in reading order, with every bracket dropped."""
    if isinstance(tree, str) or tree[0] == "Not":
        return [tree]
    out = []
    for i, a in enumerate(tree[1]):
        if i:
            out.append(tree[0])
        out += _infix(a)
    return out


def m3(v, p):
    """Drops the brackets round each block and joins the switches left to right as read."""
    toks = _infix(_parse(p["f"]))
    e = _sympy(toks[0])
    for i in range(1, len(toks), 2):
        e = (And if toks[i] == "And" else Or)(e, _sympy(toks[i + 1]))
    return _answer(e, p)


def m4(v, p):
    """Takes a primed switch S' as a switch that is always open, so its branch never conducts."""
    tree = _parse(p["f"])
    if not _has(tree, "Not"):
        raise ValueError("no primed switch")
    t = _map(tree, lambda n: "F" if isinstance(n, tuple) and n[0] == "Not" else n)

    def conv(n):
        if n == "F":
            return false
        if isinstance(n, str):
            return Symbol(n)
        return {"And": And, "Or": Or}[n[0]](*(conv(a) for a in n[1]))
    return _answer(conv(t), p)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4}
