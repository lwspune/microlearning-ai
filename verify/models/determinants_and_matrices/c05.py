"""C05 Consistency of three equations: answer models (the key, and one per misconception).

params["eqs"] holds the three equations as strings in x, y and the unknown k, e.g.
["3*x + y - 2 = 0", "k*x + 2*y - 3 = 0", "2*x - y = 3"]. The answer is the value of k
(a FiniteSet when there is more than one).

The key is found from the definition: solve all three equations together for x, y and k,
so k is a value at which the lines really share a point. The determinant is never used.
"""
from sympy import FiniteSet, Matrix, Symbol, expand, solve, symbols, sympify

x, y = symbols("x y")
k = Symbol("k")
_LOCALS = {"x": x, "y": y, "k": k}


def _sides(s):
    lhs, rhs = s.split("=")
    return sympify(lhs, locals=_LOCALS), sympify(rhs, locals=_LOCALS)


def _row(lhs, rhs):
    """(a, b, c) of the standard form a x + b y + c = 0."""
    f = expand(lhs - rhs)
    return [f.coeff(x), f.coeff(y), f.subs({x: 0, y: 0})]


def _rows(p):
    return [_row(*_sides(s)) for s in p["eqs"]]


def _answer(roots):
    roots = sorted(set(roots), key=lambda r: float(r))
    if not roots:
        raise ValueError("no value of k")
    return roots[0] if len(roots) == 1 else FiniteSet(*roots)


def _roots(expr):
    expr = expand(expr)
    if not expr.has(k):
        raise ValueError("no k left in the determinant")
    return [r for r in solve(expr, k) if r.is_real]


def key(v, p):
    eqs = [l - r for l, r in map(_sides, p["eqs"])]
    sols = solve(eqs, [x, y, k], dict=True)
    if any(k not in s for s in sols):
        raise ValueError("k is free")
    return _answer([s[k] for s in sols if s[k].is_real])


def m1(v, p):
    """Every root of det = 0 is taken, even one where two lines are parallel (no common point)."""
    out = _answer(_roots(Matrix(_rows(p)).det()))
    if out == key(v, p):
        raise ValueError("det = 0 has no extra root here")
    return out


def m2(v, p):
    """Constants copied as printed: an equation written a x + b y = c keeps +c next to rows in '= 0' form."""
    rows = []
    for s in p["eqs"]:
        lhs, rhs = _sides(s)
        a, b, _ = _row(lhs, 0)
        rows.append([a, b, expand(lhs).subs({x: 0, y: 0}) + rhs])
    return _answer(_roots(Matrix(rows).det()))


def m3(v, p):
    """Expands along row 1 with signs + + + (the middle term's minus dropped)."""
    r = _rows(p)
    m = Matrix(r)
    expr = sum(r[0][j] * m.minor(0, j) for j in range(3))
    return _answer(_roots(expr))


def m4(v, p):
    """Each 2 x 2 minor worked out as ad + bc instead of ad - bc."""
    (a1, b1, c1), (a2, b2, c2), (a3, b3, c3) = _rows(p)
    expr = a1 * (b2 * c3 + c2 * b3) - b1 * (a2 * c3 + c2 * a3) + c1 * (a2 * b3 + b2 * a3)
    return _answer(_roots(expr))


def m5(v, p):
    """The last step, c k + d = 0, solved as k = d / c: the sign of k flipped."""
    val = key(v, p)
    if isinstance(val, FiniteSet):
        return FiniteSet(*[-r for r in val])
    if val == 0:
        raise ValueError("k = 0 has no sign to flip")
    return -val


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
