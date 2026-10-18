"""C08 The cosine rule: answer models (the key, and one per misconception).

Inputs: the sides a, b, c of triangle ABC (as given), and t, an angle in radians.
params["ask"]:
  "cos"         the cosine of the angle at params["at"] (A, B or C), from the three sides;
  "angle"       that angle itself, in radians, from the three sides;
  "side"        the side opposite params["at"], from the other two sides and t, the angle between them;
  "cos_largest" the cosine of the triangle's largest angle, from the three sides.
The key places the triangle on coordinates (B at the origin, C on the x-axis, A from the two
distance equations) and reads angles off dot products, never from the cosine rule.
"""
from sympy import acos, asin, cos, pi, simplify, sqrt

NAMES = "ABC"


def _sides(v):
    return {k: v[k.lower()] for k in NAMES if k.lower() in v}


def _check_ask(p, *allowed):
    if p.get("ask") not in allowed:
        raise ValueError(f"model doesn't apply to ask={p.get('ask')}")


# ---------- key: coordinates, not the rule ----------

def _vertices(s):
    """B = (0, 0), C = (a, 0); A = (x, y) with x^2 + y^2 = c^2 and (x - a)^2 + y^2 = b^2."""
    a, b, c = s["A"], s["B"], s["C"]
    x = simplify((a**2 + c**2 - b**2) / (2 * a))  # subtracting the two distance equations
    y = simplify(sqrt(c**2 - x**2))
    if not y.is_positive:
        raise ValueError("not a triangle")
    return {"A": (x, y), "B": (0, 0), "C": (a, 0)}


def _cos_at(s, at):
    """cos of the angle at a vertex: the dot product of the two edge vectors over their lengths."""
    P = _vertices(s)
    o = P[at]
    p, q = [P[k] for k in NAMES if k != at]
    u = (p[0] - o[0], p[1] - o[1])
    w = (q[0] - o[0], q[1] - o[1])
    return simplify((u[0] * w[0] + u[1] * w[1]) / (sqrt(u[0] ** 2 + u[1] ** 2) * sqrt(w[0] ** 2 + w[1] ** 2)))


def _largest(s):
    """The vertex opposite the longest side."""
    return max(NAMES, key=lambda k: float(s[k]))


def _side_key(v, p):
    """A at the origin, AB along the x-axis (length c), AC at angle t (length b): BC by distance."""
    others = [k for k in NAMES if k != p["at"]]
    m, n = [_sides(v)[k] for k in others]
    t = v["t"]
    return simplify(sqrt((m * cos(t) - n) ** 2 + (m * simplify(sqrt(1 - cos(t) ** 2))) ** 2))


def key(v, p):
    ask = p.get("ask")
    if ask == "side":
        return _side_key(v, p)
    s = _sides(v)
    if ask == "cos":
        return _cos_at(s, p["at"])
    if ask == "angle":
        return simplify(acos(_cos_at(s, p["at"])))
    if ask == "cos_largest":
        return _cos_at(s, _largest(s))
    raise ValueError(f"unknown ask {ask}")


# ---------- the rule, and its wrong versions ----------

def _rule_cos(s, at, sign=-1, two=2):
    """cos at a vertex from the rule; sign=+1 is the plus-sign slip, two=1 drops the 2."""
    opp = s[at]
    m, n = [s[k] for k in NAMES if k != at]
    return simplify(-sign * (m**2 + n**2 - opp**2) / (two * m * n))


def _angle(k):
    if not (-1 < k < 1):
        raise ValueError("not a cosine of a triangle's angle")
    return simplify(acos(k))


def m1(v, p):
    """Uses c^2 = a^2 + b^2 - 2ab cos C whatever angle is asked: finds the angle at C."""
    _check_ask(p, "cos", "angle")
    if p["at"] == "C":
        raise ValueError("the C-form is right for C")
    k = _rule_cos(_sides(v), "C")
    return k if p["ask"] == "cos" else _angle(k)


def m2(v, p):
    """a^2 = b^2 + c^2 + 2bc cos A (plus sign): the cosine comes out with its sign flipped."""
    ask = p.get("ask")
    if ask == "side":
        others = [k for k in NAMES if k != p["at"]]
        m, n = [_sides(v)[k] for k in others]
        return simplify(sqrt(m**2 + n**2 + 2 * m * n * cos(v["t"])))
    s = _sides(v)
    at = _largest(s) if ask == "cos_largest" else p["at"]
    k = _rule_cos(s, at, sign=1)
    return _angle(k) if ask == "angle" else k


def m3(v, p):
    """Drops the 2: cos A = (b^2 + c^2 - a^2) / (bc), or a^2 = b^2 + c^2 - bc cos A."""
    ask = p.get("ask")
    if ask == "side":
        others = [k for k in NAMES if k != p["at"]]
        m, n = [_sides(v)[k] for k in others]
        return simplify(sqrt(m**2 + n**2 - m * n * cos(v["t"])))
    s = _sides(v)
    at = _largest(s) if ask == "cos_largest" else p["at"]
    k = _rule_cos(s, at, two=1)
    return _angle(k) if ask == "angle" else k


def m4(v, p):
    """Stops at a^2: gives the square of the side as the side."""
    _check_ask(p, "side")
    return simplify(_side_key(v, p) ** 2)


def m5(v, p):
    """Reads the angle from the sine table: the acute alpha with sin alpha = |cos A|,
    then pi - alpha when cos A is negative."""
    _check_ask(p, "angle")
    k = _rule_cos(_sides(v), p["at"])
    al = simplify(asin(abs(k)))
    return al if k >= 0 else simplify(pi - al)


def m6(v, p):
    """Takes the largest angle to be the one between the two longest sides
    (the angle opposite the shortest side)."""
    _check_ask(p, "cos_largest")
    s = _sides(v)
    small = min(NAMES, key=lambda k: float(s[k]))
    return _rule_cos(s, small)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
