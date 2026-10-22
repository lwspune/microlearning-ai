"""C04 Frustum of a cone: answer models (the key, and one per misconception).

Every item says what it asks in params["find"] (csa: curved surface area | tsa: total surface area |
vol: volume), and params["unit"] = "litre" when a volume is wanted in litres (1 litre = 1000 cm^3).
Inputs: the two ends as radii (r1, r2), diameters (d1, d2) or circumferences (c1, c2); the
perpendicular height h or the slant height l; and pi, the value of pi the stem gives (22/7 or
157/50 for 3.14).

The key works from the definition, not the frustum formulas: the frustum is the solid swept when
the radius changes linearly from r1 at one end to r2 at the other. Its volume adds up the
cross-sections, its curved surface adds up thin bands (a surface of revolution), and the flat ends
are discs. Exact pi is used throughout and the stem's value substituted at the end. A radius found
from a circumference uses the stem's pi, as the book does. Each misconception applies its own wrong
rule to the textbook formulas.
"""
from sympy import Rational, Symbol, diff, integrate, pi, sqrt

_z = Symbol("z", real=True)


def _radii(v, P):
    if "r1" in v:
        return v["r1"], v["r2"]
    if "d1" in v:
        return v["d1"] / 2, v["d2"] / 2
    return v["c1"] / (2 * P), v["c2"] / (2 * P)


def _height(v, r1, r2):
    """The perpendicular height: given, or from the slant height (the rim-to-rim distance)."""
    if "h" in v:
        return v["h"]
    return sqrt(v["l"] ** 2 - (r1 - r2) ** 2)


def _to_unit(val, p):
    return val / 1000 if p.get("unit") == "litre" else val


def _exact(find, r1, r2, h):
    f = r1 + (r2 - r1) * _z / h  # the radius at height z
    if find == "vol":
        return integrate(pi * f**2, (_z, 0, h))
    curved = integrate((2 * pi * f * sqrt(1 + diff(f, _z) ** 2)).simplify(), (_z, 0, h))
    if find == "csa":
        return curved
    if find == "tsa":
        rho = Symbol("rho", positive=True)
        disc = lambda r: integrate(2 * pi * rho, (rho, 0, r))
        return curved + disc(r1) + disc(r2)
    raise ValueError(find)


def key(v, p):
    P = v["pi"]
    r1, r2 = _radii(v, P)
    val = _exact(p["find"], r1, r2, _height(v, r1, r2)).simplify().subs(pi, P)
    return _to_unit(val, p)


# ---- Misconceptions: the textbook formulas with one wrong rule each.

def _book(find, r1, r2, h, l, P):
    if find == "vol":
        return Rational(1, 3) * P * h * (r1**2 + r2**2 + r1 * r2)
    csa = P * l * (r1 + r2)
    return csa if find == "csa" else csa + P * r1**2 + P * r2**2


def m1(v, p):
    """Perpendicular and slant height swapped: h where l belongs (surfaces), l where h belongs (volume)."""
    P = v["pi"]
    r1, r2 = _radii(v, P)
    if p["find"] == "vol":
        if "l" not in v:
            raise ValueError("needs a given slant height")
        return _to_unit(_book("vol", r1, r2, v["l"], None, P), p)
    if "h" not in v:
        raise ValueError("needs a given perpendicular height")
    return _book(p["find"], r1, r2, None, v["h"], P)


def m2(v, p):
    """Lengths added instead of their squares: l = h + (r1 - r2), or h = l - (r1 - r2)."""
    P = v["pi"]
    r1, r2 = _radii(v, P)
    if p["find"] == "vol":
        if "l" not in v:
            raise ValueError("needs a given slant height")
        return _to_unit(_book("vol", r1, r2, v["l"] - (r1 - r2), None, P), p)
    if "h" not in v:
        raise ValueError("needs a given perpendicular height")
    return _book(p["find"], r1, r2, None, v["h"] + (r1 - r2), P)


def m3(v, p):
    """Curved and total surface swapped: the two flat ends left out of the total, or added to the curved."""
    if p["find"] == "vol":
        raise ValueError("surfaces only")
    q = dict(p, find="csa" if p["find"] == "tsa" else "tsa")
    return key(v, q)


def _vol_bracket(v, p, f):
    if p["find"] != "vol":
        raise ValueError("volumes only")
    P = v["pi"]
    r1, r2 = _radii(v, P)
    return _to_unit(f(P, r1, r2, _height(v, r1, r2)), p)


def m4(v, p):
    """The r1 r2 term dropped from the volume's bracket: (1/3) pi h (r1^2 + r2^2)."""
    return _vol_bracket(v, p, lambda P, a, b, h: Rational(1, 3) * P * h * (a**2 + b**2))


def m5(v, p):
    """The 1/3 dropped from the volume, as for a cylinder: pi h (r1^2 + r2^2 + r1 r2)."""
    return _vol_bracket(v, p, lambda P, a, b, h: P * h * (a**2 + b**2 + a * b))


def m6(v, p):
    """The diameter taken as the radius: a given diameter used as it is, or r = C / pi from a circumference."""
    P = v["pi"]
    if "d1" in v:
        w = {"r1": v["d1"], "r2": v["d2"]}
    elif "c1" in v:
        w = {"r1": v["c1"] / P, "r2": v["c2"] / P}
    else:
        raise ValueError("needs diameters or circumferences")
    w.update({k: v[k] for k in ("h", "l", "pi") if k in v})
    return key(w, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
