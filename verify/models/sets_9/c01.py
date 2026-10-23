"""C01 Sets: listing and rule methods: answer models (the key, and one per misconception).

A set given by a rule: A = {x | x = f(n), n in over, lo (lo_op) n (hi_op) hi, x has prop}.
Inputs (sympy numbers): hi, and lo (needed for I). Params:
  f: the rule, an expression in n (default "n": the bound and the property are on x itself);
  over: "N" (starts at 1), "W" (starts at 0) or "I" (needs lo);
  lo_op, hi_op: "<" or "<=";
  prop: optional "odd" or "even", a condition on the element;
  ask: "set"  the listing (roster) form of A;
       "k"    params["target"] is a roster set; the k in "n (hi_op) k" that gives the
              same number of elements (the bound of the rule form).
"""
from sympy import FiniteSet, Integer, sympify, symbols

_n = symbols("n")
_START = {"N": 1, "W": 0}
_STRICT = {"<": "<=", "<=": "<="}   # M3: every end included
_LOOSE = {"<": "<", "<=": "<"}      # M4: no end included


def _rule(p):
    return sympify(p.get("f", "n"), locals={"n": _n})


def _domain(v, p, ops=None, over=None, start=None, top=None):
    """The values of the variable the rule allows, read straight from the definition."""
    over = over or p["over"]
    lo_op, hi_op = p.get("lo_op", "<"), p.get("hi_op", "<")
    if ops:
        lo_op, hi_op = ops[lo_op], ops[hi_op]
    first = _START.get(over, -200) if start is None else start
    if "lo" in v:
        first = max(first, int(v["lo"]) + 1 if lo_op == "<" else int(v["lo"]))
    hi = int(v["hi"]) if top is None else top
    last = hi - 1 if hi_op == "<" else hi
    return [Integer(n) for n in range(first, last + 1)]


def _keep(x, p, prop=True):
    if not prop or "prop" not in p:
        return True
    return x % 2 == (1 if p["prop"] == "odd" else 0)


def _elements(ns, p, prop=True):
    f = _rule(p)
    return FiniteSet(*[f.subs(_n, n) for n in ns if _keep(f.subs(_n, n), p, prop)])


def _target(p):
    return FiniteSet(*sympify(p["target"]))


def _k(count, p):
    """The smallest k for which the rule, read with bound k, gives as many elements as the target."""
    want = len(_target(p))
    for k in range(0, 300):
        if count(k) == want:
            return Integer(k)
    raise ValueError("no k gives that many elements")


def key(v, p):
    """List every allowed value of n, apply the rule, keep the elements with the property."""
    if p["ask"] == "set":
        return _elements(_domain(v, p), p)
    if p["ask"] == "k":
        k = _k(lambda k: len(_elements(_domain(v, p, top=k), p)), p)
        if _elements(_domain(v, p, top=int(k)), p) != _target(p):
            raise ValueError("the rule does not give the target set")
        return k
    raise ValueError("no such ask")


def m1(v, p):
    """Mixes up n and x: lists the values of n, or puts the bound on the elements."""
    if _rule(p) == _n:
        raise ValueError("the rule is x itself")
    if p["ask"] == "set":
        return FiniteSet(*_domain(v, p))
    f = _rule(p)
    many = [f.subs(_n, n) for n in _domain(v, p, top=300)]
    hi_op = p.get("hi_op", "<")
    return _k(lambda k: len([x for x in many if (x < k if hi_op == "<" else x <= k)]), p)


def m2(v, p):
    """Mixes up N and W: starts N at 0, or W at 1."""
    if p["over"] not in _START:
        raise ValueError("not N or W")
    start = 1 - _START[p["over"]]
    if p["ask"] == "set":
        return _elements(_domain(v, p, start=start), p)
    return _k(lambda k: len(_domain(v, p, start=start, top=k)), p)


def m3(v, p):
    """Thinks the ends are always included: reads < as <=."""
    if p["ask"] == "set":
        return _elements(_domain(v, p, ops=_STRICT), p)
    return _k(lambda k: len(_elements(_domain(v, p, ops=_STRICT, top=k), p)), p)


def m4(v, p):
    """Thinks the ends are never included: reads <= as <."""
    if p["ask"] == "set":
        return _elements(_domain(v, p, ops=_LOOSE), p)
    return _k(lambda k: len(_elements(_domain(v, p, ops=_LOOSE, top=k), p)), p)


def m5(v, p):
    """Ignores the property (odd, even) and keeps every number in the range."""
    if "prop" not in p:
        raise ValueError("no property to ignore")
    if p["ask"] == "set":
        return _elements(_domain(v, p), p, prop=False)
    raise ValueError("only for listing")


def m6(v, p):
    """Reads I as W: leaves out the negative integers."""
    if p["over"] != "I":
        raise ValueError("not I")
    if p["ask"] == "set":
        return _elements(_domain(v, p, start=0), p)
    raise ValueError("only for listing")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
