"""C11 Conservation of angular momentum: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "balloon": new frequency of a spinning spherical balloon at n1 after a fraction `lost` of its water leaks out (inputs n1, lost);
  "clay":    distance x from the axis at which a lump m sticks to a disc (M, R) slowing it from n1 to n2 (inputs M, R, m, n1, n2);
  "orbit":   in which orbits angular momentum is conserved (a named answer);
  "skater":  new spin of a body going from I1 at n1 to I2 (inputs I1, n1, I2);
  "two_discs": common w when an identical disc at rest is dropped coaxially onto one turning at w1 (inputs w1).

The key sets the angular momentum before equal to that after, L = I w, and solves in sympy. For the
balloon, mass is proportional to volume, so R^3 scales with the mass, and I scales as m R^2.
"""
from sympy import Rational, Symbol, solve, sqrt

from physics import sig

_y = Symbol("y", positive=True)

ORBITS = {
    "key": Symbol("both"),
    "C11-M7": Symbol("elliptical_only"),
    "C11-M8": Symbol("circular_only"),
    "C11-M9": Symbol("neither"),
}


def _conserve(I1, w1, I2, *, energy=False, invert=False, same=False):
    """The final w from I1 w1 = I2 w2 (or a misconception's rule)."""
    if same:
        return w1
    if energy:
        (w2,) = solve(I1 * w1 ** 2 - I2 * _y ** 2, _y)
        return w2
    if invert:
        return w1 * I2 / I1
    (w2,) = solve(I1 * w1 - I2 * _y, _y)
    return w2


def _solve(v, p, *, radius=True, mass=True, invert=False, ring=False, root=True, energy=False, same=False):
    ask = p["ask"]
    if ask == "balloon":
        m_ratio = 1 - v["lost"]
        r_ratio = m_ratio ** Rational(1, 3)  # same density: R^3 goes with the mass
        I_ratio = (m_ratio if mass else 1) * (r_ratio ** 2 if radius else 1)
        return sig(_conserve(1, v["n1"], I_ratio, invert=invert))
    if ask == "clay":
        M, R, m, n1, n2 = v["M"], v["R"], v["m"], v["n1"], v["n2"]
        I1 = M * R ** 2 if ring else Rational(1, 2) * M * R ** 2
        x2 = Symbol("x2", positive=True)
        rule = (I1 * n1 ** 2 - (I1 + m * x2) * n2 ** 2) if energy else (I1 * n1 - (I1 + m * x2) * n2)
        (X2,) = solve(rule, x2)
        return sig(sqrt(X2) if root else X2)
    if ask in ("skater", "two_discs"):
        if ask == "skater":
            I1, w1, I2 = v["I1"], v["n1"], v["I2"]
        else:
            I1, w1, I2 = 1, v["w1"], 2  # two identical discs share one axis
        return sig(_conserve(I1, w1, I2, energy=energy, invert=invert, same=same))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return ORBITS["key"] if p["ask"] == "orbit" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Changes only the mass and forgets that the radius shrinks too."""
    _only(p, "balloon")
    return _solve(v, p, radius=False)


def m2(v, p):
    """Changes only the radius and forgets that the mass changes too."""
    _only(p, "balloon")
    return _solve(v, p, mass=False)


def m3(v, p):
    """Turns the ratio upside down, making w grow with I."""
    _only(p, "balloon", "skater", "two_discs")
    return _solve(v, p, invert=True)


def m4(v, p):
    """Uses the ring formula M R^2 for a disc."""
    _only(p, "clay")
    return _solve(v, p, ring=True)


def m5(v, p):
    """Forgets the square root, reporting x^2 as x."""
    _only(p, "clay")
    return _solve(v, p, root=False)


def m6(v, p):
    """Conserves kinetic energy instead of angular momentum."""
    _only(p, "clay", "skater", "two_discs")
    return _solve(v, p, energy=True)


def _orbit(p, m):
    _only(p, "orbit")
    return ORBITS[m]


def m7(v, p):
    """Thinks the principle applies only when the speed changes, as in an elliptical orbit."""
    return _orbit(p, "C11-M7")


def m8(v, p):
    """Thinks the principle needs uniform motion, as in a circular orbit."""
    return _orbit(p, "C11-M8")


def m9(v, p):
    """Thinks the Sun's pull exerts a torque on the planet."""
    return _orbit(p, "C11-M9")


def m10(v, p):
    """Thinks the spin stays the same when I changes."""
    _only(p, "skater", "two_discs")
    return _solve(v, p, same=True)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6,
          "C11-M7": m7, "C11-M8": m8, "C11-M9": m9, "C11-M10": m10}
