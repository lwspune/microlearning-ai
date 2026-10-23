"""C07 Specific heats and Mayer's relation: answer models (the key, and one per misconception).

params["ask"] picks the quantity (params["sf"], optional, sets the significant figures):
  "Cv":      C_V from the difference d = C_P - C_V and the ratio g = C_P / C_V (inputs d, g);
  "Cp":      C_P from the same (inputs d, g);
  "J":       mechanical equivalent of heat from S_P, S_V (cal/kg K), R (J/kmol K) and molar mass M (inputs Sp, Sv, R, M);
  "mayer":   the statement of Mayer's relation (a named answer);
  "gamma":   gamma for a gas of molar specific heat C_V (inputs Cv, R).

The key solves C_P - C_V = d with C_P = g C_V, and Mayer's relation C_P - C_V = R (per unit mass,
S_P - S_V = R / (M J)), in sympy.
"""
from sympy import Symbol, solve

from physics import sig

_cv, _J = Symbol("cv", positive=True), Symbol("J", positive=True)

MAYER = {
    "key": Symbol("Cp_minus_Cv_R"),
    "C07-M7": Symbol("Cp_plus_Cv_R"),
    "C07-M8": Symbol("Cv_minus_Cp_R"),
    "C07-M9": Symbol("Cp_over_Cv_R"),
}


def _cv_from(d, g, *, div_g=False, times_g=False):
    if div_g:
        return d / g
    if times_g:
        return d * g
    (cv,) = solve(g * _cv - _cv - d, _cv)
    return cv


def _solve(v, p, *, div_g=False, times_g=False, other=False, no_M=False, invert=False, one=False, sign=False, minus_one=False):
    ask = p["ask"]
    n = p.get("sf", 3)
    if ask in ("Cv", "Cp"):
        cv = _cv_from(v["d"], v["g"], div_g=div_g, times_g=times_g)
        cp = cv + v["d"]
        want = ask if not other else ("Cp" if ask == "Cv" else "Cv")
        return sig(cv if want == "Cv" else cp, n)
    if ask == "J":
        M = 1 if no_M else v["M"]
        dS = v["Sp"] if one else v["Sp"] - v["Sv"]
        if invert:
            return sig(M * dS / v["R"], n)
        (J,) = solve(dS - v["R"] / (M * _J), _J)
        return sig(J, n)
    if ask == "gamma":
        Cv, R = v["Cv"], v["R"]
        Cp = Cv - R if sign else Cv + R
        g = Cp / Cv
        if invert:
            g = 1 / g
        return sig(g - 1 if minus_one else g, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return MAYER["key"] if p["ask"] == "mayer" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Divides the difference by gamma instead of gamma - 1."""
    _only(p, "Cv", "Cp")
    return _solve(v, p, div_g=True)


def m2(v, p):
    """Multiplies the difference by gamma."""
    _only(p, "Cv", "Cp")
    return _solve(v, p, times_g=True)


def m3(v, p):
    """Gives the other specific heat."""
    _only(p, "Cv", "Cp")
    return _solve(v, p, other=True)


def m4(v, p):
    """Leaves out the molar mass."""
    _only(p, "J")
    return _solve(v, p, no_M=True)


def m5(v, p):
    """Turns the ratio upside down."""
    _only(p, "J", "gamma")
    return _solve(v, p, invert=True)


def m6(v, p):
    """Uses one specific heat instead of the difference between them."""
    _only(p, "J")
    return _solve(v, p, one=True)


def m7(v, p):
    """Writes C_P + C_V = R."""
    _only(p, "mayer")
    return MAYER["C07-M7"]


def m8(v, p):
    """Thinks C_V is the larger of the two."""
    if p["ask"] == "mayer":
        return MAYER["C07-M8"]
    _only(p, "gamma")
    return _solve(v, p, sign=True)


def m9(v, p):
    """Writes C_P / C_V = R."""
    _only(p, "mayer")
    return MAYER["C07-M9"]


def m10(v, p):
    """Gives gamma - 1 instead of gamma."""
    _only(p, "gamma")
    return _solve(v, p, minus_one=True)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6,
          "C07-M7": m7, "C07-M8": m8, "C07-M9": m9, "C07-M10": m10}
