"""C09 Duality: answer models (the key, and one per misconception).

inputs["f"]: the statement, written with Not, And, Or over the letters p, q, r, s and the
constants t (a tautology) and c (a contradiction), kept as plain symbols so sympy does not
absorb them (e.g. "Or(c, And(p, Or(q, r)))" for c v {p ^ (q v r)}). Each item asks for the
dual of f.

The dual of f swaps every ^ with v and every t with c, and leaves ~ and the letters as they
are. Equivalent statements have equivalent duals (the principle of duality), so the dual is
fixed up to equivalence, and every answer is given as its truth column over the letters of f,
read down the rows in the standard order (the first letter halves slowest), as a named
answer: Symbol("TFTT") for T, F, T, T. An option matches a model whenever the model's
statement is equivalent to the option's.

Each misconception model builds the statement the student writes, swapping the wrong things.
"""
from itertools import product

from sympy import And, Not, Or, Symbol, false, true

_LETTERS = "pqrs"
T, C = Symbol("t"), Symbol("c")


def _f(v):
    return v["f"]


def _column(v, e):
    """The truth column of e over the letters of f, as Symbol("TF..")."""
    names = sorted((str(x) for x in _f(v).free_symbols - {T, C}), key=_LETTERS.index)
    syms = [Symbol(n) for n in names]
    out = []
    for vals in product([True, False], repeat=len(names)):
        sub = {T: true, C: false, **dict(zip(syms, vals))}
        out.append("T" if e.xreplace(sub) == true else "F")
    return Symbol("".join(out))


def _tr(e, swap_conn, swap_const=True, letter=lambda x: x, depth=0, under_not=False):
    """Rebuild e, swapping ^/v where swap_conn(depth, under_not) says, and t/c if swap_const."""
    if e in (T, C):
        return ({T: C, C: T}[e]) if swap_const else e
    if isinstance(e, Symbol):
        return letter(e)
    if isinstance(e, Not):
        return Not(_tr(e.args[0], swap_conn, swap_const, letter, depth + 1, True))
    if isinstance(e, (And, Or)):
        func = (Or if isinstance(e, And) else And) if swap_conn(depth, under_not) else e.func
        return func(*[_tr(x, swap_conn, swap_const, letter, depth + 1, under_not) for x in e.args])
    raise ValueError(f"unexpected part {e}")


def _has(e, test):
    return test(e) or any(_has(x, test) for x in getattr(e, "args", ()))


def _is_conn(e):
    return isinstance(e, (And, Or))


# --- Models -------------------------------------------------------------------------------

def key(v, p):
    return _column(v, _tr(_f(v), lambda d, n: True))


def m1(v, p):
    """Swaps ^ and v but leaves t and c as they are."""
    if not _has(_f(v), lambda x: x in (T, C)):
        raise ValueError("no t or c in the statement")
    return _column(v, _tr(_f(v), lambda d, n: True, swap_const=False))


def m2(v, p):
    """Takes the dual to be the negation: swaps ^/v and t/c, and also puts ~ on every letter."""
    return _column(v, _tr(_f(v), lambda d, n: True, letter=lambda x: Not(x)))


def m3(v, p):
    """Swaps only the main connective, outside the brackets; the brackets keep theirs."""
    f = _f(v)
    if not _is_conn(f) or not any(_has(x, _is_conn) for x in f.args):
        raise ValueError("no bracket below the main connective")
    return _column(v, _tr(f, lambda d, n: d == 0))


def m4(v, p):
    """Swaps the connectives inside the brackets but misses the main one."""
    f = _f(v)
    if not _is_conn(f) or not any(_has(x, _is_conn) for x in f.args):
        raise ValueError("no bracket below the main connective")
    return _column(v, _tr(f, lambda d, n: d > 0))


def m5(v, p):
    """Reads '~ stays as it is' as 'leave everything under a ~ alone'."""
    f = _f(v)
    if not _has(f, lambda x: isinstance(x, Not) and _has(x.args[0], _is_conn)):
        raise ValueError("no bracket under a ~")
    return _column(v, _tr(f, lambda d, n: not n, swap_const=True))


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
