"""C03 Segments, rays and the midpoint: answer models (the key, and one per misconception).

Inputs (sympy):
- op "half": a, b, the co-ordinates of the ends of a segment; asked: the length of half of it
  (the distance from an end to the midpoint).
- op "whole": c, m, the co-ordinates of one end C and of the midpoint; asked: the length of the
  whole segment.
- op "set": t, s, r, pp, q, the positions of the points T, S, R, P, Q on one line (left to
  right); asked: the intersection or union of two rays or segments, as a set of positions
  (an Interval, a single point, the empty set or the whole line).
Params (strings): op; for "set" also f1 and f2 (e.g. "ray PQ", "seg QR") and how ("cap" or "cup").
"""
from sympy import Abs, FiniteSet, Interval, Rational, S, oo

HALF = Rational(1, 2)


def _ends(v, p, op):
    if p["op"] != op:
        raise ValueError(f"applies only to op {op}")
    return (v["a"], v["b"]) if op == "half" else (v["c"], v["m"])


def _pos(v):
    return {"T": v["t"], "S": v["s"], "R": v["r"], "P": v["pp"], "Q": v["q"]}


def _figure(name, v, ray_mode):
    """The points of 'ray XY' or 'seg XY' as a set of positions on the line.

    ray_mode: "true" (starts at X, goes through Y), "seg" (stops at Y, like a segment) or
    "reversed" (read backwards: starts at Y, goes through X).
    """
    kind, letters = name.split()
    pos = _pos(v)
    x, y = pos[letters[0]], pos[letters[1]]
    if kind == "seg" or (kind == "ray" and ray_mode == "seg"):
        return Interval(min(x, y), max(x, y))
    if ray_mode == "reversed":
        x, y = y, x
    return Interval(x, oo) if y > x else Interval(-oo, x)


def _combine(a, b, how):
    out = a.intersect(b) if how == "cap" else a.union(b)
    if isinstance(out, Interval) and out.start == out.end:
        return FiniteSet(out.start)
    return out


def _set(v, p, ray_mode="true", how=None):
    if p["op"] != "set":
        raise ValueError("applies only to op set")
    if ray_mode != "true" and not (p["f1"].startswith("ray") or p["f2"].startswith("ray")):
        raise ValueError("needs a ray")
    a, b = _figure(p["f1"], v, ray_mode), _figure(p["f2"], v, ray_mode)
    return _combine(a, b, how or p["how"])


def key(v, p):
    if p["op"] == "half":
        a, b = _ends(v, p, "half")
        return HALF * Abs(a - b)
    if p["op"] == "whole":
        c, m = _ends(v, p, "whole")
        return 2 * Abs(m - c)
    return _set(v, p)


def m1(v, p):
    """Ignores the sign of a negative co-ordinate: the length is the difference of the sizes."""
    if p["op"] == "half":
        a, b = _ends(v, p, "half")
        return HALF * Abs(Abs(a) - Abs(b))
    c, m = _ends(v, p, "whole")
    return 2 * Abs(Abs(m) - Abs(c))


def m2(v, p):
    """Halves and doubles the wrong way round: AM = 2 AB, and AB = AM / 2."""
    if p["op"] == "half":
        a, b = _ends(v, p, "half")
        return 2 * Abs(a - b)
    c, m = _ends(v, p, "whole")
    return HALF * Abs(m - c)


def m3(v, p):
    """Gives a co-ordinate where a length is asked: the midpoint's, or the far end's."""
    if p["op"] == "half":
        a, b = _ends(v, p, "half")
        return HALF * (a + b)
    c, m = _ends(v, p, "whole")
    return 2 * m - c


def m4(v, p):
    """Treats a ray as a segment: ray XY stops at Y."""
    return _set(v, p, ray_mode="seg")


def m5(v, p):
    """Swaps intersection and union."""
    if p.get("op") != "set":
        raise ValueError("applies only to op set")
    return _set(v, p, how="cup" if p["how"] == "cap" else "cap")


def m6(v, p):
    """Reads a ray's name backwards: thinks ray XY starts at Y."""
    return _set(v, p, ray_mode="reversed")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
