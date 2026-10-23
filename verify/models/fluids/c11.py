"""C11 Bernoulli's equation: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "efflux":  speed of water out of a door h m below the surface of a dam (inputs h, g, rho);
  "gauge":   speed of water out of an orifice in a tank at gauge pressure p (inputs p, rho);
  "valve":   speed in a pipe whose pressure falls from p1 (closed, at rest) to p2 when the valve opens (inputs p1, p2, rho);
  "dp":      pressure drop between A and B at one level, areas A_cm2 and B_cm2, speed vA_cms at A (inputs A_cm2, B_cm2, vA_cms, rho);
  "conserved": what Bernoulli's theorem conserves (a named answer).

The key applies p + (1/2) rho v^2 + rho g h = constant between two points of a streamline and solves it in
sympy, using continuity, A v = constant, for a speed it is not given.
"""
from sympy import Rational, Symbol, solve, sqrt

from physics import sig

_v = Symbol("v", positive=True)
_p = Symbol("p", real=True)

NAMED = {
    "key": Symbol("energy"),
    "C11-M9": Symbol("linear_momentum"),
    "C11-M10": Symbol("mass"),
    "C11-M11": Symbol("angular_momentum"),
}


def _bernoulli(p1, v1, h1, p2, v2, h2, rho, g=0, *, half=True):
    k = Rational(1, 2) if half else 1
    return (p1 + k * rho * v1 ** 2 + rho * g * h1) - (p2 + k * rho * v2 ** 2 + rho * g * h2)


def _speed(eq, *, root=True, two=True):
    """Solve for v (or report v^2); the slip that drops the 2 halves v^2."""
    (v,) = solve(eq, _v)
    v2 = v ** 2 if two else v ** 2 / 2
    return sqrt(v2) if root else v2


def _solve(v, p, *, root=True, two=True, density=True, one_pressure=False, add=False, diff_sq=False, half=True, si=True):
    ask = p["ask"]
    if ask == "efflux":
        rho = v["rho"]
        # surface (at rest, h above the door) to the door, both at atmospheric pressure
        eq = _bernoulli(0, 0, v["h"], 0, _v, 0, rho, v["g"])
        speed = _speed(eq, root=root, two=two)
        return sig(speed if density else speed * sqrt(rho))
    if ask == "gauge":
        rho = v["rho"] if density else 1
        eq = _bernoulli(v["p"], 0, 0, 0, _v, 0, rho)
        return sig(_speed(eq, root=root, two=two))
    if ask == "valve":
        p1, p2 = v["p1"], v["p2"]
        drop = p2 if one_pressure else (p1 + p2 if add else p1 - p2)
        eq = _bernoulli(drop, 0, 0, 0, _v, 0, v["rho"])
        return sig(_speed(eq, two=two))
    if ask == "dp":
        vA = v["vA_cms"] / 100 if si else v["vA_cms"]
        vB = vA * v["A_cm2"] / v["B_cm2"]  # continuity
        rho = v["rho"]
        if diff_sq:
            return sig(Rational(1, 2) * rho * (vB - vA) ** 2)
        (dp,) = solve(_bernoulli(_p, vA, 0, 0, vB, 0, rho, half=half), _p)  # p_A - p_B, with p_B = 0
        return sig(dp)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return NAMED["key"] if p["ask"] == "conserved" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Drops the 2 in sqrt(2 g h) or sqrt(2 p / rho)."""
    _only(p, "efflux", "gauge", "valve")
    return _solve(v, p, two=False)


def m2(v, p):
    """Forgets the square root."""
    _only(p, "efflux", "gauge")
    return _solve(v, p, root=False)


def m3(v, p):
    """Mishandles the density: keeps it where it cancels, or leaves it out where it stays."""
    _only(p, "efflux", "gauge")
    return _solve(v, p, density=False)


def m4(v, p):
    """Uses one pressure instead of the drop in pressure."""
    _only(p, "valve")
    return _solve(v, p, one_pressure=True)


def m5(v, p):
    """Adds the two pressures instead of taking their difference."""
    _only(p, "valve")
    return _solve(v, p, add=True)


def m6(v, p):
    """Squares the difference of the speeds, (v2 - v1)^2, instead of v2^2 - v1^2."""
    _only(p, "dp")
    return _solve(v, p, diff_sq=True)


def m7(v, p):
    """Forgets the 1/2 in (1/2) rho v^2."""
    _only(p, "dp")
    return _solve(v, p, half=False)


def m8(v, p):
    """Leaves cm/s unconverted."""
    _only(p, "dp")
    return _solve(v, p, si=False)


def _named(p, m):
    _only(p, "conserved")
    return NAMED[m]


def m9(v, p):
    """Thinks Bernoulli's theorem conserves linear momentum."""
    return _named(p, "C11-M9")


def m10(v, p):
    """Confuses it with the equation of continuity, which conserves mass."""
    return _named(p, "C11-M10")


def m11(v, p):
    """Thinks it conserves angular momentum."""
    return _named(p, "C11-M11")


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6,
          "C11-M7": m7, "C11-M8": m8, "C11-M9": m9, "C11-M10": m10, "C11-M11": m11}
