"""C06 Uniform circular motion: answer models (the key, and one per misconception).

params["ask"]:
  "acc":   centripetal acceleration, in m/s^2, at speed v on radius r (inputs v, r);
  "accT":  centripetal acceleration, in m/s^2, at speed v with period T (inputs v, T);
  "force": centripetal force, in N, on m_g grams at angular speed w and speed v (inputs m_g, w, v);
  "rev":   acceleration, in m/s^2, when the velocity ux i + uy j reverses in t_rev s at constant speed (inputs ux, uy, t_rev);
  "cone":  period, in s, of a conical pendulum of length l at angle th to the vertical (inputs l, th, g);
  "const": what stays constant in uniform circular motion (a named answer).
"""
from sympy import Rational, Symbol, cos, pi, sin, sqrt

from physics import sig

NAMED = {
    "const": {"key": "fixed_speed", "C06-M12": "fixed_velocity", "C06-M13": "fixed_acceleration", "C06-M14": "fixed_displacement"},
}


def _solve(v, p, *, zero=False, no_sq=False, times_r=False, circ=False, over_T=False, grams=False, r_vw=False,
           no_r=False, avg=False, full=False, add=False, no_cos=False, use_sin=False, no_2pi=False):
    ask, n = p["ask"], p.get("sf", 3)
    if zero:
        return sig(0, n)
    if ask == "acc":
        V, r = v["v"], v["r"]
        if no_sq:
            return sig(V / r, n)
        return sig(V**2 * r if times_r else V**2 / r, n)
    if ask == "accT":
        V, T = v["v"], v["T"]
        if over_T:
            return sig(V**2 / T, n)
        r = V * T if circ else V * T / (2 * pi)
        return sig(V**2 / r, n)
    if ask == "force":
        m = v["m_g"] * (1 if grams else Rational(1, 1000))
        w, V = v["w"], v["v"]
        r = V * w if r_vw else V / w
        return sig(m * V**2 if no_r else m * V**2 / r, n)
    if ask == "rev":
        ux, uy, tr = v["ux"], v["uy"], v["t_rev"]
        u = ux + uy if add else sqrt(ux**2 + uy**2)
        if avg:
            return sig(2 * u / tr, n)
        T = tr if full else 2 * tr
        return sig(2 * pi * u / T, n)
    if ask == "cone":
        l, th, g = v["l"], v["th"], v["g"]
        f = 1 if no_cos else (sin(th) if use_sin else cos(th))
        root = sqrt(l * f / g)
        return sig(root if no_2pi else 2 * pi * root, n)
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
    "C06-M1": _m("C06-M1", ("acc", "accT"), zero=True),  # no acceleration at constant speed
    "C06-M2": _m("C06-M2", ("acc",), no_sq=True),  # v / r
    "C06-M3": _m("C06-M3", ("acc",), times_r=True),  # v^2 r
    "C06-M4": _m("C06-M4", ("accT",), circ=True),  # takes vT, the circumference, as the radius
    "C06-M5": _m("C06-M5", ("accT",), over_T=True),  # v^2 / T
    "C06-M6": _m("C06-M6", ("force",), grams=True),  # leaves the mass in grams
    "C06-M7": _m("C06-M7", ("force",), r_vw=True),  # r = v w
    "C06-M8": _m("C06-M8", ("force",), no_r=True),  # m v^2, forgetting r
    "C06-M9": _m("C06-M9", ("rev",), avg=True),  # average acceleration over the half turn
    "C06-M10": _m("C06-M10", ("rev",), full=True),  # takes the reversal time as the period
    "C06-M11": _m("C06-M11", ("rev",), add=True),  # adds the components for the speed
    "C06-M12": _m("C06-M12"),  # thinks the velocity is constant
    "C06-M13": _m("C06-M13"),  # thinks the acceleration is constant
    "C06-M14": _m("C06-M14"),  # thinks the displacement is constant
    "C06-M15": _m("C06-M15", ("cone",), no_cos=True),  # 2 pi sqrt(l/g)
    "C06-M16": _m("C06-M16", ("cone",), use_sin=True),  # sin for cos
    "C06-M17": _m("C06-M17", ("cone",), no_2pi=True),  # drops the 2 pi
}
