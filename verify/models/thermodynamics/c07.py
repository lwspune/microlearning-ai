"""C07 Adiabatic process: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "p_from_T": pressure ratio p_f/p_i of an ideal gas taken adiabatically to T_ratio = T_f/T_i (inputs gamma, T_ratio;
              params["atoms"] names the gas);
  "pf":       final pressure, in Pa, of a gas at p_i compressed adiabatically by V_ratio = V_i/V_f (inputs p_i, V_ratio, gamma);
  "Tf":       final temperature, in K, of a gas at T_i_C °C compressed adiabatically by V_ratio (inputs T_i_C, V_ratio, gamma);
  "W":        work, in J, done by a gas at p_i and V_i litres compressed adiabatically by V_ratio (inputs p_i, V_i, V_ratio, gamma);
  "quick":    what happens when a gas in an insulated cylinder is compressed quickly (a named answer).

The key solves pV^gamma = constant and TV^(gamma-1) = constant in sympy (with pV = nRT for the p-T form), and takes
the work as W = (p_i V_i - p_f V_f) / (gamma - 1), the area under the adiabat.
"""
from sympy import Rational, Symbol, integrate, log, solve

from physics import sig

_x = Symbol("x", positive=True)
_V = Symbol("V", positive=True)
L = Rational(1, 1000)

NAMED = {
    "quick": {"key": "no_heat_work_on_warms", "C07-M4": "heat_out_same_T", "C07-M10": "heat_in_warms", "C07-M11": "nothing_changes"},
}


def _p_f(pi, ratio, g, *, isothermal=False, minus_one=False, upside=False):
    k = 1 if isothermal else (g - 1 if minus_one else g)
    r = 1 / ratio if upside else ratio
    (pf,) = solve(_x - pi * r**k, _x)  # p_i V_i^k = p_f V_f^k, with V_i / V_f = r
    return pf


def _solve(v, p, *, exp_gamma=False, exp_inv=False, diatomic=False, isothermal=False, minus_one=False,
           upside=False, with_gamma=False, celsius=False, flip=False, no_gm1=False):
    ask, n = p["ask"], p.get("sf", 4)
    if ask == "p_from_T":
        g = Rational(7, 5) if diatomic else v["gamma"]
        # T^gamma p^(1-gamma) = constant, from pV^gamma = constant and pV = nRT
        k = g if exp_gamma else (1 / (g - 1) if exp_inv else g / (g - 1))
        (r,) = solve(_x - v["T_ratio"] ** k, _x)
        return sig(r, n)
    if ask == "pf":
        return sig(_p_f(v["p_i"], v["V_ratio"], v["gamma"], isothermal=isothermal, minus_one=minus_one, upside=upside), n)
    if ask == "Tf":
        Ti = v["T_i_C"] + (0 if celsius else 273)
        if isothermal:
            return sig(Ti, n)
        k = v["gamma"] if with_gamma else v["gamma"] - 1
        (Tf,) = solve(_x - Ti * v["V_ratio"] ** k, _x)  # T V^(gamma-1) = constant
        return sig(Tf, n)
    if ask == "W":
        pi, Vi, g = v["p_i"], v["V_i"] * L, v["gamma"]
        Vf = Vi / v["V_ratio"]
        if isothermal:
            return sig(pi * Vi * log(Vf / Vi), n)
        c = pi * Vi**g
        W = integrate(c / _V**g, (_V, Vi, Vf))  # area under p = c / V^gamma
        if no_gm1:
            W = W * (g - 1)
        return sig(-W if flip else W, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(p, mid):
    if mid not in NAMED.get(p["ask"], {}):
        raise ValueError("does not apply to this item")
    return Symbol(NAMED[p["ask"]][mid])


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses gamma as the exponent in the p-T relation."""
    _only(p, "p_from_T")
    return _solve(v, p, exp_gamma=True)


def m2(v, p):
    """Uses 1/(gamma - 1), the V-T exponent, in the p-T relation."""
    _only(p, "p_from_T")
    return _solve(v, p, exp_inv=True)


def m3(v, p):
    """Uses a diatomic gas's gamma for a monatomic gas."""
    _only(p, "p_from_T")
    if p["atoms"] != "mono":
        raise ValueError("the gas is not monatomic")
    return _solve(v, p, diatomic=True)


def m4(v, p):
    """Treats the change as isothermal."""
    if p["ask"] in NAMED:
        return _named(p, "C07-M4")
    _only(p, "pf", "Tf", "W")
    return _solve(v, p, isothermal=True)


def m5(v, p):
    """Uses gamma - 1 where gamma belongs: p V^(gamma-1) = constant."""
    _only(p, "pf")
    return _solve(v, p, minus_one=True)


def m6(v, p):
    """Uses gamma where gamma - 1 belongs: T V^gamma = constant."""
    _only(p, "Tf")
    return _solve(v, p, with_gamma=True)


def m7(v, p):
    """Uses the Celsius temperature."""
    _only(p, "Tf")
    return _solve(v, p, celsius=True)


def m8(v, p):
    """Gets the sign of the work wrong."""
    _only(p, "W")
    return _solve(v, p, flip=True)


def m9(v, p):
    """Leaves out the gamma - 1 in the work."""
    _only(p, "W")
    return _solve(v, p, no_gm1=True)


def m10(v, p):
    """Thinks the temperature can change only if heat flows."""
    return _named(p, "C07-M10")


def m11(v, p):
    """Thinks no heat flow means nothing changes."""
    return _named(p, "C07-M11")


def m12(v, p):
    """Turns the volume ratio upside down."""
    _only(p, "pf")
    return _solve(v, p, upside=True)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6,
          "C07-M7": m7, "C07-M8": m8, "C07-M9": m9, "C07-M10": m10, "C07-M11": m11, "C07-M12": m12}
