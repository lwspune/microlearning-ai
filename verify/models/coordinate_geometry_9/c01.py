"""C01 Axes, origin and quadrants: answer models (the key, and one per misconception).

Inputs: named points, e.g. {"A": (-3, 2), "G": (3, -7)}. params["ask"]:
  where   where each point of params["order"] lies, as a named answer: Symbol("quadrant_II"),
          Symbol("x_axis"), Symbol("y_axis") or Symbol("origin"); a Tuple when there are two or more;
  count   how many of the points lie in Quadrant params["q"] ("I" to "IV");
  which   the set of points (Symbol("pt_<name>")) that lie in Quadrant params["q"].
"""
from sympy import FiniteSet, Integer, S, Symbol, Tuple, sign

_ROMAN = {1: "I", 2: "II", 3: "III", 4: "IV"}


def _place(x, y):
    """Where (x, y) lies, straight from the signs: a zero co-ordinate puts it on an axis."""
    sx, sy = int(sign(x)), int(sign(y))
    if sx == 0 and sy == 0:
        return Symbol("origin")
    if sy == 0:
        return Symbol("x_axis")  # y = 0: zero distance from the X-axis
    if sx == 0:
        return Symbol("y_axis")  # x = 0: zero distance from the Y-axis
    n = {(1, 1): 1, (-1, 1): 2, (-1, -1): 3, (1, -1): 4}[(sx, sy)]
    return Symbol(f"quadrant_{_ROMAN[n]}")


def _answer(v, p, place):
    pts = {k: (Integer(0) + val[0], Integer(0) + val[1]) for k, val in v.items()}
    ask = p["ask"]
    if ask == "where":
        order = p["order"] if isinstance(p["order"], list) else [p["order"]]
        got = [place(*pts[n]) for n in order]
        return got[0] if len(got) == 1 else Tuple(*got)
    if ask in ("count", "which"):
        q = Symbol(f"quadrant_{p['q']}")
        inside = [n for n, (x, y) in pts.items() if place(x, y) == q]
        if ask == "count":
            return Integer(len(inside))
        return FiniteSet(*[Symbol(f"pt_{n}") for n in inside]) if inside else S.EmptySet
    raise ValueError("no such ask")


def key(v, p):
    return _answer(v, p, _place)


def m1(v, p):
    """Swaps the co-ordinates: reads (x, y) as (y, x), so (0, b) goes on the X-axis."""
    return _answer(v, p, lambda x, y: _place(y, x))


def m2(v, p):
    """Numbers the quadrants clockwise from I: (+, -) is II and (-, +) is IV."""
    flip = {Symbol("quadrant_II"): Symbol("quadrant_IV"), Symbol("quadrant_IV"): Symbol("quadrant_II")}

    def place(x, y):
        s = _place(x, y)
        return flip.get(s, s)

    return _answer(v, p, place)


def m3(v, p):
    """Counts 0 as positive, so a point on an axis is put in a quadrant: (0, -3) in IV."""
    return _answer(v, p, lambda x, y: _place(x if x != 0 else 1, y if y != 0 else 1))


def m4(v, p):
    """Drops the minus sign of the x co-ordinate (a slip): (-3, 2) read as (3, 2)."""
    return _answer(v, p, lambda x, y: _place(abs(x), y))


def m5(v, p):
    """Drops the minus sign of the y co-ordinate (a slip): (3, -7) read as (3, 7)."""
    return _answer(v, p, lambda x, y: _place(x, abs(y)))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
