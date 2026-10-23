"""C01 Ideal and real gases: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "iso_pct":  percentage change in volume when the pressure of a gas falls by p_pct at constant temperature (input p_pct);
  "moles":    ratio of moles in vessel A to vessel B when A's P, V and T are each k times B's (input k);
  "n":        the n in PV = nRT for m_g grams of a gas of molar mass M (inputs m_g, M, and the element's atomic mass Ma);
  "energy":   what energy the molecules of an ideal gas have (a named answer);
  "V2":       new volume when a gas goes from (P1, V1, t1 in deg C) to (P2, t2) (inputs P1, V1, t1, P2, t2).

The key uses the ideal gas equation PV = nRT, solving for the unknown in sympy, with temperatures in kelvin.
"""
from sympy import Rational, Symbol, solve

from physics import sig

_x = Symbol("x", positive=True)

ENERGY = {
    "key": Symbol("kinetic_only"),
    "C01-M9": Symbol("potential_only"),
    "C01-M10": Symbol("kinetic_and_potential"),
    "C01-M11": Symbol("neither"),
}


def _solve(v, p, *, matching=False, v_prop_p=False, unchanged=False, no_T=False, T_on_top=False, invert=False,
           grams=False, atomic=False, celsius=False):
    ask = p["ask"]
    if ask == "iso_pct":
        f = 1 - v["p_pct"] / 100  # new pressure / old
        if matching:
            return v["p_pct"]
        if unchanged:
            return 0
        if v_prop_p:
            return sig((f - 1) * 100)
        (V2,) = solve(1 * 1 - f * _x, _x)  # P1 V1 = P2 V2 with V1 = 1
        return sig((V2 - 1) * 100)
    if ask == "moles":
        k = v["k"]
        if no_T:
            return k * k
        if T_on_top:
            return k * k * k
        nA_over_nB = (k * k / k)  # n = PV / (RT)
        return 1 / nA_over_nB if invert else nA_over_nB
    if ask == "n":
        m, M = v["m_g"], v["M"]
        if grams:
            return m
        if atomic:
            return Rational(m) / v["Ma"]
        return Rational(M) / m if invert else Rational(m) / M
    if ask == "V2":
        P1, V1, P2 = v["P1"], v["V1"], v["P2"]
        T1, T2 = (v["t1"], v["t2"]) if celsius else (v["t1"] + 273, v["t2"] + 273)
        if no_T:
            T1 = T2 = 1
        if v_prop_p:
            return sig(V1 * P2 / P1 * T2 / T1)
        (V2,) = solve(P1 * V1 / T1 - P2 * _x / T2, _x)  # n R = P V / T stays the same
        return sig(V2)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return ENERGY["key"] if p["ask"] == "energy" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Takes the change in volume to match the change in pressure, as a percentage."""
    _only(p, "iso_pct")
    return _solve(v, p, matching=True)


def m2(v, p):
    """Thinks the volume goes up and down with the pressure."""
    _only(p, "iso_pct", "V2")
    return _solve(v, p, v_prop_p=True)


def m3(v, p):
    """Thinks the volume cannot change while the temperature stays fixed."""
    _only(p, "iso_pct")
    return _solve(v, p, unchanged=True)


def m4(v, p):
    """Leaves the temperature out of PV = nRT."""
    _only(p, "moles", "V2")
    return _solve(v, p, no_T=True)


def m5(v, p):
    """Puts T on top, taking n to grow with P, V and T together."""
    _only(p, "moles")
    return _solve(v, p, T_on_top=True)


def m6(v, p):
    """Turns the ratio upside down."""
    _only(p, "moles", "n")
    return _solve(v, p, invert=True)


def m7(v, p):
    """Uses the mass in grams as the number of moles."""
    _only(p, "n")
    return _solve(v, p, grams=True)


def m8(v, p):
    """Divides by the atomic mass instead of the molecule's molar mass."""
    _only(p, "n")
    return _solve(v, p, atomic=True)


def _energy(p, m):
    _only(p, "energy")
    return ENERGY[m]


def m9(v, p):
    """Thinks the molecules of an ideal gas have only potential energy."""
    return _energy(p, "C01-M9")


def m10(v, p):
    """Thinks they have both kinetic and potential energy."""
    return _energy(p, "C01-M10")


def m11(v, p):
    """Thinks they have no energy at all."""
    return _energy(p, "C01-M11")


def m12(v, p):
    """Uses temperatures in degrees Celsius instead of kelvin."""
    _only(p, "V2")
    return _solve(v, p, celsius=True)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6,
          "C01-M7": m7, "C01-M8": m8, "C01-M9": m9, "C01-M10": m10, "C01-M11": m11, "C01-M12": m12}
