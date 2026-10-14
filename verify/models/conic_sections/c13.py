"""C13 Tangents to a hyperbola: answer models (the key, and one per misconception).

The hyperbola is A x^2 - B y^2 = C (A, B, C > 0), so a^2 = C/A and b^2 = C/B. A stem written in
standard form x^2/a^2 - y^2/b^2 = 1 has C = 1. p["type"] picks the question:
  "at":      the tangent at the point (x1, y1), or at the parametric angle theta; a locus.
  "slope":   the tangents with slope m, or parallel ("rel": "parallel") / perpendicular
             ("rel": "perpendicular") to the line L x + M y + N = 0 (inputs L, M); a locus,
             the two lines as one polynomial.
  "k":       the values of k for which L x + M y + s k = 0 touches; a FiniteSet (inputs L, M, s).
  "contact": the point where L x + M y + N = 0 touches; a Tuple (inputs L, M, N).
Line answers are polynomials in x, y (the line is that polynomial = 0).
"""
from sympy import FiniteSet, Poly, Tuple, cos, discriminant, expand, sec, simplify, sin, solve, sqrt, symbols, tan

x, y = symbols("x y", real=True)
_c, _k = symbols("c k", real=True)


def _ab(v, coeffs=False):
    """a^2 and b^2. coeffs=True: the misreading a^2 = A, b^2 = B (not divided by C)."""
    A, B, C = v["A"], v["B"], v["C"]
    if coeffs:
        if C == 1:
            raise ValueError("the stem is already in standard form")
        return A, B
    return C / A, C / B


def _on(v, px, py):
    return simplify(v["A"] * px**2 - v["B"] * py**2 - v["C"]) == 0


def _point(v, param="hyperbola"):
    """The point of contact for an "at" question."""
    a2, b2 = _ab(v)
    if "theta" in v:
        t = v["theta"]
        a, b = sqrt(a2), sqrt(b2)
        if param == "ellipse":
            return simplify(a * cos(t)), simplify(b * sin(t))
        px, py = simplify(a * sec(t)), simplify(b * tan(t))
    else:
        if param == "ellipse":
            raise ValueError("no parameter in the question")
        px, py = v["x1"], v["y1"]
    assert _on(v, px, py), "the point is not on the hyperbola"
    return px, py


def _slope(v, p):
    if "m" in v:
        return v["m"]
    line = -v["L"] / v["M"]
    return line if p["rel"] == "parallel" else -1 / line


def _pair(m, cs):
    out = 1
    for c in cs:
        out *= y - m * x - c
    return expand(out)


def _touching_c(v, m):
    """Every c for which y = m x + c meets the hyperbola in a double point (from the definition)."""
    A, B, C = v["A"], v["B"], v["C"]
    quad = expand(A * x**2 - B * (m * x + _c) ** 2 - C)
    if Poly(quad, x).degree() < 2:
        raise ValueError("slope of an asymptote")
    cs = solve(discriminant(quad, x), _c)
    if len(cs) != 2:
        raise ValueError("no tangent of this slope")
    return cs


def _cs(a2, b2, m, sign=-1):
    """The c's from c^2 = a^2 m^2 + sign * b^2 (sign -1: hyperbola, +1: ellipse)."""
    c2 = simplify(a2 * m**2 + sign * b2)
    if not c2.is_positive:
        raise ValueError("no real tangent")
    return [sqrt(c2), -sqrt(c2)]


def key(v, p):
    t = p["type"]
    if t == "at":
        # From the definition: the tangent is perpendicular to the gradient (2A x1, -2B y1).
        px, py = _point(v)
        return expand(v["A"] * px * (x - px) - v["B"] * py * (y - py))
    if t == "slope":
        m = _slope(v, p)
        return _pair(m, _touching_c(v, m))
    if t == "k":
        L, M, s = v["L"], v["M"], v["s"]
        quad = expand(v["A"] * x**2 - v["B"] * ((-L * x - s * _k) / M) ** 2 - v["C"])
        return FiniteSet(*solve(discriminant(quad, x), _k))
    if t == "contact":
        L, M, N = v["L"], v["M"], v["N"]
        roots = solve(expand(v["A"] * x**2 - v["B"] * ((-L * x - N) / M) ** 2 - v["C"]), x)
        assert len(roots) == 1, "the line is not a tangent"
        x0 = roots[0]
        return Tuple(x0, (-L * x0 - N) / M)
    raise ValueError(t)


