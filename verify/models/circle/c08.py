"""C08 Tangents from a point; director circle: answer models (the key, and one per misconception).

Items come in three kinds (param "q"):
  "length": circle x^2 + y^2 + 2gx + 2fy + c = 0 (inputs g, f, c) and a point (x1, y1);
            the answer is the length of the tangent segment from the point.
  "angle":  a circle of radius r centred at the origin; the two tangents from A enclose the angle
            th (radians); the answer is the length of each tangent segment.
  "k":      circle x^2 + y^2 + 2gx + 2fy + k = 0 (inputs g, f), point (x1, y1), tangent length L;
            the answer is k.
  "director": circle x^2 + y^2 + 2gx + 2fy + c = 0 (inputs g, f, c); the answer is the locus of
            the point where two perpendicular tangents meet, as a polynomial in x, y (= 0).
The key is computed from the geometry (radius perpendicular to the tangent, Pythagoras), never
from S11 or the formula x^2 + y^2 = 2a^2.
"""
from sympy import Symbol, cot, expand, sin, solve, sqrt, symbols

x, y = symbols("x y", real=True)
_k = Symbol("k", real=True)


def _circle(v, c=None):
    """Centre and r^2 of x^2 + y^2 + 2gx + 2fy + c = 0."""
    g, f = v["g"], v["f"]
    c = v["c"] if c is None else c
    return (-g, -f), g**2 + f**2 - c


def _dist2(a, b):
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2


def _one_root(eq, why):
    roots = [r for r in solve(eq, _k) if r.is_real]
    if len(roots) != 1:
        raise ValueError(f"{why}: {len(roots)} real values of k")
    return roots[0]


def _angle_parts(v):
    """Distance OA and radius r when the tangents from A enclose the angle th."""
    r, th = v["r"], v["th"]
    return r / sin(th / 2), r


def _director(v, centre_sign, radius2):
    """(x - h)^2 + (y - k)^2 - R^2 with the centre (h, k) = centre_sign * (-g, -f)."""
    (h, kk), r2 = _circle(v)
    h, kk = centre_sign * h, centre_sign * kk
    return expand((x - h) ** 2 + (y - kk) ** 2 - radius2(r2))


def key(v, p):
    q = p["q"]
    if q == "length":
        C, r2 = _circle(v)
        d2 = _dist2(C, (v["x1"], v["y1"]))
        if d2 <= r2:
            raise ValueError("point not outside the circle")
        return sqrt(d2 - r2)  # PT^2 + r^2 = CP^2: the radius is perpendicular to the tangent
    if q == "angle":
        return v["r"] * cot(v["th"] / 2)  # right triangle OTA: angle at A is th/2, opposite side r
    if q == "k":
        C, r2 = _circle(v, _k)
        return _one_root(_dist2(C, (v["x1"], v["y1"])) - r2 - v["L"] ** 2, "key")
    if q == "director":
        # Perpendicular tangents: the two radii and two tangents form a square of side r, so CP = r*sqrt(2).
        return _director(v, 1, lambda r2: 2 * r2)
    raise ValueError(q)


def m1(v, p):
    """A squared length used as the length: PT = S11, or x^2 + y^2 = r*sqrt(2) (radius not squared)."""
    q = p["q"]
    if q == "length":
        C, r2 = _circle(v)
        return _dist2(C, (v["x1"], v["y1"])) - r2
    if q == "angle":
        oa, r = _angle_parts(v)
        return oa**2 - r**2
    if q == "k":
        C, r2 = _circle(v, _k)
        return _one_root(_dist2(C, (v["x1"], v["y1"])) - r2 - v["L"], "M1")
    if q == "director":
        return _director(v, 1, lambda r2: sqrt(2) * sqrt(r2))
    raise ValueError(q)


def m2(v, p):
    """The distance from the point to the centre taken as the tangent length."""
    q = p["q"]
    if q == "length":
        C, _ = _circle(v)
        return sqrt(_dist2(C, (v["x1"], v["y1"])))
    if q == "angle":
        return _angle_parts(v)[0]
    raise ValueError("needs a tangent length to find")


def m3(v, p):
    """The shortest distance from the point to the circle, CP - r, taken as the tangent length."""
    q = p["q"]
    if q == "length":
        C, r2 = _circle(v)
        return sqrt(_dist2(C, (v["x1"], v["y1"]))) - sqrt(r2)
    if q == "angle":
        oa, r = _angle_parts(v)
        return oa - r
    if q == "k":
        C, r2 = _circle(v, _k)
        # CP - r = L, with CP free of k: r = CP - L.
        cp = sqrt(_dist2(C, (v["x1"], v["y1"])))
        if cp <= v["L"]:
            raise ValueError("CP - L is not a radius")
        return _one_root(r2 - (cp - v["L"]) ** 2, "M3")
    raise ValueError(q)


def m4(v, p):
    """Perpendicular tangents meet at distance 2r from the centre: radius doubled, (2r)^2 = 4r^2."""
    if p["q"] != "director":
        raise ValueError("director circle only")
    return _director(v, 1, lambda r2: 4 * r2)


def m5(v, p):
    """Perpendicular tangents meet at distance r/sqrt(2) (half the square's diagonal): R^2 = r^2/2."""
    if p["q"] != "director":
        raise ValueError("director circle only")
    return _director(v, 1, lambda r2: r2 / 2)


def m6(v, p):
    """The centre of x^2 + y^2 + 2gx + 2fy + c = 0 taken as (g, f), signs not changed."""
    q = p["q"]
    if q == "director":
        if v["g"] == 0 and v["f"] == 0:
            raise ValueError("centre at the origin: the sign slip changes nothing")
        return _director(v, -1, lambda r2: 2 * r2)
    if q == "k":
        (h, kk), r2 = _circle(v, _k)
        return _one_root(_dist2((-h, -kk), (v["x1"], v["y1"])) - r2 - v["L"] ** 2, "M6")
    if q == "length":
        (h, kk), r2 = _circle(v)
        d2 = _dist2((-h, -kk), (v["x1"], v["y1"]))
        if d2 <= r2:
            raise ValueError("wrong centre puts the point inside")
        return sqrt(d2 - r2)
    raise ValueError(q)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
