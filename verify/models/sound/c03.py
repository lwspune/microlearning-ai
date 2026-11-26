"""C03 Speed of sound in a gas: answer models (the key, and one per misconception).

params["ask"]:
  "laplace":  why Laplace corrected Newton's formula (a named answer);
  "vair":     Laplace's speed of sound, in m/s, from P (N/m^2), rho (kg/m^3) and gamma (inputs P, rho, g);
  "pbox":     P/P0 for air at constant density whose sound speed rises k times (input k);
  "temp":     the temperature, in deg C, at which the speed is k times that at 0 deg C (inputs k, T0 = 273);
  "humid":    how many times as dense the air is on the slower of two days whose speeds are 1 : k (input k);
  "pressure": what happens to the speed when the pressure is doubled at constant temperature (a named answer).

The key: v = sqrt(gamma P / rho); at constant density v is proportional to sqrt(P); with P fixed, v is proportional
to 1/sqrt(rho); for an ideal gas v is proportional to sqrt(T) (in kelvin), and pressure alone has no effect.
"""
from sympy import Symbol, sqrt

from physics import sig

NAMED = {
    "laplace": {"key": "adiabatic_change", "C03-M1": "isothermal_change", "C03-M2": "longitudinal_reason",
                "C03-M3": "long_wavelength"},
    "pressure": {"key": "speed_unchanged", "C03-M10": "speed_root2", "C03-M6": "speed_doubles",
                 "C03-M8": "speed_falls"},
}


def _solve(v, p, *, newton=False, out=False, no_root=False, lin=False, root=False, inv=False, kelvin=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "vair":
        g = 1 if newton else v["g"]
        if out:
            return sig(g * sqrt(v["P"] / v["rho"]), n)
        return sig(g * v["P"] / v["rho"] if no_root else sqrt(g * v["P"] / v["rho"]), n)
    k = v["k"]
    # the factor by which the quantity under the root (P, T, or 1/rho) must change for the speed to change k times
    f = k if lin else (sqrt(k) if root else k**2)
    if ask == "pbox":
        return sig(1 / f if inv else f, n)
    if ask == "temp":
        T = v["T0"] * f
        return sig(T if kelvin else T - v["T0"], n)
    if ask == "humid":
        return sig(1 / f if inv else f, n)
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
    "C03-M1": _m("C03-M1", ("vair",), newton=True),  # isothermal: Newton's sqrt(P/rho)
    "C03-M2": _m("C03-M2"),  # the correction is because sound is longitudinal
    "C03-M3": _m("C03-M3"),  # the correction is because sound has a long wavelength
    "C03-M4": _m("C03-M4", ("vair",), out=True),  # gamma outside the root
    "C03-M5": _m("C03-M5", ("vair",), no_root=True),  # forgets the square root
    "C03-M6": _m("C03-M6", ("pbox", "temp", "humid"), lin=True),  # speed proportional to P, T or 1/rho
    "C03-M7": _m("C03-M7", ("pbox", "temp", "humid"), root=True),  # square-roots the speed ratio instead of squaring
    "C03-M8": _m("C03-M8", ("pbox", "humid"), inv=True),  # turns the dependence round
    "C03-M9": _m("C03-M9", ("temp",), kelvin=True),  # gives the kelvin temperature as deg C
    "C03-M10": _m("C03-M10"),  # sqrt(P) rises, forgetting that the density rises with it
}
