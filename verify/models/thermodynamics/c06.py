"""C06 Isothermal process: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "W_nT":   work, in J, done by n moles at T K going isothermally from V1 to V2 litres (inputs n, T, V1, V2);
  "W_pV":   work, in J, done by a gas starting at p1 Pa and V1 litres taken isothermally to V2 litres (inputs p1, V1, V2);
  "dV_pct": percentage change in volume when the pressure changes by dp_pct per cent isothermally (inputs dp_pct);
  "law":    what the first law gives for an isothermal change of an ideal gas (a named answer);
  "how":    the conditions for an isothermal change (a named answer).

The key integrates p dV along pV = nRT = constant in sympy, W = nRT ln(V2/V1), uses Boyle's law p1V1 = p2V2 for
the volume change, and the first law with ΔU = 0 (an ideal gas's U depends only on T), so Q = W.
"""
from sympy import Rational, Symbol, integrate, log, solve

from physics import BOOK, sig

R = BOOK["R"]
_V = Symbol("V", positive=True)
_x = Symbol("x", positive=True)
L = Rational(1, 1000)

NAMED = {
    "law": {"key": "dU0_QW", "C06-M4": "Q0_dUminusW", "C06-M5": "W0_dUQ", "C06-M7": "all_zero"},
    "how": {"key": "contact_slow", "C06-M4": "insulated_fast", "C06-M5": "rigid", "C06-M6": "constant_pressure"},
}


def _W(c, V1, V2, *, log10=False, upside=False, start_p=False):
    """Work along pV = c from V1 to V2 (m^3)."""
    if start_p:
        return c / V1 * (V2 - V1)
    if log10:
        return c * log(V2 / V1, 10)
    if upside:
        return c * log(V1 / V2)
    return integrate(c / _V, (_V, V1, V2))  # p = c / V


def _solve(v, p, *, same_pct=False, prop=False, fixed=False, **kw):
    ask, n = p["ask"], p.get("sf", 4)
    if ask == "W_nT":
        return sig(_W(v["n"] * R * v["T"], v["V1"] * L, v["V2"] * L, **kw), n)
    if ask == "W_pV":
        return sig(_W(v["p1"] * v["V1"] * L, v["V1"] * L, v["V2"] * L, **kw), n)
    if ask == "dV_pct":
        if fixed:
            return 0
        if same_pct:
            return sig(-v["dp_pct"], n)
        if prop:
            return sig(v["dp_pct"], n)
        ratio = 1 + v["dp_pct"] / 100  # p2 / p1
        (V2,) = solve(ratio * _x - 1, _x)  # p1 V1 = p2 V2, with V1 = 1
        return sig((V2 - 1) * 100, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(p, mid):
    if mid not in NAMED.get(p["ask"], {}):
        raise ValueError("does not apply to this item")
    return Symbol(NAMED[p["ask"]][mid])


def _work(p):
    if p["ask"] not in ("W_nT", "W_pV"):
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses log base 10 instead of ln."""
    _work(p)
    return _solve(v, p, log10=True)


def m2(v, p):
    """Turns the volume ratio upside down."""
    _work(p)
    return _solve(v, p, upside=True)


def m3(v, p):
    """Uses the starting pressure times ΔV, as if the pressure stayed fixed."""
    _work(p)
    return _solve(v, p, start_p=True)


def m4(v, p):
    """Mixes up isothermal and adiabatic."""
    return _named(p, "C06-M4")


def m5(v, p):
    """Mixes up isothermal and isochoric."""
    return _named(p, "C06-M5")


def m6(v, p):
    """Mixes up isothermal and isobaric."""
    return _named(p, "C06-M6")


def m7(v, p):
    """Thinks no heat flows when the temperature stays constant."""
    return _named(p, "C06-M7")


def _pct(p):
    if p["ask"] != "dV_pct":
        raise ValueError("does not apply to this item")


def m8(v, p):
    """Thinks the volume changes by the same percentage as the pressure, the other way."""
    _pct(p)
    return _solve(v, p, same_pct=True)


def m9(v, p):
    """Takes the volume proportional to the pressure."""
    _pct(p)
    return _solve(v, p, prop=True)


def m10(v, p):
    """Thinks a fixed temperature keeps the volume fixed."""
    _pct(p)
    return _solve(v, p, fixed=True)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6,
          "C06-M7": m7, "C06-M8": m8, "C06-M9": m9, "C06-M10": m10}
