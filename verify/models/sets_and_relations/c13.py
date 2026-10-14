"""C13 Relations: domain, co-domain and range: answer models (the key, and one per misconception).

Inputs: A, B, the sets the relation goes from and to: a FiniteSet, or Naturals / Integers.
params["rule"]: when (x, y) is in R, a sympy condition in x and y (conditions joined with &).
params["ask"]: R (the set of pairs) | domain | range.
"""
from sympy import And, FiniteSet, Ge, Gt, Le, Lt, S, Tuple, sympify, symbols

x, y = symbols("x y")
_WINDOW = 40  # search window for N and Z; the rules used here give small finite relations


def _set(s):
    """An input set: `{1, 2}` sympifies to a Python set."""
    return FiniteSet(*s) if isinstance(s, (set, frozenset)) else s


def _elements(s):
    """The elements to try from A or B, with a search window for N, N with 0, and Z."""
    if isinstance(s, FiniteSet):
        return list(s)
    if s == S.Naturals:
        return list(range(1, _WINDOW + 1))
    if s == S.Naturals0:
        return list(range(0, _WINDOW + 1))
    if s == S.Integers:
        return list(range(-_WINDOW, _WINDOW + 1))
    raise ValueError(f"can't list {s}")


def _pairs(A, B, rule):
    A, B = _set(A), _set(B)
    xs, ys = _elements(A), _elements(B)
    pairs = [Tuple(a, b) for a in xs for b in ys if bool(rule.subs({x: a, y: b}))]
    if not (isinstance(A, FiniteSet) and isinstance(B, FiniteSet)):
        edge = {xs[0], xs[-1], ys[0], ys[-1]} - {0, 1}
        assert not any(p[0] in edge or p[1] in edge for p in pairs), "relation reaches the search window"
    return FiniteSet(*pairs)


def _answer(R, ask):
    if ask == "R":
        return R
    if ask == "domain":
        return FiniteSet(*[p[0] for p in R])
    if ask == "range":
        return FiniteSet(*[p[1] for p in R])
    raise ValueError(f"no ask {ask}")


def key(v, p):
    """List R straight from the definition: every (x, y) in A × B that satisfies the rule."""
    R = _pairs(v["A"], v["B"], sympify(p["rule"]))
    return _answer(R, p["ask"])


def m1(v, p):
    """Takes the whole sets: R = A × B, domain = A, range = B (the co-domain)."""
    ask, A, B = p["ask"], _set(v["A"]), _set(v["B"])
    if ask == "domain":
        return A
    if ask == "range":
        return B
    if ask == "R" and isinstance(A, FiniteSet) and isinstance(B, FiniteSet):
        return FiniteSet(*[Tuple(a, b) for a in A for b in B])
    raise ValueError("A × B is infinite")


def m2(v, p):
    """Swaps first and second entries: pairs written (y, x), so domain and range trade places."""
    R = _pairs(v["A"], v["B"], sympify(p["rule"]))
    ask = p["ask"]
    if ask == "R":
        return FiniteSet(*[Tuple(b, a) for a, b in R])
    return _answer(R, {"domain": "range", "range": "domain"}[ask])


def _loosen(e):
    """Every strict inequality in the rule made non-strict: < as ≤, > as ≥."""
    if isinstance(e, Lt):
        return Le(e.lhs, e.rhs)
    if isinstance(e, Gt):
        return Ge(e.lhs, e.rhs)
    if isinstance(e, And):
        return And(*[_loosen(a) for a in e.args])
    return e


def m3(v, p):
    """Reads a strict inequality as non-strict: the boundary values sneak in."""
    rule = sympify(p["rule"])
    loose = _loosen(rule)
    if loose == rule:
        raise ValueError("no strict inequality in the rule")
    return _answer(_pairs(v["A"], v["B"], loose), p["ask"])


def m4(v, p):
    """Counts 0 as a natural number, so pairs with a 0 entry join R."""
    A, B = v["A"], v["B"]
    if S.Naturals not in (A, B):
        raise ValueError("no N in the question")
    A, B = (S.Naturals0 if s == S.Naturals else s for s in (A, B))
    return _answer(_pairs(A, B, sympify(p["rule"])), p["ask"])


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4}
