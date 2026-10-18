"""C04 Variables separable: answer models (the key, and one per misconception).

Every item is dy/dx = f(x) g(y) with a condition y = y0 when x = x0.
Inputs: f (in x), g (in y), x0, y0; x1, the x at which the item asks for the answer (left out
when the item asks for the particular solution y as an expression in x); w, the quantity
reported (an expression in y, default y itself); F and G, optional: the antiderivatives
of f(x) and 1/g(y) as the book writes them (default: sympy's), checked against f and g.

The key solves the initial-value problem with sympy's dsolve, not by separating by hand,
keeps the branch that meets the condition, and reports w at x1.
The misconception models follow the student's working: integrate both sides,
G(y) = F(x) + c, then fix c (or not) from the condition.
"""
from sympy import (Eq, Function, N, Symbol, count_ops, diff, dsolve, integrate, nsimplify, simplify,
                   solve, sympify)

X = Symbol("x", real=True)
Y = Symbol("y", real=True)
_yf = Function("y")


def _real(e):
    """The expression with any x, y in it made the real symbols the verifier uses."""
    e = sympify(e)
    return e.subs({s: {"x": X, "y": Y}[s.name] for s in e.free_symbols if s.name in ("x", "y")})


def _tidy(v):
    """A number in its simplest exact form (tan(atan(1/2) + pi/4) as 3); expressions simplified."""
    v = simplify(v)
    if v.free_symbols:
        return v
    if not N(v).is_real:
        raise ValueError(f"not a real number: {v}")
    c = nsimplify(v)  # a guess, kept only if it agrees to 40 digits and is shorter
    if abs(N(c - v, 60)) < 1e-40 and count_ops(c) < count_ops(v):
        return c
    return v


def _parts(v):
    f, g = _real(v["f"]), _real(v["g"])
    F = _real(v["F"]) if "F" in v else integrate(f, X)
    G = _real(v["G"]) if "G" in v else integrate(1 / g, Y)
    assert simplify(diff(F, X) - f) == 0, "F is not an antiderivative of f"
    assert simplify(diff(G, Y) - 1 / g) == 0, "G is not an antiderivative of 1/g"
    w = _real(v["w"]) if "w" in v else Y
    return f, g, F, G, w


def _at(e, x):
    return e if x is None else e.subs(X, x)


def _root(Gy, rhs, near_x, near_y):
    """Solve Gy = rhs for y and keep the real branch through (or nearest to) the condition."""
    roots = solve(Eq(Gy, rhs), Y)
    if not roots:
        raise ValueError("can't solve for y")
    def gap(r):
        val = N(r.subs(X, near_x)) if r.has(X) else N(r)
        if not val.is_real:
            return float("inf")
        return abs(float(val) - float(N(near_y)))
    best = min(roots, key=gap)
    if gap(best) == float("inf"):
        raise ValueError("no real branch")
    return best


def _report(w, yv):
    """w for the solved y: a number when x1 was given, else an expression in x."""
    return _tidy(w.subs(Y, yv))


def _separated(Gy, Fx, x0, y0, x1, w):
    """G(y) = F(x) + c with c fixed by (x0, y0); w at x1."""
    c = Gy.subs(Y, y0) - Fx.subs(X, x0)
    if not c.is_finite:
        raise ValueError("the condition makes the constant infinite")
    rhs = Fx + c if x1 is None else Fx.subs(X, x1) + c
    return _report(w, _root(Gy, rhs, x0, y0))


def key(v, p):
    f, g, _, _, w = _parts(v)
    x0, y0, x1 = sympify(v["x0"]), sympify(v["y0"]), v.get("x1")
    ode = Eq(_yf(X).diff(X), f * g.subs(Y, _yf(X)))
    sols = dsolve(ode, _yf(X), ics={_yf(x0): y0})
    sols = sols if isinstance(sols, list) else [sols]
    good = [s.rhs for s in sols if abs(N(s.rhs.subs(X, x0) - y0)) < 1e-12]
    if len(good) != 1:
        raise ValueError(f"{len(good)} branches meet the condition")
    yv = good[0]
    return _tidy(_at(w.subs(Y, yv), x1))


def m1(v, p):
    """Multiplies by g(y) instead of dividing: g(y) dy = f(x) dx."""
    f, g, F, _, w = _parts(v)
    return _separated(integrate(g, Y), F, sympify(v["x0"]), sympify(v["y0"]), v.get("x1"), w)


def m2(v, p):
    """Solves G(y) = F(x) for the reported quantity first, then adds the constant: w = H(x) + k."""
    f, g, F, G, w = _parts(v)
    x0, y0, x1 = sympify(v["x0"]), sympify(v["y0"]), v.get("x1")
    branch = _root(G, F, x0, y0)          # the solution with no constant, as y in x
    h = simplify(w.subs(Y, branch))       # ... and as the reported quantity
    k = w.subs(Y, y0) - h.subs(X, x0)
    if not k.is_finite:
        raise ValueError("the condition makes the constant infinite")
    return _tidy(_at(h + k, x1))


def m3(v, p):
    """Leaves out the constant: G(y) = F(x), so the condition is never used."""
    f, g, F, G, w = _parts(v)
    x0, y0, x1 = sympify(v["x0"]), sympify(v["y0"]), v.get("x1")
    rhs = F if x1 is None else F.subs(X, x1)
    return _report(w, _root(G, rhs, x0, y0))


def m4(v, p):
    """Loses the minus sign moving a term across the equals sign: G(y) = -F(x) + c."""
    f, g, F, G, w = _parts(v)
    return _separated(G, -F, sympify(v["x0"]), sympify(v["y0"]), v.get("x1"), w)


def m5(v, p):
    """Swaps the condition: puts y = x0 and x = y0."""
    f, g, F, G, w = _parts(v)
    return _separated(G, F, sympify(v["y0"]), sympify(v["x0"]), v.get("x1"), w)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
