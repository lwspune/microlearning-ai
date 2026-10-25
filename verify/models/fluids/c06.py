"""C06 Excess pressure in drops and bubbles: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "drop_d":   diameter in mm of a water drop with excess pressure dp inside (inputs dp, T);
  "air_bubble": gauge pressure in an air bubble of radius r_mm just under water (inputs r_mm, T);
  "inside":   total pressure inside a drop of diameter d_mm, T in dyne/cm, outside at p0 (inputs d_mm, T_dyne, p0);
  "soap":     excess pressure inside a soap bubble of radius r_cm (inputs r_cm, T);
  "joined":   which way air flows between a small and a large soap bubble joined by a tube (a named answer).
params["sf"] (optional) sets the significant figures.

The key derives the excess pressure from energy: enlarging a sphere by dr, the excess pressure does work
dp dV = dp 4 pi r^2 dr, which must equal the surface energy of the new area, T (surfaces) 8 pi r dr.
It solves this for dp (or for r) in sympy. A drop, or an air bubble inside a liquid, has one surface; a soap
bubble in air has two.
"""
from sympy import Symbol, diff, pi, solve

from physics import sig

_r, _dp = Symbol("r", positive=True), Symbol("dp", positive=True)

FLOW = {
    "key": Symbol("small_to_large"),
    "C06-M8": Symbol("large_to_small"),
    "C06-M9": Symbol("no_flow"),
    "C06-M10": Symbol("until_equal"),
}


def _excess(r, T, surfaces):
    """dp from dp dV = T dA, with V = 4/3 pi r^3 and A = surfaces x 4 pi r^2."""
    dV, dA = diff(4 * pi * _r ** 3 / 3, _r), diff(surfaces * 4 * pi * _r ** 2, _r)
    (dp,) = solve(_dp * dV - T * dA, _dp)
    return dp.subs(_r, r)


def _rule(r, T, surfaces, *, two=True, invert=False):
    """The excess pressure, or a misconception's version of it."""
    if invert:
        return r / (2 * surfaces * T)
    dp = _excess(r, T, surfaces)
    return dp if two else dp / 2


def _solve(v, p, *, surfaces=None, two=True, invert=False, si=True, excess_only=False, diameter_as_r=False):
    ask = p["ask"]
    n = p.get("sf", 3)
    if ask == "drop_d":
        s = surfaces or 1
        if invert:
            (r,) = solve(_r / (2 * s * v["T"]) - v["dp"], _r)
        else:
            (r,) = solve(_rule(_r, v["T"], s, two=two) - v["dp"], _r)
        return sig(2 * r * 1000, n)
    if ask == "air_bubble":
        r = v["r_mm"] / 1000 if si else v["r_mm"]
        return sig(_rule(r, v["T"], surfaces or 1, two=two), n)
    if ask == "inside":
        d = v["d_mm"] / 1000
        r = d if diameter_as_r else d / 2
        dp = _rule(r, v["T_dyne"] / 1000, surfaces or 1)
        return sig(dp if excess_only else v["p0"] + dp, n)
    if ask == "soap":
        r = v["r_cm"] / 100 if si else v["r_cm"]
        return sig(_rule(r, v["T"], surfaces or 2, invert=invert), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return FLOW["key"] if p["ask"] == "joined" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses two surfaces, 4T/r, for a drop or for an air bubble inside a liquid."""
    _only(p, "drop_d", "air_bubble", "inside")
    return _solve(v, p, surfaces=2)


def m2(v, p):
    """Drops the factor 2, taking the excess pressure as T/r."""
    _only(p, "drop_d", "air_bubble")
    return _solve(v, p, two=False)


def m3(v, p):
    """Turns the formula upside down, putting r on top."""
    _only(p, "drop_d", "soap")
    return _solve(v, p, invert=True)


def m4(v, p):
    """Leaves millimetres or centimetres unconverted."""
    _only(p, "air_bubble", "soap")
    return _solve(v, p, si=False)


def m5(v, p):
    """Gives only the excess pressure when the total pressure inside is asked."""
    _only(p, "inside")
    return _solve(v, p, excess_only=True)


def m6(v, p):
    """Uses the diameter as the radius."""
    _only(p, "inside")
    return _solve(v, p, diameter_as_r=True)


def m7(v, p):
    """Uses one surface, 2T/r, for a soap bubble."""
    _only(p, "soap")
    return _solve(v, p, surfaces=1)


def _flow(p, m):
    _only(p, "joined")
    return FLOW[m]


def m8(v, p):
    """Thinks a bigger bubble has the higher pressure inside."""
    return _flow(p, "C06-M8")


def m9(v, p):
    """Thinks the excess pressure does not depend on the bubble's size."""
    return _flow(p, "C06-M9")


def m10(v, p):
    """Thinks air flows until the two bubbles are the same size."""
    return _flow(p, "C06-M10")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6,
          "C06-M7": m7, "C06-M8": m8, "C06-M9": m9, "C06-M10": m10}
