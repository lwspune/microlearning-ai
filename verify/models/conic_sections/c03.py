"""C03 The other three parabolas: answer models (the key, and one per misconception).

Two kinds of item.

A parabola is given (params ask = "focus" | "directrix" | "vertex"): params sq names the
squared variable ("x" or "y"), and inputs A, B, C, D are the coefficients of
    A u^2 + B u + C w + D = 0,
where u is the squared variable and w the other one. A focus or vertex is a Tuple (x, y);
a directrix is a polynomial in x, y (the line is that polynomial = 0).

A parabola is asked for (params ask = "equation"), vertex at the origin, with
  data = "point": the axis (params axis = "x" | "y") and a point (x1, y1) on it, or
  data = "focus_directrix": the focus (fx, fy) and the directrix (params axis = "y": the
  line y = d; axis = "x": the line x = d).
The answer is a polynomial in x, y (the parabola is that polynomial = 0).
"""
from sympy import Abs, Rational, Tuple, expand, simplify, solve, symbols

x, y = symbols("x y", real=True)


def _xy(sq, u, w):
    """Back from (squared variable, other variable) to (x, y)."""
    return (u, w) if sq == "x" else (w, u)


def _line(sq, along, c):
    """The line where the coordinate 'along' (u or w) equals c, in x, y."""
    var = {("x", "u"): x, ("x", "w"): y, ("y", "u"): y, ("y", "w"): x}[(sq, along)]
    return expand(var - c)


def _shape(v):
    """(h, k, p): (u - h)^2 = 4p (w - k), from A u^2 + B u + C w + D = 0."""
    A, B, C, D = v["A"], v["B"], v["C"], v["D"]
    if A == 0 or C == 0:
        raise ValueError("not a parabola")
    h = -B / (2 * A)
    p = -C / (4 * A)
    # A(u - h)^2 = A u^2 + B u + B^2/(4A), so A(u - h)^2 + C w + D - B^2/(4A) = 0.
    k = -(D - B**2 / (4 * A)) / C
    return simplify(h), simplify(k), simplify(p)


def _property(sq, ask, h, k, p, *, focus_along="w"):
    """Vertex (h, k), focus at distance p from it, directrix at distance p on the other side.
    focus_along="u" moves them along the squared variable instead (C03-M1)."""
    if ask == "vertex":
        return Tuple(*_xy(sq, h, k))
    if focus_along == "w":
        if ask == "focus":
            return Tuple(*_xy(sq, h, k + p))
        if ask == "directrix":
            return _line(sq, "w", k - p)
    else:
        if ask == "focus":
            return Tuple(*_xy(sq, h + p, k))
        if ask == "directrix":
            return _line(sq, "u", h - p)
    raise ValueError(f"unknown ask {ask!r}")


def _from_definition(focus, directrix):
    """SP^2 = PM^2: the parabola with this focus and directrix (a polynomial in x, y)."""
    fx, fy = focus
    return expand((x - fx) ** 2 + (y - fy) ** 2 - directrix**2)


def _equation(sq, p):
    """The parabola with vertex O whose squared variable is sq: u^2 = 4p w."""
    u, w = _xy(sq, x, y)
    return expand(u**2 - 4 * p * w)


def _p_from_data(v, prm, sq):
    """p for the vertex-at-origin parabola u^2 = 4p w (sq = the squared variable) from the data."""
    if prm["data"] == "point":
        u1, w1 = _xy(sq, v["x1"], v["y1"])
        if w1 == 0:
            raise ValueError("the point is on the tangent at the vertex")
        return u1**2 / (4 * w1)
    # focus and directrix: the vertex is midway, p is the focus's coordinate along the axis
    fx, fy = v["fx"], v["fy"]
    axis_coord = fy if prm["axis"] == "y" else fx
    return axis_coord


