"""C05 Reducing to variables separable: answer models (the key, and one per misconception).

Every item is an equation dy/dx = f(ax + by + c), solved with v = ax + by + c.
Inputs: a, b, c (numbers), f (an expression in the plain symbol v: dy/dx = f(v)),
and for a particular solution x0, y0 (the point the curve passes through).
params["ask"] says what the item asks for:
  "veq"        the equation in v and x: the value is the right side g(v) of dv/dx = g(v);
  "general"    the general solution, as F(x, y) with F = c (logs taken of absolute values);
  "particular" the particular solution through (x0, y0), as y in terms of x.

The key differentiates v = ax + by + c with y a function of x (chain rule), so
dv/dx = a + b f(v); a solution it returns is checked by substituting it back into
dy/dx = f(ax + by + c) (and the point), and it raises if the check fails.
"""
from sympy import Abs, Function, Integer, Symbol, diff, integrate, log, simplify, solve, sympify

X = Symbol("x", real=True)
Y = Symbol("y", real=True)
V = Symbol("v")
_W = Symbol("_w")


def _abc(vals):
    return sympify(vals["a"]), sympify(vals["b"]), sympify(vals["c"]), sympify(vals["f"])


def _v_rate(a, b, c, f):
    """dv/dx from the definition: differentiate v = ax + by(x) + c, then put dy/dx = f(v)."""
    y = Function("y")(X)
    rate = diff(a * X + b * y + c, X)
    return simplify(rate.subs(diff(y, X), f))


def _abs_logs(e):
    return e.replace(lambda u: isinstance(u, log), lambda u: log(Abs(u.args[0])))


def _general(g, a, b, c):
    """dv/dx = g(v) separated and integrated: G(v) = x + c, written as G(ax + by + c) - x."""
    G = _abs_logs(integrate(1 / g, V))
    return simplify(G.subs(V, a * X + b * Y + c) - X)


def _v_solution(g, x0, v0, still_ok):
    """The solution of dv/dx = g(v) with v(x0) = v0."""
    if simplify(g.subs(V, v0)) == 0:
        if not still_ok:
            # Separating dv/g(v) = dx breaks down at a root of g: a student holding the
            # mistake gets stuck rather than reaching the constant solution.
            raise ValueError(f"v0 = {v0} is a root of {g}: the mistake leads nowhere")
        v = Integer(0) + v0  # v0 is a root of g: v stays constant
    else:
        G = integrate(1 / g, V)
        sols = solve(G.subs(V, _W) - G.subs(V, v0) - (X - x0), _W)
        good = [s for s in sols if simplify(s.subs(X, x0) - v0) == 0]
        if len(good) != 1:
            raise ValueError(f"no unique branch through v({x0}) = {v0}: {sols}")
        v = good[0]
    return simplify(v)


def _particular(g, a, b, c, x0, v0, still_ok=False):
    """The particular solution, written as y = (v - ax - c)/b."""
    return simplify((_v_solution(g, x0, v0, still_ok) - a * X - c) / b)


def _check_general(F, a, b, c, f):
    slope = -diff(F, X) / diff(F, Y)
    if simplify(slope - f.subs(V, a * X + b * Y + c)) != 0:
        raise ValueError(f"key {F} = c does not satisfy the equation")


def _check_particular(y, a, b, c, f, x0, y0):
    if simplify(diff(y, X) - f.subs(V, a * X + b * y + c)) != 0:
        raise ValueError(f"key y = {y} does not satisfy the equation")
    if simplify(y.subs(X, x0) - y0) != 0:
        raise ValueError(f"key y = {y} misses the point ({x0}, {y0})")


def _answer(g, vals, p, v0=None, still_ok=False):
    a, b, c, f = _abc(vals)
    ask = p["ask"]
    if ask == "veq":
        return simplify(g)
    if ask == "general":
        return _general(g, a, b, c)
    if ask == "particular":
        x0, y0 = sympify(vals["x0"]), sympify(vals["y0"])
        start = a * x0 + b * y0 + c if v0 is None else v0
        return _particular(g, a, b, c, x0, start, still_ok)
    raise ValueError(f"unknown ask {ask}")


def key(vals, p):
    a, b, c, f = _abc(vals)
    g = _v_rate(a, b, c, f)
    out = _answer(g, vals, p, still_ok=True)
    if p["ask"] == "general":
        _check_general(out, a, b, c, f)
    if p["ask"] == "particular":
        _check_particular(out, a, b, c, f, sympify(vals["x0"]), sympify(vals["y0"]))
    return out


def m1(vals, p):
    """Forgets the a: takes dv/dx = b dy/dx, so dv/dx = b f(v)."""
    a, b, c, f = _abc(vals)
    if a == 0:
        raise ValueError("a = 0: the mistake gives the key")
    return _answer(b * f, vals, p)


def m2(vals, p):
    """Forgets the b: takes dv/dx = a + dy/dx, so dv/dx = a + f(v)."""
    a, b, c, f = _abc(vals)
    if b == 1:
        raise ValueError("b = 1: the mistake gives the key")
    return _answer(a + f, vals, p)


def m3(vals, p):
    """Moves a across with the wrong sign: b dy/dx = dv/dx + a, so dv/dx = b f(v) - a."""
    a, b, c, f = _abc(vals)
    if a == 0:
        raise ValueError("a = 0: the mistake gives the key")
    return _answer(b * f - a, vals, p)


def m4(vals, p):
    """Skips the substitution: integrates f(ax + by + c) in x holding y fixed, y = that + c."""
    if p["ask"] != "general":
        raise ValueError("models a general solution only")
    a, b, c, f = _abc(vals)
    return simplify(Y - _abs_logs(integrate(f.subs(V, a * X + b * Y + c), X)))


def m5(vals, p):
    """Starts v at y0 instead of at a x0 + b y0 + c."""
    if p["ask"] != "particular":
        raise ValueError("models a particular solution only")
    a, b, c, f = _abc(vals)
    x0, y0 = sympify(vals["x0"]), sympify(vals["y0"])
    if simplify(a * x0 + b * y0 + c - y0) == 0:
        raise ValueError("v0 = y0 here: the mistake gives the key")
    return _answer(_v_rate(a, b, c, f), vals, p, v0=y0)


def m6(vals, p):
    """Stops at v: gives the solution v(x) of the v-equation as the answer for y."""
    if p["ask"] != "particular":
        raise ValueError("models a particular solution only")
    a, b, c, f = _abc(vals)
    x0, y0 = sympify(vals["x0"]), sympify(vals["y0"])
    return _v_solution(_v_rate(a, b, c, f), x0, a * x0 + b * y0 + c, True)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5,
          "C05-M6": m6}
