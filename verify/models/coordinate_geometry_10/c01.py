"""C01 Distance formula: answer models (the key, and one per misconception).

Every item gives two points as inputs x1, y1, x2, y2 (sympy expressions; a letter such as `a`
is taken to be positive, as the book does, and handed back as the plain symbol the verifier
parses). The key measures with sympy's Point.distance; each misconception applies its wrong
rule to the same co-ordinates.
"""
from sympy import Abs, Point, Symbol, sqrt, sympify


def _apply(v, rule):
    """Runs rule(x1, y1, x2, y2) with every letter positive, then restores the plain letters."""
    vals = {k: sympify(e) for k, e in v.items()}
    syms = set().union(*(e.free_symbols for e in vals.values()))
    fwd = {s: Symbol(s.name, positive=True) for s in syms}
    back = {p: s for s, p in fwd.items()}
    w = {k: e.subs(fwd) for k, e in vals.items()}
    return sympify(rule(w["x1"], w["y1"], w["x2"], w["y2"])).subs(back)


def key(v, p):
    return _apply(v, lambda x1, y1, x2, y2: Point(x1, y1).distance(Point(x2, y2)))


def m1(v, p):
    """Ignores the signs of the co-ordinates: uses their sizes, as if each were a distance."""
    return _apply(v, lambda x1, y1, x2, y2: sqrt((Abs(x2) - Abs(x1)) ** 2 + (Abs(y2) - Abs(y1)) ** 2))


def m2(v, p):
    """Adds the two differences without squaring: the walk along the grid lines."""
    return _apply(v, lambda x1, y1, x2, y2: Abs(x2 - x1) + Abs(y2 - y1))


def m3(v, p):
    """Forgets the square root: reports d squared as the distance."""
    return _apply(v, lambda x1, y1, x2, y2: (x2 - x1) ** 2 + (y2 - y1) ** 2)


def m4(v, p):
    """Squares each co-ordinate and subtracts, x2^2 - x1^2 in place of (x2 - x1)^2."""

    def rule(x1, y1, x2, y2):
        s = (x2**2 - x1**2) + (y2**2 - y1**2)
        if s.is_negative:
            raise ValueError("negative under the root: no real answer to offer")
        return sqrt(s)

    return _apply(v, rule)


def m5(v, p):
    """Adds the differences as they are, signs and all, with no squares and no root."""
    return _apply(v, lambda x1, y1, x2, y2: (x2 - x1) + (y2 - y1))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
