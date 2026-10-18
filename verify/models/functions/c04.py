"""C04 One-one, onto and how many functions: answer models (the key, and one per misconception).

Classify items (params["ask"] = "classify"): f : A -> B with
  params["rule"]: f(x) as a string in x (optional when params["pairs"] lists the function),
  params["pairs"]: ["a,b", ...] (a finite function given as its pairs; optional),
  params["dom"], params["cod"]: "N" | "Z" | "R" | an interval such as "[5, oo)" | a list of elements.
The answer is a named class: Symbol("bijective"), Symbol("one_one_only"), Symbol("onto_only") or
Symbol("neither").
Count items (params["ask"] = "count"): inputs m = n(A), n = n(B); the answer is the number of
functions from A to B.
"""
from sympy import Integer, Interval, S, Symbol, factorial, oo, sympify
from sympy import is_decreasing, is_increasing
from sympy.calculus.util import function_range

x = Symbol("x", real=True)
_W = 40  # window of N or Z on which a rule is tested
_Y = 12  # window of the co-domain N or Z checked for pre-images

_NAMES = {(True, True): "bijective", (True, False): "one_one_only", (False, True): "onto_only", (False, False): "neither"}


def _name(one_one, onto):
    return Symbol(_NAMES[(bool(one_one), bool(onto))])


def _interval(spec):
    """An interval string '[a, b)' etc. as a sympy Interval."""
    s = spec.strip()
    lo_open, hi_open = s[0] == "(", s[-1] == ")"
    a, b = (sympify(t, locals={"oo": oo}) for t in s[1:-1].split(","))
    return Interval(a, b, lo_open, hi_open)


def _domain_points(kind, val):
    if kind == "finite":
        return val
    if kind == "N":
        return [Integer(k) for k in range(1, _W + 1)]
    if kind == "Z":
        return [Integer(k) for k in range(-_W, _W + 1)]
    raise ValueError("not a discrete domain")


def _classify(p, dom, cod):
    """(one-one, onto) of f : dom -> cod, straight from the definitions."""
    if "pairs" in p:
        pairs = [tuple(sympify(t) for t in s.split(",")) for s in p["pairs"]]
        f = dict(pairs)
        if len(f) != len(pairs):
            raise ValueError("not a function: an element has two images")
    else:
        f = None
        rule = sympify(p["rule"], locals={"x": x})
    dk, dv = (dom, None) if dom in ("N", "Z", "R") else ("finite", [sympify(e) for e in dom]) if isinstance(dom, list) else ("interval", _interval(dom))
    ck, cv = (cod, None) if cod in ("N", "Z", "R") else ("finite", [sympify(e) for e in cod]) if isinstance(cod, list) else ("interval", _interval(cod))

    if dk in ("finite", "N", "Z"):
        pts = list(f) if f is not None else _domain_points(dk, dv)
        if f is not None and dk == "finite" and set(pts) != set(dv):
            raise ValueError("some element of the domain has no image")
        images = [f[a] for a in pts] if f is not None else [rule.subs(x, a) for a in pts]
        one_one = len(set(images)) == len(pts)
        if ck == "finite":
            if not set(images) <= set(cv):
                raise ValueError("an image lies outside the co-domain")
            onto = set(images) == set(cv)
        elif ck in ("N", "Z"):
            ys = range(1, _Y + 1) if ck == "N" else range(-_Y, _Y + 1)
            onto = all(Integer(y) in set(images) for y in ys)
        else:
            onto = False  # a countable set of images can't fill an interval of R
        return one_one, onto

    # A polynomial rule on R or on an interval: one-one exactly when it never turns back
    # (monotone and not constant; a polynomial's slope is zero only at isolated points).
    D = S.Reals if dk == "R" else dv
    if not rule.is_polynomial(x):
        raise ValueError("only polynomial rules on R or an interval")
    one_one = rule.has(x) and bool(is_increasing(rule, D, x) or is_decreasing(rule, D, x))
    rng = function_range(rule, x, D)
    C = S.Reals if ck == "R" else cv
    if not rng.is_subset(C):
        raise ValueError("an image lies outside the co-domain")
    onto = rng == C
    return one_one, onto


def _need(p, ask):
    if p["ask"] != ask:
        raise ValueError(f"only for {ask} items")


def key(v, p):
    """From the definitions: distinct inputs give distinct images; every co-domain element is an image;
    for counting, each of the m elements of A picks one of n images independently."""
    if p["ask"] == "count":
        return v["n"] ** v["m"]
    _need(p, "classify")
    return _name(*_classify(p, p["dom"], p["cod"]))


def m1(v, p):
    """Judges the formula alone, as f : R -> R, ignoring the given domain and co-domain."""
    _need(p, "classify")
    if "rule" not in p or (p["dom"] == "R" and p["cod"] == "R"):
        raise ValueError("needs a rule on a set other than R -> R")
    return _name(*_classify(p, "R", "R"))


def m2(v, p):
    """Reads onto as 'every element of A has an image in B', so every function is onto."""
    _need(p, "classify")
    one_one, _ = _classify(p, p["dom"], p["cod"])
    return _name(one_one, True)


def m3(v, p):
    """Takes one-one to mean 'each input has exactly one image' (the definition of a function), so
    every function is one-one; counting, only functions with different images are counted (nPm)."""
    if p["ask"] == "count":
        m, n = v["m"], v["n"]
        return factorial(n) / factorial(n - m) if m <= n else Integer(0)
    _need(p, "classify")
    _, onto = _classify(p, p["dom"], p["cod"])
    return _name(True, onto)


def m4(v, p):
    """Swaps the two definitions: tests one-one with the onto test and onto with the one-one test."""
    _need(p, "classify")
    one_one, onto = _classify(p, p["dom"], p["cod"])
    return _name(onto, one_one)


def m5(v, p):
    """Count with base and power swapped: m^n, as if each element of B chose an image in A."""
    _need(p, "count")
    return v["m"] ** v["n"]


def m6(v, p):
    """Counts every relation from A to B, 2^(mn), not only the functions."""
    _need(p, "count")
    return Integer(2) ** (v["m"] * v["n"])


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
