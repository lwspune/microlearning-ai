"""C07 Angle of contact and capillarity: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "rise":    capillary rise in a tube of radius r_mm (inputs r_mm, T, theta, rho, g);
  "scale":   rise in a tube of k times the radius, when it is h0 in the first (inputs h0, k);
  "angle":   angle of contact, in degrees, of a liquid depressed by depth d in a tube of radius r (inputs d, r, T, rho, g);
  "wets":    the angle of contact of a liquid that wets a surface completely (a named answer);
  "T_from_h": surface tension from a rise h_cm in a tube of radius r_mm, theta = 0 (inputs h_cm, r_mm, rho, g).

The key balances forces on the raised column: the surface pulls up along the wall with T cos(theta) on the
whole edge 2 pi r, and holds up the column's weight, rho (pi r^2 h) g. It solves this in sympy. A
depression is a negative h.
"""
from sympy import Symbol, acos, cos, deg, pi, solve

from physics import sig

_x = Symbol("x", real=True)

WETS = {
    "key": Symbol("zero"),
    "C07-M9": Symbol("acute"),
    "C07-M10": Symbol("right_angle"),
    "C07-M11": Symbol("obtuse"),
}


def _balance(T, theta_cos, r, h, rho, g, *, two=True):
    """Upward pull minus the column's weight; zero at balance. The slip drops the 2 (uses pi r for the edge)."""
    edge = 2 * pi * r if two else pi * r
    return T * theta_cos * edge - rho * pi * r ** 2 * h * g


def _solve(v, p, *, two=True, si=True, with_g=True, scale=None, sign=True, gcc=False):
    ask = p["ask"]
    if ask == "rise":
        r = v["r_mm"] / 1000 if si else v["r_mm"]
        g = v["g"] if with_g else 1
        (h,) = solve(_balance(v["T"], cos(v["theta"] * pi / 180), r, _x, v["rho"], g, two=two), _x)
        return sig(h)
    if ask == "scale":
        power = {"inverse": -1, "direct": 1, "inverse_square": -2, "none": 0}[scale or "inverse"]
        return sig(v["h0"] * v["k"] ** power)
    if ask == "angle":
        h = -v["d"] if sign else v["d"]
        rho = v["rho"] / 1000 if gcc else v["rho"]
        g = v["g"] if with_g else 1
        (c,) = solve(_balance(v["T"], _x, v["r"], h, rho, g, two=two), _x)
        return sig(deg(acos(c)))
    if ask == "T_from_h":
        h, r = (v["h_cm"] / 100, v["r_mm"] / 1000) if si else (v["h_cm"], v["r_mm"])
        g = v["g"] if with_g else 1
        (T,) = solve(_balance(_x, 1, r, h, v["rho"], g, two=two), _x)
        return sig(T)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return WETS["key"] if p["ask"] == "wets" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Forgets the 2 in 2T cos(theta) / (r rho g)."""
    _only(p, "rise", "T_from_h")
    return _solve(v, p, two=False)


def m2(v, p):
    """Leaves millimetres (or centimetres) unconverted."""
    _only(p, "rise", "T_from_h")
    return _solve(v, p, si=False)


def m3(v, p):
    """Leaves g out of the column's weight."""
    _only(p, "rise", "angle", "T_from_h")
    return _solve(v, p, with_g=False)


def m4(v, p):
    """Thinks the rise grows with the tube's radius."""
    _only(p, "scale")
    return _solve(v, p, scale="direct")


def m5(v, p):
    """Thinks the rise goes as 1/r^2."""
    _only(p, "scale")
    return _solve(v, p, scale="inverse_square")


def m6(v, p):
    """Thinks the rise depends only on the liquid, not on the tube."""
    _only(p, "scale")
    return _solve(v, p, scale="none")


def m7(v, p):
    """Ignores the sign of a depression, treating it as a rise."""
    _only(p, "angle")
    return _solve(v, p, sign=False)


def m8(v, p):
    """Uses the density in g/cm^3."""
    _only(p, "angle")
    return _solve(v, p, gcc=True)


def _wets(p, m):
    _only(p, "wets")
    return WETS[m]


def m9(v, p):
    """Thinks any acute angle of contact means complete wetting."""
    return _wets(p, "C07-M9")


def m10(v, p):
    """Thinks complete wetting means meeting the wall at a right angle."""
    return _wets(p, "C07-M10")


def m11(v, p):
    """Thinks a larger angle of contact means better wetting."""
    return _wets(p, "C07-M11")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6,
          "C07-M7": m7, "C07-M8": m8, "C07-M9": m9, "C07-M10": m10, "C07-M11": m11}
