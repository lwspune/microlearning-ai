"""C09 Second's pendulum: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "moon":  length, in m, of a second's pendulum where g is g_ratio times that where it is L_e m long (inputs L_e, g_ratio);
  "dL":    change, in mm, in a second's pendulum's length when g goes from g1 to g2 (inputs g1, g2); positive means longer;
  "count": oscillations completed in t s by a second's pendulum made f times as long (inputs f, t);
  "clock": seconds a pendulum clock, correct as a second's pendulum, gains in a day when its length changes by pct per cent
           (inputs pct, day); negative means it loses;
  "L_sec": length, in m, of a second's pendulum (inputs g).

The key takes a second's pendulum to have period T = 2 s (one second per swing), so from T = 2 pi sqrt(L/g),
L = g T^2 / (4 pi^2) = g / pi^2; a clock counts each oscillation as 2 s. It solves in sympy.
"""
from sympy import Symbol, pi, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)


def _L(g, *, T=2, inverse=False, no_sq=False):
    if inverse:
        return pi**2 / g  # takes L ∝ 1/g
    if no_sq:
        return g * T / (4 * pi**2)  # forgets to square T
    (L,) = solve(2 * pi * sqrt(_x / g) - T, _x)  # T = 2 pi sqrt(L/g)
    return L


def _solve(v, p, *, inverse=False, square=False, root=False, flip=False, T1=False, linear=False, faster=False,
           osc=False, no_sq=False):
    ask, n = p["ask"], p.get("sf", 3)
    T = 1 if T1 else 2
    if ask == "moon":
        r = v["g_ratio"]
        if inverse:
            return sig(v["L_e"] / r, n)
        if square:
            return sig(v["L_e"] * r**2, n)
        if root:
            return sig(v["L_e"] * sqrt(r), n)
        return sig(v["L_e"] * _L(r) / _L(1), n)  # L ∝ g at fixed T
    if ask == "dL":
        g1, g2 = v["g1"], v["g2"]
        f = (lambda g: _L(g, inverse=True)) if inverse else (lambda g: _L(g, T=T))
        d = (f(g2) - f(g1)) * 1000
        return sig(-d if flip else d, n)
    if ask == "count":
        f, t = v["f"], v["t"]
        if faster:
            T_new = T / sqrt(f)
        elif linear:
            T_new = T * f
        else:
            T_new = T * sqrt(f)  # T ∝ sqrt(L)
        return sig(t / T_new, n)
    if ask == "clock":
        k = 1 + v["pct"] / 100
        T_new = 2 * k if linear else 2 * sqrt(k)
        extra = v["day"] / T_new - v["day"] / 2  # oscillations counted beyond those of a correct clock
        gain = extra if osc else 2 * extra  # each oscillation the clock counts as 2 s
        return sig(-gain if flip else gain, n)
    if ask == "L_sec":
        g = v["g"]
        if inverse:
            return sig(pi**2 / g, n)
        return sig(_L(g, T=T, no_sq=no_sq), n)
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
    "C09-M1": _m(("moon", "dL", "L_sec"), inverse=True),  # takes L ∝ 1/g
    "C09-M2": _m(("moon",), square=True),  # takes L ∝ g^2
    "C09-M3": _m(("moon",), root=True),  # takes L ∝ sqrt(g)
    "C09-M4": _m(("dL",), flip=True),  # gets the direction of the change wrong
    "C09-M5": _m(("dL", "count", "L_sec"), T1=True),  # takes a second's pendulum's period as 1 s
    "C09-M6": _m(("count", "clock"), linear=True),  # takes T ∝ L
    "C09-M7": _m(("count",), faster=True),  # thinks a longer pendulum swings faster
    "C09-M8": _m(("clock",), flip=True),  # thinks the clock loses time when its pendulum shortens
    "C09-M9": _m(("clock",), osc=True),  # counts the extra oscillations instead of the seconds
    "C09-M10": _m(("L_sec",), no_sq=True),  # forgets to square T
}
