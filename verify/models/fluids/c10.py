"""C10 Equation of continuity: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "v_out":   speed out of an outlet of area A2_mm2 when a piston of area A1_cm2 moves at v1_cms (inputs A1_cm2, A2_mm2, v1_cms);
  "nozzle":  diameter of a nozzle, in cm, where water at v1 in a pipe of diameter d1_cm speeds up to v2 (inputs d1_cm, v1, v2);
  "why":     why water speeds up entering a narrower pipe (a named answer);
  "narrow":  speed in a narrow section of radius r2 when the speed is v1 at radius r1 (inputs r1, r2, v1);
  "rate":    volume flow rate from a tap of internal diameter d_cm at speed v (inputs d_cm, v).

The key conserves the volume flowing each second, A1 v1 = A2 v2, with A = pi r^2, and solves in sympy.
"""
from sympy import Rational, Symbol, pi, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)

WHY = {
    "key": Symbol("same_volume_smaller_area"),
    "C10-M3": Symbol("speed_does_not_change"),
    "C10-M6": Symbol("pipe_pushes_harder"),
    "C10-M7": Symbol("water_squeezed"),
}


def _continuity(A1, v1, A2):
    (v2,) = solve(A1 * v1 - A2 * _x, _x)
    return v2


def _solve(v, p, *, invert=False, units=True, same=False, linear=False, square_ratio=False, diameter_as_r=False, rim=False):
    ask = p["ask"]
    if ask == "v_out":
        A1 = v["A1_cm2"] * Rational(1, 10**4) if units else v["A1_cm2"]
        A2 = v["A2_mm2"] * Rational(1, 10**6) if units else v["A2_mm2"]
        v1 = v["v1_cms"] / 100
        if same:
            return sig(v1)
        return sig(v1 * A2 / A1 if invert else _continuity(A1, v1, A2))
    if ask == "nozzle":
        d1, v1, v2 = v["d1_cm"], v["v1"], v["v2"]
        if linear:
            return sig(d1 * v1 / v2)
        if square_ratio:
            return sig(d1 * (v1 / v2) ** 2)
        if invert:
            return sig(d1 * sqrt(v2 / v1))
        (d2,) = solve(pi * d1 ** 2 / 4 * v1 - pi * _x ** 2 / 4 * v2, _x)
        return sig(d2)
    if ask == "narrow":
        r1, r2, v1 = v["r1"], v["r2"], v["v1"]
        if same:
            return sig(v1)
        if linear:
            return sig(v1 * r1 / r2)
        if invert:
            return sig(v1 * (r2 / r1) ** 2)
        return sig(_continuity(pi * r1 ** 2, v1, pi * r2 ** 2))
    if ask == "rate":
        r = v["d_cm"] / 100 if units else v["d_cm"]
        if not diameter_as_r:
            r = r / 2
        A = 2 * pi * r if rim else pi * r ** 2
        return sig(A * v["v"])
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return WHY["key"] if p["ask"] == "why" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Turns the area ratio upside down."""
    _only(p, "v_out", "nozzle", "narrow")
    return _solve(v, p, invert=True)


def m2(v, p):
    """Compares areas (or lengths) in different units without converting."""
    _only(p, "v_out", "rate")
    return _solve(v, p, units=False)


def m3(v, p):
    """Thinks the speed stays the same all along the pipe."""
    if p["ask"] == "why":
        return WHY["C10-M3"]
    _only(p, "v_out", "narrow")
    return _solve(v, p, same=True)


def m4(v, p):
    """Takes the speed to change in proportion to the diameter or radius, not its square."""
    _only(p, "nozzle", "narrow")
    return _solve(v, p, linear=True)


def m5(v, p):
    """Squares the speed ratio instead of taking its square root."""
    _only(p, "nozzle")
    return _solve(v, p, square_ratio=True)


def m6(v, p):
    """Thinks the narrow pipe pushes harder on the water."""
    _only(p, "why")
    return WHY["C10-M6"]


def m7(v, p):
    """Thinks the water is squeezed into a smaller volume."""
    _only(p, "why")
    return WHY["C10-M7"]


def m8(v, p):
    """Uses the diameter as the radius."""
    _only(p, "rate")
    return _solve(v, p, diameter_as_r=True)


def m9(v, p):
    """Uses the circumference of the opening instead of its area."""
    _only(p, "rate")
    return _solve(v, p, rim=True)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6,
          "C10-M7": m7, "C10-M8": m8, "C10-M9": m9}
