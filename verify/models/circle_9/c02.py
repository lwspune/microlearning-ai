"""C02 Equal chords: answer models (the key, and one per misconception).

Inputs (sympy numbers, lengths in cm):
  r   radius of the circle that holds the chord asked about
  c   a known chord length (params["ask"] "dist" or "between")
  d   a known distance of a chord from its centre (params["ask"] "chord")
  r1  optional: radius of a second circle that holds the known chord; without it the
      known chord is in the same circle (or the two chords are equal chords of one circle)

params["ask"]:
  "dist"     the asked chord equals the known chord c: its distance from its centre
  "chord"    the asked chord is as far from its centre as the known chord (d): its length
  "between"  two equal parallel chords of length c lie on opposite sides of the centre:
             the distance between them

The key never uses the theorems taught here: it places the asked circle at the origin
(x^2 + y^2 = r^2), puts the chord on the line y = h and solves for the h (or the length)
that the chord's real endpoints give.
"""
from sympy import Symbol, solve, sqrt

_h = Symbol("h", positive=True)


def _real(v):
    if not v.is_real or v <= 0:
        raise ValueError("no such length")
    return v


def _dist_for(r, c):
    """Distance from the centre of the line y = h that cuts a chord of length c from x^2 + y^2 = r^2."""
    if c >= 2 * r:
        raise ValueError("chord longer than a diameter")
    # endpoints (+-x, h) with x^2 + h^2 = r^2 and 2x = c
    (h,) = solve((c / 2) ** 2 + _h**2 - r**2, _h)
    return h


def _chord_for(r, d):
    if d >= r:
        raise ValueError("line misses the circle")
    xs = solve(Symbol("x") ** 2 + d**2 - r**2, Symbol("x"))
    return max(xs) - min(xs)


def key(v, p):
    ask, r = p["ask"], v["r"]
    if ask == "dist":
        return _dist_for(r, v["c"])
    if ask == "chord":
        return _chord_for(r, v["d"])
    return 2 * _dist_for(r, v["c"])


def m1(v, p):
    """Two circles: copies the known chord's distance (or length) across, whatever the radii."""
    if "r1" not in v:
        raise ValueError("one circle only")
    w = dict(v, r=v["r1"])
    return key(w, p)


def m2(v, p):
    """Swaps 'distance from the centre' and 'distance between the two chords'."""
    ask = p["ask"]
    if ask == "dist":
        return 2 * key(v, p)
    if ask == "between":
        return key(v, p) / 2
    raise ValueError("no second distance to mix up")


def m3(v, p):
    """Takes the whole chord, not half of it, as a side of the right triangle."""
    r, ask = v["r"], p["ask"]
    if ask == "dist":
        return _real(sqrt(r**2 - v["c"] ** 2))
    if ask == "chord":
        return _real(sqrt(r**2 - v["d"] ** 2))
    raise ValueError("not used")


def m4(v, p):
    """Subtracts the lengths instead of their squares."""
    r, ask = v["r"], p["ask"]
    if ask == "dist":
        return _real(r - v["c"] / 2)
    if ask == "chord":
        return _real(2 * (r - v["d"]))
    return _real(2 * (r - v["c"] / 2))


def m5(v, p):
    """Adds the squares when finding a side that is not the hypotenuse."""
    r, ask = v["r"], p["ask"]
    if ask == "dist":
        return sqrt(r**2 + (v["c"] / 2) ** 2)
    if ask == "chord":
        return 2 * sqrt(r**2 + v["d"] ** 2)
    return 2 * sqrt(r**2 + (v["c"] / 2) ** 2)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
