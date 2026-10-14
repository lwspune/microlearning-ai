"""C06 The ellipse x^2/a^2 + y^2/b^2 = 1: answer models (the key, and one per misconception).

Inputs A, B, D, E, F: the ellipse A x^2 + B y^2 + D x + E y + F = 0 (A, B > 0; D, E, F default to 0).
p["ask"] picks what the item asks for:
  foci   -> FiniteSet of the two foci (Tuples)
  dfoci  -> the distance between the foci
  ddir   -> the distance between the directrices
  dir    -> the pair of directrices, as one polynomial in x, y (product of the two lines)
  major  -> the line along the major axis, as a polynomial in x, y
  e      -> the eccentricity
"""
from sympy import FiniteSet, S, Tuple, diff, expand, solve, sqrt, symbols

x, y = symbols("x y", real=True)


def _shape(v):
    """Centre (h, k), the axis the major axis runs along, and the semi-axes squared (major, minor),
    by completing the squares (the point where the expression has zero slope in x and y)."""
    A, B = v["A"], v["B"]
    D, E, F = v.get("D", S(0)), v.get("E", S(0)), v.get("F", S(0))
    P = A * x**2 + B * y**2 + D * x + E * y + F
    sol = solve([diff(P, x), diff(P, y)], [x, y], dict=True)[0]
    h, k = sol[x], sol[y]
    R = -P.subs({x: h, y: k})
    X2, Y2 = R / A, R / B
    if not (X2.is_positive and Y2.is_positive):
        raise ValueError("not a real ellipse")
    if X2 == Y2:
        raise ValueError("a circle, not an ellipse")
    axis = "x" if X2 > Y2 else "y"
    big, small = (X2, Y2) if axis == "x" else (Y2, X2)
    return h, k, axis, big, small


def _focus_directrix(big, small):
    """From the definition SP = e PM: the focus S(c, 0) and directrix x = d (relative to the centre)
    for which (x - c)^2 + y^2 - e^2 (x - d)^2 is a multiple of x^2/big + y^2/small - 1."""
    c, d, e, lam = symbols("c d e lam", positive=True)
    X, Y = symbols("X Y")
    lhs = expand((X - c) ** 2 + Y**2 - e**2 * (X - d) ** 2)
    rhs = expand(lam * (X**2 / big + Y**2 / small - 1))
    eqs = [lhs.coeff(X, 2).coeff(Y, 0) - rhs.coeff(X, 2).coeff(Y, 0),
           lhs.coeff(Y, 2) - rhs.coeff(Y, 2),
           lhs.coeff(X, 1) - rhs.coeff(X, 1),
           lhs.subs({X: 0, Y: 0}) - rhs.subs({X: 0, Y: 0})]
    sol = solve(eqs, [c, d, e, lam], dict=True)
    sol = [s for s in sol if s[e] < 1]
    assert len(sol) == 1, sol
    return sol[0][c], sol[0][d], sol[0][e]


def _answer(p, h, k, axis, alpha, c, d, e):
    ask = p.get("ask", "foci")
    if ask == "foci":
        if axis == "x":
            return FiniteSet(Tuple(h + c, k), Tuple(h - c, k))
        return FiniteSet(Tuple(h, k + c), Tuple(h, k - c))
    if ask == "dfoci":
        return 2 * c
    if ask == "ddir":
        return 2 * d
    if ask == "dir":
        return expand((x - h) ** 2 - d**2) if axis == "x" else expand((y - k) ** 2 - d**2)
    if ask == "major":
        return y - k if axis == "x" else x - h
    if ask == "e":
        return e
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    h, k, axis, big, small = _shape(v)
    c, d, e = _focus_directrix(big, small)
    return _answer(p, h, k, axis, sqrt(big), c, d, e)


# ---------- misconceptions ----------

def _true(v):
    h, k, axis, big, small = _shape(v)
    alpha = sqrt(big)
    e = sqrt(1 - small / big)
    return h, k, axis, big, small, alpha, e


def m1(v, p):
    """Uses the hyperbola's relation b^2 = a^2(e^2 - 1): a^2 e^2 = a^2 + b^2, so e > 1."""
    h, k, axis, big, small, alpha, _ = _true(v)
    c = sqrt(big + small)
    e = c / alpha
    return _answer(p, h, k, axis, alpha, c, alpha / e, e)


def m2(v, p):
    """Always takes the major axis along the x-axis direction: puts the foci and directrices on the
    line through the centre parallel to the x-axis even when the y^2 denominator is the larger."""
    h, k, axis, big, small, alpha, e = _true(v)
    if axis == "x":
        raise ValueError("the major axis already runs along x")
    return _answer(p, h, k, "x", alpha, alpha * e, alpha / e, e)


def m3(v, p):
    """Mixes up ae and a/e: foci at distance a/e from the centre, directrices at distance ae."""
    h, k, axis, big, small, alpha, e = _true(v)
    if p.get("ask") in ("major", "e"):
        raise ValueError("neither ae nor a/e is in this answer")
    return _answer(p, h, k, axis, alpha, alpha / e, alpha * e, e)


def m4(v, p):
    """Forgets the square root: takes e^2 = 1 - b^2/a^2 as e."""
    h, k, axis, big, small, alpha, _ = _true(v)
    if p.get("ask") == "major":
        raise ValueError("e is not in this answer")
    e = 1 - small / big
    return _answer(p, h, k, axis, alpha, alpha * e, alpha / e, e)


def m5(v, p):
    """Reads the centre of (x - h)^2 and (y - k)^2 with the signs flipped: (-h, -k)."""
    h, k, axis, big, small, alpha, e = _true(v)
    if h == 0 and k == 0:
        raise ValueError("the centre is the origin")
    return _answer(p, -h, -k, axis, alpha, alpha * e, alpha / e, e)


def m6(v, p):
    """Uses the standard-position results ((+-ae, 0), x = 0, ...) without shifting them to the centre."""
    h, k, axis, big, small, alpha, e = _true(v)
    if h == 0 and k == 0:
        raise ValueError("the centre is the origin")
    return _answer(p, S(0), S(0), axis, alpha, alpha * e, alpha / e, e)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
