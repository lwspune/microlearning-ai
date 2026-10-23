"""C03 Rhombus, rectangle and square: answer models (the key, and one per misconception).

Angles are in degrees (plain numbers; items use fmt="deg"); lengths are in cm (plain numbers).

params["ask"]:
  "perim"   a rhombus (a square when d1 = d2) with diagonals d1 and d2. Find its perimeter.
  "diag"    a rhombus with side s and one diagonal d. Find the other diagonal.
  "opp"     opposite angles of a rhombus are (a*x + b) and (c*x + e) degrees. Find the first angle.
  "half"    rhombus PQRS with angle P = g. Find angle PQS (between side QP and diagonal QS).
  "centre"  rectangle PQRS, diagonals meet at M, angle QMR = t. Find angle MPS.

The keys work from coordinates and the definitions: a rhombus's diagonals are drawn on the axes
(they bisect each other at right angles), so a side is the distance between two vertices; angles
use the angle sum of a triangle and the equal halves of a rectangle's diagonals.
"""
from sympy import Integer, Point, Symbol, solve, sqrt

STRAIGHT = Integer(180)
RIGHT = Integer(90)
X = Symbol("x")


def _side(d1, d2):
    """Side of the rhombus with diagonals d1, d2 laid on the axes, centre at the origin."""
    return Point(-d1 / 2, 0).distance(Point(0, -d2 / 2))


def _opp(v, total=None):
    """The first angle (a x + b) when it equals (c x + e), or when the two add to `total`."""
    lhs, rhs = v["a"] * X + v["b"], v["c"] * X + v["e"]
    x = solve(lhs - rhs if total is None else lhs + rhs - total, X)[0]
    return x, v["a"] * x + v["b"]


def key(v, p):
    ask = p["ask"]
    if ask == "perim":
        return 4 * _side(v["d1"], v["d2"])
    if ask == "diag":
        half = sqrt(v["s"] ** 2 - (v["d"] / 2) ** 2)      # O to the far vertex, right angle at O
        return 2 * half
    if ask == "opp":
        return _opp(v)[1]
    if ask == "half":
        # Triangle PQS has PQ = PS (sides of the rhombus): its base angles are equal.
        return (STRAIGHT - v["g"]) / 2
    if ask == "centre":
        # Angle PMS = angle QMR (vertically opposite); MP = MS (equal diagonals, halved): isosceles.
        return (STRAIGHT - v["t"]) / 2
    raise ValueError(ask)


def m1(v, p):
    """Forgets the diagonals bisect each other: uses whole diagonals as the legs at O."""
    if p["ask"] == "perim":
        return 4 * sqrt(v["d1"] ** 2 + v["d2"] ** 2)
    raise ValueError("M1 needs the diagonals as the legs of the right triangle at O")


def m2(v, p):
    """Treats the rhombus or rectangle as a square: equal diagonals, right angles, 45 degree halves."""
    ask = p["ask"]
    if ask == "diag":
        return v["d"]
    if ask == "opp":
        return RIGHT
    if ask in ("half", "centre"):
        return RIGHT / 2
    raise ValueError("M2 needs a property only a square has")


def m3(v, p):
    """Adds (or subtracts) the lengths themselves, not their squares, in Pythagoras."""
    ask = p["ask"]
    if ask == "perim":
        return 4 * (v["d1"] / 2 + v["d2"] / 2)
    if ask == "diag":
        return 2 * (v["s"] - v["d"] / 2)
    raise ValueError("M3 needs a Pythagoras step")


def m4(v, p):
    """Mixes up opposite and adjacent angles: opposite angles add to 180, adjacent ones are equal."""
    ask = p["ask"]
    if ask == "opp":
        return _opp(v, STRAIGHT)[1]
    if ask == "half":
        return v["g"] / 2                                   # angle Q taken equal to angle P, then halved
    raise ValueError("M4 needs opposite or adjacent angles")


def m5(v, p):
    """Stops one step short: gives the value found on the way."""
    ask = p["ask"]
    if ask == "perim":
        return _side(v["d1"], v["d2"])
    if ask == "diag":
        return sqrt(v["s"] ** 2 - (v["d"] / 2) ** 2)
    if ask == "opp":
        return _opp(v)[0]
    if ask == "half":
        return STRAIGHT - v["g"]                            # angle PQR, not yet halved
    if ask == "centre":
        return v["t"]                                       # angle PMS
    raise ValueError(ask)


def m6(v, p):
    """Takes angle PMS as the angle next to QMR (a linear pair), not the vertically opposite one."""
    if p["ask"] == "centre":
        return (STRAIGHT - (STRAIGHT - v["t"])) / 2
    raise ValueError("M6 needs the angles at the centre")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
