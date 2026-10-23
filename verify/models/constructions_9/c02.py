"""C02 Base, base angle and difference of the other sides: answer models (the key, and one per misconception).

Generic letters: base BC, base angle at B, ray BL its arm (A is on ray BL), and the given difference
v["d"] (cm). params["longer"] says which side is longer: "AB" (AB - AC = d is given) or "AC"
(AC - AB = d is given). Inputs v["a"] = BC (cm) and v["beta"] = angle B (degrees).
params["kind"]:
  plan    Tuple(where D is taken, the segment whose perpendicular bisector is drawn):
          where = arm (on ray BL, BD = d) | opp (on the ray opposite to ray BL, BD = d) | base (on seg BC, BD = d);
          segment = DC | DB | BC.
  AD      v["m"]: AB as measured on the finished construction (to 0.1 cm); find AD (cm).
"""
import math

from sympy import Rational, Symbol, Tuple

ARM, OPP, BASE = Symbol("arm"), Symbol("opp"), Symbol("base")
DC, DB, BC = Symbol("DC"), Symbol("DB"), Symbol("BC")


def _num(x):
    return float(x)


def _triangle(v, p):
    """The actual triangle from the definition (cosine rule), B = (0, 0), C = (a, 0), A on the ray at angle B.
    With s = AB - AC (signed): AC^2 = a^2 + c^2 - 2ac cos B and AC = c - s give c = (a^2 - s^2) / (2(a cos B - s))."""
    a, beta, d = _num(v["a"]), math.radians(_num(v["beta"])), _num(v["d"])
    s = d if p["longer"] == "AB" else -d
    c = (a * a - s * s) / (2 * (a * math.cos(beta) - s))
    if c <= 0 or c - s <= 0:
        raise ValueError("no such triangle")
    u = (math.cos(beta), math.sin(beta))
    A, B, C = (c * u[0], c * u[1]), (0.0, 0.0), (a, 0.0)
    return A, B, C, u, d, c


def _dist(P, Q):
    return math.hypot(P[0] - Q[0], P[1] - Q[1])


def _place(v, p):
    """Where D must be: of the two points at distance d from B on line BA, the one with AD = AC
    (so that A is on the perpendicular bisector of DC)."""
    A, B, C, u, d, c = _triangle(v, p)
    cands = {ARM: (d * u[0], d * u[1]), OPP: (-d * u[0], -d * u[1])}
    ok = [k for k, D in cands.items() if abs(_dist(A, D) - _dist(A, C)) < 1e-9]
    if len(ok) != 1:
        raise ValueError("no unique D")
    return ok[0], cands[ok[0]], A, B, C, c


def _measured(v, c):
    m = Rational(str(v["m"]))
    if abs(_num(m) - c) > 0.05:
        raise ValueError(f"measured AB {m} does not match the triangle ({c:.3f})")
    return m


def _flip(place):
    return OPP if place == ARM else ARM


def key(v, p):
    place, D, A, B, C, c = _place(v, p)
    if p["kind"] == "plan":
        # The segment whose ends are equidistant from A, read off the coordinates.
        segs = {DC: (D, C), DB: (D, B), BC: (B, C)}
        ok = [k for k, (P, Q) in segs.items() if abs(_dist(A, P) - _dist(A, Q)) < 1e-9]
        if len(ok) != 1:
            raise ValueError("no unique segment")
        return Tuple(place, ok[0])
    if p["kind"] == "AD":
        m = _measured(v, c)
        d = Rational(str(v["d"]))
        # D on ray BA lies between B and A (d < AB), so AD = AB - BD; on the opposite ray, B is between D and A.
        return m - d if place == ARM else m + d
    raise ValueError(p["kind"])


def m1(v, p):
    """Always marks D on the arm of the base angle, as for a sum, even when AC - AB is given."""
    place, D, A, B, C, c = _place(v, p)
    if p["kind"] == "plan":
        return Tuple(ARM, DC)
    m, d = _measured(v, c), Rational(str(v["d"]))
    if m <= d:
        raise ValueError("D would be beyond A")
    return m - d


def m2(v, p):
    """Mixes up the two cases: the extension when AB - AC is given, the arm when AC - AB is given."""
    place, D, A, B, C, c = _place(v, p)
    if p["kind"] == "plan":
        return Tuple(_flip(place), DC)
    m, d = _measured(v, c), Rational(str(v["d"]))
    wrong = _flip(place)
    if wrong == ARM and m <= d:
        raise ValueError("D would be beyond A")
    return m - d if wrong == ARM else m + d


def m3(v, p):
    """Marks the difference on the base BC instead of on the line of the arm."""
    if p["kind"] != "plan":
        raise ValueError("a plan item only")
    return Tuple(BASE, DC)


def m4(v, p):
    """Bisects seg DB, the marked piece: thinks A is as far from D as from B (so AD = AB)."""
    place, D, A, B, C, c = _place(v, p)
    if p["kind"] == "plan":
        return Tuple(place, DB)
    return _measured(v, c)


def m5(v, p):
    """Bisects the base BC: thinks A is as far from B as from C."""
    place, *_ = _place(v, p)
    if p["kind"] != "plan":
        raise ValueError("a plan item only")
    return Tuple(place, BC)


def m6(v, p):
    """Slip: takes AD to be the marked length BD."""
    if p["kind"] != "AD":
        raise ValueError("a length item only")
    place, D, A, B, C, c = _place(v, p)
    _measured(v, c)
    return Rational(str(v["d"]))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
