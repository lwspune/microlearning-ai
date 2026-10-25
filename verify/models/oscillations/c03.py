"""C03 Velocity and acceleration in S.H.M.: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "x_half":  distance, in cm, from the mean position where the speed is v_max / f, for a path of length L cm (inputs L, f);
  "v_at":    speed, in cm/s, at x cm for period T s and path length L cm (inputs T, L, x);
  "T_from":  period, in s, from v_max and a_max (inputs v_max, a_max);
  "n_max":   highest frequency, in Hz, for a block on a piston vibrating with amplitude A m not to leave it (inputs A, g);
  "v_sec":   speed, in cm/s, of a second's pendulum bob at x cm, with amplitude A cm (inputs x, A).

The key uses v = omega sqrt(A^2 - x^2), v_max = A omega, a_max = A omega^2 and omega = 2 pi / T, with the path length 2A;
the block stays on the piston while the piston's downward acceleration never exceeds g, so omega^2 A = g at most.
"""
from sympy import Symbol, pi, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)


def _v(omega, A, x, *, linear=False, plus=False, omega_x=False):
    if linear:
        return omega * (A - x)
    if plus:
        return omega * sqrt(A**2 + x**2)
    if omega_x:
        return omega * x
    return omega * sqrt(A**2 - x**2)


def _solve(v, p, *, path_amp=False, linear=False, kepe=False, plus=False, invert=False, omega_T=False, no_2pi=False,
           cm=False, gA=False, omega_x=False, omega_2pi=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "x_half":
        A = v["L"] if path_amp else v["L"] / 2  # path length = 2A
        if kepe:
            return sig(A / sqrt(2), n)
        omega = 1  # cancels
        (x,) = solve(_v(omega, A, _x, linear=linear) - omega * A / v["f"], _x)
        return sig(x, n)
    if ask == "v_at":
        A = v["L"] if path_amp else v["L"] / 2
        return sig(_v(2 * pi / v["T"], A, v["x"], linear=linear, plus=plus), n)
    if ask == "T_from":
        omega = v["v_max"] / v["a_max"] if invert else v["a_max"] / v["v_max"]  # a_max / v_max = A w^2 / A w
        if omega_T:
            return sig(omega, n)
        return sig(1 / omega if no_2pi else 2 * pi / omega, n)
    if ask == "n_max":
        A, g = v["A"] * (100 if cm else 1), v["g"]
        if gA:
            omega = sqrt(g * A)
        else:
            (omega,) = solve(_x**2 * A - g, _x)  # a_max = omega^2 A = g
        return sig(omega if no_2pi else omega / (2 * pi), n)
    if ask == "v_sec":
        omega = 2 * pi if omega_2pi else 2 * pi / 2  # a second's pendulum has T = 2 s
        return _v(omega, v["A"], v["x"], linear=linear, omega_x=omega_x)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m(("x_half", "v_at"), path_amp=True),  # takes the path length as the amplitude
    "C03-M2": _m(("x_half", "v_at", "v_sec"), linear=True),  # takes the speed to fall linearly: v = w (A - x)
    "C03-M3": _m(("x_half",), kepe=True),  # mixes it up with where KE = PE, x = A / sqrt 2
    "C03-M4": _m(("v_at",), plus=True),  # adds the squares: v = w sqrt(A^2 + x^2)
    "C03-M5": _m(("T_from",), invert=True),  # inverts the ratio: w = v_max / a_max
    "C03-M6": _m(("T_from",), omega_T=True),  # takes w as the period
    "C03-M7": _m(("T_from", "n_max"), no_2pi=True),  # forgets the 2 pi linking w with T or n
    "C03-M8": _m(("n_max",), cm=True),  # leaves the amplitude in cm
    "C03-M9": _m(("n_max",), gA=True),  # takes w^2 = g A
    "C03-M10": _m(("v_sec",), omega_x=True),  # takes v = w x
    "C03-M11": _m(("v_sec",), omega_2pi=True),  # takes w = 2 pi for a second's pendulum
}
