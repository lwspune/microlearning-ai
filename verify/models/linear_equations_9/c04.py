"""C04 Equations with fractions: answer models (the key, and one per misconception).

Inputs (sympy): the equations a1 X + b1 Y = c1 (I) and a2 X + b2 Y = c2 (II), where X, Y are
x, y (form "frac", with fraction coefficients such as 1/3) or 1/x, 1/y (form "recip");
L1, L2 (form "frac"), the numbers each equation is multiplied by to clear its denominators
(default 1).
Params (strings): form, "frac" or "recip"; elim, the variable removed after clearing ("x"/"y",
or for "recip" the matching "p"/"q" given as "x"/"y"); back, the equation ("1" or "2") the found
value is put back into.
Every answer is the pair (x, y), returned as x + I*y (draft_items fmt="pair").
"""
from sympy import I, Integer, fraction, linsolve, solve, symbols

_x, _y = symbols("x y")


def _num(v, name, default=1):
    return Integer(default) if name not in v else v[name]


def _eqs(v):
    return (v["a1"], v["b1"], v["c1"]), (v["a2"], v["b2"], v["c2"])


def _solve(e1, e2):
    sol = linsolve([e1[0] * _x + e1[1] * _y - e1[2], e2[0] * _x + e2[1] * _y - e2[2]], _x, _y)
    if len(sol) != 1:
        raise ValueError("no unique solution")
    (sx, sy), = sol
    if sx.free_symbols or sy.free_symbols:
        raise ValueError("no unique solution")
    return sx, sy


def _pair(sx, sy):
    return sx + I * sy


def _recip(sx, sy):
    if sx == 0 or sy == 0:
        raise ValueError("p or q is 0")
    return _pair(1 / sx, 1 / sy)


def key(v, p):
    """Straight from the definition: the one pair that satisfies both equations as given."""
    e1, e2 = _eqs(v)
    if p["form"] == "frac":
        return _pair(*_solve(e1, e2))
    eq = [e[0] / _x + e[1] / _y - e[2] for e in (e1, e2)]
    sols = solve(eq, [_x, _y], dict=True)
    if len(sols) != 1:
        raise ValueError("no unique solution")
    return _pair(sols[0][_x], sols[0][_y])


def m1(v, p):
    """Clearing the denominators: multiplies the fraction terms but leaves the constant as it was.
    For 2/x + 3/y = 13 the common denominator is xy: 2y + 3x = 13."""
    e1, e2 = _eqs(v)
    if p["form"] == "frac":
        L1, L2 = _num(v, "L1"), _num(v, "L2")
        if L1 == 1 and L2 == 1:
            raise ValueError("no denominators to clear")
        return _pair(*_solve((L1 * e1[0], L1 * e1[1], e1[2]), (L2 * e2[0], L2 * e2[1], e2[2])))
    return _pair(*_solve((e1[1], e1[0], e1[2]), (e2[1], e2[0], e2[2])))


def m2(v, p):
    """Finds p = 1/x and q = 1/y, then gives p and q as the values of x and y."""
    if p["form"] != "recip":
        raise ValueError("no substitution")
    return _pair(*_solve(*_eqs(v)))


def m3(v, p):
    """Drops the denominators without multiplying: x/3 + y/4 = 4 becomes x + y = 4."""
    if p["form"] != "frac":
        raise ValueError("no fraction coefficients")
    e1, e2 = _eqs(v)
    if all(fraction(t)[1] == 1 for t in e1 + e2):
        raise ValueError("no denominators")
    return _pair(*_solve(*(tuple(fraction(t)[0] for t in e) for e in (e1, e2))))


def m4(v, p):
    """Writes the two values the wrong way round: x's value as y and y's as x."""
    k = key(v, p)
    sx, sy = k.as_real_imag()
    if sx == sy:
        raise ValueError("x = y")
    return _pair(sy, sx)


def m5(v, p):
    """Putting the found value back: moves the known term across '=' without changing its sign."""
    e1, e2 = _eqs(v)
    if p["form"] == "frac":
        L1, L2 = _num(v, "L1"), _num(v, "L2")
        e1, e2 = tuple(L1 * t for t in e1), tuple(L2 * t for t in e2)
    sx, sy = _solve(e1, e2)
    e = (e1, e2)[int(p["back"]) - 1]
    if p["elim"] == "x":  # found the second variable; solve for the first
        found, coef_found, coef_other = sy, e[1], e[0]
    else:
        found, coef_found, coef_other = sx, e[0], e[1]
    if coef_found * found == 0:
        raise ValueError("nothing moves across")
    other = (e[2] + coef_found * found) / coef_other
    a, b = (other, found) if p["elim"] == "x" else (found, other)
    return _pair(a, b) if p["form"] == "frac" else _recip(a, b)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
