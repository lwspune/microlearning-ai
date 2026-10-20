"""C03 Solutions on a number line: answer models (the key, and one per misconception).

Every item is one linear inequality in real x: inputs lhs, rhs (sympy expressions) and
params op (lt | le | gt | ge), read as lhs op rhs. Answers are rays: Interval(a, oo) and the like.
C03-M5 also needs params lhs_text, rhs_text: the two sides exactly as printed, so it can see
which terms are fractions.
"""
from functools import reduce

from sympy import Add, Interval, Poly, Symbol, expand, fraction, ilcm, oo, solve_univariate_inequality, sympify
from sympy.parsing.sympy_parser import parse_expr

X = Symbol("x", real=True)
_OPS = {"lt": lambda a, b: a < b, "le": lambda a, b: a <= b, "gt": lambda a, b: a > b, "ge": lambda a, b: a >= b}


def _real(e):
    """The item's expression with its x as the real x (draft_items parses x as a plain symbol)."""
    e = sympify(e)
    return e.subs({s: X for s in e.free_symbols if s.name == "x"})


def _solve(lhs, rhs, op):
    sol = solve_univariate_inequality(_OPS[op](_real(lhs), _real(rhs)), X, relational=False)
    if not isinstance(sol, Interval) or not (sol.start == -oo or sol.end == oo):
        raise ValueError(f"not a ray: {sol}")
    return sol


def _parts(ray):
    """(boundary, side the ray runs to, boundary included?)."""
    if ray.end == oo:
        return ray.start, "right", not ray.left_open
    return ray.end, "left", not ray.right_open


def _ray(a, side, closed):
    if side == "right":
        return Interval(a, oo, left_open=not closed)
    return Interval(-oo, a, right_open=not closed)


def key(v, p):
    return _solve(v["lhs"], v["rhs"], p["op"])


def m1(v, p):
    """Circles swapped: hollow for a slack sign, filled for a strict one."""
    a, side, closed = _parts(key(v, p))
    return _ray(a, side, not closed)


def m2(v, p):
    """The sign's tip sets the ray's direction: a < x drawn (or read) as running left."""
    a, side, closed = _parts(key(v, p))
    return _ray(a, "left" if side == "right" else "right", closed)


def m3(v, p):
    """The darkened ray taken as the numbers that fail: the other side, boundary flipped."""
    a, side, closed = _parts(key(v, p))
    return _ray(a, "left" if side == "right" else "right", not closed)


def m4(v, p):
    """Stops before the last division: from px op q (fractions cleared) the circle goes at q, not q/p."""
    a, side, closed = _parts(key(v, p))
    f = expand(_real(v["lhs"]) - _real(v["rhs"]))
    coeffs = Poly(f, X).all_coeffs()
    scale = reduce(ilcm, [fraction(c)[1] for c in coeffs], 1)
    coeff = abs(Poly(f * scale, X).coeff_monomial(X))
    if coeff == 1 or a == 0:
        raise ValueError("the circle lands on the key's boundary")
    return _ray(a * coeff, side, closed)


def _times_lcm_fractions_only(text, lcm):
    terms = Add.make_args(parse_expr(text, evaluate=False))
    return sum((t * lcm if fraction(t)[1] != 1 else t for t in terms), 0)


def m5(v, p):
    """Clears the fractions but leaves the terms without a denominator unmultiplied by the L.C.M."""
    if "lhs_text" not in p or "rhs_text" not in p:
        raise ValueError("needs lhs_text and rhs_text")
    sides = [parse_expr(p[k], evaluate=False) for k in ("lhs_text", "rhs_text")]
    dens = [fraction(t)[1] for s in sides for t in Add.make_args(s)]
    lcm = reduce(ilcm, [int(d) for d in dens if d.is_Integer], 1)
    if lcm == 1 or all(d != 1 for d in dens):
        raise ValueError("needs fractions and a whole-number term")
    lhs, rhs = (_times_lcm_fractions_only(p[k], lcm) for k in ("lhs_text", "rhs_text"))
    return _solve(lhs, rhs, p["op"])


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
