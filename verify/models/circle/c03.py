"""C03 The general equation: answer models (the key, and one per misconception).

params["kind"]:
  eq     inputs A, D, E, F: the circle A x^2 + A y^2 + D x + E y + F = 0.
         params["ask"]: "centre" (a Tuple), "radius", "cr" (Tuple(h, k, r)),
         "xint" (length of the chord cut on the x-axis).
  conc   inputs D, E, F, r: the circle concentric with x^2 + y^2 + D x + E y + F = 0
         with radius r; the answer is a locus polynomial in x, y.
  three  inputs a, b: the circle through (0, 0), (a, 0), (0, b); answer Tuple(h, k, r).
         The misconceptions act on its equation x^2 + y^2 - a x - b y = 0.
"""
from sympy import S, Rational, Tuple, diff, expand, solve, sqrt, symbols

X, Y = symbols("x y", real=True)


def _coeffs(v, p):
    """A, D, E, F of the equation the student reads (A x^2 + A y^2 + D x + E y + F = 0)."""
    if p["kind"] == "eq":
        return v["A"], v["D"], v["E"], v["F"]
    if p["kind"] == "conc":
        return S(1), v["D"], v["E"], v["F"]
    if p["kind"] == "three":
        return S(1), -v["a"], -v["b"], S(0)
    raise ValueError(f"unknown kind {p['kind']}")


def _answer(p, h, k, r2, root=True, xint=None):
    """Packs a centre (h, k) and r^2 into what the item asks for."""
    r = sqrt(r2) if root else r2
    ask = p.get("ask", "cr") if p["kind"] != "three" else "cr"
    if ask == "centre":
        return Tuple(h, k)
    if ask == "radius":
        return r
    if ask == "cr":
        return Tuple(h, k, r)
    raise ValueError(f"ask {ask} not handled here")


def _circle(h, k, rhs):
    return expand((X - h) ** 2 + (Y - k) ** 2 - rhs)


# ---------- the key: from the definition, never via (-g, -f) ----------

def key(v, p):
    """Centre: the point where the equation's expression has zero slope in x and y (completing
    the square). Radius: P(h, k) = -A r^2. Three points: the point equidistant from all three.
    Intercept: the two roots of P(x, 0) = 0, subtracted."""
    if p["kind"] == "three":
        a, b = v["a"], v["b"]
        h, k = symbols("h k")
        sol = solve([h**2 + k**2 - (h - a) ** 2 - k**2, h**2 + k**2 - h**2 - (k - b) ** 2], [h, k], dict=True)[0]
        hh, kk = sol[h], sol[k]
        return Tuple(hh, kk, sqrt(hh**2 + kk**2))
    A, D, E, F = _coeffs(v, p)
    P = A * X**2 + A * Y**2 + D * X + E * Y + F
    sol = solve([diff(P, X), diff(P, Y)], [X, Y], dict=True)[0]
    h, k = sol[X], sol[Y]
    r2 = -P.subs({X: h, Y: k}) / A
    if p["kind"] == "conc":
        return _circle(h, k, v["r"] ** 2)
    if p.get("ask") == "xint":
        roots = solve(P.subs(Y, 0), X)
        if len(roots) != 2 or not all(t.is_real for t in roots):
            raise ValueError("the circle does not cut the x-axis twice")
        return abs(roots[0] - roots[1])
    if r2.is_nonpositive:
        raise ValueError("not a real circle")
    return _answer(p, h, k, r2)


# ---------- misconceptions ----------

def _gfc(v, p, halve=True, divide=True):
    A, D, E, F = _coeffs(v, p)
    if not divide:
        A = S(1)
    D, E, F = D / A, E / A, F / A
    if halve:
        return D * Rational(1, 2), E * Rational(1, 2), F
    return D, E, F


def m1(v, p):
    """Takes the centre as (g, f): the signs not flipped."""
    g, f, c = _gfc(v, p)
    if p["kind"] == "conc":
        return _circle(g, f, v["r"] ** 2)
    if p.get("ask") in ("radius", "xint"):
        raise ValueError("the centre's sign doesn't change this answer")
    return _answer(p, g, f, g**2 + f**2 - c)


def m2(v, p):
    """Takes g as the whole coefficient of x (and f of y), not half of it."""
    g, f, c = _gfc(v, p, halve=False)
    if p["kind"] == "conc":
        return _circle(-g, -f, v["r"] ** 2)
    if p.get("ask") == "xint":
        return 2 * sqrt(g**2 - c)
    return _answer(p, -g, -f, g**2 + f**2 - c)


def m3(v, p):
    """Reads g, f, c straight off the equation without first dividing by the coefficient of x^2."""
    A = _coeffs(v, p)[0]
    if A == 1:
        raise ValueError("x^2 already has coefficient 1")
    g, f, c = _gfc(v, p, divide=False)
    if p.get("ask") == "xint":
        return 2 * sqrt(g**2 - c)
    return _answer(p, -g, -f, g**2 + f**2 - c)


def m4(v, p):
    """Radius as sqrt(g^2 + f^2 + c): the sign of c flipped."""
    g, f, c = _gfc(v, p)
    if p["kind"] == "conc" or p.get("ask") in ("centre", "xint"):
        raise ValueError("no radius from g, f, c in this answer")
    if c == 0:
        raise ValueError("with c = 0 the sign of c changes nothing")
    if (g**2 + f**2 + c).is_nonpositive:
        raise ValueError("g^2 + f^2 + c is not positive")
    return _answer(p, -g, -f, g**2 + f**2 + c)


def m5(v, p):
    """Mixes up r and r^2: stops at g^2 + f^2 - c (or g^2 - c) without the square root, or puts r
    on the right of (x - h)^2 + (y - k)^2 = r^2."""
    g, f, c = _gfc(v, p)
    if p["kind"] == "conc":
        return _circle(-g, -f, v["r"])
    if p.get("ask") == "centre":
        raise ValueError("no radius in this answer")
    if p.get("ask") == "xint":
        return 2 * (g**2 - c)
    return _answer(p, -g, -f, g**2 + f**2 - c, root=False)


def m6(v, p):
    """Takes the chord cut on an axis to be a diameter, 2r."""
    if p.get("ask") != "xint":
        raise ValueError("only for an intercept")
    g, f, c = _gfc(v, p)
    return 2 * sqrt(g**2 + f**2 - c)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
