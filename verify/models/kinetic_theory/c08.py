"""C08 Absorption, reflection and transmission: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "t":         coefficient of transmission from a and r (inputs a, r);
  "absorbed":  energy absorbed out of E falling on a body that reflects r and transmits t (inputs E, r, t);
  "diatherm":  which material is diathermanous (a named answer);
  "blackbody": the coefficients of a perfect blackbody (a named answer);
  "ferry":     what happens to radiation entering Ferry's blackbody (a named answer).

The key uses a + r + t = 1: every bit of the incident radiation is absorbed, reflected or transmitted.
"""
from sympy import Symbol, solve

from physics import sig

_x = Symbol("x", real=True)

NAMED = {
    "diatherm": {"key": Symbol("glass"), "C08-M4": Symbol("copper"), "C08-M5": Symbol("wood"), "C08-M6": Symbol("mirror")},
    "blackbody": {"key": Symbol("a1_r0_t0"), "C08-M7": Symbol("a0_r1_t0"), "C08-M8": Symbol("a0_r0_t1"), "C08-M9": Symbol("thirds")},
    "ferry": {"key": Symbol("absorbed_after_reflections"), "C08-M10": Symbol("reflected_out"), "C08-M11": Symbol("through_walls"), "C08-M12": Symbol("absorbed_by_air")},
}


def _solve(v, p, *, subtract=False, no_r=False, only_r=False):
    ask = p["ask"]
    if ask == "t":
        a, r = v["a"], v["r"]
        if subtract:
            return sig(a - r)
        if no_r:
            r = 0
        if only_r:
            a = 0
        (t,) = solve(a + r + _x - 1, _x)
        return sig(t)
    if ask == "absorbed":
        r, t = v["r"], v["t"]
        if subtract:
            return sig((r - t) * v["E"])
        if no_r:
            r = 0
        if only_r:
            t = 0
        (a,) = solve(_x + r + t - 1, _x)
        return sig(a * v["E"])
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return NAMED[p["ask"]]["key"]
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def _named(p, ask, m):
    _only(p, ask)
    return NAMED[ask][m]


def m1(v, p):
    """Subtracts one fraction from another instead of using a + r + t = 1."""
    _only(p, "t", "absorbed")
    return _solve(v, p, subtract=True)


def m2(v, p):
    """Ignores the reflected fraction."""
    _only(p, "t", "absorbed")
    return _solve(v, p, no_r=True)


def m3(v, p):
    """Uses only the reflected fraction, ignoring the other one given."""
    _only(p, "t", "absorbed")
    return _solve(v, p, only_r=True)


def m4(v, p):
    """Thinks good conductors of heat let heat radiation through."""
    return _named(p, "diatherm", "C08-M4")


def m5(v, p):
    """Thinks wood lets heat radiation through."""
    return _named(p, "diatherm", "C08-M5")


def m6(v, p):
    """Thinks a good reflector lets heat radiation through."""
    return _named(p, "diatherm", "C08-M6")


def m7(v, p):
    """Thinks a perfect blackbody absorbs nothing."""
    return _named(p, "blackbody", "C08-M7")


def m8(v, p):
    """Thinks a perfect blackbody transmits all the radiation."""
    return _named(p, "blackbody", "C08-M8")


def m9(v, p):
    """Thinks a perfect blackbody shares the radiation equally among a, r and t."""
    return _named(p, "blackbody", "C08-M9")


def m10(v, p):
    """Thinks radiation entering Ferry's sphere is reflected straight back out."""
    return _named(p, "ferry", "C08-M10")


def m11(v, p):
    """Thinks the radiation passes out through the walls."""
    return _named(p, "ferry", "C08-M11")


def m12(v, p):
    """Thinks the radiation is absorbed by the air inside."""
    return _named(p, "ferry", "C08-M12")


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6,
          "C08-M7": m7, "C08-M8": m8, "C08-M9": m9, "C08-M10": m10, "C08-M11": m11, "C08-M12": m12}
