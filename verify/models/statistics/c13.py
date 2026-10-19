"""C13 Working with two regression lines: answer models (the key, and one per misconception).

A line px + qy + s = 0 is given as the tuple (p, q, s). p["ask"] picks the question type:
  r      two lines v["l1"], v["l2"] -> the correlation coefficient r
  comb   two lines and weights v["wxy"], v["wyx"] -> wxy * b_xy + wyx * b_yx
  mr     two lines -> Tuple(x-bar, y-bar, r)
  x      two lines and a value v["y0"] of y -> the estimate of x
  rb     two regression coefficients v["b1"], v["b2"] -> r
  bxy    v["byx"] and v["r"] -> b_xy
"""
from sympy import S, Tuple, sign, sqrt


def _ask(p):
    return p.get("ask", "r")


def _line(t):
    return [S(c) for c in t]


def _as_y_on_x(l):
    """Coefficient of x when px + qy + s = 0 is solved for y."""
    p, q, _ = l
    return -p / q


def _as_x_on_y(l):
    """Coefficient of y when px + qy + s = 0 is solved for x."""
    p, q, _ = l
    return -q / p


def _pairings(v):
    """Both ways of labelling the lines: (b_yx, b_xy, y-on-x line, x-on-y line)."""
    l1, l2 = _line(v["l1"]), _line(v["l2"])
    return [
        (_as_y_on_x(l1), _as_x_on_y(l2), l1, l2),
        (_as_y_on_x(l2), _as_x_on_y(l1), l2, l1),
    ]


def _right(v):
    """The labelling that gives a real r: b_yx b_xy = r^2 must lie in [0, 1] (definition of r)."""
    ok = [pr for pr in _pairings(v) if 0 <= pr[0] * pr[1] <= 1]
    assert len(ok) == 1, "exactly one labelling must give r^2 in [0, 1]"
    return ok[0]


def _wrong(v):
    a, b = _pairings(v)
    return b if a == _right(v) else a


def _means(v):
    """Where the two lines meet (Cramer's rule)."""
    (p1, q1, s1), (p2, q2, s2) = _line(v["l1"]), _line(v["l2"])
    d = p1 * q2 - p2 * q1
    return (q1 * s2 - q2 * s1) / d, (p2 * s1 - p1 * s2) / d


def _r(byx, bxy):
    return sign(byx) * sqrt(byx * bxy)


def _x_from(line, y0):
    """Solve px + qy + s = 0 for x at y = y0."""
    p, q, s = line
    return -(q * S(y0) + s) / p


def key(v, p):
    a = _ask(p)
    if a in ("r", "comb", "mr", "x"):
        byx, bxy, ylin, xlin = _right(v)
        if a == "r":
            return _r(byx, bxy)
        if a == "comb":
            return S(v["wxy"]) * bxy + S(v["wyx"]) * byx
        if a == "mr":
            return Tuple(*_means(v), _r(byx, bxy))
        return _x_from(xlin, v["y0"])
    if a == "rb":
        b1, b2 = S(v["b1"]), S(v["b2"])
        assert b1 * b2 >= 0
        return _r(b1, b2)
    if a == "bxy":
        return S(v["r"]) ** 2 / S(v["byx"])
    raise ValueError(a)


def m1(v, p):
    """Labels the lines the wrong way round (no b_yx b_xy <= 1 check)."""
    a = _ask(p)
    if a not in ("r", "comb", "mr", "x"):
        raise ValueError("needs two given lines")
    byx, bxy, ylin, xlin = _wrong(v)
    if a == "r":
        return _r(byx, bxy)
    if a == "comb":
        return S(v["wxy"]) * bxy + S(v["wyx"]) * byx
    if a == "mr":
        return Tuple(*_means(v), _r(byx, bxy))
    return _x_from(xlin, v["y0"])


def m2(v, p):
    """Takes the x-on-y line's slope on the graph (dy/dx = 1/b_xy) as b_xy."""
    a = _ask(p)
    if a not in ("r", "comb", "x"):
        raise ValueError("needs two given lines")
    byx, bxy, ylin, xlin = _right(v)
    fake = 1 / bxy
    if a == "r":
        return _r(byx, fake)
    if a == "comb":
        return S(v["wxy"]) * fake + S(v["wyx"]) * byx
    if a == "x":
        xb, yb = _means(v)
        return xb + fake * (S(v["y0"]) - yb)
    raise ValueError(a)


def m3(v, p):
    """Believes b_yx b_xy = r (forgets that the product is r^2)."""
    a = _ask(p)
    if a in ("r", "mr"):
        byx, bxy, _, _ = _right(v)
        r = byx * bxy
        return r if a == "r" else Tuple(*_means(v), r)
    if a == "rb":
        return S(v["b1"]) * S(v["b2"])
    if a == "bxy":
        return S(v["r"]) / S(v["byx"])
    raise ValueError(a)


def m4(v, p):
    """The wrong sign: drops the minus on solving px + qy + s = 0, or ignores the coefficients' sign."""
    a = _ask(p)
    if a == "mr":
        xb, yb, r = key(v, p)
        return Tuple(xb, yb, -r)
    return -key(v, p)


def m5(v, p):
    """Swaps x-bar and y-bar after solving the two lines together."""
    a = _ask(p)
    if a not in ("mr", "x"):
        raise ValueError("needs the means")
    xb, yb = _means(v)
    if a == "mr":
        byx, bxy, _, _ = _right(v)
        return Tuple(yb, xb, _r(byx, bxy))
    if a == "x":
        _, bxy, _, _ = _right(v)
        return yb + bxy * (S(v["y0"]) - xb)
    raise ValueError(a)


def m6(v, p):
    """Takes r as the arithmetic mean of the two regression coefficients."""
    a = _ask(p)
    if a == "rb":
        return (S(v["b1"]) + S(v["b2"])) / 2
    if a == "bxy":
        return 2 * S(v["r"]) - S(v["byx"])
    raise ValueError(a)


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4, "C13-M5": m5, "C13-M6": m6}
