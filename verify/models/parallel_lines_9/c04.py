"""C04 Using parallel lines in a figure: answer models (the key, and one per misconception).

All figures have horizontal parallel lines. Angles are in degrees.

shape "corner": E is a corner joined to A on one parallel line and to C on the other; the
  question asks for angle AEC.
  inputs x: the angle at A between seg AE and the named ray on A's line; y: the same at C.
  params ra, rc: "L" or "R", the way the named ray at A (at C) points.
         ea, ec: "up" or "dn", whether E is above or below A's (C's) line.
         f: "L" or "R", the way the construction ray EF (through E, parallel to both lines) points.
         inside: "1" when E lies between the lines (EF runs inside angle AEC), "0" when outside.
         first: "A" or "C", the part a student finds first.
shape "v": the book's Fig 2.21. Ray BA points left, ray DE points right, C lies below both
  rays and B lies to the left of ray CD. inputs x = angle BCD, y = angle CDE; asks angle ABC.
  The construction ray CP points right.

The key works from the directions of the arms, never through a construction line; the
misconception models follow the construction-line method with one wrong step each.
"""
from sympy import Integer


def _ang(d1, d2):
    """The angle between two rays with directions d1, d2 (degrees), 0 to 180."""
    d = (d1 - d2) % 360
    return min(d, 360 - d)


def _dir(r, side, a):
    """Direction of the arm that makes angle a with a horizontal ray pointing r, on side up/dn."""
    base = 0 if r == "R" else 180
    turn = a if (side == "up") == (r == "R") else -a
    return (base + turn) % 360


def _ok(ans):
    if ans <= 0 or ans >= 360:
        raise ValueError(f"no angle: {ans}")
    return Integer(ans)


# ---------- key: from the directions of the arms ----------

def key(v, p):
    x, y = v["x"], v["y"]
    if p["shape"] == "corner":
        return Integer(_ang(_dir(p["ra"], p["ea"], x), _dir(p["rc"], p["ec"], y)))
    # shape v: DE points right; arm DC is below it, so seg DC points 360 - y and CD points 180 - y
    cd = (180 - y) % 360
    cb = (cd + x) % 360  # B is anticlockwise from ray CD
    return Integer(_ang(180, cb + 180))


# ---------- the method, with one wrong step switched on ----------

def _method(v, p, flaw=None):
    x, y = v["x"], v["y"]
    eq = (lambda a: 180 - a) if flaw == "M2" else (lambda a: a)       # alternate pair
    sup = (lambda a: a) if flaw == "M1" else (lambda a: 180 - a)      # interior pair
    if p["shape"] == "corner":
        pa = sup(x) if p["ra"] == p["f"] else eq(x)
        pc = sup(y) if p["rc"] == p["f"] else eq(y)
        if flaw == "M4":
            return _ok(pa if p["first"] == "A" else pc)
        add = (p["inside"] == "1") != (flaw == "M3")
        return _ok(pa + pc if add else abs(pa - pc))
    pcd = sup(y)                      # CP and DE both point right: interior angles
    if flaw == "M4":
        return _ok(pcd)
    bcp = abs(x - pcd) if flaw == "M3" else x + pcd   # ray CD runs inside angle BCP
    return _ok(eq(bcp))               # BA and CP point opposite ways: alternate angles


def m1(v, p):
    """Takes interior angles (same side, between the lines) as equal."""
    return _method(v, p, "M1")


def m2(v, p):
    """Takes alternate angles as adding to 180 degrees."""
    return _method(v, p, "M2")


def m3(v, p):
    """Adds the two parts when the construction line lies outside the angle, or subtracts when inside."""
    return _method(v, p, "M3")


def m4(v, p):
    """Stops at the first angle found on the construction line."""
    return _method(v, p, "M4")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4}
