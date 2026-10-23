"""C03 Surface tension: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "line":   force of surface tension on a diameter of a beaker's water surface (inputs r_cm, T);
  "dims":   the dimensions of surface tension (a named answer);
  "lowers": which change lowers the surface tension of water (a named answer);
  "ring":   extra pull on a thin ring of radius r_cm lifted out of water: two surfaces cling to it (inputs r_cm, T);
  "wire":   force to hold a sliding wire of length L_cm on a soap film, which has two surfaces (inputs L_cm, T).

The key multiplies the surface tension by the total length of surface edge touching the line or wire:
one edge for a line drawn in a liquid surface, two for a film or a ring (one surface on each side).
"""
from sympy import Symbol, pi

from physics import sig

NAMED = {
    "dims": {"key": Symbol("M1L0T_2"), "C03-M4": Symbol("M1L1T_2"), "C03-M5": Symbol("M1L2T_2"), "C03-M6": Symbol("M1L_1T_2")},
    "lowers": {"key": Symbol("detergent"), "C03-M7": Symbol("salt"), "C03-M8": Symbol("cooling"), "C03-M9": Symbol("larger_area")},
}


def _force(T, length, surfaces, *, invert=False):
    return T / length * surfaces if invert else T * length * surfaces


def _solve(v, p, *, circumference=False, radius=False, surfaces=None, metres=True, invert=False):
    ask = p["ask"]
    T = v["T"]
    if ask == "line":
        r = v["r_cm"] / 100
        L = 2 * pi * r if circumference else (r if radius else 2 * r)
        return sig(_force(T, L, surfaces or 1))
    if ask == "ring":
        r = v["r_cm"] / 100 if metres else v["r_cm"]
        L = r if radius else 2 * pi * r
        return sig(_force(T, L, surfaces or 2))
    if ask == "wire":
        L = v["L_cm"] / 100 if metres else v["L_cm"]
        return sig(_force(T, L, surfaces or 2, invert=invert))
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
    """Takes the whole circumference as the length of a diametrical line."""
    _only(p, "line")
    return _solve(v, p, circumference=True)


def m2(v, p):
    """Uses the radius as the length."""
    _only(p, "line", "ring")
    return _solve(v, p, radius=True)


def m3(v, p):
    """Miscounts the surfaces: two for a single liquid surface, or one for a film or a ring."""
    _only(p, "line", "ring", "wire")
    return _solve(v, p, surfaces={"line": 2, "ring": 1, "wire": 1}[p["ask"]])


def m4(v, p):
    """Gives the dimensions of force."""
    return _named(p, "dims", "C03-M4")


def m5(v, p):
    """Gives the dimensions of energy."""
    return _named(p, "dims", "C03-M5")


def m6(v, p):
    """Gives the dimensions of pressure."""
    return _named(p, "dims", "C03-M6")


def m7(v, p):
    """Thinks dissolving salt lowers the surface tension."""
    return _named(p, "lowers", "C03-M7")


def m8(v, p):
    """Thinks cooling lowers the surface tension."""
    return _named(p, "lowers", "C03-M8")


def m9(v, p):
    """Thinks the surface tension depends on the area of the surface."""
    return _named(p, "lowers", "C03-M9")


def m10(v, p):
    """Leaves centimetres unconverted."""
    _only(p, "ring", "wire")
    return _solve(v, p, metres=False)


def m11(v, p):
    """Turns F = T L around, taking F = T / L."""
    _only(p, "wire")
    return _solve(v, p, invert=True)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6,
          "C03-M7": m7, "C03-M8": m8, "C03-M9": m9, "C03-M10": m10, "C03-M11": m11}
