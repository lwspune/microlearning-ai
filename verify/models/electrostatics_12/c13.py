"""C13 A capacitor with a dielectric: answer models (the key, and one per misconception).

Filled with a dielectric of constant k: C = k eps0 A / d. A slab of thickness t: C = eps0 A / (d - t + t/k).
params["ask"]:
  "slab":    new C, in uF, of a C_uF capacitor with gap d_mm after a slab t_mm thick, constant k (inputs C_uF, d_mm, t_mm, k);
  "remove":  C, in uF, after removing a dielectric of constant k from a capacitor of Ck_uF (inputs Ck_uF, k);
  "three4":  C with a slab of thickness 3d/4 (a named answer);
  "isolated": what happens when the dielectric is removed from a charged, disconnected capacitor (a named answer);
  "filled":  C, in F, of plates A_cm2, d_mm apart filled with constant k (inputs A_cm2, d_mm, k).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

eps0 = BOOK["eps0"]
NAMED = {
    "three4": {"key": "fourk_kp3", "C13-M7": "kp3_fourk", "C13-M8": "twok_kp3", "C13-M2": "k_full"},
    "isolated": {"key": "q_same_v_up", "C13-M9": "v_same_q_down", "C13-M10": "c_up_v_down", "C13-M11": "v_down"},
}


def _solve(v, p, *, t_times_k=False, filled=False, plus=False, times_again=False, minus_k=False, no_effect=False,
           divide=False, cm2=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "slab":
        C, d, t, k = v["C_uF"], v["d_mm"], v["t_mm"], v["k"]
        if filled:
            return sig(C * k, n)
        if t_times_k:
            de = d - t + t * k
        elif plus:
            de = d + t / k
        else:
            de = d - t + t / k
        return sig(C * d / de, n)
    if ask == "remove":
        Ck, k = v["Ck_uF"], v["k"]
        if times_again:
            return sig(Ck * k, n)
        if minus_k:
            return sig(Ck - k, n)
        if no_effect:
            return sig(Ck, n)
        return sig(Ck / k, n)
    if ask == "filled":
        A = v["A_cm2"] * (1 if cm2 else Rational(1, 10**4))
        C0 = eps0 * A / (v["d_mm"] / 1000)
        if no_effect:
            return sig(C0, n)
        return sig(C0 / v["k"] if divide else C0 * v["k"], n)
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
    "C13-M1": _m("C13-M1", ("slab",), t_times_k=True),  # multiplies t by k instead of dividing
    "C13-M2": _m("C13-M2", ("slab",), filled=True),  # treats a partial slab as filling the gap
    "C13-M3": _m("C13-M3", ("slab",), plus=True),  # adds t/k to the whole gap: d + t/k
    "C13-M4": _m("C13-M4", ("remove",), times_again=True),  # multiplies by k again when removing it
    "C13-M5": _m("C13-M5", ("remove",), minus_k=True),  # subtracts k
    "C13-M6": _m("C13-M6", ("remove", "filled"), no_effect=True),  # thinks a dielectric does not change C
    "C13-M7": _m("C13-M7"),  # turns the factor upside down
    "C13-M8": _m("C13-M8"),  # drops a factor of 2
    "C13-M9": _m("C13-M9"),  # reasons as if the battery were still connected
    "C13-M10": _m("C13-M10"),  # thinks removing the dielectric raises C
    "C13-M11": _m("C13-M11"),  # thinks V falls along with C
    "C13-M12": _m("C13-M12", ("filled",), divide=True),  # divides by k
    "C13-M13": _m("C13-M13", ("filled",), cm2=True),  # leaves the area in cm^2
}
