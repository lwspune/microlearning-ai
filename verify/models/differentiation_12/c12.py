"""C12 Showing a relation between derivatives: answer models (the key, and one per misconception).

Inputs:
  f    the function y (an expression in x);
  F    the student's first, correct step: y_1 found, roots and fractions cleared, written as
       F(x, y, y1) = 0 (y1 stands for dy/dx);
  T    the template of the relation asked for, in x, y, y1, y2, with unknown constants p, q, r
       (y2 stands for d^2y/dx^2).
Params:
  pts  comma-separated sample values of x inside the domain of f (at least one more than the
       number of unknowns);
  out  "rel" (the relation T = 0, given as the expression T), "tuple" (the coefficients of y2 and
       y1 and the rest, as the book's A, B, C) or the name of one unknown ("p").

The key never uses F: it puts y = f and its sympy derivatives into T, solves for the unknowns at
sample points, then checks that T vanishes identically (simplify, and numerically at every sample
point with sample values for the other letters).
Each misconception differentiates F once more with one wrong rule, cancels the common factor and
scales so that the coefficient of y2 matches T, then reads off what the item asks for.
"""
from functools import reduce

from sympy import Add, Poly, Rational, Symbol, Tuple, diff, expand, gcd, simplify, solve, sympify

X = Symbol("x", real=True)
Y = Symbol("y", real=True)
Y1, Y2 = Symbol("y1"), Symbol("y2")
UNKNOWNS = [Symbol("p"), Symbol("q"), Symbol("r")]
_SAMPLE = {"m": Rational(3, 7), "a": Rational(5, 3), "b": Rational(2, 9)}


def _c(e):
    """Renames symbols by name: x and y real, every other letter plain."""
    rep = {}
    for s in getattr(e, "free_symbols", ()):
        target = X if s.name == "x" else Y if s.name == "y" else Symbol(s.name)
        if s != target:
            rep[s] = target
    return e.xreplace(rep)


def _pts(p):
    return [sympify(s) for s in p["pts"].split(",")]


def _plug(T, f):
    """T with y, y1, y2 replaced by f and its derivatives."""
    return T.xreplace({Y2: diff(f, X, 2), Y1: diff(f, X), Y: f})


def _vanishes(e, pts):
    if simplify(e) == 0:
        return True
    others = {s: _SAMPLE.get(s.name, Rational(4, 11)) for s in e.free_symbols if s != X}
    for t in pts:
        val = e.subs(others).subs(X, t).evalf(40)
        if abs(complex(val)) > 1e-25:
            return False
    return True


def _out(rel, sol, T, p):
    out = p["out"]
    if out == "rel":
        return expand(rel)
    if out == "tuple":
        rel = expand(rel)
        a, b = rel.coeff(Y2), rel.coeff(Y1)
        return Tuple(a, b, expand(rel - a * Y2 - b * Y1))
    return sol[Symbol(out)]


def _unknowns(T):
    return [u for u in UNKNOWNS if T.has(u)]


def key(v, p):
    f, T = _c(v["f"]), _c(v["T"])
    unk, pts = _unknowns(T), _pts(p)
    E = _plug(T, f)
    eqs = [E.subs(X, t) for t in pts[: len(unk)]]
    sols = solve(eqs, unk, dict=True)
    if len(sols) != 1:
        raise ValueError(f"no single solution for {unk}: {sols}")
    sol = {u: simplify(sols[0][u]) for u in unk}
    rel = T.subs(sol)
    assert _vanishes(_plug(rel, f), pts), f"{rel} does not hold for y = {f}"
    return _out(rel, sol, T, p)


def _parts(F):
    """dF/dx split: the x-derivative of terms free of y, y1 (pure) and of terms with them (mixed),
    and the partial derivatives in y and y1."""
    F = expand(F)
    mixed = Add(*[t for t in Add.make_args(F) if t.has(Y, Y1)])
    return diff(F - mixed, X), diff(mixed, X), diff(F, Y), diff(F, Y1)


def _norm(G, T):
    """Cancels the factor common to every term, then scales so the y2 coefficient matches T's."""
    G = expand(G)
    g = reduce(gcd, Add.make_args(G))
    g = g / Y2 ** Poly(g, Y2).degree() if g.has(Y2) else g  # a single y2 term keeps its y2
    G = expand(simplify(G / g))
    c, t = G.coeff(Y2), expand(T).coeff(Y2)
    if c != 0:
        ratio = simplify(t / c)
        if not ratio.has(Y, Y1, Y2):
            G = expand(ratio * G)
    return G


def _finish(G, v, p):
    """The student's relation G = 0, read the way the item asks."""
    T, f = _c(v["T"]), _c(v["f"])
    rel = _norm(G, T)
    if _vanishes(_plug(rel, f), _pts(p)):
        raise ValueError(f"the model gives a true relation {rel}")
    if p["out"] == "rel":
        return rel
    unk = _unknowns(T)
    diffs = Poly(expand(rel - T), Y, Y1, Y2).coeffs()
    eqs = [c for d in diffs for c in Poly(d, X).coeffs()]
    sols = solve(eqs, unk, dict=True)
    if len(sols) != 1 or set(sols[0]) != set(unk):
        raise ValueError(f"{rel} does not fit the template {T}")
    return _out(T.subs(sols[0]), sols[0], T, p)


def _F(v):
    return _c(v["F"])


def m1(v, p):
    """Product rule dropped: the x-coefficient of y1 (or y1^2) is treated as a constant."""
    pure, mixed, Fy, Fy1 = _parts(_F(v))
    if mixed == 0:
        raise ValueError("no x-coefficient on the y-terms")
    return _finish(pure + Fy * Y1 + Fy1 * Y2, v, p)


def m2(v, p):
    """Chain rule dropped on y: a function of y is differentiated as if y were x (no factor y1)."""
    pure, mixed, Fy, Fy1 = _parts(_F(v))
    if Fy == 0:
        raise ValueError("no term in y")
    return _finish(pure + mixed + Fy + Fy1 * Y2, v, p)


def m3(v, p):
    """d/dx(y1^2) taken as 2y1: y1 differentiated as if it were x, so no factor y2."""
    F = _F(v)
    if Poly(expand(F), Y1).degree() < 2:
        raise ValueError("needs y1^2 in the first step")
    pure, mixed, Fy, Fy1 = _parts(F)
    return _finish(pure + mixed + Fy * Y1 + Fy1, v, p)


def m4(v, p):
    """Sign slip: the term from the coefficient's derivative changes sign (moved across the = sign)."""
    pure, mixed, Fy, Fy1 = _parts(_F(v))
    if mixed == 0:
        raise ValueError("no x-coefficient on the y-terms")
    return _finish(pure - mixed + Fy * Y1 + Fy1 * Y2, v, p)


def m5(v, p):
    """Dividing by 2y1, the term from the coefficient's derivative is divided by y1 only (keeps its 2)."""
    F = _F(v)
    if Poly(expand(F), Y1).degree() < 2:
        raise ValueError("needs y1^2 in the first step")
    pure, mixed, Fy, Fy1 = _parts(F)
    if mixed == 0:
        raise ValueError("no x-coefficient on the y-terms")
    return _finish(pure + 2 * mixed + Fy * Y1 + Fy1 * Y2, v, p)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5}
