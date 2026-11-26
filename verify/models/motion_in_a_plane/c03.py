"""C03 Velocity and acceleration in a plane: answer models (the key, and one per misconception).

params["ask"]:
  "speed": speed, in m/s, after t s from u = ux i + uy j with constant a = ax i + ay j (inputs ux, uy, ax, ay, t);
  "disp":  size of the displacement, in m, in the same motion (same inputs);
  "dir":   angle, in degrees, of the velocity with the x axis at time t for r = p t i + q t^2 j (inputs p, q, t);
  "avgv":  size of the average velocity, in m/s, from (x1, y1) at t1 to (x2, y2) at t2;
  "xeq":   the x-coordinate under constant acceleration (a named answer);
  "same":  when average and instantaneous velocities are equal (a named answer).
"""
from sympy import Rational, Symbol, atan2, pi, sqrt

from physics import sig

NAMED = {
    "xeq": {"key": "x_ux_ax", "C03-M1": "x_mag", "C03-M8": "x_ux_ay", "C03-M9": "x_ux_only"},
    "same": {"key": "const_velocity", "C03-M10": "const_speed", "C03-M11": "const_accel", "C03-M12": "straight_path"},
}


def _mag(x, y):
    return sqrt(x**2 + y**2)


def _deg(rad):
    return rad * 180 / pi


def _solve(v, p, *, mags=False, add=False, no_u=False, no_half=False, pos=False, swap=False, along_a=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("speed", "disp"):
        ux, uy, ax, ay, t = v["ux"], v["uy"], v["ax"], v["ay"], v["t"]
        if ask == "speed":
            if mags:
                return sig(_mag(ux, uy) + _mag(ax, ay) * t, n)
            X, Y = (0 if no_u else ux) + ax * t, (0 if no_u else uy) + ay * t
        else:
            h = 1 if no_half else Rational(1, 2)
            X, Y = (0 if no_u else ux * t) + h * ax * t**2, (0 if no_u else uy * t) + h * ay * t**2
        return sig(X + Y if add else _mag(X, Y), n)
    if ask == "dir":
        P, q, t = v["p"], v["q"], v["t"]
        if pos:
            X, Y = P * t, q * t**2
        elif along_a:
            X, Y = 0, 2 * q
        else:
            X, Y = P, 2 * q * t
        if swap:
            X, Y = Y, X
        return sig(_deg(atan2(Y, X)), n)
    if ask == "avgv":
        dx, dy, dt = v["x2"] - v["x1"], v["y2"] - v["y1"], v["t2"] - v["t1"]
        if mags:
            return sig((_mag(v["x2"], v["y2"]) - _mag(v["x1"], v["y1"])) / dt, n)
        if pos:
            return sig(_mag(v["x2"], v["y2"]) / v["t2"], n)
        return sig((dx + dy if add else _mag(dx, dy)) / dt, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1", ("speed", "avgv"), mags=True),  # adds or subtracts sizes as if vectors were numbers
    "C03-M2": _m("C03-M2", ("speed", "disp", "avgv"), add=True),  # adds the components instead of Pythagoras
    "C03-M3": _m("C03-M3", ("speed", "disp"), no_u=True),  # forgets the initial velocity
    "C03-M4": _m("C03-M4", ("disp",), no_half=True),  # forgets the 1/2 in s = ut + at^2/2
    "C03-M5": _m("C03-M5", ("dir", "avgv"), pos=True),  # uses the position vector for the velocity
    "C03-M6": _m("C03-M6", ("dir",), swap=True),  # tan(theta) = vx/vy
    "C03-M7": _m("C03-M7", ("dir",), along_a=True),  # takes the velocity along the acceleration
    "C03-M8": _m("C03-M8"),  # puts a_y in the x equation
    "C03-M9": _m("C03-M9"),  # keeps the x motion uniform
    "C03-M10": _m("C03-M10"),  # constant speed is enough
    "C03-M11": _m("C03-M11"),  # constant acceleration is enough
    "C03-M12": _m("C03-M12"),  # a straight path is enough
}
