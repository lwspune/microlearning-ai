"""C05 Length of an arc: answer models (the key, and one per misconception).

inputs: t  the arc's measure (the central angle) in degrees
        r  the radius, in cm
        l  the arc's length, in cm (given when r, t or the circumference is asked)
        pi the value of pi the stem gives (22/7 or 157/50 for 3.14); omitted when not needed
params: find  arc    the length of the arc of measure t, radius r
              perim  the perimeter of the sector (arc and its two radii)
              r      the radius, from the arc's length l and measure t
              theta  the measure t, in degrees, from l and r
              circ   the circumference of the circle, from l and t

The key measures the arc as the integral of r d(phi) over the turn t * pi / 180 (the
length of a circle's path), never by quoting theta/360 * 2 pi r.
"""
from sympy import Symbol, integrate, pi, solve

_phi = Symbol("phi", real=True)
_R = Symbol("R", positive=True)
_T = Symbol("T", positive=True)


def _true_arc(t, r, P=pi):
    return integrate(r, (_phi, 0, t * pi / 180))


def _P(v):
    return v.get("pi", pi)


def _one(sols):
    sols = [s for s in sols if s.is_positive]
    if len(sols) != 1:
        raise ValueError(f"no single positive solution: {sols}")
    return sols[0]


def _solve(p, v, length):
    """Apply the asked quantity to a length rule length(t, r, P) (exact pi in the rule)."""
    find, P = p["find"], _P(v)
    if find == "arc":
        return length(v["t"], v["r"], pi).subs(pi, P)
    if find == "perim":
        return length(v["t"], v["r"], pi).subs(pi, P) + 2 * v["r"]
    if find == "r":
        return _one(solve(length(v["t"], _R, pi).subs(pi, P) - v["l"], _R))
    if find == "theta":
        return _one(solve(length(_T, v["r"], pi).subs(pi, P) - v["l"], _T))
    if find == "circ":
        R = _one(solve(length(v["t"], _R, pi) - v["l"], _R))
        return (2 * pi * R).simplify()
    raise ValueError(find)


def key(v, p):
    return _solve(p, v, _true_arc)


def m1(v, p):
    """Uses the sector-area rule theta/360 * pi r^2 for the arc's length."""
    if p["find"] == "circ":
        raise ValueError("no circumference from an area rule")
    return _solve(p, v, lambda t, r, P: t / 360 * P * r**2)


def m2(v, p):
    """A sector's perimeter is its arc alone (the two radii left out)."""
    if p["find"] != "perim":
        raise ValueError("perimeter only")
    return _true_arc(v["t"], v["r"]).subs(pi, _P(v))


def m3(v, p):
    """The arc's measure in degrees is taken as its length in cm."""
    if p["find"] not in ("arc", "theta", "perim"):
        raise ValueError("needs the measure and the length to stand for each other")
    return _solve(p, v, lambda t, r, P: t)


def m4(v, p):
    """The arc is taken as the whole circle: theta/360 is dropped."""
    if p["find"] == "theta":
        raise ValueError("no angle in the rule")
    return _solve(p, v, lambda t, r, P: 2 * P * r)


def m5(v, p):
    """The fraction is turned upside down: 360/theta in place of theta/360."""
    return _solve(p, v, lambda t, r, P: 360 / t * 2 * P * r)


def m6(v, p):
    """Mixes the two forms theta/360 * 2 pi r and theta/180 * pi r into theta/180 * 2 pi r."""
    return _solve(p, v, lambda t, r, P: t / 180 * 2 * P * r)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
