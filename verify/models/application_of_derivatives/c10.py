"""C10 Greatest and least values in problems: answer models (the key, and one per misconception).

Every item is a word problem: a quantity Q to make greatest, written in one variable through a
constraint. Params: kind and ask.
  kind "window": a rectangle topped by a semicircle, perimeter P (input P). Variable r, the radius;
    h = (P - 2r - pi r)/2, A = 2rh + pi r^2/2, 0 < r < P/(2 + pi). ask "width" (2r) or "area".
  kind "cone": a right circular cone in a sphere of radius R (input R). Variable h, the cone's
    height; base radius rho with rho^2 = 2Rh - h^2, V = pi rho^2 h / 3, 0 < h < 2R.
    ask "height" or "volume".
  kind "card": an open box from an l by w card (inputs l, w), squares of side x cut from the
    corners. V = x(l - 2x)(w - 2x), 0 < x < min(l, w)/2. ask "cut" (x).
The key takes the critical points of Q inside the range and keeps the one with the largest Q,
then checks it against the definition: Q there is at least Q at 400 sampled points of the range.
"""
from sympy import Symbol, diff, pi, simplify, solve

X = Symbol("x", real=True)
VARIABLE = {"window": "radius", "cone": "height", "card": "cut"}


def _setup(v, p, variant=None):
    """(Q, lo, hi, asked): the quantity in X on the range (lo, hi), and the asked value at X = t."""
    kind, ask = p["kind"], p["ask"]
    if kind == "window":
        P = v["P"]
        extra = 2 * X if variant == "extra_side" else 0  # counts the inner diameter as edge
        h = (P - 2 * X - pi * X - extra) / 2
        Q = 2 * X * h + pi * X**2 / 2
        hi = solve(h, X)[0]
        asked = {"width": lambda t: 2 * t, "area": lambda t: Q.subs(X, t)}[ask]
        return Q, 0, hi, asked
    if kind == "cone":
        R = v["R"]
        rho2 = R**2 - X**2 if variant == "full_height" else 2 * R * X - X**2
        Q = pi * rho2 * X / 3
        hi = R if variant == "full_height" else 2 * R
        asked = {"height": lambda t: t, "volume": lambda t: Q.subs(X, t)}[ask]
        return Q, 0, hi, asked
    if kind == "card":
        l, w = v["l"], v["w"]
        Q = X * (l - 2 * X) * (w - 2 * X)
        asked = {"cut": lambda t: t}[ask]
        return Q, 0, min(l, w) / 2, asked
    raise ValueError(f"unknown kind {kind}")


def _inside(roots, lo, hi):
    return [r for r in roots if r.is_real and lo < r < hi]


def _best(Q, lo, hi):
    """The x in (lo, hi) where Q is greatest, among the critical points; checked by sampling."""
    crit = _inside(solve(diff(Q, X), X), lo, hi)
    if not crit:
        raise ValueError("no critical point in the range")
    best = max(crit, key=lambda r: float(Q.subs(X, r)))
    top = float(Q.subs(X, best))
    a, b = float(lo), float(hi)
    for k in range(1, 400):
        t = a + (b - a) * k / 400
        assert float(Q.subs(X, t)) <= top + 1e-9, f"Q({t}) beats the critical point {best}"
    return best


def key(v, p):
    Q, lo, hi, asked = _setup(v, p)
    return simplify(asked(_best(Q, lo, hi)))


def m1(v, p):
    """Stops at the critical point: gives the variable it solved for, not the quantity asked."""
    if VARIABLE[p["kind"]] == p["ask"]:
        raise ValueError("the ask is the variable itself")
    Q, lo, hi, _ = _setup(v, p)
    return simplify(_best(Q, lo, hi))


def m2(v, p):
    """Takes the other root of Q'(x) = 0, without checking the range or the sign of Q''."""
    Q, lo, hi, asked = _setup(v, p)
    best = _best(Q, lo, hi)
    other = [r for r in solve(diff(Q, X), X) if r.is_real and r > 0 and r != best]
    if len(other) != 1:
        raise ValueError("no single other positive root")
    return simplify(asked(other[0]))


def m3(v, p):
    """Counts the line where the semicircle meets the rectangle as part of the window's perimeter."""
    if p["kind"] != "window":
        raise ValueError("windows only")
    Q, lo, hi, asked = _setup(v, p, "extra_side")
    return simplify(asked(_best(Q, lo, hi)))


def m4(v, p):
    """For a cone in a sphere, uses rho^2 + h^2 = R^2: the whole height measured from the centre."""
    if p["kind"] != "cone":
        raise ValueError("cones in spheres only")
    Q, lo, hi, asked = _setup(v, p, "full_height")
    return simplify(asked(_best(Q, lo, hi)))


def m5(v, p):
    """Thinks Q keeps growing: takes the variable as large as the shape allows (the end of the range)."""
    Q, lo, hi, asked = _setup(v, p)
    out = simplify(asked(hi))
    if out == 0:
        raise ValueError("the quantity is zero at the end of the range")
    return out


def m6(v, p):
    """Solves Q''(x) = 0 instead of Q'(x) = 0."""
    Q, lo, hi, asked = _setup(v, p)
    roots = _inside(solve(diff(Q, X, 2), X), lo, hi)
    if len(roots) != 1:
        raise ValueError("Q'' has no single root in the range")
    return simplify(asked(roots[0]))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
