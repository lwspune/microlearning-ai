"""C08 Areas of combined figures: answer models (the key, and one per misconception).

inputs: pi  the value of pi the stem gives (22/7, or 157/50 for 3.14)
        s3  the value of sqrt(3) the stem gives (433/250 for 1.732, 173/100 for 1.73); omitted when not needed
        and the figure's lengths:
          tri3   a      equilateral triangle of side a; r  radius of the three sectors at its vertices
          sq4    a      square of side a; four quarter circles at its corners, radius a/2
          hex    r      circle of radius r with a regular hexagon inscribed in it
          tan    r, h   centre P, radius r = PQ, tangent QR at Q, PR = h; shaded = triangle PQR outside the circle
          rect2  a, b   rectangle PQRS, PQ = a, QR = b; quarter circle centre Q radius a, quarter circle centre R radius b - a
          semi2  L, w   rectangle L by w; on side L two semicircles, diameters d and 2d with d + 2d = L
params: fig  one of the figures above
        ask  rest    the whole shape minus the pieces (the region left)
             pieces  the pieces themselves, added

The key measures a sector by integrating r^2/2 d(phi) over its turn and a triangle as
1/2 x base x the perpendicular height found by Pythagoras, then puts in the stem's pi and sqrt(3).
"""
from sympy import Rational, Symbol, acos, integrate, pi, sqrt, sympify

_phi = Symbol("phi", real=True)


def _approx(e, v):
    """Put in the stem's values of pi and sqrt(3)."""
    e = e.subs(sqrt(3), v.get("s3", sqrt(3)))
    return e.subs(pi, v.get("pi", pi))


def _sector_true(t, r):
    return integrate(r**2 / 2, (_phi, 0, t * pi / 180))


def _parts(v, p, sector, tri):
    """(whole, [pieces]) with exact pi and sqrt(3). tri(base, height, slant) gives a triangle's area."""
    f = p["fig"]
    if f == "tri3":
        a, r = v["a"], v["r"]
        h = sqrt(a**2 - (a / 2) ** 2)
        return tri(a, h, a), [sector(60, r)] * 3
    if f == "sq4":
        a = v["a"]
        return a * a, [sector(90, a / 2)] * 4
    if f == "hex":
        r = v["r"]
        h = sqrt(r**2 - (r / 2) ** 2)
        return sector(360, r), [tri(r, h, r)] * 6
    if f == "tan":
        r, H = v["r"], v["h"]
        qr = sqrt(H**2 - r**2)
        t = acos(r / H) * 180 / pi
        return tri(r, qr, H), [sector(t, r)]
    if f == "rect2":
        a, b = v["a"], v["b"]
        return a * b, [sector(90, a), sector(90, b - a)]
    if f == "semi2":
        L, w = v["L"], v["w"]
        d = L / 3
        return L * w, [sector(180, d / 2), sector(180, d)]
    raise ValueError(f)


def _true_tri(base, height, slant):
    return base * height / 2


def _answer(v, p, whole, pieces, ask=None):
    ask = ask or p["ask"]
    total = sum(pieces)
    ans = whole - total if ask == "rest" else total
    ans = _approx(ans, v)
    if not ans.is_positive:
        raise ValueError(f"not a positive area: {ans}")
    return Rational(ans) if ans.is_Rational else ans


def key(v, p):
    whole, pieces = _parts(v, p, _sector_true, _true_tri)
    return _answer(v, p, whole, pieces)


def m1(v, p):
    """Finds a sector's area with the arc-length rule theta/360 x 2 pi r."""
    whole, pieces = _parts(v, p, lambda t, r: sympify(t) / 360 * 2 * pi * r, _true_tri)
    return _answer(v, p, whole, pieces)


def m2(v, p):
    """Answers with the other region: the pieces when the region left is asked, and the other way round."""
    whole, pieces = _parts(v, p, _sector_true, _true_tri)
    return _answer(v, p, whole, pieces, "pieces" if p["ask"] == "rest" else "rest")


def m3(v, p):
    """Takes a slanting side of a triangle as its height: 1/2 x base x side."""
    if p["fig"] not in ("tri3", "hex", "tan"):
        raise ValueError("no triangle")
    whole, pieces = _parts(v, p, _sector_true, lambda b, h, s: b * s / 2)
    return _answer(v, p, whole, pieces)


def m4(v, p):
    """Counts each sector as a whole circle: theta/360 is dropped."""
    whole, pieces = _parts(v, p, lambda t, r: pi * r**2, _true_tri)
    return _answer(v, p, whole, pieces)


def m5(v, p):
    """Takes away only one of the pieces cut out, missing the others (or the repeated copies)."""
    whole, pieces = _parts(v, p, _sector_true, _true_tri)
    if p["ask"] != "rest" or len(pieces) < 2:
        raise ValueError("needs several pieces cut out")
    return _answer(v, p, whole, pieces[:1])


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
