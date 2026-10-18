"""C03 General and particular solutions: answer models (the key, and one per misconception).

Two kinds of item, told apart by params["ask"]:

"count": inputs L and R, the two sides of a polynomial differential equation L = R, written
  with p1, p2, p3, p4 for dy/dx, d^2y/dx^2, d^3y/dx^3, d^4y/dx^4. The answer is how many
  arbitrary constants the general solution has (equally, how many conditions fix a particular
  solution). The key is the order: the highest k with p_k present.

"y" | "y_at" | "x_at": a first-order family G(x, y, c) = 0 given as the general solution of
  D(x, y, p1) = 0, and a condition: y = y0 when x = x0. The key first checks that G = 0 really
  solves D (implicit differentiation, the constant eliminated) and has one constant (the order
  of D is 1), then fixes c from the condition. "y" answers the particular solution as y in
  terms of x; "y_at" its value at x = x1; "x_at" the positive x on it at y = y1.
"""
from sympy import Poly, Symbol, numer, simplify, solve, symbols, together

X, Y = symbols("x y", real=True)
C = Symbol("c")
P = [Symbol(f"p{k}") for k in range(1, 5)]


def _r(e):
    """Inputs with x and y as the real symbols the verifier uses (draft_items parses them plain)."""
    return e.subs({Symbol("x"): X, Symbol("y"): Y})


# ---------- count items ----------

def _poly(v, p):
    if p.get("ask") != "count":
        raise ValueError("a counting model, for count items only")
    e = numer(together(_r(v["L"]) - _r(v["R"]))).expand()
    present = [k + 1 for k, s in enumerate(P) if e.has(s)]
    if not present:
        raise ValueError("no derivative in the equation")
    return e, present


def _exp(e, k):
    return Poly(e, P[k - 1]).degree()


def count_key(v, p):
    e, present = _poly(v, p)
    return max(present)


def m1_degree(v, p):
    e, present = _poly(v, p)
    return _exp(e, max(present))


def m5_one(v, p):
    _poly(v, p)
    return 1


def m6_max_power(v, p):
    e, present = _poly(v, p)
    return max(_exp(e, k) for k in present)


# ---------- particular-solution items ----------

def _family(v, p):
    if p.get("ask") not in ("y", "y_at", "x_at"):
        raise ValueError("a particular-solution model, for condition items only")
    return _r(v["G"])


def _check_general(v):
    """G = 0 solves D = 0 and is the general solution: one constant, first-order D."""
    g, d = _r(v["G"]), _r(v["D"])
    assert g.has(C) and not any(d.has(s) for s in P[1:]) and d.has(P[0]), "G needs c; D must be first order"
    slope = -g.diff(X) / g.diff(Y)
    cs = solve(g, C)
    assert len(cs) == 1, f"c not unique in {g}"
    assert simplify(d.subs(P[0], slope).subs(C, cs[0])) == 0, f"{g} = 0 does not solve {d} = 0"


def _c_from(g, xv, yv):
    cs = solve(g.subs({X: xv, Y: yv}), C)
    if len(cs) != 1:
        raise ValueError(f"no unique c at ({xv}, {yv})")
    return cs[0]


def _answer(v, p, c):
    g = _family(v, p).subs(C, c)
    ask = p["ask"]
    if ask == "y":
        ys = solve(g, Y)
        if len(ys) != 1:
            raise ValueError(f"y not unique in {g}")
        return simplify(ys[0])
    if ask == "y_at":
        ys = [s for s in solve(g.subs(X, _r(v["x1"])), Y) if s.is_real]
        if len(ys) != 1:
            raise ValueError(f"y not unique at x1 in {g}")
        return simplify(ys[0])
    xs = [s for s in solve(g.subs(Y, _r(v["y1"])), X) if s.is_real and s.is_positive]
    if len(xs) != 1:
        raise ValueError(f"no unique positive x at y1 in {g}")
    return simplify(xs[0])


def particular_key(v, p):
    _check_general(v)
    g = _family(v, p)
    return _answer(v, p, _c_from(g, _r(v["x0"]), _r(v["y0"])))


def m2_c_zero(v, p):
    _family(v, p)
    return _answer(v, p, 0)


def m3_c_is_y0(v, p):
    _family(v, p)
    return _answer(v, p, _r(v["y0"]))


def m4_swapped(v, p):
    g = _family(v, p)
    return _answer(v, p, _c_from(g, _r(v["y0"]), _r(v["x0"])))


# ---------- dispatch ----------

def key(v, p):
    return count_key(v, p) if p.get("ask") == "count" else particular_key(v, p)


MODELS = {
    "key": key,
    "C03-M1": m1_degree,
    "C03-M2": m2_c_zero,
    "C03-M3": m3_c_is_y0,
    "C03-M4": m4_swapped,
    "C03-M5": m5_one,
    "C03-M6": m6_max_power,
}
