"""C01 Angles made by a transversal: answer models (the key, and one per misconception).

The figure: line l through P and line m through Q (not parallel), cut by the transversal n
through P and Q. Angles a, b, c, d sit at P and e, f, g, h at Q, in the order top-right,
top-left, bottom-left, bottom-right (anticlockwise from the right-hand arm of the line).

params["ask"]:
  "partner"  which angle makes a pair of kind params["rel"] with angle params["x"]
             (rel: corr | alt_int | alt_ext | interior); the answer is Symbol("ang_<letter>").
  "name"     what kind of pair angles params["x"] and params["y"] are; the answer is a
             Symbol naming the pair (corresponding, alternate_interior, ...).
inputs: s, the slope of the transversal; t, the slope of line m (l is horizontal).

The key places the lines with sympy and decides each angle's side of the transversal and
whether it lies between the lines from a point inside it; it never reads the letter table.
The misconception models apply their wrong rule to the letter table below.
"""
from sympy import Line, Point, Rational, Symbol, atan, cos, pi, sin

# letter -> (point, side of n, above or below its own line)
TABLE = {
    "a": ("P", "R", "up"), "b": ("P", "L", "up"), "c": ("P", "L", "dn"), "d": ("P", "R", "dn"),
    "e": ("Q", "R", "up"), "f": ("Q", "L", "up"), "g": ("Q", "L", "dn"), "h": ("Q", "R", "dn"),
}
NAMES = ("corresponding", "alternate_interior", "alternate_exterior", "interior")


def _ang(letter):
    return Symbol(f"ang_{letter}")


def _letter(pt, side, lev):
    return next(k for k, v in TABLE.items() if v == (pt, side, lev))


# ---------- key: from the geometry ----------

def _geometry(v):
    """Each angle's facts, read off a point inside it."""
    s, t = v["s"], v["t"]
    P = Point(Rational(3, 5), Rational(6, 5))
    Q = Point(P.x - Rational(6, 5), P.y - Rational(6, 5) * s)
    l = Line(P, P + Point(1, 0))
    m = Line(Q, Q + Point(1, t))
    n = Line(Q, P)
    up_n, dn_n = atan(s), atan(s) + pi
    facts = {}
    # arms anticlockwise from the line's right-hand arm: right, n up, left, n down
    for vertex, pt, line, other in ((P, "P", l, m), (Q, "Q", m, l)):
        right = atan(line.slope)
        arms = [right, up_n, right + pi, dn_n, right + 2 * pi]
        for i, letter in enumerate("abcd" if pt == "P" else "efgh"):
            mid = (arms[i] + arms[i + 1]) / 2
            inside = vertex + Point(cos(mid), sin(mid)) * Rational(1, 10)
            side = _side(n, Q, P, inside)
            between = _same_side(line, inside, other.p1) and _same_side(other, inside, vertex)
            above = _side(line, line.p1, line.p1 + Point(1, line.slope), inside) == "L"
            facts[letter] = dict(pt=pt, side=side, between=between, above=above)
    return facts


def _side(line, a, b, pt):
    """'L' or 'R': pt's side of the directed line a -> b (n is directed from Q up to P)."""
    cross = (b.x - a.x) * (pt.y - a.y) - (b.y - a.y) * (pt.x - a.x)
    return "L" if cross > 0 else "R"


def _same_side(line, p1, p2):
    a, b, c = line.coefficients
    return (a * p1.x + b * p1.y + c) * (a * p2.x + b * p2.y + c) > 0


def _true_name(F, x, y):
    fx, fy = F[x], F[y]
    if fx["pt"] == fy["pt"]:
        return None
    same = fx["side"] == fy["side"]
    if same and fx["above"] == fy["above"]:
        return "corresponding"
    if not same and fx["between"] and fy["between"]:
        return "alternate_interior"
    if not same and not fx["between"] and not fy["between"]:
        return "alternate_exterior"
    if same and fx["between"] and fy["between"]:
        return "interior"
    return None


