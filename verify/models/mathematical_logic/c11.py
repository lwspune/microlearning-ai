"""C11 Simplifying circuits: answer models (the key, and one per misconception).

inputs["f"]: the circuit as drawn, written as a statement over the letters p, q, r, where p is
"switch S1 is closed" (S1' gives ~p), switches in series give "and", parallel branches give
"or" (e.g. "And(p, Or(Not(p), q))" for S1 in series with S1' parallel to S2).
inputs["g1"], inputs["g2"] (optional): later stages of a correct simplification, each
equivalent to f. A misconception model looks for the place it goes wrong in f first, then in
g1, then g2: the student simplifies correctly until meeting that place.

Every answer is the switching table's last column (the lamp, read down the rows in the
standard order, the first letter halving slowest) as a named answer: Symbol("TFFF") for
T, F, F, F. Two circuits are equivalent exactly when these columns agree, so an option matches
a model whenever the model's statement is equivalent to the option's. The always-closed
circuit t is "TTTT", the always-open circuit c is "FFFF".

The key is the column of f itself, straight from the definition.
"""
from itertools import product

from sympy import And, Not, Or, Symbol, true

_LETTERS = "pqr"


def _names(e):
    return sorted((str(s) for s in e.free_symbols), key=_LETTERS.index)


def _column(e, names):
    syms = [Symbol(n) for n in names]
    out = []
    for vals in product([True, False], repeat=len(names)):
        out.append("T" if e.xreplace(dict(zip(syms, vals))) == true else "F")
    return Symbol("".join(out))


def _answer(v, e):
    return _column(e, _names(v["f"]))


def _stages(v):
    """f, then the later stages given, each checked equivalent to f."""
    out = [v["f"]]
    for k in ("g1", "g2"):
        if k in v:
            if _answer(v, v[k]) != _answer(v, v["f"]):
                raise ValueError(f"{k} is not equivalent to f")
            out.append(v[k])
    return out


def _comp(a):
    return a.args[0] if isinstance(a, Not) else Not(a)


def _other(e):
    return And if isinstance(e, Or) else Or


def _nodes(e):
    """Every and/or sub-statement, outermost first."""
    if isinstance(e, (And, Or)):
        yield e
    for x in getattr(e, "args", ()):
        yield from _nodes(x)


def _join(func, args):
    if not args:
        raise ValueError("nothing left")
    return args[0] if len(args) == 1 else func(*args)


def _literal(a):
    return a.is_Symbol or (isinstance(a, Not) and a.args[0].is_Symbol)


def _pair_site(node):
    """A switch and its complement side by side in one block: (a, ~a)."""
    for a in node.args:
        if _comp(a) in node.args:
            return a
    return None


def _cross_sites(node, inner):
    """(a, X): a switch a beside a block X of the other kind holding inner(a)."""
    for a in node.args:
        if not _literal(a):
            continue
        for x in node.args:
            if isinstance(x, _other(node)) and inner(a) in x.args:
                return a, x
    return None


def _first(v, find, change):
    """Apply change at the first site find() accepts, in f, then g1, then g2."""
    for stage in _stages(v):
        for node in _nodes(stage):
            site = find(node)
            if site is not None:
                return _answer(v, stage.xreplace({node: change(node, site)}))
    raise ValueError("no site for this mistake")


# --- Models -------------------------------------------------------------------------------

def key(v, p):
    return _answer(v, v["f"])


def _dual(e):
    if isinstance(e, (And, Or)):
        return _other(e)(*[_dual(x) for x in e.args])
    if isinstance(e, Not):
        return Not(_dual(e.args[0]))
    return e


def m1(v, p):
    """Series read as 'or' and parallel as 'and': the circuit's statement with the connectives swapped."""
    return _answer(v, _dual(v["f"]))


def m2(v, p):
    """A switch and its complement cancel out, like +1 and -1.

    Side by side in one block: p | ~p | x == x, p & ~p & x == x (instead of t, c).
    Across a block: p | (~p & q) == q, p & (~p | q) == q (instead of p | q, p & q).
    """
    def find(node):
        a = _pair_site(node)
        if a is not None:
            return ("pair", a)
        s = _cross_sites(node, _comp)
        return ("cross", s) if s else None

    def change(node, site):
        kind, s = site
        if kind == "pair":
            return _join(node.func, [x for x in node.args if x not in (s, _comp(s))])
        a, x = s
        x2 = _join(x.func, [y for y in x.args if y != _comp(a)])
        return _join(node.func, [y if y != x else x2 for y in node.args if y != a])

    return _first(v, find, change)


def m3(v, p):
    """Absorption the wrong way round: p | (p & q) == p & q, p & (p | q) == p | q."""
    def find(node):
        return _cross_sites(node, lambda a: a)

    def change(node, site):
        a, _ = site
        return _join(node.func, [y for y in node.args if y != a])

    return _first(v, find, change)


def m4(v, p):
    """Elimination read as absorption: p | (~p & q) == p, p & (~p | q) == p."""
    def find(node):
        return _cross_sites(node, _comp)

    def change(node, site):
        _, x = site
        return _join(node.func, [y for y in node.args if y != x])

    return _first(v, find, change)


def _unprime(e):
    if isinstance(e, Not) and e.args[0].is_Symbol:
        return e.args[0]
    if isinstance(e, (And, Or, Not)):
        return e.func(*[_unprime(x) for x in e.args])
    return e


def m5(v, p):
    """Reads a primed switch S1' as S1 itself: every ~p in the circuit becomes p."""
    if not any(isinstance(x, Not) for x in v["f"].atoms(Not)):
        raise ValueError("no primed switch")
    return _answer(v, _unprime(v["f"]))


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5}
