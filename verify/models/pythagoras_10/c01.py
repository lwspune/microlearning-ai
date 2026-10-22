"""C01 Pythagoras theorem: answer models (the key, and one per misconception).

Every item names its shape in params["shape"]:
  hyp     legs a, b given; find the hypotenuse                          (inputs a, b)
  leg     hypotenuse c and one leg a given; find the other leg          (inputs c, a)
  equi    equilateral triangle of side s; find its height               (input s)
  ladder  ladder l placed on both sides of a street, tops at h1 and h2;
          find the width of the street (the two foot distances added)   (inputs l, h1, h2)
  walk    two people walk east and north at the same speed for t hours
          and end d apart; find the speed                               (inputs d, t)
  sqper   square with diagonal d; find its perimeter                    (input d)

The key places the right angle at the origin and measures with co-ordinates (a distance, or a
circle meeting an axis), never by quoting the theorem; each misconception applies its wrong rule
to the same right triangles.
"""
from sympy import Circle, Line, Point, sqrt, sympify

O = Point(0, 0)


def _hyp(a, b):
    """The distance between the ends of legs a and b laid along the axes."""
    return sympify(Point(a, 0).distance(Point(0, b)))


def _leg(c, a):
    """The other leg: where a circle of radius c about (a, 0) meets the y-axis, above O."""
    pts = Circle(Point(a, 0), c).intersection(Line(O, Point(0, 1)))
    ys = [p.y for p in pts if p.y > 0]
    if len(ys) != 1:
        raise ValueError("no right triangle with these sides")
    return sympify(ys[0])


def _shape(p, *allowed):
    if p["shape"] not in allowed:
        raise ValueError(f"not modelled for {p['shape']}")
    return p["shape"]


def _triangles(v, p, hyp, leg):
    """Applies a (wrong or right) hypotenuse rule and leg rule to the item's triangles."""
    s = p["shape"]
    if s == "hyp":
        return hyp(v["a"], v["b"])
    if s == "leg":
        return leg(v["c"], v["a"])
    if s == "equi":
        return leg(v["s"], v["s"] / 2)
    if s == "ladder":
        return leg(v["l"], v["h1"]) + leg(v["l"], v["h2"])
    raise ValueError(f"not modelled for {s}")


def key(v, p):
    s = p["shape"]
    if s == "walk":
        # Each walks x = speed * t: the ends (x, 0) and (0, x) are d apart; distance grows like x.
        x = v["d"] / _hyp(1, 1)
        return x / v["t"]
    if s == "sqper":
        return 4 * v["d"] / _hyp(1, 1)
    return _triangles(v, p, _hyp, _leg)


def m1(v, p):
    """Adds or subtracts the sides themselves, as if the squares and the root cancel."""
    s = p["shape"]
    if s == "walk":
        return v["d"] / 2 / v["t"]
    if s == "sqper":
        return 4 * (v["d"] / 2)
    return _triangles(v, p, lambda a, b: a + b, lambda c, a: c - a)


def m2(v, p):
    """Stops at the square: reports AC^2 (or x^2) as the length."""
    s = p["shape"]
    if s == "walk":
        return key(v, p) ** 2
    if s == "sqper":
        return 4 * (v["d"] ** 2 / 2)
    return _triangles(v, p, lambda a, b: a**2 + b**2, lambda c, a: c**2 - a**2)


def m3(v, p):
    """Takes the wrong side as the hypotenuse: the longer given side, or the unknown."""
    _shape(p, "hyp", "leg", "equi", "ladder")

    def hyp(a, b):
        lo, hi = sorted([a, b])
        if lo == hi:
            raise ValueError("equal legs: no longer side to mistake")
        return sqrt(hi**2 - lo**2)

    return _triangles(v, p, hyp, lambda c, a: sqrt(c**2 + a**2))


def m4(v, p):
    """Squares a number by doubling it: 9^2 read as 2 x 9."""
    _shape(p, "hyp", "leg", "equi", "ladder")
    return _triangles(v, p, lambda a, b: sqrt(2 * a + 2 * b), lambda c, a: sqrt(2 * c - 2 * a))


def m5(v, p):
    """Stops at the length found: the side, not the perimeter; the distance, not the speed;
    one foot distance, not the width of the street."""
    if _shape(p, "walk", "sqper", "ladder") == "ladder":
        return _leg(v["l"], v["h1"])
    return v["d"] / sqrt(2)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
