"""C08 Two bodies orbiting each other: answer models (the key, and one per misconception).

Two bodies m1, m2 a distance d apart circle their centre of mass with one angular speed w. Gravity,
G m1 m2 / d^2, is each body's centripetal force: m1 w^2 r1 = G m1 m2 / d^2 with r1 = m2 d / (m1 + m2), so
w^2 = G (m1 + m2) / d^3 and T = 2 pi sqrt(d^3 / (G (m1 + m2))). params["ask"]:
  "v_equal":  speed of each of two equal masses m going round one circle of radius r (symbolic);
  "T_pair":   period of masses m and k m a distance d apart (input k; symbolic);
  "v_ratio":  v_heavy / v_light for a heavier star k times as massive as the lighter (input k);
  "r_light":  radius, in m, of the lighter star's orbit (inputs mh, ml in kg, d in m);
  "E_pair":   total energy of masses M and k M a distance d apart (input k; symbolic);
  "v_square": speed of each of four equal masses M at the corners of a square, on a circle of radius R.
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import sig

G, m, r, d, M, R = (Symbol(s) for s in ("G", "m", "r", "d", "M", "R"))


def _speed(F, mass, radius):
    """The speed for which F is the centripetal force: mass v^2 / radius = F."""
    return sqrt(F * radius / mass)


def _square_pull(resolve=True, opposite=True):
    """Net pull towards the centre on one of four masses M at a square's corners on a circle of radius R."""
    side = sqrt(2) * R  # the two neighbours
    along = 1 / sqrt(2) if resolve else 1  # cos 45 degrees: each neighbour's pull is at 45 degrees to the radius
    F = 2 * G * M**2 / side**2 * along
    if opposite:
        F += G * M**2 / (2 * R) ** 2  # the body across the circle, along the radius
    return F


def key(v, p):
    ask = p["ask"]
    if ask == "v_equal":  # separation 2r, each circles radius r
        return _speed(G * m**2 / (2 * r) ** 2, m, r)
    if ask == "T_pair":
        m1, m2 = m, v["k"] * m
        r1 = m2 * d / (m1 + m2)
        w2 = (G * m1 * m2 / d**2) / (m1 * r1)  # m1 w^2 r1 = G m1 m2 / d^2
        return 2 * pi / sqrt(w2)
    if ask == "v_ratio":  # same w, so v is proportional to r, and r is inversely proportional to the mass
        mh, ml = v["k"], 1
        rh, rl = ml / (mh + ml), mh / (mh + ml)
        return rh / rl
    if ask == "r_light":
        return sig(v["mh"] * v["d"] / (v["mh"] + v["ml"]))
    if ask == "E_pair":
        m1, m2 = M, v["k"] * M
        r1, r2 = m2 * d / (m1 + m2), m1 * d / (m1 + m2)
        w2 = G * (m1 + m2) / d**3
        K = Rational(1, 2) * w2 * (m1 * r1**2 + m2 * r2**2)
        return K - G * m1 * m2 / d
    if ask == "v_square":
        return _speed(_square_pull(), M, R)
    raise ValueError(f"unknown ask {ask}")


def m1(v, p):
    """Takes the circle's radius r as the distance between the two bodies in Newton's law."""
    if p["ask"] != "v_equal":
        raise ValueError("does not apply to this item")
    return _speed(G * m**2 / r**2, m, r)


def m2(v, p):
    """Thinks one body stays fixed while the other circles it at radius d, pulled by that body's mass alone."""
    ask = p["ask"]
    if ask == "v_equal":  # the moving one circles at the separation 2r
        return _speed(G * m**2 / (2 * r) ** 2, m, 2 * r)
    if ask == "T_pair":  # the lighter star m circles the heavier one, fixed
        return 2 * pi * sqrt(d**3 / (G * v["k"] * m))
    if ask == "v_ratio":  # each star: v^2 = G m_other / d
        return sqrt(Rational(1) / v["k"])
    if ask == "r_light":  # the lighter star circles the fixed heavier one at radius d
        return sig(v["d"])
    if ask == "E_pair":  # each star's kinetic energy as if the other were fixed: (1/2) m_i G m_other / d
        m1_, m2_ = M, v["k"] * M
        K = Rational(1, 2) * m1_ * G * m2_ / d + Rational(1, 2) * m2_ * G * m1_ / d
        return K - G * m1_ * m2_ / d
    if ask == "v_square":  # the right pull, but the orbit radius taken as the distance across, 2R
        return _speed(_square_pull(), M, 2 * R)
    raise ValueError("does not apply to this item")


def m3(v, p):
    """Puts the heavier body farther from the centre of mass: radii (and speeds) in the direct ratio of masses."""
    ask = p["ask"]
    if ask == "v_ratio":
        return v["k"]
    if ask == "r_light":
        return sig(v["ml"] * v["d"] / (v["mh"] + v["ml"]))
    raise ValueError("does not apply to this item")


def m4(v, p):
    """Thinks one period means one speed, so both bodies move equally fast on equal circles."""
    ask = p["ask"]
    if ask == "v_ratio":
        return Rational(1)
    if ask == "r_light":
        return sig(v["d"] / 2)
    raise ValueError("does not apply to this item")


def m5(v, p):
    """Gives the frequency w / (2 pi) when asked for the period."""
    if p["ask"] != "T_pair":
        raise ValueError("does not apply to this item")
    return sqrt(G * (1 + v["k"]) * m / d**3) / (2 * pi)


def m6(v, p):
    """Uses a body's own orbit radius in place of d in T^2 = 4 pi^2 d^3 / (G (m1 + m2))."""
    ask = p["ask"]
    if ask == "v_equal":  # v^2 = G (m + m) / r
        return sqrt(G * 2 * m / r)
    if ask == "T_pair":  # the lighter star's radius, k d / (1 + k)
        k = v["k"]
        rl = k * d / (1 + k)
        return 2 * pi * sqrt(rl**3 / (G * (1 + k) * m))
    raise ValueError("does not apply to this item")


def m7(v, p):
    """Takes the potential energy alone as the total energy, leaving out the kinetic energy."""
    if p["ask"] != "E_pair":
        raise ValueError("does not apply to this item")
    return -G * M * v["k"] * M / d


def m8(v, p):
    """Gives each body its own potential energy -G m1 m2 / d, counting the pair's one potential energy twice."""
    if p["ask"] != "E_pair":
        raise ValueError("does not apply to this item")
    m1_, m2_ = M, v["k"] * M
    return G * m1_ * m2_ / (2 * d) - 2 * G * m1_ * m2_ / d


def m9(v, p):
    """Adds the neighbours' pulls as plain numbers, without taking their parts along the radius."""
    if p["ask"] != "v_square":
        raise ValueError("does not apply to this item")
    return _speed(_square_pull(resolve=False), M, R)


def m10(v, p):
    """Counts only the two nearest bodies, leaving out the one across the circle."""
    if p["ask"] != "v_square":
        raise ValueError("does not apply to this item")
    return _speed(_square_pull(opposite=False), M, R)


MODELS = {
    "key": key,
    "C08-M1": m1,
    "C08-M2": m2,
    "C08-M3": m3,
    "C08-M4": m4,
    "C08-M5": m5,
    "C08-M6": m6,
    "C08-M7": m7,
    "C08-M8": m8,
    "C08-M9": m9,
    "C08-M10": m10,
}
