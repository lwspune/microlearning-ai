"""C02 The discriminant and the nature of roots: answer models (the key, and one per misconception).

Inputs v["a"], v["b"], v["c"]: the coefficients of a x^2 + b x + c = 0 (numbers, or expressions
in one parameter). p["ask"] picks the question type:
  nature    numeric a, b, c -> a named answer: rational_distinct, irrational_distinct,
            equal_roots or no_real_roots
  real      the set of parameter values giving real roots (equal roots count as real)
  distinct  ... two distinct real roots
  noreal    ... no real roots
  equal     ... equal roots
p["var"] names the parameter (default "k"); p["dom"] = "pos" restricts it to positive values
(a parameter inside a logarithm). The key drops any value that makes a = 0: the equation is
then not a quadratic.
"""
from sympy import Interval, S, Symbol, roots, solveset, sqrt

R_DISTINCT = Symbol("rational_distinct")
I_DISTINCT = Symbol("irrational_distinct")
EQUAL = Symbol("equal_roots")
NO_REAL = Symbol("no_real_roots")

# The condition on D for each question type: (relation, value) with D <relation> 0.
_COND = {"real": ">=", "distinct": ">", "noreal": "<", "equal": "=="}


def _ask(p):
    return p.get("ask", "nature")


def _var(p):
    return Symbol(p.get("var", "k"))


def _dom(p):
    return Interval.open(0, S.Infinity) if p.get("dom") == "pos" else S.Reals


def _is_square(d):
    r = sqrt(d)
    return r.is_rational


def _classify(d):
    """The nature of the roots from the value of D (rational a, b, c)."""
    if d > 0:
        return R_DISTINCT if _is_square(d) else I_DISTINCT
    if d == 0:
        return EQUAL
    return NO_REAL


def _solve(d, rel, p):
    k = _var(p)
    expr = {">=": d >= 0, ">": d > 0, "<": d < 0, "<=": d <= 0, "==": None}[rel]
    if rel == "==":
        return solveset(d, k, _dom(p))
    return solveset(expr, k, _dom(p))


def _without_a_zero(sol, v, p):
    """Drop the parameter values that make the x^2 coefficient vanish."""
    zeros = solveset(v["a"], _var(p), _dom(p)) if v["a"].has(_var(p)) else S.EmptySet
    return sol - zeros


def _answer(d, v, p, rel=None, keep_a_zero=False):
    a = _ask(p)
    if a == "nature":
        return _classify(d)
    if a not in _COND:
        raise ValueError(a)
    sol = _solve(d, rel or _COND[a], p)
    return sol if keep_a_zero else _without_a_zero(sol, v, p)


def _d(v):
    return v["b"] ** 2 - 4 * v["a"] * v["c"]


def _nature_from_roots(v):
    """The nature read off the roots themselves, found by solving (not from D)."""
    x = Symbol("x")
    rs = list(roots(v["a"] * x**2 + v["b"] * x + v["c"], x).items())
    if len(rs) == 1:
        return EQUAL
    if not all(r.is_real for r, _ in rs):
        return NO_REAL
    return R_DISTINCT if all(r.is_rational for r, _ in rs) else I_DISTINCT


def key(v, p):
    if _ask(p) == "nature":
        return _nature_from_roots(v)
    return _answer(_d(v), v, p)


def m1(v, p):
    """Believes real roots need D > 0: D = 0 is left out of "real roots" (and so counted
    among "no real roots", and "distinct" is read as D >= 0)."""
    a = _ask(p)
    d = _d(v)
    if a == "nature":
        if d != 0:
            raise ValueError("only differs from the key when D = 0")
        return NO_REAL
    flip = {"real": ">", "noreal": "<=", "distinct": ">="}
    if a not in flip:
        raise ValueError("no boundary to mix up")
    return _answer(d, v, p, rel=flip[a])


def m2(v, p):
    """Takes any positive D to give rational roots (skips the perfect-square test)."""
    d = _d(v)
    if _ask(p) != "nature" or not d > 0 or _is_square(d):
        raise ValueError("only for a positive D that is not a perfect square")
    return R_DISTINCT


def m3(v, p):
    """Mixes up irrational and not real: a positive D that is not a perfect square read as
    "no real roots" (since sqrt(D) is not a whole number)."""
    d = _d(v)
    if _ask(p) != "nature" or not d > 0 or _is_square(d):
        raise ValueError("only for a positive D that is not a perfect square")
    return NO_REAL


def m4(v, p):
    """Gets the sign of the 4ac term wrong: D = b^2 + 4ac."""
    return _answer(v["b"] ** 2 + 4 * v["a"] * v["c"], v, p)


def m5(v, p):
    """Drops the 4: D = b^2 - ac (the G.P. look-alike b^2 = ac for equal roots)."""
    return _answer(v["b"] ** 2 - v["a"] * v["c"], v, p)


def m6(v, p):
    """Forgets a != 0: keeps a parameter value that makes the x^2 coefficient vanish."""
    if _ask(p) == "nature" or not v["a"].has(_var(p)):
        raise ValueError("only when the x^2 coefficient holds the parameter")
    return _answer(_d(v), v, p, keep_a_zero=True)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
