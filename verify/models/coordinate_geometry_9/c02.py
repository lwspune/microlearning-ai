"""C02 Plotting points: answer models (the key, and one per misconception).

Inputs x, y: where the point really is (read items: the point marked in the figure; plot items:
the point the stem asks to plot). Read items also give cx, cy, the bottom-left corner of the
figure's grid, and return the co-ordinates as Tuple(x, y). Plot items (params task="plot") give
pts="U:-3,2;V:2,3;..." (the marked points of the figure) and return the name of the marked point
a student would land on, as a Symbol.
"""
from sympy import Integer, Symbol, Tuple, sign, sympify


def _xy(v):
    return sympify(v["x"]), sympify(v["y"])


def _plot(p):
    return p.get("task") == "plot"


def _out(x, y, p):
    if not _plot(p):
        return Tuple(x, y)
    for part in p["pts"].split(";"):
        name, at = part.split(":")
        a, b = (Integer(s) for s in at.split(","))
        if (a, b) == (x, y):
            return Symbol(name)
    raise ValueError(f"no marked point at ({x}, {y})")


def key(v, p):
    """From the definition: x is the move along the X-axis from O, y the move parallel to the Y-axis."""
    x, y = _xy(v)
    return _out(x, y, p)


def m1(v, p):
    """Writes (or plots) the pair in the wrong order: the up-down move first."""
    x, y = _xy(v)
    if x == y:
        raise ValueError("x = y: swapping gives the key")
    return _out(y, x, p)


def m2(v, p):
    """Drops the signs: left and down moves written as positive."""
    x, y = _xy(v)
    if x >= 0 and y >= 0:
        raise ValueError("no negative co-ordinate: dropping signs gives the key")
    return _out(abs(x), abs(y), p)


def m3(v, p):
    """Counts grid lines, not unit steps: reading, both end lines are counted (one too many);
    plotting, the axis is counted as 1 (one step short). A zero co-ordinate stays 0."""
    x, y = _xy(v)
    d = -1 if _plot(p) else 1
    return _out(x + d * sign(x), y + d * sign(y), p)


def m4(v, p):
    """Reads the co-ordinates from the bottom-left corner of the grid, not from the origin."""
    if _plot(p):
        raise ValueError("reading items only")
    x, y = _xy(v)
    return _out(x - sympify(v["cx"]), y - sympify(v["cy"]), p)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4}
