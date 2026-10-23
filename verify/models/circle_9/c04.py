"""C04 Circumcircle of a triangle: answer models (the key, and one per misconception).

params["kind"] picks the question:
  lines     which lines are drawn to locate the centre of the circumcircle (named).
  property  which statement about the circumcentre O of a scalene triangle must be true (named).
  where     where the circumcentre lies (named). params["tri"] says how the triangle is given:
              sas  v["p"], v["q"]: the two sides at the apex, v["ang"]: the apex angle (degrees);
              iso  v["s"]: the two equal sides, v["base"]: each base angle (degrees).
  radius    the circumradius of an equilateral triangle of side v["s"].
The key builds the triangle with coordinates and finds the point equidistant from its three vertices
(solving PA = PB = PC directly), then reads off where that point lies.
"""
from sympy import Matrix, Rational, Symbol, cos, pi, simplify, sin, solve, sqrt, sympify, symbols

PERP_BIS, ANGLE_BIS = Symbol("perpendicular_bisectors"), Symbol("angle_bisectors")
MEDIANS, ALTITUDES = Symbol("medians"), Symbol("altitudes")
EQ_VERTICES, EQ_SIDES = Symbol("equidistant_from_vertices"), Symbol("equidistant_from_sides")
AO_BISECTS, AO_PERP = Symbol("AO_bisects_BC"), Symbol("AO_perpendicular_to_BC")
INSIDE, OUTSIDE = Symbol("inside"), Symbol("outside")
OUT_ACROSS, OUT_BEYOND = Symbol("outside_across_longest_side"), Symbol("outside_beyond_obtuse_vertex")
MID_LONG, AT_RIGHT = Symbol("midpoint_of_longest_side"), Symbol("at_right_angle_vertex")

_X, _Y = symbols("X Y", real=True)


def _tri(v, p):
    """The three vertices as sympy points: apex (0, 0), then the ends of the other two sides."""
    t = p.get("tri")
    if t == "sas":
        a, b, ang = sympify(v["p"]), sympify(v["q"]), sympify(v["ang"])
    elif t == "iso":
        a = b = sympify(v["s"])
        ang = 180 - 2 * sympify(v["base"])
    elif t == "equi":
        a = b = sympify(v["s"])
        ang = sympify(60)
    else:
        raise ValueError("unknown triangle")
    th = ang * pi / 180
    return [Matrix([0, 0]), Matrix([a, 0]), Matrix([b * cos(th), b * sin(th)])]


def _d(P, Q):
    return simplify(sqrt((P[0] - Q[0]) ** 2 + (P[1] - Q[1]) ** 2))


def _circumcentre(T):
    """The point equidistant from all three vertices, from PA^2 = PB^2 = PC^2."""
    X = Matrix([_X, _Y])
    sq = [(X - V).dot(X - V) for V in T]
    s = solve([sq[0] - sq[1], sq[0] - sq[2]], [_X, _Y], dict=True)[0]
    return Matrix([simplify(s[_X]), simplify(s[_Y])])


def _orthocentre(T):
    """Where the altitudes meet: the point H with AH perpendicular to BC and BH perpendicular to CA."""
    A, B, C = T
    X = Matrix([_X, _Y])
    s = solve([(X - A).dot(C - B), (X - B).dot(A - C)], [_X, _Y], dict=True)[0]
    return Matrix([simplify(s[_X]), simplify(s[_Y])])


def _bary(T, X):
    """Barycentric coordinates of X with respect to the three vertices."""
    A, B, C = T
    l1, l2 = symbols("l1 l2")
    s = solve(list(A * (1 - l1 - l2) + B * l1 + C * l2 - X), [l1, l2], dict=True)[0]
    return [simplify(1 - s[l1] - s[l2]), simplify(s[l1]), simplify(s[l2])]


def _sides(T):
    """Side opposite each vertex."""
    return [_d(T[1], T[2]), _d(T[2], T[0]), _d(T[0], T[1])]


def _angle_kind(T):
    """("acute" | "right" | "obtuse", index of the largest angle's vertex)."""
    s = _sides(T)
    k = max(range(3), key=lambda i: s[i].evalf(30))
    o = [s[i] ** 2 for i in range(3) if i != k]
    d = simplify(s[k] ** 2 - o[0] - o[1])
    return ("right" if d == 0 else "obtuse" if d.evalf(30) > 0 else "acute"), k


