"""C15 Normals to a parabola and an ellipse. The normal is perpendicular to the tangent at the point. On y^2 = 4ax the
normal with slope m is y = mx - 2am - am^3, meeting the curve at (am^2, -2am); up to three normals pass through a point.
On x^2/a^2 + y^2/b^2 = 1 the normal at (x1, y1) is a^2 x/x1 - b^2 y/y1 = a^2 - b^2.
params["q"]:
  "axis": inputs a, t (normal to y^2 = 4ax at (at^2, 2at) meets the x-axis; a point x + I*0). "count": named.
  "ellipse": inputs A2, B2 (a^2, b^2), x1 (x-intercept of the normal). "slope": inputs a, m (the intercept c).
  "foot": inputs a, m (the point where the normal of slope m meets y^2 = 4ax).
M1 uses the tangent; M2 flips the slope's sign; M3 uses the tangent's slope; M4 says two; M5 one; M6 four; M7 adds
b^2; M8 gives the tangent's intercept; M9 forgets to divide by a^2; M10 gives the tangent's intercept; M11 flips the
sign; M12 drops the am^3 term; M13 flips the y sign; M14 gives the point of contact of the tangent; M15 drops the 2."""
from sympy import I

from ._mix import mixed_models


def _axis(v, slope):
    a, t = v["a"], v["t"]
    x1, y1 = a * t ** 2, 2 * a * t
    return x1 - y1 / slope + 0 * I


TABLE = {
    "axis": {"key": lambda v: _axis(v, -v["t"]), "C15-M1": lambda v: _axis(v, 1 / v["t"]), "C15-M2": lambda v: _axis(v, v["t"]),
             "C15-M3": lambda v: _axis(v, -1 / v["t"])},
    "count": {"key": "three_normals", "C15-M4": "two_normals", "C15-M5": "one_normal", "C15-M6": "four_normals"},
    "ellipse": {"key": lambda v: (v["A2"] - v["B2"]) * v["x1"] / v["A2"], "C15-M7": lambda v: (v["A2"] + v["B2"]) * v["x1"] / v["A2"],
                "C15-M8": lambda v: v["A2"] / v["x1"], "C15-M9": lambda v: (v["A2"] - v["B2"]) * v["x1"]},
    "slope": {"key": lambda v: -2 * v["a"] * v["m"] - v["a"] * v["m"] ** 3, "C15-M10": lambda v: v["a"] / v["m"],
              "C15-M11": lambda v: 2 * v["a"] * v["m"] + v["a"] * v["m"] ** 3, "C15-M12": lambda v: -2 * v["a"] * v["m"]},
    "foot": {"key": lambda v: v["a"] * v["m"] ** 2 - 2 * I * v["a"] * v["m"], "C15-M13": lambda v: v["a"] * v["m"] ** 2 + 2 * I * v["a"] * v["m"],
             "C15-M14": lambda v: v["a"] / v["m"] ** 2 + 2 * I * v["a"] / v["m"], "C15-M15": lambda v: v["a"] * v["m"] ** 2 - I * v["a"] * v["m"]},
}
MODELS = mixed_models("C15", TABLE, 15)
