"""C02 The S.H.M. equation: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "n_eq":     frequency, in Hz, of the S.H.M. d^2x/dt^2 = -c x (inputs c);
  "n_spring": frequency, in Hz, of mass m on a spring of force constant k (inputs k, m);
  "masses":   the ratio m1 : m2 when tying m2 to m1 multiplies the period on a spring by f (inputs f);
  "springs":  the ratio of frequencies of a mass on two identical springs in series and in parallel;
  "equation": the differential equation of linear S.H.M. (a named answer).

The key uses d^2x/dt^2 + omega^2 x = 0 with omega^2 = k/m, n = omega / 2 pi and T = 2 pi sqrt(m/k), and the
spring constants k/2 in series and 2k in parallel, solving in sympy.
"""
from sympy import Rational, Symbol, pi, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)

NAMED = {
    "equation": {"key": "plus_k_over_m", "C02-M4": "plus_m_over_k", "C02-M11": "minus_k_over_m", "C02-M12": "first_derivative"},
}


def _n(omega2, *, no_root=False, omega_as_n=False, period=False):
    omega = omega2 if no_root else sqrt(omega2)
    if omega_as_n:
        return omega
    if period:
        return 2 * pi / omega
    return omega / (2 * pi)


def _solve(v, p, *, upside=False, linear=False, alone=False, invert=False, prop_k=False, swap=False, inv_k=False, **kw):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "n_eq":
        return sig(_n(v["c"], **kw), n)
    if ask == "n_spring":
        return sig(_n(v["m"] / v["k"] if upside else v["k"] / v["m"], **kw), n)
    if ask == "masses":
        f = v["f"]
        # T ∝ sqrt(m): (m1 + m2) / m1 = f^2; linear: T ∝ m; alone: only m2 oscillates the second time
        if linear:
            (r,) = solve((1 + 1 / _x) - f, _x)  # r = m1 / m2
        elif alone:
            (r,) = solve(1 / _x - f**2, _x)
        else:
            (r,) = solve((1 + 1 / _x) - f**2, _x)
        return 1 / r if invert else r
    if ask == "springs":
        k_series, k_parallel = Rational(1, 2), 2  # in units of k
        if swap:
            k_series, k_parallel = k_parallel, k_series
        if prop_k:
            return k_series / k_parallel
        if inv_k:
            return k_parallel / k_series
        return sqrt(k_series / k_parallel)  # n ∝ sqrt(k)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks, **kw):
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
    "C02-M1": _m("C02-M1", ("n_eq", "n_spring"), no_root=True),  # forgets the square root: omega = k/m
    "C02-M2": _m("C02-M2", ("n_eq", "n_spring"), omega_as_n=True),  # takes omega as the frequency
    "C02-M3": _m("C02-M3", ("n_eq", "n_spring"), period=True),  # gives the period instead of the frequency
    "C02-M4": _m("C02-M4", ("n_spring",), upside=True),  # turns k/m upside down
    "C02-M5": _m("C02-M5", ("masses",), linear=True),  # takes the period proportional to m
    "C02-M6": _m("C02-M6", ("masses",), alone=True),  # leaves out the first mass the second time
    "C02-M7": _m("C02-M7", ("masses",), invert=True),  # gives m2 : m1 instead
    "C02-M8": _m("C02-M8", ("springs",), prop_k=True),  # takes the frequency proportional to k
    "C02-M9": _m("C02-M9", ("springs",), swap=True),  # swaps the series and parallel spring constants
    "C02-M10": _m("C02-M10", ("springs",), inv_k=True),  # takes the frequency proportional to 1/k
    "C02-M11": _m("C02-M11", ()),  # gets the sign of the equation wrong
    "C02-M12": _m("C02-M12", ()),  # uses the first derivative
}
