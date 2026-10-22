"""C07 Centroid of a triangle: answer models (the key, and one per misconception).

Every item gives three points (x1, y1), (x2, y2), (x3, y3) and the centroid (gx, gy).
- Find the centroid (params mode absent): the vertices are numbers and gx, gy are "0" (unused).
- Find an unknown: some vertex co-ordinates are symbols (h, k, or p, q for an unknown vertex);
  each model solves its own centroid equation for them. The answer is Tuple of the unknowns in
  the order the params "unknowns" lists them (e.g. "p,q" or "h,k").
- params mid="1": the three points are the midpoints D, E, F of the sides; the answer is the
  centroid of the triangle.
params ask="x" or ask="y" returns one co-ordinate of the answer.
"""
from sympy import Rational, Symbol, Tuple, solve, sympify


def _ins(v):
    return [(sympify(v[f"x{i}"]), sympify(v[f"y{i}"])) for i in (1, 2, 3)], (sympify(v["gx"]), sympify(v["gy"]))


def _unknowns(p):
    u = p.get("unknowns")
    return [Symbol(s) for s in u.split(",")] if u else []


def _out(vals, p):
    ask = p.get("ask")
    if ask == "x":
        return vals[0]
    if ask == "y":
        return vals[1]
    return Tuple(*vals)


def _apply(rule, v, p):
    """rule(three points' co-ordinates on one axis) -> the centroid co-ordinate that model believes in."""
    pts, g = _ins(v)
    unk = _unknowns(p)
    if not unk:
        return _out([rule([q[i] for q in pts]) for i in (0, 1)], p)
    sol = {}
    for i in (0, 1):
        eq = rule([q[i] for q in pts]) - g[i]
        free = [s for s in unk if eq.has(s)]
        for s in free:
            r = solve(eq, s)
            if len(r) != 1:
                raise ValueError("no single solution")
            sol[s] = r[0]
    return _out([sol[s] for s in unk], p)


def _vertices(v, p):
    pts, _ = _ins(v)
    if p.get("mid") == "1":
        d, e, f = pts  # midpoints of BC, CA, AB
        a = tuple(e[i] + f[i] - d[i] for i in (0, 1))
        b = tuple(d[i] + f[i] - e[i] for i in (0, 1))
        c = tuple(d[i] + e[i] - f[i] for i in (0, 1))
        return [a, b, c]
    return pts


def key(v, p):
    """From the definition: G divides the median from the first vertex in the ratio 2 : 1."""
    def median(c):
        a, b, cc = c
        mid = (b + cc) / 2
        return a + Rational(2, 3) * (mid - a)

    if p.get("mid") == "1":
        verts = _vertices(v, p)
        return _out([median([q[i] for q in verts]) for i in (0, 1)], p)
    return _apply(median, v, p)


def m1(v, p):
    """Divides the sum of the three co-ordinates by 2, as in the midpoint formula."""
    return _apply(lambda c: (c[0] + c[1] + c[2]) / 2, v, p)


def m2(v, p):
    """Adds the three co-ordinates and forgets to divide by 3."""
    return _apply(lambda c: c[0] + c[1] + c[2], v, p)


def m3(v, p):
    """Takes the centroid as the midpoint of the median from the first vertex."""
    if p.get("mid") == "1":
        raise ValueError("the given points are not vertices")
    return _apply(lambda c: (c[0] + (c[1] + c[2]) / 2) / 2, v, p)


def m4(v, p):
    """Finds an unknown co-ordinate as the average of the centroid's and the two known ones."""
    unk = _unknowns(p)
    if not unk:
        raise ValueError("only for an unknown vertex")
    pts, g = _ins(v)
    sol = {}
    for i in (0, 1):
        c = [q[i] for q in pts]
        free = [s for s in unk if any(t.has(s) for t in c)]
        for s in free:
            known = [t for t in c if not t.has(s)]
            sol[s] = (g[i] + sum(known)) / 3
    return _out([sol[s] for s in unk], p)


def m5(v, p):
    """From 3G = (known sum) + unknown, moves the known co-ordinates across without changing sign."""
    unk = _unknowns(p)
    if not unk:
        raise ValueError("only for an unknown vertex")
    pts, g = _ins(v)
    sol = {}
    for i in (0, 1):
        c = [q[i] for q in pts]
        free = [s for s in unk if any(t.has(s) for t in c)]
        for s in free:
            known = [t for t in c if not t.has(s)]
            sol[s] = 3 * g[i] + sum(known)
    return _out([sol[s] for s in unk], p)


def m6(v, p):
    """Given the midpoints of the sides, doubles their centroid because the triangle is twice as big."""
    if p.get("mid") != "1":
        raise ValueError("only for midpoints of the sides")
    pts, _ = _ins(v)
    return _out([2 * sum(q[i] for q in pts) / 3 for i in (0, 1)], p)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
