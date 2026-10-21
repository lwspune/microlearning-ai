"""C03 Graph of a linear equation: answer models (the key, and one per misconception).

Inputs: the equation a*x + b*y = c (a, b, c), and the given value x0 or y0.
params["task"]:
  "y"      find y when x = x0
  "x"      find x when y = y0
  "xaxis"  the point where the line cuts the X-axis, as x + I*y
  "yaxis"  the point where the line cuts the Y-axis, as x + I*y
  "coef"   (x0, y0) lies on p*x + k*y = c; find k
"""
from sympy import I, Eq, Symbol, solve

_x, _y, _k = Symbol("x"), Symbol("y"), Symbol("k")


def _one(eq, s):
    (r,) = solve(eq, s)
    return r


def key(v, p):
    """Straight from the definition: a point is on the graph when it satisfies the equation."""
    t = p["task"]
    if t == "coef":
        return _one(Eq(v["p"] * v["x0"] + _k * v["y0"], v["c"]), _k)
    a, b, c = v["a"], v["b"], v["c"]
    if t == "y":
        return _one(Eq(a * v["x0"] + b * _y, c), _y)
    if t == "x":
        return _one(Eq(a * _x + b * v["y0"], c), _x)
    if t == "xaxis":  # every point of the X-axis has y = 0
        return _one(Eq(a * _x, c), _x)
    if t == "yaxis":  # every point of the Y-axis has x = 0
        return I * _one(Eq(b * _y, c), _y)
    raise ValueError(t)


def m1(v, p):
    """Axis mix-up: 'on the X-axis, x = 0' (and y = 0 on the Y-axis)."""
    t = p["task"]
    if t == "xaxis":
        return I * v["c"] / v["b"]
    if t == "yaxis":
        return v["c"] / v["a"]
    raise ValueError("only for where the line cuts an axis")


def m2(v, p):
    """Moves the known term across without changing its sign."""
    t = p["task"]
    if t == "y":
        return (v["c"] + v["a"] * v["x0"]) / v["b"]
    if t == "x":
        return (v["c"] + v["b"] * v["y0"]) / v["a"]
    if t == "coef":
        return (v["c"] + v["p"] * v["x0"]) / v["y0"]
    raise ValueError("no term to move")


def m3(v, p):
    """Stops before dividing by the coefficient of the unknown."""
    t = p["task"]
    if t == "y":
        return v["c"] - v["a"] * v["x0"]
    if t == "x":
        return v["c"] - v["b"] * v["y0"]
    if t == "coef":
        return v["c"] - v["p"] * v["x0"]
    if t == "xaxis":
        return v["c"]
    if t == "yaxis":
        return I * v["c"]
    raise ValueError(t)


def m4(v, p):
    """Puts the given value in for the wrong variable (swaps x and y)."""
    t = p["task"]
    a, b, c = v.get("a"), v.get("b"), v["c"]
    if t == "y":  # puts y = x0 and solves for x
        return (c - b * v["x0"]) / a
    if t == "x":  # puts x = y0 and solves for y
        return (c - a * v["y0"]) / b
    if t == "coef":  # uses the point as (y0, x0)
        return (c - v["p"] * v["y0"]) / v["x0"]
    raise ValueError("needs a given value")


def m5(v, p):
    """Subtracts the wrong way round (b*y = a*x0 - c), so the answer's sign flips."""
    t = p["task"]
    if t == "y":
        return (v["a"] * v["x0"] - v["c"]) / v["b"]
    if t == "x":
        return (v["b"] * v["y0"] - v["c"]) / v["a"]
    if t == "coef":
        return (v["p"] * v["x0"] - v["c"]) / v["y0"]
    if t == "xaxis":
        return -v["c"] / v["a"]
    if t == "yaxis":
        return -I * v["c"] / v["b"]
    raise ValueError(t)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
