"""C09 Angle between two lines: answer models (the key, and one per misconception).

Lines: line i is given by its slope m<i>, or in general form by a<i>, b<i> (a x + b y + c = 0,
slope -a/b). Inputs are in the order the stem lists the lines.

params["ask"]:
  angle   inputs line 1, line 2: the acute angle between them, in degrees
  tan     inputs line 1, line 2: tan of the acute angle
  slopes  inputs line 1, t (the angle, in degrees): every slope of a line at that angle to line 1
  lines   inputs line 1, t, x0, y0: every line through (x0, y0) at that angle to line 1,
          as the product of their polynomials (the pair is that product = 0)
"""
from sympy import Abs, FiniteSet, Mul, atan, expand_trig, pi, simplify, solve, sqrt, symbols, tan

x, y = symbols("x y", real=True)
_m = symbols("m", real=True)


def _slope(v, i, misread=False):
    if f"m{i}" in v:
        if misread:
            raise ValueError("slope given directly, nothing to misread")
        return v[f"m{i}"]
    a, b = v[f"a{i}"], v[f"b{i}"]
    return a / b if misread else -a / b


def _deg(rad):
    return simplify(rad * 180 / pi)


def _acute_tan(m1, m2):
    """tan of the acute angle from the direction vectors (1, m1), (1, m2): cos = |d1.d2| / |d1||d2|."""
    c = Abs(1 + m1 * m2) / (sqrt(1 + m1**2) * sqrt(1 + m2**2))
    c = simplify(c)
    if c == 0:
        return None  # perpendicular
    return simplify(sqrt(1 - c**2) / c)


def _angle_from_tan(t):
    return 90 if t is None else _deg(atan(t))


def _lines(slopes, v):
    """The pair (or single line) through (x0, y0) with these slopes, as one polynomial."""
    return simplify(Mul(*[y - v["y0"] - s * (x - v["x0"]) for s in slopes]).expand())


def _answer(slopes, v, p):
    slopes = [simplify(s) for s in slopes]
    if p["ask"] == "slopes":
        return FiniteSet(*slopes)
    if p["ask"] == "lines":
        return _lines(slopes, v)
    raise ValueError("not a slope or line question")


def _rotated(m1, t):
    """Slopes of the lines at angle t (degrees) to a line of slope m1: rotate its inclination by +-t."""
    th = t * pi / 180
    return [simplify(expand_trig(tan(atan(m1) + s * th))) for s in (1, -1)]


def key(v, p):
    """From the definition: the angle between direction vectors, or the inclination rotated by the angle."""
    if p["ask"] in ("angle", "tan"):
        t = _acute_tan(_slope(v, 1), _slope(v, 2))
        if p["ask"] == "tan":
            if t is None:
                raise ValueError("perpendicular: tan undefined")
            return t
        return _angle_from_tan(t)
    return _answer(_rotated(_slope(v, 1), v["t"]), v, p)


def _solve_branches(f, rhs):
    """Every m with f(m) = rhs or f(m) = -rhs."""
    out = []
    for r in (rhs, -rhs):
        for s in solve(f(_m) - r, _m):
            if s not in out:
                out.append(s)
    return out


def m1(v, p):
    """No modulus: (m1 - m2)/(1 + m1 m2) taken as it stands. A negative value gives the obtuse
    angle; solving for a slope keeps only the + branch."""
    a = _slope(v, 1)
    if p["ask"] in ("angle", "tan"):
        u = simplify((a - _slope(v, 2)) / (1 + a * _slope(v, 2)))
        if u >= 0:
            raise ValueError("fraction not negative: same as the key")
        return u if p["ask"] == "tan" else _deg(pi + atan(u))
    t = tan(v["t"] * pi / 180)
    return _answer(solve((a - _m) / (1 + a * _m) - t, _m), v, p)


def m2(v, p):
    """Denominator 1 - m1 m2 in place of 1 + m1 m2."""
    a = _slope(v, 1)
    if p["ask"] in ("angle", "tan"):
        d = 1 - a * _slope(v, 2)
        if d == 0:
            if p["ask"] == "tan":
                raise ValueError("denominator 0")
            return 90
        u = Abs(simplify((a - _slope(v, 2)) / d))
        return u if p["ask"] == "tan" else _deg(atan(u))
    t = tan(v["t"] * pi / 180)
    return _answer(_solve_branches(lambda m: (a - m) / (1 - a * m), t), v, p)


def m3(v, p):
    """Slope of a x + b y + c = 0 read as a/b (sign lost); the formula then used correctly."""
    if p["ask"] in ("angle", "tan"):
        try:
            s1 = _slope(v, 1, misread=True)
        except ValueError:
            s1 = _slope(v, 1)
        try:
            s2 = _slope(v, 2, misread=True)
        except ValueError:
            s2 = _slope(v, 2)
        t = _acute_tan(s1, s2)
        out = t if p["ask"] == "tan" else _angle_from_tan(t)
        if simplify(out - key(v, p)) == 0:
            raise ValueError("misreading both slopes leaves the angle unchanged")
        return out
    return _answer(_rotated(_slope(v, 1, misread=True), v["t"]), v, p)


def m4(v, p):
    """tan and cot of the standard angles swapped: tan theta = 1/sqrt(3) read as 60 degrees."""
    if p["ask"] != "angle":
        raise ValueError("only for an angle answer")
    k = key(v, p)
    if k not in (30, 60):
        raise ValueError("not a 30/60 angle")
    return 90 - k


def m5(v, p):
    """No denominator: tan theta = |m1 - m2|, as if slopes subtracted like angles."""
    a = _slope(v, 1)
    if p["ask"] in ("angle", "tan"):
        u = Abs(simplify(a - _slope(v, 2)))
        return u if p["ask"] == "tan" else _deg(atan(u))
    t = tan(v["t"] * pi / 180)
    return _answer(_solve_branches(lambda m: a - m, t), v, p)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
