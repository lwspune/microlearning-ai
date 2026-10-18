"""C02 Tangents with a given slope: answer models (the key, and one per misconception).

Inputs: the curve F(x, y) = 0 as F (y - f(x) for y = f(x)), and a line a*x + b*y + c = 0 as a, b, c.
params["cond"]: par    -> the tangent is parallel to the line
                perp   -> the tangent is perpendicular to the line
                normpar -> the normal is parallel to the line
params["ask"]:  pts      -> every point of contact          (a FiniteSet of (x, y) Tuples)
                tangents -> every such tangent              (a locus: the product of the lines)
                area     -> the area of the triangle the one such tangent makes with the axes
"""
from sympy import FiniteSet, Rational, Symbol, Tuple, diff, expand, im, oo, simplify, solve, symbols, zoo

x, y = symbols("x y", real=True)


def _curve(v):
    """F with its x and y made the real symbols, whichever way the inputs were parsed."""
    F = v["F"]
    return F.xreplace({s: {"x": x, "y": y}[s.name] for s in F.free_symbols if s.name in ("x", "y")})


def _real(e):
    return e.is_real is not False and simplify(im(e)) == 0


def _points_where(F, eq):
    """Real points with F = 0 and eq = 0 (eq an expression in x, y)."""
    out = []
    for s in solve([F, eq], [x, y], dict=True):
        if x not in s or y not in s:
            continue
        px, py = simplify(s[x]), simplify(s[y])
        if _real(px) and _real(py) and simplify(F.subs({x: px, y: py})) == 0:
            out.append((px, py))
    return out


def _with_slope(F, m):
    """The slope method: points of F = 0 where dy/dx = -F_x / F_y equals m."""
    Fx, Fy = diff(F, x), diff(F, y)
    pts = _points_where(F, Fx + m * Fy)
    return [p for p in pts if simplify(Fy.subs({x: p[0], y: p[1]})) != 0]


def _line_slope(v):
    if v["b"] == 0:
        raise ValueError("a vertical line")
    return -v["a"] / v["b"]


def _tangent(pt, m):
    """The line through pt with slope m, as a polynomial (= 0)."""
    return expand(y - pt[1] - m * (x - pt[0]))


def _area(line):
    """Area of the triangle a line (= 0) makes with the axes."""
    xi = solve(line.subs(y, 0), x)
    yi = solve(line.subs(x, 0), y)
    if len(xi) != 1 or len(yi) != 1:
        raise ValueError("the line does not cut both axes once")
    return abs(xi[0] * yi[0]) / 2


def _answer(p, pts, lines):
    ask = p.get("ask", "pts")
    if not pts:
        raise ValueError("no real point of contact")
    if ask == "pts":
        return FiniteSet(*[Tuple(*q) for q in pts])
    if ask == "tangents":
        out = 1
        for l in lines:
            out *= l
        return expand(out)
    if ask == "area":
        if len(lines) != 1:
            raise ValueError("more than one tangent")
        return _area(lines[0])
    raise ValueError(f"unknown ask {ask}")


def _slope_answer(v, p, m, y_of=None):
    """Points where dy/dx = m (the y from y_of(x) when given), and the tangents of slope m there."""
    F = _curve(v)
    pts = _with_slope(F, m)
    if y_of is not None:
        pts = [(q[0], simplify(y_of(q[0]))) for q in pts]
    return _answer(p, pts, [_tangent(q, m) for q in pts])


def _wanted(v, p):
    """The slope the tangent needs (by the slope rules; the key doesn't use this)."""
    m = _line_slope(v)
    return m if p["cond"] == "par" else -1 / m


def key(v, p):
    # From the definition: the gradient (F_x, F_y) is normal to the tangent. The line's normal is (a, b),
    # so a tangent parallel to it runs along (b, -a); one perpendicular to it (or a normal parallel to it)
    # runs along (a, b). No slopes, no -1/m.
    F = _curve(v)
    a, b = v["a"], v["b"]
    d = (b, -a) if p["cond"] == "par" else (a, b)
    Fx, Fy = diff(F, x), diff(F, y)
    pts = _points_where(F, Fx * d[0] + Fy * d[1])
    lines = [expand(Fx.subs({x: q[0], y: q[1]}) * (x - q[0]) + Fy.subs({x: q[0], y: q[1]}) * (y - q[1])) for q in pts]
    return _answer(p, pts, lines)


def m1(v, p):
    # Copies the line's slope even when the tangent must be perpendicular (or the normal parallel).
    if p["cond"] == "par":
        raise ValueError("gives the key for a parallel tangent")
    return _slope_answer(v, p, _line_slope(v))


def m2(v, p):
    # Puts the slope into the curve's equation (y = m) instead of into dy/dx.
    F = _curve(v)
    m = _wanted(v, p)
    pts = [(px, m) for px in solve(F.subs(y, m), x) if _real(px)]
    pts = [(simplify(q[0]), q[1]) for q in pts]
    return _answer(p, pts, [_tangent(q, m) for q in pts])


def m3(v, p):
    # Perpendicular slope taken as 1/m, without the minus sign.
    if p["cond"] == "par":
        raise ValueError("no perpendicular here")
    return _slope_answer(v, p, 1 / _line_slope(v))


def m4(v, p):
    # Reads the slope of ax + by + c = 0 as -b/a (the coefficients swapped), then applies the right rule.
    if v["a"] == 0:
        raise ValueError("a horizontal line")
    s = -v["b"] / v["a"]
    return _slope_answer(v, p, s if p["cond"] == "par" else -1 / s)


def m5(v, p):
    # Right x, but the y of the point from the given line, as if the point of contact lay on it.
    a, b, c = v["a"], v["b"], v["c"]
    return _slope_answer(v, p, _wanted(v, p), y_of=lambda px: -(a * px + c) / b)


def m6(v, p):
    # Area of the triangle as the product of the intercepts: the 1/2 left out.
    if p.get("ask") != "area":
        raise ValueError("only for an area")
    return 2 * key(v, p)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
