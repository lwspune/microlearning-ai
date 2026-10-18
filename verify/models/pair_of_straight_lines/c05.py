"""C05 Pairs perpendicular or at an angle to given lines: answer models (the key, and one per misconception).

Every answer is a pair of lines through the origin, returned as a homogeneous quadratic in x, y
(the locus where it is 0), compared up to a constant factor.

Inputs, by item type:
  perpendicular to a pair:  a, h, b       (the pair ax^2 + 2hxy + by^2 = 0; may be symbols)
  perpendicular to 2 lines: p1, q1, p2, q2 (the lines p1 x + q1 y = c1, p2 x + q2 y = c2)
  at an angle to a line:    p, q, alpha    (the line px + qy + r = 0; alpha in radians)
"""
from sympy import Poly, Symbol, cos, expand, gcd_list, ilcm, sin, simplify, tan

X, Y = Symbol("x", real=True), Symbol("y", real=True)


def _tidy(e):
    """Book form: integer coefficients with no common factor, positive x^2 term (when rational)."""
    p = Poly(expand(e), X, Y)
    cs = p.coeffs()
    if not all(c.is_Rational for c in cs):
        return p.as_expr()
    den = ilcm(*[c.q for c in cs])
    ints = [c * den for c in cs]
    g = gcd_list(ints)
    lead = p.coeff_monomial(X**2) or cs[0]
    sign = -1 if lead < 0 else 1
    return expand(p.as_expr() * den / g * sign)


def _given(v):
    """The given pair as a function Q(x, y), from (a, h, b) or from two lines."""
    if "a" in v:
        a, h, b = v["a"], v["h"], v["b"]
        return lambda x, y: a * x**2 + 2 * h * x * y + b * y**2
    if "p1" in v:
        p1, q1, p2, q2 = v["p1"], v["q1"], v["p2"], v["q2"]
        return lambda x, y: (p1 * x + q1 * y) * (p2 * x + q2 * y)
    raise ValueError("not a perpendicular-pair item")


def _line(v):
    """Direction (c, s) of the given line px + qy + r = 0, and tan(alpha)."""
    if "alpha" not in v:
        raise ValueError("not an angle item")
    return v["q"], -v["p"], v["alpha"]


def _slope(v):
    c, s, al = _line(v)
    if c == 0:
        raise ValueError("the given line is vertical: no slope")
    return s / c, tan(al)


def key(v, p):
    if "alpha" in v:
        # From the definition: turn the line's direction by +alpha and by -alpha, then multiply
        # the two lines through O (direction (dx, dy) gives dy*x - dx*y = 0).
        c, s, al = _line(v)
        out = 1
        for t in (al, -al):
            dx, dy = c * cos(t) - s * sin(t), c * sin(t) + s * cos(t)
            out *= dy * X - dx * Y
        return _tidy(simplify(expand(out)))
    # Perpendicular: turn the given lines through 90 degrees about O. A point (x, y) is on a
    # turned line exactly when (-y, x), the point turned by 90 degrees, is on a given line.
    q = _given(v)
    return _tidy(q(-Y, X))


def m1(v, p):
    """Perpendicular slope taken as 1/m (no minus sign): reflects in y = x, bx^2 + 2hxy + ay^2."""
    q = _given(v)
    return _tidy(q(Y, X))


def m2(v, p):
    """Perpendicular slope taken as -m: reflects in the X-axis, ax^2 - 2hxy + by^2."""
    q = _given(v)
    return _tidy(q(X, -Y))


def m3(v, p):
    """Keeps the given slopes: the given pair itself (lines through O parallel to the given ones)."""
    q = _given(v)
    return _tidy(q(X, Y))


def m4(v, p):
    """Measures alpha from the X-axis, ignoring the given line: slopes +-tan(alpha), y^2 = tan^2(alpha) x^2."""
    _, _, al = _line(v)
    return _tidy(tan(al) ** 2 * X**2 - Y**2)


def m5(v, p):
    """Adds +-tan(alpha) to the given slope: slopes m1 +- tan(alpha)."""
    m, t = _slope(v)
    return _tidy((Y - m * X) ** 2 - t**2 * X**2)


def m6(v, p):
    """1 - m m1 in the denominator of tan(alpha): (y - m1 x)^2 = tan^2(alpha) (x - m1 y)^2."""
    m, t = _slope(v)
    return _tidy((Y - m * X) ** 2 - t**2 * (X - m * Y) ** 2)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
