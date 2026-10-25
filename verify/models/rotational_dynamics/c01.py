"""C01 Angular velocity and acceleration: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "t_stop": time for a wheel at n0 rpm to stop after N rotations (inputs n0, N);
  "revs":   revolutions made while speeding up from rest to n rpm in t s (inputs n, t);
  "v":      linear speed of a rim point of a wheel of diameter D at n rpm (inputs D, n);
  "theta":  angle turned in time t at tangential speed v on a circle of diameter D (symbols v, D, t);
  "aT":     tangential acceleration of a rim point, diameter D, from n1 to n2 rpm in t s (inputs D, n1, n2, t).

The key solves the kinematic equations as a system in sympy (it never uses the average-speed
shortcut the lesson teaches) and works in rad and rad/s throughout.
"""
from sympy import Symbol, pi, solve

from physics import sig

_a, _t = Symbol("alpha"), Symbol("t_stop", positive=True)


def _num(x):
    return sig(x) if x.is_number else x


def _stop_time(w0, theta):
    """Time to stop from w0 through angle theta, at constant deceleration: solve w0 + a t = 0 with w0 t + a t^2 / 2 = theta."""
    (sol,) = [s for s in solve([w0 + _a * _t, w0 * _t + _a * _t ** 2 / 2 - theta], [_a, _t], dict=True) if s[_t].is_positive]
    return sol[_t]


def _revs(w, t):
    """Angle turned from rest to w in t at constant alpha, in rad: theta = alpha t^2 / 2."""
    return (w / t) * t ** 2 / 2


def _solve(v, p, *, rad=lambda n: 2 * pi * n / 60, angle=lambda N: 2 * pi * N, radius=lambda D: D / 2,
           steady=False, report_rad=False, arc=False):
    """The physics with each misconception's slip switched in by a keyword."""
    ask = p["ask"]
    if ask == "t_stop":
        w0, theta = rad(v["n0"]), angle(v["N"])
        return _num(theta / w0 if steady else _stop_time(w0, theta))
    if ask == "revs":
        w = rad(v["n"])
        theta = w * v["t"] if steady else _revs(w, v["t"])
        return _num(theta if report_rad else theta / (2 * pi))
    if ask == "v":
        return _num(radius(v["D"]) * rad(v["n"]))
    if ask == "theta":
        s = v["v"] * v["t"]  # arc length
        if arc:
            return s
        if report_rad:
            return s / (pi * v["D"])  # revolutions: arc over circumference
        return _num(s / radius(v["D"]))
    if ask == "aT":
        alpha = (rad(v["n2"]) - rad(v["n1"])) / v["t"]
        return _num(radius(v["D"]) * alpha)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def m1(v, p):
    """Mixes revolutions and radians: takes rev/s as rad/s and a number of rotations as radians, or reports an angle in the wrong one."""
    if p["ask"] in ("revs", "theta"):
        return _solve(v, p, report_rad=True)
    if p["ask"] == "t_stop":  # rotations as radians; slipping on both rev and rev/s together would cancel out
        return _solve(v, p, angle=lambda N: N)
    return _solve(v, p, rad=lambda n: n / 60)


def m2(v, p):
    """Reads rpm as revolutions per second: forgets to divide by 60."""
    if p["ask"] == "theta":
        raise ValueError("no rpm in this item")
    return _solve(v, p, rad=lambda n: 2 * pi * n)


def m3(v, p):
    """Uses one speed for the whole interval, as if there were no angular acceleration: theta = omega t."""
    if p["ask"] not in ("t_stop", "revs"):
        raise ValueError("no change of speed in this item")
    return _solve(v, p, steady=True)


def m4(v, p):
    """Uses the diameter as the radius."""
    if p["ask"] not in ("v", "theta", "aT"):
        raise ValueError("no radius in this item")
    return _solve(v, p, radius=lambda D: D)


def m5(v, p):
    """Takes the arc length as the angle: forgets to divide by r."""
    if p["ask"] != "theta":
        raise ValueError("only the angle-from-arc item")
    return _solve(v, p, arc=True)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
