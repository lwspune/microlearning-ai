"""C12 Newton's law of cooling: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "rate":  rate of cooling at th2 of a body cooling at r1 at th1, in surroundings at th0, all in °C (inputs r1, th1, th2, th0;
           params["excess"] when th1 and th2 are already excesses over the surroundings, th0 = 0);
  "time":  time to cool from a2 to b2 for a body that cooled from a1 to b1 in t1, in surroundings at th0 (inputs a1, b1, t1, a2, b2, th0);
  "holds": when Newton's law of cooling holds (a named answer).

The key uses Newton's law, rate of cooling = k (theta - theta0), solving for k in sympy; over an interval it takes
the average temperature (a + b) / 2, as the book does.
"""
from sympy import Symbol, solve

from physics import sig

_k = Symbol("k", positive=True)
_x = Symbol("x", positive=True)

NAMED = {
    "holds": {"key": Symbol("small_difference"), "C12-M5": Symbol("large_difference"), "C12-M6": Symbol("any_difference"),
              "C12-M7": Symbol("blackbody_only")},
}


def _solve(v, p, *, no_th0=False, upside=False, same=False, fourth=False):
    ask, n = p["ask"], p.get("sf", 3)
    th0 = 0 if no_th0 else v["th0"]

    def law(theta):  # rate of cooling per unit k
        x = theta - th0
        return x**4 if fourth else (1 / x if upside else x)

    if ask == "rate":
        if same:
            return sig(v["r1"], n)
        (k,) = solve(_k * law(v["th1"]) - v["r1"], _k)
        return sig(k * law(v["th2"]), n)
    if ask == "time":
        a1, b1, a2, b2 = v["a1"], v["b1"], v["a2"], v["b2"]
        rate1 = (a1 - b1) / v["t1"]
        if same:
            return sig((a2 - b2) / rate1, n)
        (k,) = solve(_k * law((a1 + b1) / 2) - rate1, _k)
        (t,) = solve((a2 - b2) / _x - k * law((a2 + b2) / 2), _x)
        return sig(t, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return NAMED[p["ask"]]["key"]
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses the body's temperature instead of its excess over the surroundings."""
    _only(p, "rate", "time")
    if p.get("excess"):
        raise ValueError("the item gives the excess temperatures")
    return _solve(v, p, no_th0=True)


def m2(v, p):
    """Thinks a hotter body cools more slowly."""
    _only(p, "rate", "time")
    return _solve(v, p, upside=True)


def m3(v, p):
    """Thinks the rate of cooling stays the same as the body cools."""
    _only(p, "rate", "time")
    return _solve(v, p, same=True)


def m4(v, p):
    """Applies the fourth-power law to the temperature excess."""
    _only(p, "rate")
    return _solve(v, p, fourth=True)


def m5(v, p):
    """Thinks the law holds for a large temperature difference."""
    _only(p, "holds")
    return NAMED["holds"]["C12-M5"]


def m6(v, p):
    """Thinks the law holds for any temperature difference."""
    _only(p, "holds")
    return NAMED["holds"]["C12-M6"]


def m7(v, p):
    """Thinks the law holds only for a perfect blackbody."""
    _only(p, "holds")
    return NAMED["holds"]["C12-M7"]


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6, "C12-M7": m7}
