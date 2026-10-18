"""C11 Second derivative of parametric and implicit functions: answer models (the key, and one per misconception).

params["form"] says what the item gives:
  par   x = X(t), y = Y(t)     inputs: X, Y (expressions in one parameter, t or theta, a plain
                               symbol as the verifier parses it); at, the parameter value
  imp   F(x, y) = 0            inputs: F (an expression in x and y); x0, y0, a point on the curve
Every item asks for the value of d^2y/dx^2 at the given parameter value or point.

The key comes from the definition, not the method being taught:
  par   the limit, as h -> 0, of the second divided difference of y in x through the curve's
        points at the parameter values at - h, at, at + h (sympy's limit);
  imp   sympy's idiff (implicit differentiation of F = 0 twice), at the point.
Each key is also checked numerically: a finite difference along the curve (par), or y solved
from F = 0 near the point with nsolve (imp), with a = 2 and b = 3 put in for letters.
"""
from sympy import Rational, Symbol, diff, idiff, limit, nan, nsolve, oo, simplify, zoo

_NUM = {"a": 2, "b": 3}  # stand-in values for letter constants in the numeric checks


def _par(v):
    names = {s.name: s for s in (v["X"].free_symbols | v["Y"].free_symbols)}
    for n in ("t", "theta"):
        if n in names:
            return names[n]
    raise ValueError("no parameter t or theta")


def _xy(F):
    names = {s.name: s for s in F.free_symbols}
    if "x" not in names or "y" not in names:
        raise ValueError("F needs x and y")
    return names["x"], names["y"]


def _done(e):
    e = simplify(e)
    if e.has(oo, -oo, zoo, nan):
        raise ValueError("undefined at the given point")
    return e


def _nums(e):
    return e.subs({s: _NUM[s.name] for s in e.free_symbols if s.name in _NUM})


# ---------- parametric ----------

def _rates(v):
    """(X', Y', X'', Y'') at the parameter value."""
    t, a = _par(v), v["at"]
    X, Y = v["X"], v["Y"]
    d = [diff(X, t), diff(Y, t), diff(X, t, 2), diff(Y, t, 2)]
    return [simplify(e.subs(t, a)) for e in d]


def _par_key(v):
    t, a = _par(v), v["at"]
    X, Y = v["X"], v["Y"]
    h = Symbol("h", positive=True)
    xm, x0, xp = (X.subs(t, a + k) for k in (-h, 0, h))
    ym, y0, yp = (Y.subs(t, a + k) for k in (-h, 0, h))
    second = 2 * ((yp - y0) / (xp - x0) - (y0 - ym) / (x0 - xm)) / (xp - xm)
    k = _done(limit(second, h, 0))
    # numeric cross-check: a small-step divided difference along the curve
    hh = Rational(1, 10**5)
    num = _nums(second.subs(h, hh)).evalf(30)
    kn = _nums(k).evalf(30)
    assert abs(num - kn) < 1e-3 * max(1, abs(kn)), f"key {kn} vs finite difference {num}"
    return k


# ---------- implicit ----------

def _imp_point(v):
    F = v["F"]
    x, y = _xy(F)
    x0, y0 = v["x0"], v["y0"]
    if simplify(F.subs({x: x0, y: y0})) != 0:
        raise ValueError("the point is not on the curve")
    return F, x, y, x0, y0


def _partials(v):
    """(p, Fx, Fy, Fxx, Fxy) at the point, p = dy/dx = -Fx/Fy."""
    F, x, y, x0, y0 = _imp_point(v)
    at = {x: x0, y: y0}
    Fx, Fy = diff(F, x), diff(F, y)
    vals = [simplify(e.subs(at)) for e in (Fx, Fy, diff(F, x, 2), diff(F, x, y))]
    if vals[1] == 0:
        raise ValueError("F_y is 0 at the point")
    return (-vals[0] / vals[1], *vals)


def _imp_key(v):
    F, x, y, x0, y0 = _imp_point(v)
    k = _done(idiff(F, y, x, 2).subs({x: x0, y: y0}))
    # numeric cross-check: solve F = 0 for y at x0 - h, x0, x0 + h near y0
    hh = Rational(1, 10**4)
    ys = [nsolve(F.subs(x, x0 + s * hh), y, y0, prec=30) for s in (-1, 0, 1)]
    num = (ys[2] - 2 * ys[1] + ys[0]) / hh**2
    assert abs(num - k.evalf(30)) < 1e-3 * max(1, abs(k.evalf())), f"key {k} vs nsolve {num}"
    return k


def _first(v, p):
    if p["form"] == "par":
        x1, y1, _, _ = _rates(v)
        if x1 == 0:
            raise ValueError("dx/dt is 0")
        return y1 / x1
    return _partials(v)[0]


def key(v, p):
    return _par_key(v) if p["form"] == "par" else _imp_key(v)


def m1(v, p):
    """Divides the second derivatives: d^2y/dx^2 = (d^2y/dt^2)/(d^2x/dt^2)."""
    if p["form"] != "par":
        raise ValueError("parametric only")
    _, _, x2, y2 = _rates(v)
    if x2 == 0:
        raise ValueError("d^2x/dt^2 is 0")
    return _done(y2 / x2)


def m2(v, p):
    """Stops at d/dt(dy/dx): differentiates the slope in t and never divides by dx/dt."""
    if p["form"] != "par":
        raise ValueError("parametric only")
    t, a = _par(v), v["at"]
    return _done(diff(diff(v["Y"], t) / diff(v["X"], t), t).subs(t, a))


def m3(v, p):
    """Uses dt/dx twice as if it were constant: d^2y/dx^2 = (d^2y/dt^2)/(dx/dt)^2."""
    if p["form"] != "par":
        raise ValueError("parametric only")
    x1, _, _, y2 = _rates(v)
    return _done(y2 / x1**2)


def m4(v, p):
    """Reads d^2y/dx^2 as (dy/dx)^2."""
    return _done(_first(v, p) ** 2)


def m5(v, p):
    """Implicit: treats y as a constant the second time, d/dx(-F_x/F_y) with y held fixed."""
    if p["form"] != "imp":
        raise ValueError("implicit only")
    pp, Fx, Fy, Fxx, Fxy = _partials(v)
    return _done(-(Fxx + pp * Fxy) / Fy)


def m6(v, p):
    """Takes the quotient rule's numerator the wrong way round, u v' - v u': the key's sign flips."""
    return _done(-key(v, p))


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
