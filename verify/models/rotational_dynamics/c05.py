"""C05 Conical pendulum and well of death: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "well_v":   least speed in m/s on the wall of a vertical cylindrical well (inputs r, mu, g);
  "well_n":   least frequency in rev/s for the same stunt (inputs r, mu, g);
  "cone_ke":  kinetic energy of a conical pendulum's bob (inputs m_g grams, L_cm, rpm, pi2, g);
  "cone_T":   period of a conical pendulum (inputs L_cm, theta degrees, g);
  "funnel_r": radius of the circle of a ball whirling inside a funnel of semi-vertical angle with sin = sin_a,
              at speed v (inputs sin_a, v, g).

The key resolves forces in sympy: on the wall, N = m v^2 / r inwards and friction f = m g upwards,
with f <= mu N; for the pendulum, T cos(theta) = m g and T sin(theta) = m omega^2 L sin(theta); in the
funnel, N sin(a) = m g and N cos(a) = m v^2 / r. It never uses the lesson's finished formulas.
"""
from sympy import Rational, Symbol, pi, solve, sqrt, cos, sin

from physics import sig

_v2, _w2, _r = Symbol("v2", positive=True), Symbol("w2", positive=True), Symbol("r", positive=True)


def _well_v2(r, mu, g, *, flat=False, with_g=True):
    """v^2 at the limit. Wall: f = m g must not exceed mu N = mu m v^2 / r. Flat-road slip: friction is the inward force."""
    g = g if with_g else 1
    eq = (_v2 / r - mu * g) if flat else (g - mu * _v2 / r)
    (v2,) = solve(eq, _v2)
    return v2


def _solve(v, p, *, flat=False, root=True, with_g=True, radius_is_L=False, swap=False, si=True, simple=False, square=True):
    ask = p["ask"]
    if ask in ("well_v", "well_n"):
        v2 = _well_v2(v["r"], v["mu"], v["g"], flat=flat, with_g=with_g)
        speed = sqrt(v2) if root else v2
        return sig(speed if ask == "well_v" else speed / (2 * pi * v["r"]))
    if ask == "cone_ke":
        m = v["m_g"] / 1000 if si else v["m_g"]
        L = v["L_cm"] / 100
        w2 = 4 * v["pi2"] * (v["rpm"] / 60) ** 2  # omega^2 = 4 pi^2 n^2, with the book's pi^2
        c = Symbol("c", positive=True)
        (cos_t,) = solve(L * w2 * c - v["g"], c)  # T sin = m w^2 L sin and T cos = m g give cos = g / (L w^2)
        sin_t = sqrt(1 - cos_t ** 2)
        r = L if radius_is_L else (L * cos_t if swap else L * sin_t)
        return sig(Rational(1, 2) * m * w2 * r ** 2)
    if ask == "cone_T":
        L = v["L_cm"] / 100 if si else v["L_cm"]
        th = v["theta"] * pi / 180
        if simple:
            w2 = v["g"] / L
        else:
            # T cos = m g and T sin = m w^2 L sin, so w^2 = g / (L cos); the swap resolves the other way
            (w2,) = solve(_w2 * L * (sin(th) if swap else cos(th)) - v["g"], _w2)
        return sig(2 * pi / sqrt(w2))
    if ask == "funnel_r":
        sa = v["sin_a"]
        ca = sqrt(1 - sa ** 2)
        speed2 = v["v"] ** 2 if square else v["v"]
        g = v["g"] if with_g else 1
        # N sin(a) = m g and N cos(a) = m v^2 / r; the swap trades them
        up, inward = (ca, sa) if swap else (sa, ca)
        (r,) = solve(inward / up - speed2 / (_r * g), _r)
        return sig(r)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Treats the wall like a flat road: friction as the inward force, giving sqrt(mu r g)."""
    _only(p, "well_v", "well_n")
    return _solve(v, p, flat=True)


def m2(v, p):
    """Forgets the square root: reports v^2 as the speed."""
    _only(p, "well_v", "well_n")
    return _solve(v, p, root=False)


def m3(v, p):
    """Drops g from the force balance."""
    _only(p, "well_v", "well_n", "funnel_r")
    return _solve(v, p, with_g=False)


def m4(v, p):
    """Uses the string length as the radius of the bob's circle."""
    _only(p, "cone_ke")
    return _solve(v, p, radius_is_L=True)


def m5(v, p):
    """Swaps sin and cos when resolving the tension or the normal force."""
    _only(p, "cone_ke", "cone_T", "funnel_r")
    return _solve(v, p, swap=True)


def m6(v, p):
    """Leaves grams or centimetres unconverted."""
    _only(p, "cone_ke", "cone_T")
    return _solve(v, p, si=False)


def m7(v, p):
    """Uses a simple pendulum's period, 2 pi sqrt(L / g), ignoring the angle."""
    _only(p, "cone_T")
    return _solve(v, p, simple=True)


def m8(v, p):
    """Doesn't square the speed."""
    _only(p, "funnel_r")
    return _solve(v, p, square=False)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6,
          "C05-M7": m7, "C05-M8": m8}
