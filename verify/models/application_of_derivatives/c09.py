"""C09 Local maxima and minima: answer models (the key, and one per misconception).

Inputs: f, a sympy expression in x (with a constant a in "const" items); c, the given extreme
point ("const" items only). Params: ask, one of
  "maxval" / "minval": the local maximum / minimum value of f;
  "maxat" / "minat":   the x at which f has its local maximum / minimum;
  "const":             the value of a that makes x = c an extreme point of f.
The key finds the candidates where f'(x) = 0 (a flat tangent is necessary at an extreme point of
a differentiable f) and classifies each one from the definition: it compares f(c) with f at
points just left and right of c, never through the sign tests being taught.
"""
from sympy import S, Symbol, diff, nsimplify, simplify, solve, solveset, sympify

from sympy.calculus.util import continuous_domain

x = Symbol("x", real=True)
a = Symbol("a")
H = [S(1) / 10**3, S(1) / 10**5]


def _f(v):
    return sympify(v["f"], locals={"x": x, "a": a}).subs(Symbol("x"), x)


def _domain(f):
    return continuous_domain(f, x, S.Reals)


def _roots(g, f):
    """The real solutions of g = 0 inside the domain of f, as a sorted list (finite only)."""
    sol = solveset(simplify(g), x, _domain(f))
    if not sol.is_FiniteSet:
        raise ValueError(f"not finitely many roots: {sol}")
    return sorted(sol, key=lambda r: float(r))


def _kind(f, c):
    """'max', 'min' or None, from the definition: f(c) against f(c - h) and f(c + h)."""
    fc = float(f.subs(x, c).evalf(30))
    sides = []
    for h in H:
        lo, hi = float(f.subs(x, c - h).evalf(30)), float(f.subs(x, c + h).evalf(30))
        sides.append((lo < fc and hi < fc, lo > fc and hi > fc))
    if all(s[0] for s in sides):
        return "max"
    if all(s[1] for s in sides):
        return "min"
    return None


def _extremes(f, kind):
    return [c for c in _roots(diff(f, x), f) if _kind(f, c) == kind]


def _one(vals, what):
    vals = {simplify(v) for v in vals}
    if len(vals) != 1:
        raise ValueError(f"{what}: {len(vals)} candidates")
    return vals.pop()


def _answer(f, kind, want_value):
    pts = _extremes(f, kind)
    if not pts:
        raise ValueError(f"no local {kind}")
    return _one([f.subs(x, c) for c in pts] if want_value else pts, f"local {kind}")


def _ask(p):
    ask = p["ask"]
    return {"maxval": ("max", True), "minval": ("min", True), "maxat": ("max", False), "minat": ("min", False)}[ask]


def _solve_a(eq):
    sol = solve(eq, a)
    if len(sol) != 1:
        raise ValueError(f"{len(sol)} values of a")
    return nsimplify(sol[0])


def key(v, p):
    f = _f(v)
    if p["ask"] == "const":
        c = sympify(v["c"])
        val = _solve_a(diff(f, x).subs(x, c))
        assert _kind(f.subs(a, val), c) in ("max", "min"), "x = c is no extreme point for this a"
        return val
    kind, want_value = _ask(p)
    return _answer(f, kind, want_value)


def m1(v, p):
    """Swaps the tests: takes f''(c) < 0 (f' going + to -) for a minimum, so reports the other kind."""
    if p["ask"] == "const":
        raise ValueError("value and point items only")
    kind, want_value = _ask(p)
    return _answer(_f(v), "min" if kind == "max" else "max", want_value)


def m2(v, p):
    """Mixes up the point and the value: gives c when asked for f(c), and f(c) when asked for c."""
    if p["ask"] == "const":
        raise ValueError("value and point items only")
    f = _f(v)
    kind, want_value = _ask(p)
    pts = _extremes(f, kind)
    if want_value:
        return _one(pts, "point")
    return _one([f.subs(x, c) for c in pts], "value")


def m3(v, p):
    """Reports f''(c), the number from the second derivative test, as the extreme value."""
    if p["ask"] not in ("maxval", "minval"):
        raise ValueError("value items only")
    f = _f(v)
    kind, _ = _ask(p)
    return _one([diff(f, x, 2).subs(x, c) for c in _extremes(f, kind)], "f''(c)")


def m4(v, p):
    """Looks for the extreme point where f''(x) = 0 instead of f'(x) = 0."""
    f = _f(v)
    if p["ask"] == "const":
        return _solve_a(diff(f, x, 2).subs(x, sympify(v["c"])))
    _, want_value = _ask(p)
    rs = _roots(diff(f, x, 2), f)
    if not rs:
        raise ValueError("f'' is never 0")
    return _one([f.subs(x, r) for r in rs] if want_value else rs, "f'' = 0")


def m5(v, p):
    """Takes an extreme point to be where the graph meets the x-axis: solves f(c) = 0 for a."""
    if p["ask"] != "const":
        raise ValueError("const items only")
    f = _f(v)
    return _solve_a(f.subs(x, sympify(v["c"])))


def m6(v, p):
    """Drops the sign of the given point: solves f'(-c) = 0, so x = -1 is used as x = 1."""
    if p["ask"] != "const":
        raise ValueError("const items only")
    f = _f(v)
    c = sympify(v["c"])
    if c == 0:
        raise ValueError("c = 0: same as the key")
    return _solve_a(diff(f, x).subs(x, -c))


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
