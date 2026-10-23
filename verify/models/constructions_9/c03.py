"""C03 Two angles and the perimeter: answer models (the key, and one per misconception).

Angle questions: the triangle has base angles v["b"] (at the base vertex next to the left end P of the
perimeter segment) and v["c"] (next to the right end Q), in degrees, and perimeter v["p"] (cm).
params["kind"]:
  half      the angle (degrees) at end params["end"] ("L" or "R") of the perimeter segment, between
            it and the ray to A; the same value as the equal angle at A in that isosceles triangle.
  plan      Tuple(angle of the ray at P, angle of the ray at Q).
  plan_seg  Tuple(angle of the ray at end params["end"], the segment whose perpendicular bisector
            gives the base vertex next to that end).
Ratio questions: perimeter v["p"], sides in the ratio v["r1"] : v["r2"] : v["r3"] (r1 < r2 < r3);
  ratio     the side for the term params["term"] ("r1", "r2" or "r3"), in cm.
Named answers (Symbols): SEG_NEAR (A joined to the asked end), SEG_FAR (A joined to the other end).
"""
import math

from sympy import Rational, Symbol, Tuple, solve, symbols, sympify

SEG_NEAR, SEG_FAR = Symbol("seg_A_to_this_end"), Symbol("seg_A_to_other_end")


def _deg(v, name):
    return sympify(v[name])


def _end_angles(v):
    """The angles at P and Q, measured on the triangle itself: sides by the sine rule scaled to the
    perimeter, AB laid off beyond B to P and CA beyond C to Q, then the angles read from coordinates."""
    b, c, p = (float(sympify(v[n])) for n in ("b", "c", "p"))
    a_ang = 180 - b - c
    if a_ang <= 0:
        raise ValueError("no triangle")
    s = [math.sin(math.radians(x)) for x in (a_ang, b, c)]
    k = p / sum(s)
    bc, ca, ab = (k * x for x in s)
    ax, ay = ab * math.cos(math.radians(b)), ab * math.sin(math.radians(b))
    at_p = math.degrees(math.atan2(ay, ax + ab))            # P = (-AB, 0)
    at_q = math.degrees(math.atan2(ay, (bc + ca) - ax))     # Q = (BC + CA, 0)
    out = []
    for x in (at_p, at_q):
        r = Rational(round(x * 2), 2)
        assert abs(float(r) - x) < 1e-9, x
        out.append(r)
    return out


def _pick(v, p, pair):
    return pair[0] if p.get("end", "L") == "L" else pair[1]


def key(v, p):
    k = p["kind"]
    if k == "ratio":
        return _ratio(v, p, "sum")
    ends = _end_angles(v)
    if k == "half":
        return _pick(v, p, ends)
    if k == "plan":
        return Tuple(*ends)
    if k == "plan_seg":
        return Tuple(_pick(v, p, ends), SEG_NEAR)
    raise ValueError("unknown kind")


def _ratio(v, p, how):
    """The side for the asked term; `how` says how the student finds k."""
    x = symbols("x", positive=True)
    t = [sympify(v[n]) for n in ("r1", "r2", "r3")]
    per = sympify(v["p"])
    if how == "sum":           # 2k + 3k + 4k = perimeter
        kval = solve(sum(ti * x for ti in t) - per, x)[0]
    elif how == "three":       # k = perimeter / number of sides
        kval = per / 3
    elif how == "longest":     # the largest term's side is the perimeter
        kval = solve(max(t) * x - per, x)[0]
    elif how == "inverted":    # k = (sum of terms) / perimeter
        kval = sum(t) / per
    else:
        raise ValueError(how)
    return sympify(v[p["term"]]) * kval


def _wrong_ends(v, p, at_l, at_r, seg):
    k = p["kind"]
    if k == "ratio":
        raise ValueError("angle questions only")
    if k == "half":
        return at_l if p.get("end", "L") == "L" else at_r
    if k == "plan":
        return Tuple(at_l, at_r)
    if k == "plan_seg":
        return Tuple(at_l if p.get("end", "L") == "L" else at_r, seg)
    raise ValueError("not an angle question")


def m1(v, p):
    """Draws the whole base angle at each end of the perimeter segment, not half of it."""
    if p["kind"] == "ratio":
        raise ValueError("angle questions only")
    return _wrong_ends(v, p, _deg(v, "b"), _deg(v, "c"), SEG_NEAR)


def m2(v, p):
    """Takes the given base angle as the angle at B inside triangle PBA, so the equal angles are (180 - B)/2."""
    if p["kind"] == "ratio":
        raise ValueError("angle questions only")
    return _wrong_ends(v, p, 90 - _deg(v, "b") / 2, 90 - _deg(v, "c") / 2, SEG_NEAR)


def m3(v, p):
    """Swaps the ends: half of the angle C at the end next to B, and bisects the segment to the far end."""
    if p["kind"] == "ratio":
        raise ValueError("angle questions only")
    if _deg(v, "b") == _deg(v, "c"):
        raise ValueError("equal base angles: swapping changes nothing")
    return _wrong_ends(v, p, _deg(v, "c") / 2, _deg(v, "b") / 2, SEG_FAR)


def m4(v, p):
    """Ratio: divides the perimeter by 3 (the number of sides) to get k."""
    if p["kind"] != "ratio":
        raise ValueError("ratio questions only")
    return _ratio(v, p, "three")


def m5(v, p):
    """Ratio: reads the perimeter as the longest side, so (largest term) x k = perimeter."""
    if p["kind"] != "ratio":
        raise ValueError("ratio questions only")
    return _ratio(v, p, "longest")


def m6(v, p):
    """Ratio: divides the wrong way round, k = (sum of the terms) / perimeter."""
    if p["kind"] != "ratio":
        raise ValueError("ratio questions only")
    return _ratio(v, p, "inverted")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
