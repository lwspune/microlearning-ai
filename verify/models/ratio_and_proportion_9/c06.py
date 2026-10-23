"""C06 Solving equations with componendo-dividendo: answer models (the key, and one per misconception).

Params (strings):
  kind="cd": the equation (A + B)/(A - B) = m/n (top="+") or (A - B)/(A + B) = m/n (top="-"),
    where A = U^k and B = V^k, U and V linear in x, k in {1/2, 2, 3}.
    ask="x"      the solution x (the equation must have exactly one)
    ask="ratio"  the value of A/B the equation reduces to
  kind="x2": the equation num1/den1 = num2/den2 that reduces (after dividendo) to
    c x^2/lin1 = c x^2/lin2; the answer is the set of solutions.
"""
from sympy import FiniteSet, Rational, S, Symbol, real_root, solve, solveset, sqrt, sympify

x = Symbol("x", real=True)


def _e(p, k):
    return sympify(p[k], locals={"x": x})


def _cd_parts(p):
    U, V, k = _e(p, "U"), _e(p, "V"), Rational(p["k"])
    A, B = (sqrt(U), sqrt(V)) if k == Rational(1, 2) else (U**k, V**k)
    return U, V, k, A, B


def _cd_solutions(p):
    """Solutions of the equation as printed, found by sympy directly (no ratio rules)."""
    U, V, k, A, B = _cd_parts(p)
    m, n = _e(p, "m"), _e(p, "n")
    lhs = (A + B) / (A - B) if p["top"] == "+" else (A - B) / (A + B)
    sols = solveset(lhs - m / n, x, S.Reals)
    good = [s for s in sols if (A - B).subs(x, s) != 0 and (A + B).subs(x, s) != 0
            and (k != Rational(1, 2) or (U.subs(x, s) >= 0 and V.subs(x, s) >= 0))]
    return good


def _ratio_correct(p):
    m, n = _e(p, "m"), _e(p, "n")
    return (m + n) / (m - n) if p["top"] == "+" else (n + m) / (n - m)


def _undo(t, k):
    """U/V from A/B = t, where A = U^k, B = V^k (positive root for k = 2)."""
    if k == Rational(1, 2):
        return t**2
    if k == 2:
        r = sqrt(t)
    else:
        r = real_root(t, 3)
    if not r.is_rational:
        raise ValueError("root is not rational")
    return r


def _solve_linear(p, r):
    U, V = _e(p, "U"), _e(p, "V")
    s = solve(U - r * V, x)
    if len(s) != 1:
        raise ValueError("no single solution")
    return s[0]


def _cd_answer(p, t, undo=True):
    if p["ask"] == "ratio":
        return t
    k = Rational(p["k"])
    return _solve_linear(p, _undo(t, k) if undo else t)


def _need(p, kind):
    if p["kind"] != kind:
        raise ValueError(f"needs a {kind} item")


def key(v, p):
    if p["kind"] == "x2":
        eq = _e(p, "num1") * _e(p, "den2") - _e(p, "num2") * _e(p, "den1")
        sols = [s for s in solveset(eq, x, S.Reals)
                if _e(p, "den1").subs(x, s) != 0 and _e(p, "den2").subs(x, s) != 0]
        return FiniteSet(*sols)
    sols = _cd_solutions(p)
    if p["ask"] == "ratio":
        _, _, _, A, B = _cd_parts(p)
        vals = {(A / B).subs(x, s) for s in sols}
        if len(vals) != 1:
            raise ValueError("ratio not unique")
        return vals.pop()
    if len(sols) != 1:
        raise ValueError(f"expected one solution, got {sols}")
    return sols[0]


def m1(v, p):
    """Turns the componendo-dividendo result upside down: A/B = (m - n)/(m + n)."""
    _need(p, "cd")
    return _cd_answer(p, 1 / _ratio_correct(p))


def m2(v, p):
    """Forgets to undo the root or power: sets U/V equal to the ratio of A and B."""
    _need(p, "cd")
    if p["ask"] != "x":
        raise ValueError("needs a solve item")
    return _cd_answer(p, _ratio_correct(p), undo=False)


def m3(v, p):
    """Applies componendo-dividendo to the left side only: A/B = m/n."""
    _need(p, "cd")
    return _cd_answer(p, _e(p, "m") / _e(p, "n"))


def m4(v, p):
    """Subtracts the wrong way round (n - m for m - n, or ignores which sign is on top)."""
    if p["kind"] == "x2":
        r = solve(_e(p, "lin1") - _e(p, "lin2"), x)[0]
        return FiniteSet(0, -r)
    if p["ask"] == "x" and Rational(p["k"]) == Rational(1, 2):
        raise ValueError("squaring hides the sign")
    return _cd_answer(p, -_ratio_correct(p))


def m5(v, p):
    """Cancels x^2 from both sides and loses the solution x = 0."""
    _need(p, "x2")
    return FiniteSet(*solve(_e(p, "lin1") - _e(p, "lin2"), x))


def m6(v, p):
    """Stops at x = 0 (equal numerators are zero) and misses the case of equal denominators."""
    _need(p, "x2")
    return FiniteSet(0)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
