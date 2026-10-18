"""C06 Triangles formed with a third line: answer models (the key, and one per misconception).

Inputs: a, c, b, the coefficients of x^2, xy, y^2 in the pair ax^2 + cxy + by^2 = 0 (so c = 2h),
and l, m, n for the third line lx + my = n (n != 0). The triangle is OAB: O the origin, A and B
where the pair meets the third line. params["ask"]:
  "area"      the area of triangle OAB
  "side"      the side of the triangle (equilateral triangles only)
  "perimeter" the perimeter of triangle OAB
"""
from sympy import Abs, Symbol, simplify, solve, sqrt

_x = Symbol("x", real=True)
_y = Symbol("y", real=True)


def _vertices(v):
    """A and B: the pair's equation solved together with the third line (straight from the definition)."""
    pair = v["a"] * _x**2 + v["c"] * _x * _y + v["b"] * _y**2
    line = v["l"] * _x + v["m"] * _y - v["n"]
    pts = [(simplify(s[_x]), simplify(s[_y])) for s in solve([pair, line], [_x, _y], dict=True)]
    pts = [p for p in pts if all(t.is_real for t in p)]
    if len(pts) != 2:
        raise ValueError(f"the pair does not cut the line at two points: {pts}")
    return pts


def _dist(p, q):
    return simplify(sqrt((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2))


def _sides(v):
    A, B = _vertices(v)
    O = (0, 0)
    return _dist(O, A), _dist(O, B), _dist(A, B)


def _equilateral(v):
    oa, ob, ab = _sides(v)
    return simplify(oa - ob) == 0 and simplify(oa - ab) == 0


def _p(v):
    """The altitude from O: the distance of the origin from lx + my = n."""
    return simplify(Abs(v["n"]) / sqrt(v["l"] ** 2 + v["m"] ** 2))


def _pair_at_60(v):
    """tan of the acute angle between the pair, 2 sqrt(h^2 - ab) / |a + b|, equals sqrt(3)."""
    a, h, b = v["a"], v["c"] / 2, v["b"]
    if a + b == 0:
        return False
    return simplify(2 * sqrt(h**2 - a * b) / Abs(a + b) - sqrt(3)) == 0


def _from_side(s, ask):
    """Area, side or perimeter of an equilateral triangle of side s."""
    if ask == "area":
        return simplify(sqrt(3) / 4 * s**2)
    if ask == "side":
        return simplify(s)
    if ask == "perimeter":
        return simplify(3 * s)
    raise ValueError(ask)


def key(v, p):
    """From the vertices: area = 1/2 |x1 y2 - x2 y1|; sides by the distance formula."""
    (x1, y1), (x2, y2) = _vertices(v)
    ask = p["ask"]
    if ask == "area":
        return simplify(Abs(x1 * y2 - x2 * y1) / 2)
    oa, ob, ab = _sides(v)
    if ask == "perimeter":
        return simplify(oa + ob + ab)
    if ask == "side":
        if not _equilateral(v):
            raise ValueError("not equilateral: no single side")
        return ab
    raise ValueError(ask)


def m1(v, p):
    """Calls the triangle equilateral because the pair meets at 60 degrees, and uses s = 2p / sqrt(3)."""
    if not _pair_at_60(v):
        raise ValueError("the pair is not at 60 degrees")
    return _from_side(2 * _p(v) / sqrt(3), p["ask"])


def m2(v, p):
    """Takes the altitude p from O as the side of the equilateral triangle."""
    if not _pair_at_60(v):
        raise ValueError("only when the student takes the triangle as equilateral")
    return _from_side(_p(v), p["ask"])


def m3(v, p):
    """Takes the distance of O from lx + my = n as |n| (does not divide by sqrt(l^2 + m^2))."""
    q = Abs(v["n"])
    if _equilateral(v):
        return _from_side(2 * q / sqrt(3), p["ask"])
    if p["ask"] != "area":
        raise ValueError("only the area uses the altitude")
    oa, ob, ab = _sides(v)
    return simplify(ab * q / 2)


def m4(v, p):
    """Area = 1/2 OA . OB: drops the sin O from 1/2 OA . OB sin O."""
    if p["ask"] != "area":
        raise ValueError("area only")
    oa, ob, ab = _sides(v)
    return simplify(oa * ob / 2)


def m5(v, p):
    """Area = base x height: forgets the 1/2."""
    if p["ask"] != "area":
        raise ValueError("area only")
    return simplify(2 * key(v, p))


def m6(v, p):
    """Multiplies by sin 60 instead of dividing: side = (sqrt(3)/2) p."""
    if not _equilateral(v):
        raise ValueError("equilateral only")
    return _from_side(sqrt(3) / 2 * _p(v), p["ask"])


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
