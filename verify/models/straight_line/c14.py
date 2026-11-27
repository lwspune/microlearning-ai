"""C14 Centres of a triangle. Centroid: mean of the vertices. Incentre: (aA + bB + cC)/(a + b + c), a = BC opposite A.
Circumcentre: equidistant from the vertices (the hypotenuse's midpoint in a right triangle). Orthocentre: where the
altitudes meet (the right-angled vertex in a right triangle). G divides HO (orthocentre to circumcentre) in 2 : 1.
Points are x + I*y. params["q"]:
  "centroid": inputs A, B, C (complex). "incentre": inputs A, B, C. "circum": inputs A, B, C (right angle at A).
  "ortho": inputs A, B, C (right angle at A). "euler": named.
M1 forgets to divide by 3; M2 gives a side's midpoint; M3 divides by 2; M4 gives the centroid; M5 weights by the
wrong sides; M6 gives the circumcentre; M7 gives the orthocentre; M8 the centroid; M9 the incentre; M10 gives the
circumcentre; M11 the centroid; M12 completes the rectangle; M13 says 1 : 1; M14 1 : 2; M15 3 : 1."""
from sympy import Abs, I

from ._mix import mixed_models


def _sides(v):
    A, B, C = v["A"], v["B"], v["C"]
    return Abs(B - C), Abs(C - A), Abs(A - B)


def _incentre(v, perm=False):
    a, b, c = _sides(v)
    if perm:
        a, b, c = c, a, b
    return (a * v["A"] + b * v["B"] + c * v["C"]) / (a + b + c)


TABLE = {
    "centroid": {"key": lambda v: (v["A"] + v["B"] + v["C"]) / 3, "C14-M1": lambda v: v["A"] + v["B"] + v["C"],
                 "C14-M2": lambda v: (v["A"] + v["B"]) / 2, "C14-M3": lambda v: (v["A"] + v["B"] + v["C"]) / 2},
    "incentre": {"key": lambda v: _incentre(v), "C14-M4": lambda v: (v["A"] + v["B"] + v["C"]) / 3,
                 "C14-M5": lambda v: _incentre(v, perm=True), "C14-M6": lambda v: (v["B"] + v["C"]) / 2},
    "circum": {"key": lambda v: (v["B"] + v["C"]) / 2, "C14-M7": lambda v: v["A"], "C14-M8": lambda v: (v["A"] + v["B"] + v["C"]) / 3,
               "C14-M9": lambda v: _incentre(v)},
    "ortho": {"key": lambda v: v["A"], "C14-M10": lambda v: (v["B"] + v["C"]) / 2, "C14-M11": lambda v: (v["A"] + v["B"] + v["C"]) / 3,
              "C14-M12": lambda v: v["B"] + v["C"] - v["A"]},
    "euler": {"key": "two_to_one", "C14-M13": "one_to_one", "C14-M14": "one_to_two", "C14-M15": "three_to_one"},
}
MODELS = mixed_models("C14", TABLE, 15)
