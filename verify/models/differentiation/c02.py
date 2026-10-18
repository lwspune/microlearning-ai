"""C02 Differentiability and continuity: answer models (the key, and one per misconception).

Inputs: a, the point being tested.
Params (f is given by two formulas meeting at a):
  left   the formula that holds just left of a (an expression in x)
  right  the formula that holds just right of a
  at     "left" or "right": which formula defines f(a)
  ask    "class": is f continuous / differentiable at a (a named answer);
         "deriv": the value of f'(a), or does_not_exist
The key works from the definitions: each one-sided limit and each one-sided derivative
(the difference quotient [f(a + h) - f(a)]/h, with h < 0 or h > 0) is taken on the
formula that holds on that side, never on a sympy Piecewise.
"""
from sympy import Symbol, limit, sympify

x = Symbol("x", real=True)
h = Symbol("h", real=True)

BOTH, CONT_ONLY, DIFF_ONLY, NEITHER = (Symbol(s) for s in ("both", "continuous_only", "differentiable_only", "neither"))
DNE = Symbol("does_not_exist")


def _pieces(v, p):
    a = v["a"]
    left = sympify(p["left"], locals={"x": x})
    right = sympify(p["right"], locals={"x": x})
    held = left if p["at"] == "left" else right
    return a, left, right, held


def _name(cont, diff):
    return {(True, True): BOTH, (True, False): CONT_ONLY, (False, True): DIFF_ONLY, (False, False): NEITHER}[(cont, diff)]


def _finite(s):
    return s.is_finite is True


def _slope(g, a):
    """The two-sided derivative of one smooth formula g at a, from its difference quotient."""
    return limit((g.subs(x, a + h) - g.subs(x, a)) / h, h, 0)


def _truth(v, p):
    """(continuous?, Lf'(a), Rf'(a)) from the definitions."""
    a, left, right, held = _pieces(v, p)
    fa = held.subs(x, a)
    cont = limit(left, x, a, "-") == fa and limit(right, x, a, "+") == fa
    lf = limit((left.subs(x, a + h) - fa) / h, h, 0, "-")
    rf = limit((right.subs(x, a + h) - fa) / h, h, 0, "+")
    return cont, lf, rf


def _diff(lf, rf):
    return _finite(lf) and _finite(rf) and lf == rf


def key(v, p):
    cont, lf, rf = _truth(v, p)
    diff = _diff(lf, rf)
    if p["ask"] == "class":
        return _name(cont, diff)
    return lf if diff else DNE


def _differs(v, p, val):
    if val == key(v, p):
        raise ValueError("gives the key here")
    return val


def m1(v, p):
    """Uses the formula that defines f(a) on both sides of a: no break, no corner."""
    a, _, _, held = _pieces(v, p)
    return _differs(v, p, BOTH if p["ask"] == "class" else _slope(held, a))


def m2(v, p):
    """Not differentiable, so not continuous: a corner is taken for a break."""
    if p["ask"] != "class":
        raise ValueError("a statement about continuity")
    _, lf, rf = _truth(v, p)
    diff = _diff(lf, rf)
    return _differs(v, p, _name(diff, diff))


def m3(v, p):
    """Compares the slopes of the two formulas at a and ignores whether their values meet."""
    a, left, right, _ = _pieces(v, p)
    sl, sr = _slope(left, a), _slope(right, a)
    if p["ask"] == "class":
        cont, _, _ = _truth(v, p)
        return _differs(v, p, _name(cont, sl == sr))
    return _differs(v, p, sl if sl == sr else DNE)


def m4(v, p):
    """Swaps the two tests: equal slopes taken to mean continuous, equal values to mean differentiable."""
    if p["ask"] != "class":
        raise ValueError("a statement about continuity")
    a, left, right, _ = _pieces(v, p)
    cont = _slope(left, a) == _slope(right, a)
    diff = limit(left, x, a, "-") == limit(right, x, a, "+")
    return _differs(v, p, _name(cont, diff))


def m5(v, p):
    """At a sharp peak or valley the tangent is flat: f'(a) = 0."""
    if p["ask"] != "deriv":
        raise ValueError("a value of f'(a)")
    _, lf, rf = _truth(v, p)
    if not (_finite(lf) and _finite(rf) and lf * rf < 0):
        raise ValueError("not a peak or valley")
    return _differs(v, p, 0)


def m6(v, p):
    """Takes h > 0 only in the first-principles limit: f'(a) = Rf'(a)."""
    if p["ask"] != "deriv":
        raise ValueError("a value of f'(a)")
    _, _, rf = _truth(v, p)
    if not _finite(rf):
        raise ValueError("no finite right derivative")
    return _differs(v, p, rf)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
