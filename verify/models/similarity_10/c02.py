"""C02 Basic proportionality theorem: answer models (the key, and one per misconception).

A line cuts two sides of a triangle from a shared vertex (the apex). On side 1 it leaves a
top piece u1 (next to the apex) and a bottom piece l1, whole w1 = u1 + l1; on side 2, u2, l2
and w2. Each value item gives three of u1, l1, w1, u2, l2, w2 as inputs and asks for one
(params["ask"]). The line is parallel to the third side (or is to be made parallel).

params["form"] == "statement": "which statement is true", answered by name.
"""
from sympy import Eq, Matrix, Rational, Symbol, solve, sqrt, sympify, symbols

U1, L1, U2, L2 = symbols("u1 l1 u2 l2", positive=True)
NAMES = {"u1": U1, "l1": L1, "u2": U2, "l2": L2, "w1": U1 + L1, "w2": U2 + L2}


def _solve(v, p, eq):
    """Solve the model's relation with the item's three givens; return the asked length."""
    if p.get("form") == "statement":
        raise ValueError("value model on a statement item")
    eqs = [eq] + [Eq(NAMES[k], val) for k, val in v.items()]
    sols = solve(eqs, [U1, L1, U2, L2], dict=True)
    sols = [s for s in sols if len(s) == 4 and all(s[x].is_positive for x in (U1, L1, U2, L2))]
    if len(sols) != 1:
        raise ValueError(f"{len(sols)} positive solutions")
    return NAMES[p["ask"]].subs(sols[0])


def key(v, p):
    if p.get("form") == "statement":
        return Symbol("AB_AC_eq_AX_AY")
    # Geometry, not the theorem: A at the origin, B = (w1, 0), C at distance w2 along 60 degrees.
    # The line through D = (u1, 0) parallel to BC meets line AC at E = lam * C.
    w1, w2 = U1 + L1, U2 + L2
    b = Matrix([w1, 0])
    c = w2 * Matrix([Rational(1, 2), sqrt(3) / 2])
    d = Matrix([U1, 0])
    lam, mu = symbols("lam mu")
    s = solve(list(d + mu * (c - b) - lam * c), [lam, mu], dict=True)[0]
    return _solve(v, p, Eq(U2, s[lam] * w2))


def m1(v, p):
    """Pairs the top piece of one side with the bottom piece of the other: AD/DB = EC/AE."""
    if p.get("form") == "statement":
        return Symbol("AX_XB_eq_YC_AY")
    return _solve(v, p, Eq(U1 * U2, L1 * L2))


def m2(v, p):
    """Mixes a part : part ratio with a part : whole ratio: AD/DB = AE/AC (whole on side 2),
    or AD/AB = AE/EC (whole on side 1), as params["whole"] says."""
    if p.get("form") == "statement":
        return Symbol("AX_XB_eq_AY_AC")
    if p.get("whole") == "2":
        return _solve(v, p, Eq(U1 * (U2 + L2), L1 * U2))
    if p.get("whole") == "1":
        return _solve(v, p, Eq(U1 * L2, (U1 + L1) * U2))
    raise ValueError("no whole side named")


def m3(v, p):
    """Equal differences instead of equal ratios: DB - AD = EC - AE."""
    if p.get("form") == "statement":
        return Symbol("XB_AX_eq_YC_AY")
    return _solve(v, p, Eq(L1 - U1, L2 - U2))


def m4(v, p):
    """Solves a/b = x/c as x = ab/c: multiplies the two known pieces of the same side."""
    if p.get("form") == "statement":
        raise ValueError("not a statement model")
    ask = p["ask"]
    if set(v) | {ask} != {"u1", "l1", "u2", "l2"}:
        raise ValueError("needs three pieces given and a piece asked")
    own = {"u1": "l1", "l1": "u1", "u2": "l2", "l2": "u2"}[ask]
    other = [k for k in v if k != own]
    return sympify(v[other[0]]) * sympify(v[other[1]]) / sympify(v[own])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4}
