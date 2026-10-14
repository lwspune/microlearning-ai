"""Shared figure builders (Python dicts with the `Figure` keys from types.ts).

graph(): y = f(x) as `curve` elements. Chapter helpers (lpp_figures.py) build on
these; the content files store the computed points, never the formula.
"""
import math

from sympy import lambdify, symbols, sympify

_x = symbols("x", real=True)


def _round(v):
    r = round(v, 3)
    return int(r) if float(r).is_integer() else r


def graph(f, x0, x1, view, n=80, **extra):
    """The graph of f (a sympy expression in x, as a string) over [x0, x1].

    Samples n + 1 points. A sample that is undefined, or more than one view
    height above or below the frame, ends the current piece, so poles and gaps
    split the graph into branches and no stroke runs far off the frame.
    `extra` keys (tone, step, label, dashed) go on every piece.
    """
    fn = lambdify(_x, sympify(f, locals={"x": _x}), "math")
    (y0, y1) = view["y"]
    h = y1 - y0
    pieces, cur = [], []
    for i in range(n + 1):
        x = x0 + (x1 - x0) * i / n
        try:
            y = float(fn(x))
        except (ValueError, ZeroDivisionError, OverflowError, TypeError):
            y = math.nan
        if math.isfinite(y) and y0 - h <= y <= y1 + h:
            cur.append([_round(x), _round(y)])
        elif cur:
            pieces.append(cur)
            cur = []
    if cur:
        pieces.append(cur)
    return [{"kind": "curve", "points": p, **extra} for p in pieces if len(p) >= 2]
