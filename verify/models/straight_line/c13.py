"""C13 Image of a point in a line. For P(x1, y1) and ax + by + c = 0, with d = (ax1 + by1 + c)/(a^2 + b^2):
foot = (x1 - a d, y1 - b d), image = (x1 - 2a d, y1 - 2b d). Points are x + I*y (fmt "point").
params["q"]:
  "image": inputs x1, y1, a, b, c. "foot": inputs x1, y1, a, b, c. "yx": inputs x1, y1 (image in y = x).
  "join": named. "image2": inputs x1, y1, a, b, c.
M1 gives the foot; M2 moves the wrong way; M3 swaps the image's coordinates; M4 gives the image; M5 moves the wrong
way; M6 forgets to divide by a^2 + b^2; M7 reflects in the x-axis; M8 in the y-axis; M9 in y = -x; M10 calls the join
parallel to the line; M11 only bisected; M12 through the origin; M13 gives the foot; M14 moves the wrong way;
M15 divides by sqrt(a^2 + b^2)."""
from sympy import I, sqrt

from ._mix import mixed_models


def _pt(v, k, denom=None):
    a, b = v["a"], v["b"]
    den = (a ** 2 + b ** 2) if denom is None else denom
    d = (a * v["x1"] + b * v["y1"] + v["c"]) / den
    return (v["x1"] - k * a * d) + I * (v["y1"] - k * b * d)


def _swap(z):
    return z.as_real_imag()[1] + I * z.as_real_imag()[0]


TABLE = {
    "image": {"key": lambda v: _pt(v, 2), "C13-M1": lambda v: _pt(v, 1), "C13-M2": lambda v: _pt(v, -2), "C13-M3": lambda v: _swap(_pt(v, 2))},
    "foot": {"key": lambda v: _pt(v, 1), "C13-M4": lambda v: _pt(v, 2), "C13-M5": lambda v: _pt(v, -1), "C13-M6": lambda v: _pt(v, 1, denom=1)},
    "yx": {"key": lambda v: v["y1"] + I * v["x1"], "C13-M7": lambda v: v["x1"] - I * v["y1"], "C13-M8": lambda v: -v["x1"] + I * v["y1"],
           "C13-M9": lambda v: -v["y1"] - I * v["x1"]},
    "join": {"key": "perpendicular_bisected", "C13-M10": "parallel", "C13-M11": "bisected_only", "C13-M12": "through_origin"},
    "image2": {"key": lambda v: _pt(v, 2), "C13-M13": lambda v: _pt(v, 1), "C13-M14": lambda v: _pt(v, -2),
               "C13-M15": lambda v: _pt(v, 2, denom=sqrt(v["a"] ** 2 + v["b"] ** 2))},
}
MODELS = mixed_models("C13", TABLE, 15)
