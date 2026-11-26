"""C10 Half-life and mean life: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "half":   the half-life from the decay constant (input lam; the answer in the unit of 1/lam);
  "pct":    the percentage of a sample left after time t (inputs T = half-life, t, same unit);
  "halfA":  the half-life from an activity falling from A0 to A in time t (answer in the unit of t);
  "age":    a carbon-dating age, in years (inputs A0, A in any one unit, lam in per second, yr = seconds per year);
  "N":      the number of nuclei in a source of activity A, in Bq (inputs A, T = half-life in days);
  "tau":    the mean life from the half-life (input T; same unit).

The key works from the decay law N = N0 exp(-lam t): T = ln 2 / lam, tau = 1 / lam, A = lam N. Logs stay exact.
"""
from sympy import Rational, exp, log

from physics import sig

DAY = 24 * 3600


def _solve(v, p, *, mean=False, log10=False, half_tau=False, decayed=False, two_n=False, equal=False, linear=False,
           per_day=False, times=False):
    ask, sf = p["ask"], p.get("sf", 3)
    ln = (lambda x: log(x, 10)) if log10 else log
    if ask == "half":
        lam = v["lam"]
        if mean:
            return sig(1 / lam, sf)  # takes 1/lam, the mean life, as the half-life
        if half_tau:
            return sig(1 / (2 * lam), sf)  # takes the half-life as half the mean life
        return sig(ln(2) / lam, sf)
    if ask == "pct":
        n = v["t"] / v["T"]
        if mean:
            return sig(100 * exp(-n), sf)  # uses the half-life as 1/lam in exp(-lam t)
        if two_n:
            return sig(100 / (2 * n), sf)  # divides by 2n, not 2^n
        left = Rational(1, 2) ** n
        return sig(100 * (1 - left) if decayed else 100 * left, sf)
    if ask == "halfA":
        A0, A, t = v["A0"], v["A"], v["t"]
        if two_n:  # A0/A = 2n
            return sig(t / (A0 / (2 * A)), sf)
        if equal:  # half of A0 lost in each half-life
            return sig(t / (2 * (1 - A / A0)), sf)
        lam = log(A0 / A) / t
        return sig(1 / lam if mean else log(2) / lam, sf)
    if ask == "age":
        A0, A, lam, yr = v["A0"], v["A"], v["lam"], v["yr"]
        if linear:  # the starting rate kept up: A = A0 (1 - lam t)
            return sig((1 - A / A0) / lam / yr, sf)
        if decayed:  # the number decayed in place of the activity left
            A = A0 - A
        return sig(ln(A0 / A) / lam / yr, sf)
    if ask == "N":
        A, Td = v["A"], v["T"]
        if per_day:
            return sig(A / (log(2) / Td), sf)  # lam left in per day
        Ts = Td * DAY
        if mean:
            return sig(A * Ts, sf)  # lam = 1/T
        if half_tau:
            return sig(A * 2 * Ts, sf)  # lam = 1/(2T)
        return sig(A * Ts / log(2), sf)
    if ask == "tau":
        T = v["T"]
        if mean:
            return sig(T, sf)  # takes the mean life equal to the half-life
        if half_tau:
            return sig(2 * T, sf)  # takes the half-life as half the mean life
        if times:
            return sig(T * log(2), sf)  # multiplies by ln 2 where it should divide
        return sig(T / log(2), sf)
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
    "C10-M1": _m(("half", "pct", "halfA", "N", "tau"), mean=True),  # mixes up the half-life and the mean life
    "C10-M2": _m(("halfA",), equal=True),  # thinks equal amounts decay in each half-life
    "C10-M3": _m(("pct", "age"), decayed=True),  # uses the part decayed in place of the part left
    "C10-M4": _m(("pct", "halfA"), two_n=True),  # divides by 2n after n half-lives, not by 2^n
    "C10-M5": _m(("half", "age"), log10=True),  # uses log to base 10 where the decay law needs ln
    "C10-M6": _m(("N",), per_day=True),  # leaves lam in per day when finding N = A / lam with A in Bq
    "C10-M7": _m(("half", "N", "tau"), half_tau=True),  # takes the half-life as half the mean life
    "C10-M8": _m(("tau",), times=True),  # multiplies the half-life by 0.693 to get the mean life
    "C10-M9": _m(("age",), linear=True),  # keeps the starting decay rate for the whole time
}
