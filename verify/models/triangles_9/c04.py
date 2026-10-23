"""C04 The median on the hypotenuse and the 30-60-90 triangle: answer models.

Every triangle has its right angle at the origin and its legs along the axes.

params["ask"]:
  "legs"     inputs a, b: the two legs (perpendicular sides). Answer: the median on the hypotenuse.
  "special"  params["tri"] "30" (a 30-60-90 triangle) or "45" (a 45-45-90 triangle);
             params["given"] / params["want"] name a part: "h" (hypotenuse), "opp30", "opp60",
             "leg45" (a side opposite 45 degrees), "median" (the median on the hypotenuse) and,
             for want only, "area". input g: the given part's length.

The key works from coordinates and sines (side = hypotenuse x sine of the opposite angle,
median = distance from the right-angle vertex to the hypotenuse's midpoint), never from the
"half the hypotenuse" or 30-60-90 rules being taught.
"""
from sympy import Rational, pi, sin, sqrt, simplify

HALF = Rational(1, 2)
OPP = {"opp30": pi / 6, "opp60": pi / 3, "leg45": pi / 4}


def _median_coords(x, y):
    """Distance from (0, 0) to the midpoint of the hypotenuse joining (x, 0) and (0, y)."""
    return sqrt((x / 2) ** 2 + (y / 2) ** 2)


def _legs(h, tri):
    """The two legs of the special triangle with hypotenuse h."""
    if tri == "30":
        return h * sin(pi / 6), h * sin(pi / 3)
    return h * sin(pi / 4), h * sin(pi / 4)


def _part(h, part, tri):
    if part == "h":
        return h
    if part == "median":
        return simplify(_median_coords(*_legs(h, tri)))
    if part == "area":
        x, y = _legs(h, tri)
        return simplify(HALF * x * y)
    return simplify(h * sin(OPP[part]))


def _ratio(part, tri):
    """part / hypotenuse, from the coordinates."""
    return simplify(_part(1, part, tri))


def key(v, p):
    if p["ask"] == "legs":
        return simplify(_median_coords(v["a"], v["b"]))
    tri = p["tri"]
    h = simplify(v["g"] / _ratio(p["given"], tri))
    return simplify(_part(h, p["want"], tri))


def _with_ratios(v, p, ratios):
    """A student's answer from a table of part / hypotenuse ratios (median, sides, area from legs)."""
    h = v["g"] if p["given"] == "h" else v["g"] / ratios[p["given"]]
    if p["want"] == "h":
        return simplify(h)
    if p["want"] == "area":
        a = ratios["leg45"] if p["tri"] == "45" else ratios["opp30"]
        b = ratios["leg45"] if p["tri"] == "45" else ratios["opp60"]
        return simplify(HALF * a * h * b * h)
    return simplify(ratios[p["want"]] * h)


RIGHT = {"opp30": HALF, "opp60": sqrt(3) / 2, "leg45": 1 / sqrt(2), "median": HALF}


def m1(v, p):
    """Takes a leg (the given leg, or the longer one) for the hypotenuse."""
    if p["ask"] == "legs":
        return Rational(max(v["a"], v["b"])) / 2
    if p["given"] in ("h", "median"):
        raise ValueError("M1 needs a given leg")
    return simplify(_part(v["g"], p["want"], p["tri"]))


def m2(v, p):
    """Takes the hypotenuse to be the sum of the legs (no squares)."""
    if p["ask"] != "legs":
        raise ValueError("M2 needs two legs")
    return (v["a"] + v["b"]) / 2


def m3(v, p):
    """Uses each rule the wrong way round: the hypotenuse is half the median, half the side opposite 30, ..."""
    if p["ask"] == "legs":
        return simplify(2 * sqrt(v["a"] ** 2 + v["b"] ** 2))
    return _with_ratios(v, p, {k: 1 / r for k, r in RIGHT.items()})


def m4(v, p):
    """Swaps the sides opposite 30 and 60: the side opposite 60 is half the hypotenuse."""
    if p["ask"] == "legs" or p["tri"] != "30":
        raise ValueError("M4 needs a 30-60-90 triangle")
    return _with_ratios(v, p, dict(RIGHT, opp30=sqrt(3) / 2, opp60=HALF))


def m5(v, p):
    """Uses the 30 degree rule at 45 degrees: each side opposite 45 is half the hypotenuse."""
    if p["ask"] == "legs" or p["tri"] != "45":
        raise ValueError("M5 needs a 45-45-90 triangle")
    return _with_ratios(v, p, dict(RIGHT, leg45=HALF))


def m6(v, p):
    """Stops one step short: gives the hypotenuse (or, for an area, the side) found on the way."""
    if p["ask"] == "legs" or p["want"] == "h":
        raise ValueError("M6 needs a two-step question")
    h = simplify(v["g"] / _ratio(p["given"], p["tri"]))
    if p["want"] == "area":
        return simplify(_part(h, "leg45" if p["tri"] == "45" else "opp30", p["tri"]))
    return h


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
