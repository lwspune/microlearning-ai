"""C03 Isosceles triangle theorem: answer models (the key, and one per misconception).

Angles are in degrees (plain numbers; items use fmt="deg"); lengths are in cm (plain numbers).

params["ask"]:
  "angle"  input g: one angle of an isosceles triangle. params given, want: "apex" (the angle
           between the equal sides) or "base" (an angle opposite an equal side). Find the wanted one.
  "two"    book figure 3.37: AB = AC above seg BC and DB = DC below it. inputs g = angle BAC,
           h = angle BDC (both apex angles). Find angle ABD = angle ABC + angle DBC.
  "eq"     equilateral triangle ABC and isosceles triangle ACD (CA = CD) on the other side of AC.
           input g = angle ACD (its apex). Find angle BAD = angle BAC + angle CAD.
  "side"   two equal angles, so the sides opposite them are equal. inputs P (perimeter) and
           s (a known side); params given: "base" (the third side) or "leg" (one of the equal sides).
           Find the other kind of side.

The key uses the angle sum (180) and the equal pair; an equilateral triangle's angle is 180 / 3.
"""
from sympy import Integer

STRAIGHT = Integer(180)


def _key_angle(g, given, want):
    if (given, want) == ("apex", "base"):
        return (STRAIGHT - g) / 2          # the two base angles share what the apex leaves
    if (given, want) == ("base", "apex"):
        return STRAIGHT - 2 * g            # both base angles are g
    raise ValueError((given, want))


def _m1_angle(g, given, want):
    """Takes the given angle and the asked angle as the equal pair."""
    return g


def _m2_angle(g, given, want):
    """Counts the repeated base angle once."""
    return STRAIGHT - g


def _m3_angle(g, given, want):
    """Swaps the roles: treats the apex as a base angle, or a base angle as the apex."""
    return _key_angle(g, want, given)


ANGLE = {"key": _key_angle, "M1": _m1_angle, "M2": _m2_angle, "M3": _m3_angle}


def _key_side(v, given):
    if given == "base":
        return (v["P"] - v["s"]) / 2       # the two equal sides share what the base leaves
    if given == "leg":
        return v["P"] - 2 * v["s"]         # both equal sides are s
    raise ValueError(given)


def _side(rule, v, p):
    given = p["given"]
    if rule == "key":
        return _key_side(v, given)
    if rule == "M1":
        return v["s"]                                          # asked side = given side
    if rule == "M2":
        return v["P"] - v["s"]                                 # the equal side counted once
    if rule == "M3":
        return _key_side(v, "leg" if given == "base" else "base")
    raise ValueError(f"{rule} has no side form")


def _run(rule, v, p):
    ask = p["ask"]
    if ask == "side":
        return _side(rule, v, p)
    if rule == "M4":
        if ask == "two":
            return _key_angle(v["g"], "apex", "base")          # angle ABC only
        if ask == "eq":
            return _key_angle(v["g"], "apex", "base")          # angle CAD only
        raise ValueError("M4 needs a two-part angle")
    f = ANGLE[rule]
    if ask == "angle":
        return f(v["g"], p["given"], p["want"])
    if ask == "two":
        return f(v["g"], "apex", "base") + f(v["h"], "apex", "base")
    if ask == "eq":
        return STRAIGHT / 3 + f(v["g"], "apex", "base")
    raise ValueError(ask)


def key(v, p):
    return _run("key", v, p)


def m1(v, p):
    return _run("M1", v, p)


def m2(v, p):
    return _run("M2", v, p)


def m3(v, p):
    return _run("M3", v, p)


def m4(v, p):
    """Stops after the first part: reports one angle of a sum."""
    return _run("M4", v, p)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4}
