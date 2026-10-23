"""C09 Emissive power and Kirchhoff's law: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "Q":        heat radiated in time t by area A at emissive power R (inputs R, A, t);
  "R_body":   emissive power of a body of absorption coefficient a when a blackbody at its temperature emits RB (inputs a, RB);
  "kirchhoff": what Kirchhoff's law says about e and a (a named answer);
  "e":        coefficient of emission of a body emitting R where a blackbody emits RB (inputs R, RB);
  "define":   the definition of emissive power (a named answer).

The key uses R = Q / (A t), e = R / R_B, and Kirchhoff's law R / a = R_B (so e = a), solving in sympy.
"""
from sympy import Symbol, solve

from physics import sig

_x = Symbol("x", positive=True)

NAMED = {
    "kirchhoff": {"key": Symbol("e_equals_a"), "C09-M4": Symbol("e_is_1_minus_a"), "C09-M5": Symbol("e_is_1_over_a"), "C09-M6": Symbol("e_is_1")},
    "define": {"key": Symbol("per_time_per_area"), "C09-M1": Symbol("per_area"), "C09-M3": Symbol("per_time"), "C09-M8": Symbol("total")},
}


def _solve(v, p, *, no_t=False, div_A=False, no_A=False, one_minus=False, invert=False, black=False, complement=False):
    ask = p["ask"]
    if ask == "Q":
        R, A, t = v["R"], v["A"], v["t"]
        A = 1 / A if div_A else (1 if no_A else A)
        (Q,) = solve(R - _x / (A * (1 if no_t else t)), _x)  # R = Q / (A t)
        return sig(Q)
    if ask == "R_body":
        a, RB = v["a"], v["RB"]
        if black:
            return sig(RB)
        if one_minus:
            return sig((1 - a) * RB)
        if invert:
            return sig(RB / a)
        (R,) = solve(_x / a - RB, _x)  # Kirchhoff: R / a = R_B
        return sig(R)
    if ask == "e":
        e = v["R"] / v["RB"]
        if invert:
            e = 1 / e
        if black:
            e = 1
        if complement:
            e = 1 - e
        return sig(e)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return NAMED[p["ask"]]["key"]
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Leaves out the time."""
    if p["ask"] == "define":
        return NAMED["define"]["C09-M1"]
    _only(p, "Q")
    return _solve(v, p, no_t=True)


def m2(v, p):
    """Divides by the area instead of multiplying."""
    _only(p, "Q")
    return _solve(v, p, div_A=True)


def m3(v, p):
    """Leaves out the area."""
    if p["ask"] == "define":
        return NAMED["define"]["C09-M3"]
    _only(p, "Q")
    return _solve(v, p, no_A=True)


def m4(v, p):
    """Takes a good absorber to be a poor emitter: e = 1 - a."""
    if p["ask"] == "kirchhoff":
        return NAMED["kirchhoff"]["C09-M4"]
    _only(p, "R_body")
    return _solve(v, p, one_minus=True)


def m5(v, p):
    """Turns the ratio upside down."""
    if p["ask"] == "kirchhoff":
        return NAMED["kirchhoff"]["C09-M5"]
    _only(p, "R_body", "e")
    return _solve(v, p, invert=True)


def m6(v, p):
    """Thinks every body emits like a blackbody at the same temperature."""
    if p["ask"] == "kirchhoff":
        return NAMED["kirchhoff"]["C09-M6"]
    _only(p, "R_body", "e")
    return _solve(v, p, black=True)


def m7(v, p):
    """Takes the coefficient of emission as 1 - R/R_B."""
    _only(p, "e")
    return _solve(v, p, complement=True)


def m8(v, p):
    """Takes emissive power to be the total energy radiated."""
    _only(p, "define")
    return NAMED["define"]["C09-M8"]


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6,
          "C09-M7": m7, "C09-M8": m8}
