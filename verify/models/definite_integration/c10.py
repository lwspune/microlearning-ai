"""C10 Integrands with [x] and |x|: answer models (the key, and one per misconception).

Every item asks for a number, the definite integral of f from a to b (a < b). Inputs:
- f: the integrand, an expression in x; it may hold floor(g) (the book's [g]), Abs(g) and
  x/Abs(x), with g a simple expression in x (x, -x, x**2, a quadratic, log(x)/x).
- a, b: the limits.
The key splits [a, b] at every point where some [g] jumps or some |g| changes sign, replaces
each [g] and |g| by its plain form on each piece (read off at the piece's midpoint), integrates
with sympy and adds; it is cross-checked by numerical quadrature of f itself (mpmath.quad), which
knows nothing about the splitting. The models apply each wrong rule to the same pieces.
"""
import math

import mpmath
from sympy import Abs, Dummy, Integer, Interval, Symbol, floor, integrate, lambdify, simplify, solveset, sympify


def _x(v):
    """The symbol x in the inputs (the verifier parses x as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _atoms(f):
    """The jump atoms of f: every floor(g) and Abs(g)."""
    return list(f.atoms(floor)) + list(f.atoms(Abs))


def _breaks(f, x, a, b):
    """The points strictly inside (a, b) where a floor(g) jumps or an Abs(g) changes sign, sorted."""
    lo, hi = float(a), float(b)
    pts = set()
    for atom in _atoms(f):
        g = atom.args[0]
        if isinstance(atom, floor):
            gf = lambdify(x, g, "math")
            vals = [gf(lo + (hi - lo) * i / 400) for i in range(1, 400)]
            levels = range(math.floor(min(vals)), math.ceil(max(vals)) + 1)
        else:
            levels = [0]
        for k in levels:
            sol = solveset(g - k, x, Interval.open(a, b))
            if not sol.is_FiniteSet:
                raise ValueError(f"can't find where {g} = {k}")
            pts |= set(sol)
    return sorted(pts, key=float)


def _pieces(f, x, a, b):
    """The pieces [p, q] of [a, b] between consecutive break points."""
    ends = [a] + _breaks(f, x, a, b) + [b]
    return list(zip(ends, ends[1:]))


def _true_form(atom, x, m):
    """The plain form of a jump atom on the piece whose midpoint is m."""
    g = atom.args[0]
    gm = float(g.subs(x, m))
    if isinstance(atom, floor):
        return Integer(math.floor(gm))
    return g if gm > 0 else -g


def _split_integral(f, x, a, b, form):
    """Integral of f over (a, b), piece by piece, each jump atom replaced by form(atom, m) on its piece."""
    total = 0
    for p, q in _pieces(f, x, a, b):
        m = (p + q) / 2
        h = f.xreplace({u: form(u, x, m) for u in _atoms(f)})
        part = integrate(h, (x, p, q))
        if part.has(integrate):
            raise ValueError(f"sympy could not integrate {h}")
        total += part
    return simplify(total)


def _numeric(f, x, a, b):
    """f integrated numerically; the break points are nodes, so no sample lands on a jump."""
    fn = lambdify(x, f, "mpmath")
    nodes = [mpmath.mpf(float(t)) for t in [a] + _breaks(f, x, a, b) + [b]]
    return mpmath.quad(fn, nodes)


def key(v, p):
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    exact = _split_integral(f, x, a, b, _true_form)
    num = _numeric(f, x, a, b)
    if abs(float(exact) - float(num)) > 1e-8:
        raise ValueError(f"exact {exact} and numeric {num} disagree for {f}")
    return exact


def m1(v, p):
    """[g(x)] jumps only at the integers of x: reads [g(x)] as g([x]), so [x^2] = [x]^2, [-x] = -[x]."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    gs = [u for u in f.atoms(floor) if u.args[0] != x]
    if not gs:
        raise ValueError("no [g(x)] with g(x) other than x")
    g = f.xreplace({u: u.args[0].subs(x, floor(x)) for u in gs})
    return _split_integral(g, x, a, b, _true_form)


def m2(v, p):
    """[x] of a negative number drops the decimals (rounds towards 0): [-1.5] = -1, [-0.4] = 0."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    if not f.has(floor) or not a < 0:
        raise ValueError("needs [g] and negative values in the interval")

    def form(atom, x, m):
        if isinstance(atom, floor):
            gm = float(atom.args[0].subs(x, m))
            return Integer(math.trunc(gm))
        return _true_form(atom, x, m)

    return _split_integral(f, x, a, b, form)


def m3(v, p):
    """Never splits: uses the formula that holds just after the lower limit over the whole interval."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    pieces = _pieces(f, x, a, b)
    if len(pieces) < 2:
        raise ValueError("no break inside the interval")
    p0, q0 = pieces[0]
    m0 = (p0 + q0) / 2
    h = f.xreplace({u: _true_form(u, x, m0) for u in _atoms(f)})
    return simplify(integrate(h, (x, a, b)))


def m4(v, p):
    """Drops the bars and brackets: |g| read as g, [g] as g (so x/|x| = 1).
    sympy may store |g| as |-g|; p["inside"], when given, is g as the stem writes it."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    if not _atoms(f):
        raise ValueError("no [g] or |g| in f")
    inside = (lambda u: sympify(p["inside"], locals={"x": x})) if "inside" in p else (lambda u: u)
    h = f.replace(Abs, inside).replace(floor, lambda u: u)
    return simplify(integrate(simplify(h), (x, a, b)))


def m5(v, p):
    """Uses the wrong side of each break: [g] = n + 1 where n <= g < n + 1 (rounds up),
    |g| = g where g < 0 and -g where g > 0."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    if not _atoms(f):
        raise ValueError("no [g] or |g| in f")

    def form(atom, x, m):
        t = _true_form(atom, x, m)
        return t + 1 if isinstance(atom, floor) else -t

    return _split_integral(f, x, a, b, form)


def m6(v, p):
    """Takes each [g] out as a constant c, integrates the rest to H(x, c), then puts the limits
    into [g] as well: H(b, [g(b)]) - H(a, [g(a)]). For [x] this reads x[x] as an antiderivative."""
    x, f, a, b = _x(v), v["f"], v["a"], v["b"]
    gs = list(f.atoms(floor))
    if not gs or f.has(Abs):
        raise ValueError("needs [g] and no |g|")
    cs = {u: Dummy() for u in gs}
    H = integrate(f.xreplace(cs), x)
    at = lambda t: H.subs({c: Integer(math.floor(float(u.args[0].subs(x, t)))) for u, c in cs.items()}).subs(x, t)
    return simplify(at(b) - at(a))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
