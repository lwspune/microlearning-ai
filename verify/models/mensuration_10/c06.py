"""C06 Area of a sector: answer models (the key, and one per misconception).

Inputs (numbers in the unit the stem prints): r the radius; t the central angle in degrees;
l the length of the arc; per the perimeter of the sector; A a sector's area; pi the value of pi
the stem gives (22/7, 157/50 for 3.14, or pi itself for an answer in terms of pi).

params["find"]:
  area    the area of the sector of angle t (r, t given)
  major   the area of the major sector, the rest of the circle beside the sector of angle t
  arc     the area of the sector whose arc is l long (r, l given)
  perim   the area of the sector whose perimeter is per (r, per given)
  theta   the central angle, in degrees, of a sector of area A (r, A given)

The key works from the definition: a sector is the set of points at distance rho <= r from the
centre with polar angle 0 <= phi <= theta (radians), so its area is the double integral of
rho d(rho) d(phi). An arc of l at radius r turns through l / r radians (arc length is the integral
of r d(phi)). The stem's value of pi is substituted at the end.
"""
from sympy import Symbol, integrate, pi, solve

_rho = Symbol("rho", nonnegative=True)
_phi = Symbol("phi", real=True)
_x = Symbol("x", positive=True)


def _area_rad(r, th):
    """Area of a sector of radius r turning through th radians."""
    return integrate(integrate(_rho, (_rho, 0, r)), (_phi, 0, th))


def _area_deg(r, t, P):
    return _area_rad(r, t * pi / 180).subs(pi, P)


def _area_arc(r, l):
    th = solve(integrate(r, (_phi, 0, _x)) - l, _x)[0]  # the turn whose arc is l long
    return _area_rad(r, th)


def key(v, p):
    f = p["find"]
    r = v["r"]
    if f == "area":
        return _area_deg(r, v["t"], v["pi"])
    if f == "major":
        return _area_deg(r, 360, v["pi"]) - _area_deg(r, v["t"], v["pi"])
    if f == "arc":
        return _area_arc(r, v["l"])
    if f == "perim":
        return _area_arc(r, v["per"] - 2 * r)
    if f == "theta":
        return solve(_area_deg(r, _x, v["pi"]) - v["A"], _x)[0]
    raise ValueError(f"unknown find {f}")


def _with_formula(v, p, area_of):
    """Applies a wrong area rule area_of(r, t, P) (t in degrees) to each kind of question.
    Given an arc, the student first finds t correctly from l = t/360 x 2 pi r."""
    f, r = p["find"], v["r"]
    P = v.get("pi", pi)
    if f == "area":
        return area_of(r, v["t"], P)
    if f == "major":
        return area_of(r, 360 - v["t"], P)
    if f in ("arc", "perim"):
        l = v["l"] if f == "arc" else v["per"] - 2 * r
        return area_of(r, l * 360 / (2 * P * r), P)
    if f == "theta":
        return solve(area_of(r, _x, P) - v["A"], _x)[0]
    raise ValueError(f"unknown find {f}")


def m1(v, p):
    """Uses the arc formula t/360 x 2 pi r for the area."""
    return _with_formula(v, p, lambda r, t, P: t / 360 * 2 * P * r)


def m2(v, p):
    """Area = arc length x radius, with no half."""
    if p["find"] == "major":
        raise ValueError("M2 is tested on a sector's own area")
    return _with_formula(v, p, lambda r, t, P: t / 360 * 2 * P * r * r)


def m3(v, p):
    """Forgets to square r: t/360 x pi r."""
    return _with_formula(v, p, lambda r, t, P: t / 360 * P * r)


def m4(v, p):
    """Takes the whole perimeter as the arc length (forgets the two radii)."""
    if p["find"] != "perim":
        raise ValueError("M4 needs a perimeter")
    return _area_arc(v["r"], v["per"])


def m5(v, p):
    """Mixes up the sector with the rest of the circle."""
    f = p["find"]
    if f == "area":
        return key(v, {"find": "major"})
    if f == "major":
        return key(v, {"find": "area"})
    raise ValueError("M5 needs a minor or major sector of a given angle")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
