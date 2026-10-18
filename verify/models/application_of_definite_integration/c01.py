"""C01 Area between a curve and the X-axis: answer models (the key, and one per misconception).

Inputs: a, b, the lines x = a and x = b (a < b). Params: f, the curve y = f(x) (a sympy string in x).
The key is the area, the integral of |f| over [a, b]: f is split at every point where it meets the
X-axis inside (a, b) and each piece's integral is taken by size. It is cross-checked numerically
against a quadrature of |f|, so a missed crossing can't slip through.
"""
import mpmath
from sympy import Abs, Integer, Interval, N, S, integrate, lambdify, solveset, symbols, sympify

x = symbols("x", real=True)


def _f(p):
    return sympify(p["f"], locals={"x": x})


def _crossings(f, a, b):
    """Points of (a, b) where f meets the X-axis, in order."""
    roots = solveset(f, x, Interval.open(a, b))
    return sorted(roots, key=lambda r: float(N(r)))


def _pieces(f, a, b):
    """The signed integrals of f over the pieces between consecutive crossings."""
    cuts = [a, *_crossings(f, a, b), b]
    return [integrate(f, (x, lo, hi)) for lo, hi in zip(cuts, cuts[1:])]


def _signed(f, a, b):
    return integrate(f, (x, a, b))


def key(v, p):
    f, a, b = _f(p), v["a"], v["b"]
    area = sum((Abs(s) for s in _pieces(f, a, b)), Integer(0))
    g = lambdify(x, f, "mpmath")
    cuts = [float(N(c)) for c in [a, *_crossings(f, a, b), b]]
    num = mpmath.quad(lambda t: abs(g(t)), cuts)
    assert abs(float(N(area)) - float(num)) < 1e-9, (area, num)
    return area.simplify()


def m1(v, p):
    """Integrates straight from a to b and takes the signed result, negative or cancelled, as the area."""
    return _signed(_f(p), v["a"], v["b"]).simplify()


def m2(v, p):
    """Integrates straight from a to b, then takes the size of that one result."""
    return Abs(_signed(_f(p), v["a"], v["b"])).simplify()


def m3(v, p):
    """Counts only the parts above the X-axis; a part below is taken to have no area."""
    f, a, b = _f(p), v["a"], v["b"]
    return sum((s for s in _pieces(f, a, b) if s > 0), Integer(0)).simplify()


def m4(v, p):
    """Splits at x = 0 (the Y-axis) instead of where the curve meets the X-axis."""
    f, a, b = _f(p), v["a"], v["b"]
    if not (a < 0 < b):
        raise ValueError("x = 0 is not inside [a, b]")
    if S.Zero in _crossings(f, a, b):
        raise ValueError("the curve does cross at x = 0: this is the right split")
    return (Abs(_signed(f, a, 0)) + Abs(_signed(f, 0, b))).simplify()


def m5(v, p):
    """Stops the region at the first point where the curve meets the X-axis."""
    f, a, b = _f(p), v["a"], v["b"]
    cs = _crossings(f, a, b)
    if not cs:
        raise ValueError("the curve doesn't cross the X-axis inside (a, b)")
    return Abs(_signed(f, a, cs[0])).simplify()


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
