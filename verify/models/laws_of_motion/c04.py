"""C04 Momentum, impulse and its conservation: answer models (the key, and one per misconception).

params["ask"]:
  "wall":    average force, in N, on a ball of m kg that hits a wall at u m/s and rebounds at w m/s, the contact lasting
             t_ms ms (inputs m, u, w, t_ms);
  "explode": kinetic energy, in J, supplied when a ball of M kg, after falling freely for t s, bursts into fragments in
             the mass ratio 1:2, the lighter one moving on downwards at vl m/s (inputs M, t, g, vl);
  "recoil":  recoil speed, in m/s, of a gun of M kg firing a bullet of m_g grams at u m/s (inputs M, m_g, u);
  "catch":   average force, in N, to stop a ball of m_g grams moving at u m/s in t s (inputs m_g, u, t);
  "cracker": the total momentum of a burst cracker's pieces (a named answer).
"""
from sympy import Rational, Symbol, sqrt

from physics import sig

NAMED = {
    "cracker": {"key": "zeroAsBefore", "C04-M12": "positiveFromEnergy", "C04-M13": "notConserved",
                "C04-M14": "sumOfSizes"},
}


def _solve(v, p, *, speeds=False, stop=False, ms=False, final=False, at_rest=False, no_half=False, grams=False,
           equal_k=False, equal_v=False, energy=False, times=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "wall":
        dv = v["u"] if stop else (v["u"] - v["w"] if speeds else v["u"] + v["w"])
        t = v["t_ms"] * (1 if ms else Rational(1, 1000))
        return sig(v["m"] * dv / t, n)
    if ask == "explode":
        M = v["M"]
        u = 0 if at_rest else v["g"] * v["t"]
        m1, m2 = M / 3, 2 * M / 3
        v2 = (M * u - m1 * v["vl"]) / m2
        h = 1 if no_half else Rational(1, 2)
        after = h * m1 * v["vl"] ** 2 + h * m2 * v2**2
        if final:
            return sig(after, n)
        return sig(after - h * M * u**2, n)
    if ask == "recoil":
        M, u = v["M"], v["u"]
        m = v["m_g"] * (1 if grams else Rational(1, 1000))
        if equal_v:
            return sig(u, n)
        if equal_k:
            return sig(u * sqrt(m / M), n)
        return sig(m * u / M, n)
    if ask == "catch":
        m = v["m_g"] * (1 if grams else Rational(1, 1000))
        u, t = v["u"], v["t"]
        if energy:
            return sig(m * u**2 / 2 / t, n)
        return sig(m * u * t if times else m * u / t, n)
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
    "C04-M1": _m("C04-M1", ("wall",), speeds=True),  # subtracts the speeds, ignoring the reversal
    "C04-M2": _m("C04-M2", ("wall",), stop=True),  # ignores the rebound, as if the ball stopped
    "C04-M3": _m("C04-M3", ("wall",), ms=True),  # leaves the time in ms
    "C04-M4": _m("C04-M4", ("explode",), final=True),  # gives the kinetic energy after, not the energy supplied
    "C04-M5": _m("C04-M5", ("explode",), at_rest=True),  # takes the ball's momentum before the burst as zero
    "C04-M6": _m("C04-M6", ("explode",), no_half=True),  # forgets the 1/2 in K = m v^2 / 2
    "C04-M7": _m("C04-M7", ("recoil", "catch"), grams=True),  # leaves the mass in grams
    "C04-M8": _m("C04-M8", ("recoil",), equal_k=True),  # shares the kinetic energy equally
    "C04-M9": _m("C04-M9", ("recoil",), equal_v=True),  # equal forces, so equal speeds
    "C04-M10": _m("C04-M10", ("catch",), energy=True),  # divides the kinetic energy by the time
    "C04-M11": _m("C04-M11", ("catch",), times=True),  # multiplies the change in momentum by the time
    "C04-M12": _m("C04-M12"),  # energy given to the pieces means momentum too
    "C04-M13": _m("C04-M13"),  # the burst's large forces break conservation
    "C04-M14": _m("C04-M14"),  # adds the sizes of the momenta
}
