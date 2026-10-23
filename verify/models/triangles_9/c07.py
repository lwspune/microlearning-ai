"""C07 Greater side, greater angle: answer models (the key, and one per misconception).

Named answers: a side is Symbol("seg_XY") with its letters in the order the triangle is named
(in triangle FAN: seg_FA, seg_AN, seg_FN); an angle is Symbol("ang_X").

params["tri"] is the triangle's name, e.g. "FAN". params["ask"]:
  "angles"  inputs g1, g2: the angles (degrees) at vertices params["given"][0] and [1]; the third
            is not printed. Answer Tuple(greatest side, smallest side), or Tuple(smallest,
            greatest) when params["order"] == "sg".
  "ext"     inputs g: the angle at vertex params["at"]; e: the exterior angle at vertex
            params["ex"]. Answer as for "angles".
  "sides"   inputs s1, s2: the sides params["given"], e.g. "PQ,QR"; per: the
            perimeter. Answer Tuple(greatest angle, smallest angle).
  "range"   inputs a, b: two sides. Answer the interval the third side lies in.
  "count"   inputs a, b: two sides. Answer how many whole-number lengths the third side can have.

The key never uses the theorems being taught: it builds the triangle (law of sines from the
angles, law of cosines from the sides) and compares the real lengths and angles; the third side's
range comes from c^2 = a^2 + b^2 - 2ab cos C with cos C strictly between -1 and 1.
"""
from sympy import Abs, Interval, Integer, Symbol, Tuple, acos, ceiling, floor, pi, sin, sqrt

STRAIGHT = Integer(180)


# ---------- naming ----------
def _side(tri, x, y):
    """The side joining vertices x and y, its letters in the order of the triangle's name."""
    a, b = sorted((x, y), key=tri.index)
    return Symbol("seg_" + a + b)


def _ang(x):
    return Symbol("ang_" + x)


def _opp_side(tri, x):
    """The side opposite vertex x: the one not touching x."""
    y, z = [t for t in tri if t != x]
    return _side(tri, y, z)


def _opp_vertex(tri, side):
    return next(t for t in tri if t not in side)


def _next(tri, x):
    return tri[(tri.index(x) + 1) % 3]


def _adj_side(tri, x):
    """M2: the side that starts at x, going round the triangle in the order of its name."""
    return _side(tri, x, _next(tri, x))


def _adj_vertex(tri, side):
    """M2, sides to angles: the vertex a side starts from, going round in the name's order."""
    x, y = side
    return x if _next(tri, x) == y else y


# ---------- the triangle's real measures ----------
def _angles(v, p, printed=False):
    """vertex -> angle in degrees. printed=True takes the printed numbers as they stand (M3)."""
    tri = p["tri"]
    if p["ask"] == "angles":
        g = dict(zip(p["given"], (v["g1"], v["g2"])))
        if printed:
            return g                                         # the third angle is never found
    else:                                                    # "ext"
        interior = v["e"] if printed else STRAIGHT - v["e"]  # linear pair, or the exterior as it stands
        g = {p["at"]: v["g"], p["ex"]: interior}
    third = next(t for t in tri if t not in g)
    g[third] = STRAIGHT - sum(g.values())
    if g[third] <= 0:
        raise ValueError("not a triangle")
    return g


def _sides(v, p, printed=False):
    """side name (two letters, as printed or the missing one) -> length."""
    tri, given = p["tri"], p["given"].split(",")
    s = dict(zip(given, (v["s1"], v["s2"])))
    if printed:
        return s
    pairs = [(a, b) for i, a in enumerate(tri) for b in tri[i + 1:]]
    missing = next(a + b for a, b in pairs if not ({a, b} <= set(given[0]) or {a, b} <= set(given[1])))
    s[missing] = v["per"] - v["s1"] - v["s2"]
    return s


def _pair(p, greatest, smallest):
    return Tuple(smallest, greatest) if p.get("order") == "sg" else Tuple(greatest, smallest)


def _extremes(d):
    """(key of the greatest value, key of the smallest value); ties are not allowed."""
    vals = sorted(d.values())
    if len(set(vals)) != len(vals):
        raise ValueError("tie")
    return max(d, key=lambda k: d[k]), min(d, key=lambda k: d[k])


# ---------- the key ----------
def _real_sides(tri, ang):
    """Law of sines with circumdiameter 1: the side opposite x is sin(angle x)."""
    return {_opp_side(tri, x): sin(ang[x] * pi / 180) for x in tri}


