"""C01 Torque and energy of a magnet in a field: answer models (the key, and one per misconception).

tau = m B sin(theta); U = -m B cos(theta); work from theta1 to theta2 = m B (cos theta1 - cos theta2). params["ask"]:
  "ratio":  W(0 -> a1) / W(0 -> a2), angles in degrees (inputs a1, a2);
  "moment": m, in A m^2, from torque tau at angle deg in a field of G gauss (inputs tau, deg, G);
  "flip":   work, in J, from the most stable to the most unstable position (inputs m, G);
  "needle": vertical field, in T, when a mass M_g grams balances a needle of pole strength qm (inputs M_g, qm, g);
  "max":    the angle of greatest torque (named).
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import sig

NAMED = {"max": {"key": "ninety", "C01-M5": "zero", "C01-M13": "one_eighty", "C01-M14": "forty_five"}}
gauss = Rational(1, 10**4)


def _r(d):
    return d * pi / 180


def _solve(v, p, *, w_sin=False, w_cos=False, w_angle=False, raw_gauss=False, t_cos=False, no_sin=False, to_90=False,
           equal=False, sign=False, one_pole=False, grams=False, times2=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "ratio":
        a1, a2 = v["a1"], v["a2"]
        if w_sin:
            return sig(sin(_r(a1)) / sin(_r(a2)), n)
        if w_cos:
            return sig(cos(_r(a1)) / cos(_r(a2)), n)
        if w_angle:
            return sig(a1 / a2, n)
        return sig((1 - cos(_r(a1))) / (1 - cos(_r(a2))), n)
    if ask == "moment":
        B = v["G"] * (1 if raw_gauss else gauss)
        f = 1 if no_sin else (cos(_r(v["deg"])) if t_cos else sin(_r(v["deg"])))
        return sig(v["tau"] / (B * f), n)
    if ask == "flip":
        mB = v["m"] * v["G"] * gauss
        if equal:
            return sig(0, n)
        if to_90:
            return sig(mB, n)
        return sig(-2 * mB if sign else 2 * mB, n)
    if ask == "needle":
        M = v["M_g"] * (1 if grams else Rational(1, 1000))
        w = M * v["g"]
        if one_pole:
            return sig(w / v["qm"], n)
        if times2:
            return sig(2 * w / v["qm"], n)
        return sig(w / (2 * v["qm"]), n)
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
    "C01-M1": _m("C01-M1", ("ratio",), w_sin=True),  # uses sin(theta) for the work
    "C01-M2": _m("C01-M2", ("ratio",), w_cos=True),  # uses cos(theta) alone for the work
    "C01-M3": _m("C01-M3", ("ratio",), w_angle=True),  # takes the work as proportional to the angle
    "C01-M4": _m("C01-M4", ("moment",), raw_gauss=True),  # leaves the field in gauss
    "C01-M5": _m("C01-M5", ("moment",), t_cos=True),  # uses cos(theta) for the torque
    "C01-M6": _m("C01-M6", ("moment",), no_sin=True),  # forgets the sin(theta)
    "C01-M7": _m("C01-M7", ("flip",), to_90=True),  # stops at 90 degrees
    "C01-M8": _m("C01-M8", ("flip",), equal=True),  # thinks the two positions have equal energy
    "C01-M9": _m("C01-M9", ("flip",), sign=True),  # gets the sign of the work wrong
    "C01-M10": _m("C01-M10", ("needle",), one_pole=True),  # forgets the field acts on both poles
    "C01-M11": _m("C01-M11", ("needle",), grams=True),  # leaves the mass in grams
    "C01-M12": _m("C01-M12", ("needle",), times2=True),  # multiplies by 2 instead of dividing
    "C01-M13": _m("C01-M13"),  # puts the greatest torque at 180 degrees
    "C01-M14": _m("C01-M14"),  # puts the greatest torque at 45 degrees
}
