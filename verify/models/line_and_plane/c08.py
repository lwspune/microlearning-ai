"""C08 Foot of the perpendicular and intercepts: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  foot        inputs n (the coefficients (a, b, c)) and d, for the plane ax + by + cz = d: the foot of the
              perpendicular from O, a Tuple (x, y, z);
  plane       input M (a point): the plane whose foot of the perpendicular from O is M;
  intercepts  inputs n and d as for foot: the intercepts on the X-, Y- and Z-axes, a Tuple;
  eq          input A (the intercepts (a, b, c) on the three axes): the plane making them.

A plane answer is compared as a plane, whatever multiple its equation was written with: its value is the
Tuple (a, b, c, d) of ax + by + cz = d divided by the first nonzero of a, b, c. The option text shows the
equation in the book's form.

The key comes from the definitions: the foot is the point of the plane nearest O (minimise x^2 + y^2 + z^2
on the plane, by a Lagrange multiplier); the plane with foot M is the set of points X with
MX perpendicular to OM; an intercept is where the plane meets an axis (the other two coordinates 0);
the plane making intercepts a, b, c is the plane through (a, 0, 0), (0, b, 0), (0, 0, c).
"""
from sympy import Matrix, Tuple, solve, sqrt, symbols


def _v(t):
    return Matrix(list(t))


def _plane(n, d):
    """The plane n . r = d as a Tuple scaled so its first nonzero coefficient is 1."""
    k = next(c for c in n if c != 0)
    return Tuple(*[c / k for c in n], d / k)


def _ask(p, *allowed):
    if p["ask"] not in allowed:
        raise ValueError(f"not a {'/'.join(allowed)} question")


def _foot(n, d):
    """The correct foot d/|n|^2 n (used by models that slip elsewhere)."""
    return n * d / n.dot(n)


def key(v, p):
    if p["ask"] in ("foot", "intercepts"):
        n, d = _v(v["n"]), v["d"]
        x, y, z, mu = symbols("x y z mu", real=True)
        r = Matrix([x, y, z])
        if p["ask"] == "foot":
            eqs = list(2 * r - mu * n) + [n.dot(r) - d]
            (s,) = solve(eqs, [x, y, z, mu], dict=True)
            return Tuple(s[x], s[y], s[z])
        out = []
        for i, w in enumerate((x, y, z)):
            others = {u: 0 for j, u in enumerate((x, y, z)) if j != i}
            (val,) = solve(n.dot(r).subs(others) - d, w)
            out.append(val)
        return Tuple(*out)
    if p["ask"] == "plane":
        M = _v(v["M"])
        x, y, z = symbols("x y z", real=True)
        X = Matrix([x, y, z])
        e = (X - M).dot(M).expand()  # MX . OM = 0
        n = [e.coeff(w) for w in (x, y, z)]
        return _plane(n, -e.subs({x: 0, y: 0, z: 0}))
    a, b, c = v["A"]
    A, B, C = Matrix([a, 0, 0]), Matrix([0, b, 0]), Matrix([0, 0, c])
    n = (B - A).cross(C - A)
    return _plane(list(n), n.dot(A))


def m1(v, p):  # forgets the normal is not a unit vector: foot = p n with p = d/|n|; plane from foot r . m = |m|
    _ask(p, "foot", "plane")
    if p["ask"] == "foot":
        n, d = _v(v["n"]), v["d"]
        return Tuple(*(n * d / sqrt(n.dot(n))))
    M = _v(v["M"])
    return _plane(list(M), sqrt(M.dot(M)))


def m2(v, p):  # reads the coefficients (a, b, c) of the equation as the point asked for
    _ask(p, "foot", "intercepts")
    return Tuple(*v["n"])


def m3(v, p):  # mixes up the foot of the perpendicular with the intercepts (either way round)
    if p["ask"] == "foot":
        n, d = _v(v["n"]), v["d"]
        if 0 in n:
            raise ValueError("the plane is parallel to an axis")
        return Tuple(*[d / c for c in n])
    if p["ask"] == "intercepts":
        return Tuple(*_foot(_v(v["n"]), v["d"]))
    if p["ask"] == "plane":  # takes M's coordinates as the intercepts: x/m1 + y/m2 + z/m3 = 1
        M = list(v["M"])
        if 0 in M:
            raise ValueError("M has a zero coordinate")
        return _plane([1 / c for c in M], 1)
    A = _v(v["A"])  # takes the intercepts as the foot: r . A = |A|^2
    return _plane(list(A), A.dot(A))


def m4(v, p):  # believes the intercept form is ax + by + cz = 1 with a, b, c the intercepts
    _ask(p, "intercepts", "eq")
    if p["ask"] == "intercepts":
        return Tuple(*[c / v["d"] for c in v["n"]])
    return _plane(list(v["A"]), 1)


def m5(v, p):  # makes the plane with normal OM pass through O: r . m = 0
    _ask(p, "plane")
    return _plane(list(v["M"]), 0)


def m6(v, p):  # clears x/a + y/b + z/c = 1 by multiplying the left side only by abc: bcx + cay + abz = 1
    _ask(p, "eq")
    a, b, c = v["A"]
    return _plane([b * c, c * a, a * b], 1)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
