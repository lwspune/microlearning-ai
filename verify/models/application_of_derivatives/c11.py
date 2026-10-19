"""C11 Angle between two curves: answer models (the key, and one per misconception).

Inputs: F1, F2, the two curves as F(x, y) = 0 (y = f(x) is given as y - f(x); the X-axis is F = y,
the Y-axis F = x). For an angle at a known common point, also x1, y1.
Params: ask = "tan" (the value of tan(theta) for the acute angle), "angle" (the acute angle),
or "orthogonal" (the value of the parameter k in F1 or F2 that makes the curves cut at right angles;
F1 or F2 then contains the plain symbol k).

The key never uses the slope formula: it takes each curve's tangent direction u = (F_y, -F_x)
(the linear part of F at the point), and the acute angle between the directions from
tan(theta) = |u x v| / |u . v| (theta = pi/2 when u . v = 0). Right angles: u . v = 0.
So it also covers vertical tangents and the axes. Each wrong answer applies its wrong rule.
"""
from sympy import Abs, Poly, PolynomialError, Symbol, atan, diff, pi, simplify, solve

X, Y = Symbol("x", real=True), Symbol("y", real=True)
K = Symbol("k")


def _real(e):
    """The expression with any plain x, y (as draft_items parses them) made the real x, y."""
    return e.subs({s: X if s.name == "x" else Y for s in e.free_symbols if s.name in ("x", "y")})


def _ask(p, *allowed):
    a = p.get("ask")
    if a not in ("tan", "angle", "orthogonal"):
        raise ValueError('params.ask must be "tan", "angle" or "orthogonal"')
    if a not in allowed:
        raise ValueError(f"not for {a} items")
    return a


def _curves(v):
    return _real(v["F1"]), _real(v["F2"])


def _grad(F, at):
    return simplify(diff(F, X).subs(at)), simplify(diff(F, Y).subs(at))


def _point(v):
    F1, F2 = _curves(v)
    at = {X: v["x1"], Y: v["y1"]}
    for F in (F1, F2):
        if simplify(F.subs(at)) != 0:
            raise ValueError("the point is not on both curves")
        if _grad(F, at) == (0, 0):
            raise ValueError("singular point")
    return F1, F2, at


def _dir(F, at):
    fx, fy = _grad(F, at)
    return fy, -fx


def _angle_from_dirs(u, w, ask):
    """The acute angle between directions u and w, as tan or as the angle."""
    dot = simplify(u[0] * w[0] + u[1] * w[1])
    cross = simplify(u[0] * w[1] - u[1] * w[0])
    if dot == 0:
        if ask == "tan":
            raise ValueError("right angle: tan is undefined")
        return pi / 2
    tn = simplify(Abs(cross) / Abs(dot))
    return tn if ask == "tan" else atan(tn)


def _slope(F, at):
    fx, fy = _grad(F, at)
    if fy == 0:
        raise ValueError("vertical tangent: no slope")
    return simplify(-fx / fy)


def _is_x_of_y(F):
    """True when F = 0 is a curve x = g(y): F is linear in x with a constant x-coefficient."""
    try:
        p = Poly(F, X)
    except PolynomialError:
        return False
    return p.degree() == 1 and p.coeffs()[0].is_number


def _param_solutions(F1, F2, cond):
    """The real values of k for which the curves meet at a real point where cond holds."""
    ks = set()
    for s in solve([F1, F2, cond], [X, Y, K], dict=True):
        if not all(sym in s for sym in (X, Y, K)):
            continue
        xv, yv, kv = (simplify(s[sym]) for sym in (X, Y, K))
        if not all(val.is_real for val in (xv, yv, kv)):
            continue
        if any(_grad(F.subs(K, kv), {X: xv, Y: yv}) == (0, 0) for F in (F1, F2)):
            continue
        ks.add(kv)
    if len(ks) != 1:
        raise ValueError(f"expected one value of k, got {ks}")
    return ks.pop()


def _orth(v, cond_of_grads):
    """Solve for k: cond_of_grads(F1x, F1y, F2x, F2y) = 0 at a common point."""
    F1, F2 = _curves(v)
    g = [diff(F1, X), diff(F1, Y), diff(F2, X), diff(F2, Y)]
    return _param_solutions(F1, F2, cond_of_grads(*g))