def _rel_ok(rel, name):
    return name == {"corr": "corresponding", "alt_int": "alternate_interior",
                    "alt_ext": "alternate_exterior", "interior": "interior"}[rel]


def key(v, p):
    F = _geometry(v)
    if p["ask"] == "name":
        name = _true_name(F, p["x"], p["y"])
        if name is None:
            raise ValueError("not a named pair")
        return Symbol(name)
    found = [y for y in F if _rel_ok(p["rel"], _true_name(F, p["x"], y))]
    if len(found) != 1:
        raise ValueError(f"{len(found)} partners")
    return _ang(found[0])


# ---------- misconceptions: wrong rules on the letter table ----------

def _flip(side_or_lev):
    return {"L": "R", "R": "L", "up": "dn", "dn": "up"}[side_or_lev]


def _other(pt):
    return "Q" if pt == "P" else "P"


def _interior(letter):
    pt, _, lev = TABLE[letter]
    return (pt, lev) in (("P", "dn"), ("Q", "up"))


def _partner(x, rel):
    """The right partner, from the table (used by models that start from it)."""
    pt, side, lev = TABLE[x]
    if rel == "corr":
        return _letter(_other(pt), side, lev)
    if rel in ("alt_int", "alt_ext"):
        if _interior(x) != (rel == "alt_int"):
            raise ValueError("x has no such pair")
        return _letter(_other(pt), _flip(side), _flip(lev))
    if rel == "interior":
        if not _interior(x):
            raise ValueError("x is exterior")
        return _letter(_other(pt), side, _flip(lev))
    raise ValueError(rel)


def _table_name(x, y, side_reversed=False):
    (px, sx, lx), (py, sy, ly) = TABLE[x], TABLE[y]
    if px == py:
        return None
    same = (sx == sy) != side_reversed
    ix, iy = _interior(x), _interior(y)
    if same and ix != iy:
        return "corresponding" if not side_reversed or lx == ly else None
    if not same and ix and iy:
        return "alternate_interior"
    if not same and not ix and not iy:
        return "alternate_exterior"
    if same and ix and iy:
        return "interior"
    return None


def m1(v, p):
    """Side of the transversal reversed: alternate pairs on the same side, corresponding and
    interior pairs on opposite sides."""
    if p["ask"] == "name":
        name = _table_name(p["x"], p["y"], side_reversed=True)
        if name is None:
            raise ValueError("no name under M1")
        return Symbol(name)
    pt, side, lev = TABLE[_partner(p["x"], p["rel"])]
    return _ang(_letter(pt, _flip(side), lev))


def m2(v, p):
    """Swaps corresponding and alternate."""
    if p["ask"] == "name":
        name = _table_name(p["x"], p["y"])
        if name in ("alternate_interior", "alternate_exterior"):
            return Symbol("corresponding")
        raise ValueError("M2 only renames alternate pairs here")
    x, rel = p["x"], p["rel"]
    if rel == "corr":
        return _ang(_partner(x, "alt_int" if _interior(x) else "alt_ext"))
    if rel in ("alt_int", "alt_ext"):
        return _ang(_partner(x, "corr"))
    raise ValueError("M2 does not touch interior pairs")


def m3(v, p):
    """Looks for the partner at the same point: the right side and level, the wrong point."""
    if p["ask"] == "name" or p["rel"] == "corr":
        raise ValueError("M3 needs a partner other than x itself")
    x = p["x"]
    _, side, lev = TABLE[_partner(x, p["rel"])]
    return _ang(_letter(TABLE[x][0], side, lev))


def m4(v, p):
    """Misjudges inside / outside the two lines: alternate interior and exterior swapped; for a
    partner, the right point and side but the wrong one of the two angles there."""
    if p["ask"] == "name":
        name = _table_name(p["x"], p["y"])
        swap = {"alternate_interior": "alternate_exterior", "alternate_exterior": "alternate_interior"}
        if name not in swap:
            raise ValueError("M4 only swaps alternate pairs here")
        return Symbol(swap[name])
    pt, side, lev = TABLE[_partner(p["x"], p["rel"])]
    return _ang(_letter(pt, side, _flip(lev)))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
