"""C04 Angles of triangles and polygons: answer models (the key, and one per misconception).

Every angle input is in radians (an angle given in degrees in the stem goes in as its radian value).
params:
  type   "ratio" | "sumdiff" | "ap" | "poly"
  shape  "tri" | "quad" (not for "poly")
  known  comma-separated names of the inputs that are known angles of the figure (may be empty)
  rad    comma-separated names of the inputs the stem gives in radians (for the unit-mixing model)
  ask    "largest" | "smallest" (not for "poly")
  unit   "deg" | "rad": the unit the answer is asked in
inputs:
  ratio:   parts = (p1, p2, ...), the unknown angles are in this ratio
  sumdiff: d = the difference of the two unknown angles
  ap:      d = the common difference of the three unknown angles
  poly:    n = the number of sides of the regular polygon (answer: each interior angle)
"""
from sympy import pi, simplify

SUM = {"tri": pi, "quad": 2 * pi}
WRONG_SUM = {"tri": 2 * pi, "quad": pi}


def _names(p, k):
    return [s.strip() for s in p.get(k, "").split(",") if s.strip()]


def _out(theta, p):
    return simplify(theta * 180 / pi) if p["unit"] == "deg" else simplify(theta)


def _share(v, p, total, known):
    """The asked angle, once `known` (radians) is taken from `total` and the rest is shared out."""
    rest = total - sum(known)
    t = p["type"]
    if t == "ratio":
        parts = list(v["parts"])
        share = [rest * x / sum(parts) for x in parts]
    elif t == "sumdiff":
        share = [(rest + v["d"]) / 2, (rest - v["d"]) / 2]
    elif t == "ap":
        mid = rest / 3
        share = [mid - v["d"], mid, mid + v["d"]]
    else:
        raise ValueError("not a sharing question")
    return max(share) if p["ask"] == "largest" else min(share)


def key(v, p):
    """From the definitions: a triangle's angles add to pi, a quadrilateral's to 2*pi; a regular
    n-gon has angle sum (n - 2)*pi shared equally among its n angles."""
    if p["type"] == "poly":
        n = v["n"]
        return _out((n - 2) * pi / n, p)
    known = [v[k] for k in _names(p, "known")]
    return _out(_share(v, p, SUM[p["shape"]], known), p)


def m1(v, p):
    """Wrong angle sum: 2*pi (a full turn) for a triangle, pi for a quadrilateral."""
    if p["type"] == "poly":
        raise ValueError("no triangle or quadrilateral sum used")
    known = [v[k] for k in _names(p, "known")]
    return _out(_share(v, p, WRONG_SUM[p["shape"]], known), p)


def m2(v, p):
    """Forgets the known angle (a right angle, or the given one): shares the whole sum among the
    unknown angles."""
    if p["type"] == "poly" or not _names(p, "known"):
        raise ValueError("no known angle to forget")
    return _out(_share(v, p, SUM[p["shape"]], []), p)


def m3(v, p):
    """Mixes units: an angle given in radians is used as that many degrees, unconverted."""
    rad = _names(p, "rad")
    if p["type"] == "poly" or not rad:
        raise ValueError("no radian measure to misread")
    w = {k: (x * pi / 180 if k in rad else x) for k, x in v.items()}
    known = [w[k] for k in _names(p, "known")]
    return _out(_share(w, p, SUM[p["shape"]], known), p)


def m4(v, p):
    """Shares a full turn 2*pi equally among the n angles: gives the exterior angle 2*pi/n."""
    if p["type"] != "poly":
        raise ValueError("not a regular polygon")
    return _out(2 * pi / v["n"], p)


def m5(v, p):
    """Gives the angle sum (n - 2)*pi as each angle: forgets to divide by n."""
    if p["type"] != "poly":
        raise ValueError("not a regular polygon")
    return _out((v["n"] - 2) * pi, p)


def m6(v, p):
    """Takes an interior and exterior angle to make a full turn: 2*pi - 2*pi/n."""
    if p["type"] != "poly":
        raise ValueError("not a regular polygon")
    return _out(2 * pi - 2 * pi / v["n"], p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
