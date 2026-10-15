"""C01 Directed angles and quadrants: answer models (the key, and one per misconception).

Input t: a directed angle in degrees (an integer; negative means clockwise). params["ask"]:
  quadrant    where the terminal arm lies, a named answer: Symbol("quadrant_III"), or
              Symbol("axis_neg_y") and the like when the arm lies on an axis;
  coterminal  the smallest positive angle co-terminal with t, in degrees.
"""
from sympy import Integer, Symbol, cos, floor, pi, sign, sin

_ROMAN = {1: "I", 2: "II", 3: "III", 4: "IV"}
_AXES = {(1, 0): "axis_pos_x", (0, 1): "axis_pos_y", (-1, 0): "axis_neg_x", (0, -1): "axis_neg_y"}


def _arm(t):
    """The terminal arm's direction (cos t, sin t), straight from the definition."""
    a = Integer(t) * pi / 180
    return cos(a), sin(a)


def _quadrant(t):
    """Read the quadrant off the signs of the arm's coordinates (no reduction by 360)."""
    sx, sy = (int(sign(c)) for c in _arm(t))
    if sx == 0 or sy == 0:
        return Symbol(_AXES[(sx, sy)])
    n = {(1, 1): 1, (-1, 1): 2, (-1, -1): 3, (1, -1): 4}[(sx, sy)]
    return Symbol(f"quadrant_{_ROMAN[n]}")


def _smallest_positive(t):
    """The first d = 1, 2, ..., 360 for which t - d is a whole number of turns (the definition)."""
    t = Integer(t)
    d = next(Integer(d) for d in range(1, 361) if ((t - d) / 360).is_integer)
    assert _arm(d) == _arm(t)  # the same terminal arm
    return d


def _answer(t, p):
    if p["ask"] == "quadrant":
        return _quadrant(t)
    if p["ask"] == "coterminal":
        return _smallest_positive(t)
    raise ValueError("no such ask")


def key(v, p):
    return _answer(v["t"], p)


def m1(v, p):
    """Drops the minus sign: turns a negative angle anticlockwise (-140 read as 140)."""
    t = Integer(v["t"])
    if t >= 0:
        raise ValueError("no minus sign to drop")
    return _answer(-t, p)


def m2(v, p):
    """Thinks a half turn brings the arm back: removes multiples of 180 instead of 360."""
    r = Integer(v["t"]) % 180
    if r == 0:
        raise ValueError("on an axis")
    return _answer(r, p)


def m3(v, p):
    """Puts the initial arm on the positive y-axis, not the positive x-axis: turns t from there."""
    if p["ask"] != "quadrant":
        raise ValueError("only where the arm ends up")
    return _quadrant(Integer(v["t"]) + 90)


def m4(v, p):
    """Takes co-terminal to mean exactly one turn apart: removes 360 only once."""
    t = Integer(v["t"])
    if p["ask"] != "coterminal" or t < 720:
        raise ValueError("one turn off still leaves a positive angle past a whole turn only for t >= 720")
    return t - 360


def m5(v, p):
    """Reduces correctly to r in (0, 360), then names the quadrant by the number of whole right
    angles in r (250 = 2 x 90 + 70, so 'Quadrant II'), forgetting the part left over."""
    if p["ask"] != "quadrant":
        raise ValueError("only a quadrant")
    r = Integer(v["t"]) % 360
    k = int(floor(r / 90))
    if k == 0 or r % 90 == 0:
        raise ValueError("no whole right angle, or on an axis")
    return Symbol(f"quadrant_{_ROMAN[k]}")


def m6(v, p):
    """Counts back from the next whole turn and drops the sign: writes a positive angle that
    falls short of a whole number of turns by a (945 = 1080 - 135) as a, not -a."""
    t = Integer(v["t"])
    r = t % 360
    if t < 0 or r <= 180:
        raise ValueError("t lies less than a half turn past a whole turn: nothing to count back")
    return _answer(360 - r, p)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
