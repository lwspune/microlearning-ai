"""C04 Banking of roads: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "angle":  angle of banking, in degrees, for speed v (m/s) or v_kmph on a curve of radius r (inputs r, g, and v or v_kmph);
  "length": length of a circular track banked at theta degrees for speed v_kmph (inputs theta, v_kmph, g, pi_book);
  "vmax":   greatest safe speed, in m/s, on a road banked at tan(theta) = tan with friction mu (inputs r, tan, mu, g);
  "vmin":   least safe speed, in km/h, on the same kind of road (inputs r, tan, mu, g).

The key resolves the forces on the vehicle along and across the slope: the normal force N, friction
f = mu N at its limit (down the slope at the top speed, up it at the least), and the weight. It solves
N cos(theta) -/+ f sin(theta) = m g and N sin(theta) +/- f cos(theta) = m v^2 / r in sympy, never using
the lesson's finished formulas.
"""
from sympy import Rational, Symbol, atan, cos, deg, pi, sin, solve, sqrt, tan

from physics import sig

_N, _v2, _t = Symbol("N", positive=True), Symbol("v2", positive=True), Symbol("t", positive=True)


def _speed_sq(r, theta, mu, g, *, friction=1):
    """v^2 at the limit, with friction mu N pointing down the slope (friction=+1, top speed) or up it (-1)."""
    eqs = [_N * cos(theta) - friction * mu * _N * sin(theta) - g, _N * sin(theta) + friction * mu * _N * cos(theta) - _v2 / r]
    sol = solve(eqs, [_N, _v2], dict=True)
    if not sol:
        raise ValueError("no such speed")
    return sol[0][_v2]


def _speed(v, *, kmph=True):
    if "v_kmph" in v:
        return v["v_kmph"] * Rational(5, 18) if kmph else v["v_kmph"]
    return v["v"]


def _angle(v2, r, g, *, invert=False, use_sin=False):
    """The bank angle at which N alone turns the car: N sin = m v^2 / r, N cos = m g; with the slips switched in."""
    ratio = (r * g / v2) if invert else v2 / (r * g)
    if use_sin:
        return deg(atan(ratio / sqrt(1 - ratio ** 2)))  # sin(theta) = ratio
    (t,) = solve(_t - ratio, _t)  # tan(theta) = N sin / N cos
    return deg(atan(t))


def _solve(v, p, *, invert=False, square=True, use_sin=False, kmph=True, friction=True, swap=False, denominator=True):
    ask = p["ask"]
    if ask == "angle":
        s = _speed(v, kmph=kmph)
        return sig(_angle(s ** 2 if square else s, v["r"], v["g"], invert=invert, use_sin=use_sin))
    if ask == "length":
        s = _speed(v, kmph=kmph)
        theta = v["theta"] * pi / 180
        trig = sin(theta) if use_sin else tan(theta)
        r = s ** 2 * trig / v["g"] if invert else s ** 2 / (v["g"] * trig)
        return sig(2 * v["pi_book"] * r)
    if ask in ("vmax", "vmin"):
        theta = atan(v["tan"])
        sign = 1 if ask == "vmax" else -1
        if swap:
            sign = -sign
        if not friction:
            v2 = _speed_sq(v["r"], theta, 0, v["g"])
        elif not denominator:
            v2 = v["r"] * v["g"] * (v["tan"] + sign * v["mu"])
        else:
            v2 = _speed_sq(v["r"], theta, v["mu"], v["g"], friction=sign)
        s = sqrt(v2)
        if ask == "vmin":
            s = s * Rational(18, 5) if kmph else s
        return sig(s)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Inverts the ratio: tan(theta) = r g / v^2."""
    _only(p, "angle", "length")
    return _solve(v, p, invert=True)


def m2(v, p):
    """Doesn't square the speed."""
    _only(p, "angle")
    return _solve(v, p, square=False)


def m3(v, p):
    """Uses sin(theta) where tan(theta) belongs."""
    _only(p, "angle", "length")
    return _solve(v, p, use_sin=True)


def m4(v, p):
    """Skips the km/h and m/s conversion."""
    _only(p, "angle", "length", "vmin")
    return _solve(v, p, kmph=False)


def m5(v, p):
    """Ignores friction: takes the speed at which the bank alone turns the car, sqrt(r g tan(theta)), as the limit."""
    _only(p, "vmax", "vmin")
    return _solve(v, p, friction=False)


def m6(v, p):
    """Swaps the signs: uses the least-speed form for the top speed, or the other way round."""
    _only(p, "vmax")
    return _solve(v, p, swap=True)


def m7(v, p):
    """Adds mu to tan(theta) but drops the (1 -/+ mu tan(theta)) denominator."""
    _only(p, "vmax", "vmin")
    return _solve(v, p, denominator=False)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6, "C04-M7": m7}
