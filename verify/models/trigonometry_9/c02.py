"""C02 Ratios from two sides: answer models (the key, and one per misconception).

Every item gives two sides of a right triangle, named for the angle theta it asks about:
params["given"] is "legs" (inputs o, a: the sides opposite and adjacent to theta),
"opp_hyp" (inputs o, h) or "adj_hyp" (inputs a, h); a given ratio (sin theta = 7/25) is the
same as two sides (opposite 7, hypotenuse 25). params["find"] is "sin", "cos" or "tan" of theta.

The key finds theta itself with an inverse function and evaluates the ratio there, never by
Pythagoras. Each misconception finds the third side with its one wrong rule (or swaps the
sides), then forms the asked ratio from the definition.
"""
from sympy import acos, asin, atan, cos, simplify, sin, sqrt, tan


def key(v, p):
    g = p["given"]
    if g == "legs":
        t = atan(v["o"] / v["a"])
    elif g == "opp_hyp":
        t = asin(v["o"] / v["h"])
    else:
        t = acos(v["a"] / v["h"])
    return simplify({"sin": sin, "cos": cos, "tan": tan}[p["find"]](t))


def _sides(v, p, third):
    """(opposite, adjacent, hypotenuse), the missing one from third(x, y, case)."""
    g = p["given"]
    if g == "legs":
        return v["o"], v["a"], third(v["o"], v["a"], "add")
    if g == "opp_hyp":
        return v["o"], third(v["h"], v["o"], "sub"), v["h"]
    return third(v["h"], v["a"], "sub"), v["a"], v["h"]


def _ratio(o, a, h, p):
    return simplify({"sin": o / h, "cos": a / h, "tan": o / a}[p["find"]])


def _right(x, y, case):
    return sqrt(x**2 + y**2) if case == "add" else sqrt(x**2 - y**2)


def m1(v, p):
    """Treats both given sides as legs: adds the squares even when one is the hypotenuse."""
    if p["given"] == "legs":
        raise ValueError("both given sides are legs: adding is right")
    return _ratio(*_sides(v, p, lambda x, y, c: sqrt(x**2 + y**2)), p)


def m2(v, p):
    """Takes the longer given side as the hypotenuse: subtracts the squares even when both are legs."""
    if p["given"] != "legs":
        raise ValueError("the hypotenuse is given: subtracting is right")
    return _ratio(*_sides(v, p, lambda x, y, c: sqrt(abs(x**2 - y**2))), p)


def m3(v, p):
    """Swaps opposite and adjacent: reads the sides as seen from the other acute angle."""
    o, a, h = _sides(v, p, _right)
    return _ratio(a, o, h, p)


def m4(v, p):
    """Adds or subtracts the sides themselves, not their squares."""
    return _ratio(*_sides(v, p, lambda x, y, c: x + y if c == "add" else x - y), p)


def m5(v, p):
    """Stops at the square: uses the third side's square as the side."""
    return _ratio(*_sides(v, p, lambda x, y, c: x**2 + y**2 if c == "add" else x**2 - y**2), p)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