def key(v, p):
    a = _ask(p, "tan", "angle", "orthogonal")
    if a == "orthogonal":
        # tangent directions (F_y, -F_x) perpendicular: F1y F2y + F1x F2x = 0
        return _orth(v, lambda ax, ay, bx, by: ax * bx + ay * by)
    F1, F2, at = _point(v)
    return _angle_from_dirs(_dir(F1, at), _dir(F2, at), a)


def m1(v, p):
    """Drops the modulus and reports the obtuse angle: tan(theta) = -T, theta = pi - (acute angle)."""
    a = _ask(p, "tan", "angle")
    F1, F2, at = _point(v)
    acute = _angle_from_dirs(_dir(F1, at), _dir(F2, at), "angle")
    if acute == pi / 2 or acute == 0:
        raise ValueError("no obtuse angle")
    tn = _angle_from_dirs(_dir(F1, at), _dir(F2, at), "tan")
    return -tn if a == "tan" else pi - acute


def m2(v, p):
    """Uses 1 - m1 m2 in the denominator: tan(theta) = |(m1 - m2)/(1 - m1 m2)|, so right angles when m1 m2 = 1."""
    a = _ask(p, "tan", "angle", "orthogonal")
    if a == "orthogonal":
        # m1 m2 = 1 with m = -F_x/F_y: F1x F2x = F1y F2y (slopes must exist)
        return _orth(v, lambda ax, ay, bx, by: ax * bx - ay * by)
    F1, F2, at = _point(v)
    s1, s2 = _slope(F1, at), _slope(F2, at)
    num, den = simplify(s1 - s2), simplify(1 - s1 * s2)
    if num == 0:
        raise ValueError("equal slopes: the rule gives the key")
    if den == 0:
        if a == "tan":
            raise ValueError("the rule gives no tan")
        return pi / 2
    tn = simplify(Abs(num / den))
    return tn if a == "tan" else atan(tn)


def m3(v, p):
    """Right angles: takes the condition as m1 + m2 = 0 (opposite slopes) instead of m1 m2 = -1."""
    _ask(p, "orthogonal")
    # -F1x/F1y - F2x/F2y = 0  <=>  F1x F2y + F2x F1y = 0
    return _orth(v, lambda ax, ay, bx, by: ax * by + bx * ay)


def m4(v, p):
    """For a curve given as x = g(y), takes g'(y) (that is, dx/dy) as the slope of its tangent."""
    a = _ask(p, "tan", "angle", "orthogonal")
    F1, F2 = _curves(v)
    flips = [_is_x_of_y(F) for F in (F1, F2)]
    if not any(flips) or all(flips):
        raise ValueError("needs exactly one curve x = g(y)")
    if a == "orthogonal":
        raise ValueError("on orthogonal items this rule gives the same k as C11-M3")
    F1, F2, at = _point(v)
    dirs = []
    for F, flip in zip((F1, F2), flips):
        fx, fy = _grad(F, at)
        dirs.append((fx, -fy) if flip else (fy, -fx))  # slope -F_y/F_x in place of -F_x/F_y
    return _angle_from_dirs(dirs[0], dirs[1], a)


def m5(v, p):
    """Uses one curve's normal in place of its tangent (or, for an axis, measures from the other axis):
    gets the complement, tan -> 1/T, and for right angles the condition m1 = m2."""
    a = _ask(p, "tan", "angle", "orthogonal")
    if a == "orthogonal":
        return _orth(v, lambda ax, ay, bx, by: ax * by - ay * bx)
    F1, F2, at = _point(v)
    u, w = _dir(F1, at), _dir(F2, at)
    normal = (-w[1], w[0])
    return _angle_from_dirs(u, normal, a)


def m6(v, p):
    """Stops at tan(theta): gives the value of tan(theta) as the angle itself."""
    _ask(p, "angle")
    F1, F2, at = _point(v)
    tn = _angle_from_dirs(_dir(F1, at), _dir(F2, at), "tan")
    return tn


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
