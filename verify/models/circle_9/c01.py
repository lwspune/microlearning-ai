"""C01 Perpendicular from the centre to a chord: answer models (the key, and one per misconception).

inputs: two of r (radius), D (diameter), d (distance of the chord from the centre), c (chord length).
params["want"]: "r", "D", "d" or "c", the length asked for.

The key works from coordinates: the circle x^2 + y^2 = r^2 and the chord on the line y = d, its
length the distance between the two points where that line cuts the circle. It never uses the
"perpendicular bisects the chord" rule being taught.
"""
from sympy import Symbol, solve, sqrt, simplify, Abs, expand

_x = Symbol("x")                  # x on the line y = d
_t = Symbol("t", positive=True)   # the unknown length


def _chord_sq(r, d):
    """Square of the chord on the line y = d: the distance between the two points where it meets
    x^2 + y^2 = r^2 (the roots x1, x2 of x^2 + d^2 - r^2 = 0), squared."""
    x1, x2 = solve(_x ** 2 + d ** 2 - r ** 2, _x)
    return expand((x1 - x2) ** 2)


def _chord(r, d):
    sq = _chord_sq(r, d)
    if not sq.is_positive:
        raise ValueError("the line misses the circle")
    return simplify(sqrt(sq))


def _radius(v):
    if "r" in v:
        return v["r"]
    if "D" in v:
        return v["D"] / 2
    return None


def _answer(r, d, c, want):
    """Finish from whichever two of r, d, c are known, by the coordinate chord length."""
    if r is not None and d is not None:
        if want == "c":
            return _chord(r, d)
        raise ValueError("nothing to find")
    if r is not None and c is not None:
        if want != "d":
            raise ValueError("nothing to find")
        sols = [s for s in solve(_chord_sq(r, _t) - c ** 2, _t) if s.is_positive]
        if not sols:
            raise ValueError("the chord is longer than the diameter")
        return simplify(sols[0])
    sols = [s for s in solve(_chord_sq(_t, d) - c ** 2, _t) if s.is_positive]
    rr = simplify(sols[0])
    return rr if want == "r" else 2 * rr


def key(v, p):
    return _answer(_radius(v), v.get("d"), v.get("c"), p["want"])


def _pyth(r, d, h, want, leg=lambda hyp, a: sqrt(hyp ** 2 - a ** 2), hyp=lambda a, b: sqrt(a ** 2 + b ** 2)):
    """A student's working with half chord h: r^2 = d^2 + h^2, with their own leg / hypotenuse rules.
    Returns the length asked for (the chord as 2h)."""
    if want == "c":
        return simplify(2 * leg(r, d))
    if want == "d":
        return simplify(leg(r, h))
    rr = simplify(hyp(d, h))
    return rr if want == "r" else simplify(2 * rr)


def _real(x):
    x = simplify(x)
    if not x.is_real or not x.is_positive:
        raise ValueError("no real positive length")
    return x


def m1(v, p):
    """Doesn't halve: uses the whole chord as the leg, or gives the half chord as the chord."""
    r, d, c, want = _radius(v), v.get("d"), v.get("c"), p["want"]
    if want == "c":
        return _real(sqrt(r ** 2 - d ** 2))
    if want == "d":
        return _real(sqrt(r ** 2 - c ** 2))
    rr = sqrt(d ** 2 + c ** 2)
    return _real(rr if want == "r" else 2 * rr)


def m2(v, p):
    """Mixes up radius and diameter: uses a given diameter as the radius, or gives the radius for the
    diameter (and the diameter for the radius)."""
    want = p["want"]
    if "D" in v:
        return _real(_answer(v["D"], v.get("d"), v.get("c"), want))
    if want == "D":
        return _real(_answer(None, v["d"], v["c"], "r"))
    if want == "r":
        return _real(_answer(None, v["d"], v["c"], "D"))
    raise ValueError("M2 needs a radius or diameter to mix up")


def m3(v, p):
    """Misses that the radius is the hypotenuse: adds squares where they should be subtracted, and
    subtracts (larger minus smaller) where they should be added."""
    r, d, c = _radius(v), v.get("d"), v.get("c")
    h = c / 2 if c is not None else None
    return _real(_pyth(r, d, h, p["want"],
                       leg=lambda hyp, a: sqrt(hyp ** 2 + a ** 2),
                       hyp=lambda a, b: sqrt(Abs(a ** 2 - b ** 2))))


def m4(v, p):
    """Works with the lengths, not their squares: d = r - half chord, half chord = r - d, r = d + half chord."""
    r, d, c = _radius(v), v.get("d"), v.get("c")
    h = c / 2 if c is not None else None
    return _real(_pyth(r, d, h, p["want"], leg=lambda hyp, a: hyp - a, hyp=lambda a, b: a + b))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
