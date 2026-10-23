"""C01 Linear simple harmonic motion: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "k":      force constant, in N/m, of a body feeling restoring force F at displacement x_cm (inputs F, x_cm, m);
  "a":      acceleration, in m/s^2, at displacement x_cm of a body of mass m feeling F0 at x0_cm (inputs F0, x0_cm, m, x_cm);
  "define": what linear S.H.M. is (a named answer);
  "F2":     restoring force, in N, at x2 of a body feeling F1 at x1, both in cm (inputs F1, x1, x2);
  "which":  which force law gives linear S.H.M. (a named answer).

The key uses the defining law of linear S.H.M., F = -kx, with Newton's second law a = F/m, solving in sympy with
displacements in metres.
"""
from sympy import Rational, Symbol, solve

from physics import sig

_k = Symbol("k", positive=True)
CM = Rational(1, 100)

NAMED = {
    "define": {"key": "restoring_prop_x", "C01-M5": "constant_force", "C01-M6": "away_from_mean", "C01-M7": "any_periodic"},
    "which": {"key": "minus_4x", "C01-M5": "minus_4", "C01-M6": "plus_4x", "C01-M9": "minus_4x2"},
}


def _k_from(F, x):
    (k,) = solve(F - _k * x, _k)  # |F| = k x
    return k


def _solve(v, p, *, cm=False, times=False, per_m=False, no_sign=False, constant=False, inverse=False, square=False):
    ask, n = p["ask"], p.get("sf", 3)
    unit = 1 if cm else CM
    if ask == "k":
        F, x = v["F"], v["x_cm"] * unit
        if times:
            return sig(F * x, n)
        if per_m:
            return sig(F / v["m"], n)
        return sig(_k_from(F, x), n)
    if ask == "a":
        if constant:
            return sig(-v["F0"] / v["m"], n)
        k = _k_from(v["F0"], v["x0_cm"] * CM)
        a = -k * v["x_cm"] * unit / v["m"]  # a = F / m = -k x / m; M1 plugs the new x in unconverted
        return sig(-a if no_sign else a, n)
    if ask == "F2":
        F1, x1, x2 = v["F1"], v["x1"], v["x2"]
        if constant:
            return sig(F1, n)
        if inverse:
            return sig(F1 * x1 / x2, n)
        if square:
            return sig(F1 * (x2 / x1) ** 2, n)
        return sig(_k_from(F1, x1 * CM) * x2 * CM, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named_or(mid, asks, **kw):
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
    "C01-M1": _named_or("C01-M1", ("k", "a"), cm=True),  # leaves the displacement in cm
    "C01-M2": _named_or("C01-M2", ("k",), times=True),  # multiplies force by displacement
    "C01-M3": _named_or("C01-M3", ("k",), per_m=True),  # divides the force by the mass
    "C01-M4": _named_or("C01-M4", ("a",), no_sign=True),  # drops the minus sign
    "C01-M5": _named_or("C01-M5", ("a", "F2"), constant=True),  # thinks the restoring force is the same everywhere
    "C01-M6": _named_or("C01-M6", ()),  # thinks the force points away from the mean position
    "C01-M7": _named_or("C01-M7", ()),  # thinks every periodic motion along a line is S.H.M.
    "C01-M8": _named_or("C01-M8", ("F2",), inverse=True),  # thinks the force shrinks as the displacement grows
    "C01-M9": _named_or("C01-M9", ("F2",), square=True),  # takes the force as proportional to x^2
}
