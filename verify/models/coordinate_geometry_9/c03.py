"""C03 Lines parallel to the axes: answer models (the key, and one per misconception).

Three item tasks (params["task"]):
  "dir"      inputs d (a distance); params axis ("Y" or "X": the axis the line is parallel to) and
             side ("left", "right", "above", "below"). Returns the line as a locus polynomial (= 0).
  "point"    inputs h, k (a point on the line); params axis. Returns a locus polynomial.
  "describe" inputs a with params letter ("x" for the line x = a, "y" for y = a), or params pts
             ("x1,y1;x2,y2;...", points on one line). Returns a Symbol naming the description:
             par<Axis>_<side>_<distance> (e.g. parY_left_4) or par<Axis>_dist_m<n> for a negative distance.
"""
from sympy import Abs, Symbol, sympify

X = Symbol("x", real=True)
Y = Symbol("y", real=True)

SIGN = {"left": -1, "right": 1, "above": 1, "below": -1}


def _task(p):
    return p["task"]


def _line(letter, c):
    """The line letter = c, as a polynomial."""
    return (X if letter == "x" else Y) - c


def _desc(axis, c):
    """How the line (parallel to `axis`, constant c) sits: which axis, which side, how far."""
    if axis == "Y":
        side = "left" if c < 0 else "right"
    else:
        side = "below" if c < 0 else "above"
    return Symbol(f"par{axis}_{side}_{Abs(c)}")


def _letter_and_const(v, p):
    """The line in a describe item: from its equation, or from the points it passes through."""
    if "pts" in p:
        pts = [tuple(sympify(s) for s in q.split(",")) for q in p["pts"].split(";")]
        if len({q[0] for q in pts}) == 1:
            return "x", pts[0][0]
        if len({q[1] for q in pts}) == 1:
            return "y", pts[0][1]
        raise ValueError("the points share no co-ordinate")
    return p["letter"], sympify(v["a"])


def _axis_of(letter):
    """x = a is parallel to the Y-axis; y = b to the X-axis."""
    return "Y" if letter == "x" else "X"


def key(v, p):
    """From the definition: every point of a line parallel to the Y-axis has the same x (to the left of
    the Y-axis, a negative x); parallel to the X-axis, the same y (below it, a negative y)."""
    t = _task(p)
    if t == "dir":
        letter = "x" if p["axis"] == "Y" else "y"
        return _line(letter, SIGN[p["side"]] * sympify(v["d"]))
    if t == "point":
        h, k = sympify(v["h"]), sympify(v["k"])
        return _line("x", h) if p["axis"] == "Y" else _line("y", k)
    letter, c = _letter_and_const(v, p)
    return _desc(_axis_of(letter), c)


def m1(v, p):
    """Swaps the axes: takes a line parallel to the Y-axis as y = constant (the letter of the axis it
    is parallel to), and reads x = a as parallel to the X-axis."""
    t = _task(p)
    if t == "dir":
        letter = "y" if p["axis"] == "Y" else "x"
        return _line(letter, SIGN[p["side"]] * sympify(v["d"]))
    if t == "point":
        h, k = sympify(v["h"]), sympify(v["k"])
        return _line("y", k) if p["axis"] == "Y" else _line("x", h)
    letter, c = _letter_and_const(v, p)
    return _desc("X" if letter == "x" else "Y", c)


def m2(v, p):
    """Loses the side: the constant is written (or read) as the distance, always positive, so a line
    left of the Y-axis or below the X-axis lands on the other side."""
    t = _task(p)
    if t == "dir":
        if SIGN[p["side"]] > 0:
            raise ValueError("right or above: the distance is the key")
        letter = "x" if p["axis"] == "Y" else "y"
        return _line(letter, sympify(v["d"]))
    if t == "point":
        h, k = sympify(v["h"]), sympify(v["k"])
        c = h if p["axis"] == "Y" else k
        if c >= 0:
            raise ValueError("non-negative co-ordinate: dropping the sign gives the key")
        return _line("x" if p["axis"] == "Y" else "y", Abs(c))
    letter, c = _letter_and_const(v, p)
    if c >= 0:
        raise ValueError("non-negative constant: dropping the sign gives the key")
    return _desc(_axis_of(letter), Abs(c))


def m3(v, p):
    """Takes the constant itself as the distance from the axis, so a distance can come out negative."""
    if _task(p) != "describe":
        raise ValueError("describe items only")
    letter, c = _letter_and_const(v, p)
    if c >= 0:
        raise ValueError("non-negative constant: the distance is the key")
    return Symbol(f"par{_axis_of(letter)}_dist_m{Abs(c)}")


def m4(v, p):
    """Right letter, wrong co-ordinate: the line through (h, k) parallel to the Y-axis written as x = k
    (parallel to the X-axis, y = h)."""
    if _task(p) != "point":
        raise ValueError("point items only")
    h, k = sympify(v["h"]), sympify(v["k"])
    if h == k:
        raise ValueError("h = k: the wrong co-ordinate is the right one")
    return _line("x", k) if p["axis"] == "Y" else _line("y", h)


def m5(v, p):
    """Copies the stem: writes the letter of the axis named in the question equal to the distance as
    printed (parallel to the Y-axis, 7 units: y = 7)."""
    if _task(p) != "dir":
        raise ValueError("direction items only")
    if SIGN[p["side"]] > 0:
        raise ValueError("right or above: same as C03-M1")
    letter = "y" if p["axis"] == "Y" else "x"
    return _line(letter, sympify(v["d"]))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
