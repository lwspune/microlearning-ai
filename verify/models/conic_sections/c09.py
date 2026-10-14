"""C09 Tangents to an ellipse: answer models (the key, and one per misconception).

The ellipse is x^2/a2 + y^2/b2 = 1 (inputs a2, b2). Four question types, chosen by params["type"]:
  "k": the line A x + B y + k = 0 touches the ellipse; find k. Inputs A, B. The answer is a FiniteSet.
  "slope": the tangents parallel or perpendicular (params["rel"]) to A x + B y + C = 0, as one polynomial
      (the product of the lines). params["pick"] = "+" asks for the one with the larger intercept c only.
  "theta": the tangent at the point with eccentric angle th (radians). Input th.
  "from": the tangents through the outside point (px, py), as one polynomial.
Every locus answer is a polynomial in x, y (the curve is polynomial = 0).
"""
from sympy import FiniteSet, Poly, cos, diff, expand, sin, solve, sqrt, symbols

x, y = symbols("x y", real=True)
_m, _c = symbols("m c", real=True)


def _disc(m, c, a2, b2):
    """Discriminant of the x-quadratic from putting y = mx + c into the ellipse: 0 means one meeting point."""
    q = Poly(expand((x**2 / a2 + (m * x + c) ** 2 / b2 - 1) * a2 * b2), x)
    A, B, C = (q.coeff_monomial(x**i) for i in (2, 1, 0))
    return expand(B**2 - 4 * A * C)


def _lines(m, cs):
    """The lines y = mx + c, one per c, as one polynomial."""
    out = 1
    for c in cs:
        out *= y - m * x - c
    return expand(out)


def _slope(v, p, swap=False):
    rel = p["rel"]
    if swap:
        rel = {"parallel": "perpendicular", "perpendicular": "parallel"}[rel]
    s = -v["A"] / v["B"]
    return s if rel == "parallel" else -1 / s


def _need(p, *kinds):
    if p.get("type") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} question")


# --- c from a rule, for a slope m: each returns the list of intercepts c a student gets ---
def _c_touch(m, a2, b2):
    """From the definition: the line meets the ellipse once (discriminant 0)."""
    return sorted(solve(_disc(m, _c, a2, b2), _c), key=lambda c: float(c))


def _c_circle(m, a2, b2):
    """The circle's condition with radius a: c^2 = a^2(1 + m^2)."""
    r = sqrt(a2 * (1 + m**2))
    return [-r, r]


def _c_swap(m, a2, b2):
    """a^2 and b^2 swapped: c^2 = b^2 m^2 + a^2."""
    r = sqrt(b2 * m**2 + a2)
    return [-r, r]


def _answer(v, p, rule, m=None, single=False):
    """Apply a c-rule to the question type."""
    a2, b2 = v["a2"], v["b2"]
    if p["type"] == "k":
        m = -v["A"] / v["B"]
        cs = rule(m, a2, b2)
        ks = [-v["B"] * c for c in cs]   # Ax + By + k = 0 is y = mx - k/B
        return FiniteSet(max(ks, key=lambda k: float(k))) if single else FiniteSet(*ks)
    if p["type"] == "slope":
        m = _slope(v, p) if m is None else m
        cs = rule(m, a2, b2)
        if single or p.get("pick") == "+":
            cs = [max(cs, key=lambda c: float(c))]
        return _lines(m, cs)
    raise ValueError(p["type"])


def _from(px, py, rule, a2, b2):
    """Tangents through (px, py): lines y - py = m(x - px) whose c satisfies the rule, plus a vertical x = px if it touches."""
    out = 1
    if rule is _c_touch:
        ms = solve(_disc(_m, py - _m * px, a2, b2), _m)
        if px**2 == a2:
            out *= x - px
    else:
        ms = solve(((py - _m * px) ** 2 - rule(_m, a2, b2)[1] ** 2), _m)
    assert ms, "no tangents"
    for m in ms:
        out *= y - py - m * (x - px)
    return expand(out)


def _tangent_at(px, py, a2, b2):
    """From the definition: the line through P along the curve's direction (implicit derivative)."""
    F = x**2 / a2 + y**2 / b2 - 1
    fx, fy = diff(F, x).subs({x: px, y: py}), diff(F, y).subs({x: px, y: py})
    return expand((fx * (x - px) + fy * (y - py)) * a2 * b2)


def key(v, p):
    if p["type"] in ("k", "slope"):
        return _answer(v, p, _c_touch)
    if p["type"] == "theta":
        a, b, th = sqrt(v["a2"]), sqrt(v["b2"]), v["th"]
        P = (a * cos(th), b * sin(th))
        # The parametric curve's velocity at th gives the tangent direction.
        dx, dy = -a * sin(th), b * cos(th)
        return expand(dy * (x - P[0]) - dx * (y - P[1]))
    if p["type"] == "from":
        return _from(v["px"], v["py"], _c_touch, v["a2"], v["b2"])
    raise ValueError(p["type"])


def m1(v, p):
    """Carries circle facts to the ellipse: c^2 = a^2(1 + m^2), and the tangent at P perpendicular to OP."""
    if p["type"] in ("k", "slope"):
        return _answer(v, p, _c_circle)
    if p["type"] == "theta":
        a, b, th = sqrt(v["a2"]), sqrt(v["b2"]), v["th"]
        x1, y1 = a * cos(th), b * sin(th)
        return expand(x1 * x + y1 * y - (x1**2 + y1**2))
    if p["type"] == "from":
        return _from(v["px"], v["py"], _c_circle, v["a2"], v["b2"])
    raise ValueError(p["type"])


def m2(v, p):
    """Swaps a^2 and b^2: c^2 = b^2 m^2 + a^2, or x cos(th)/b + y sin(th)/a = 1."""
    if p["type"] in ("k", "slope"):
        return _answer(v, p, _c_swap)
    if p["type"] == "theta":
        a, b, th = sqrt(v["a2"]), sqrt(v["b2"]), v["th"]
        return expand((x * cos(th) / b + y * sin(th) / a - 1) * a * b)
    if p["type"] == "from":
        return _from(v["px"], v["py"], _c_touch, v["b2"], v["a2"])
    raise ValueError(p["type"])


def m3(v, p):
    """Keeps only the + root: one tangent (one k) where there are two."""
    _need(p, "k", "slope")
    if p.get("pick") == "+":
        raise ValueError("the question already asks for one tangent")
    return _answer(v, p, _c_touch, single=True)


def m4(v, p):
    """Swaps parallel and perpendicular slopes."""
    _need(p, "slope")
    return _answer(v, p, _c_touch, m=_slope(v, p, swap=True))


def m5(v, p):
    """Uses the at-a-point formula x x1/a^2 + y y1/b^2 = 1 with an outside point (that line is not a tangent)."""
    _need(p, "from")
    return expand((x * v["px"] / v["a2"] + y * v["py"] / v["b2"] - 1) * v["a2"] * v["b2"])


def m6(v, p):
    """Takes the eccentric angle as the angle of OP: uses the point where the ray at angle th from O meets the ellipse."""
    _need(p, "theta")
    a2, b2, th = v["a2"], v["b2"], v["th"]
    r = 1 / sqrt(cos(th) ** 2 / a2 + sin(th) ** 2 / b2)
    return _tangent_at(r * cos(th), r * sin(th), a2, b2)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
