"""C07 Condition of tangency: answer models (the key, and one per misconception).

Three question types, chosen by params["type"]:
  "slope": the tangents of a given slope to a circle, a locus (the pair of lines as one polynomial).
      inputs h, k (centre), r2 (the number on the right of (x - h)^2 + (y - k)^2 = r2), and either
      m (the slope) or A, B (a line Ax + By + C = 0) with params["rel"] "parallel" | "perpendicular".
  "gap": the radius of a circle touching two parallel lines A1x + B1y + C1 = 0, A2x + B2y + C2 = 0.
  "touch": the tangent to x^2 + y^2 = a2 at (x1, y1) touches x^2 + y^2 + 2gx + 2fy + c = 0; find c.
      inputs x1, y1, a2, g, f.
"""
from sympy import Abs, solve, sqrt, symbols

x, y = symbols("x y", real=True)
_c = symbols("c", real=True)


def _slope(v, p, swap=False):
    """The tangents' slope: given, or from the line they are parallel or perpendicular to."""
    if "m" in v:
        if swap:
            raise ValueError("the slope is given directly")
        return v["m"]
    rel = p["rel"]
    if swap:
        rel = {"parallel": "perpendicular", "perpendicular": "parallel"}[rel]
    line_slope = -v["A"] / v["B"]
    return line_slope if rel == "parallel" else -1 / line_slope


def _pair(m, cs):
    """The lines y = mx + c, one per c, as a single polynomial (= 0)."""
    out = 1
    for c in cs:
        out *= y - m * x - c
    return out.expand()


def _tangents(h, k, r, m, divide=True):
    """Lines y = mx + c whose distance from (h, k) equals r: |mh - k + c| / sqrt(1 + m^2) = r."""
    d = Abs(m * h - k + _c) / (sqrt(1 + m**2) if divide else 1)
    cs = solve(d - r, _c)
    assert len(cs) == 2, cs
    return _pair(m, cs)


def _need(p, kind):
    if p.get("type") != kind:
        raise ValueError(f"not a {kind} question")


def _gap(v, scale=True, divide=True):
    """The distance between the parallel lines, after rescaling the second to the first's A, B."""
    A1, B1, C1, A2, B2, C2 = (v[n] for n in ("A1", "B1", "C1", "A2", "B2", "C2"))
    t = A1 / A2
    assert B2 * t == B1, "lines are not parallel"
    if not scale:
        if t == 1:
            raise ValueError("the coefficients already match")
        t = 1
    num = Abs(C1 - C2 * t)
    return num / sqrt(A1**2 + B1**2) if divide else num


def _touch(v, centre=True, divide=True, squared=True):
    """c from: distance of the tangent x1 x + y1 y - a2 = 0 from the centre (-g, -f) equals r."""
    x1, y1, a2, g, f = (v[n] for n in ("x1", "y1", "a2", "g", "f"))
    px, py = (-g, -f) if centre else (0, 0)
    d = Abs(x1 * px + y1 * py - a2) / (sqrt(x1**2 + y1**2) if divide else 1)
    r2 = d**2 if squared else d   # r^2 = g^2 + f^2 - c
    return g**2 + f**2 - r2


def key(v, p):
    """From the definition: the line touches when its distance from the centre equals the radius."""
    if p["type"] == "slope":
        return _tangents(v["h"], v["k"], sqrt(v["r2"]), _slope(v, p))
    if p["type"] == "gap":
        return _gap(v) / 2   # the two tangents touch at the ends of a diameter
    if p["type"] == "touch":
        return _touch(v)
    raise ValueError(p["type"])


def m1(v, p):
    """Mixes up r and r^2: takes the number on the right as the radius (or sets r^2 equal to the distance)."""
    if p["type"] == "slope":
        return _tangents(v["h"], v["k"], v["r2"], _slope(v, p))
    if p["type"] == "touch":
        return _touch(v, squared=False)
    raise ValueError("no radius to mix up")


def m2(v, p):
    """Forgets to divide by sqrt(1 + m^2) (sqrt(A^2 + B^2)): takes |c| or |C1 - C2| as the distance."""
    if p["type"] == "slope":
        return _tangents(v["h"], v["k"], sqrt(v["r2"]), _slope(v, p), divide=False)
    if p["type"] == "gap":
        return _gap(v, divide=False) / 2
    if p["type"] == "touch":
        return _touch(v, divide=False)
    raise ValueError(p["type"])


def m3(v, p):
    """Swaps parallel and perpendicular: uses the perpendicular slope for a parallel tangent, and the other way round."""
    _need(p, "slope")
    return _tangents(v["h"], v["k"], sqrt(v["r2"]), _slope(v, p, swap=True))


def m4(v, p):
    """Uses c^2 = a^2(1 + m^2), the origin-centred condition, for a circle whose centre is not the origin."""
    if p["type"] == "slope":
        if v["h"] == 0 and v["k"] == 0:
            raise ValueError("the circle is centred at the origin")
        return _tangents(0, 0, sqrt(v["r2"]), _slope(v, p))
    if p["type"] == "touch":
        if v["g"] == 0 and v["f"] == 0:
            raise ValueError("the circle is centred at the origin")
        return _touch(v, centre=False)
    raise ValueError(p["type"])


def m5(v, p):
    """Takes the distance between the two parallel tangents as the radius (it is the diameter)."""
    _need(p, "gap")
    return _gap(v)


def m6(v, p):
    """Subtracts the constants without first making the x and y coefficients of the two lines equal."""
    _need(p, "gap")
    return _gap(v, scale=False) / 2


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
