"""C04 Graph of a linear equation: answer models (the key, and one per misconception).

Inputs a, b, c: the equation ax + by = c. Params task:
  "x"     - the point of the graph whose x co-ordinate is the input g (returns Tuple(x, y));
  "y"     - the point of the graph whose y co-ordinate is the input g (returns Tuple(x, y));
  "xaxis" - the point where the graph crosses the X-axis; "yaxis" - where it crosses the Y-axis.
Params out="val" returns only the co-ordinate that was asked for (a number), not the point.
"""
from sympy import Symbol, Tuple, solve, sympify

X, Y = Symbol("x"), Symbol("y")


def _abc(v):
    return sympify(v["a"]), sympify(v["b"]), sympify(v["c"])


def _given(v, p):
    """(which co-ordinate is given, its value) for the task."""
    t = p["task"]
    if t == "xaxis":
        return "y", sympify(0)
    if t == "yaxis":
        return "x", sympify(0)
    return t, sympify(v["g"])


def _out(x, y, p, asked):
    if p.get("out") == "val":
        return y if asked == "y" else x
    return Tuple(x, y)


def key(v, p):
    """From the definition: the point satisfies ax + by = c with the given co-ordinate fixed."""
    a, b, c = _abc(v)
    which, g = _given(v, p)
    eq = a * X + b * Y - c
    if which == "x":
        (y,) = solve(eq.subs(X, g), Y)
        return _out(g, y, p, "y")
    (x,) = solve(eq.subs(Y, g), X)
    return _out(x, g, p, "x")


def m1(v, p):
    """Moves the known term across = without changing its sign: by = c + ax (or ax = c + by)."""
    if p["task"] in ("xaxis", "yaxis"):
        raise ValueError("the known term is 0 on an axis: nothing to move")
    a, b, c = _abc(v)
    g = sympify(v["g"])
    if g == 0:
        raise ValueError("g = 0: the moved term is 0")
    if p["task"] == "x":
        return _out(g, (c + a * g) / b, p, "y")
    return _out((c + b * g) / a, g, p, "x")


def m2(v, p):
    """Finds the right pair but writes it in the wrong order, (y, x)."""
    if p.get("out") == "val":
        raise ValueError("value items: no pair to swap")
    x, y = key(v, p)
    if x == y:
        raise ValueError("x = y: the swap gives the key")
    return Tuple(y, x)


def m3(v, p):
    """Forgets to divide by the coefficient of the unknown: takes by = k as y = k."""
    a, b, c = _abc(v)
    which, g = _given(v, p)
    if which == "x":
        if b == 1:
            raise ValueError("b = 1: nothing to divide by")
        return _out(g, c - a * g, p, "y")
    if a == 1:
        raise ValueError("a = 1: nothing to divide by")
    return _out(c - b * g, g, p, "x")


def m4(v, p):
    """Puts the zero in the wrong co-ordinate: on the X-axis takes x = 0, on the Y-axis y = 0."""
    if p["task"] not in ("xaxis", "yaxis"):
        raise ValueError("axis items only")
    a, b, c = _abc(v)
    if p["task"] == "xaxis":
        return _out(sympify(0), c / b, p, "x")
    return _out(c / a, sympify(0), p, "y")


def m5(v, p):
    """Puts the given value in for the wrong variable, and reports what it finds as the asked co-ordinate."""
    if p["task"] in ("xaxis", "yaxis"):
        raise ValueError("axis items: see C04-M4")
    a, b, c = _abc(v)
    g = sympify(v["g"])
    if p["task"] == "x":
        return _out(g, (c - b * g) / a, p, "y")
    return _out((c - a * g) / b, g, p, "x")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
