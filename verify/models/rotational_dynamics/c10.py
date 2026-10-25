"""C10 Torque and angular momentum: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "tau_stop": average friction torque on a wheel of M.I. I that stops from w0 rad/s in t_min minutes (inputs I, w0, t_min);
  "fan_power": power of a fan of M.I. I reaching rpm from rest in t seconds at steady torque (inputs I, rpm, t);
  "work":     work done by a steady torque tau in the first N revolutions (inputs tau, N, R);
  "zero":     which quantity is zero when the angular acceleration is zero (a named answer);
  "tau_speedup": torque that takes a wheel of M.I. I from rest to rpm in t seconds (inputs I, rpm, t).

The key works from angular momentum: L = I w, and torque is its rate of change, tau = (L2 - L1) / t for a
steady torque; work is tau times the angle in radians, and power is tau w. It solves these in sympy.
"""
from sympy import Abs, Rational, Symbol, pi

from physics import sig

NAMED = {
    "key": Symbol("torque"),
    "C10-M2": Symbol("angular_momentum"),
    "C10-M9": Symbol("moment_of_inertia"),
    "C10-M10": Symbol("angular_velocity"),
}


def _omega(rpm, *, per_min=True, two_pi=True):
    n = rpm / 60 if per_min else rpm
    return 2 * pi * n if two_pi else n


def _solve(v, p, *, seconds=True, torque_is_L=False, energy_rate=False, half=False, revs=False, per_min=True,
           two_pi=True, arc=False):
    ask = p["ask"]
    if ask == "tau_stop":
        t = v["t_min"] * 60 if seconds else v["t_min"]
        I, w0 = v["I"], v["w0"]
        if torque_is_L:
            return sig(I * w0)
        if energy_rate:
            return sig(Rational(1, 2) * I * w0 ** 2 / t)
        return sig(Abs(I * 0 - I * w0) / t)  # change of L over time
    if ask in ("fan_power", "tau_speedup"):
        I, t = v["I"], v["t"]
        w = _omega(v["rpm"], per_min=per_min, two_pi=two_pi)
        tau = I * w if torque_is_L else (I * w - 0) / t
        if ask == "tau_speedup":
            return sig(tau)
        return sig((Rational(1, 2) if half else 1) * tau * w)
    if ask == "work":
        theta = v["N"] if revs else 2 * pi * v["N"]
        if arc:
            theta = theta * v["R"]  # distance moved by the rim, used as the angle
        return sig((Rational(1, 2) if half else 1) * v["tau"] * theta)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return NAMED["key"] if p["ask"] == "zero" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Leaves the time in minutes."""
    _only(p, "tau_stop")
    return _solve(v, p, seconds=False)


def m2(v, p):
    """Confuses torque with angular momentum: takes tau = I w."""
    if p["ask"] == "zero":
        return NAMED["C10-M2"]
    _only(p, "tau_stop", "fan_power", "tau_speedup")
    return _solve(v, p, torque_is_L=True)


def m3(v, p):
    """Divides the kinetic energy by the time, taking a power for a torque."""
    _only(p, "tau_stop")
    return _solve(v, p, energy_rate=True)


def m4(v, p):
    """Puts in a 1/2, as if work or power were like kinetic energy."""
    _only(p, "fan_power", "work")
    return _solve(v, p, half=True)


def m5(v, p):
    """Keeps the angle in revolutions instead of radians."""
    _only(p, "work")
    return _solve(v, p, revs=True)


def m6(v, p):
    """Reads rpm as revolutions per second."""
    _only(p, "fan_power", "tau_speedup")
    return _solve(v, p, per_min=False)


def m7(v, p):
    """Forgets the 2 pi, using the frequency as w."""
    _only(p, "tau_speedup")
    return _solve(v, p, two_pi=False)


def m8(v, p):
    """Uses the distance moved by the rim, R theta, in place of the angle."""
    _only(p, "work")
    return _solve(v, p, arc=True)


def m9(v, p):
    """Thinks the moment of inertia depends on how the body is moving."""
    _only(p, "zero")
    return NAMED["C10-M9"]


def m10(v, p):
    """Thinks zero angular acceleration means the body is not turning."""
    _only(p, "zero")
    return NAMED["C10-M10"]


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6,
          "C10-M7": m7, "C10-M8": m8, "C10-M9": m9, "C10-M10": m10}
