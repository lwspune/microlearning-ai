"""Shared figure builders (Python dicts with the `Figure` keys from types.ts).

graph(): y = f(x) as `curve` elements; venn(): Venn diagrams; number_line(): intervals.
Chapter helpers (lpp_figures.py) build on
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


# ---------- Venn diagrams (axes "none") ----------

_U = (0, 10, 0, 7)  # x0, x1, y0, y1 of the universal set's rectangle
_CIRCLES = {
    2: [((3.9, 3.5), 2.4), ((6.1, 3.5), 2.4)],
    3: [((3.9, 4.3), 2.2), ((6.1, 4.3), 2.2), ((5.0, 2.5), 2.2)],
}
# A point inside each cell, keyed by which sets contain it (one bool per set); for count labels.
_CELL_AT = {
    2: {(True, False): (2.6, 3.5), (False, True): (7.4, 3.5), (True, True): (5.0, 3.5), (False, False): (0.9, 0.8)},
    3: {
        (True, False, False): (2.9, 5.0), (False, True, False): (7.1, 5.0), (False, False, True): (5.0, 1.2),
        (True, True, False): (5.0, 5.2), (True, False, True): (3.9, 2.9), (False, True, True): (6.1, 2.9),
        (True, True, True): (5.0, 3.8), (False, False, False): (0.9, 0.8),
    },
}


def _u_shapes():
    x0, x1, y0, y1 = _U
    # Each halfPlane keeps the side on the LEFT of its direction: walk the rectangle anticlockwise.
    return [
        {"kind": "halfPlane", "through": [[x0, y0], [x1, y0]]},
        {"kind": "halfPlane", "through": [[x1, y0], [x1, y1]]},
        {"kind": "halfPlane", "through": [[x1, y1], [x0, y1]]},
        {"kind": "halfPlane", "through": [[x0, y1], [x0, y0]]},
    ]


def venn_cells(n):
    """Every cell of an n-set diagram, as tuples of bools (in A?, in B?, ...)."""
    return list(_CELL_AT[n])


def venn(alt, names=("A", "B"), shade=None, counts=None, universe="U", **extra):
    """A Venn diagram figure for 2 or 3 sets inside a universal rectangle.

    shade: a function of one bool per set (in A?, in B?, ...) -> True for the cells to shade,
      e.g. `lambda a, b: a and not b` for A − B; `extra` keys (step, tone) go on that shading.
      Or a list of layers, each (function, {"step": 2, "tone": "good"}), drawn in order.
    counts: {cell tuple: "12"} labels written inside cells (n(...) for counting problems), or
      {cell: ("12", {"step": 2, "tone": "bad"})} to reveal or colour a count.
    """
    n = len(names)
    assert n in _CIRCLES, "2 or 3 sets"
    x0, x1, y0, y1 = _U
    elements = []
    layers = shade if isinstance(shade, (list, tuple)) else [(shade, extra)] if shade else []
    for pick, opts in layers:
        for cell in venn_cells(n):
            if pick(*cell):
                within = [
                    {"kind": "disc" if inside else "outsideDisc", "centre": list(c), "r": r}
                    for inside, (c, r) in zip(cell, _CIRCLES[n])
                ] + _u_shapes()
                elements.append({"kind": "region", "within": within, **opts})
    elements.append({"kind": "curve", "points": [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], "tone": "muted"})
    for name, (c, r) in zip(names, _CIRCLES[n]):
        elements.append({"kind": "circle", "centre": list(c), "r": r, "tone": "muted"})
        if c[1] > 3:  # upper circles: name above the outer shoulder
            side = -1 if c[0] < 5 else 1
            elements.append({"kind": "label", "at": [round(c[0] + side * r * 0.75, 2), round(c[1] + r * 0.8, 2)], "label": name, "labelAt": "n"})
        else:  # the lower circle: name just outside its lower right
            elements.append({"kind": "label", "at": [round(c[0] + r, 2), round(c[1] - r * 0.55, 2)], "label": name, "labelAt": "e"})
    elements.append({"kind": "label", "at": [x1 - 0.5, y1 - 0.6], "label": universe, "labelAt": "n"})
    for cell, text in (counts or {}).items():
        text, opts = text if isinstance(text, tuple) else (text, {})
        elements.append({"kind": "label", "at": list(_CELL_AT[n][cell]), "label": str(text), "labelAt": "n", **opts})
    return {"alt": alt, "axes": "none", "view": {"x": [x0 - 0.3, x1 + 0.3], "y": [y0 - 0.3, y1 + 0.3]}, "elements": elements}


# ---------- Number lines (axes "none") ----------

def number_line(alt, lo, hi, parts=(), ticks=None, **extra):
    """A number line from lo to hi with intervals marked on it.

    parts: (left, a, b, right) per interval, e.g. ("[", -3, 4, ")"); a = -oo or b = oo runs off the
      line with an arrow. `extra` keys (step, tone) go on every mark of every part.
    ticks: the numbers to label (default: the finite ends of the parts).
    """
    oo = float("inf")
    pad = 0.9
    elements = [{"kind": "segment", "from": [lo - pad, 0], "to": [hi + pad, 0], "tone": "muted"}]
    ends = set()
    for left, a, b, right in parts:
        a_inf, b_inf = a in (-oo, "-oo"), b in (oo, "oo")
        start = [lo - pad, 0] if a_inf else [a, 0]
        stop = [hi + pad, 0] if b_inf else [b, 0]
        if b_inf:
            elements.append({"kind": "vector", "from": start, "to": stop, **extra})
        elif a_inf:
            elements.append({"kind": "vector", "from": stop, "to": start, **extra})
        else:
            elements.append({"kind": "segment", "from": start, "to": stop, **extra})
        if not a_inf:
            elements.append({"kind": "point", "at": [a, 0], **({"hollow": True} if left == "(" else {}), **extra})
            ends.add(a)
        if not b_inf:
            elements.append({"kind": "point", "at": [b, 0], **({"hollow": True} if right == ")" else {}), **extra})
            ends.add(b)
    for t in sorted(ends if ticks is None else ticks):
        text = str(t).replace("-", "−")
        elements.append({"kind": "label", "at": [t, 0], "label": text, "labelAt": "s", "tone": "muted"})
    return {"alt": alt, "axes": "none", "view": {"x": [lo - pad - 0.2, hi + pad + 0.2], "y": [-1, 1]}, "elements": elements}
