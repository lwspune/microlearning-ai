"""C02 A sphere from conditions: answer models (the key, and one per misconception).

A sphere is written x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0 (inputs u, v, w, d); a plane is
lx + my + nz + k = 0 (inputs l, m, n, k). p["ask"] picks the question type:
  tan_diam  a sphere concentric with (u, v, w, d) touches the plane -> its diameter
  tan_k     the sphere (u, v, w) with unknown constant d touches the plane -> d
  section   the plane cuts the sphere -> the radius of the circle of section; the sphere is
            (u, v, w, d), or, when inputs px, py, pz are given, the sphere concentric with
            (u, v, w) through the point P = (px, py, pz)
  centroid  the sphere (u, v, w) through the origin (d = 0) meets the axes again at A, B, C
            -> the centroid of triangle ABC, as a Tuple
  from_g    a sphere through the origin meets the axes at A, B, C whose centroid is
            (gx, gy, gz) -> the sphere's equation, as the expression on the left of "= 0"
"""
from sympy import Abs, Matrix, Rational, Symbol, Tuple, solve, sqrt

X, Y, Z = Symbol("x", real=True), Symbol("y", real=True), Symbol("z")


def _ask(p):
    return p["ask"]


def _centre(v):
    """From the definition: the point whose distance to every point of the sphere is the same,
    found by completing the square, (x + u)^2 + ... ; so the centre is (-u, -v, -w)."""
    return Matrix([-v["u"], -v["v"], -v["w"]])


def _wrong_centre(v):
    """M1's centre: the coefficients' halves with their signs, (u, v, w)."""
    return Matrix([v["u"], v["v"], v["w"]])


def _normal(v):
    return Matrix([v["l"], v["m"], v["n"]])


def _dist(c, v):
    """Perpendicular distance from c to the plane: project c - (a point of the plane) on the unit normal."""
    nrm = _normal(v)
    # A point on the plane: take the coordinate with a nonzero coefficient.
    i = next(j for j in range(3) if nrm[j] != 0)
    q = Matrix([0, 0, 0])
    q[i] = -v["k"] / nrm[i]
    return Abs((c - q).dot(nrm)) / sqrt(nrm.dot(nrm))


def _dist_unnormalised(c, v):
    """M2: |lx0 + my0 + nz0 + k| without dividing by sqrt(l^2 + m^2 + n^2)."""
    return Abs(_normal(v).dot(c) + v["k"])


def _radius(v, c):
    """Radius: from the point P when given (concentric through P), else from the equation."""
    if "px" in v:
        P = Matrix([v["px"], v["py"], v["pz"]])
        return sqrt((P - c).dot(P - c))
    r2 = v["u"] ** 2 + v["v"] ** 2 + v["w"] ** 2 - v["d"]
    if r2 <= 0:
        raise ValueError("not a real sphere")
    return sqrt(r2)


def _section(r, p):
    if not p < r:
        raise ValueError("the plane does not cut the sphere")
    return sqrt(r**2 - p**2)


def _k_from(r, v):
    """The constant d that gives the sphere (u, v, w, d) radius r: r^2 = u^2 + v^2 + w^2 - d."""
    return v["u"] ** 2 + v["v"] ** 2 + v["w"] ** 2 - r**2


def _intercepts(v, half=False):
    """Where the sphere through O meets each axis again: solve x^2 + 2ux = 0 for its nonzero root."""
    out = []
    for c in ("u", "v", "w"):
        roots = [t for t in solve(X**2 + 2 * v[c] * X, X) if t != 0]
        out.append(roots[0] / 2 if half else roots[0])
    return out


def _sphere_through_o(centre):
    """x^2 + y^2 + z^2 - 2ax - 2by - 2cz for the sphere through O with centre (a, b, c)."""
    a, b, c = centre
    return X**2 + Y**2 + Z**2 - 2 * a * X - 2 * b * Y - 2 * c * Z


def key(v, p):
    a = _ask(p)
    if a == "tan_diam":
        return 2 * _dist(_centre(v), v)
    if a == "tan_k":
        return _k_from(_dist(_centre(v), v), v)
    if a == "section":
        c = _centre(v)
        return _section(_radius(v, c), _dist(c, v))
    if a == "centroid":
        return Tuple(*[t / 3 for t in _intercepts(v)])
    if a == "from_g":
        # Intercepts are three times the centroid; the centre is the middle of O and (A, B, C)'s box corner.
        ints = [3 * v["gx"], 3 * v["gy"], 3 * v["gz"]]
        return _sphere_through_o([t / 2 for t in ints])
    raise ValueError(a)


def m1(v, p):
    """Reads the centre as (u, v, w): the signs of the coefficients kept."""
    a = _ask(p)
    if a == "tan_diam":
        return 2 * _dist(_wrong_centre(v), v)
    if a == "tan_k":
        return _k_from(_dist(_wrong_centre(v), v), v)
    if a == "section":
        c = _wrong_centre(v)
        return _section(_radius(v, c), _dist(c, v))
    if a == "centroid":
        # Takes the centre as (u, v, w), and A, B, C at twice it.
        return Tuple(*[2 * v[c] / 3 for c in ("u", "v", "w")])
    if a == "from_g":
        # From 2u = 3g (sign kept), writes +2u x: the linear terms change sign.
        ints = [3 * v["gx"], 3 * v["gy"], 3 * v["gz"]]
        return _sphere_through_o([-t / 2 for t in ints])
    raise ValueError(a)


def m2(v, p):
    """Point-to-plane distance without dividing by sqrt(l^2 + m^2 + n^2)."""
    a = _ask(p)
    if a == "tan_diam":
        return 2 * _dist_unnormalised(_centre(v), v)
    if a == "tan_k":
        return _k_from(_dist_unnormalised(_centre(v), v), v)
    if a == "section":
        c = _centre(v)
        return _section(_radius(v, c), _dist_unnormalised(c, v))
    raise ValueError("only where a distance to a plane is needed")


def m3(v, p):
    """Mixes the radius and the diameter of a tangent sphere."""
    a = _ask(p)
    if a == "tan_diam":
        return _dist(_centre(v), v)  # stops at the radius
    if a == "tan_k":
        return _k_from(_dist(_centre(v), v) / 2, v)  # takes the distance as the diameter
    raise ValueError("only for a tangent sphere")


def m4(v, p):
    """Radius of the circle of section as r - p instead of sqrt(r^2 - p^2)."""
    if _ask(p) != "section":
        raise ValueError("only for a circle of section")
    c = _centre(v)
    r, d = _radius(v, c), _dist(c, v)
    if not d < r:
        raise ValueError("the plane does not cut the sphere")
    return r - d


def m5(v, p):
    """Takes the axis intercepts of a sphere through O to be the centre's coordinates (-u, not -2u)."""
    a = _ask(p)
    if a == "centroid":
        return Tuple(*[t / 3 for t in _intercepts(v, half=True)])
    if a == "from_g":
        return _sphere_through_o([3 * v["gx"], 3 * v["gy"], 3 * v["gz"]])
    raise ValueError("only for a sphere through O meeting the axes")


def m6(v, p):
    """Takes the centroid of triangle ABC to be the sphere's centre."""
    a = _ask(p)
    if a == "centroid":
        return Tuple(*list(_centre(v)))
    if a == "from_g":
        return _sphere_through_o([v["gx"], v["gy"], v["gz"]])
    raise ValueError("only for a sphere through O meeting the axes")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