def _formula(a2, b2, px, py, sign=-1):
    """x x1 / a^2 + sign * y y1 / b^2 = 1."""
    return expand(x * px / a2 + sign * y * py / b2 - 1)


def _contact(a2, b2, m, c, sign=-1):
    """The point of contact (-a^2 m / c, sign * b^2 / c)."""
    return Tuple(-a2 * m / c, sign * b2 / c)


def _line(v, divide=True):
    """m and c of L x + M y + N = 0; divide=False takes c = -N without dividing by M."""
    m = -v["L"] / v["M"]
    c = -v["N"] / v["M"] if divide else -v["N"]
    return m, c


def m1(v, p):
    """Treats the hyperbola like the ellipse: + for the b^2 term (xx1/a^2 + yy1/b^2 = 1, c^2 = a^2m^2 + b^2)."""
    a2, b2 = _ab(v)
    t = p["type"]
    if t == "at":
        return _formula(a2, b2, *_point(v), sign=1)
    if t == "slope":
        m = _slope(v, p)
        return _pair(m, _cs(a2, b2, m, sign=1))
    if t == "k":
        m = -v["L"] / v["M"]
        cs = _cs(a2, b2, m, sign=1)          # c = -s k / M
        return FiniteSet(*[-c * v["M"] / v["s"] for c in cs])
    if t == "contact":
        m, c = _line(v)
        return _contact(a2, b2, m, c, sign=1)
    raise ValueError(t)


def m2(v, p):
    """Reads a^2 and b^2 as the coefficients A and B of A x^2 - B y^2 = C, without dividing by C."""
    a2, b2 = _ab(v, coeffs=True)
    t = p["type"]
    if t == "at":
        return _formula(a2, b2, *_point(v))
    if t == "slope":
        m = _slope(v, p)
        return _pair(m, _cs(a2, b2, m))
    if t == "k":
        m = -v["L"] / v["M"]
        return FiniteSet(*[-c * v["M"] / v["s"] for c in _cs(a2, b2, m)])
    if t == "contact":
        m, c = _line(v)
        return _contact(a2, b2, m, c)
    raise ValueError(t)


def m3(v, p):
    """Uses the circle's rule: the tangent at P is perpendicular to OP, and touches at the foot of the perpendicular from O."""
    t = p["type"]
    if t == "at":
        px, py = _point(v)
        return expand(px * (x - px) + py * (y - py))
    if t == "contact":
        L, M, N = v["L"], v["M"], v["N"]
        d = -N / (L**2 + M**2)
        return Tuple(L * d, M * d)
    raise ValueError("no point of contact to place")


def m4(v, p):
    """Reads c from L x + M y + N = 0 as -N, without dividing by M."""
    a2, b2 = _ab(v)
    t = p["type"]
    if t == "k":
        if v["M"] == 1:
            raise ValueError("M = 1: nothing to divide by")
        m = -v["L"] / v["M"]
        return FiniteSet(*[-c / v["s"] for c in _cs(a2, b2, m)])   # c = -s k
    if t == "contact":
        if v["M"] == 1:
            raise ValueError("M = 1: nothing to divide by")
        m, c = _line(v, divide=False)
        return _contact(a2, b2, m, c)
    raise ValueError("no line to read c from")


def m5(v, p):
    """Takes only the positive square root, so finds one tangent (or one k) where there are two."""
    a2, b2 = _ab(v)
    t = p["type"]
    if t == "slope":
        m = _slope(v, p)
        return _pair(m, _cs(a2, b2, m)[:1])
    if t == "k":
        ks = key(v, p)
        return FiniteSet(max(ks))
    raise ValueError("no square root to take")


def m6(v, p):
    """Takes the point with parameter theta as (a cos theta, b sin theta), the ellipse's, then xx1/a^2 - yy1/b^2 = 1."""
    if p["type"] != "at":
        raise ValueError("no parameter in the question")
    a2, b2 = _ab(v)
    return _formula(a2, b2, *_point(v, param="ellipse"))


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4, "C13-M5": m5, "C13-M6": m6}
