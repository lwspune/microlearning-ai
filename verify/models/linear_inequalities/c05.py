"""C05 Systems of inequalities: answer models (the key, and one per misconception).

Inputs: L1, R1, L2, R2 (and L3, R3 for three), each side of inequality i, in x.
Params: op1, op2 (op3), each one of "<", "<=", ">", ">=": L_i op_i R_i.
The models that solve by hand collect the x terms on the left: a x op c, with
a = coeff of x in L - R and c = const(R) - const(L).
"""
from sympy import Ge, Gt, Interval, Intersection, Le, Lt, S, Symbol, Union, expand, oo, solveset

X = Symbol("x", real=True)
REL = {"<": Lt, "<=": Le, ">": Gt, ">=": Ge}
FLIP_INCLUSION = {"<": "<=", "<=": "<", ">": ">=", ">=": ">"}
REVERSE = {"<": ">", "<=": ">=", ">": "<", ">=": "<="}


def _real(e):
    return e.subs({s: X for s in e.free_symbols if s.name == "x"})


def _ineqs(v, p):
    out, i = [], 1
    while f"L{i}" in v:
        out.append((_real(v[f"L{i}"]), p[f"op{i}"], _real(v[f"R{i}"])))
        i += 1
    return out


def _solve(op, lhs, rhs):
    return solveset(REL[op](lhs, rhs), X, S.Reals)


def _parts(lhs, rhs):
    """(a, cL, cR): lhs - rhs = a x + cL - cR, with cL, cR the constants of each side."""
    a = expand(lhs - rhs).coeff(X, 1)
    cl, cr = expand(lhs).coeff(X, 0), expand(rhs).coeff(X, 0)
    if a == 0:
        raise ValueError("no x term")
    return a, cl, cr


def key(v, p):
    """The numbers satisfying every inequality: the intersection of their solution sets."""
    return Intersection(*[_solve(op, l, r) for l, op, r in _ineqs(v, p)])


def m1(v, p):
    """M1: takes the union (either inequality) instead of the common part."""
    return Union(*[_solve(op, l, r) for l, op, r in _ineqs(v, p)])


def m2(v, p):
    """M2: strict signs read as keeping the endpoint, slack signs as leaving it out."""
    return Intersection(*[_solve(FLIP_INCLUSION[op], l, r) for l, op, r in _ineqs(v, p)])


def m3(v, p):
    """M3: divides by a negative coefficient without turning the sign round."""
    sets, slipped = [], False
    for l, op, r in _ineqs(v, p):
        a, cl, cr = _parts(l, r)
        if a < 0:
            slipped = True
            sets.append(_solve(op, X, (cr - cl) / a))
        else:
            sets.append(_solve(op, l, r))
    if not slipped:
        raise ValueError("no negative coefficient to divide by")
    return Intersection(*sets)


def m4(v, p):
    """M4: the answer is always the part between the two endpoints, each with its own sign."""
    rays = [_solve(op, l, r) for l, op, r in _ineqs(v, p)]
    if len(rays) != 2:
        raise ValueError("two inequalities only")
    ends = []
    for s in rays:
        e = s.inf if s.sup == oo else s.sup
        ends.append((e, e in s))
    (lo, lo_in), (hi, hi_in) = sorted(ends, key=lambda t: t[0])
    if lo == hi:
        raise ValueError("no gap between the endpoints")
    return Interval(lo, hi, not lo_in, not hi_in)


def m5(v, p):
    """M5: moves the constant from the left to the right without changing its sign."""
    sets, slipped = [], False
    for l, op, r in _ineqs(v, p):
        a, cl, cr = _parts(l, r)
        slipped = slipped or cl != 0
        sets.append(_solve(op, a * X, cr + cl))
    if not slipped:
        raise ValueError("no constant moved")
    return Intersection(*sets)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
