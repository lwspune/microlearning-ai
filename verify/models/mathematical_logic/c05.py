"""C05 Logical equivalence and laws: answer models (the key, and one per misconception).

inputs["f"]: the statement, written with Not, And, Or, Implies over the letters p, q, r
(e.g. "And(Not(p), Implies(p, q))"). Each item asks which statement f is equivalent to (or
simplifies to); the student rewrites f step by step: the conditional law first
(p -> q == ~p | q), then De Morgan's laws to move each ~ inside a bracket, then the
distributive, absorption, complement and identity laws.

Every answer is the last column of the answer's truth table, read down the rows in the
standard order (the first letter halves slowest), as a named answer: Symbol("TFTT") for
T, F, T, T. Two statements are equivalent exactly when these columns agree, so an option
matches a model whenever the model's statement is equivalent to the option's.

The key is the truth column of f itself, straight from the definition. Each misconception
model applies one wrong law where the student meets it and the right laws everywhere else.
"""
from itertools import product

from sympy import And, Implies, Not, Or, Symbol, true

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


def _f(v):
    return v["f"]


def _answer(v, e):
    return _column(e, _names(_f(v)))


# --- The steps of a rewrite ---------------------------------------------------------------

def _right_cond(a, b):
    return Or(Not(a), b)


def _cond(e, rule):
    """Replace every a -> b by rule(a, b), innermost first."""
    if isinstance(e, Implies):
        a, b = (_cond(x, rule) for x in e.args)
        return rule(a, b)
    if isinstance(e, (And, Or, Not)):
        return e.func(*[_cond(x, rule) for x in e.args])
    return e


def _has(e, test):
    return test(e) or any(_has(x, test) for x in getattr(e, "args", ()))


def _push_not(e, swap=True):
    """Move each ~ inside its bracket (De Morgan); swap=False keeps the connective unchanged."""
    if isinstance(e, Not) and isinstance(e.args[0], (And, Or)):
        inner = e.args[0]
        if swap:
            func = Or if isinstance(inner, And) else And
        else:
            func = inner.func
        return func(*[_push_not(Not(x), swap) for x in inner.args])
    if isinstance(e, (And, Or)):
        return e.func(*[_push_not(x, swap) for x in e.args])
    return e


def _ready(v):
    """f after the conditional law and De Morgan's laws, both used correctly."""
    return _push_not(_cond(_f(v), _right_cond))


def _other(e):
    return And if isinstance(e, Or) else Or


def _first(e, test):
    """The first sub-statement (outermost first) passing test, or None."""
    if test(e):
        return e
    for x in getattr(e, "args", ()):
        found = _first(x, test)
        if found is not None:
            return found
    return None


def _dist_site(e):
    """An (and) holding an (or) bracket, or an (or) holding an (and) bracket."""
    return isinstance(e, (And, Or)) and any(isinstance(x, _other(e)) for x in e.args)


def _split(e):
    """At a distributive site: the outside part a and the bracket's terms."""
    bracket = next(x for x in e.args if isinstance(x, _other(e)))
    rest = [x for x in e.args if x != bracket]
    a = rest[0] if len(rest) == 1 else e.func(*rest)
    return a, list(bracket.args)


def _rewrite_at(v, test, change, why):
    e = _ready(v)
    site = _first(e, test)
    if site is None:
        raise ValueError(why)
    return _answer(v, e.xreplace({site: change(site)}))


# --- Models -------------------------------------------------------------------------------

def key(v, p):
    return _answer(v, _f(v))


def m1(v, p):
    """Conditional read as 'and': p -> q == p & q."""
    if not _has(_f(v), lambda x: isinstance(x, Implies)):
        raise ValueError("no conditional to rewrite")
    return _answer(v, _cond(_f(v), lambda a, b: And(a, b)))


def m2(v, p):
    """Conditional law with the negation on the wrong part: p -> q == p | ~q."""
    if not _has(_f(v), lambda x: isinstance(x, Implies)):
        raise ValueError("no conditional to rewrite")
    return _answer(v, _cond(_f(v), lambda a, b: Or(a, Not(b))))


def m3(v, p):
    """De Morgan without swapping: ~(p & q) == ~p & ~q, ~(p | q) == ~p | ~q."""
    e = _cond(_f(v), _right_cond)
    if not _has(e, lambda x: isinstance(x, Not) and isinstance(x.args[0], (And, Or))):
        raise ValueError("no bracket to negate")
    return _answer(v, _push_not(e, swap=False))


def m4(v, p):
    """Distributing onto the first term only: p & (q | r) == (p & q) | r."""
    def change(site):
        a, terms = _split(site)
        return _other(site)(site.func(a, terms[0]), *terms[1:])
    return _rewrite_at(v, _dist_site, change, "no bracket to distribute over")


def m5(v, p):
    """Absorption the wrong way round: p | (p & q) == p & q, p & (p | q) == p | q."""
    def site_test(e):
        return isinstance(e, (And, Or)) and any(
            isinstance(x, _other(e)) and any(y in x.args for y in e.args if y != x) for x in e.args
        )

    def change(site):
        bracket = next(x for x in site.args if isinstance(x, _other(site)) and any(y in x.args for y in site.args if y != x))
        rest = [x for x in site.args if x != bracket and x not in bracket.args]
        return site.func(bracket, *rest) if rest else bracket
    return _rewrite_at(v, site_test, change, "no absorption pattern")


def m6(v, p):
    """The other distributive law: p & (q | r) == (p | q) & (p | r)."""
    def change(site):
        a, terms = _split(site)
        return site.func(*[_other(site)(a, t) for t in terms])
    return _rewrite_at(v, _dist_site, change, "no bracket to distribute over")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
