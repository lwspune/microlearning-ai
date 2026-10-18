"""C03 Areas of circles, ellipses and parabolas: answer models (the key, and one per misconception).

Inputs (sympy strings), by params["shape"]:
- "circle": r, the radius of x^2 + y^2 = r^2;
- "ellipse": a, b, the semi-axes of x^2/a^2 + y^2/b^2 = 1 (numbers, or the letters a and b);
- "parabola": k, the coefficient of y^2 = kx; the region is cut off by its latus rectum x = k/4
  (params["bound"] = "latus").
params["part"]: "whole" (the whole figure, or the region between the parabola and its latus rectum)
or "piece" (the first-quadrant quarter of a circle or ellipse; the half of the parabola's region
above the X-axis).
The key adds full vertical strips over the region's whole width (strip length = top minus bottom),
with no symmetry argument, and is cross-checked numerically.
"""
import mpmath
from sympy import Integer, N, Symbol, integrate, lambdify, pi, sqrt

X = Symbol("x", real=True)


def _pos(e):
    """Letters as positive symbols, so the integrals come out without cases."""
    return e.subs({s: Symbol(s.name, positive=True) for s in e.free_symbols})


def _plain(e):
    """Back to the verifier's plain letters."""
    return e.subs({s: Symbol(s.name) for s in e.free_symbols})


def _numeric_check(exact, f, lo, hi, sample):
    """Compare the exact area with a quadrature of the strip length f over [lo, hi]."""
    g = lambdify(X, f.subs(sample), "mpmath")
    num = mpmath.quad(g, [float(N(lo.subs(sample))), float(N(hi.subs(sample)))])
    assert abs(float(N(exact.subs(sample))) - float(num)) < 1e-8, (exact, num)


def _conic_area(a, b, part):
    """Circle or ellipse with semi-axes a, b: integrate the strip length."""
    a, b = _pos(a), _pos(b)
    top = b * sqrt(1 - X**2 / a**2)
    if part == "whole":
        strip, lo, hi = 2 * top, -a, a          # from y = -top to y = top, across the whole width
    else:
        strip, lo, hi = top, Integer(0), a      # first quadrant: from y = 0 to y = top
    exact = integrate(strip, (X, lo, hi)).simplify()
    sample = {s: v for s, v in zip(sorted(exact.free_symbols, key=str), (5, 3))}
    _numeric_check(exact, strip, lo, hi, sample)
    return _plain(exact)


def _parabola_area(top, c, part):
    """Region of y^2 <= kx with 0 <= x <= c, given its upper boundary y = top(x)."""
    strip = 2 * top if part == "whole" else top
    exact = integrate(strip, (X, 0, c)).simplify()
    _numeric_check(exact, strip, Integer(0), c, {})
    return exact


def _axes(v, p):
    if p["shape"] == "circle":
        return v["r"], v["r"]
    return v["a"], v["b"]


def _area(v, p, part):
    if p["shape"] in ("circle", "ellipse"):
        a, b = _axes(v, p)
        return _conic_area(a, b, part)
    k = v["k"]
    return _parabola_area(sqrt(k * X), k / 4, part)


def key(v, p):
    return _area(v, p, p["part"])


def m1(v, p):
    """Gives the area of one piece (the first-quadrant integral) as the whole figure's area."""
    if p["part"] != "whole":
        raise ValueError("the region asked is already one piece")
    return _area(v, p, "piece")


def m2(v, p):
    """Multiplies by the symmetry count even though the region asked is only one piece."""
    if p["part"] != "piece":
        raise ValueError("the whole figure is asked: multiplying is right")
    return _area(v, p, "whole")


def m3(v, p):
    """Takes the number printed in the equation as the length: r = 25 from x^2 + y^2 = 25,
    a = 25 from x^2/25, and the latus rectum of y^2 = 16x at x = 16."""
    if p["shape"] in ("circle", "ellipse"):
        a, b = _axes(v, p)
        if not (a.is_number and b.is_number):
            raise ValueError("the equation prints a^2 itself")
        return _conic_area(a**2, b**2, p["part"])
    k = v["k"]
    return _parabola_area(sqrt(k * X), k, p["part"])


def m4(v, p):
    """Treats the ellipse as a circle of radius a: pi a^2 (drops the factor b/a)."""
    if p["shape"] != "ellipse":
        raise ValueError("only an ellipse has b different from a")
    a = v["a"]
    return _conic_area(a, a, p["part"])


def m5(v, p):
    """Integrates the upper root from x = -a to x = a and stops: only the half above the X-axis."""
    if p["shape"] not in ("circle", "ellipse"):
        raise ValueError("the parabola's region does not run from -a to a")
    a, b = _axes(v, p)
    return (_conic_area(a, b, "whole") / 2).simplify()


def m6(v, p):
    """Solves y^2 = kx as y = k sqrt(x): the coefficient is not square-rooted."""
    if p["shape"] != "parabola":
        raise ValueError("only y^2 = kx has a coefficient under the root")
    k = v["k"]
    return _parabola_area(k * sqrt(X), k / 4, p["part"])


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
