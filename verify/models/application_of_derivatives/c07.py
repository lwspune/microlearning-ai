"""C07 Lagrange's mean value theorem: answer models (the key, and one per misconception).

An item gives f (params["f"], a sympy expression in x) on [a, b] (inputs a, b). The answer is c:
one number, or a FiniteSet when several values qualify.

The key solves f'(c) = (f(b) - f(a)) / (b - a) straight from the definition and keeps the roots
strictly inside (a, b). The models that solve a wrong equation keep the roots inside (a, b) when
there are some (the student still checks the interval), else every real root they found.
"""
from sympy import FiniteSet, Interval, S, Symbol, diff, simplify, solveset, sympify

x = Symbol("x", real=True)


def _f(p):
    return sympify(p["f"], locals={"x": x})


def _ends(v, p):
    f, a, b = _f(p), v["a"], v["b"]
    return f, a, b, simplify(f.subs(x, a)), simplify(f.subs(x, b))


def _roots(f, rhs, dom=S.Reals):
    """The solutions of f'(x) = rhs in dom, as a FiniteSet."""
    sols = solveset(simplify(diff(f, x) - rhs), x, dom)
    if not isinstance(sols, FiniteSet):
        raise ValueError(f"f'(x) = {rhs}: not a finite set of roots ({sols})")
    return FiniteSet(*[simplify(s) for s in sols])


def _answer(sols):
    if len(sols) == 0:
        raise ValueError("no value of c")
    return simplify(list(sols)[0]) if len(sols) == 1 else sols


def _pick(sols, a, b):
    """The roots inside (a, b) if there are any, else all of them."""
    inside = FiniteSet(*[s for s in sols if a < s < b])
    return _answer(inside if len(inside) else sols)


def key(v, p):
    f, a, b, fa, fb = _ends(v, p)
    return _answer(_roots(f, (fb - fa) / (b - a), Interval.open(a, b)))


def m1(v, p):
    """Keeps every root of f'(c) = slope, including those outside (a, b)."""
    f, a, b, fa, fb = _ends(v, p)
    sols = _roots(f, (fb - fa) / (b - a))
    if all(a < s < b for s in sols):
        raise ValueError("every root lies in (a, b): M1 gives the key")
    return _answer(sols)


def m2(v, p):
    """Rolle's conclusion: solves f'(c) = 0."""
    f, a, b, fa, fb = _ends(v, p)
    return _pick(_roots(f, 0), a, b)


def m3(v, p):
    """The slope upside down: f'(c) = (b - a) / (f(b) - f(a))."""
    f, a, b, fa, fb = _ends(v, p)
    if fb == fa:
        raise ValueError("f(a) = f(b): no run-over-rise slope")
    return _pick(_roots(f, (b - a) / (fb - fa)), a, b)


def m4(v, p):
    """Forgets to divide by b - a: f'(c) = f(b) - f(a)."""
    f, a, b, fa, fb = _ends(v, p)
    return _pick(_roots(f, fb - fa), a, b)


def m5(v, p):
    """Gives the slope f'(c) itself as the answer, not c."""
    f, a, b, fa, fb = _ends(v, p)
    return simplify((fb - fa) / (b - a))


def m6(v, p):
    """Takes c as the midpoint of [a, b]."""
    return simplify((v["a"] + v["b"]) / 2)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
