"""C06 Vertical circular motion: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "v_top":    least speed at the highest point of a vertical circle of radius r (inputs r, g);
  "diameter": diameter of a sphere of death where the speed ranges from v_top to v_bottom (inputs v_top, v_bottom, g);
  "dT":       tension at the lowest point minus tension at the highest, for mass m on a string of length L (inputs m, L, v_top, g);
  "dT_mid":   tension at the horizontal position minus tension at the top, in symbols m, g, at the least speeds (a formula);
  "ke_top":   kinetic energy at the top for a stone of m_g grams on a string L, moving at v_mid when the string is horizontal (inputs m_g, L, v_mid, g).

The key writes Newton's second law along the string at each point (tension and the weight's radial part
give m v^2 / r towards the centre) and energy conservation between points (heights 0, r and 2r above the
lowest point), and solves them in sympy.
"""
from sympy import Rational, Symbol, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)


def _v2_at(v2_from, h_from, h_to, g):
    """Energy conservation: v^2 changes by 2 g (drop in height)."""
    return v2_from + 2 * g * (h_from - h_to)


def _solve(v, p, *, where_top="top", zero_top=False, tension_mg=False, height=2, radius_only=False, square=True,
           weight_only=False, speed_only=False, steady=False, si=True):
    ask = p["ask"]
    if ask == "v_top":
        r, g = v["r"], v["g"]
        if zero_top:
            return 0
        if where_top == "bottom":  # the least speed at the bottom, put at the top
            return sig(sqrt(_v2_at(r * g, 2 * r, 0, g)))
        T_top = (Rational(1) if tension_mg else 0)  # tension at the top, per unit m g
        (v2,) = solve(T_top * g + g - _x / r, _x)  # T + m g = m v^2 / r at the top, per unit mass
        return sig(sqrt(v2))
    if ask == "diameter":
        vt, vb, g = v["v_top"], v["v_bottom"], v["g"]
        a, b = (vt ** 2, vb ** 2) if square else (vt, vb)
        (r,) = solve(_v2_at(a, height * _x, 0, g) - b, _x)  # bottom speed from top speed and the drop
        return sig(r if radius_only else 2 * r)
    if ask in ("dT", "dT_mid"):
        if ask == "dT":
            m, r, g = v["m"], v["L"], v["g"]
            v2_top = v["v_top"] ** 2
        else:
            m, g = v["m"], v["g"]
            r = Symbol("r", positive=True)
            v2_top = r * g  # just completing the circle
        lower = "mid" if ask == "dT_mid" else "bottom"
        if where_top == "swap":  # takes the other point: bottom for mid, mid for bottom
            lower = "bottom" if lower == "mid" else "mid"
        h_lower = {"mid": r, "bottom": 0}[lower]
        v2_lower = _v2_at(v2_top, 2 * r, h_lower, g)
        if weight_only:
            v2_lower = v2_top
        T_top = m * v2_top / r - m * g
        T_lower = m * v2_lower / r - {"mid": 0, "bottom": -m * g}[lower]
        if speed_only:
            T_lower = m * v2_lower / r - m * g  # keeps the weight's pull as it was at the top
        d = (T_lower - T_top).simplify()
        return sig(d) if ask == "dT" else d
    if ask == "ke_top":
        m = v["m_g"] / 1000 if si else v["m_g"]
        r, g = v["L"], v["g"]
        v2_mid = v["v_mid"] ** 2
        h_to = 0 if where_top == "bottom" else 2 * r
        v2 = v2_mid if steady else _v2_at(v2_mid, r, h_to, g)
        return sig(Rational(1, 2) * m * v2)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Mixes up the points of the circle: uses the bottom's value at the top, or the wrong lower point."""
    _only(p, "v_top", "dT", "dT_mid", "ke_top")
    return _solve(v, p, where_top="bottom" if p["ask"] in ("v_top", "ke_top") else "swap")


def m2(v, p):
    """Thinks a string can carry the body over the top at zero speed."""
    _only(p, "v_top")
    return _solve(v, p, zero_top=True)


def m3(v, p):
    """Thinks the tension at the top must still be at least the weight."""
    _only(p, "v_top")
    return _solve(v, p, tension_mg=True)


def m4(v, p):
    """Takes the height between the top and the bottom as r instead of 2r."""
    _only(p, "diameter")
    return _solve(v, p, height=1)


def m5(v, p):
    """Counts only the weight's change of direction between the two points, not the change of speed."""
    _only(p, "dT", "dT_mid")
    return _solve(v, p, weight_only=True)


def m6(v, p):
    """Counts only the change of speed, not the weight's change of direction."""
    _only(p, "dT", "dT_mid")
    return _solve(v, p, speed_only=True)


def m7(v, p):
    """Gives the radius when the diameter is asked."""
    _only(p, "diameter")
    return _solve(v, p, radius_only=True)


def m8(v, p):
    """Uses the speeds without squaring them in the energy equation."""
    _only(p, "diameter")
    return _solve(v, p, square=False)


def m9(v, p):
    """Thinks the speed stays the same all round the vertical circle."""
    _only(p, "ke_top")
    return _solve(v, p, steady=True)


def m10(v, p):
    """Leaves grams unconverted."""
    _only(p, "ke_top")
    return _solve(v, p, si=False)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6,
          "C06-M7": m7, "C06-M8": m8, "C06-M9": m9, "C06-M10": m10}
