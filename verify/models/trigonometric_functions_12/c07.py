"""C07 The sine rule: answer models (the key, and one per misconception).

Inputs (sympy, angles in radians; a missing one is not needed by that question):
  A, B, C  angles of the triangle;  a, b  sides;  R  the circumradius.
Params: ask, what the question asks for
  "ratio"   a : b : c from A and B. A ratio is the same after scaling, so every ratio is
            returned scaled to make its first term 1 (a Tuple).
  "angleB"  B, in degrees, from a, b and A.
  "R"       the circumradius from a and A.
  "b"       the side b from a, A and B.
  "c"       the side c from R and C.

The key never uses the sine rule: it builds the triangle from coordinates and measures it.
"""
from sympy import Matrix, Tuple, acos, asin, cos, pi, radsimp, simplify, sin, solve, sqrt, sqrtdenest, symbols


def _tidy(e):
    return sqrtdenest(radsimp(simplify(e)))


def _ratio(x, y, z):
    return Tuple(*(_tidy(t / x) for t in (x, y, z)))


def _deg(angle):
    return _tidy(angle * 180 / pi)


def _dist(p, q):
    return _tidy(sqrt((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2))


def _apex(B, C, base):
    """A = the meeting point of the rays from B(0, 0) at angle B and from C(base, 0) at angle pi - C."""
    t, s = symbols("t s")
    eqs = [t * cos(B) - (base + s * cos(pi - C)), t * sin(B) - s * sin(pi - C)]
    sol = solve(eqs, [t, s], dict=True)[0]
    return (sol[t] * cos(B), sol[t] * sin(B))


def _third(v):
    C = pi - v["A"] - v["B"]
    if not (0 < v["A"] < pi and 0 < v["B"] < pi and 0 < C < pi):
        raise ValueError("not the angles of a triangle")
    return C


def key(v, p):
    ask = p["ask"]
    if ask == "ratio":
        C = _third(v)
        Bp, Cp = (0, 0), (1, 0)
        Ap = _apex(v["B"], C, 1)
        return _ratio(_dist(Bp, Cp), _dist(Cp, Ap), _dist(Ap, Bp))
    if ask == "angleB":
        # A at the origin, AB along the x-axis, C = b(cos A, sin A); B = (x, 0) with BC = a.
        a, b, A = v["a"], v["b"], v["A"]
        cx, cy = b * cos(A), b * sin(A)
        disc = a**2 - cy**2
        xs = [r for r in {_tidy(cx + sqrt(disc)), _tidy(cx - sqrt(disc))} if r.is_positive]
        if len(xs) != 1:
            raise ValueError("no triangle, or two (the ambiguous case)")
        x = xs[0]
        BA, BC = Matrix([-x, 0]), Matrix([cx - x, cy])
        return _deg(acos(_tidy(BA.dot(BC) / (x * _dist((0, 0), (cx - x, cy))))))
    if ask == "R":
        # Any triangle with BC = a and angle A: take B = C. Its circumcentre is on the axis x = a/2.
        a, A = v["a"], v["A"]
        Bang = (pi - A) / 2
        Ap = _apex(Bang, Bang, a)
        k = symbols("k")
        (ky,) = solve((a / 2) ** 2 + k**2 - ((a / 2 - Ap[0]) ** 2 + (k - Ap[1]) ** 2), k)
        return _tidy(sqrt((a / 2) ** 2 + ky**2))
    if ask == "b":
        C = _third(v)
        Ap = _apex(v["B"], C, v["a"])
        return _dist((v["a"], 0), Ap)
    if ask == "c":
        # On the circle x^2 + y^2 = R^2, A and B at the ends of a chord, C at the bottom of the circle;
        # the chord's central angle is 2C, so the angle at C is C (C acute).
        R, C = v["R"], v["C"]
        Ap, Bp = (-R * sin(C), R * cos(C)), (R * sin(C), R * cos(C))
        return _dist(Ap, Bp)
    raise ValueError(f"unknown ask {ask}")


def m1(v, p):
    """The sides are in the ratio of the angles."""
    ask = p["ask"]
    if ask == "ratio":
        return _ratio(v["A"], v["B"], _third(v))
    if ask == "angleB":
        return _deg(v["A"] * v["b"] / v["a"])
    if ask == "b":
        return _tidy(v["a"] * v["B"] / v["A"])
    raise ValueError("no angle-to-side pairing to misuse")


def m2(v, p):
    """Side times sine is constant: a sin A = b sin B = c sin C (= 2R)."""
    ask = p["ask"]
    if ask == "ratio":
        return _ratio(1 / sin(v["A"]), 1 / sin(v["B"]), 1 / sin(_third(v)))
    if ask == "angleB":
        s = _tidy(v["a"] * sin(v["A"]) / v["b"])
        if not 0 < s <= 1:
            raise ValueError("sin B out of range")
        return _deg(asin(s))
    if ask == "R":
        return _tidy(v["a"] * sin(v["A"]) / 2)
    if ask == "b":
        return _tidy(v["a"] * sin(v["A"]) / sin(v["B"]))
    if ask == "c":
        return _tidy(2 * v["R"] / sin(v["C"]))
    raise ValueError(f"unknown ask {ask}")


def m3(v, p):
    """Names the sides round the triangle (a = AB, b = BC, c = CA), so a goes with C, b with A, c with B."""
    if p["ask"] != "ratio":
        raise ValueError("shows only when all three sides are named")
    C = _third(v)
    return _ratio(sin(C), sin(v["A"]), sin(v["B"]))


def m4(v, p):
    """Forgets the 2: a / sin A = R."""
    ask = p["ask"]
    if ask == "R":
        return _tidy(v["a"] / sin(v["A"]))
    if ask == "c":
        return _tidy(v["R"] * sin(v["C"]))
    raise ValueError("no R in the question")


def m5(v, p):
    """Uses cosines in place of sines: a / cos A = b / cos B = 2R."""
    ask = p["ask"]
    if ask == "angleB":
        c = _tidy(v["b"] * cos(v["A"]) / v["a"])
        if not -1 < c < 1:
            raise ValueError("cos B out of range")
        return _deg(acos(c))
    if ask == "R":
        return _tidy(v["a"] / (2 * cos(v["A"])))
    if ask == "b":
        return _tidy(v["a"] * cos(v["B"]) / cos(v["A"]))
    if ask == "c":
        return _tidy(2 * v["R"] * cos(v["C"]))
    raise ValueError("not used for ratios")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
