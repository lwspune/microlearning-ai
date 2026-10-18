"""C08 Quantifiers and their negation: answer models (the key, and one per misconception).

params["ask"]:
  count   v["A"] is a FiniteSet; params["s"] lists statements "forall|<pred>" or "exists|<pred>",
          <pred> a sympy relation in x (e.g. "x - 8 > 1", "Eq(Mod(x, 2), 0)"). Answer: how many are true.
  negate  one statement params["q"] ("forall" | "exists") with the condition lhs REL rhs
          (params["lhs"], params["rel"] in gt, lt, ge, le, eq, ne; params["rhs"]).
          Answer: the negation as Symbol("<quantifier>_<rel>"), e.g. Symbol("exists_le").
"""
from itertools import combinations

from sympy import Integer, Symbol, lambdify, sympify

_X = Symbol("x")
_REL = {
    "gt": lambda a, b: a > b, "lt": lambda a, b: a < b, "ge": lambda a, b: a >= b,
    "le": lambda a, b: a <= b, "eq": lambda a, b: a == b, "ne": lambda a, b: a != b,
}
_NOT = {"gt": "le", "le": "gt", "lt": "ge", "ge": "lt", "eq": "ne", "ne": "eq"}
_REVERSED = {"gt": "lt", "lt": "gt", "ge": "le", "le": "ge"}
_SWAP = {"forall": "exists", "exists": "forall"}
_INTEGERS = range(-60, 61)  # "every number" for C08-M6, which ignores the set


def _ask(p, want):
    if p["ask"] != want:
        raise ValueError(f"this model only applies to ask={want}")


def _statements(p):
    out = []
    for s in p["s"]:
        q, pred = s.split("|")
        out.append((q, sympify(pred, locals={"x": _X})))
    return out


def _holds(pred, x):
    return bool(pred.subs(_X, Integer(x)))


def _count(v, p, judge):
    """judge(q, pred, members) -> bool, applied to each statement over the set A."""
    _ask(p, "count")
    members = [int(m) for m in v["A"]]
    return Integer(sum(1 for q, pred in _statements(p) if judge(q, pred, members)))


def _true(q, pred, members):
    """The definition: for all = every member works; there exists = at least one member works."""
    results = [_holds(pred, m) for m in members]
    return all(results) if q == "forall" else any(results)


def _answer(q, rel):
    return Symbol(f"{q}_{rel}")


def _truth(q, rel, f, rhs, domain):
    results = [_REL[rel](f(m), rhs) for m in domain]
    return all(results) if q == "forall" else any(results)


def key(v, p):
    if p["ask"] == "count":
        return _count(v, p, _true)
    _ask(p, "negate")
    # The negation is the statement whose truth value is the opposite one on every set of
    # integers: search every quantifier and relation, testing sets of one and two members.
    f = lambdify(_X, sympify(p["lhs"], locals={"x": _X}))
    rhs = sympify(p["rhs"])
    domains = [(m,) for m in _INTEGERS] + list(combinations(_INTEGERS, 2))
    found = [
        (q, rel) for q in ("forall", "exists") for rel in _REL
        if all(_truth(q, rel, f, rhs, d) != _truth(p["q"], p["rel"], f, rhs, d) for d in domains)
    ]
    (q, rel), = found
    return _answer(q, rel)


# M1: one member that works proves a "for all" statement.
def m1(v, p):
    def judge(q, pred, members):
        return any(_holds(pred, m) for m in members) if q == "forall" else _true(q, pred, members)
    return _count(v, p, judge)


# M2: a "there exists" statement is false as soon as one member fails (read as "for all").
def m2(v, p):
    def judge(q, pred, members):
        return all(_holds(pred, m) for m in members) if q == "exists" else _true(q, pred, members)
    return _count(v, p, judge)


# M3: the negation keeps the quantifier and negates only the condition.
def m3(v, p):
    _ask(p, "negate")
    return _answer(p["q"], _NOT[p["rel"]])


# M4: the negation swaps the quantifier but keeps the condition.
def m4(v, p):
    _ask(p, "negate")
    return _answer(_SWAP[p["q"]], p["rel"])


# M5: swaps the quantifier, but negates an inequality by reversing its sign (> becomes <).
def m5(v, p):
    _ask(p, "negate")
    if p["rel"] not in _REVERSED:
        raise ValueError("M5 only applies to an inequality")
    return _answer(_SWAP[p["q"]], _REVERSED[p["rel"]])


# M6: ignores the set A and judges each statement over all numbers (integers here).
def m6(v, p):
    return _count(v, p, lambda q, pred, members: _true(q, pred, list(_INTEGERS)))


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