def _real_angles(tri, s):
    """Law of cosines: the angle at x from the three sides."""
    by = {frozenset(k): val for k, val in s.items()}
    out = {}
    for x in tri:
        y, z = [t for t in tri if t != x]
        a = by[frozenset((y, z))]
        b, c = by[frozenset((x, y))], by[frozenset((x, z))]
        if not (Abs(b - c) < a < b + c):
            raise ValueError("not a triangle")
        out[_ang(x)] = acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)).evalf(30)
    return out


def _whole_or_range(p, iv):
    if p["ask"] == "range":
        return iv
    if p["ask"] == "count":
        return _whole_in(iv)
    raise ValueError("needs a third side")


def _third_range(v):
    a, b = v["a"], v["b"]
    lo, hi = sqrt(a ** 2 + b ** 2 - 2 * a * b), sqrt(a ** 2 + b ** 2 + 2 * a * b)   # cos C -> 1, cos C -> -1
    return Interval.open(lo, hi)


def _whole_in(iv):
    lo = floor(iv.start) + 1 if iv.left_open else ceiling(iv.start)
    hi = ceiling(iv.end) - 1 if iv.right_open else floor(iv.end)
    lo = max(lo, 1)
    return Integer(max(hi - lo + 1, 0))


def key(v, p):
    ask, tri = p["ask"], p.get("tri")
    if ask in ("angles", "ext"):
        real = _real_sides(tri, _angles(v, p))
        g, s = _extremes({k: val.evalf(30) for k, val in real.items()})
        return _pair(p, g, s)
    if ask == "sides":
        return Tuple(*_extremes(_real_angles(tri, _sides(v, p))))
    if ask == "range":
        return _third_range(v)
    if ask == "count":
        return _whole_in(_third_range(v))
    raise ValueError(ask)


# ---------- misconceptions ----------
def m1(v, p):
    """Reversal: the greater side faces the smaller angle (and the greater angle the smaller side)."""
    ask, tri = p["ask"], p.get("tri")
    if ask in ("angles", "ext"):
        g, s = _extremes(_angles(v, p))
        return _pair(p, _opp_side(tri, s), _opp_side(tri, g))
    if ask == "sides":
        g, s = _extremes(_sides(v, p))
        return Tuple(_ang(_opp_vertex(tri, s)), _ang(_opp_vertex(tri, g)))
    raise ValueError("M1 needs a side-angle comparison")


def m2(v, p):
    """Pairs an angle with a side through its vertex (the one starting there) instead of the opposite side."""
    ask, tri = p["ask"], p.get("tri")
    if ask in ("angles", "ext"):
        g, s = _extremes(_angles(v, p))
        return _pair(p, _adj_side(tri, g), _adj_side(tri, s))
    if ask == "sides":
        g, s = _extremes(_sides(v, p))
        return Tuple(_ang(_adj_vertex(tri, g)), _ang(_adj_vertex(tri, s)))
    raise ValueError("M2 needs a side-angle comparison")


def m3(v, p):
    """Compares the printed measures as they stand, without first finding the missing one."""
    ask, tri = p["ask"], p.get("tri")
    if ask in ("angles", "ext"):
        g, s = _extremes(_angles(v, p, printed=True))
        return _pair(p, _opp_side(tri, g), _opp_side(tri, s))
    if ask == "sides":
        g, s = _extremes(_sides(v, p, printed=True))
        return Tuple(_ang(_opp_vertex(tri, g)), _ang(_opp_vertex(tri, s)))
    raise ValueError("M3 needs a missing measure")


def m4(v, p):
    """Lets the sum of two sides equal the third: a flat 'triangle' counts."""
    if p["ask"] not in ("range", "count"):
        raise ValueError("M4 needs a third side")
    return _whole_or_range(p, Interval(Abs(v["a"] - v["b"]), v["a"] + v["b"]))


def m5(v, p):
    """Checks only that the third side is less than the sum; forgets it must exceed the difference."""
    if p["ask"] not in ("range", "count"):
        raise ValueError("M5 needs a third side")
    return _whole_or_range(p, Interval.open(0, v["a"] + v["b"]))


def m6(v, p):
    """Thinks the third side must lie between the two given sides."""
    if p["ask"] not in ("range", "count"):
        raise ValueError("M6 needs a third side")
    a, b = v["a"], v["b"]
    return _whole_or_range(p, Interval.open(min(a, b), max(a, b)))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
