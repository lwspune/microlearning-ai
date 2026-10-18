"""C11 Volume and coplanarity: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  para      inputs u, v, w (coterminous edges): the parallelepiped's volume;
  tetra     inputs u, v, w (coterminous edges): the tetrahedron's volume;
  tetra_pts inputs A, B, C, D (vertices): the tetrahedron's volume;
  lam       inputs A, B, C, D (one coordinate holds t) and V: the set of t giving volume V;
  coplanar  inputs A, B, C, D (one coordinate holds t): the t that makes the four points coplanar.

The key takes the volume straight from its meaning, base area times height, |(u x v) . w|, with
sympy's own cross and dot; the models work the determinant a student writes. Symbols in the
inputs (a cube's side a) are taken as positive lengths.
"""
from sympy import Abs, FiniteSet, Matrix, Rational, Symbol, solve

T = Symbol("t")


def _v(x):
    return Matrix(list(x))


def _pos(e):
    """|e| with every symbol taken as a positive length, returned in plain symbols."""
    syms = {s: Symbol(s.name, positive=True) for s in e.free_symbols}
    back = {p: s for s, p in syms.items()}
    return Abs(e.subs(syms)).subs(back)


def _edges(v, p):
    """The three edges from one corner: given directly, or from vertex A to B, C, D."""
    if p["ask"] in ("para", "tetra"):
        return _v(v["u"]), _v(v["v"]), _v(v["w"])
    A = _v(v["A"])
    return _v(v["B"]) - A, _v(v["C"]) - A, _v(v["D"]) - A


def _true(u, w, x):
    return (u.cross(w)).dot(x)


def _det(u, w, x):
    """The determinant with rows u, w, x, expanded along the first row (the student's route)."""
    return u[0] * (w[1] * x[2] - w[2] * x[1]) - u[1] * (w[0] * x[2] - w[2] * x[0]) + u[2] * (w[0] * x[1] - w[1] * x[0])


def _plus_j(u, w, x):  # the middle term keeps a + sign
    return u[0] * (w[1] * x[2] - w[2] * x[1]) + u[1] * (w[0] * x[2] - w[2] * x[0]) + u[2] * (w[0] * x[1] - w[1] * x[0])


def _diagonals(u, w, x):  # only the three leading-diagonal products, nothing subtracted
    return u[0] * w[1] * x[2] + u[1] * w[2] * x[0] + u[2] * w[0] * x[1]


def _abs_solve(expr, target):
    """Real t with |expr| = target, expr linear in t."""
    return FiniteSet(*solve(expr - target, T), *solve(expr + target, T))


def _volume(p, v, trip, factor):
    """Volume = factor x |trip|, or the t solving it for lam, or the t making trip 0 for coplanar."""
    ask = p["ask"]
    if ask == "lam":
        return _abs_solve(trip, v["V"] / factor)
    if ask == "coplanar":
        (r,) = solve(trip, T)
        return r
    return factor * _pos(trip)


def _factor(p, para, tetra):
    return para if p["ask"] == "para" else tetra


def key(v, p):
    return _volume(p, v, _true(*_edges(v, p)), _factor(p, 1, Rational(1, 6)))


def m1(v, p):  # a tetrahedron taken as one third of the parallelepiped, like a pyramid on its base
    if p["ask"] in ("para", "coplanar"):
        raise ValueError("no tetrahedron")
    return _volume(p, v, _det(*_edges(v, p)), Rational(1, 3))


def m2(v, p):  # the two formulas swapped: the tetrahedron gets |[a b c]|, the parallelepiped 1/6 of it
    if p["ask"] == "coplanar":
        raise ValueError("a zero volume is zero either way")
    return _volume(p, v, _det(*_edges(v, p)), _factor(p, Rational(1, 6), 1))


def m3(v, p):  # the position vectors of B, C, D in place of the edges AB, AC, AD
    if p["ask"] in ("para", "tetra"):
        raise ValueError("no vertices")
    return _volume(p, v, _det(_v(v["B"]), _v(v["C"]), _v(v["D"])), _factor(p, 1, Rational(1, 6)))


def m4(v, p):  # the modulus dropped: the volume is the signed [a b c] (times 1/6), so lam keeps one root
    ask = p["ask"]
    f = _factor(p, 1, Rational(1, 6))
    trip = _det(*_edges(v, p))
    if ask == "lam":
        return FiniteSet(*solve(f * trip - v["V"], T))
    if ask == "coplanar":
        raise ValueError("zero has no sign")
    return f * trip


def m5(v, p):  # the determinant expanded with + on the middle term
    return _volume(p, v, _plus_j(*_edges(v, p)), _factor(p, 1, Rational(1, 6)))


def m6(v, p):  # the determinant taken as the three leading-diagonal products only
    return _volume(p, v, _diagonals(*_edges(v, p)), _factor(p, 1, Rational(1, 6)))


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