def _where(T, X):
    """Where X lies, in the named answers' terms."""
    b = _bary(T, X)
    kind, k = _angle_kind(T)
    sg = [0 if c == 0 else (1 if c.evalf(30) > 0 else -1) for c in b]
    if all(x > 0 for x in sg):
        return INSIDE
    if sg.count(0) == 2:
        if kind == "right" and sg[k] != 0:     # X is the vertex of the right angle
            return AT_RIGHT
        raise ValueError("at a vertex that is not the right angle")
    if sg.count(0) == 1:
        j = sg.index(0)
        others = [b[i] for i in range(3) if i != j]
        if j == k and all(simplify(c - Rational(1, 2)) == 0 for c in others):
            return MID_LONG
        raise ValueError("on a side but not at the midpoint of the longest side")
    neg = [i for i in range(3) if sg[i] < 0]
    if neg == [k]:
        return OUT_ACROSS
    if len(neg) == 2 and k not in neg:
        return OUT_BEYOND
    raise ValueError("outside in an unexpected place")


def _dist_to_line(X, P, Q):
    n = Matrix([-(Q[1] - P[1]), Q[0] - P[0]])
    return simplify(abs((X - P).dot(n)) / sqrt(n.dot(n)))


def key(v, p):
    k = p["kind"]
    if k == "lines":
        return PERP_BIS
    if k == "property":
        return EQ_VERTICES
    T = _tri(v, p)
    O = _circumcentre(T)
    r = [_d(O, V) for V in T]
    assert simplify(r[0] - r[1]) == 0 and simplify(r[0] - r[2]) == 0
    if k == "where":
        return _where(T, O)
    if k == "radius":
        return r[0]
    raise ValueError("unknown kind")


def m1(v, p):
    """Mixes the circumcentre up with the incentre: angle bisectors, equal distances from the sides."""
    k = p["kind"]
    if k == "lines":
        return ANGLE_BIS
    if k == "property":
        return EQ_SIDES
    if k == "where":
        return INSIDE                       # the incentre is always inside
    if k == "radius":                       # radius taken as the centre's distance from a side
        T = _tri(v, p)
        O = _circumcentre(T)
        ds = [_dist_to_line(O, T[i], T[(i + 1) % 3]) for i in range(3)]
        if any(simplify(x - ds[0]) != 0 for x in ds):
            raise ValueError("the centre is not equally far from the sides")
        return ds[0]
    raise ValueError("unknown kind")


def m2(v, p):
    """Mixes the circumcentre up with the centroid: draws medians; so it is always inside."""
    k = p["kind"]
    if k == "lines":
        return MEDIANS
    if k == "property":
        return AO_BISECTS
    if k == "where":
        T = _tri(v, p)
        return _where(T, (T[0] + T[1] + T[2]) / 3)
    raise ValueError("no such answer")


def m3(v, p):
    """Draws altitudes (perpendiculars from the vertices) instead of perpendicular bisectors."""
    k = p["kind"]
    if k == "lines":
        return ALTITUDES
    if k == "property":
        return AO_PERP
    if k == "where":
        T = _tri(v, p)
        return _where(T, _orthocentre(T))
    raise ValueError("no such answer")


def m4(v, p):
    """Thinks the circumcentre is always the midpoint of the longest side (true only for a right triangle)."""
    T = _tri(v, p)
    kind, k = _angle_kind(T)
    if kind == "right":
        raise ValueError("for a right triangle this is the key")
    if p["kind"] == "where":
        return MID_LONG
    if p["kind"] == "radius":
        return _sides(T)[k] / 2
    raise ValueError("no such answer")


def m5(v, p):
    """Takes the whole median (the height, in an equilateral triangle) as the circumradius, not 2/3 of it."""
    if p["kind"] != "radius" or p.get("tri") != "equi":
        raise ValueError("only for an equilateral triangle's radius")
    T = _tri(v, p)
    return _d(T[2], (T[0] + T[1]) / 2)


def m6(v, p):
    """Treats a right triangle like an obtuse one: puts its circumcentre outside."""
    if p["kind"] != "where":
        raise ValueError("no such answer")
    kind, _ = _angle_kind(_tri(v, p))
    if kind != "right":
        raise ValueError("only for a right triangle")
    return OUTSIDE


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
