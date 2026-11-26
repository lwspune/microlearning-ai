"""C01 Newton's laws of motion: answer models (the key, and one per misconception).

params["ask"]:
  "hose":   force, in N, to hold a hose jetting water at v m/s from a bore of A_cm2 cm^2 (inputs v, A_cm2);
  "atwood": tension, in N, in the string of an Atwood machine, masses m1 < m2 kg (inputs m1, m2, g);
  "chain":  tension in the k-th of n strings (n equal masses m hung one below the other, string 1 at the top),
            the whole accelerated up at f*g; a multiple of m*g (inputs n, k, f);
  "lift":   reading, in N, of a scale under a person of m kg in a lift moving up and slowing at a m/s^2 (inputs m, a, g);
  "pair":   the third-law partner of a book's weight (a named answer);
  "capsule": what makes you feel pushed to your right in a closed capsule (a named answer).

The key works from F = dp/dt applied to each body, in an inertial frame.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "pair": {"key": "bookPullsEarth", "C01-M2": "tablePushesBook", "C01-M3": "bookPullsEarthCancels",
             "C01-M13": "bookPushesTable"},
    "capsule": {"key": "speedingLeft", "C01-M14": "speedingRight", "C01-M1": "steadyLeft", "C01-M15": "slowingLeft"},
}

RHO = 1000  # kg/m^3, water (1 g/cc)


def _solve(v, p, *, rate=False, cm2=False, gcc=False, at_rest=False, net=False, no_2=False, sign=False,
           count=False, by_velocity=False, no_weight=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "hose":
        rho = 1 if gcc else RHO
        A = v["A_cm2"] * (Rational(1, 100) if cm2 else Rational(1, 10**4))
        return sig(rho * A * v["v"] if rate else rho * A * v["v"] ** 2, n)
    if ask == "atwood":
        m1, m2, g = v["m1"], v["m2"], v["g"]
        if at_rest:
            return sig(m2 * g, n)
        if net:
            return sig((m2 - m1) * g, n)
        return sig((1 if no_2 else 2) * m1 * m2 * g / (m1 + m2), n)
    if ask == "chain":
        below = v["n"] - v["k"] + (0 if count else 1)  # masses hanging from the k-th string
        f = 0 if at_rest else (-v["f"] if sign else v["f"])
        return below * (1 + f) * Symbol("m") * Symbol("g")
    if ask == "lift":
        m, a, g = v["m"], v["a"], v["g"]  # moving up and slowing: the acceleration is downward
        if at_rest:
            return sig(m * g, n)
        if no_weight:
            return sig(m * a, n)
        return sig(m * (g + a) if by_velocity else m * (g - a), n)
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
    "C01-M1": _m("C01-M1"),  # thinks steady motion pushes you, as if motion needs a force
    "C01-M2": _m("C01-M2"),  # takes the normal force as the reaction to the weight
    "C01-M3": _m("C01-M3"),  # thinks action and reaction cancel
    "C01-M4": _m("C01-M4", ("atwood", "chain", "lift"), at_rest=True),  # tension or reading = the weight, as at rest
    "C01-M5": _m("C01-M5", ("chain",), sign=True),  # uses g - a for an upward acceleration
    "C01-M6": _m("C01-M6", ("atwood",), net=True),  # takes the net force for the tension
    "C01-M7": _m("C01-M7", ("atwood",), no_2=True),  # drops the 2 in T = 2 m1 m2 g / (m1 + m2)
    "C01-M8": _m("C01-M8", ("chain",), count=True),  # counts only the masses below the k-th mass
    "C01-M9": _m("C01-M9", ("lift",), no_weight=True),  # forgets the weight: N = ma
    "C01-M10": _m("C01-M10", ("hose",), rate=True),  # takes the mass flow rate as the force
    "C01-M11": _m("C01-M11", ("hose",), cm2=True),  # converts cm^2 to m^2 with 10^-2
    "C01-M12": _m("C01-M12", ("hose",), gcc=True),  # leaves the density in g/cc
    "C01-M13": _m("C01-M13"),  # takes the push on the support as the reaction to the weight
    "C01-M14": _m("C01-M14"),  # thinks the push is along the frame's acceleration
    "C01-M15": _m("C01-M15", ("lift",), by_velocity=True),  # takes the direction of motion as that of the acceleration
}
