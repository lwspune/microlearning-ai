"""C05 Inscribed angle: answer models (the key, and one per misconception).

Angles and arcs go in and come out in degrees (plain numbers; the options use fmt="deg").
params["type"] names the question:
  arc_in      v["a"] = the inscribed angle ACB; asks m(arc ACB), the arc the angle is inscribed in
  central     v["a"] = the inscribed angle ABC; asks the central angle AOC on the arc it intercepts
  iso         chord LM = chord LN, v["a"] = angle L; asks m(arc LN), the arc not containing M
  chord_r     chord AB equals the radius; asks the angle ACB, C on the major arc
  bisector    AB is a diameter, CD bisects angle ACB and meets the circle at D; asks m(arc DB)
  arc_to_ang  v["arc"] = m(arc MN); asks the angle MLN, L on the other arc

The key never quotes the inscribed angle theorem: it places the points on a unit circle,
measures angles from co-ordinates, and solves numerically for any unknown arc. Each
misconception applies its wrong rule to the given numbers.
"""
import mpmath as mp
from sympy import Rational, nsimplify

mp.mp.dps = 40
FULL = 360


def _pt(deg):
    t = mp.radians(deg)
    return (mp.cos(t), mp.sin(t))


def _angle(v, p, q):
    """The angle pvq at vertex v, in degrees."""
    a = (p[0] - v[0], p[1] - v[1])
    b = (q[0] - v[0], q[1] - v[1])
    c = (a[0] * b[0] + a[1] * b[1]) / (mp.sqrt(a[0] ** 2 + a[1] ** 2) * mp.sqrt(b[0] ** 2 + b[1] ** 2))
    return mp.degrees(mp.acos(c))


def _exact(x):
    r = nsimplify(float(x), rational=True, tolerance=1e-9)
    if abs(float(r) - float(x)) > 1e-8:
        raise ValueError("not a clean value")
    return Rational(r)


def _solve(f, target, top=FULL):
    """The arc t in (0, top) with f(t) = target (f increasing), by bisection."""
    lo, hi = mp.mpf("1e-6"), mp.mpf(top) - mp.mpf("1e-6")
    for _ in range(200):
        mid = (lo + hi) / 2
        if f(mid) < target:
            lo = mid
        else:
            hi = mid
    return (lo + hi) / 2


def _angle_on_other_arc(t):
    """A at 0 degrees, B at t: the angle ACB with C at the middle of the arc from B round to A."""
    return _angle(_pt(t / 2 + FULL / 2), _pt(0), _pt(t))


def key(v, p):
    ty = p["type"]
    if ty == "arc_in":
        t = _solve(_angle_on_other_arc, mp.mpf(str(v["a"])))  # arc AB not containing C
        return _exact(FULL - t)
    if ty == "central":
        t = _solve(_angle_on_other_arc, mp.mpf(str(v["a"])))  # arc AXC not containing B
        return _exact(_angle((0, 0), _pt(0), _pt(t)))
    if ty == "iso":
        # M at 0, N at t; LM = LN puts L at the middle of the arc from N round to M.
        t = _solve(_angle_on_other_arc, mp.mpf(str(v["a"])))
        L, N, M = _pt(t / 2 + FULL / 2), _pt(t), _pt(0)
        if abs(mp.sqrt((L[0] - M[0]) ** 2 + (L[1] - M[1]) ** 2) - mp.sqrt((L[0] - N[0]) ** 2 + (L[1] - N[1]) ** 2)) > 1e-20:
            raise ValueError("LM and LN are not equal")
        return _exact(_angle((0, 0), L, N))  # arc LN not containing M is under 180 here
    if ty == "chord_r":
        def chord(t):
            a, b = _pt(0), _pt(t)
            return mp.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)
        t = _solve(chord, mp.mpf(1), 180)  # the minor arc whose chord equals the radius 1
        return _exact(_angle_on_other_arc(t))
    if ty == "bisector":
        A, B, C = _pt(180), _pt(0), _pt(v["c"])
        ua = (A[0] - C[0], A[1] - C[1])
        ub = (B[0] - C[0], B[1] - C[1])
        na, nb = mp.sqrt(ua[0] ** 2 + ua[1] ** 2), mp.sqrt(ub[0] ** 2 + ub[1] ** 2)
        d = (ua[0] / na + ub[0] / nb, ua[1] / na + ub[1] / nb)
        # C + s d on the unit circle, s != 0: s = -2 (C . d) / |d|^2.
        s = -2 * (C[0] * d[0] + C[1] * d[1]) / (d[0] ** 2 + d[1] ** 2)
        D = (C[0] + s * d[0], C[1] + s * d[1])
        return _exact(_angle((0, 0), D, B))
    if ty == "arc_to_ang":
        return _exact(_angle_on_other_arc(mp.mpf(str(v["arc"]))))
    raise ValueError(f"unknown type {ty}")


def m1(v, p):
    """Takes an inscribed angle equal to its intercepted arc (no half), as a central angle is."""
    ty = p["type"]
    if ty == "arc_in":
        return FULL - v["a"]
    if ty == "central":
        return v["a"]
    if ty == "iso":
        return (FULL - v["a"]) / 2
    if ty == "chord_r":
        return Rational(60)
    if ty == "bisector":
        return Rational(90, 2)  # knows the right angle at C; then arc DB = angle DCB
    if ty == "arc_to_ang":
        return v["arc"]
    raise ValueError("unknown type")


def m2(v, p):
    """Takes the arc through the vertex (the arc the angle is inscribed in) as its intercepted arc."""
    ty = p["type"]
    if ty == "arc_in":
        return 2 * v["a"]
    if ty == "central":
        return FULL - 2 * v["a"]
    if ty == "iso":
        return v["a"]  # arc MLN = 2a, split equally between LM and LN
    if ty == "chord_r":
        return Rational(FULL - 60, 2)
    if ty == "arc_to_ang":
        return (FULL - v["arc"]) / 2
    raise ValueError("no arc through the vertex here")


def m3(v, p):
    """Doubles where it should halve: arc = half the inscribed angle, angle = twice the arc."""
    ty = p["type"]
    if ty == "arc_in":
        return FULL - v["a"] / 2
    if ty == "central":
        return v["a"] / 2
    if ty == "iso":
        return (FULL - v["a"] / 2) / 2
    if ty == "chord_r":
        return Rational(120)
    if ty == "bisector":
        return Rational(45, 2)
    if ty == "arc_to_ang":
        return 2 * v["arc"]
    raise ValueError("unknown type")


def m4(v, p):
    """Takes a major arc as 180 degrees minus the minor arc."""
    ty = p["type"]
    if ty == "arc_in":
        return 180 - 2 * v["a"]
    if ty == "iso":
        return (180 - 2 * v["a"]) / 2
    raise ValueError("no major arc in this question")


def m5(v, p):
    """Takes the angle in a semicircle as 180 degrees, the measure of the semicircular arc."""
    if p["type"] == "bisector":
        return Rational(180)  # angle DCB = 90, then arc DB = 2 x 90
    raise ValueError("no semicircle in this question")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
