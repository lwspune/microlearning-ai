"""C14 Asymptotes and the director circle: answer models (the key, and one per misconception).

Inputs P, Q: the hyperbola x^2/P + y^2/Q = 1, with P and Q of opposite signs
(x^2/25 - y^2/16 = 1 is P = 25, Q = -16; y^2/25 - x^2/9 = 1 is P = -9, Q = 25).
p["ask"] picks what the item asks for:
  asym -> the pair of asymptotes, as one polynomial in x, y (the product of the two lines)
  dc   -> the locus where perpendicular tangents meet, a polynomial in x, y
  dcr  -> the radius of that circle
"""
from sympy import Abs, Poly, limit, oo, simplify, solve, sqrt, symbols

x, y = symbols("x y", real=True)


def _check(v):
    P, Q = v["P"], v["Q"]
    if not (P * Q).is_negative:
        raise ValueError("not a hyperbola")
    return P, Q


def _axes(v):
    """(x semi-axis, y semi-axis, transverse semi-axis, conjugate semi-axis, transverse along x?)."""
    P, Q = _check(v)
    ax, by = sqrt(Abs(P)), sqrt(Abs(Q))
    along_x = bool(P > 0)
    return ax, by, (ax if along_x else by), (by if along_x else ax), along_x


def _asym(m):
    """The pair y = +-m x as one polynomial."""
    return y**2 - m**2 * x**2


def _circle(r2):
    return x**2 + y**2 - r2


def _not_asked(p, *asks):
    if p.get("ask") not in asks:
        raise ValueError(f"this mistake is not about {p.get('ask')}")


def key(v, p):
    P, Q = _check(v)
    ask = p.get("ask")
    if ask == "asym":
        # Far out along the curve, y/x tends to the asymptotes' slope: y^2 = Q(1 - x^2/P).
        t = symbols("t", positive=True)
        m = sqrt(limit(Q * (1 - t**2 / P) / t**2, t, oo))
        return _asym(m)
    # Perpendicular tangents, from the definition: y = mx + c touches the curve when the
    # quadratic in x from substituting it has a double root; through (h, k), c = k - mh.
    m, c, h, k = symbols("m c h k")
    quad = Poly(((x**2 / P + (m * x + c) ** 2 / Q - 1) * P * Q).expand(), x)
    A2, A1, A0 = quad.all_coeffs()
    c2 = simplify(solve(A1**2 - 4 * A2 * A0, c)[0] ** 2)
    in_m = Poly(((k - m * h) ** 2 - c2).expand(), m)
    a2, _, a0 = in_m.all_coeffs()
    locus = (a0 + a2).subs({h: x, k: y})  # m1 m2 = a0/a2 = -1
    lead = Poly(locus, x, y).coeff_monomial(x**2)
    locus = (locus / lead).expand()
    if ask == "dc":
        return locus
    if ask == "dcr":
        r2 = -Poly(locus, x, y).coeff_monomial(1)
        if not r2.is_positive:
            raise ValueError("no real director circle")
        return sqrt(r2)
    raise ValueError(f"unknown ask {ask}")


# ---------- misconceptions ----------

def m1(v, p):
    """Writes the slope upside down: y = +-(a/b)x, the x^2 denominator's root over the y^2 one's."""
    _not_asked(p, "asym")
    ax, by, *_ = _axes(v)
    return _asym(ax / by)


def m2(v, p):
    """Forgets a square root: slope b^2/a^2 for the asymptotes, radius a^2 - b^2 for the director circle."""
    _not_asked(p, "asym", "dcr")
    ax, by, tr, co, _ = _axes(v)
    if p["ask"] == "asym":
        return _asym(by**2 / ax**2)
    return tr**2 - co**2


def m3(v, p):
    """Factorises the equation and keeps the 1: X/alpha - Y/beta = 1 and X/alpha + Y/beta = 1
    (X along the transverse axis), instead of setting the right side to 0."""
    _not_asked(p, "asym")
    ax, by, tr, co, along_x = _axes(v)
    X, Y = (x, y) if along_x else (y, x)
    return ((X / tr - 1) ** 2 - (Y / co) ** 2).expand()


def m4(v, p):
    """Uses the ellipse's director circle x^2 + y^2 = a^2 + b^2."""
    _not_asked(p, "dc", "dcr")
    ax, by, *_ = _axes(v)
    r2 = ax**2 + by**2
    return _circle(r2) if p["ask"] == "dc" else sqrt(r2)


def m5(v, p):
    """Takes the auxiliary circle (the circle on the transverse axis) as the director circle."""
    _not_asked(p, "dc", "dcr")
    _, _, tr, _, _ = _axes(v)
    return _circle(tr**2) if p["ask"] == "dc" else tr


def m6(v, p):
    """Uses x^2 + y^2 = a^2 - b^2 with a^2 always the x^2 denominator, even when the transverse
    axis is the y-axis (where the circle is x^2 + y^2 = b^2 - a^2)."""
    _not_asked(p, "dc", "dcr")
    ax, by, _, _, along_x = _axes(v)
    if along_x:
        raise ValueError("the transverse axis is the x-axis, so this gives the key")
    r2 = ax**2 - by**2
    if p["ask"] == "dc":
        return _circle(r2)
    if not r2.is_positive:
        raise ValueError("no real radius")
    return sqrt(r2)


MODELS = {"key": key, "C14-M1": m1, "C14-M2": m2, "C14-M3": m3, "C14-M4": m4, "C14-M5": m5, "C14-M6": m6}
