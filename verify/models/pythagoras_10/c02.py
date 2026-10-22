"""C02 The converse and Pythagorean triplets: answer models (the key, and one per misconception).

Every item names its shape in params["shape"]:
  angle   a triangle params["tri"] (e.g. "ABC") with sides s1, s2, s3 named params["names"]
          (e.g. ["AB", "BC", "AC"], in the order the stem gives them); the answer is the vertex
          whose angle is 90 degrees, Symbol("angle_B"), or Symbol("not_right")
  choose  four candidate triples params["options"] (e.g. ["5,12,13", "2,3,4", ...]); the answer
          is the Tuple a rule accepts (it must accept exactly one)
  missing a triplet (a, b, box) with the box the largest number (inputs a, b); the answer is the box

The key decides "right angle?" with co-ordinates: the vertex at O, one side along the x-axis, the
third vertex where two circles meet, and the angle is right when that vertex lies on the y-axis.
It never compares squares of sides. Each misconception applies its own wrong test.
"""
from sympy import Circle, Integer, Point, Symbol, Tuple, sqrt, sympify

NOT_RIGHT = Symbol("not_right")


def _angle(v):
    return Symbol("angle_" + v)


def _right_at(x, y, z):
    """Is the angle between sides x and y (z opposite it) a right angle? Co-ordinates only."""
    P = Point(x, 0)
    pts = Circle(Point(0, 0), y).intersection(Circle(P, z))
    if not pts:
        raise ValueError("these lengths make no triangle")
    return any(sympify(q.x) == 0 for q in pts)


def _sides(v, p):
    """[(name, length), ...] in the stem's order."""
    return list(zip(p["names"], [sympify(v[k]) for k in ("s1", "s2", "s3")]))


def _opposite(p, side):
    """The vertex opposite a side: the triangle's letter not in the side's name."""
    (rest,) = [c for c in p["tri"] if c not in side]
    return rest


def _triples(p):
    return [tuple(Integer(n) for n in s.split(",")) for s in p["options"]]


def _choose(p, test):
    ok = [t for t in _triples(p) if test(*sorted(t))]
    if len(ok) != 1:
        raise ValueError(f"the rule accepts {len(ok)} of the options")
    return Tuple(*ok[0])


def _is_triplet(a, b, c):
    """The three whole numbers make a right-angled triangle (some angle is right)."""
    if a + b <= c:
        return False
    return _right_at(a, b, c) or _right_at(b, c, a) or _right_at(c, a, b)


def key(v, p):
    s = p["shape"]
    if s == "angle":
        sides = _sides(v, p)
        for i, (name, z) in enumerate(sides):
            x, y = [L for j, (_, L) in enumerate(sides) if j != i]
            if _right_at(x, y, z):
                return _angle(_opposite(p, name))
        return NOT_RIGHT
    if s == "choose":
        return _choose(p, _is_triplet)
    if s == "missing":
        # The box is the distance between the ends of legs a and b laid along the axes.
        return sympify(Point(v["a"], 0).distance(Point(0, v["b"])))
    raise ValueError(f"not modelled for {s}")


def _shape(p, *allowed):
    if p["shape"] not in allowed:
        raise ValueError(f"not modelled for {p['shape']}")
    return p["shape"]


def m1(v, p):
    """Takes the side given last as the hypotenuse, whatever its length, and tests only that."""
    _shape(p, "angle")
    sides = _sides(v, p)
    (_, x), (_, y), (name, z) = sides
    if x**2 + y**2 == z**2:
        return _angle(_opposite(p, name))
    return NOT_RIGHT


def m2(v, p):
    """Adds the sides themselves: tests a + b = c, not a^2 + b^2 = c^2."""
    s = _shape(p, "angle", "choose", "missing")
    if s == "angle":
        a, b, c = sorted(L for _, L in _sides(v, p))
        return NOT_RIGHT if a + b != c else _angle("degenerate")
    if s == "choose":
        return _choose(p, lambda a, b, c: a + b == c)
    return v["a"] + v["b"]


def m3(v, p):
    """Squares the two smaller numbers but not the largest: tests a^2 + b^2 = c."""
    s = _shape(p, "choose", "missing")
    if s == "choose":
        return _choose(p, lambda a, b, c: a**2 + b**2 == c)
    return v["a"] ** 2 + v["b"] ** 2


def m4(v, p):
    """Thinks three consecutive numbers make a triplet, because 3, 4, 5 do."""
    s = _shape(p, "choose", "missing")
    if s == "choose":
        return _choose(p, lambda a, b, c: b == a + 1 and c == b + 1)
    a, b = sorted([v["a"], v["b"]])
    if b != a + 1:
        raise ValueError("the given numbers are not consecutive")
    return b + 1


def m5(v, p):
    """Names the right angle with the hypotenuse's first letter (PQ longest -> angle P): puts it
    on the hypotenuse, not opposite it."""
    _shape(p, "angle")
    name, _ = max(_sides(v, p), key=lambda s: s[1])
    return _angle(name[0])


def m6(v, p):
    """Puts the right angle opposite the shortest side, not the longest."""
    _shape(p, "angle")
    name, _ = min(_sides(v, p), key=lambda s: s[1])
    return _angle(_opposite(p, name))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
