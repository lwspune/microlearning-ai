"""C07 The general form ax + by + c = 0: answer models (the key, and one per misconception).

Inputs: a, b, c for the line ax + by + c = 0 (for params ask="p_area": a, b and the area A,
the line being ax + by = p). params["ask"] picks the question:
  slope      the slope (a number)
  intercepts x-intercept + I * y-intercept (the points (h, 0) and (0, k); fmt="intercepts")
  si_form    the slope-intercept form, as a locus polynomial in x, y
  area       the area of the triangle the line cuts off with the axes
  p_area     the set of values of p for which ax + by = p cuts off area A
The key works from the definition (solve the equation with y = 0, with x = 0, or for y;
slope from two points on the line), never from the -a/b, -c/a, -c/b read-offs.
"""
from sympy import Abs, FiniteSet, I, Rational, Symbol, solve, sqrt, symbols

x, y = symbols("x y", real=True)
P = Symbol("p", real=True)


def _ask(p):
    return p.get("ask", "slope")


def _line(v):
    return v["a"] * x + v["b"] * y + v["c"]


def _x_int(v):
    """Where the line meets the X-axis: every point there has y = 0."""
    (h,) = solve(_line(v).subs(y, 0), x)
    return h


def _y_int(v):
    """Where the line meets the Y-axis: every point there has x = 0."""
    (k,) = solve(_line(v).subs(x, 0), y)
    return k


def key(v, p):
    ask = _ask(p)
    if ask == "slope":
        (y_of,) = solve(_line(v), y)
        y0, y1 = y_of.subs(x, 0), y_of.subs(x, 1)
        return (y1 - y0) / (1 - 0)
    if ask == "intercepts":
        return _x_int(v) + I * _y_int(v)
    if ask == "si_form":
        return _line(v)
    if ask == "area":
        return Rational(1, 2) * Abs(_x_int(v)) * Abs(_y_int(v))
    if ask == "p_area":
        a, b, A = v["a"], v["b"], v["A"]
        area = Rational(1, 2) * Abs(P / a) * Abs(P / b)
        return FiniteSet(*solve(area - A, P))
    raise ValueError(ask)


def m1(v, p):
    """Swaps the axes: puts x = 0 for the x-intercept and y = 0 for the y-intercept."""
    if _ask(p) != "intercepts":
        raise ValueError("M1 is about which variable to set to zero")
    return _y_int(v) + I * _x_int(v)


def m2(v, p):
    """Reads ax + by + c = 0 as if it were y = mx + c: slope a, y-intercept c."""
    a, c = v["a"], v["c"]
    ask = _ask(p)
    if ask == "slope":
        return a
    if ask == "si_form":
        return y - (a * x + c)
    raise ValueError("M2 applies to the slope and the slope-intercept form")


def m3(v, p):
    """Moves terms across the = sign without changing their signs."""
    a, b, c = v["a"], v["b"], v["c"]
    ask = _ask(p)
    if ask == "slope":
        return a / b
    if ask == "intercepts":
        return c / a + I * c / b
    if ask == "si_form":
        return y - (a / b * x + c / b)
    raise ValueError("M3 doesn't change an area")


def m4(v, p):
    """Isolates by (or ax) but forgets to divide by b (or a): slope -a, intercepts -c and -c."""
    a, c = v["a"], v.get("c")
    ask = _ask(p)
    if ask == "slope":
        return -a
    if ask == "intercepts":
        return -c + I * (-c)
    if ask == "si_form":
        return y - (-a * x - c)
    if ask == "area":
        return Rational(1, 2) * Abs(-c) * Abs(-c)
    if ask == "p_area":
        # ax + by = p read as intercepts p and p.
        return FiniteSet(*solve(Rational(1, 2) * P**2 - v["A"], P))
    raise ValueError(ask)


def m5(v, p):
    """Takes the area as (x-intercept) x (y-intercept): forgets the 1/2."""
    ask = _ask(p)
    if ask == "area":
        return Abs(_x_int(v)) * Abs(_y_int(v))
    if ask == "p_area":
        a, b, A = v["a"], v["b"], v["A"]
        return FiniteSet(*solve(Abs(P / a) * Abs(P / b) - A, P))
    raise ValueError("M5 is about the area")


def m6(v, p):
    """Treats intercepts as lengths, always positive: no modulus, and only p > 0."""
    ask = _ask(p)
    if ask == "area":
        return Rational(1, 2) * _x_int(v) * _y_int(v)
    if ask == "p_area":
        a, b, A = v["a"], v["b"], v["A"]
        return FiniteSet(sqrt(2 * A * a * b))
    raise ValueError("M6 is about the area")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
