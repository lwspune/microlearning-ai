"""C01 Properties of a parallelogram: answer models (the key, and one per misconception).

Angles are in degrees (plain numbers; items use fmt="deg"); lengths are in cm (plain numbers).

params["ask"]:
  "adj"    input g: one angle. Find an angle adjacent to it (at the other end of a side).
  "alg"    two adjacent angles (a*x + b) and (c*x + d) degrees. params want: "first" or "second";
           the asked angle is opposite that one, so it has the same measure.
  "ratio"  two adjacent angles in the ratio m : n (n the larger part). Find the larger angle.
  "sides"  perimeter P, two adjacent sides in the ratio m : n (n the larger part). Find the longer side.
  "diag"   diagonals meet at O. Half of one diagonal is given two ways, (a*x + b) and (c*x + d) cm,
           and the other diagonal is q cm. Find the first diagonal.

The key uses the definitions: interior angles of parallel lines add to 180, opposite sides are
equal (perimeter = 2(sum of adjacent sides)), O is the midpoint of each diagonal.
"""
from sympy import Integer, Symbol, solve

STRAIGHT = Integer(180)
X = Symbol("x")


def _x(v, total):
    """x from (a x + b) + (c x + d) = total."""
    return solve(v["a"] * X + v["b"] + v["c"] * X + v["d"] - total, X)[0]


def _x_equal(v):
    """x from (a x + b) = (c x + d)."""
    return solve(v["a"] * X + v["b"] - (v["c"] * X + v["d"]), X)[0]


def _angle(v, x, want):
    return v["a"] * x + v["b"] if want == "first" else v["c"] * x + v["d"]


def key(v, p):
    ask = p["ask"]
    if ask == "adj":
        return STRAIGHT - v["g"]
    if ask == "alg":
        return _angle(v, _x(v, STRAIGHT), p["want"])
    if ask == "ratio":
        return STRAIGHT * v["n"] / (v["m"] + v["n"])
    if ask == "sides":
        return v["P"] / 2 * v["n"] / (v["m"] + v["n"])
    if ask == "diag":
        return 2 * (v["a"] * _x_equal(v) + v["b"])
    raise ValueError(ask)


def m1(v, p):
    """Takes adjacent angles as equal."""
    ask = p["ask"]
    if ask == "adj":
        return v["g"]
    if ask == "alg":
        return _angle(v, _x_equal(v), p["want"])
    raise ValueError("M1 needs a given angle and an adjacent one")


def m2(v, p):
    """Makes a pair of adjacent angles add to 360 (the whole quadrilateral's sum)."""
    ask = p["ask"]
    if ask == "adj":
        return 2 * STRAIGHT - v["g"]
    if ask == "alg":
        return _angle(v, _x(v, 2 * STRAIGHT), p["want"])
    if ask == "ratio":
        return 2 * STRAIGHT * v["n"] / (v["m"] + v["n"])
    raise ValueError("M2 needs adjacent angles")


def m3(v, p):
    """Treats the parallelogram as a square: right angles, all sides equal, equal diagonals."""
    ask = p["ask"]
    if ask in ("adj", "alg", "ratio"):
        return Integer(90)
    if ask == "sides":
        return v["P"] / 4
    if ask == "diag":
        return v["q"]
    raise ValueError(ask)


def m4(v, p):
    """Gives the half-diagonal OW for the whole diagonal WY."""
    if p["ask"] != "diag":
        raise ValueError("M4 needs a diagonal")
    return v["a"] * _x_equal(v) + v["b"]


def m5(v, p):
    """Counts each side once in the perimeter: P = (sum of two adjacent sides)."""
    if p["ask"] != "sides":
        raise ValueError("M5 needs a perimeter")
    return v["P"] * v["n"] / (v["m"] + v["n"])


def m6(v, p):
    """Stops at the unknown x (or the share of one ratio part) and reports it."""
    ask = p["ask"]
    if ask == "alg":
        return _x(v, STRAIGHT)
    if ask == "ratio":
        return STRAIGHT / (v["m"] + v["n"])
    if ask == "sides":
        return v["P"] / 2 / (v["m"] + v["n"])
    if ask == "diag":
        return _x_equal(v)
    raise ValueError("M6 needs an unknown")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
