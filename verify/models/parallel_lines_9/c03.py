"""C03 Tests for parallel lines: answer models (the key, and one per misconception).

The figure (as in C01): line l through P (upper) and line m through Q (lower), cut by the
transversal n through Q and P, n rising to the right. Angles a, b, c, d sit at P and e, f, g, h
at Q, in the order top-right, top-left, bottom-left, bottom-right.

params:
  p, q   the letters of the two marked angles (p at P, q at Q)
  ask    "decide": inputs u = angle p, w = angle q (degrees); the answer names the conclusion,
                   Symbol("<pair>_test"), Symbol("<pair>_property") or Symbol("not_parallel")
         "solve":  params ep, eq are the angles p and q as expressions in x (degrees); the answer
                   is the value of x that makes l parallel to m
  (M6 only) the answer is angle p at that x.

The key never uses the tests: it turns each marked angle into the direction of its line
(vertically opposite angles are equal, a linear pair adds to 180) and calls l and m parallel
when the two directions are the same. The misconception models name the pair from the letter
table and apply their wrong condition.
"""
from sympy import Eq, Symbol, solve

X = Symbol("x", real=True)
PHI = 70  # the transversal's direction, degrees; any value in (0, 180) gives the same answers

# letter -> (point, side of n, above or below its own line)
TABLE = {
    "a": ("P", "R", "up"), "b": ("P", "L", "up"), "c": ("P", "L", "dn"), "d": ("P", "R", "dn"),
    "e": ("Q", "R", "up"), "f": ("Q", "L", "up"), "g": ("Q", "L", "dn"), "h": ("Q", "R", "dn"),
}


# ---------- key: from the directions of the lines ----------

def _direction(letter, val):
    """The direction of the line through the angle's vertex, from the angle's measure.

    The angle from the line's right-hand arm up to n (a at P, e at Q) is PHI - direction.
    Angles a, c, e, g equal it (vertically opposite); b, d, f, h are its linear pair.
    """
    first = val if letter in "aceg" else 180 - val
    return PHI - first


def _parallel(p, q, u, w):
    return (_direction(p, u) - _direction(q, w)) % 180 == 0


def _inside(letter):
    pt, _, lev = TABLE[letter]
    return (pt, lev) in (("P", "dn"), ("Q", "up"))


def _name(p, q):
    """The pair's name from the letter table: corresponding, alternate or interior."""
    (pp, sp, lp), (pq, sq, lq) = TABLE[p], TABLE[q]
    if pp == pq:
        raise ValueError("angles at one point")
    if sp == sq and lp == lq:
        return "corresponding"
    if sp != sq and _inside(p) and _inside(q):
        return "alternate"
    if sp == sq and _inside(p) and _inside(q):
        return "interior"
    raise ValueError("not a pair the tests use")


def _check_angles(p, ep, eq, x):
    vals = [ep.subs(X, x), eq.subs(X, x)]
    if not all(0 < v < 180 for v in vals):
        raise ValueError("an angle out of range")
    return x


def _one(sols):
    if len(sols) != 1:
        raise ValueError(f"{len(sols)} solutions")
    return sols[0]


def _exprs(p):
    from sympy import sympify
    return sympify(p["ep"], locals={"x": X}), sympify(p["eq"], locals={"x": X})


def key(v, p):
    a, b = p["p"], p["q"]
    if p["ask"] == "decide":
        if not _parallel(a, b, v["u"], v["w"]):
            return Symbol("not_parallel")
        return Symbol(_name(a, b) + "_test")
    ep, eq = _exprs(p)
    x = _one(solve(Eq(_direction(a, ep), _direction(b, eq)), X))
    return _check_angles(a, ep, eq, x)


# ---------- misconceptions: a wrong condition on the named pair ----------

RIGHT = {"corresponding": "eq", "alternate": "eq", "interior": "sum180"}


def _holds(rule, u, w):
    return {"eq": u == w, "sum180": u + w == 180, "sum90": u + w == 90}[rule]


def _equation(rule, ep, eq):
    return {"eq": Eq(ep, eq), "sum180": Eq(ep + eq, 180), "sum90": Eq(ep + eq, 90)}[rule]


def _apply(v, p, rules, rename=None):
    """Name the pair, apply the student's rule for that name, answer in the item's form."""
    a, b = p["p"], p["q"]
    name = _name(a, b)
    if rename:
        name = rename(name)
    rule = rules.get(name, RIGHT[name])
    if p["ask"] == "decide":
        return Symbol(name + "_test") if _holds(rule, v["u"], v["w"]) else Symbol("not_parallel")
    ep, eq = _exprs(p)
    return _check_angles(a, ep, eq, _one(solve(_equation(rule, ep, eq), X)))


def _only(names):
    def check(p):
        if _name(p["p"], p["q"]) not in names:
            raise ValueError("the mistake does not touch this pair")
    return check


def m1(v, p):
    """Thinks the interior angles test needs the two angles equal."""
    _only({"interior"})(p)
    return _apply(v, p, {"interior": "eq"})


def m2(v, p):
    """Thinks the corresponding and alternate angles tests need the angles to add to 180."""
    _only({"corresponding", "alternate"})(p)
    return _apply(v, p, {"corresponding": "sum180", "alternate": "sum180"})


def m3(v, p):
    """Takes supplementary as adding to 90: interior angles must add to 90."""
    _only({"interior"})(p)
    return _apply(v, p, {"interior": "sum90"})


def m4(v, p):
    """Mixes up corresponding and alternate angles, so names the wrong test."""
    _only({"corresponding", "alternate"})(p)
    if p["ask"] != "decide":
        raise ValueError("both need equal angles: same value")
    swap = {"corresponding": "alternate", "alternate": "corresponding"}
    return _apply(v, p, {}, rename=lambda n: swap[n])


def m5(v, p):
    """Quotes the property of parallel lines (which assumes l || m) as the reason for l || m."""
    if p["ask"] != "decide":
        raise ValueError("decide items only")
    name = _name(p["p"], p["q"])
    if not _holds(RIGHT[name], v["u"], v["w"]):
        raise ValueError("the lines are not parallel")
    return Symbol(name + "_property")


def m6(v, p):
    """Solves correctly but gives the angle's measure instead of the value of x."""
    if p["ask"] != "solve":
        raise ValueError("solve items only")
    ep, _ = _exprs(p)
    return ep.subs(X, key(v, p))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
