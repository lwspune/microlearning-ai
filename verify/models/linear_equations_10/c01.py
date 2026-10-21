"""C01 Solving by elimination: answer models (the key, and one per misconception).

Inputs (sympy): the equations a1 x + b1 y = c1 (I) and a2 x + b2 y = c2 (II); optional L1, L2,
the numbers each equation is multiplied by to clear its fractions (default 1); k1, k2, the
multipliers that make one variable's coefficients equal (default 1).
Params (strings): elim, the variable removed ("x" or "y"); op, "add" or "sub"; back, the cleared
equation ("1" or "2") the found value is put back into.
Every answer is the pair (x, y), returned as x + I*y (draft_items fmt="pair").
"""
from sympy import I, Integer, linsolve, symbols

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


def _cleared(v):
    e1, e2 = _eqs(v)
    L1, L2 = _num(v, "L1"), _num(v, "L2")
    return tuple(L1 * t for t in e1), tuple(L2 * t for t in e2)


def _pair(sx, sy):
    return sx + I * sy


def _eliminate(f1, f2, p):
    """Add or subtract the scaled equations; return the remaining variable's value."""
    s = 1 if p["op"] == "add" else -1
    comb = tuple(f1[i] + s * f2[i] for i in range(3))
    gone, keep = (0, 1) if p["elim"] == "x" else (1, 0)
    if comb[gone] != 0:
        raise ValueError("the multipliers don't remove the variable")
    return comb[2] / comb[keep]


def _back(v, p, found, flip=False, absolute=False):
    """Put the found value back into the chosen cleared equation and finish."""
    e = _cleared(v)[int(p["back"]) - 1]
    if p["elim"] == "x":  # found y; solve for x: a x = c - b y
        coef_found, coef_other = e[1], e[0]
    else:  # found x; solve for y: b y = c - a x
        coef_found, coef_other = e[0], e[1]
    rhs = e[2] + coef_found * found if flip else e[2] - coef_found * found
    if absolute:
        if rhs >= 0:
            raise ValueError("the right side is not negative")
        rhs = -rhs
    other = rhs / coef_other
    return _pair(other, found) if p["elim"] == "x" else _pair(found, other)


def _scaled(v):
    c1, c2 = _cleared(v)
    k1, k2 = _num(v, "k1"), _num(v, "k2")
    return tuple(k1 * t for t in c1), tuple(k2 * t for t in c2)


def key(v, p):
    """Straight from the definition: the one pair that satisfies both equations."""
    return _pair(*_solve(*_eqs(v)))


def m1(v, p):
    """Multiplies only the x and y terms by the multiplier; the constant stays as it was."""
    c1, c2 = _cleared(v)
    k1, k2 = _num(v, "k1"), _num(v, "k2")
    if k1 == 1 and k2 == 1:
        raise ValueError("no equation is multiplied")
    f1 = (k1 * c1[0], k1 * c1[1], c1[2])
    f2 = (k2 * c2[0], k2 * c2[1], c2[2])
    found = _eliminate(f1, f2, p)
    return _back(v, p, found)


def m2(v, p):
    """Subtracting: changes the sign of the removed term only, so the other terms are added."""
    if p["op"] != "sub":
        raise ValueError("the equations are added")
    f1, f2 = _scaled(v)
    keep = 1 if p["elim"] == "x" else 0
    found = (f1[2] + f2[2]) / (f1[keep] + f2[keep])
    return _back(v, p, found)


def m3(v, p):
    """Putting the value back: moves the known term across '=' without changing its sign."""
    found = _eliminate(*_scaled(v), p)
    return _back(v, p, found, flip=True)


def m4(v, p):
    """Clearing fractions: multiplies only the terms with a denominator by the LCM."""
    e1, e2 = _eqs(v)
    L1, L2 = _num(v, "L1"), _num(v, "L2")
    if L1 == 1 and L2 == 1:
        raise ValueError("no fractions to clear")

    def clear(e, L):
        return tuple(t if t.is_integer else L * t for t in e)

    return _pair(*_solve(clear(e1, L1), clear(e2, L2)))


def m5(v, p):
    """Writes the two values the wrong way round: x's value as y and y's as x."""
    sx, sy = _solve(*_eqs(v))
    if sx == sy:
        raise ValueError("x = y")
    return _pair(sy, sx)


def m6(v, p):
    """Putting the value back: works out 9 - 15 as 6, dropping the minus sign."""
    found = _eliminate(*_scaled(v), p)
    return _back(v, p, found, absolute=True)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
