"""C03 Solving by substitution: answer models (the key, and one per misconception).

Inputs (sympy): the equations a1 x + b1 y = c1 (I) and a2 x + b2 y = c2 (II).
Params (strings): src, the equation ("1" or "2") one variable is written from; iso, that
variable ("x" or "y"); ask, "pair" (the answer x + I*y, draft_items fmt="pair") or "first"
(the value of the other variable, found first after substituting).

The method: from equation src, iso = k + m * u, where u is the other variable. Put that into the
other equation: (a + b m) u + b k = c, so u = (c - b k) / (a + b m). Then iso = k + m u.
"""
from sympy import I, linsolve, symbols

_x, _y = symbols("x y")


def _eqs(v):
    return (v["a1"], v["b1"], v["c1"]), (v["a2"], v["b2"], v["c2"])


def _pair(sx, sy):
    return sx + I * sy


def _parts(v, p):
    """Coefficients of the source equation (iso, other, const) and of the other equation."""
    e1, e2 = _eqs(v)
    src, oth = (e1, e2) if p["src"] == "1" else (e2, e1)
    if p["iso"] == "x":
        return (src[0], src[1], src[2]), (oth[0], oth[1], oth[2])
    return (src[1], src[0], src[2]), (oth[1], oth[0], oth[2])


def _finish(v, p, k, m, keep_const=True, flip_const=False):
    """Substitute iso = k + m u into the other equation, solve for u, put u back."""
    _, (b, a, c) = _parts(v, p)  # other equation: b * iso + a * u = c
    coef = a + b * m
    if coef == 0:
        raise ValueError("u drops out")
    const = b * k if keep_const else k
    u = (c + const) / coef if flip_const else (c - const) / coef
    iso = k + m * u
    if p["ask"] == "first":
        return u
    return _pair(iso, u) if p["iso"] == "x" else _pair(u, iso)


def _isolate(v, p):
    (coef, a_o, c), _ = _parts(v, p)
    return c / coef, -a_o / coef


def key(v, p):
    """Straight from the definition: the one pair that satisfies both equations."""
    e1, e2 = _eqs(v)
    sol = linsolve([e1[0] * _x + e1[1] * _y - e1[2], e2[0] * _x + e2[1] * _y - e2[2]], _x, _y)
    (sx, sy), = sol
    if sx.free_symbols or sy.free_symbols:
        raise ValueError("no unique solution")
    if p["ask"] == "first":
        return sy if p["iso"] == "x" else sx
    return _pair(sx, sy)


def m1(v, p):
    """Moves the other term across without changing its sign: coef*v = c + a_o*u."""
    (coef, a_o, c), _ = _parts(v, p)
    return _finish(v, p, c / coef, a_o / coef)


def m2(v, p):
    """Multiplies only the variable term of the bracket: b(k + m u) becomes b m u + k."""
    k, m = _isolate(v, p)
    _, (b, _a, _c) = _parts(v, p)
    if k == 0 or b == 1:
        raise ValueError("the bracket's constant is unchanged anyway")
    return _finish(v, p, k, m, keep_const=False)


def m3(v, p):
    """Ignores the coefficient of the variable it isolates: v = c - a_o*u."""
    (coef, a_o, c), _ = _parts(v, p)
    if coef == 1:
        raise ValueError("coefficient is 1")
    return _finish(v, p, c, -a_o)


def m4(v, p):
    """In the one-variable equation (a + b m) u + b k = c, moves b k across without changing its sign."""
    k, m = _isolate(v, p)
    _, (b, _a, _c) = _parts(v, p)
    if b * k == 0:
        raise ValueError("no constant to move")
    return _finish(v, p, k, m, flip_const=True)


def m5(v, p):
    """Solves correctly but writes the values the wrong way round: x gets y's value."""
    if p["ask"] != "pair":
        raise ValueError("pair items only")
    e1, e2 = _eqs(v)
    (sx, sy), = linsolve([e1[0] * _x + e1[1] * _y - e1[2], e2[0] * _x + e2[1] * _y - e2[2]], _x, _y)
    if sx == sy:
        raise ValueError("x = y")
    return _pair(sy, sx)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
