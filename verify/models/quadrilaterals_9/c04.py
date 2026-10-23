"""C04 Trapezium: answer models (the key, and one per misconception).

Angles are in degrees (plain numbers; items use fmt="deg").

A trapezium has one pair of parallel sides. Each non-parallel side (a "leg") is a transversal of the
parallel sides, so the two angles at the ends of a leg are interior angles on the same side: they add
to 180. An isosceles trapezium (legs equal) also has equal angles at the two ends of each parallel side.

params["ask"]:
  "leg"   a trapezium; find the angle W. inputs g = the angle at the other end of W's leg,
          h = the angle at the other end of W's parallel side.
  "side"  a trapezium; find the angle W. inputs g = the angle at the other end of W's leg,
          o = the angle at the vertex opposite W.
  "iso"   an isosceles trapezium; input g = one angle. params want1, want2 name where the two asked
          angles sit relative to the given one: "base" (the other end of its parallel side),
          "leg" (the other end of its leg) or "opp" (the opposite vertex). Answer: Tuple(want1, want2).
"""
from sympy import Integer, Tuple

STRAIGHT = Integer(180)
FULL = Integer(360)

# For each belief: is the angle at "base" / "leg" / "opp" equal to the given one ("eq") or its
# supplement ("sup")?
ISO = {
    "key": {"base": "eq", "leg": "sup", "opp": "sup"},   # base angles equal, leg pairs supplementary
    "M1": {"base": "eq", "leg": "eq", "opp": "eq"},      # leg pairs taken as equal too
    "M2": {"base": "sup", "leg": "eq", "opp": "sup"},    # supplementary pair along a parallel side
    "M3": {"base": "sup", "leg": "sup", "opp": "eq"},    # parallelogram: opposite angles equal
}


def _iso(rule, v, p):
    g = v["g"]
    out = []
    for want in (p["want1"], p["want2"]):
        out.append(g if ISO[rule][want] == "eq" else STRAIGHT - g)
    return Tuple(*out)


def key(v, p):
    ask = p["ask"]
    if ask in ("leg", "side"):
        return STRAIGHT - v["g"]           # interior angles on the same side of a leg
    if ask == "iso":
        return _iso("key", v, p)
    raise ValueError(ask)


def m1(v, p):
    """Takes the two angles at the ends of a leg as equal (interior angles taken as equal)."""
    if p["ask"] in ("leg", "side"):
        return v["g"]
    return _iso("M1", v, p)


def m2(v, p):
    """Adds the wrong pair to 180: the angles at the two ends of a parallel side."""
    if p["ask"] == "leg":
        return STRAIGHT - v["h"]
    if p["ask"] == "iso":
        return _iso("M2", v, p)
    raise ValueError("needs the angle at the other end of the parallel side")


def m3(v, p):
    """Treats an isosceles trapezium as a parallelogram: opposite angles equal."""
    if p["ask"] == "iso":
        return _iso("M3", v, p)
    raise ValueError("isosceles trapezium only")


def m4(v, p):
    """Takes the two unknown angles as equal: each is (360 - the two known) / 2."""
    if p["ask"] == "leg":
        return (FULL - v["g"] - v["h"]) / 2
    if p["ask"] == "side":
        return (FULL - v["g"] - v["o"]) / 2
    raise ValueError("needs two known angles")


def m5(v, p):
    """Takes opposite angles of every trapezium as supplementary (true only when it is isosceles)."""
    if p["ask"] == "side":
        return STRAIGHT - v["o"]
    raise ValueError("needs the opposite angle")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
