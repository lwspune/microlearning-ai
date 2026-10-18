"""C02 Area between a curve and the Y-axis: answer models (the key, and one per misconception).

Inputs:
- g: the curve solved for x on the region's branch, x = g(y) (an expression in y);
- f: the same branch solved for y, y = f(x) (an expression in x), used by the x-based mistakes;
- c, d: the lines y = c and y = d, with c < d.
The region lies between x = g(y), the Y-axis (x = 0) and y = c, y = d.
The key splits [c, d] where g changes sign and adds the size of each piece (the definition of
area: every horizontal strip has positive length |g(y)|). Each mistake applies one wrong rule.
"""
from sympy import Abs, Interval, Symbol, integrate, nsimplify, solveset

X = Symbol("x", real=True)
Y = Symbol("y", real=True)


def _real(e):
    """The input with its x and y as the real symbols."""
    return e.subs({s: X if s.name == "x" else Y for s in e.free_symbols if s.name in ("x", "y")})


def _parts(v):
    return _real(v["g"]), _real(v["f"]), v["c"], v["d"]


def _area_dy(g, lo, hi):
    """The size of the area between x = g(y) and the Y-axis for lo <= y <= hi."""
    cuts = sorted(r for r in solveset(g, Y, Interval.open(lo, hi)))
    ends = [lo, *cuts, hi]
    return sum(Abs(integrate(g, (Y, a, b))) for a, b in zip(ends, ends[1:]))


def key(v, p):
    g, _, c, d = _parts(v)
    return nsimplify(_area_dy(g, c, d))


def m1(v, p):
    """Strips down to the X-axis: the area under y = f(x) between the x-values where the curve meets y = c and y = d."""
    g, f, c, d = _parts(v)
    a, b = sorted([g.subs(Y, c), g.subs(Y, d)])
    cuts = sorted(r for r in solveset(f, X, Interval.open(a, b)))
    ends = [a, *cuts, b]
    return nsimplify(sum(Abs(integrate(f, (X, s, t))) for s, t in zip(ends, ends[1:])))


def m2(v, p):
    """Keeps the y-limits but integrates y = f(x) with respect to x."""
    _, f, c, d = _parts(v)
    return integrate(f, (X, c, d))


def m3(v, p):
    """Takes the signed integral of x dy as the area (a part left of the Y-axis counts negative)."""
    g, _, c, d = _parts(v)
    return integrate(g, (Y, c, d))


def m4(v, p):
    """Starts the region at y = 0 instead of at the line y = c."""
    g, _, c, d = _parts(v)
    if c == 0:
        raise ValueError("c = 0: the same as the key")
    return nsimplify(_area_dy(g, 0, d))


def m5(v, p):
    """Doubles the area for symmetry when only one side of the curve bounds the region."""
    g, _, c, d = _parts(v)
    return 2 * nsimplify(_area_dy(g, c, d))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
