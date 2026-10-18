"""C07 Negating compound statements: answer models (the key, and one per misconception).

inputs["f"]: the statement, written with Not, And, Or, Implies, Equivalent over the letters
p, q, r (e.g. "And(p, Implies(q, r))"). Each item asks for the negation of f.

Every answer is the truth column of the answer, read down the rows in the standard order
(the first letter halves slowest), as a named answer: Symbol("FTFF") for F, T, F, F. Two
statements are equivalent exactly when these columns agree, so an option matches a model
whenever the model's statement is equivalent to the option's.

The key is the truth column of ~f itself, straight from the definition. Each misconception
model pushes the ~ inward the way a student does, with one wrong rule where it meets it:
  ~(a & b) == ~a | ~b,  ~(a | b) == ~a & ~b,  ~(a -> b) == a & ~b,
  ~(a <-> b) == ~[(a -> b) & (b -> a)] == (a & ~b) | (b & ~a),  ~(~a) == a.
"""
from itertools import product

from sympy import And, Equivalent, Implies, Not, Or, Symbol, true

_LETTERS = "pqr"


def _names(e):
    return sorted((str(s) for s in e.free_symbols), key=_LETTERS.index)


def _column(e, names):
    """The truth column of e over the letters in names, as Symbol("TF..")."""
    syms = [Symbol(n) for n in names]
    out = []
    for vals in product([True, False], repeat=len(names)):
        out.append("T" if e.xreplace(dict(zip(syms, vals))) == true else "F")
    return Symbol("".join(out))


def _answer(v, e):
    return _column(e, _names(v["f"]))


def _negate(e, wrong, used):
    """The negation of e, pushed inward; wrong(kind, e, neg) may replace one rule.

    wrong returns None to use the right rule. used collects the kinds it replaced.
    """
    def neg(x):
        return _negate(x, wrong, used)

    if isinstance(e, Not):
        kind = "not"
    elif isinstance(e, And):
        kind = "and"
    elif isinstance(e, Or):
        kind = "or"
    elif isinstance(e, Implies):
        kind = "implies"
    elif isinstance(e, Equivalent):
        kind = "iff"
    else:
        return Not(e)

    out = wrong(kind, e, neg)
    if out is not None:
        used.add(kind)
        return out
    if kind == "not":
        return e.args[0]
    if kind == "and":
        return Or(*[neg(x) for x in e.args])
    if kind == "or":
        return And(*[neg(x) for x in e.args])
    a, b = e.args
    if kind == "implies":
        return And(a, neg(b))
    # iff: the negation of (a -> b) & (b -> a)
    return neg(And(Implies(a, b), Implies(b, a)))


def _model(v, wrong, why):
    used = set()
    e = _negate(v["f"], wrong, used)
    if not used:
        raise ValueError(why)
    return _answer(v, e)


# --- Models -------------------------------------------------------------------------------

def key(v, p):
    return _answer(v, Not(v["f"]))


def m1(v, p):
    """De Morgan without swapping: ~(a & b) == ~a & ~b, ~(a | b) == ~a | ~b."""
    def wrong(kind, e, neg):
        if kind in ("and", "or"):
            return e.func(*[neg(x) for x in e.args])
        return None
    return _model(v, wrong, "no and / or to negate")


def m2(v, p):
    """Negates both parts and keeps the arrow: ~(a -> b) == ~a -> ~b."""
    def wrong(kind, e, neg):
        if kind == "implies":
            a, b = e.args
            return Implies(neg(a), neg(b))
        return None
    return _model(v, wrong, "no conditional to negate")


def m3(v, p):
    """Negates only the consequent: ~(a -> b) == a -> ~b."""
    def wrong(kind, e, neg):
        if kind == "implies":
            a, b = e.args
            return Implies(a, neg(b))
        return None
    return _model(v, wrong, "no conditional to negate")


def m4(v, p):
    """Negates both sides and keeps the double arrow: ~(a <-> b) == ~a <-> ~b."""
    def wrong(kind, e, neg):
        if kind == "iff":
            a, b = e.args
            return Equivalent(neg(a), neg(b))
        return None
    return _model(v, wrong, "no biconditional to negate")


def m5(v, p):
    """Leaves a negated part negated: ~(~a) == ~a."""
    def wrong(kind, e, neg):
        if kind == "not":
            return e
        return None
    return _model(v, wrong, "no ~a to negate")


def m6(v, p):
    """Swaps the connective but negates neither part: ~(a & b) == a | b, ~(a | b) == a & b."""
    def wrong(kind, e, neg):
        if kind == "and":
            return Or(*e.args)
        if kind == "or":
            return And(*e.args)
        return None
    return _model(v, wrong, "no and / or to negate")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
