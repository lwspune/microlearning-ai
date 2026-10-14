"""C05 Tangents to a parabola: answer models (the key, and one per misconception).

Inputs: the parabola y^2 = k*x as k (so 4a = k), and by p["ask"]:
  pt     -> the tangent at the point (x1, y1) on it                      (line: a polynomial in x, y)
  t      -> the tangent at the parametric point t, i.e. (at^2, 2at)      (line)
  slope  -> the tangent parallel to the line lp*x + lq*y + lr = 0         (line)
  c      -> the number K for which lp*x + lq*y + K = 0 touches it         (value)
  from   -> both tangents from the outside point (h, j)                   (the pair: product of the two lines)
Each line or pair is a polynomial in x, y; the curve is that polynomial = 0.
"""
from sympy import Poly, discriminant, expand, simplify, solve, symbols

x, y = symbols("x y", real=True)
_s, _c = symbols("s c")


def _ask(p):
    return p.get("ask", "pt")


def _touches(a, s, c):
    """Discriminant of (s x + c)^2 = 4 a x in x: zero exactly when y = s x + c touches y^2 = 4ax."""
    return discriminant(Poly(expand((s * x + c) ** 2 - 4 * a * x), x), x)


def _line(s, c):
    return expand(y - s * x - c)


def _through(pt, s):
    return expand(y - pt[1] - s * (x - pt[0]))


def _slope_of(v, sign=1):
    if v["lq"] == 0:
        raise ValueError("a vertical line: no tangent of that slope")
    return sign * (-v["lp"] / v["lq"])


def _on(a, pt):
    return simplify(pt[1] ** 2 - 4 * a * pt[0]) == 0


def _contact(a, v):
    """The point of contact: (at^2, 2at) when a parameter t is given, else (x1, y1)."""
    return (a * v["t"] ** 2, 2 * a * v["t"]) if "t" in v else (v["x1"], v["y1"])


def key(v, p):
    # From the definition: a tangent meets the parabola in a repeated point (discriminant 0).
    a = v["k"] / 4
    ask = _ask(p)
    if ask in ("pt", "t"):
        x1, y1 = _contact(a, v)
        if not _on(a, (x1, y1)):
            raise ValueError("the point is not on the parabola")
        if y1 == 0:
            return expand(x)  # the tangent at the vertex
        s = solve(_touches(a, _s, y1 - _s * x1), _s)
        assert len(s) == 1, s
        return _through((x1, y1), s[0])
    if ask == "slope":
        m = _slope_of(v)
        return _line(m, solve(_touches(a, m, _c), _c)[0])
    if ask == "c":
        m = _slope_of(v)
        c = solve(_touches(a, m, _c), _c)[0]
        return -v["lq"] * c  # lp x + lq y + K = 0 is y = m x - K/lq
    if ask == "from":
        h, j = v["h"], v["j"]
        if j**2 - 4 * a * h <= 0:
            raise ValueError("the point is not outside the parabola")
        ss = solve(_touches(a, _s, j - _s * h), _s)
        if len(ss) != 2 or not all(s.is_real for s in ss):
            raise ValueError("no two real tangents")
        return expand(_through((h, j), ss[0]) * _through((h, j), ss[1]))
    raise ValueError(ask)


def _point_rule(a, x1, y1, coef):
    """y y1 = coef * (x + x1): the point rule with 2a replaced by coef."""
    return expand(y * y1 - coef * (x + x1))


def m1(v, p):
    """Replaces x by x + x1 without halving: yy1 = 4a(x + x1)."""
    if _ask(p) not in ("pt", "t"):
        raise ValueError("only the point rule")
    a = v["k"] / 4
    x1, y1 = _contact(a, v)
    return _point_rule(a, x1, y1, 4 * a)


def m2(v, p):
    """Replaces only y^2: yy1 = 4ax, leaving 4ax as it is."""
    if _ask(p) not in ("pt", "t"):
        raise ValueError("only the point rule")
    a = v["k"] / 4
    x1, y1 = _contact(a, v)
    return expand(y * y1 - 4 * a * x)


def m3(v, p):
    """Reads a in y^2 = kx as k itself, not k/4; everything else right."""
    if _ask(p) in ("pt", "t"):
        a = v["k"]  # the wrong a; the point (at^2, 2at) is then worked out with it too
        x1, y1 = (a * v["t"] ** 2, 2 * a * v["t"]) if "t" in v else (v["x1"], v["y1"])
        return _point_rule(a, x1, y1, 2 * a)
    return key({**v, "k": 4 * v["k"]}, p)


def m4(v, p):
    """Takes the condition for y = mx + c to touch as c = am, not c = a/m."""
    a = v["k"] / 4
    ask = _ask(p)
    if ask == "slope":
        m = _slope_of(v)
        return _line(m, a * m)
    if ask == "c":
        return -v["lq"] * a * _slope_of(v)
    if ask == "from":
        # j = m h + a m has one root only: m = j / (h + a)
        h, j = v["h"], v["j"]
        if h + a == 0:
            raise ValueError("h + a = 0: no slope at all")
        return _through((h, j), j / (h + a))
    raise ValueError("c = am is used only for slope questions")


def m5(v, p):
    """Puts an outside point into the point rule yy1 = 2a(x + x1), as if it were on the parabola."""
    if _ask(p) != "from":
        raise ValueError("only for a point outside the parabola")
    a = v["k"] / 4
    return _point_rule(a, v["h"], v["j"], 2 * a)


def m6(v, p):
    """Reads the slope of lp x + lq y + lr = 0 as lp/lq (drops the minus sign)."""
    ask = _ask(p)
    if ask not in ("slope", "c"):
        raise ValueError("only when the slope comes from a line's equation")
    a = v["k"] / 4
    m = _slope_of(v, sign=-1)
    c = solve(_touches(a, m, _c), _c)[0]
    return _line(m, c) if ask == "slope" else -v["lq"] * c


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