def key(v, prm):
    if prm["ask"] == "equation":
        if prm["data"] == "focus_directrix":
            # Straight from the definition: distance to the focus = distance to the directrix.
            d = v["d"]
            line = (y - d) if prm["axis"] == "y" else (x - d)
            return _from_definition((v["fx"], v["fy"]), line)
        # Vertex O, axis given: the axis variable is NOT squared. Solve for p so the point lies on it.
        sq = "x" if prm["axis"] == "y" else "y"
        p = symbols("p")
        u1, w1 = _xy(sq, v["x1"], v["y1"])
        (pv,) = solve(u1**2 - 4 * p * w1, p)
        return _equation(sq, pv)
    sq = prm["sq"]
    h, k, p = _shape(v)
    out = _property(sq, prm["ask"], h, k, p)
    # Self-check from the definition: every point of the curve is as far from S as from the directrix.
    S = _property(sq, "focus", h, k, p)
    L = _property(sq, "directrix", h, k, p)
    u, w = _xy(sq, x, y)
    curve = expand(v["A"] * u**2 + v["B"] * u + v["C"] * w + v["D"])
    lhs = _from_definition(S, L)
    ratio = simplify(lhs / curve)
    assert ratio.is_number and ratio != 0, "focus and directrix do not give this parabola"
    return out


def m1(v, prm):
    """The squared variable is taken as the axis: the focus moves along it, or the axis
    variable is the one squared when writing the equation."""
    if prm["ask"] == "equation":
        sq = prm["axis"]  # squares the variable along the axis
        return _equation(sq, _p_from_data(v, prm, sq))
    sq = prm["sq"]
    h, k, p = _shape(v)
    if prm["ask"] == "vertex":
        raise ValueError("the vertex does not depend on the axis")
    return _property(sq, prm["ask"], h, k, p, focus_along="u")


def m2(v, prm):
    """Drops the minus sign: every parabola opens right or up (p taken as |p|)."""
    if prm["ask"] == "equation":
        sq = "x" if prm["axis"] == "y" else "y"
        p = _p_from_data(v, prm, sq)
        if p > 0:
            raise ValueError("the parabola already opens right or up")
        return _equation(sq, Abs(p))
    sq = prm["sq"]
    h, k, p = _shape(v)
    if p > 0:
        raise ValueError("the parabola already opens right or up")
    return _property(sq, prm["ask"], h, k, Abs(p))


def m3(v, prm):
    """Mixes up a and 4a: reads a as the whole coefficient (p becomes 4p), or writes the
    found a where 4a belongs in the equation (u^2 = p w)."""
    if prm["ask"] == "equation":
        sq = "x" if prm["axis"] == "y" else "y"
        p = _p_from_data(v, prm, sq)
        return _equation(sq, p / 4)
    sq = prm["sq"]
    h, k, p = _shape(v)
    return _property(sq, prm["ask"], h, k, 4 * p)


def m4(v, prm):
    """Forgets to shift back: gives the focus or directrix of X^2 = 4bY as if the vertex were O."""
    if prm["ask"] == "equation":
        raise ValueError("only for shifted parabolas")
    sq = prm["sq"]
    h, k, p = _shape(v)
    if h == 0 and k == 0:
        raise ValueError("the vertex is already the origin")
    return _property(sq, prm["ask"], Rational(0), Rational(0), p)


def m5(v, prm):
    """Reads the vertex of (u - h)^2 = 4p(w - k) as (-h, -k)."""
    if prm["ask"] == "equation":
        raise ValueError("only for shifted parabolas")
    sq = prm["sq"]
    h, k, p = _shape(v)
    if h == 0 and k == 0:
        raise ValueError("the vertex is the origin")
    return _property(sq, prm["ask"], -h, -k, p)


def m6(v, prm):
    """Doesn't divide by the coefficient of the square: from 3x^2 = 8y takes 4a = 8."""
    if prm["ask"] == "equation":
        raise ValueError("only when the parabola is given")
    if v["A"] in (1, -1):
        raise ValueError("the square already has coefficient 1")
    sq = prm["sq"]
    A = v["A"]
    h, k, p = _shape(v)
    # Treats A u^2 + C w + ... as u^2 + C w + ...: p scaled by |A| (the sign from C stays)
    return _property(sq, prm["ask"], h, k, p * Abs(A))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
