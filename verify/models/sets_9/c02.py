"""C02 Empty, finite and infinite sets: answer models (the key, and one per misconception).

A set is described by a string:
  "<dom>|<cond>"      {x | x in dom, cond}; dom is N (natural), W (whole), I (integers),
                      Q (rationals), R (reals) or U (no number system named: real numbers);
                      cond is a sympy condition in x, e.g. "x<1000", "(-1<x)&(x<1)", "Eq(5*x-2,0)".
  "world|<n>"         a set described in words with n members (e.g. people in India).
  "list|a,d,last"     a, a + d, a + 2d, ..., last written with dots.

Count items: params {"set": desc}; the answer is the number of elements, or INF.
Pick items: params {"ask": "empty" | "singleton" | "infinite", "sets": ["P=desc", ...]};
the key is the one set that truly has the property; a misconception's answer is the
other set that its wrong rule gives the property.
"""
from math import ceil, floor

from sympy import Integer, S, Symbol, sympify
from sympy.core.relational import GreaterThan, LessThan, StrictGreaterThan, StrictLessThan

X = Symbol("x", real=True)
INF = Symbol("infinite")


def _parse(desc):
    kind, rest = desc.split("|", 1)
    if kind == "world":
        return ("world", int(rest))
    if kind == "list":
        a, d, last = (Integer(t) for t in rest.split(","))
        return ("list", a, d, last)
    return ("rule", kind, sympify(rest, locals={"x": X}))


def _elements(dom, cond):
    """The elements of {x | x in dom, cond}: a sorted list, or INF."""
    sol = cond.as_set().intersect(S.Reals)
    if sol == S.EmptySet:
        return []
    if dom in ("N", "W", "I"):
        low = {"N": 1, "W": 0, "I": None}[dom]
        if sol.sup == S.Infinity or (low is None and sol.inf == S.NegativeInfinity):
            return INF
        start = ceil(sol.inf) if sol.inf != S.NegativeInfinity else low
        if low is not None:
            start = max(start, low)
        return [Integer(n) for n in range(start, floor(sol.sup) + 1) if sol.contains(Integer(n)) == True]
    # Q, R or U: a finite set of points, or a stretch of the number line.
    if sol.is_FiniteSet:
        pts = sorted(sol)
        return [p for p in pts if p.is_rational] if dom == "Q" else pts
    return INF


def _count(elems):
    return INF if elems is INF else Integer(len(elems))


def _true(d):
    if d[0] == "world":
        return Integer(d[1])
    if d[0] == "list":
        _, a, d_, last = d
        return (last - a) / d_ + 1
    return _count(_elements(d[1], d[2]))


def _swap(cond):
    """< read as <= and <= as < (and the same for > and >=)."""
    flip = {StrictLessThan: LessThan, LessThan: StrictLessThan,
            StrictGreaterThan: GreaterThan, GreaterThan: StrictGreaterThan}
    if type(cond) in flip:
        return flip[type(cond)](cond.lhs, cond.rhs)
    if cond.args and not cond.is_Atom and cond.func.__name__ in ("And", "Or"):
        return cond.func(*[_swap(a) for a in cond.args])
    return cond


# Each wrong rule maps a parsed description to the count the student gets.
def _zero_is_nothing(d):          # M1: 0 is "nothing", so it isn't counted
    if d[0] != "rule":
        return _true(d)
    e = _elements(d[1], d[2])
    return INF if e is INF else Integer(len([t for t in e if t != 0]))


def _ignore_domain(d):            # M2: drops "x is a natural number / an integer"
    return _count(_elements("U", d[2])) if d[0] == "rule" else _true(d)


def _integers_only(d):            # M3: counts only the integers in a range of rationals or reals
    if d[0] == "rule" and d[1] in ("Q", "R", "U"):
        return _count(_elements("I", d[2]))
    return _true(d)


def _huge_is_infinite(d):         # M4: a set too big to list is infinite
    t = _true(d)
    return INF if t != INF and t >= 1000 else t


def _swap_ends(d):                # M5: mixes up < and <=
    return _count(_elements(d[1], _swap(d[2]))) if d[0] == "rule" else _true(d)


def _dots_mean_endless(d):        # M6: "..." means the set never ends
    return INF if d[0] == "list" else _true(d)


def _has(n, ask):
    return {"empty": n == 0, "singleton": n == 1, "infinite": n == INF}[ask]


def _sets(p):
    return [(s.split("=", 1)[0], _parse(s.split("=", 1)[1])) for s in p["sets"]]


def _key_name(p):
    hits = [name for name, d in _sets(p) if _has(_true(d), p["ask"])]
    if len(hits) != 1:
        raise ValueError(f"{len(hits)} sets truly {p['ask']}")
    return hits[0]


def _model(rule):
    def m(v, p):
        if "set" in p:
            return rule(_parse(p["set"]))
        key = _key_name(p)
        hits = [name for name, d in _sets(p) if name != key and _has(rule(d), p["ask"])]
        if len(hits) != 1:
            raise ValueError(f"this mistake makes {len(hits)} other sets {p['ask']}")
        return Symbol("set_" + hits[0])
    return m


def key(v, p):
    if "set" in p:
        return _true(_parse(p["set"]))
    return Symbol("set_" + _key_name(p))


MODELS = {
    "key": key,
    "C02-M1": _model(_zero_is_nothing),
    "C02-M2": _model(_ignore_domain),
    "C02-M3": _model(_integers_only),
    "C02-M4": _model(_huge_is_infinite),
    "C02-M5": _model(_swap_ends),
    "C02-M6": _model(_dots_mean_endless),
}
