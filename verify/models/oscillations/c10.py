"""C10 Angular S.H.M. and a vibrating magnet: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "per_min":  oscillations per minute of a magnet of moment of inertia I and magnetic moment mu in field B (inputs I, mu, B);
  "B":        field, in T, in which a bar magnet of mass M_g grams, sides l, b (horizontal) and h (vertical) in mm and
              magnetic moment mu oscillates with period T (inputs M_g, l, b, h, mu, T);
  "unlike":   period, in s, of two magnets mu1, mu2 joined by unlike poles, given T_like with like poles joined (inputs mu1, mu2, T_like);
  "equation": the differential equation of angular S.H.M. (a named answer);
  "torque":   largest restoring torque, in N m, on a disc of diameter D_cm and mass M_g grams twisted by deg degrees on a
              wire, with period T (inputs D_cm, M_g, deg, T).

The key uses tau = -c theta, so I d^2theta/dt^2 = -c theta and T = 2 pi sqrt(I/c); for a magnet c = mu B. A bar magnet
turning about its vertical side h has I = M (l^2 + b^2)/12, a disc about its axis I = M R^2 / 2. Joined like poles add
their moments, unlike poles subtract them. Solved in sympy.
"""
from sympy import Rational, Symbol, pi, rad, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)
MM = Rational(1, 1000)

NAMED = {"equation": {"key": "plus_c_over_I", "C10-M10": "plus_I_over_c", "C10-M11": "minus_c_over_I", "C10-M12": "plus_c_over_m"}}


def _T(I, c, *, upside=False, no_2pi=False):
    r = c / I if upside else I / c
    return sqrt(r) if no_2pi else 2 * pi * sqrt(r)


def _solve(v, p, *, upside=False, no_2pi=False, per_s=False, use_h=False, no_12=False, no_4=False, swap=False,
           inverse_mu=False, one=False, degrees=False, ring=False, diameter=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "per_min":
        T = _T(v["I"], v["mu"] * v["B"], upside=upside, no_2pi=no_2pi)
        return sig(1 / T if per_s else 60 / T, n)
    if ask == "B":
        M = v["M_g"] / 1000
        side = v["h"] if use_h else v["b"]
        I = M * ((v["l"] * MM) ** 2 + (side * MM) ** 2) / (1 if no_12 else 12)
        if no_4:
            return sig(I / v["mu"], n)
        (B,) = solve(_T(I, v["mu"] * _x) - v["T"], _x)  # T = 2 pi sqrt(I / mu B)
        return sig(B, n)
    if ask == "unlike":
        mu1, mu2, T1 = v["mu1"], v["mu2"], v["T_like"]
        like, unlike = mu1 + mu2, mu1 - mu2
        if swap:
            like, unlike = unlike, like
        if one:
            unlike = mu1
        if inverse_mu:
            return sig(T1 * like / unlike, n)
        return sig(T1 * sqrt(like / unlike), n)  # T ∝ 1/sqrt(mu)
    if ask == "torque":
        R = v["D_cm"] / 100 / (1 if diameter else 2)
        M = v["M_g"] / 1000
        I = M * R**2 * (1 if ring else Rational(1, 2))
        (c,) = solve(_T(I, _x) - v["T"], _x)  # T = 2 pi sqrt(I / c)
        theta = v["deg"] if degrees else rad(v["deg"])
        return sig(c * theta, n)
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
    "C10-M1": _m("C10-M1", ("per_min",), upside=True),  # turns I / mu B upside down
    "C10-M2": _m("C10-M2", ("per_min",), no_2pi=True),  # forgets the 2 pi
    "C10-M3": _m("C10-M3", ("per_min",), per_s=True),  # gives oscillations per second
    "C10-M4": _m("C10-M4", ("B",), use_h=True),  # uses the vertical side in the moment of inertia
    "C10-M5": _m("C10-M5", ("B",), no_12=True),  # leaves out the 12
    "C10-M6": _m("C10-M6", ("B",), no_4=True),  # drops the factor 4: B = I / mu
    "C10-M7": _m("C10-M7", ("unlike",), swap=True),  # swaps the like and unlike moments
    "C10-M8": _m("C10-M8", ("unlike",), inverse_mu=True),  # takes T ∝ 1/mu
    "C10-M9": _m("C10-M9", ("unlike",), one=True),  # uses one magnet's moment for unlike poles
    "C10-M10": _m("C10-M10"),  # turns c / I upside down
    "C10-M11": _m("C10-M11"),  # gets the sign wrong
    "C10-M12": _m("C10-M12"),  # uses mass instead of moment of inertia
    "C10-M13": _m("C10-M13", ("torque",), degrees=True),  # uses the angle in degrees
    "C10-M14": _m("C10-M14", ("torque",), ring=True),  # uses M R^2 for a disc
    "C10-M15": _m("C10-M15", ("torque",), diameter=True),  # uses the diameter as the radius
}
