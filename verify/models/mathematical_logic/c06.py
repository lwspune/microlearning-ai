"""C06 Converse, inverse, contrapositive: answer models (the key, and one per misconception).

The statement is a -> b: inputs["a"] is its 'if' part and inputs["b"] its 'then' part, each
written with Not, And, Or over the letters p, q, r, or given as a truth value (true / false).
params["ask"] says what the item asks for:
  "converse", "inverse", "contrapositive": that form of a -> b;
  "equivalent": the form of a -> b that is logically equivalent to it;
  "values": the truth values of the converse, inverse and contrapositive (a, b truth values).
params["order"] = "if-second" when the stem writes the statement as 'b if a' (the 'if' clause
second), so a student can take the first clause written for the 'if' part.

A form X -> Y is answered as Tuple(column of X, column of Y): the truth columns of its two parts
over the statement's letters, read down the rows in the standard order (the first letter
halves slowest), each as Symbol("TFTT"). So (~p ^ ~q) -> r and ~(p v q) -> r are the same
answer, but q -> p and ~p -> ~q (which are equivalent) are not: the answer is the form, not
just its truth. "values" answers Tuple(converse, inverse, contrapositive), each Symbol("T")
or Symbol("F").
"""
from itertools import product

from sympy import And, Implies, Not, Or, Symbol, Tuple, satisfiable, true

_LETTERS = "pqr"


def _names(v):
    found = v["a"].free_symbols | v["b"].free_symbols
    return sorted((str(s) for s in found), key=_LETTERS.index)


def _column(e, names):
    """The truth column of e over the letters in names, as Symbol("TF..")."""
    syms = [Symbol(n) for n in names]
    out = []
    for vals in product([True, False], repeat=len(names)):
        out.append("T" if e.xreplace(dict(zip(syms, vals))) == true else "F")
    return Symbol("".join(out))


def _form(v, x, y):
    names = _names(v)
    return Tuple(_column(x, names), _column(y, names))


def _right(a, b):
    """The three forms of a -> b, from their definitions."""
    return {"converse": (b, a), "inverse": (Not(a), Not(b)), "contrapositive": (Not(b), Not(a))}


def _values(v, forms):
    """Truth values of the converse, inverse and contrapositive, given as (if, then) pairs."""
    names = _names(v)
    assert not names, "a values item gives a and b as truth values"
    return Tuple(*(_column(Implies(*forms[k]), names) for k in ("converse", "inverse", "contrapositive")))


def _answer(v, p, forms):
    """The answer to the item from a student's three forms."""
    ask = p["ask"]
    if ask == "values":
        return _values(v, forms)
    if ask == "equivalent":
        raise ValueError("the equivalence models choose the form themselves")
    return _form(v, *forms[ask])


def _iff(x, y):
    return Or(And(x, y), And(Not(x), Not(y)))


def key(v, p):
    a, b = v["a"], v["b"]
    forms = _right(a, b)
    if p["ask"] == "equivalent":
        # Straight from the definition of equivalence: the one form that no assignment of
        # truth values can make differ from a -> b.
        same = [k for k, (x, y) in forms.items() if not satisfiable(Not(_iff(Implies(x, y), Implies(a, b))))]
        assert same == ["contrapositive"], same
        return _form(v, *forms["contrapositive"])
    return _answer(v, p, forms)


def m1(v, p):
    """Swaps the names converse and inverse: converse = ~a -> ~b, inverse = b -> a."""
    if p["ask"] not in ("converse", "inverse"):
        raise ValueError("only a converse or inverse item shows this")
    a, b = v["a"], v["b"]
    forms = {**_right(a, b), "converse": (Not(a), Not(b)), "inverse": (b, a)}
    return _answer(v, p, forms)


def m2(v, p):
    """Writes the contrapositive as ~a -> ~b: negates both parts but forgets to swap them."""
    a, b = v["a"], v["b"]
    if p["ask"] == "equivalent":
        return _form(v, Not(a), Not(b))
    if p["ask"] not in ("contrapositive", "values"):
        raise ValueError("only a contrapositive shows this")
    forms = {**_right(a, b), "contrapositive": (Not(a), Not(b))}
    return _answer(v, p, forms)


def m3(v, p):
    """Negates only the 'if' part: inverse = ~a -> b, contrapositive = ~b -> a."""
    a, b = v["a"], v["b"]
    if p["ask"] == "converse":
        raise ValueError("a converse has no negation")
    if p["ask"] == "equivalent":
        return _form(v, Not(b), a)
    forms = {**_right(a, b), "inverse": (Not(a), b), "contrapositive": (Not(b), a)}
    return _answer(v, p, forms)


def _bad_not(e):
    """~ moved into a bracket without swapping the connective: ~(p v q) taken as ~p v ~q."""
    if isinstance(e, (And, Or)):
        return e.func(*[_bad_not(x) for x in e.args])
    return Not(e)


def m4(v, p):
    """Negates a bracket letter by letter but keeps its connective: ~(p v q) as ~p v ~q."""
    if p["ask"] not in ("inverse", "contrapositive"):
        raise ValueError("only a form with negations shows this")
    a, b = v["a"], v["b"]
    if not any(isinstance(x, (And, Or)) for x in (a, b)):
        raise ValueError("no bracket to negate")
    forms = {**_right(a, b), "inverse": (_bad_not(a), _bad_not(b)), "contrapositive": (_bad_not(b), _bad_not(a))}
    return _answer(v, p, forms)


def m5(v, p):
    """Thinks the converse and inverse say the same as a -> b, like the contrapositive."""
    a, b = v["a"], v["b"]
    if p["ask"] == "equivalent":
        return _form(v, b, a)
    if p["ask"] != "values":
        raise ValueError("only an equivalence or truth-value item shows this")
    t = _column(Implies(a, b), _names(v))
    return Tuple(t, t, t)


def m6(v, p):
    """Reads 'b if a' with the first clause written, b, as the 'if' part: works on b -> a."""
    if p.get("order") != "if-second":
        raise ValueError("only a statement written 'b if a' shows this")
    a, b = v["a"], v["b"]
    if p["ask"] == "equivalent":
        return _form(v, Not(a), Not(b))
    return _answer(v, p, _right(b, a))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
