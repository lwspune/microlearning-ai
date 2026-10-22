"""C07 Areas of similar triangles: answer models (the key, and one per misconception).

Triangle 1 is the one asked about, triangle 2 the one given; they are similar.
params["ask"] picks the question:
  area_ratio : s1, s2 = corresponding sides (or altitudes) -> A1 / A2
  side       : A1, A2 = areas (or their ratio), b2 = a side of triangle 2 -> the corresponding side of triangle 1
  area       : s1, s2 = corresponding sides, A2 = area of triangle 2 -> A1
  part_ratio : s1 = side of the small triangle cut off by a parallel, s2 = the big triangle's side
               -> A(small triangle) / A(remaining trapezium)
  equal_cut  : r = A(small triangle) / A(big triangle), the cut parallel to the base
               -> (piece of the side next to the base) / (whole side)
"""
from sympy import sqrt


def _ask(p):
    return p.get("ask")


def key(v, p):
    a = _ask(p)
    if a == "area_ratio":
        return (v["s1"] / v["s2"]) ** 2
    if a == "side":
        return v["b2"] * sqrt(v["A1"] / v["A2"])
    if a == "area":
        return v["A2"] * (v["s1"] / v["s2"]) ** 2
    if a == "part_ratio":
        return v["s1"] ** 2 / (v["s2"] ** 2 - v["s1"] ** 2)
    if a == "equal_cut":
        return 1 - sqrt(v["r"])
    raise ValueError(f"unknown ask {a}")


def m1(v, p):
    """Ratio of areas taken equal to the ratio of sides (no square, no square root)."""
    a = _ask(p)
    if a == "area_ratio":
        return v["s1"] / v["s2"]
    if a == "side":
        return v["b2"] * v["A1"] / v["A2"]
    if a == "area":
        return v["A2"] * v["s1"] / v["s2"]
    if a == "part_ratio":
        return v["s1"] / (v["s2"] - v["s1"])
    if a == "equal_cut":
        return 1 - v["r"]
    raise ValueError(f"unknown ask {a}")


def m2(v, p):
    """Square and square root swapped: square root of the side ratio for areas, square of the area ratio for sides."""
    a = _ask(p)
    if a == "area_ratio":
        return sqrt(v["s1"] / v["s2"])
    if a == "side":
        return v["b2"] * (v["A1"] / v["A2"]) ** 2
    if a == "area":
        return v["A2"] * sqrt(v["s1"] / v["s2"])
    if a == "part_ratio":
        raise ValueError("not used")
    if a == "equal_cut":
        return 1 - v["r"] ** 2
    raise ValueError(f"unknown ask {a}")


def m3(v, p):
    """Ratio turned upside down: the given value matched with the other triangle."""
    a = _ask(p)
    if a == "area_ratio":
        return (v["s2"] / v["s1"]) ** 2
    if a == "side":
        return v["b2"] * sqrt(v["A2"] / v["A1"])
    if a == "area":
        return v["A2"] * (v["s2"] / v["s1"]) ** 2
    if a == "part_ratio":
        return (v["s2"] ** 2 - v["s1"] ** 2) / v["s1"] ** 2
    raise ValueError("does not apply")


def m4(v, p):
    """The whole triangle used for the part: big triangle in place of the trapezium, the small piece of the side in place of the other piece."""
    a = _ask(p)
    if a == "part_ratio":
        return v["s1"] ** 2 / v["s2"] ** 2
    if a == "equal_cut":
        return sqrt(v["r"])
    raise ValueError("only for a triangle cut by a parallel")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4}
