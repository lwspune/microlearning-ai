"""C04 Root mean square speed: answer models (the key, and one per misconception).

params["ask"] picks the quantity (params["sf"], optional, sets the significant figures):
  "vrms":   rms speed of atoms of mass A u at T kelvin (inputs A, T, k, u);
  "T_same": temperature at which gas 2 (molar mass M2) has the rms speed gas 1 (M1) has at T1 (inputs M1, T1, M2);
  "ratio":  ratio of rms speeds of gas 1 (M1 at t1 deg C) and gas 2 (M2 at t2 deg C) (inputs M1, t1, M2, t2);
  "msq":    ratio of mean square speeds of one gas at T1 and T2 kelvin (inputs T1, T2);
  "propto": what the rms speed is proportional to (a named answer).

The key starts from P = (1/3) rho v_rms^2 and PV = nRT, so v_rms^2 = 3RT/M = 3 k T / m, and solves in sympy.
"""
from sympy import Symbol, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)

PROPTO = {
    "key": Symbol("sqrt_T"),
    "C04-M2": Symbol("T"),
    "C04-M5": Symbol("one_over_sqrt_T"),
    "C04-M7": Symbol("independent_of_T"),
}


def _v2(T, M, *, k=3):
    """Mean square speed from P = (1/3) rho v^2 with PV = nRT: v^2 = k R T / M (with R or k_B folded into T)."""
    return k * T / M


def _solve(v, p, *, three=True, root=True, one_u=False, sqrt_mass=False, invert=False, celsius=False, no_T=False,
           no_M=False, rms=False, square=False):
    ask = p["ask"]
    n = p.get("sf", 3)
    if ask == "vrms":
        m = v["u"] * (1 if one_u else v["A"])
        v2 = _v2(v["k"] * v["T"], m, k=3 if three else 2)
        return sig(sqrt(v2) if root else v2, n)
    if ask == "T_same":
        M1, T1, M2 = v["M1"], v["T1"], v["M2"]
        if no_T:
            return sig(T1, n)
        if sqrt_mass:
            return sig(T1 * sqrt(M2 / M1), n)
        if invert:
            return sig(T1 * M1 / M2, n)
        (T2,) = solve(_v2(T1, M1) - _v2(_x, M2), _x)  # equal mean square speeds
        return sig(T2, n)
    if ask == "ratio":
        T1, T2 = (v["t1"], v["t2"]) if celsius else (v["t1"] + 273, v["t2"] + 273)
        M1, M2 = (1, 1) if no_M else (v["M1"], v["M2"])
        r2 = _v2(T1, M1) / _v2(T2, M2)
        return sig(sqrt(r2) if root else r2, n)
    if ask == "msq":
        r = _v2(v["T1"], 1) / _v2(v["T2"], 1)  # mean square speed goes as T
        if rms:
            return sqrt(r)
        if square:
            return r ** 2
        return 1 / r if invert else r
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return PROPTO["key"] if p["ask"] == "propto" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses 2 in place of 3."""
    _only(p, "vrms")
    return _solve(v, p, three=False)


def m2(v, p):
    """Forgets the square root, taking the speed to go as T."""
    if p["ask"] == "propto":
        return PROPTO["C04-M2"]
    _only(p, "vrms", "ratio")
    return _solve(v, p, root=False)


def m3(v, p):
    """Takes one atomic mass unit as the atom's mass."""
    _only(p, "vrms")
    return _solve(v, p, one_u=True)


def m4(v, p):
    """Takes the square root of the mass ratio when finding a temperature."""
    _only(p, "T_same")
    return _solve(v, p, sqrt_mass=True)


def m5(v, p):
    """Turns the ratio upside down."""
    if p["ask"] == "propto":
        return PROPTO["C04-M5"]
    _only(p, "T_same", "msq")
    return _solve(v, p, invert=True)


def m6(v, p):
    """Uses temperatures in degrees Celsius."""
    _only(p, "ratio")
    return _solve(v, p, celsius=True)


def m7(v, p):
    """Thinks the rms speed does not depend on the temperature."""
    if p["ask"] == "propto":
        return PROPTO["C04-M7"]
    _only(p, "T_same")
    return _solve(v, p, no_T=True)


def m8(v, p):
    """Leaves the molar masses out."""
    _only(p, "ratio")
    return _solve(v, p, no_M=True)


def m9(v, p):
    """Gives the ratio of rms speeds when the ratio of mean square speeds is asked."""
    _only(p, "msq")
    return _solve(v, p, rms=True)


def m10(v, p):
    """Squares the temperature ratio."""
    _only(p, "msq")
    return _solve(v, p, square=True)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6,
          "C04-M7": m7, "C04-M8": m8, "C04-M9": m9, "C04-M10": m10}
