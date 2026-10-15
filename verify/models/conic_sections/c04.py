"""C04 Parametric points and focal distance: answer models (the key, and one per misconception).

The parabola is k*y^2 = c*x (so a = c / (4k)). p["ask"] picks the question type:
  point     -> the point with parameter t, as Tuple(x, y)            (input t)
  t         -> the parameter of the point (px, py)                   (inputs px, py)
  sp_t      -> the focal distance of the point with parameter t      (input t)
  sp_ratio  -> the focal distance of the point (not the vertex) whose ordinate is r times its abscissa (input r)
  pts       -> the points with focal distance d, as FiniteSet of Tuples (input d)
"""
from sympy import Abs, FiniteSet, Tuple, solve, sqrt, symbols

x, y = symbols("x y", real=True)


def _ask(p):
    return p["ask"]


def _a(v):
    return v["c"] / (4 * v["k"])


def _focal(v, px, py):
    """SP straight from the distance formula, S = (a, 0)."""
    return sqrt((px - _a(v)) ** 2 + py**2)


def _ratio_x(v):
    """The abscissa of the point (not the vertex) on k y^2 = c x with y = r x, read from the equation itself."""
    return v["c"] / (v["k"] * v["r"] ** 2)


def _pts(v, xs):
    """The two points on k y^2 = c x with abscissa xs (read from the equation itself)."""
    if xs <= 0:
        raise ValueError("no point of the parabola has that abscissa")
    ys = sqrt(v["c"] * xs / v["k"])
    return FiniteSet(Tuple(xs, ys), Tuple(xs, -ys))


def key(v, p):
    a, ask = _a(v), _ask(p)
    on = lambda px, py: v["k"] * py**2 - v["c"] * px == 0  # noqa: E731
    if ask == "point":
        P = Tuple(a * v["t"] ** 2, 2 * a * v["t"])
        assert on(*P)
        return P
    if ask == "t":
        assert on(v["px"], v["py"])
        sols = [t for t in solve([a * symbols("t") ** 2 - v["px"], 2 * a * symbols("t") - v["py"]], symbols("t"), dict=True)]
        assert len(sols) == 1
        return list(sols[0].values())[0]
    if ask == "sp_t":
        return _focal(v, a * v["t"] ** 2, 2 * a * v["t"])
    if ask == "sp_ratio":
        px = _ratio_x(v)
        return _focal(v, px, v["r"] * px)
    if ask == "pts":
        # Every point of the parabola at distance d from the focus.
        sols = solve([v["k"] * y**2 - v["c"] * x, (x - a) ** 2 + y**2 - v["d"] ** 2], [x, y], dict=True)
        return FiniteSet(*[Tuple(s[x], s[y]) for s in sols if s[x].is_real and s[y].is_real])
    raise ValueError(ask)


def _with_a(v, p, a):
    """The right method with a wrong value of a."""
    ask = _ask(p)
    if ask == "point":
        return Tuple(a * v["t"] ** 2, 2 * a * v["t"])
    if ask == "t":
        return v["py"] / (2 * a)
    if ask == "sp_t":
        return a + a * v["t"] ** 2
    if ask == "sp_ratio":
        return a + _ratio_x(v)
    if ask == "pts":
        return _pts(v, v["d"] - a)
    raise ValueError(ask)


def m1(v, p):
    """The focal distance is the abscissa x1 alone (distance to the y-axis, not to the directrix)."""
    ask, a = _ask(p), _a(v)
    if ask == "sp_t":
        return a * v["t"] ** 2
    if ask == "sp_ratio":
        return _ratio_x(v)
    if ask == "pts":
        return _pts(v, v["d"])
    raise ValueError("no focal distance asked")


def m2(v, p):
    """Takes a as the whole coefficient: y^2 = 12x read as a = 12 (forgets 4a)."""
    return _with_a(v, p, v["c"] / v["k"])


def m3(v, p):
    """Ignores the coefficient of y^2: 3y^2 = 16x read as 4a = 16."""
    if v["k"] == 1:
        raise ValueError("y^2 has coefficient 1")
    return _with_a(v, p, v["c"] / 4)


def m4(v, p):
    """Finds t from x = at^2 and takes the positive root, losing the sign of t."""
    if _ask(p) != "t":
        raise ValueError("only for the parameter of a point")
    if v["py"] >= 0:
        raise ValueError("gives the key when y >= 0")
    return sqrt(v["px"] / _a(v))


def m5(v, p):
    """The coordinates swapped: the point taken as (2at, at^2)."""
    ask, a, t = _ask(p), _a(v), v.get("t")
    if ask == "point":
        return Tuple(2 * a * t, a * t**2)
    if ask == "sp_t":
        return a + 2 * a * t
    raise ValueError("needs a parameter")


def m6(v, p):
    """The directrix taken as x = a, so the focal distance is |x1 - a|."""
    ask, a = _ask(p), _a(v)
    if ask == "sp_t":
        return Abs(a * v["t"] ** 2 - a)
    if ask == "sp_ratio":
        return Abs(_ratio_x(v) - a)
    if ask == "pts":
        return _pts(v, v["d"] + a)
    raise ValueError("no focal distance asked")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
