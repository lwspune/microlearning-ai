"""C09 Interval notation: answer models (the key, and one per misconception).

Inputs (sympy numbers): a, b, the ends; a = -oo or b = oo for a one-sided set.
params: l, how a relates to x (a l x), and r, how x relates to b (x r b): "<" or "<=".
So -3 <= x < 4 is a = -3, l = "<=", b = 4, r = "<"; x > 6 is a = 6, l = "<", b = oo, r = "<".
"""
from sympy import And, Interval, Symbol, oo

_x = Symbol("x", real=True)
_REL = {"<": lambda u, w: u < w, "<=": lambda u, w: u <= w}


def _ends(v, p):
    a, b = v["a"], v["b"]
    return a, b, p["l"] == "<", p["r"] == "<"


def key(v, p):
    """The set of real x with a l x and x r b, straight from the inequality."""
    a, b = v["a"], v["b"]
    conds = []
    if a != -oo:
        conds.append(_REL[p["l"]](a, _x))
    if b != oo:
        conds.append(_REL[p["r"]](_x, b))
    return And(*conds).as_set()


def m1(v, p):
    """Brackets the wrong way round: a round bracket for an end that is in, a square one for an end that is out."""
    a, b, lo, ro = _ends(v, p)
    return Interval(a, b, not lo if a != -oo else True, not ro if b != oo else True)


def m2(v, p):
    """Thinks of x as a whole number: an end left out is replaced by the next whole number in, closed."""
    a, b, lo, ro = _ends(v, p)
    if not ((lo and a != -oo) or (ro and b != oo)):
        raise ValueError("no finite end is left out")
    if (a != -oo and not a.is_integer) or (b != oo and not b.is_integer):
        raise ValueError("needs whole-number ends")
    if lo and a != -oo:
        a, lo = a + 1, False
    if ro and b != oo:
        b, ro = b - 1, False
    return Interval(a, b, lo, ro)


def m3(v, p):
    """Writes every finite end with a square bracket, whether or not the inequality is strict."""
    a, b, lo, ro = _ends(v, p)
    if not ((lo and a != -oo) or (ro and b != oo)):
        raise ValueError("every finite end is already in")
    return Interval(a, b)


def m4(v, p):
    """Reads '6 < x' as 'x < 6': the ray points the wrong way from its finite end."""
    a, b, lo, ro = _ends(v, p)
    if a == -oo and b != oo:
        return Interval(b, oo, ro, True)
    if b == oo and a != -oo:
        return Interval(-oo, a, True, lo)
    raise ValueError("needs a one-sided set")


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4}
