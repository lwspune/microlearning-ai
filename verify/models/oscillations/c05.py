"""C05 Position and time in S.H.M.: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "t_frac": time, in s, after crossing the mean position to reach x = frac A, period T (inputs T, frac);
  "t_ext":  time, in s, to travel d cm from the positive extreme, amplitude A cm, period T (inputs T, A, d);
  "a_at":   size of the acceleration, in m/s^2, t s after crossing the mean position, amplitude A_cm, frequency n (inputs A_cm, n, t);
  "v_at":   velocity, in m/s, at time t of x = A sin(w t) (inputs A, w, t);
  "A_from": amplitude, in cm, of S.H.M. of period T that starts at the positive extreme and is d cm from it at time t,
            before reaching the mean position (inputs T, t, d).

The key uses x = A sin(omega t) from the mean position and x = A sin(omega t + pi/2) = A cos(omega t) from the positive
extreme, with omega = 2 pi / T = 2 pi n, v = dx/dt and a = -omega^2 x, solving in sympy for the first time that fits.
"""
from sympy import Interval, Rational, Symbol, asin, cos, diff, pi, sin, solve, solveset

from physics import sig

_t = Symbol("t", real=True)
_A = Symbol("A", positive=True)


def _first(eq, T):
    """The first time in (0, T/4] solving eq: before the particle first turns round."""
    return min(solveset(eq, _t, Interval.Lopen(0, T / 4)), key=float)


def _solve(v, p, *, use_cos=False, degrees=False, linear=False, use_sin=False, dist=False, no_2pi=False, a_max=False,
           no_omega=False, disp=False, sin_deriv=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "t_frac":
        T, f = v["T"], v["frac"]
        if linear:
            return sig(T / 4 * f, n)
        w = 2 * pi / T
        if degrees:
            return sig(asin(f) * 180 / pi / w, n)  # the angle in degrees, used as if radians
        return sig(_first((cos if use_cos else sin)(w * _t) - f, T), n)
    if ask == "t_ext":
        T, A, d = v["T"], v["A"], v["d"]
        if linear:
            return sig(T / 4 * d / A, n)
        w = 2 * pi / T
        target = d / A if dist else (A - d) / A
        return sig(_first((sin if use_sin else cos)(w * _t) - target, T), n)  # from the extreme: x = A cos(w t)
    if ask == "a_at":
        A, nu, t = v["A_cm"] / 100, v["n"], v["t"]
        w = nu if no_2pi else 2 * pi * nu
        if a_max:
            return sig(w**2 * A, n)
        x = A * (cos if use_cos else sin)(w * t)
        return sig(abs(-(w**2) * x), n)  # a = -w^2 x
    if ask == "v_at":
        A, w, t = v["A"], v["w"], v["t"]
        x = A * sin(w * _t)
        if disp:
            return sig(x.subs(_t, t), n)
        if no_omega:
            return sig(A * cos(w * t), n)
        if sin_deriv:
            return sig(A * w * sin(w * t), n)
        return sig(diff(x, _t).subs(_t, t), n)
    if ask == "A_from":
        T, t, d = v["T"], v["t"], v["d"]
        if linear:
            return sig(d * (T / 4) / (t % T), n)  # takes the distance from the extreme to grow steadily
        w = 1 / T if no_2pi else 2 * pi / T
        (A,) = solve(_A - d - _A * (sin(w * t) if use_sin else cos(w * t)), _A)  # x = A cos(w t) = A - d
        return sig(A, n)
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
    "C05-M1": _m(("t_frac", "a_at"), use_cos=True),  # uses cosine though timing starts at the mean position
    "C05-M2": _m(("t_frac",), degrees=True),  # takes the angle in degrees as radians
    "C05-M3": _m(("t_frac", "t_ext", "A_from"), linear=True),  # takes the displacement to change steadily with time
    "C05-M4": _m(("t_ext", "A_from"), use_sin=True),  # uses x = A sin(w t) though the motion starts at an extreme
    "C05-M5": _m(("t_ext",), dist=True),  # takes the distance travelled as the displacement
    "C05-M6": _m(("a_at", "A_from"), no_2pi=True),  # forgets the 2 pi: w = n, or 1/T
    "C05-M7": _m(("a_at",), a_max=True),  # gives the maximum acceleration
    "C05-M8": _m(("v_at",), no_omega=True),  # leaves out omega when differentiating
    "C05-M9": _m(("v_at",), disp=True),  # gives the displacement instead of the velocity
    "C05-M10": _m(("v_at",), sin_deriv=True),  # takes the derivative of sin as sin
}
