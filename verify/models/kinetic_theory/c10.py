"""C10 Blackbody spectrum and Wien's law: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "lam":    peak wavelength, in m, of a blackbody at temperature T (inputs b, T; params["celsius"] when T is in °C);
  "T":      temperature of a blackbody whose spectrum peaks at lam, given in units of params["unit"] metres (inputs b, lam);
  "shift":  peak wavelength at T2 of a body that peaks at lam1 at T1, in the units of lam1 (inputs lam1, T1, T2);
  "shape":  what happens to the spectral curve as the temperature rises (a named answer).

The key uses Wien's displacement law, lam_max T = b, solving in sympy with the temperature in kelvin
and the wavelength in metres.
"""
from sympy import Rational, Symbol, solve, sympify

from physics import sig

_x = Symbol("x", positive=True)

NAMED = {
    "shape": {"key": Symbol("higher_shorter"), "C10-M4": Symbol("higher_longer"), "C10-M6": Symbol("higher_same_peak"),
              "C10-M8": Symbol("same_height_shorter")},
}


def _kelvin(v, p, *, celsius=False):
    T = v["T"]
    return T if celsius or not p.get("celsius") else T + Rational(27315, 100)


def _solve(v, p, *, times=False, celsius=False, upside=False, no_unit=False, prop=False, fixed=False, fourth=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "lam":
        b, T = v["b"], _kelvin(v, p, celsius=celsius)
        if times:
            return sig(b * T, n)
        if upside:
            return sig(T / b, n)
        (lam,) = solve(_x * T - b, _x)  # lam_max T = b
        return sig(lam, n)
    if ask == "T":
        b = v["b"]
        lam = v["lam"] * (1 if no_unit else sympify(p["unit"]))
        if times:
            return sig(b * lam, n)
        if upside:
            return sig(lam / b, n)
        (T,) = solve(lam * _x - b, _x)  # lam_max T = b
        return sig(T, n)
    if ask == "shift":
        lam1, T1, T2 = v["lam1"], v["T1"], v["T2"]
        if fixed:
            return sig(lam1, n)
        if prop:
            return sig(lam1 * T2 / T1, n)
        if fourth:
            return sig(lam1 * (T1 / T2) ** 4, n)
        (lam2,) = solve(_x * T2 - lam1 * T1, _x)  # lam1 T1 = lam2 T2 = b
        return sig(lam2, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return NAMED[p["ask"]]["key"]
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Multiplies b by the temperature or wavelength instead of dividing."""
    _only(p, "lam", "T")
    return _solve(v, p, times=True)


def m2(v, p):
    """Uses the Celsius temperature in Wien's law."""
    _only(p, "lam")
    if not p.get("celsius"):
        raise ValueError("the temperature is already in kelvin")
    return _solve(v, p, celsius=True)


def m3(v, p):
    """Divides the wrong way round."""
    _only(p, "lam", "T")
    return _solve(v, p, upside=True)


def m4(v, p):
    """Thinks the peak moves to longer wavelengths as the body gets hotter."""
    if p["ask"] == "shape":
        return NAMED["shape"]["C10-M4"]
    _only(p, "shift")
    return _solve(v, p, prop=True)


def m5(v, p):
    """Leaves the wavelength in nm or cm instead of metres."""
    _only(p, "T")
    if p["unit"] == "1":
        raise ValueError("the wavelength is already in metres")
    return _solve(v, p, no_unit=True)


def m6(v, p):
    """Thinks the peak stays at the same wavelength at every temperature."""
    if p["ask"] == "shape":
        return NAMED["shape"]["C10-M6"]
    _only(p, "shift")
    return _solve(v, p, fixed=True)


def m7(v, p):
    """Mixes Wien's law with Stefan's law: takes the peak wavelength as 1/T^4."""
    _only(p, "shift")
    return _solve(v, p, fourth=True)


def m8(v, p):
    """Thinks the curve keeps the same height as the temperature rises."""
    _only(p, "shape")
    return NAMED["shape"]["C10-M8"]


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6,
          "C10-M7": m7, "C10-M8": m8}
